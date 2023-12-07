const OPENWEATHER_ENDPOINT = 'https://api.openweathermap.org/data/2.5/onecall';
const OPENWEATHER_ICON_ENDPOINT = 'https://openweathermap.org/img/w/';

function getMarkerLngLat(marker) {
    const lngLat = marker.getLngLat();
    // mapbox lng gets weird when you cross -180
    // have to manually correct it
    if(lngLat.lng < -180) {
        lngLat.lng = 180 + (lngLat.lng + 180);
    } else if(lngLat.lng > 180) {
        lngLat.lng = (lngLat.lng - 180) - 180;
    }
    return lngLat;
}

async function searchForAddress() {
    const address = document.querySelector("#addressSearch"). value.trim();
    // $("#addressSearch").val().trim();
    if(address !== "") {
        document.querySelector("#my-spinner").classList.remove("my-hidden");
        // $("#my-spinner").removeClass("my-hidden");
        popup.remove();
        const newCoords = await geocode(address, MAPBOX_API_KEY);
        if(newCoords) {
            updateMarker(newCoords);
        }
    }
}

function updateMarker(coords) {
    // const flyTo = $("#flyto").is(":checked");
    const flyTo = document.querySelector("#flyto").checked;
    marker.setLngLat(coords).addTo(map);
    if(flyTo) {
        map.flyTo({
            center: coords,
            zoom: OPTIMAL_MAP_ZOOM,
            speed: 3
        });
    } else {
        map.jumpTo({
            center: coords
        });
    }
}

function getPopupDayHTML(dayInfo) {
    console.log("*** " + dayInfo.dt);
    console.log("*** " + new Date(dayInfo.dt * 1000).toDateString());

    const forecastDay = new dayjs.unix(dayInfo.dt).format('ddd');
    // console.log(forecastDate.toString());
    const hiTemp = dayInfo.temp.max.toFixed(0);
    const loTemp = dayInfo.temp.min.toFixed(0);
    const constImgSrc = `${OPENWEATHER_ICON_ENDPOINT}${dayInfo.weather[0].icon}.png`;
    return `
<div class="col-2 my-popup-col">
    <p>${forecastDay}</p>
    <p>${hiTemp}</p>
    <p>${loTemp}</p>
    <img src="${constImgSrc}">
</div>
`;
}

function getPopupHTML(address, dailyForecasts) {
    var popupHTML = `
<div class="container-fluid my-popup-container">
<div class="row">
    <div class="col-12 my-popup-row-headers">${address}</div>
</div>
<div class="row">
<div class="col-2 my-popup-row-headers">
    <p>Day</p>
    <p>High</p>
    <p>Low</p>
    <p></p>
</div>`;

    for (let i = 0; i < 5; i++) {
        popupHTML += getPopupDayHTML(dailyForecasts[i]);
    }
    popupHTML += '</div></div>';
    return popupHTML;
}

function getPopupError(statusText) {
    return `
<p>
    <b>ERROR: </b>${statusText}
</p>`
}

async function onMoveEnd() {
    var lngLat = marker.getLngLat();
    var address = await reverseGeocode(lngLat, MAPBOX_API_KEY);
    if(!address) {
        address = "Water. Lots of water.";
    }
    let popupHTML = "";
    fetch(`${OPENWEATHER_ENDPOINT}?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${OPENWEATHER_API_KEY}&units=imperial&cnt=5`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
        popupHTML = getPopupHTML(address, data.daily);
    }).catch(function(error) {
        popupHTML = getPopupError(error.statusText);
    }).finally(function() {
        popup = new mapboxgl.Popup()
            .setLngLat(lngLat)
            .setHTML(popupHTML)
            .addTo(map);
        marker.setPopup(popup)

        stopSpinner();
    });
}

function startSpinner() {
    // $("#my-spinner").removeClass("my-hidden");
    document.querySelector("#my-spinner").classList.remove("my-hidden");
}

function stopSpinner() {
    // $("#my-spinner").addClass("my-hidden");
    document.querySelector("#my-spinner").classList.add("my-hidden");
}

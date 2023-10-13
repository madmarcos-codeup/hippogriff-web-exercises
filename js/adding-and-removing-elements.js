const addCardButton = document.querySelector("header button");

const addCardSubmitButton = document.querySelector("div#addCardFormWrapper button");

const editButtons = document.querySelectorAll("button.edit");

const removeButtons = document.querySelectorAll("button.remove");

addCardButton.addEventListener('click', () => {
    document.querySelector("#addCardFormWrapper").classList.toggle('hideForm');
    document.querySelector("#addCardFormWrapper").classList.toggle('showForm');
});

addCardSubmitButton.addEventListener('click', event => {
    // very important !!!!!!!!!
    event.preventDefault();

    const newCardTitle = document.querySelector("#title").value;
    console.log(newCardTitle);
    const newCardImageLink = document.querySelector("#image").value;
    console.log(newCardImageLink);
    const newCardDescription = document.querySelector("#description").value;
    console.log(newCardDescription);

    const newCard = document.createElement("div");
    newCard.classList.add('gizmo');


    // Step 1: Create the element
    const newCardH2El = document.createElement("h2");
    // Step 2: Use JS methods to define the element's attributes
    // and content
    newCardH2El.innerText = newCardTitle;
    // Step 3: Add the element to the DOM
    newCard.appendChild(newCardH2El);

    const newCardImgEl = document.createElement("img");
    newCardImgEl.src = newCardImageLink;
    newCardImgEl.alt = newCardTitle;
    newCard.appendChild(newCardImgEl);

    const newCardPEl = document.createElement("p");
    newCardPEl.innerText = newCardDescription;
    newCard.appendChild(newCardPEl);

    const newCardEditButton = document.createElement("button");
    newCardEditButton.innerText = "Edit";
    newCardEditButton.addEventListener('click', handleEditButtonClick);
    newCard.appendChild(newCardEditButton);

    const newCardRemoveButton = document.createElement("button");
    newCardRemoveButton.innerText = "Remove";
    newCardRemoveButton.addEventListener('click', handleRemoveButtonClick);
    newCard.appendChild(newCardRemoveButton);

    // Add the new elements to the page
    document.querySelector("#gizmos").appendChild(newCard);
    addCardButton.click();
});


// function handleEditButtonClick(event){
//     const cardElements = event.target.parentElement.children;
//     for (let cardElement of cardElements) {
//         cardElement.addEventListener('mouseenter', ()=> {
//             cardElement.style.transform = "scale(1.2)";
//             cardElement.style.backgroundColor = "rgba(91, 83, 83, 1.0)";
//             cardElement.style.transition = "transform 0.4s ease-in, background-color 0.4s ease-in";
//         });
//         cardElement.addEventListener('mouseout', ()=> {
//             cardElement.style.transform = "unset";
//             cardElement.style.backgroundColor = "unset";
//         });
//     }
// }

function handleEditButtonClick(event){
    const headingText = event.target.parentElement.firstElementChild.innerText;
    console.log(headingText);

    const imageLink = event.target.parentElement.querySelector("img").getAttribute("src");
    console.log(imageLink);

    const description = event.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText;
    console.log(description);

    event.target.parentElement.firstElementChild.innerText = prompt("Enter the new title");

}

// document.querySelector("#gizmos").addEventListener('click', event=>{
//     if (event.target.innerText === "Edit") {
//         handleEditButtonClick(event);
//     }
// });

editButtons.forEach(editButton => {
    editButton.addEventListener('click', handleEditButtonClick);
});

function handleRemoveButtonClick (event) {
    if (confirm("Are you sure?")){
        event.target.parentElement.remove();
    }
}

removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', handleRemoveButtonClick);
});




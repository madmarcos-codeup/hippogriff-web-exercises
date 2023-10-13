const gizmoList = [
    {
        id: 1,
        title: "Lightsaber",
        imgSrc: "img/luke-with-lighbsaber.png",
        imgAlt: "Luke Skywalker tries the light saber in Obi Wan Kenobi's house on Tatooine",
        description: "A lightsaber is a plasma blade emitted from a hilt through a kyber crystal, which can be shut off at will. It can cut through almost anything, including blast doors, but takes specialized training to use well."
    },
    {
        id: 2,
        title: "Hoverboard",
        imgSrc: "img/hoverboard.png",
        imgAlt: "Marty McFly on the hoverboard in Back to the Future II",
        description: "A hoverboard is a skateboard that hovers above the ground and moves forward under its own power."
    },
    {
        id: 3,
        title: "Replicator",
        imgSrc: "img/replicator.png",
        imgAlt: "In a futuristic setting, a cup of coffee materializes out of a hazy fog",
        description: "A replicator is a device that transforms any matter, including waste or trash, into any other object or material. It can break anything down into its component atoms and rearrange those atoms into any shape."
    }
];

function generateCard(gizmoObject){
    const newCard = document.createElement("div");
    newCard.classList.add('gizmo');
    newCard.dataset.id = gizmoObject.id;

    const newCardH2El = document.createElement("h2");
    newCardH2El.innerText = gizmoObject.title;
    newCard.appendChild(newCardH2El);

    const newCardImgEl = document.createElement("img");
    newCardImgEl.src = gizmoObject.imgSrc;
    newCardImgEl.alt = gizmoObject.imgAlt;
    newCard.appendChild(newCardImgEl);

    const newCardP = document.createElement("p");
    newCardP.innerText = gizmoObject.description;
    newCard.appendChild(newCardP);

    const newCardEditButton = document.createElement("button");
    newCardEditButton.innerText = "Edit";
    newCardEditButton.addEventListener('click', handleEditButtonClick);
    newCard.appendChild(newCardEditButton);

    const newCardRemoveButton = document.createElement("button");
    newCardRemoveButton.innerText = "Remove";
    newCardRemoveButton.addEventListener('click', handleRemoveButtonClick);
    newCard.appendChild(newCardRemoveButton);

    return newCard;
}

const addCardButton = document.querySelector("header button");

const addCardSubmitButton = document.querySelector("div#addCardFormWrapper button");

const editButtons = document.querySelectorAll("button.edit");

const removeButtons = document.querySelectorAll("button.remove");

const gizmosDiv = document.querySelector("#gizmos");


addCardButton.addEventListener('click', () => {
    document.querySelector("#addCardFormWrapper").classList.toggle('hideForm');
    document.querySelector("#addCardFormWrapper").classList.toggle('showForm');
});

addCardSubmitButton.addEventListener('click', event => {
    // very important !!!!!!!!!
    event.preventDefault();

    const newCardObject = {
        // using a global variable inside a function is questionable
        id: gizmosDiv.children.length + 1,
        title: document.querySelector("#title").value,
        imgSrc: document.querySelector("#image").value,
        imgAlt: document.querySelector("#title").value,
        description: document.querySelector("#description").value
    }

    // Add the new elements to the page
    document.querySelector("#gizmos").appendChild(generateCard(newCardObject));
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

    const modalWrapper = document.querySelector("#editCardModalWrapper");
    modalWrapper.classList.remove("hideModal");
    modalWrapper.classList.add("displayModal");
}

window.addEventListener('click', event => {
    const modalWrapper = document.querySelector("#editCardModalWrapper");
    if (event.target === document.querySelector("#editCardModalWrapper")){
        modalWrapper.classList.remove("displayModal");
        modalWrapper.classList.add("hideModal");
    }
});


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

gizmoList.forEach(gizmo => gizmosDiv.appendChild(generateCard(gizmo)));




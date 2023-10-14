/*
    this array of objects is the basis for our
    website content. Each array will be a card.
*/

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

// To see the structure of the array in table form:
// console.table(gizmoList);

/*
* This function generates an HTML card based on an object
* from the gizmosList array.
* Each object has the same structure:
* id, title, image src attribute, image alt attribute, description
* The function creates a div to hold the content
* Then it creates h2, img, and p elements and
* appends them to the div
* The h2 gets its content from the object title property
* The p gets its content from the description property
* The img element gets src and alt attributes
*
* Notice that the div gets a dataset id attribute
* This will look like <div data-id = someNumber>
*
* The function returns the div with all its children
*
* Note that the function takes an object as its argument
* Every time it runs, it produces one div based on one object
* */
function generateCard(gizmoObject){
    // Create a div, give it class="gizmo" and a data-id
    const newCard = document.createElement("div");
    newCard.classList.add('gizmo');
    // This produces the data-id attribute
    // It will be used in the edit-card feature
    newCard.dataset.id = gizmoObject.id;

    // Create an h2 element, add content, and append to the div
    const newCardH2El = document.createElement("h2");
    newCardH2El.innerText = gizmoObject.title;
    newCard.appendChild(newCardH2El);

    // Create an image, give it src and alt attributes
    // Then append it to the div
    const newCardImgEl = document.createElement("img");
    newCardImgEl.src = gizmoObject.imgSrc;
    newCardImgEl.alt = gizmoObject.imgAlt;
    newCard.appendChild(newCardImgEl);

    // Create a p element, give it content, append to the div
    const newCardP = document.createElement("p");
    newCardP.innerText = gizmoObject.description;
    newCard.appendChild(newCardP);

    // Create an edit button
    // Add an event handler for the edit button
    // Then append it to the div
    const newCardEditButton = document.createElement("button");
    newCardEditButton.innerText = "Edit";
    newCardEditButton.addEventListener('click', handleEditButtonClick);
    newCard.appendChild(newCardEditButton);

    // Create a delete button
    // Add an event handler to the delete button
    // Append the button to the div
    const newCardRemoveButton = document.createElement("button");
    newCardRemoveButton.innerText = "Remove";
    newCardRemoveButton.addEventListener('click', handleRemoveButtonClick);
    newCard.appendChild(newCardRemoveButton);

    // Return the div
    return newCard;
}

// Selectors =========================

const addCardButton = document.querySelector("header button");

const addCardSubmitButton = document.querySelector("div#addCardFormWrapper button");

const editButtons = document.querySelectorAll("button.edit");

const editCardSubmitButton = document.querySelector("#editCardForm").querySelector("button");

const removeButtons = document.querySelectorAll("button.remove");

const gizmosDiv = document.querySelector("#gizmos");

/*
* Dynamically adding a card on the page =========================
* */

/*
* When the "Add Card" Button is pressed,
* if the form is showing, it is hidden
* if the form is hidden, it is shown
* */
addCardButton.addEventListener('click', () => {
    document.querySelector("#addCardFormWrapper").classList.toggle('hideForm');
    document.querySelector("#addCardFormWrapper").classList.toggle('showForm');
});

/*
* When the add card form is submitted
* */

addCardSubmitButton.addEventListener('click', event => {
    // very important !!!!!!!!!
    event.preventDefault();

    /*
    * Create an object using the form input values
    * */
    const newCardObject = {
        // using a global variable inside a function is questionable
        // This sets the id of the new gizmos object
        // to equal the current number of gizmos plus one
        id: gizmosDiv.children.length + 1,
        title: document.querySelector("#title").value,
        imgSrc: document.querySelector("#image").value,
        imgAlt: document.querySelector("#title").value,
        description: document.querySelector("#description").value
    }

    /*
    * Add the new elements to the page
    * This line selects the div within which all the cards live
    * (the cards wrapper div, #gizmos
    * It then calls the generateCard function,
    * passing it the object we just created.
    * This returns a new card div
    * It appends that div to the cards wrapper div
    * */
    document.querySelector("#gizmos").appendChild(generateCard(newCardObject));

    /*
    * Finally, we programmatically generate a click
    * on the add card button -- this closes the form
    * */
    addCardButton.click();
});

/*
* Handle a click on any edit button
*
* */

function handleEditButtonClick(event){

    // First we select the card to edit.
    // This is the edit button's parent
    // Since the edit button is the event target,
    // The card is the event target's parent element
    const cardToEdit = event.target.parentElement;

    /*
    * Show the edit card modal
    * */
    const modalWrapper = document.querySelector("#editCardModalWrapper");
    modalWrapper.classList.remove("hideModal");
    modalWrapper.classList.add("displayModal");

    /*
    * We want to pre-populate the edit form inputs
    * with the current content. To do this,
    * We select the form
    * Then we get the gizmo id, title, image src, and description
    * from the card
    * Finally we set the initial value of the form inputs
    * to equal the current value of the card
    * Note that input 4, the id input, is a hidden input
    * So the user does not actually see it or interact with it
    * */

    const editCardForm = document.querySelector("#editCardForm");

    const id = cardToEdit.dataset.id;
    const title = cardToEdit.querySelector("h2").innerText;
    const image = cardToEdit.querySelector("img").getAttribute("src");
    const description = cardToEdit.querySelector("p").innerText;

    editCardForm[1].value = title;
    editCardForm[2].value = image;
    editCardForm[3].value = description;
    editCardForm[4].value = id;
}

/*
* To close the edit card form modal,
* you can click anywhere on the page,
* except the form itself
* Since the edit card modal wrapper has 100% width and 100% height,
* clicking anywhere will trigger the selector,
* except that the form itself is not its wrapper,
* so clicking on the form will not close the modal
*
* */
window.addEventListener('click', event => {
    const modalWrapper = document.querySelector("#editCardModalWrapper");
    if (event.target === document.querySelector("#editCardModalWrapper")){
        modalWrapper.classList.remove("displayModal");
        modalWrapper.classList.add("hideModal");
    }
});

/*
* There is also a close-modal button on the form
* */

document.querySelector("#close").addEventListener('click', event => {
    const modalWrapper = document.querySelector("#editCardModalWrapper");
    modalWrapper.classList.remove("displayModal");
    modalWrapper.classList.add("hideModal");
});

/*
* Handle submission of the edit card form
* We get the id, title, image link, and description
* from the form inputs (the id is a hidden input,
* pre-populated when the card is created)
*
* We get the reference to the card we want to edit
* To do this we use an attribute selector
* We reference the data-id attribute in the selector
*
* We change the content of the card based on the form input values
*
* We end by programmatically clicking on the form wrapper
* This closes the modal
* */

editCardSubmitButton.addEventListener('click', event => {
    event.preventDefault();
    // Get the values input into the form
    const cardId = document.querySelector("#editCardId").value;
    const newTitle = document.querySelector("#editCardTitle").value;
    const newImageLink = document.querySelector("#editImageLink").value;
    const newDescription = document.querySelector("#editImageDescription").value;

    // Get reference to the card we want to edit
    // Use an attribute selector to do this
    const cardToEdit = document.querySelector(`[data-id="${cardId}"]`);

    // Change the card content
    cardToEdit.querySelector("h2").innerText = newTitle;
    cardToEdit.querySelector("img").setAttribute("src", newImageLink);
    cardToEdit.querySelector("p").innerText = newDescription;

    // Close the modal
    document.querySelector("#editCardModalWrapper").click();
});

/*
* One strategy for adding event listeners
* To dynamically created elements:
* You can add the listener to the element's parent
* Then use a conditional to listen for clicks on the descendants
*
* The other strategy, which we are using here,
* is to add the handler when the element is created
* */
// document.querySelector("#gizmos").addEventListener('click', event=>{
//     if (event.target.innerText === "Edit") {
//         handleEditButtonClick(event);
//     }
// });


/*
* Add event handlers to all edit buttons that are hard-coded on the page
* */
editButtons.forEach(editButton => {
    editButton.addEventListener('click', handleEditButtonClick);
});

/*
* Function to remove a card when the "remove" button is clicked
* */
function handleRemoveButtonClick (event) {
    if (confirm("Are you sure?")){
        event.target.parentElement.remove();
    }
}

/*
* Add the remove-card function as event handler
* to all the delete-card buttons
* that are hard-coded on the page
* */
removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', handleRemoveButtonClick);
});

/*
* Generate content from the gizmoList array when the page is loaded
* */
gizmoList.forEach(gizmo => gizmosDiv.appendChild(generateCard(gizmo)));




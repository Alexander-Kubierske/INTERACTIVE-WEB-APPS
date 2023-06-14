// scripts.js

import { createOrderHtml, html, updateDraggingHtml, moveToColumn} from './view.js'
import { TABLES, COLUMNS, state, createOrderData, updateDragging} from './data.js';

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

/**
 * A handler that checks what is being dragged and puts the id of the dragged object
 * into the html object from view.js to pass to other functions
 *
 * @param {Event} event 
 */
const handleDragStart = (event) => {
    // finds the element that we are dragging
    const draggingOrder = event.target.closest('.order');
    // edits the other item in view.js
    html.other.draggingOrderID = draggingOrder.getAttribute('data-id');
}

/**
 * This handler moves the item we are dragging and clears all hover effects
 * when we stop dragging.
 *
 * @param {Event} event 
 */
const handleDragEnd = (event) => { 
    event.preventDefault();
    // here we destruct to find what column the dragged item is over
    const {dragging:{over}} = state;
    // here we create teh id we will pass to the moveToColumn function
    const id = html.other.draggingOrderID;
    const newColumn = over;
    // here we find which column the element was in before we dragged
    const oldColumn = event.currentTarget.getAttribute('data-column');

    // here we see if the element has been dragged to a new column
    if (newColumn !== oldColumn){
        moveToColumn(id, newColumn)
    };

    // here we reset focus and make sure that the over item is null
    // this resets the drag state so that the highlighted column returns to 
    // the nothing being dragged state.
    updateDraggingHtml({ over: null })
    html.add.title.focus();
}

/**
 * A handler that fires when a user clicks the data-help-cancel button or the
 * data-help button to display the dialogue content or minimize it 
 * then it refocuses onto the data-add button 
 */
const handleHelpToggle = () => {
    // when this is clicked we need to open or close the dialogue
    const current = html.help.overlay.open;

    if (current) { /**is open when clicked */
        html.help.overlay.open = false;
        html.help.overlay.close();
        html.other.add.focus()
    } else { /**is closed when clicked */
        html.help.overlay.open = true;
        html.help.cancel.focus()
    }

}

/**
 * A handler that fires when a user clicks the data-add button or the
 * data-add-cancel button to display the dialogue content or minimize it 
 * then it refocuses onto the data-add button 
 */
const handleAddToggle = () => {
    const current = html.add.overlay.open;
    // here we create a variable to manipulate on or off
    
    if (current) {
        // here we see if current = true (ie it is open) if so we close it and reset the form fields
        // as well as focus back to the add button
        html.add.overlay.open = false;
        html.add.form.reset();
        html.other.add.focus()
    } else {
        // if current is equal to false we set open to true and focus the first field
        html.add.overlay.open = true;
        html.add.title.focus();
    };
       
};

/**
 * A handler that fires when a user clicks the submit button. 
 * the handler creates the order data a user has input and creates an html element from that info.
 * it then resets the dialogue inputs for the next order and refocuses.
 * 
 */
const handleAddSubmit = (event) => {
    //here we stop the web page from reloading after we submit the data
    event.preventDefault();

    // here we create an object with the user input values
    const props = {
        title: html.add.title.value,
        table: html.add.table.value,
        column: `ordered`
    }

    // here we call the function to create all the data of the order passing it the user inputs
    const order = createOrderData(props)
    // here we find the ordered element and add an element created by the createOrderHtml
    // function and we pass that function the result of createOrderData function
    document.querySelector('[data-column="ordered"]').appendChild(createOrderHtml(order))
    // we then close the dialogue and reset its fields 
    html.add.overlay.open = false;
    html.add.form.reset();
}

/**
 * A handler that fires when a user clicks on the element representing an order. 
 * This handler then opens the dialogue and populates it with the current order elements values.
 * this also stores the element we plan to edit in the html object in view.js
 */
const handleEditToggle = (event) => {
    const current = html.edit.overlay.open;
    // here we create a variable to manipulate on or off
    const targeted = event.target.closest('[data-id]');
    // here we target the parent element id value of the element that triggered the event
    if (targeted) {
        html.edit.currentOrder = targeted
    // here we see if the parent id is valid to edit 
    // and then edit the item value of the array on view.js to have 
    // a value equal to the div that matches the target id
    }

    // this stops the on click event from firing if we didn't click an order object
    if (targeted == undefined) {
        return
    }
    
    // this again handles opening and closing and refocusing if canceled
    if (current) {
        html.edit.overlay.open = false;
        html.edit.currentOrder = null;
        html.other.add.focus()
    } else {
        // here we just make sure that the values present in the input fields 
        // are the same as the div we are proposing to edit
        document.querySelector('[data-edit-title]').value = targeted.querySelector('[data-order-title]').textContent;
        document.querySelector('[data-edit-table]').value = targeted.querySelector('[data-order-table]').textContent;
        html.edit.overlay.open = true;
    };
}

/**
 * A handler that fires when a user clicks the submit button.
 * this handler replaces the information from the currentOrder item with user input info
 * it also changes the status of the order by moving the element to the current status of the order
 */
const handleEditSubmit = (event) => {
    event.preventDefault();

    // here we retrieve the element that we want to edit
    const currentEdit = html.edit.currentOrder

    // we then check if we are working on the current stored div
    if (currentEdit) {
        // here we find the values that the current div has
        const editTitle = document.querySelector('[data-edit-title]').value;
        const editTable = document.querySelector('[data-edit-table]').value;
        const editStatus = document.querySelector('[data-edit-column]').value;
        // here we see what the parent attribute of the edit div is to see what state it is in
        const currentStatus = currentEdit.parentElement.getAttribute('data-column');
        // here we get the id of the currentEdit to pass to moveToColumn
        const id = currentEdit.getAttribute('data-id')

        // here we make the values of the current div equal to those that were input
        currentEdit.querySelector('[data-order-title]').innerText = editTitle;
        currentEdit.querySelector('[data-order-table]').innerText = editTable;
            // here we see if the user changed the state of the order
            if (currentStatus !== editStatus) {
                moveToColumn(id, editStatus)
            }
    }
    // we then close the dialogue and refocus
    html.edit.overlay.open = false;
    html.other.add.focus()

}

/**
 * this handler fires when the delete element is clicked 
 * and it removes the element that we are currently editing
 */
const handleDelete = () => {
    // here we identify the element which we are editing
    const currentEdit = html.edit.currentOrder
    // we then remove that element from our DOM?
    currentEdit.remove()
    // we then close the dialogue and refocus
    html.edit.overlay.open = false;
    html.other.add.focus()
}

// here we create a new item in the view.js html object and give it the value null. 
// we do this so we can store an element to that object in our functions
html.edit.currentOrder = null;
html.other.draggingOrderID = null;

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}
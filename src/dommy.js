
import {TaskManager} from './formLogic.js'
import {init} from './formLogic.js'
//reference html content
const htmlBody = document.querySelector('#content')
let taskManager
function domCommands(){
    //todo list creation button
    let createButton = document.createElement('button')
    createButton.classList.add('buttonStyling')
    createButton.textContent = 'Create to-do task'
    createButton.addEventListener('click', showForm)
    htmlBody.appendChild(createButton)
} domCommands()

function resetFormFields(){
    const form = document.querySelector('#formId')
    form.reset()
}

function showForm(){
    // Check if form already exists
    const existingForm = document.querySelector('#formId')
    if (existingForm) {
        console.log('Form already exists')
        return // Exit the function early
    }
    const form = document.createElement('form');
    form.setAttribute('id', 'formId')
    //Name
    const label1 = document.createElement('label');
    label1.textContent = 'Enter the name:';
    label1.setAttribute('for', 'nameInput'); // Link label to input by ID

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'nameInput');
    input1.setAttribute('name', 'Task')
    
//Description
const label2 = document.createElement('label');
    label2.textContent = 'Enter description:';
    label2.setAttribute('for', 'descriptionInput'); // Link label to input by ID

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', 'descriptionInput');
    input2.setAttribute('name', 'Description')
//Due Date
const label3 = document.createElement('label');
    label3.textContent = 'Enter date:';
    label3.setAttribute('for', 'dateInput'); // Link label to input by ID

    const input3 = document.createElement('input');
    input3.setAttribute('type', 'date');
    input3.setAttribute('id', 'dateInput');
    input3.setAttribute('name', 'Date due')
//Priority
const fieldset = document.createElement('fieldset')
const legend = document.createElement('legend')
legend.textContent = 'Select the priority of task:'
fieldset.appendChild(legend)

const priorityButtons = [
    {id: 'low', value: 'Low', label: 'Low'},
    {id: 'medium', value: 'Medium', label: 'Medium'},
    {id: 'high', value: 'High', label: 'High'}
] 

priorityButtons.forEach(button =>{
    const div = document.createElement('div')

    const radioInput = document.createElement('input')
    radioInput.setAttribute('type', 'radio')
    radioInput.setAttribute('id', button.id)
    radioInput.setAttribute('value', button.value)
    radioInput.setAttribute('name', 'Priority');

    const label4 = document.createElement('label')
    label4.setAttribute('for', button.id)
    label4.textContent = button.label

    div.appendChild(radioInput)
    div.appendChild(label4)
    fieldset.appendChild(div)
    
});
//Notes
    const label5 = document.createElement('label')
    label5.textContent = 'Enter notes:';
    label5.setAttribute('for', 'noteInput'); // Link label to input by ID

    const input5 = document.createElement('input');
    input5.setAttribute('type', 'text');
    input5.setAttribute('id', 'noteInput');
    input5.setAttribute('name', 'Notes')
//submitButton
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
//SET ATTRIBUTE SO BUTTON SUBMITS DATA FROM FORM!!!!

   //form.append(label, input, submitButton)
    form.appendChild(label1);
    form.appendChild(input1);
    form.appendChild(label2)
    form.appendChild(input2)
    form.appendChild(label3)
    form.appendChild(input3)
    form.appendChild(fieldset)
    form.appendChild(label5)
    form.appendChild(input5)
    form.appendChild(submitButton);
    
    htmlBody.appendChild(form)
    if (!taskManager) {
        taskManager = new TaskManager();
    } else {
        // If manager already exists, just attach the listener
        taskManager.init();
    }
} 



/*===================================================*/

function hideForm(){
    const form = document.querySelector('#formId')
    form.remove()
}

function showTask(){

}

export {domCommands}
export {showForm}
export {showTask}
export {hideForm}
export {resetFormFields}
export const greeting = 'Hello, Odinite';
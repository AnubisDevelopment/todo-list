import {domCommands} from './dommy.js'
import {showForm} from './dommy.js'
import {showTask} from './dommy.js'
import {hideForm} from './dommy.js'

//HAVING TROUBLE RETURNING OBJECT DATA AS PUSHED ARRAY???
//CHATGPT HELP

class TaskManager{
    constructor (){
        this.taskArray = []
        this.init()
    }
    init(){
        const submitButton = document.querySelector('button[type="submit"]')
        if (submitButton){
        submitButton.addEventListener('click', (e) => {
            e.preventDefault()
            this.handleFormSubmission()
            })
        }
    }
    handleFormSubmission(){
        const objectData = this.gatherData()
        if (objectData){
            this.addTask(objectData)
            this.displayTasks()
            console.log('Tasks:', this.taskArray)
        }
    }
    gatherData(){
        const form = document.querySelector('#formId')
        if(!form) return null;
        //gather form data
        const formData = new FormData(form)
        //convert to js object
        const objectData = Object.fromEntries(formData.entries())
        //return Object.fromEntries(formData.entries())
        
        console.log(objectData)
        return objectData
    }
    addTask(taskData){
        this.taskArray.push(taskData)
    }
    getTasks(){
        return this.taskArray
    }
    displayTasks(){
        let lastElement = this.taskArray[this.taskArray.length-1]
        let htmlBody = document.querySelector("#content")
        let displayData = document.createElement('div')
        if (!lastElement) {
            console.log('No tasks to display')
            return
        }
        for (let [key,value]of Object.entries(lastElement)){
           let p = document.createElement('p')
           p.textContent = `${key}: ${value}`
           displayData.appendChild(p)
        }
        htmlBody.appendChild(displayData)
    };
}
//const taskManager1 = new TaskManager()

/*================================================*/

/*
function formSubmission(){
    const form = document.querySelector('#formId')
    const submitButton = document.querySelector('button[type="submit"]')

    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        
        //gatherData()
        //hideForm()
        createArrayData()
        //arrayOfTasks()
        //pushArray(objectData)
        //console.log(taskArray)
        
    })
} 

//SOMETHINGS NOT WORKING WITH THE CALLING OF FUNCTIONS
//AND PUSHING TO ARRAY...
function createArrayData(){
    let taskArray = []
    gatherData()
    function pushArray(obj){
        return taskArray.push(obj)
    }
    function gatherData(){
    const form = document.querySelector('#formId')
    //gather form data
    const formData = new FormData(form)
    //convert to js object
    let objectData = Object.fromEntries(formData.entries())
    //console.log(objectData)
    pushArray(objectData)
    //console.log(taskArray)
}  //gatherData()
}
*/

export {TaskManager}
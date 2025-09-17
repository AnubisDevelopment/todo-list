import './styles.css';
import {domCommands} from './dommy.js'
import { greeting } from './dommy.js';


(function() {
    class TodoClass{
        constructor(title, description, dueDate, priority, notes){
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.notes = notes
        }
    } 
    window.TodoClass = TodoClass //or export module here
}) ()
let todo1 = new TodoClass('hello', 'this is the first to-do',  '1/2/18', 'low', 'none')
console.log(todo1)

console.log(greeting)

/* Core Functionality
 1: To-do list utilizes class/constructor
and holds various properties and array.
When new todo is called, it creates the new
list. Build in console first.
-----
3: When dom button is clicked I want to create a
new object, and push said object into my array.
---------------
2: Make new module housing all dom commands.
--------------------------
5: Populate html with styled todo component when
a new object is created. Adding classes, styles
to js and css. 
------------------------------------
4:(Meat and Potatos): Create functionality for
object in array to be deleted. Set ability to 
update all the properties on object. Maybe 
checkboxes?
*/
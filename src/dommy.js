
function domCommands(){
    //reference html content
    const htmlBody = document.querySelector('#content')
    //todo list creation button
    let createButton = document.createElement('button')
    createButton.classList.add('buttonStyling')
    //append all elements in end
    htmlBody.appendChild(createButton)

} domCommands()








export {domCommands}
export const greeting = 'Hello, Odinite';
const inputTag = document.getElementById("todoInput")
const btn = document.getElementById("addTodoBtn")
let text = ""
let listOfTodo = []
const previousTodo = JSON.parse(localStorage.getItem('todos'))
// console.log(previousTodo)
listOfTodo=previousTodo


btn.addEventListener("click", ()=>{
    // console.log("clicked")
    text=inputTag.value
    // console.log(text)
    listOfTodo.push(text)
    inputTag.value=""
    localStorage.setItem("todos",JSON.stringify(listOfTodo))

})



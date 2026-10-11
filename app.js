const inputTag = document.getElementById("todoInput")
const btn = document.getElementById("addTodoBtn")
const todoList = document.getElementById("todoList")
let text = ""
let listOfTodo = []
const previousTodo = localStorage.getItem('todos')
// console.log(previousTodo)
if (previousTodo) {
    listOfTodo = JSON.parse(previousTodo)
}




let populateTodos = () => {
    let string = ""
    for (const todo of listOfTodo) {
        string += `<li class="todo-item" ${todo.isCompleted ? "completed" : ""}>
                    <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
                    <span class="todo-text">${todo.title}</span>
                    <button class="delete-btn">×</button>
                </li>`
    }
    todoList.innerHTML = string
}

btn.addEventListener("click", () => {
    // console.log("clicked")
    text = inputTag.value
    // console.log(text)
    let todo = {
        title: text,
        isCompleted: false
    }
    listOfTodo.push(todo)
    inputTag.value = ""
    localStorage.setItem("todos", JSON.stringify(listOfTodo))
    populateTodos()


})
populateTodos()


const checkbox = document.querySelectorAll(".todo-checkbox");
checkbox.forEach((element) => {
    // console.log("checked")
element.addEventListener("click", (e)=>{
    if(e.target.checked){
        // console.log(e.target.checked)
        element.parentNode.classList.add("completed")}
        else{
            element.parentNode.classList.remove("completed")
       
        

        
    }

})    
})












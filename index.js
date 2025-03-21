const tasks = [
    {id:111, content:"להכין קוגל", completed:true},
    {id:222, content:"לסדר את השולחן", completed:false},
    {id:333, content:"לגהץ חולצות", completed:false}
]

function renderTasks(){
    tasksElement = tasks.map(t=>   `<div>${t.content}  ${t.completed==true?'V':'X'} </div>`)
    tasksStr = tasksElement.join("");
    document.body.innerHTML+=tasksStr;
}

renderTasks();
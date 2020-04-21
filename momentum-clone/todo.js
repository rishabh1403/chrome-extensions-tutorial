$(function () {
  let tasks = []

  function saveToStorage(tasks){

  }

  function getFromStorage(callback){
    chrome.storage.sync.get(['tasks'],function(result){
      console.log(result)
      if(result && result.tasks){
        callback(result.tasks)
      }else{
        callback([])
      }
    })
  }

  getFromStorage(function(tasks){
    tasks = tasks
  })

  function printTasks() {
    let str = "";
    $("#tasks").empty()
    for (const task of tasks) {
      str = `${str}
    <li class=${task.done ? "complete" : "incomplete"}>
    <input ${task.done ? "checked" : ""} class="done" type="checkbox"/>
    ${task.name}
    <button class="delete">Delete</button>
    </li>`
    }
    $("#tasks").append(str)
    
  }

  printTasks()

  $(document).on("click", ".done", function () {
    console.log($(this).parent().index())
    tasks[$(this).parent().index()].done = !tasks[$(this).parent().index()].done;
    console.log(tasks)
    printTasks()
    saveToStorage({tasks})
  })

  $(document).on("click", ".delete", function () {
    console.log($(this).parent().index())
    const index = $(this).parent().index();
    tasks.splice(index, 1)
    console.log(tasks)
    printTasks()
    saveToStorage({tasks})
  })
})
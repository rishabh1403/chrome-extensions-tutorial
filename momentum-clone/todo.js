$(function () {
  function printTasks() {
    getFromStorage(function (tasks) {
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
    })
  }

  function saveToStorage(tasks) {
    chrome.storage.sync.set({ tasks }, function () {
      printTasks()
    })
  }

  function getFromStorage(callback) {
    chrome.storage.sync.get(['tasks'], function (result) {
      if (result && result.tasks) {
        callback(result.tasks)
      } else {
        callback([])
      }
    })
  }



  printTasks()

  $(document).on("click", ".done", function () {
    const that = this
    getFromStorage(function (tasks) {
      tasks[$(that).parent().index()].done = !tasks[$(that).parent().index()].done;
      saveToStorage(tasks)
    })
  })

  $(document).on("click", ".delete", function () {
    const that = this
    getFromStorage(function (tasks) {
      const index = $(that).parent().index();
      tasks.splice(index, 1)
      saveToStorage(tasks)
    })
  })

  $("#addTask").on("click", function () {
    const value = $("#newTask").val();

    getFromStorage(function (tasks) {
      tasks.push({
        name: value,
        done: false
      })
      saveToStorage(tasks)
    })
  })

  $("#todo").on("click", function () {
    $("#card").fadeToggle();
  })

})
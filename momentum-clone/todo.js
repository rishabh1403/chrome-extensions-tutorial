$(function () {
  const tasks = [
    { name: "One", done: false },
    { name: "two", done: true },
    { name: "three", done: false },
    { name: "four", done: false }
  ]

  function printTasks() {
    let str = "";
    $("#tasks").empty()
    for (const task of tasks) {
      str = `${str}
    <li>
    <input class="done" type="checkbox"/>
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
  })

  $(document).on("click", ".delete", function () {
    console.log($(this).parent().index())
    const index = $(this).parent().index();
    tasks.splice(index, 1)
    console.log(tasks)
    printTasks()
  })
})
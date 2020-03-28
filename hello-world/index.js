document.getElementById("nameInput").addEventListener("keyup", changeName);

function changeName(){
  const value = document.getElementById("nameInput").value;

  document.getElementById("name").innerText = value.toUpperCase();
}
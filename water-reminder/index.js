// add event listener on button

// grab the value from input
// create an alarm for that value

document.getElementById("add").addEventListener("click", remind);

function remind(){
  const minutes = parseInt(document.getElementById("num").value);

  if(isNaN(minutes)){
    console.log("It's not a number");
  }else{
    console.log(minutes);
  }

  // create a reminder here
}
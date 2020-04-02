

// if the day is saunday, then we'll Allowed
// else blocked

const date = new Date();
if(date.getDay() === 4){
  alert("Allowed to visit");
}else{
  document.write("You shall not pass!!!")
}
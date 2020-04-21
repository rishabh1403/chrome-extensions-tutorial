$(function () {

  function padWithZero(num) {
    return num < 10 ? "0" + num : num
  }
  
  function getTime() {
    const time = new Date();

    const hours = padWithZero(time.getHours());
    const minutes = padWithZero(time.getMinutes());
    const seconds = padWithZero(time.getSeconds());

    const timeText = `${hours}:${minutes}:${seconds}`

    $("#time").text(timeText);
  }

  setInterval(getTime, 1000);
})
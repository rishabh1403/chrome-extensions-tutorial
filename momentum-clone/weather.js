$(function(){
  // check if browser supports location
  // if yes, we will ask browser for location
  // call api with location details and get the weather data

  function getLocation(){
    if(!navigator.geolocation){
      console.log("Geolocation not supported by browser")
      return
    }

    function success(position){
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log(lat, long)
    }

    function error(){
      console.log("Unable to get location")
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }

  getLocation()
})
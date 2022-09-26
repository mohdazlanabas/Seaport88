alert("Hello! Seaportian 88 | PENGUMUMAN | ANNOUNCEMENT | 公告 | அறிவிப்பு<");

var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
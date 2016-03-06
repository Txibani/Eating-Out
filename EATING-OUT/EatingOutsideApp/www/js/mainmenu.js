
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var value = window.localStorage.getItem('rest');
    $('.restaurantLogo').html(value);
}
function loadGoogleMapsAPI(callback) {
	callback();
}

loadGoogleMapsAPI(function () {
  var latitude = 52.34342350442296;
  var longitude = 4.881056114904925;
  var themeSelected = "dream";

  var mapOptions = {
    zoom: 14,
    center: { lat: latitude, lng: longitude },
    fullscreenControl: false,
    streetViewControl: false,
    styles: []
  };
  var map = new google.maps.Map(document.querySelectorAll("#map")[0], mapOptions);

  new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
  });

  var id = setInterval(function () {
    var buttons = document.querySelectorAll("#map button");
    if (!buttons || buttons.length === 0) return;
    Array.from(buttons).forEach(function (btn) {
      btn.classList.add("notEditable");
    });
    if (buttons.length > 0) clearInterval(id);

    setTimeout(function () {
      clearInterval(id);
    }, 1700);
  }, 100);
});

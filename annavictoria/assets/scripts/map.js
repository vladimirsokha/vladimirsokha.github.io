function initMap() {
    // The location of Uluru
    const uluru = { lat: 49.79208785009081, lng: 30.132761409783935 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
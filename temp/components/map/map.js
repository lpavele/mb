import './map.scss';

ymaps.ready(initMap);

var myMap, myPlacemark;

function initMap() {
    console.log('ready...');
    var placeCoords = [53.816870, 27.502842];

    myMap = new ymaps.Map('map', {
        center: placeCoords,
        zoom: 12,
        controls: ["zoomControl", "geolocationControl", "trafficControl", "typeSelector", "fullscreenControl"]
    });
    myMap.behaviors.disable(['scrollZoom']);
    myPlacemark = new ymaps.Placemark(placeCoords, {},
        {
            preset: 'islands#blueDotIcon'
        });
    myMap.geoObjects.add(myPlacemark);
}
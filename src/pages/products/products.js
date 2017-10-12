import '../base';

ymaps.ready(init);
var myMap, myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [53.821372, 27.519022],
        zoom: 13
    });
    myPlacemark = new ymaps.Placemark([53.816852, 27.502800],{hintContent: 'МодульБетон'}, {preset: 'islands#blackDotIcon'});

    myMap.geoObjects.add(myPlacemark);
}
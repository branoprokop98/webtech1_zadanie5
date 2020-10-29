document.addEventListener('DOMContentLoaded', function () {
    var mymap = L.map('mapid').setView([48.151965, 17.072995], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    var blockA = L.polygon([
        [48.15182183, 17.07386434],
        [48.15195425, 17.07386166],
        [48.1519614, 17.07255006],
        [48.1518254, 17.07254469]
    ]).addTo(mymap);

    blockA.bindPopup("Toto je blok A");

    var blockB = L.polygon([
        [48.15232287, 17.07434714],
        [48.15245887, 17.0743525],
        [48.15246961, 17.07300067],
        [48.15232645, 17.07300067]
    ]).addTo(mymap);

    blockB.bindPopup("Toto je blok B");

    var blockC = L.polygon([
        [48.15282391, 17.07386971],
        [48.15296707, 17.07386434],
        [48.15297423, 17.07281828],
        [48.15283107, 17.07281828]
    ]).addTo(mymap);

    blockC.bindPopup("Toto je blok C");

    var blockD = L.polygon([
        [48.15332853, 17.07436323],
        [48.1534681, 17.07436323],
        [48.15347526, 17.07319915],
        [48.15333569, 17.07319379]
    ]).addTo(mymap);

    blockD.bindPopup("Toto je blok D");

    var blockE = L.polygon([
        [48.15383314, 17.073875074],
        [48.15397271, 17.0738858],
        [48.15397629, 17.07281828],
        [48.1538403, 17.07282901]
    ]).addTo(mymap);

    blockE.bindPopup("Toto je blok E");

    var busMarker = L.icon({
        iconUrl: 'pictures/bus-marker.png',
    
        iconSize:     [50, 50], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
    });

    var zoo1 = L.marker([48.15411944, 17.07511961], {icon: busMarker}).addTo(mymap);
    var zoo2 = L.marker([48.15459899, 17.07455635], {icon: busMarker}).addTo(mymap);
    var csu1 = L.marker([48.15837799, 17.06782937], {icon: busMarker}).addTo(mymap);
    var csu2 = L.marker([48.15827779, 17.06824243], {icon: busMarker}).addTo(mymap);
})
document.addEventListener('DOMContentLoaded', function () {
	var map = L.map('map').setView([48.151965, 17.072995], 16);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var control = L.Routing.control(L.extend(window.lrmConfig, {
		waypoints: [
			L.latLng(null, null),
			L.latLng(48.1517073, 17.07331985)
		],
		geocoder: L.Control.Geocoder.nominatim(),
		routeWhileDragging: true,
		reverseWaypoints: true,
		showAlternatives: false,
		altLineOptions: {
			styles: [
				{ color: 'black', opacity: 0.15, weight: 9 },
				{ color: 'white', opacity: 0.8, weight: 6 },
				{ color: 'blue', opacity: 0.5, weight: 2 }
			]
		}
	})).addTo(map);

	var blockA = L.polygon([
		[48.15182183, 17.07386434],
		[48.15195425, 17.07386166],
		[48.1519614, 17.07255006],
		[48.1518254, 17.07254469]
	]).addTo(map);

	blockA.bindPopup("<h3>Toto je blok A</h3>Inštitút komunikácie a aplikovanej lingvistiky <br> Ústav jadrového a fyzikálneho inžinierstva");

	var blockB = L.polygon([
		[48.15232287, 17.07434714],
		[48.15245887, 17.0743525],
		[48.15246961, 17.07300067],
		[48.15232645, 17.07300067]
	]).addTo(map);

	blockB.bindPopup("<h3>Toto je blok B</h3> Ústav elektrotechniky <br> Ústav multimediálnych informačných a komunikačných technológií");

	var blockC = L.polygon([
		[48.15282391, 17.07386971],
		[48.15296707, 17.07386434],
		[48.15297423, 17.07281828],
		[48.15283107, 17.07281828]
	]).addTo(map);

	blockC.bindPopup("<h3>Toto je blok C</h3> Ústav informatiky a matematiky <br> Ústav elektroenergetiky a aplikovanej elektrotechniky");

	var blockD = L.polygon([
		[48.15332853, 17.07436323],
		[48.1534681, 17.07436323],
		[48.15347526, 17.07319915],
		[48.15333569, 17.07319379]
	]).addTo(map);

	blockD.bindPopup("<h3>Toto je blok D</h3> Ústav automobilovej mechatroniky <br> Ústav robotiky a kybernetiky");

	var blockE = L.polygon([
		[48.15383314, 17.0738858],
		[48.15397271, 17.0738858],
		[48.15397629, 17.07256079],
		[48.1538403, 17.07255542]
	]).addTo(map);

	blockE.bindPopup("<h3>Toto je blok E</h3> Ústav elektroniky a fotoniky");

	var swim = L.polygon([
		[48.15397987, 17.07281291],
		[48.15444869, 17.07280755],
		[48.15444511, 17.07255006],
		[48.15397987, 17.07256079]
	]).addTo(map);

	swim.bindPopup("<h3>Plaváreň</h3>");

	var gym = L.polygon([
		[48.15297423, 17.07281828],
		[48.15383672, 17.07281828],
		[48.15383672, 17.07255542],
		[48.15297423, 17.07255542]
	]).addTo(map);

	gym.bindPopup("<h3>Telocvičňa</h3>")


	var busMarker = L.icon({
		iconUrl: 'pictures/bus-marker.png',
		popupAnchor: [0, -30],

		iconAnchor: [25, 48],
		iconSize: [50, 50], // size of the icon
		shadowSize: [50, 64], // size of the shadow
	});

	var tramMarker = L.icon({
		iconUrl: 'pictures/tram.png',
		popupAnchor: [0, -30],

		iconAnchor: [17.5, 43],
		iconSize: [35, 45], // size of the icon
		shadowSize: [50, 64], // size of the shadow
	});

	var zoo1 = L.marker([48.15411944, 17.07511961], { icon: busMarker }).addTo(map);
	zoo1.bindPopup("31 Zoo -> Blumentál <br> 39 Zoo -> Súhvezdná")
	var zoo2 = L.marker([48.15459899, 17.07455635], { icon: busMarker }).addTo(map);
	zoo2.bindPopup("31 Zoo -> Cintorín Slávičie údolie <br> 39 Zoo -> Cintorín Slávičie údolie")
	var csu1 = L.marker([48.15837799, 17.06782937], { icon: busMarker }).addTo(map);
	csu1.bindPopup("Konečná zastávka")
	var csu2 = L.marker([48.15827779, 17.06824243], { icon: busMarker }).addTo(map);
	csu2.bindPopup("31 Cintorín Slávičie údolie -> Blumentál <br> 39 Cintorín Slávičie údolie -> Súhvezdná")
	var zoo3 = L.marker([48.15465267, 17.07576603], { icon: busMarker }).addTo(map);
	zoo3.bindPopup("30 Zoo -> Most SNP <br> 32 Zoo -> Dlhé diely, Kuklovská <br> 37 Zoo -> Most SNP <br> 92 Zoo -> Vozovňa Petržalka <br> 192 Zoo -> Vozovňa Petržalka <br> N29 Zoo -> Hrad Devín")
	var zoo4 = L.marker([48.15405144, 17.07691669], { icon: busMarker }).addTo(map);
	zoo4.bindPopup("30 Zoo -> Lamač <br> 32 Zoo -> Hlavná stanica <br> 37 Zoo -> Záhorská Bystrica <br> 92 Zoo -> Volkswagen, VW2 <br> 192 Zoo -> Tesco Lamač <br> N29 Zoo -> Hlavná stanica")
	var bot1 = L.marker([48.14812467, 17.07247496], { icon: tramMarker }).addTo(map);
	bot1.bindPopup("4 Botanická záhrada -> Zlaté piesky|ŽST Nové Mesto <br> 9 Botanická záhrada -> Ružinov");
	var bot2 = L.marker([48.14813183, 17.07177758], { icon: tramMarker }).addTo(map);
	bot2.bindPopup("4 Botanická záhrada -> Dúbravka <br> 9 Botanická záhrada -> Karlova Ves");

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(e.latlng.toString())
			.openOn(map);
	}

	map.on('click', onMapClick);

	L.Routing.errorControl(control).addTo(map);
})
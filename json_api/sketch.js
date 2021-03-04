let bitcoinPrice;

function preload() {
	let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
	bitcoinPrice = loadJSON(url);
}

function setup() {
	createCanvas(400, 400);
	textAlign(CENTER);
	textSize(20);

}


function draw() {
	background(7, 118, 160);
	let btcUS = bitcoinPrice.bpi.USD.rate_float;
	let btcEUR = bitcoinPrice.bpi.EUR.rate_float;
	fill(255);
	text("btc: " + btcUS + " $", width / 2, height / 2 - 20)
	text("btc: " + btcEUR + " €", width / 2, height / 2 + 20)
	console.log(btcUS);



}

var initialList = []
var totalPayedOut = 0;

var claim1 = new Claim("John Doe", "Specialist", 1100);
var claim2 = new Claim("Jane Doe", "Optical", 100);
var claim3 = new Claim("Joe Johnson", "Emergency", 31000);
var claim4 = new Claim("Sharon Smith", "Emergency", 1300);
var claim5 = new Claim("Steve Wright", "Primary Care", 770);
var claim6 = new Claim("Bruce Banner", "Specialist", 65000);
var claim7 = new Claim("Steven Rogers", "Primary Care", 3200);
var claim8 = new Claim("Bucky Barns", "Emergency", 4500);
var claim9 = new Claim("Anthony Stark", "Optical", 1500);
var claim10 = new Claim("Natasha Romanoff", "Primary Care", 2500);

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
	initialList.push(this);
}

//function to determine percent covered
function percentCovered(claim) {
	var careType = claim.visitType;
	switch(careType) {
		case 'Optical':
			return 0;
			break;
		case 'Specialist':
			return 10;
			break;
		case 'Emergency':
			return 100;
			break;
		case 'Primary Care':
			return 50;
			break;
		default:
			break;
	}
}

//function to determine amount covered
function amountCovered(claim) {
	var careCost = claim.visitCost;
	var claimCoverage = percentCovered(claim) * careCost / 100;
	return claimCoverage;
}

for (var i = 0; i < initialList.length; i++) {
  var newName = initialList[i].patientName;
	console.log('Paid out $' + amountCovered(initialList[i]) + ' for ' + newName);
}

for (var i = 0; i < initialList.length; i++) {
	totalPayedOut += amountCovered(initialList[i]);
}

console.log('For a total of $' + totalPayedOut + ' in Claims.');

// SEMI-AUTOMÁTICO V2

/* ROOM */

const roomName = "Treinão do Vini";
const botName = "🤖";
const maxPlayers = 15;
const roomPublic = false;
const geo = [{ "lat": -23.646709, "lon": -46.730114, "code": "br" }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimit = 3;
const timeLimit = 3;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
const mapinha = `{"name" : "𝒙2",

"width" : 420,

"height" : 200,

"canBeStored" : false,

"bg" : { "width" : 368, "height" : 171, "kickOffRadius" : 65, "color" : "1E472E" },

"vertexes" : [
	/* 0 */ { "x" : -368, "y" : 171, "cMask" : ["ball" ] },
	/* 1 */ { "x" : -368, "y" : 65, "cMask" : ["ball" ] },
	/* 2 */ { "x" : -368, "y" : -65, "cMask" : ["ball" ] },
	/* 3 */ { "x" : -368, "y" : -171, "cMask" : ["ball" ] },
	/* 4 */ { "x" : 368, "y" : 171, "cMask" : ["ball" ] },
	/* 5 */ { "x" : 368, "y" : 65, "cMask" : ["ball" ] },
	/* 6 */ { "x" : 368, "y" : -65, "cMask" : ["ball" ] },
	/* 7 */ { "x" : 368, "y" : -171, "cMask" : ["ball" ] },
	/* 8 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	/* 9 */ { "x" : 0, "y" : -65, "bCoef" : 0, "cMask" : [ ] },
	/* 10 */ { "x" : 368, "y" : 171, "cMask" : ["ball" ] },
	/* 11 */ { "x" : 368, "y" : -171, "cMask" : ["ball" ] },
	/* 12 */ { "x" : 0, "y" : 171, "bCoef" : 0, "cMask" : [ ] },
	/* 13 */ { "x" : 0, "y" : -171, "bCoef" : 0, "cMask" : [ ] },
	/* 14 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	/* 15 */ { "x" : 0, "y" : -65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	/* 16 */ { "x" : 377, "y" : -65, "cMask" : ["ball" ] },
	/* 17 */ { "x" : 377, "y" : -171, "cMask" : ["ball" ] },
	/* 18 */ { "x" : -377, "y" : -65, "cMask" : ["ball" ] },
	/* 19 */ { "x" : -377, "y" : -171, "cMask" : ["ball" ] },
	/* 20 */ { "x" : -377, "y" : 65, "cMask" : ["ball" ] },
	/* 21 */ { "x" : -377, "y" : 171, "cMask" : ["ball" ] },
	/* 22 */ { "x" : 377, "y" : 65, "cMask" : ["ball" ] },
	/* 23 */ { "x" : 377, "y" : 171, "cMask" : ["ball" ] },
	/* 24 */ { "x" : 0, "y" : 199, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	/* 25 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	/* 26 */ { "x" : 0, "y" : -65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	/* 27 */ { "x" : 0, "y" : -199, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	/* 28 */ { "x" : -368.53340356886, "y" : -62.053454903872, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 29 */ { "x" : -400.05760771891, "y" : -62.053454903872, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 30 */ { "x" : -400.05760771891, "y" : 64.043361696331, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 31 */ { "x" : -368.53340356886, "y" : 64.043361696331, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 32 */ { "x" : 368.09926357786, "y" : 63.94882446641, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 33 */ { "x" : 400, "y" : 64, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 34 */ { "x" : 400, "y" : -61.927767991658, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 35 */ { "x" : 368.9681846993, "y" : -62.144998272018, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	/* 36 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "cMask" : [ ] },
	/* 37 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },
	/* 38 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "cMask" : [ ] },
	/* 39 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },
	/* 40 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "cMask" : [ ] },
	/* 41 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },
	/* 42 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "cMask" : [ ] },
	/* 43 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },
	/* 44 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "cMask" : [ ] },
	/* 45 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },
	/* 46 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "cMask" : [ ] },
	/* 47 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },
	/* 48 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "cMask" : [ ] },
	/* 49 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },
	/* 50 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "cMask" : [ ] },
	/* 51 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },
	/* 52 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },
	/* 53 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },
	/* 54 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
	/* 55 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
	/* 56 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
	/* 57 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
	/* 58 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
	/* 59 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
	/* 60 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
	/* 61 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
	/* 62 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
	/* 63 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
	/* 64 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
	/* 65 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
	/* 66 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
	/* 67 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
	/* 68 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
	/* 69 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
	/* 70 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
	/* 71 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
	/* 72 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
	/* 73 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
	/* 74 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
	/* 75 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
	/* 76 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
	/* 77 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
	/* 78 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
	/* 79 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
	/* 80 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
	/* 81 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
	/* 82 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
	/* 83 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
	/* 84 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
	/* 85 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
	/* 86 */ { "x" : 377, "y" : -65, "cMask" : ["ball" ] },
	/* 87 */ { "x" : 377, "y" : -171, "cMask" : ["ball" ] },
	/* 88 */ { "x" : -377, "y" : -65, "cMask" : ["ball" ] },
	/* 89 */ { "x" : -377, "y" : -171, "cMask" : ["ball" ] },
	/* 90 */ { "x" : -377, "y" : 65, "cMask" : ["ball" ] },
	/* 91 */ { "x" : -377, "y" : 171, "cMask" : ["ball" ] },
	/* 92 */ { "x" : 377, "y" : 65, "cMask" : ["ball" ] },
	/* 93 */ { "x" : 377, "y" : 171, "cMask" : ["ball" ] },
	/* 94 */ { "x" : 371, "y" : -65, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 95 */ { "x" : 371, "y" : -171, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 96 */ { "x" : 371, "y" : 65, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 97 */ { "x" : 371, "y" : 171, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 98 */ { "x" : -371, "y" : 65, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 99 */ { "x" : -371, "y" : 171, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 100 */ { "x" : -371, "y" : -65, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 101 */ { "x" : -371, "y" : -171, "bCoef" : 0, "cMask" : ["ball" ] },
	/* 102 */ { "x" : 18.693012242141236, "y" : -21.095499558119467, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 103 */ { "x" : -21.5474775317698, "y" : 17.907288577307238, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 104 */ { "x" : 21.951709783491452, "y" : -22.012297468400718, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 105 */ { "x" : -22.074276143274176, "y" : 20.659553972835525, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 106 */ { "x" : 21.190345317583223, "y" : -18.67377293786363, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 107 */ { "x" : -19.050144456327814, "y" : 20.32901519756308, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 108 */ { "x" : -21.991599078617213, "y" : -22.622872003341442, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 109 */ { "x" : 20.697109823035476, "y" : 21.420506332939798, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 110 */ { "x" : -18.38488915048987, "y" : -22.55279848177398, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 111 */ { "x" : 20.622033124087665, "y" : 17.69195662269868, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 112 */ { "x" : -21.531907888512762, "y" : -18.949264858604902, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
	/* 113 */ { "x" : 17.475014386064785, "y" : 21.295490245867757, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" }

],

"segments" : [
	{ "v0" : 0, "v1" : 1, "vis" : false, "cMask" : ["ball" ] },
	{ "v0" : 2, "v1" : 3, "vis" : false, "cMask" : ["ball" ] },
	{ "v0" : 4, "v1" : 5, "vis" : false, "cMask" : ["ball" ] },
	{ "v0" : 6, "v1" : 7, "vis" : false, "cMask" : ["ball" ] },
	{ "v0" : 8, "v1" : 9, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
	{ "v0" : 9, "v1" : 8, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
	{ "v0" : 1, "v1" : 0, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 5, "v1" : 4, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 2, "v1" : 3, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 6, "v1" : 7, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 0, "v1" : 10, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 3, "v1" : 11, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 12, "v1" : 13, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ] },
	{ "v0" : 8, "v1" : 9, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
	{ "v0" : 15, "v1" : 14, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
	{ "v0" : 2, "v1" : 1, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ] },
	{ "v0" : 6, "v1" : 5, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ] },
	{ "v0" : 16, "v1" : 17, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 18, "v1" : 19, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 20, "v1" : 21, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 22, "v1" : 23, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 24, "v1" : 25, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	{ "v0" : 26, "v1" : 27, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
	{ "v0" : 28, "v1" : 29, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	{ "v0" : 29, "v1" : 30, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	{ "v0" : 30, "v1" : 31, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	{ "v0" : 32, "v1" : 33, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	{ "v0" : 33, "v1" : 34, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	{ "v0" : 34, "v1" : 35, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
	{ "v0" : 36, "v1" : 37, "curve" : 94.0263701017, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101076 },
	{ "v0" : 39, "v1" : 38, "curve" : 86.632306418889, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.060575000344919 },
	{ "v0" : 41, "v1" : 40, "curve" : 94.026370101699, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },
	{ "v0" : 37, "v1" : 41, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
	{ "v0" : 42, "v1" : 43, "curve" : 86.632306418888, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003449375 },
	{ "v0" : 45, "v1" : 44, "curve" : 86.632306418884, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003450118 },
	{ "v0" : 46, "v1" : 47, "curve" : 86.632306418899, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003447336 },
	{ "v0" : 49, "v1" : 48, "curve" : 94.026370101699, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },
	{ "v0" : 50, "v1" : 51, "curve" : 94.026370101699, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },
	{ "v0" : 52, "v1" : 53, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
	{ "v0" : 54, "v1" : 55, "curve" : -179.99307079708004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.000060468702819980624 },
	{ "v0" : 55, "v1" : 54, "curve" : -179.99781759386002, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.000019045086381751383 },
	{ "v0" : 56, "v1" : 57, "curve" : 179.64823645332, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0030697256812038513 },
	{ "v0" : 57, "v1" : 56, "curve" : -179.64241331853003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.003120542605465436 },
	{ "v0" : 58, "v1" : 59, "curve" : -179.97642676038004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00020571532626703233 },
	{ "v0" : 59, "v1" : 58, "curve" : -179.99075897601003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00008064314761547242 },
	{ "v0" : 60, "v1" : 61, "curve" : -179.93114244115003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0006008956307319741 },
	{ "v0" : 61, "v1" : 60, "curve" : -179.97051646743003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0002572923649102433 },
	{ "v0" : 62, "v1" : 63, "curve" : 179.99869069543, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000011425837829318613 },
	{ "v0" : 63, "v1" : 62, "curve" : 179.99939258776004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000005300671752306162 },
	{ "v0" : 64, "v1" : 65, "curve" : -179.91173952837002, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0007702180669602502 },
	{ "v0" : 65, "v1" : 64, "curve" : 179.91186753664, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0007691009834080061 },
	{ "v0" : 66, "v1" : 67, "curve" : 179.99528711105, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000041127714752444664 },
	{ "v0" : 67, "v1" : 66, "curve" : 179.99743836358, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000022354494887865286 },
	{ "v0" : 68, "v1" : 69, "curve" : 179.98626041101, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.00011990053344777071 },
	{ "v0" : 69, "v1" : 68, "curve" : 179.99175181595, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0000719789846157737 },
	{ "v0" : 70, "v1" : 71, "curve" : -179.95284437602004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0004115104728700557 },
	{ "v0" : 71, "v1" : 70, "curve" : 179.95294709391, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0004106140900279739 },
	{ "v0" : 72, "v1" : 73, "curve" : 179.95715750564, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0003738713105943949 },
	{ "v0" : 73, "v1" : 72, "curve" : 179.89943871875, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0008775629541936324 },
	{ "v0" : 74, "v1" : 75, "curve" : 179.94773754738, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0004560759683152962 },
	{ "v0" : 75, "v1" : 74, "curve" : 179.98221351296, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0001552163818523414 },
	{ "v0" : 76, "v1" : 77, "curve" : -179.58482727820004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.003623081332869217 },
	{ "v0" : 77, "v1" : 76, "curve" : 179.58764458796, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0035984953466450956 },
	{ "v0" : 78, "v1" : 79, "curve" : -179.99913353641003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0000075613212472121415 },
	{ "v0" : 79, "v1" : 78, "curve" : -179.98034013624, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00017156467823623532 },
	{ "v0" : 80, "v1" : 81, "curve" : -179.96467398611003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00030827763675859586 },
	{ "v0" : 81, "v1" : 80, "curve" : 179.99380079, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000054098312814100194 },
	{ "v0" : 82, "v1" : 83, "curve" : -179.99555315480004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00003880604505256444 },
	{ "v0" : 83, "v1" : 82, "curve" : -179.98613220153004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00012101937224284073 },
	{ "v0" : 84, "v1" : 85, "curve" : -179.94841712437002, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00045014553909957075 },
	{ "v0" : 85, "v1" : 84, "curve" : -179.98787776122, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00010578649010659523 },
	{ "v0" : 86, "v1" : 87, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 88, "v1" : 89, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 90, "v1" : 91, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 92, "v1" : 93, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
	{ "v0" : 94, "v1" : 95, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
	{ "v0" : 96, "v1" : 97, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
	{ "v0" : 98, "v1" : 99, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
	{ "v0" : 100, "v1" : 101, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
	{ "v0" : 102, "v1" : 103, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ], "y" : -40 },
	{ "v0" : 104, "v1" : 105, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ], "y" : -45 },
	{ "v0" : 106, "v1" : 107, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ], "y" : -40 },
	{ "v0" : 108, "v1" : 109, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ] },
	{ "v0" : 110, "v1" : 111, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ] },
	{ "v0" : 112, "v1" : 113, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ] }

],

"planes" : [
	{ "normal" : [0,1 ], "dist" : -171, "cMask" : ["ball" ] },
	{ "normal" : [0,-1 ], "dist" : -171, "cMask" : ["ball" ] },
	{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.2 },
	{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.2 },
	{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2 },
	{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2 }

],

"goals" : [
	{ "p0" : [-374.25,-62.053454903872 ], "p1" : [-374.25,64.043361696331 ], "team" : "red" },
	{ "p0" : [374.25,62 ], "p1" : [374.25,-62 ], "team" : "blue" }

],

"discs" : [
	{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "c68a30", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
	{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [-368.53340356886,64.043361696331 ], "color" : "ffcc00", "bCoef" : 1 },
	{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [-368.53340356886,-62.053454903872 ], "color" : "ffcc00", "bCoef" : 1 },
	{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [368.9681846993,-62.144998272018 ], "color" : "ffcc00", "bCoef" : 1 },
	{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [368.09926357786,63.94882446641 ], "color" : "ffcc00", "bCoef" : 1 },
	{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
	{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
	{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
	{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }

],

"playerPhysics" : {
	"bCoef" : 0,
	"acceleration" : ${velocitypadrao},
	"kickingAcceleration" : ${speedvelocity},
	"kickStrength" : 4.75

},

"ballPhysics" : "disc0",

"spawnDistance" : 180,

"traits" : {
	

},

"joints" : [
	

],

"redSpawnPoints" : [
	

],

"blueSpawnPoints" : [
	

]
}`
room.setCustomStadium(mapinha);
var adminPassword = "true";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;

/* OPTIONS */

var drawTimeLimit = Infinity;
var maxTeamSize = 4;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var goldenGoal = false;
var activePlay = false;
var muteList = [];

/* STATS */

var GKList = new Array(2 * maxPlayers).fill(0);
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;

/* AUXILIARY */

var checkTimeVariable = false;

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // return random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max));
}

function arrayMin(arr) {
	var len = arr.length;
	var min = Infinity;
	while (len--) {
		if (arr[len] < min) {
			min = arr[len];
		}
	}
	return min;
}

function getTime(scores) {
	return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function topBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
				room.setPlayerTeam(teamS[1].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[0].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[0].id, Team.BLUE);
		}
	}
}

function resetBtn() {
	resettingTeams = true;
	setTimeout(function () { resettingTeams = false; }, 100);
	if (teamR.length <= teamB.length) {
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamR.length; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}
	else {
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamB.length; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}
}

function blueToSpecBtn() {
	resettingTeams = true;
	setTimeout(function () { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
}

function redToSpecBtn() {
	resettingTeams = true;
	setTimeout(function () { resettingTeams = false; }, 100);
	for (var i = 0; i < teamR.length; i++) {
		room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
}

function blueToRedBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[i].id, Team.RED);
	}
}

/* GAME FUNCTIONS */

function checkTime() {
	const scores = room.getScores();
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
		if (scores.red != scores.blue) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 3000);
				scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
				setTimeout(() => { room.stopGame(); }, 2000);
			}
			return;
		}
		goldenGoal = true;
		room.sendChat("⚽ Primeiro GOL vence! ⚽");
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			room.sendChat("⌛ 60 segundos restantes até o empate! ⌛");
		}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			endGame(Team.SPECTATORS);
			room.stopGame();
			goldenGoal = false;
		}
	}
}

function endGame(winner) { // no stopGame() function in it
	const scores = room.getScores();
	Rposs = Rposs / (Rposs + Bposs);
	Bposs = 1 - Rposs;
	lastWinner = winner;
	if (winner == Team.RED) {
		streak++;
		room.sendChat("🔴 Barcelona vence: " + scores.red + "-" + scores.blue + " ! Atual Invicto : " + streak + " 🏆");
		room.sendChat("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
		if (scores.blue == 0) {
			room.sendChat("🏆 " + teamR[GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)))].name + " mandou muito! ");
		}
	}
	else if (winner == Team.BLUE) {
		streak = 1;
		room.sendChat("🔵 Real Madrid vence " + scores.blue + "-" + scores.red + " ! Atual Invicto : " + streak + " 🏆");
		room.sendChat("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
		if (scores.red == 0) {
			room.sendChat("🏆 " + teamB[GKList.slice(maxPlayers, 2 * maxPlayers).findIndex(p => p == Math.max(...GKList.slice(maxPlayers, 2 * maxPlayers)))].name + " mandou muito! ");
		}
	}
	else {
		streak = 0;
		room.sendChat("💤 Limite de Empates! 💤");
		room.sendChat("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
		if (scores.red == 0) {
			room.sendChat("🏆 " + teamB[GKList.slice(maxPlayers, 2 * maxPlayers).findIndex(p => p == Math.max(...GKList.slice(maxPlayers, 2 * maxPlayers)))].name + " e " + teamR[GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)))].name + " mandaram muito! ");
		}
	}
}

/* PLAYER FUNCTIONS */

function updateTeams() {
	players = room.getPlayerList().filter((player) => player.id != 0);
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function updateAdmins() {
	if (players.length == 0 || players.find((player) => player.admin) != null) {
		return;
	}
	var copie = [];
	players.forEach(function (element) { copie.push(element.id); });
	room.setPlayerAdmin(arrayMin(copie), true); // Give admin to the player who's played the longest on the room
}

function updateList(number, team) {
	if (room.getScores() != null) {
		if (team == Team.RED) {
			GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));

		}
		else if (team == Team.BLUE) {
			GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));
		}
	}
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				!activePlay ? activePlay = true : null;
				lastTeamTouched = players[i].team;
			}
		}
	}
}

function getStats() { // gives possession, ball speed and GK of each team
	if (activePlay) {
		updateTeams();
		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
		var ballPosition = room.getBallPosition();
		point[1] = point[0];
		point[0] = ballPosition;
		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
		var k = [-1, Infinity];
		for (var i = 0; i < teamR.length; i++) {
			if (teamR[i].position.x < k[1]) {
				k[0] = i;
				k[1] = teamR[i].position.x;
			}
		}
		GKList[k[0]]++;
		k = [-1, -Infinity];
		for (var i = 0; i < teamB.length; i++) {
			if (teamB[i].position.x > k[1]) {
				k[0] = i;
				k[1] = teamB[i].position.x;
			}
		}
		GKList[maxPlayers + k[0]]++;
	}
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
	room.sendChat("[PV] 👋 Salve, " + player.name + " !", player.id);
	updateTeams();
	updateAdmins();
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
	if (changedPlayer.id == 0) {
		room.setPlayerTeam(0, Team.SPECTATORS);
		return;
	}
	if (changedPlayer.team == Team.SPECTATORS) {
		updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);
	}
	updateTeams();
}

room.onPlayerLeave = function (player) {
	updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
	updateTeams();
	updateAdmins();
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
	message = message.split(" ");
	if (["!adm"].includes(message[0].toLowerCase())) {
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			adminPassword = "true";
			console.log("adminPassword : " + adminPassword);
		}
	}
	else if (["!bb, !bye, !cya, !gn"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "Flw !", false);
	}
	if (message[0][0] == "!") {
		return false;
	}
}

room.onPlayerActivity = function (player) {
}

room.onPlayerBallKick = function (player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
		!activePlay ? activePlay = true : null;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
}

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
	GKList = new Array(2 * maxPlayers).fill(0);
	activePlay = false;
	Rposs = 0;
	Bposs = 0;
	lastPlayersTouched = [null, null];
	goldenGoal = false;
}

room.onGameStop = function (byPlayer) {
	if (byPlayer.id == 0) {
		updateTeams();
		if (lastWinner == Team.RED) {
			blueToSpecBtn();
		}
		else if (lastWinner == Team.BLUE) {
			redToSpecBtn();
			blueToRedBtn();
		}
		else {
			resetBtn();
		}
		setTimeout(() => { topBtn(); }, 100);
	}
}

room.onGamePause = function (byPlayer) {
	setTimeout(function () {
		room.sendChat("Calma aê, vamo resolver e já voltamos. Não enche! kkk");
	}, 1500);
}

room.onGameUnpause = function (byPlayer) {
}

room.onTeamGoal = function (team) {
	const scores = room.getScores();
	activePlay = false;
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendChat("⚽ " + getTime(scores) + " Gol de " + lastPlayersTouched[0].name + " ! Assistência de " + lastPlayersTouched[1].name + ". Velocidade : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
		}
		else {
			room.sendChat("⚽ " + getTime(scores) + " Gol de " + lastPlayersTouched[0].name + " ! Velocidade : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
		}
	}
	else {
		room.sendChat("😂 " + getTime(scores) + " Gol CONTRA de " + lastPlayersTouched[0].name + " ! Velocidade : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
	}
	if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
		endGame(team);
		goldenGoal = false;
		setTimeout(() => { room.stopGame(); }, 1000);
	}
}

room.onPositionsReset = function () {
	lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
}

room.onGameTick = function () {
	checkTime();
	getLastTouchOfTheBall();
	getStats();
}
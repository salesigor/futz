// SEMI-AUTOMÁTICO V2


/* VARIABLES */

/* ROOM */

const roomName = "3x3 | Cola na humildade";
const botName = "🤖";
const maxPlayers = 15;
const roomPublic = true;
const geo = [{ "lat": -23.646709, "lon": -46.730114, "code": "br" }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimit = 3;
const timeLimit = 3;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);

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
	if (["!help"].includes(message[0].toLowerCase())) {
		room.sendChat("[PV] Admin commands: !mute <R/B/S> <team position> <duration = 3>, !unmute all/<nick>, !clearbans", player.id);
	}
	else if (["!adm"].includes(message[0].toLowerCase())) {
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			adminPassword = "true";
			console.log("adminPassword : " + adminPassword);
		}
	}
	else if (["!mute"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 3 || message.length == 4) {
				if (["R", "B", "S"].includes(message[1])) {
					var timeOut;
					if (message[1] == "R") {
						if (!Number.isNaN(Number.parseInt(message[2]))) {
							if (Number.parseInt(message[2]) <= teamR.length && Number.parseInt(message[2]) > 0) {
								if (teamR[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamR[Number.parseInt(message[2]) - 1].name).length > 0) {
									return false;
								}
								if (message.length == 4) {
									if (!Number.isNaN(Number.parseInt(message[3]))) {
										if (Number.parseInt(message[3]) > 0) {
											timeOut = Number.parseInt(message[3]) * 60 * 1000;
										}
									}
								}
								else {
									timeOut = 3 * 60 * 1000;
								}
								setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamR[Number.parseInt(message[2]) - 1].name);
								muteList.push(teamR[Number.parseInt(message[2]) - 1].name);
								room.sendChat(teamR[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !");
							}
						}
					}
					if (message[1] == "B") {
						if (!Number.isNaN(Number.parseInt(message[2]))) {
							if (Number.parseInt(message[2]) <= teamB.length && Number.parseInt(message[2]) > 0) {
								if (teamB[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamB[Number.parseInt(message[2]) - 1].name).length > 0) {
									return false;
								}
								if (message.length == 4) {
									if (!Number.isNaN(Number.parseInt(message[3]))) {
										if (Number.parseInt(message[3]) > 0) {
											timeOut = Number.parseInt(message[3]) * 60 * 1000;
										}
									}
								}
								else {
									timeOut = 3 * 60 * 1000;
								}
								setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamB[Number.parseInt(message[2]) - 1].name);
								muteList.push(teamB[Number.parseInt(message[2]) - 1].name);
								room.sendChat(teamB[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !");
							}
						}
					}
					if (message[1] == "S") {
						if (!Number.isNaN(Number.parseInt(message[2]))) {
							if (Number.parseInt(message[2]) <= teamS.length && Number.parseInt(message[2]) > 0) {
								if (teamS[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamS[Number.parseInt(message[2]) - 1].name).length > 0) {
									return false;
								}
								if (message.length == 4) {
									if (!Number.isNaN(Number.parseInt(message[3]))) {
										if (Number.parseInt(message[3]) > 0) {
											timeOut = Number.parseInt(message[3]) * 60 * 1000;
										}
									}
								}
								else {
									timeOut = 3 * 60 * 1000;
								}
								setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamS[Number.parseInt(message[2]) - 1].name);
								muteList.push(teamS[Number.parseInt(message[2]) - 1].name);
								room.sendChat(teamS[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !");
							}
						}
					}
				}
			}
		}
	}
	else if (["!unmute"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 2 && message[1] == "all") {
				muteList = [];
				room.sendChat("Desmutado.");
			}
			if (message.length >= 2) {
				var name = "";
				for (var i = 1; i < message.length; i++) {
					name += message[i] + " ";
				}
				name = name.substring(0, name.length - 1);
				muteList.length != muteList.filter((p) => p != name).length ? room.sendChat(name + " foi desmutado.") : null;
				muteList = muteList.filter((p) => p != name);
			}
		}
	}
	else if (["!clearbans"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			room.clearBans();
			room.sendChat("Banimentos apagados");
		}
	}
	else if (["!bb, !bye, !cya, !gn"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "Flw !", false);
	}
	if (message[0][0] == "!") {
		return false;
	}
	if (muteList.includes(player.name)) {
		room.sendChat("Você foi mutado.", player.id);
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
	if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
		room.sendChat(changedPlayer.name + " foi desmutado.");
		muteList = muteList.filter((p) => p != changedPlayer.name);
	}
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
	setTimeout(function () {
		room.sendChat("/colors blue 0 DAA520 FFFAFA FFFAFA FFFAFA");
	}, 1000);

	setTimeout(function () {
		room.sendChat("/colors red 360 FFD700 00008B 8B0000 00008B");
	}, 1500);
}

room.onGameTick = function () {
	checkTime();
	getLastTouchOfTheBall();
	getStats();
}
/* ROOM */

const roomName = "🎯 Cola na humildade | ⚽ Futsal 3x3 🏆";
/* NOMES SUGERIDOS:
1: 🏆 3x3 Futsal ⚽ | Cola na humildade
2: 🏆 SABOT | ⚽ 3x3 Futsal ⚽ | Cola na humildade
3: 🏆 FuteLab | ⚽ Futsal ⚽ | Cola na humildade
4: 🎯 SABOT | ⚽ Futsal ⚽ | Cola na humildade
5: 🎯 saBOT | ⚽ Futsal ⚽ | 3x3 | Cola na humildade
6: 🎯 FuteLab | ⚽ Futsal ⚽ | 3x3 | Cola na humildade
7: 🎯 Futsal ⚽ 3x3 🏆 | Cola na humildade
8: 🎯 Cola na humildade | ⚽ Futsal 3x3 🏆
*/
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

/* UNIFORMS */ 

const Uniform = {};
// Times Europeus
const rea = { "name": 'Real Madrid', "type": Uniform, "emoji": '⚪🟡⚪', "angle": 0, "textcolor": 0xDAA520, "color1": 0xFFFAFA, "color2": 0xFFFAFA, "color3": 0xFFFAFA};
const bar = {"name": 'Barcelona', "type": Uniform, "emoji": '🔵🔴🔵', "angle": 360, "textcolor": 0xFFD700, "color1": 0x00008B, "color2": 0x8B0000, "color3": 0x00008B};
const che = {"name": 'Chelsea', "type": Uniform, "emoji": '🔵⚪🔵', "angle": 90, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0x0000CD, "color3": 0x0000CD};
const juv = {"name": 'Juventus', "type": Uniform, "emoji": '⚫⚪⚫', "angle": 180, "textcolor": 0x000000, "color1": 0x5E5E5E, "color2": 0xD9D9D9, "color3": 0x5E5E5E};
const bay = {"name": 'Bayern de Munique', "type": Uniform, "emoji": '🔴🔵🔴', "angle": 30, "textcolor": 0xFFFFFF, "color1": 0xFF0000, "color2": 0xF20000, "color3": 0xFF0000};
const psg = {"name": 'Paris Saint-Germain', "type": Uniform, "emoji": '🔵🔴🔵', "angle": 180, "textcolor": 0xFFFFFF, "color1": 0x000080, "color2": 0xB22222, "color3": 0x000080};
const liv = {"name": 'Liverpool', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const manC = {"name": 'Manchester City', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const manU = {"name": 'Manchester United', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const ars = {"name": 'Arsenal', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
// Seleções
const ale = {'name': 'Alemanha', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const arg = {'name': 'Argentina', "type": Uniform, "emoji": '🔵⚪🔵', "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB};
const bra = {'name': 'Brasil', "type": Uniform, "emoji": '🟢🟡🔵', "angle": 360, "textcolor": 0x27965A, "color1": 0xDBB71B, "color2": 0xDBB71B, "color3": 0xDBB71B};
const esp = {'name': 'Espanha', "type": Uniform, "emoji": '🔴🟡🔴', "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const por = {'name': 'Portugal', "type": Uniform, "emoji": '🟢🔴🔴', "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const ita = {'name': 'Itália', "type": Uniform, "emoji": '🟢⚪🔴', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9};
const uru = {'name': 'Uruguai', "type": Uniform, "emoji": '⚪🔵⚪', "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4};
const fra = {'name': 'França', "type": Uniform, "emoji": '🔵⚪🔴', "angle": 90, "textcolor": 0xF5F9F6, "color1": 0x265ECF, "color2": 0x384355, "color3": 0x384355};
const ing = {'name': 'Inglaterra', "type": Uniform, "emoji": '⚪🔴⚪', "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4};
const bel = {'name': 'Bélgica', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A};
const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel];
const euro = [rea, bar, che, juv, bay, psg, liv, manC, manU, ars];
var defaultHome = bar
var defaultGuest = rea
var nameHome = defaultHome.name;
var acronymHome = bar;
var nameGuest = defaultGuest.name;
var acronymGuest = rea;
var emojiHome = defaultHome.emoji;
var emojiGuest = defaultGuest.emoji;
room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);

/* OPTIONS */

var drawTimeLimit = 1; //minutos
var maxTeamSize = 4;
var yellow = 0xffeb15;
var offYellow = 0xffdd8c;
var white = 0xFFFFFF;
var green = 0x32f073;
var red = 0xfc383b;
var blue = 0x03adfc;

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
var goalsHome = [];
var goalsGuest = [];

/* AUXILIARY */

var checkTimeVariable = false;
var announced = false;

/* FUNCTIONS */

function getNextHomeUniform() {
    const uniformId = uniformIds[homeUniformIndex];
    homeUniformIndex = (homeUniformIndex + 1) % uniformIds.length;
    return uniformId;
};

function getNextGuestUniform() {
    const uniformId2 = uniformIds[guestUniformIndex];
    guestUniformIndex = (guestUniformIndex + 1) % uniformIds.length;
    return uniformId2;
};

function sendAnnouncement(announcement) {
    room.sendAnnouncement(announcement, null, white, "bold", 1);
};

function sendRandomAnnouncement(messages, color, fontWeight) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];
    sendAnnouncement(randomMessage, white, "bold");
};

function centerText(string) {
    var space = parseInt((80 - string.length) * 0.8, 10);
    if (space <= 0) {
        return '';
    }
    return ' '.repeat(space) + string + ' '.repeat(space);
};

function docketFormat(string1, string2) {
    if (string1 !== undefined && string2 === undefined) {
        var space = 53 - (string1.length) * 0.8;
        return ' '.repeat(space) + string1
    } else if (string2 !== undefined && string1 === undefined) {
        return ' '.repeat(77) + string2
    } else if (string2 !== undefined && string1 !== undefined) {
        var space = 16 - (string1.length + 10 + string2.length)
        return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
    } else if (string1 === undefined && string2 === undefined) {
        return ''
    }
};

function getUniform(uniformStr) {
    if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
    for (const [key, value] of Object.entries(uniforms)) {
        for (let i = 0; i < value.aliases.length; i++) {
            if (value.aliases[i] === uniformStr) return key;
        }
    }
    return false;
};

function changeUniforme() {
    var a = nameHome;
    nameHome = nameGuest;
    nameGuest = a;

    var b = acronymHome;
    acronymHome = acronymGuest;
    acronymGuest = b;

    var c = emojiHome;
    emojiHome = emojiGuest;
    emojiGuest = c;

    room.setTeamColors(1, uniforms[acronymHome].angle, uniforms[acronymHome].textcolor, [uniforms[acronymHome].color1, uniforms[acronymHome].color2, uniforms[acronymHome].color3]);

    room.setTeamColors(2, uniforms[acronymGuest].angle, uniforms[acronymGuest].textcolor, [uniforms[acronymGuest].color1, uniforms[acronymGuest].color2, uniforms[acronymGuest].color3]);
};


/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // return random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
};

function arrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};

function getTime(scores) {
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
};

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
};

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
};

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
};

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
};

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
};

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
};

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
        room.sendAnnouncement(centerText("PRORROGAÇÃO"), null, yellow, "bold");
        goldenGoal = true;
        var messages = [
            drawTimeLimit * 60 + " segundos para o final!",
            "Vou dar " + drawTimeLimit * 60 + " segundos!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "normal");
        var messagens = [
            "⚽ Primeiro GOL vence! ⚽",
            "⚽ GOL DE OURO ativado ⚽",
        ];
        var randomIndex = Math.floor(Math.random() * messagens.length);
        var announcement = messagens[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, white, "bold");
    }
    if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 segundos para o empate! ⌛"), null, yellow, "bold");
        }
    }
    if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
};

function endGame(winner) { // no stopGame() function in it
    const scores = room.getScores();
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText(+ (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold");
        }
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText(+ (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold");
        }
    }
    else {
        streak = 0;
        room.sendAnnouncement(centerText("💤 Limite de TEMPO! 💤"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText(+ (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold");
        }
    }
};

/* PLAYER FUNCTIONS */

function updateTeams() {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
};

function updateAdmins() {
    if (players.length == 0 || players.find((player) => player.admin) != null) {
        return;
    }
    var copie = [];
    players.forEach(function (element) { copie.push(element.id); });
    room.setPlayerAdmin(arrayMin(copie), true); // Give admin to the player who's played the longest on the room
};

function updateList(number, team) {
    
    if (room.getScores() != null) {
        if (team == Team.RED) {
            GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));

        }
        else if (team == Team.BLUE) {
            GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));
        }
    }
};

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
};

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
};

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    var messages = [
        "👋 Salve, " + player.name + "!",
        "👋 Eae, " + player.name + "!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    updateTeams();
    updateAdmins();
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
    room.sendAnnouncement(centerText("Comandos:"), player.id, yellow, "bold");
    room.sendAnnouncement(centerText("!help, !tag, !uniforme, !regras, !vs, !discord, !verdade"), player.id, yellow, "normal");
    room.sendAnnouncement(centerText("Comemorações:"), player.id, yellow, "bold");
    room.sendAnnouncement(centerText("!gol, !ain, !chupa, !lenda, !smith, !gk, !me"), player.id, yellow, "normal");
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);
    }
    updateTeams();
};

room.onPlayerLeave = function (player) {
    updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
    updateTeams();
    updateAdmins();
    var messages = [
        player.name + " vazou!",
        "Tivemos uma perda... HIP " + player.name,
        player.name + " arregou essas horas!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    var mensagem = message;
    message = message.split(" ");
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Comandos:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!help, !tag, !uniforme, !regras, !discord, !vs, !verdade"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Comemorações:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!gol, !ain, !chupa, !lenda, !smith, !gk, !me"), null, yellow, "normal");
        if (player.admin) {
            room.sendAnnouncement(centerText("Admin Commands:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!comofaz, !uni (acronimo de !uniforme), !rand <red/blue>"), player.id, yellow, "normal");
        }
    }
    else if (["!comofaz"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Trocar Uniforme:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("Com !uniforme escolha qual uniforme deseja."), player.id, white, "normal");
        room.sendAnnouncement(centerText("Decore o acronimo dele que estará entre <>. Exemplo Barcelona <bar>"), player.id, white, "normal");
        room.sendAnnouncement(centerText("Veja qual time deseja atribuir o uniforme. RED ou BLUE"), player.id, white, "normal");
        room.sendAnnouncement(centerText("sendo assim, o comando será:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!uni red bar"), player.id, white, "bold");
        room.sendAnnouncement(centerText("Uniformes Aleatórios:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("Com !rand setamos uniformes aleatórios para todos os times."), player.id, white, "normal");
        room.sendAnnouncement(centerText("Para alterar apenas o uniforme de RED:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!rand red"), player.id, white, "bold");
        room.sendAnnouncement(centerText("Para alterar apenas o uniforme de RED:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!rand blue"), player.id, white, "bold");
    }
    else if (["!tag"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Player Tags:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!malco, !soberbo, !messi, !noob, !pepe, !abob, !onlyway"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Team Tags:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!bar, !rea"), null, yellow, "normal");
    }
    else if (["!uniforme"].includes(message[0].toLowerCase())) {
        if (message[1] == null) {
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Times Europeus:", null, yellow, "bold");
            room.sendAnnouncement("Manchester City <manC>, Manchester United <manU>, Paris Saint-Germain <psg>, Real Madrid <rea>", null, white, "normal");
            room.sendAnnouncement("Barcelona <bar>, Arsenal <ars>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Seleções:", null, yellow, "bold");
            room.sendAnnouncement("Brasil <bra> Alemanha <ale> Argentina <arg> Espanha <esp> Portugal <por>", null, white, "normal");
            room.sendAnnouncement("Itália <ita> Uruguai <uru> França <fra> Inglaterra <ing> Bélgica <bel>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        }
        else if (message[1] == "red") {
            if (message[2] == "bar") {
                nameHome = bar.name;
                acronymHome = bar;
            }
            else if (message[2] == "rea") {
                nameHome = rea.name;
                acronymHome = rea;
            }
            else if (message[2] == "manC") {
                nameHome = manC.name;
                acronymHome = manC;
            }
            else if (message[2] == "manU") {
                nameHome = manU.name;
                acronymHome = manU;
            }
            else if (message[2] == "ars") {
                nameHome = ars.name;
                acronymHome = ars;
            }
            else if (message[2] == "psg") {
                nameHome = psg.name;
                acronymHome = psg;
            }
            else if (message[2] == "liv") {
                nameHome = liv.name;
                acronymHome = liv;
            }
            else if (message[2] == "che") {
                nameHome = che.name;
                acronymHome = che;
            }
            else if (message[2] == "juv") {
                nameHome = juv.name;
                acronymHome = juv;
            }
            else if (message[2] == "bay") {
                nameHome = bay.name;
                acronymHome = bay;
            }
            else if (message[2] == "bra") {
                nameHome = bra.name;
                acronymHome = bra;
            }
            else if (message[2] == "ale") {
                nameHome = ale.name;
                acronymHome = ale;
            }
            else if (message[2] == "arg") {
                nameHome = arg.name;
                acronymHome = arg;
            }
            else if (message[2] == "esp") {
                nameHome = esp.name;
                acronymHome = esp;
            }
            else if (message[2] == "por") {
                nameHome = por.name;
                acronymHome = por;
            }
            else if (message[2] == "ita") {
                nameHome = ita.name;
                acronymHome = ita;
            }
            else if (message[2] == "uru") {
                nameHome = uru.name;
                acronymHome = uru;
            }
            else if (message[2] == "fra") {
                nameHome = fra.name;
                acronymHome = fra;
            }
            else if (message[2] == "ing") {
                nameHome = ing.name;
                acronymHome = ing;
            }
            else if (message[2] == "bel") {
                nameHome = bel.name;
                acronymHome = bel;
            }
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
        else if (message[1] == "blue") {
            if (message[2] == "bar") {
                nameGuest = bar.name;
                acronymGuest = bar;
            }
            else if (message[2] == "rea") {
                nameGuest = rea.name;
                acronymGuest = rea;
            }
            else if (message[2] == "manC") {
                nameGuest = manC.name;
                acronymGuest = manC;
            }
            else if (message[2] == "manU") {
                nameGuest = manU.name;
                acronymGuest = manU;
            }
            else if (message[2] == "ars") {
                nameGuest = ars.name;
                acronymGuest = ars;
            }
            else if (message[2] == "psg") {
                nameGuest = psg.name;
                acronymGuest = psg;
            }
            else if (message[2] == "liv") {
                nameGuest = liv.name;
                acronymGuest = liv;
            }
            else if (message[2] == "che") {
                nameGuest = che.name;
                acronymGuest = che;
            }
            else if (message[2] == "juv") {
                nameGuest = juv.name;
                acronymGuest = juv;
            }
            else if (message[2] == "bay") {
                nameGuest = bay.name;
                acronymGuest = bay;
            }
            else if (message[2] == "bra") {
                nameGuest = bra.name;
                acronymGuest = bra;
            }
            else if (message[2] == "ale") {
                nameGuest = ale.name;
                acronymGuest = ale;
            }
            else if (message[2] == "arg") {
                nameGuest = arg.name;
                acronymGuest = arg;
            }
            else if (message[2] == "esp") {
                nameGuest = esp.name;
                acronymGuest = esp;
            }
            else if (message[2] == "por") {
                nameGuest = por.name;
                acronymGuest = por;
            }
            else if (message[2] == "ita") {
                nameGuest = ita.name;
                acronymGuest = ita;
            }
            else if (message[2] == "uru") {
                nameGuest = uru.name;
                acronymGuest = uru;
            }
            else if (message[2] == "fra") {
                nameGuest = fra.name;
                acronymGuest = fra;
            }
            else if (message[2] == "ing") {
                nameGuest = ing.name;
                acronymGuest = ing;
            }
            else if (message[2] == "bel") {
                nameGuest = bel.name;
                acronymGuest = bel;
            }
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
    }
    else if (["!uni"].includes(message[0].toLowerCase())) {
        if (message[1] == "red") {
            if (message[2] == "bar") {
                nameHome = bar.name;
                acronymHome = bar;
            }
            else if (message[2] == "rea") {
                nameHome = rea.name;
                acronymHome = rea;
            }
            else if (message[2] == "manC") {
                nameHome = manC.name;
                acronymHome = manC;
            }
            else if (message[2] == "manU") {
                nameHome = manU.name;
                acronymHome = manU;
            }
            else if (message[2] == "ars") {
                nameHome = ars.name;
                acronymHome = ars;
            }
            else if (message[2] == "psg") {
                nameHome = psg.name;
                acronymHome = psg;
            }
            else if (message[2] == "liv") {
                nameHome = liv.name;
                acronymHome = liv;
            }
            else if (message[2] == "che") {
                nameHome = che.name;
                acronymHome = che;
            }
            else if (message[2] == "juv") {
                nameHome = juv.name;
                acronymHome = juv;
            }
            else if (message[2] == "bay") {
                nameHome = bay.name;
                acronymHome = bay;
            }
            else if (message[2] == "bra") {
                nameHome = bra.name;
                acronymHome = bra;
            }
            else if (message[2] == "ale") {
                nameHome = ale.name;
                acronymHome = ale;
            }
            else if (message[2] == "arg") {
                nameHome = arg.name;
                acronymHome = arg;
            }
            else if (message[2] == "esp") {
                nameHome = esp.name;
                acronymHome = esp;
            }
            else if (message[2] == "por") {
                nameHome = por.name;
                acronymHome = por;
            }
            else if (message[2] == "ita") {
                nameHome = ita.name;
                acronymHome = ita;
            }
            else if (message[2] == "uru") {
                nameHome = uru.name;
                acronymHome = uru;
            }
            else if (message[2] == "fra") {
                nameHome = fra.name;
                acronymHome = fra;
            }
            else if (message[2] == "ing") {
                nameHome = ing.name;
                acronymHome = ing;
            }
            else if (message[2] == "bel") {
                nameHome = bel.name;
                acronymHome = bel;
            }
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
        else if (message[1] == "blue") {
            if (message[2] == "bar") {
                nameGuest = bar.name;
                acronymGuest = bar;
            }
            else if (message[2] == "rea") {
                nameGuest = rea.name;
                acronymGuest = rea;
            }
            else if (message[2] == "manC") {
                nameGuest = manC.name;
                acronymGuest = manC;
            }
            else if (message[2] == "manU") {
                nameGuest = manU.name;
                acronymGuest = manU;
            }
            else if (message[2] == "ars") {
                nameGuest = ars.name;
                acronymGuest = ars;
            }
            else if (message[2] == "psg") {
                nameGuest = psg.name;
                acronymGuest = psg;
            }
            else if (message[2] == "liv") {
                nameGuest = liv.name;
                acronymGuest = liv;
            }
            else if (message[2] == "che") {
                nameGuest = che.name;
                acronymGuest = che;
            }
            else if (message[2] == "juv") {
                nameGuest = juv.name;
                acronymGuest = juv;
            }
            else if (message[2] == "bay") {
                nameGuest = bay.name;
                acronymGuest = bay;
            }
            else if (message[2] == "bra") {
                nameGuest = bra.name;
                acronymGuest = bra;
            }
            else if (message[2] == "ale") {
                nameGuest = ale.name;
                acronymGuest = ale;
            }
            else if (message[2] == "arg") {
                nameGuest = arg.name;
                acronymGuest = arg;
            }
            else if (message[2] == "esp") {
                nameGuest = esp.name;
                acronymGuest = esp;
            }
            else if (message[2] == "por") {
                nameGuest = por.name;
                acronymGuest = por;
            }
            else if (message[2] == "ita") {
                nameGuest = ita.name;
                acronymGuest = ita;
            }
            else if (message[2] == "uru") {
                nameGuest = uru.name;
                acronymGuest = uru;
            }
            else if (message[2] == "fra") {
                nameGuest = fra.name;
                acronymGuest = fra;
            }
            else if (message[2] == "ing") {
                nameGuest = ing.name;
                acronymGuest = ing;
            }
            else if (message[2] == "bel") {
                nameGuest = bel.name;
                acronymGuest = bel;
            }
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
    }
    else if (["!rand"].includes(message[0].toLowerCase())) {
        const allUniforms = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel, rea, bar, che, juv, bay, psg, liv, manC, manU, ars];
        var randHome = Math.floor(Math.random() * allUniforms.length);
        var randGuest = Math.floor(Math.random() * allUniforms.length);
        if (message[1] == null) {
            nameHome = allUniforms[randHome].name;
            acronymHome = allUniforms[randHome];
            nameGuest = allUniforms[randGuest].name;
            acronymGuest = allUniforms[randGuest];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniformes atualizados."), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
        else if (message[1] == "red") {
            nameHome = allUniforms[randHome].name;
            acronymHome = allUniforms[randHome];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
        else if (message[1] == "blue") {
            nameGuest = allUniforms[randGuest].name;
            acronymGuest = allUniforms[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
    }
    else if (["!vs"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
    }
    else if (["!seleçoes"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Seleções:", null, yellow, "bold");
        room.sendAnnouncement("Brasil <bra> Alemanha <ale> Argentina <arg> Espanha <esp> Portugal <por>", null, white, "normal");
        room.sendAnnouncement("Itália <ita> Uruguai <uru> França <fra> Inglaterra <ing> Bélgica <bel>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
}
else if (["!euro"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Times Europeus:", null, yellow, "bold");
        room.sendAnnouncement("Manchester City <manC>, Manchester United <manU>, Paris Saint-Germain <psg>, Real Madrid <rea>", null, white, "normal");
        room.sendAnnouncement("Barcelona <bar>, Arsenal <ars>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
}
    else if (["!regras"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("REGRAS DE JOGO"), null, white, "bold");
        room.sendAnnouncement(centerText("3x3 por 3minutos + 1minuto de prorrogação"), null, yellow, "normal");
        room.sendAnnouncement(centerText("FAIR PLAY pra ficar dahora"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão do time é o player1"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão escolhe o time com número da fila ou nome"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Uma vez escolhido fica até o final"), null, yellow, "normal");
        room.sendAnnouncement(centerText("AFK vai pro final da fila e pausamos pro cap escolher outro"), null, yellow, "normal");
    }
    else if (["!discord"].includes(message[0].toLowerCase())) {
        
        room.sendAnnouncement(centerText("    Ta aí nosso server!"), null, white, "normal");
        room.sendAnnouncement(centerText(" https://discord.gg/HbQ5Mvad "), null, white, "bold");
        room.sendAnnouncement(centerText(" Mantém o respeito, na moral!"), null, white, "normal");
    }
    else if (["!lenda"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("🥴 LENDA 🥴"), null, white, "bold");
    }
    else if (["!bar"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Todo o estádio, é um só clamor 🎵"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Azul-grená ao vento, um grito valente 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Temos um nome, que todos conhecem 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Barça, Barça, Barça! 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🔵🔴🔵...🔵🔴🔵...🔵🔴🔵"), null, white, "normal");
        }, 5000);
    }
    else if (["!rea"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Já corre a flecha 🎵"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Já ataca o meu Madrid 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 O grito que aprendi 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Madrid, Madrid, Madrid 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("⚪🟡⚪...⚪🟡⚪...⚪🟡⚪"), null, white, "normal");
        }, 5000);
    }
    else if (["!malco"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("❌"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Vai, malco! 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Vai, malco! 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Vai, malco! 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("❌"), null, white, "normal");
        }, 5000);
    }
    else if (["!onlyway"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("ONLY FANS?"), null, yellow, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Não..."), null, yellow, "bold");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("THE..."), null, yellow, "bold");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("...ONLY..."), null, yellow, "bold");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("...WAY!"), null, yellow, "bold");
        }, 5000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("THEONLYWAY"), null, white, "bold");
        }, 5000);
    }
    else if (["!smith"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("eu sou a LENDA!"), null, yellow, "bold");
        room.sendAnnouncement(centerText("by " + player.name), null, white, "normal");
    }
    else if (["!messi"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Messi, Messi, messi!"), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Ankara, Messi"), null, white, "bold");
        }, 1500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Ankara, Messi"), null, white, "bold");
        }, 3500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Gol, gol, gol!!!"), null, white, "bold");
        }, 6000);
    }
    else if (["!abob"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha, que nunca falha..."), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha, atacante de raça..."), null, white, "bold");
        }, 2000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha que canta e vibraaaaa!"), null, white, "bold");
        }, 4000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("ABOBRINHA, THE GOAT"), null, yellow, "bold");
        }, 6000);
    }
    else if (["!noob"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Olê, olê, olê, olê! 🎶" ), null, white, "normal");
        }, 50);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 é o NooB! 🎶" ), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("o NooB MaSteR!!" ), null, white, "bold");
        }, 4000);
    }
    else if (["!pepe"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("PÊEEPÊ NELES!"), null, white, "bold");
    }
    else if (["!soberbo"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫"), null, white, "normal");
        }, 25);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫...🍫"), null, white, "normal");
        }, 1000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫...🍫...🍫"), null, white, "normal");
        }, 2250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫... SOBEEEERBOOOOOOO! ...🍫"), null, white, "normal");
        }, 3500);
    }
    else if (["!gk"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("GOLEIROOO!"), null, white, "bold");
    }
    else if (["!me"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é braboooo!"), null, white, "bold");
    }
    else if (["!ain"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(player.name + ": AINN, PAI PARAAA!", null, yellow, "bold");
    }
    else if (["!gol"].includes(message[0].toLowerCase())) {
        var messages = [
            "LAAAAÇO! ⚽",
            "GOLAAAAÇO! ⚽",
            "É GOOOOL! ⚽",
            "OLHA O GOL, OLHA O GOL, OLHA O GOL!",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
    }
    else if (["!chupa"].includes(message[0].toLowerCase())) {
        var messages = [
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa, Lady Gaga! 👱‍♀️",
            "Chupaaa, imperatriz! 🧞‍♂️",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
    }
    else if (["!verdade"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é ruim pra caramba!"), null, yellow, "bold");
    }
    else if (["!adm"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            adminPassword = "true";
            console.log("adminPassword : " + adminPassword);
        }
    }
    if (message[0][0] == "!") {
        return false;
    }
    if (player.admin == true) {
        room.sendAnnouncement("Admin | " + player.name + ": " + mensagem, null, offYellow, "bold", 2);
        return false;
    }
    if (player.team === Team.RED) {
        room.sendAnnouncement(nameHome + " | " + player.name + ": " + mensagem, null, red, "bold", 1);
        return false;
    }
    if (player.team === Team.BLUE) {
        room.sendAnnouncement(nameGuest + " | " + player.name + ": " + mensagem, null, blue, "bold", 1);
        return false;
    }
    else {
        room.sendAnnouncement(player.name + ": " + mensagem, null, white, "normal", 1);
        return false;
    }
};

room.onPlayerActivity = function (player) {
};

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    GKList = new Array(2 * maxPlayers).fill(0);
    activePlay = false;
    Rposs = 0;
    Bposs = 0;
    lastPlayersTouched = [null, null];
    goldenGoal = false;
    goalsHome = [];
    goalsGuest = []; 
    room.sendAnnouncement(centerText("🥅🥅 PARTIDA INICIANDO 🥅🥅"), null, yellow, "bold");
	room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
	if (streak !== 0) {
		room.sendAnnouncement(centerText("         📢 " + nameHome + " está invicto 📢"), null, white, "normal");
		room.sendAnnouncement(centerText("      " + streak + " jogo(s) sem perder"), null, white, "normal");
	}
    setTimeout(function () {
        room.sendAnnouncement(centerText("Comandos:"), null, yellow, "bold", 0);
        room.sendAnnouncement(centerText("!help, !tag, !uniforme, !regras, !vs, !discord, !verdade"), null, yellow, "normal", 0);
        room.sendAnnouncement(centerText("Comemorações:"), null, yellow, "bold", 0);
        room.sendAnnouncement(centerText("!gol, !ain, !chupa, !lenda, !smith, !gk, !me"), null, yellow, "normal", 0);
    }, 6000);
};

room.onGameStop = function (byPlayer) {
    if (byPlayer && byPlayer.id == 0) {
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
};

room.onGamePause = function (byPlayer) {
    setTimeout(function () {
        var messages = [
            "Opa, vamos ter que levar para o VAR analizar...",
            "VAR está coferindo o lance...",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "bold", 0);
    }, 1500);
};

room.onGameUnpause = function (byPlayer) {
    var messages = [
        "⚽ Pro jogo! ⚽",
        "⚽ E o Juiz apita! ⚽"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    activePlay = false;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		room.sendAnnouncement(centerText("TOCA A MÚÚSICAAA, É GOOOOOL!!!"), null, green, "bold");
		room.sendAnnouncement(centerText("         ⚽ Gol de " + lastPlayersTouched[0].name + " ⚽"), null, white, "bold");
		room.sendAnnouncement(centerText("Velocidade do Chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, white, "normal");
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendAnnouncement(centerText("👟 Assistência: " + lastPlayersTouched[1].name + " 👟"), null, white, "bold");
		}
		if (team === 1) {
			goalsHome.push(lastPlayersTouched[0].name + " " + getTime(scores));
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
		}
	}
    else {
		room.sendAnnouncement("", null, white, "bold");
		room.sendAnnouncement(centerText("🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️"), null, yellow, "bold");
		room.sendAnnouncement(centerText("🤡 Gol de " + lastPlayersTouched[0].name + " 🤡"), null, white, "bold");
		room.sendAnnouncement(centerText("Velocidade do Chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, white, "normal");
        if (team === 1) {
			goalsHome.push(lastPlayersTouched[0].name + " " + getTime(scores));
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
		}
	}
	room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "normal");
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
};

room.onPositionsReset = function () {
    lastPlayersTouched = [null, null];
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
        room.sendAnnouncement(centerText(changedPlayer.name + " foi desmutado."), null, yellow, "normal");
        muteList = muteList.filter((p) => p != changedPlayer.name);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    var messages = [
        "Esse é o estádio que vai dar jogo.",
        "Mapa mudou, agora da jogão!",
        "Santiago Bernabéu? Não, aqui é futsal!"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, yellow, "bold", 0);
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
};
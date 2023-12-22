// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "🌱𝐅𝐀𝐙𝐄𝐍𝐃𝐀𝐎🌱 BOLEIROS 3X";
const botName = "👨‍🌾 Fazendeiro";
const maxPlayers = 30;
const roomPublic = false;
const geo = [{ "code": "br", "lat": -23.6, "lon": -45.4 }]; // Geo

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const adminPassword = "1813";
var registro = new Map();
const css = "border:2px solid;padding:8px;background:";

const scoreLimitPractice = 3;
const timeLimitPractice = 4;

const scoreLimitx3 = 3;
const timeLimitx3 = 4;

const frasesgoles = [" QUE GOLAÇO DO ", " O CARA TA DEMAIS, TA COMENDO A BOLA! ", " GOLLLLL QUANDO MAIS SE NECESSITA, ELE APARECE ", " O CARA TA PEGANDO FOGO🔥🔥🔥 ", " QUE PINTURA FEITA PELO ", " O CARA É O REI DO FUTEBOL ARTE, QUE FINALIZAÇÃO DO ", " QUE CHUTASSO CÓSMICO! De que planeta você veio? ", " FINALIZAÇÃO IMPRESSIONANTE DO ", " O CARA BAGUNÇOU O JOGO, QUE GOLAÇO "];

const frasesasis = [" 🔥🔥 COM O PASSE MILIMÉTRICO DO ", " QUE PASSE MAGNIFICO FEITO PELO ", " QUE BOLÃO MEUS AMIGOS, FOI DELE, ", " ASSISTENCIA FENOMENAL DO ", " UM ABSURDO ESSE PASSE DO "];

const frasesautogol = [" PRA ESSE LADO NÃO JOGADORKKKKKKK ", " PUTS, VACILOU IRMÃO ", " É O PIORZINHO DO MOMENTO ", " QUE DJABO QUE TU TA FAZENDO IRMÃO ", "O GOL NÃO É PRA ESSE LADO NÃO MOFI ", " CONFUNDIU OS LADOS, QUE BELEEEEZA ", " É PRO OUTRO LADO BURRO "];

var isTimeAddedShown = false;
var isTimeAddedShowndos = false;
var isTimeAddedShowntres = false;
var isTimeAddedShowncuatro = false;
var isTimeAddedShowncinco = false;
var isTimeAddedShownseis = false;
var isTimeAddedShownquince = false;
var isTimeAddedShownsiete = false;
room.setTeamsLock(true);

var _registros = { nome: [], senha: [] };

var blacklist = [
    {Nick: "", Auth: "", Conn: ""}
];
 
var administradores = 
 [["ns", "RKaDdRQn9i42QepTShgcy68VxTrC81wf2ac_j2utXRI"],
 ["Fkzq", "E9vANpW5L5ZhJCjpFrnTMEQK_9i7EdZbZBjUenZnIis"],
 ["Szczesny", "5zEwpKdUlqbey5HjWS30s0eglYn0tP3w_VEHE_JT_sU"],
 ["Ronaldo #7", "ot1jbMzQCsuVZKOzwb_pKA9r1rxCycyREsKCZin0p_U"],
 ["                    ! th7", "hig7Tzo0gfNfXmTDpoWNQwGIvs5aEwXJOdjlxP99esw"],
 ["Nav ⚡", "8RNi0Uxi2pdT9D_nLWsTFeJ9P7hgEBTG6vKnXvETqpo"],
 ["Dan", "K0kBmR1ekmkZSgxUMyVQ-jYF5z6597SCEb05_p-ShN8"]
];

var donos = ["ns", "Dan"]
var gerente = ["Szczesny"];
var adms = ["                    ! th7"]
var mod = ["Ronaldo #7", "nav", "𝓡𝓓𝓙"]
var teste = ["Fkzq"];

const authStaff = {
	mod_teste: ['E9vANpW5L5ZhJCjpFrnTMEQK_9i7EdZbZBjUenZnIis'], // Primeira Auth: Tralhex (Fkzq)
	mods: ['ot1jbMzQCsuVZKOzwb_pKA9r1rxCycyREsKCZin0p_U', '8RNi0Uxi2pdT9D_nLWsTFeJ9P7hgEBTG6vKnXvETqpo', 'kmwleKOrS-Fxr4BZlNd8ldXijUisWk1h_mfnZzFAHOs'], // Primeira Auth: Ronaldo #7 / Segunda Auth: Nav / Terceira Auth: RD7
	adms: ['hig7Tzo0gfNfXmTDpoWNQwGIvs5aEwXJOdjlxP99esw'], // Primeira Auth: Th7
	donos: ['mYGjFJ0ZaNq7qFAdSaBzQIjd27r9uVxnSGtDc3JJVWY','E9vANpW5L5ZhJCjpFrnTMEQK_9i7EdZbZBjUenZnIis'], // Primeira Auth: Ns / Segunda Auth: Dan
}

const loginStaff = {
	mod_teste: [],
	mods: [],
	adms: [],
	gerente: [],
	donos: [],
}

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;

var x3Map = '{"name":"FAZENDÃO 3X3","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":0,"height":0,"kickOffRadius":80,"cornerRadius":0,"color":"0E163E"},"vertexes":[{"x":550,"y":240,"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"trait":"ballArea","color":"FFFFFF"},{"x":0,"y":270,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"B6B6B8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"B6B6B8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"FFFFFF"},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"FFFFFF"},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"FFFFFF"},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8","_selected":true,"_data":{"mirror":{}}},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"FFFFFF"},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"FFFFFF"},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"FFFFFF"},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"FFFFFF"},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"FFFFFF"},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80],"color":"FFFFFF"},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80],"color":"FFFFFF"},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"FFFFFF"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line","color":"e72313"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line","color":"e72313"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line","color":"0fc3e8"},{"x":550,"y":80,"bCoef":0.1,"trait":"line","color":"0fc3e8"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":-556,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":556,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":575,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-583,"y":-233,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-608,"y":-214,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-569,"y":-221,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-598,"y":-221,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-585,"y":-211,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-592,"y":-179,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-608,"y":-203,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-571,"y":-193,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-595,"y":-187,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-588,"y":-199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-580,"y":-172,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-604,"y":-159,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-581,"y":-149,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-609,"y":-134,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"cMask":["wall"],"x":-23,"y":-15,"color":"B6B6B8","trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":21,"y":-16,"color":"B6B6B8","trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":-44.19999694824219,"y":-23.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":41.80000305175781,"y":-25.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":34.80000305175781,"y":-3.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":35.80000305175781,"y":-20.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":-36.19999694824219,"y":-0.20000076293945312,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":-39.19999694824219,"y":-18.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"bCoef":0.1,"cMask":["wall"],"trait":"line","x":-22.199996948242188,"y":-17.200000762939453,"cGroup":["wall"]},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-14.199996948242188,"y":-46.20000076293945},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-0.1999969482421875,"y":-39.20000076293945},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":16.800003051757812,"y":-41.20000076293945},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":21.800003051757812,"y":-16.200000762939453},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-15.199996948242188,"y":0.7999992370605469},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-19.199996948242188,"y":7.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-14.199996948242188,"y":13.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-9.199996948242188,"y":5.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-13.199996948242188,"y":2.799999237060547,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-14.199996948242188,"y":10.799999237060547,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":9.800003051757812,"y":-0.20000076293945312},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":5.8000030517578125,"y":6.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":10.800003051757812,"y":12.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":15.800003051757812,"y":4.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":11.800003051757812,"y":1.7999992370605469,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":10.800003051757812,"y":9.799999237060547,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-16.199996948242188,"y":25.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":13.800003051757812,"y":24.799999237060547}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"B6B6B8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":32,"v1":33,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":34,"v1":35,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":36,"v1":37,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":40,"v1":41,"curve":0,"vis":true,"color":"e72313","bCoef":0.1,"trait":"line","x":-550},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"0fc3e8","bCoef":0.1,"trait":"line","x":550},{"v0":56,"v1":57,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-381},{"v0":58,"v1":59,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":61,"v1":60,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":62,"v1":63,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":59,"v1":63,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":65,"v1":64,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":66,"v1":67,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":68,"v1":69,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-381},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":381},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":381},{"v0":81,"v1":80,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":83,"v1":82,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":84,"v1":85,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":86,"v1":87,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":390},{"v0":91,"v1":90,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":90,"v1":91,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":93,"v1":92,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":92,"v1":93,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":95,"v1":94,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":94,"v1":95,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":97,"v1":96,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":96,"v1":97,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":122,"v1":124,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":125,"v1":126,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":127,"v1":128,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":128,"v1":129,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":130,"v1":131,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":132,"v1":133,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":133,"v1":134,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":134,"v1":135,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"curve":-288.490765763234,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":136,"v1":137,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":-79.14521061621069,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":138,"v1":139,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":-79.14521061621069,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":140,"v1":141,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":60.605361440976175,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":142,"v1":143,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":139,"v1":138,"curve":26.333682345110496,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":43.37552727608634,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":144,"v1":145},{"curve":77.21120446954478,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":145,"v1":146},{"curve":-151.49993460439276,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":147,"v1":146},{"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":148,"v1":147,"curve":-34.125216418783815},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":150},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":150,"v1":151},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":151,"v1":152},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":152,"v1":149},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":151},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":152,"v1":151},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":152},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":152},{"curve":-2.0101720105083696,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":153,"v1":154},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":156},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":156,"v1":157},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":157,"v1":158},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":158,"v1":155},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":157},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":158,"v1":157},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":158},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":158},{"curve":-2.0101720105083696,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":159,"v1":160},{"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":161,"v1":162,"curve":-131.7210337912485}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red","color":"FFFFFF"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue","color":"FFFFFF"}],"discs":[{"radius":5,"pos":[-550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"6666FF","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"EFB810","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-240,"canvas_rect":[-661,-270,661,270],"a":[-661,-240],"b":[661,-240]}}},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-240,"canvas_rect":[-661,-270,661,270],"a":[-661,240],"b":[661,240]}}},{"normal":[0,1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-270,"canvas_rect":[-661,-270,661,270],"a":[-661,-270],"b":[661,-270]}}},{"normal":[0,-1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-270,"canvas_rect":[-661,-270,661,270],"a":[-661,270],"b":[661,270]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[-620,-270],"b":[-620,270]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[620,-270],"b":[620,270]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[-620,-270],"b":[-620,270]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[620,-270],"b":[620,270]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFFFFF"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
var practiceMap = '{"name":"FAZENDÃO 3X3","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":0,"height":0,"kickOffRadius":80,"cornerRadius":0,"color":"0E163E"},"vertexes":[{"x":550,"y":240,"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"trait":"ballArea","color":"FFFFFF"},{"x":0,"y":270,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"B6B6B8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"B6B6B8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"FFFFFF"},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"FFFFFF"},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"FFFFFF"},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8","_selected":true,"_data":{"mirror":{}}},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"FFFFFF"},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"FFFFFF"},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"FFFFFF"},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"FFFFFF"},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"FFFFFF"},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80],"color":"FFFFFF"},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80],"color":"FFFFFF"},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"FFFFFF"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line","color":"e72313"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line","color":"e72313"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line","color":"0fc3e8"},{"x":550,"y":80,"bCoef":0.1,"trait":"line","color":"0fc3e8"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":-556,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":556,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":575,"y":123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90,"color":"B6B6B8"},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90,"color":"B6B6B8"},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-583,"y":-233,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-608,"y":-214,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-569,"y":-221,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-598,"y":-221,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-585,"y":-211,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-592,"y":-179,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-608,"y":-203,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-571,"y":-193,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-595,"y":-187,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-588,"y":-199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-580,"y":-172,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-604,"y":-159,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-581,"y":-149,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-609,"y":-134,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"cMask":["wall"],"x":-23,"y":-15,"color":"B6B6B8","trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":21,"y":-16,"color":"B6B6B8","trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":-44.19999694824219,"y":-23.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":41.80000305175781,"y":-25.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":34.80000305175781,"y":-3.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":35.80000305175781,"y":-20.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":-36.19999694824219,"y":-0.20000076293945312,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"cMask":["wall"],"x":-39.19999694824219,"y":-18.200000762939453,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"bCoef":0.1,"cMask":["wall"],"trait":"line","x":-22.199996948242188,"y":-17.200000762939453,"cGroup":["wall"]},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-14.199996948242188,"y":-46.20000076293945},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-0.1999969482421875,"y":-39.20000076293945},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":16.800003051757812,"y":-41.20000076293945},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":21.800003051757812,"y":-16.200000762939453},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-15.199996948242188,"y":0.7999992370605469},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-19.199996948242188,"y":7.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-14.199996948242188,"y":13.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-9.199996948242188,"y":5.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-13.199996948242188,"y":2.799999237060547,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-14.199996948242188,"y":10.799999237060547,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":9.800003051757812,"y":-0.20000076293945312},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":5.8000030517578125,"y":6.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":10.800003051757812,"y":12.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":15.800003051757812,"y":4.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":11.800003051757812,"y":1.7999992370605469,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":10.800003051757812,"y":9.799999237060547,"curve":0},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":-16.199996948242188,"y":25.799999237060547},{"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","x":13.800003051757812,"y":24.799999237060547}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"B6B6B8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":32,"v1":33,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":34,"v1":35,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":36,"v1":37,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":40,"v1":41,"curve":0,"vis":true,"color":"e72313","bCoef":0.1,"trait":"line","x":-550},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"0fc3e8","bCoef":0.1,"trait":"line","x":550},{"v0":56,"v1":57,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-381},{"v0":58,"v1":59,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":61,"v1":60,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":62,"v1":63,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":59,"v1":63,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":65,"v1":64,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":66,"v1":67,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":68,"v1":69,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-381},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":381},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":381},{"v0":81,"v1":80,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":83,"v1":82,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":84,"v1":85,"curve":90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":86,"v1":87,"curve":-90,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":390},{"v0":91,"v1":90,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":90,"v1":91,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":93,"v1":92,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":92,"v1":93,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":95,"v1":94,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":94,"v1":95,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":97,"v1":96,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":96,"v1":97,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":122,"v1":124,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":125,"v1":126,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":127,"v1":128,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":128,"v1":129,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":130,"v1":131,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":132,"v1":133,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":133,"v1":134,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":134,"v1":135,"vis":true,"color":"2c3e50","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"curve":-288.490765763234,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":136,"v1":137,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":-79.14521061621069,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":138,"v1":139,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":-79.14521061621069,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":140,"v1":141,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":60.605361440976175,"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":142,"v1":143,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"vis":true,"color":"B6B6B8","cMask":["wall"],"v0":139,"v1":138,"curve":26.333682345110496,"trait":"line","bCoef":0.1,"cGroup":["wall"]},{"curve":43.37552727608634,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":144,"v1":145},{"curve":77.21120446954478,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":145,"v1":146},{"curve":-151.49993460439276,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":147,"v1":146},{"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":148,"v1":147,"curve":-34.125216418783815},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":150},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":150,"v1":151},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":151,"v1":152},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":152,"v1":149},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":151},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":152,"v1":151},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":152},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":149,"v1":152},{"curve":-2.0101720105083696,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":153,"v1":154},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":156},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":156,"v1":157},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":157,"v1":158},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":158,"v1":155},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":157},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":158,"v1":157},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":158},{"curve":-48.682179873385024,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":155,"v1":158},{"curve":-2.0101720105083696,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":159,"v1":160},{"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","v0":161,"v1":162,"curve":-131.7210337912485}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red","color":"FFFFFF"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue","color":"FFFFFF"}],"discs":[{"radius":5,"pos":[-550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"6666FF","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"EFB810","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-240,"canvas_rect":[-661,-270,661,270],"a":[-661,-240],"b":[661,-240]}}},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-240,"canvas_rect":[-661,-270,661,270],"a":[-661,240],"b":[661,240]}}},{"normal":[0,1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-270,"canvas_rect":[-661,-270,661,270],"a":[-661,-270],"b":[661,-270]}}},{"normal":[0,-1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-270,"canvas_rect":[-661,-270,661,270],"a":[-661,270],"b":[661,270]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[-620,-270],"b":[-620,270]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[620,-270],"b":[620,270]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[-620,-270],"b":[-620,270]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-661,-270,661,270],"a":[620,-270],"b":[620,270]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFFFFF"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';

/* OPTIONS */

var afkLimit = 15;
var drawTimeLimit = Infinity;
var maxTeamSize = 4; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 2;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = true; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = true;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */
const logados = [];
var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);

/* OBJECTS */

function Goal(time, team, striker, assist) {
    this.time = time;
    this.team = team;
    this.striker = striker;
    this.assist = assist;
}

function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}



    
function getDatehoras(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
}
    
function getDateInfo(){
      let data = new Date(),
      dia=data.getDate().toString().padStart(2, '0'),
      mes=(data.getMonth()+1).toString().padStart(2, '0'),
      ano=data.getFullYear(),
      horas=data.getHours().toString().padStart(2, '0'),
      minutos=data.getMinutes().toString().padStart(2, '0');
      segundos=data.getSeconds().toString().padStart(2, '0');
      return `${dia} do ${mes} de ${ano}, ás ${horas}:${minutos}:${segundos}`;
}
    
    
function dataehora(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    segundos=data.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes} de ${ano}, ás ${horas}:${minutos} e ${segundos} segundos`;
}
    
    
function getDateInfo(){
        let data = new Date(),
        dia=data.getDate().toString().padStart(2, '0'),
        mes=(data.getMonth()+1).toString().padStart(2, '0'),
        ano=data.getFullYear(),
        horas=data.getHours().toString().padStart(2, '0'),
        minutos=data.getMinutes().toString().padStart(2, '0');
        segundos=data.getSeconds().toString().padStart(2, '0');
        return `${dia} do ${mes} de ${ano}, ás ${horas}:${minutos}:${segundos}`;
}
    
    
function sendAnnouncementToDiscord2(message) {
    
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1079130402477834290/OGK1az_WljdOyv_xJFGYwwTH1MGX2OFSGVVxqe6Tdrs8IfjT8cXzdiLvU1ZbAMDO2Ir"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    
    var params = {
        avatar_url: '',
        username: 'Logs Entradas',
        content: message
        };
    
        request.send(JSON.stringify(params));
}

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // returns the current time of the game
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function PublicitaDiscord(player) {
    var scores = room.getScores();
    if (scores.time > 5 && !isTimeAddedShownseis) {
    room.sendAnnouncement("▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0xFF0036, "bold")
    room.sendAnnouncement("▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0xFF0036, "bold")
    room.sendAnnouncement("▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0xFF0036, "bold");
    room.sendAnnouncement("Entre em nosso Discord: https://discord.gg/ddxyf7BbYy", null, 0xFF0036, "bold");
    isTimeAddedShownseis = true;
    }
}



function PublicitaHelp(player) {
    var scores = room.getScores();
    if (scores.time > 10 && !isTimeAddedShowncinco) {
    room.sendAnnouncement("「📣」 𝘂𝘀𝗲 !𝗵𝗲𝗹𝗽 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀", player, 0xd733ff, "bold", 0);
    isTimeAddedShowncinco = true;
    }
}



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

function randomBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                var r = getRandomInt(teamS.length);
                room.setPlayerTeam(teamS[r].id, Team.RED);
                teamS = teamS.filter((spec) => spec.id != teamS[r].id);
                room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
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
    game.scores = scores;
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
        room.sendChat("⚽ Gol De Ouro, o Primeiro a marcar vence !");
    }
    if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            room.sendChat("⌛ Faltam 60 segundos para o fim da partida !");
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

function endGame(winner) { // handles the end of a game : no stopGame function inside
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendChat("🔴 O Vermelhão Ganhou " + scores.red + "-" + scores.blue + " O streak atual é de : " + streak + " 🏆");
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendChat("🔵 O Azulão Ganhou " + scores.blue + "-" + scores.red + "  O streak atual é de  : " + streak + " 🏆");
    }
    else {
        streak = 0;
        room.sendChat("💤 Que jogo meus amigos, mas infelizmente acabou empatando! 💤");
    }
    room.sendChat("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
    scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " y " + GKList[1].name + " Mantiveram um CS ! ") : room.sendChat("🏆 " + GKList[1].name + " manteve o CS ! ")) : scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " Manteve o CS ! ") : null;
    updateStats();
}

function quickRestart() {
    room.stopGame();
    setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
    setTimeout(() => { room.startGame(); }, 2000);
    setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    room.sendChat("Modo lento ativado (2 segundos)!");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendChat("Modo lento terminado.");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
    if (map != '') {
        room.setCustomStadium(map);
    } else {
        console.log("error cargando mapa")
        room.setDefaultStadium("Classic");
    }
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
    if (countAFK && (teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", se não se mover nos próximos " + Math.floor(afkLimit / 4) + " segundos, você vai ser kickado!", extendedP[i][eP.ID]);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
            }
            room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
        }
    }
}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
    updateTeams();
    if (inChooseMode) {
        if (players.length == 6) {
            loadMap(x3Map, scoreLimitx3, timeLimitx3); 
        }
        getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
            if (teamR.length < teamB.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    room.sendChat("🤖 Quit detectado. jogo terminado 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
            else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    room.sendChat("🤖 Quit detectado. jogo terminado 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
        }
    }
    if (inChooseMode) {
        if (players.length < 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
        }
        if (teamR.length == 0 || teamB.length == 0) {
            teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
            return;
        }
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            room.sendChat("Acabou as opções, deixa que eu escolho");
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5 * i);
                }
            }
            return;
        }
        if (streak == 0 && room.getScores() == null) {
            if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
                room.sendChat("🤖 Equilibrando equipes... 🤖");
                teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
            }
        }
        if (teamR.length == teamB.length && teamS.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }
        capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function balanceTeams() {
    if (!inChooseMode) {
        if (players.length == 1 && teamR.length == 0) { // 1 player
            quickRestart();
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
            room.setPlayerTeam(players[0].id, Team.RED);
        }
        else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) { // spec players supply required players
            const n = Math.abs(teamR.length - teamB.length);
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.BLUE);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.RED);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) > teamS.length) { //no sufficient players
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length == 1) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            }
            else if (players.length == 6) {
                quickRestart();
                loadMap(x3Map, scoreLimitx3, timeLimitx3);
            }
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            }
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) { //choose mode
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        }
        else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) { //2 in red 2 in blue and 2 or more spec
            if (teamR.length == 2) {
                quickRestart();
                if (!teamS.length == 2){
                    loadMap(x3Map, scoreLimitx3, timeLimitx3);
                }
            }
            topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
        room.sendChat("[PV] Para escolher um jogador, Digite seu número da lista, ou use 'top', 'random' o 'bottom'.", teamR[0].id);
    timeOutCap = setTimeout(function(player) { room.sendChat("[PV] Rápido @" + player.name + ", só faltam " + Number.parseInt(chooseTime / 2) + " segundos para escolher !", player.id); timeOutCap = setTimeout(function(player) { room.kickPlayer(player.id, "Acabou o tempo!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length != 0) {
        room.sendChat("[PV] Para escolher um jogador, Digite seu número da lista, ou use 'top', 'random' o 'bottom'.", teamR[0].id);
    timeOutCap = setTimeout(function(player) { room.sendChat("[PV] Rápido @" + player.name + ", só faltam " + Number.parseInt(chooseTime / 2) + " segundos para escolher !", player.id); timeOutCap = setTimeout(function(player) { room.kickPlayer(player.id, "Acabou o tempo!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
    var cstm = "[PV] Jogadores : ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendChat(cstm, player.id);
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
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
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
                k[0] = teamR[i];
                k[1] = teamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = teamB[i];
                k[1] = teamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        findGK();
    }
}

function updateStats() {
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
        var stats;
        for (var i = 0; i < allReds.length; i++) {
            localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < allBlues.length; i++) {
            localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < game.goals.length; i++) {
            if (game.goals[i].striker != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
                    stats[Ss.GL]++;
                    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
                }
            }
            if (game.goals[i].assist != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
                    stats[Ss.AS]++;
                    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
                }
            }
        }
        if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[Ss.GK]++;
            game.scores.blue == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[Ss.GK]++;
            game.scores.red == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
    }
}

function findGK() {
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
    var tableau = [];
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

function sendAnnouncementToDiscord(message) {
  var request = new XMLHttpRequest();
  request.open(
    "POST", ""
  );

  request.setRequestHeader("Content-type", "application/json");

  var params = {
    avatar_url: "",
    username: "Log",
    content: message,
  };

  request.send(JSON.stringify(params));
}

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {

    var conn = player.conn
    var ipv4 = conn.match(/.{1,2}/g).map(function(v){
        return String.fromCharCode(parseInt(v, 16));
      }).join('');
      sendAnnouncementToDiscord2(
          "```"+"📝Informações do jogador, conn, auth, IP e data ⏰" + "\n"+
  
      "👨‍🌾" +  "🌱𝐅𝐀𝐙𝐄𝐍𝐃𝐀𝐎🌱 BOLEIROS 3X " + "👨‍🌾" +  "\n" +
      "✨ Nick: " + player.name + "\n"+
      "🌐 Conn: " + player.conn + "\n" +
      "💻 Auth: " + player.auth + "\n"+
      "🌏 Ipv4 " + (ipv4) + "\n" +
      "⏰ Data: " + `${getDateInfo()}` +"```");

    if(isBlacklisted(player) == true) room.kickPlayer(player.id,"Você foi banido, saiba mais em (https://discord.gg/ddxyf7BbYy)",true);
  
      function isBlacklisted(player){
      return blacklist.filter(b => b.Auth == player.auth || b.Conn == player.conn).length > 0;
    }

	console.log("---------------------------------------------------");
	console.log("[📢]Nick: "+player.name);
	console.log("[📢]Conn: "+player.conn);
	console.log("[📢]Auth: "+player.auth);
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    updateRoleOnPlayerIn();
  
    room.sendAnnouncement("---------------------------------------------------", player.id,0x4A3FF5);
    room.sendAnnouncement("👋 𝗕𝗲𝗺 𝗩𝗶𝗻𝗱𝗼! " + player.name + " a sala da 👨‍🌾🌱𝐅𝐀𝐙𝐄𝐍𝐃𝐀𝐎🌱👨‍🌾", null, 0xFFC37,"bold");
    room.sendAnnouncement("Digite !help para ver os comandos disponívels", player.id,0xFFC375,"bold");
    room.sendAnnouncement("---------------------------------------------------", player.id, 0x4A3FF5);
    
    if (localStorage.getItem(getAuth(player)) == null){
        stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name]
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
    }
	
	if (registro.get(player.name)) {
    room.sendAnnouncement("Logue usando !login senha", player.id, 0xFFFFFF, 'bold');
  } else {
    room.sendAnnouncement(
      "Se registre com o comando: !register senha",
      player.id,
	  0x34eb49,
	  'bold',
	  2
    );
  }
  
room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendChat(changedPlayer.name + " está AFK !");
        return;
    }
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
        }
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        setActivity(changedPlayer, 0);
    }
    if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
                }
            }
            return;
        }
        else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        }
        else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        }
        else if (teamB.length < teamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        }
        else {
            choosePlayer();
        }
    }
}

room.onPlayerLeave = function (player) {
    if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut();
    if (room.getPlayerList().length == playersToSetPublic){
        room.setPassword();
        room.sendChat("[✅] Server aberto ao público.",null);
    } 
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

function setRegister(player, senha) {
  if (registro.get(player.name))
    room.sendAnnouncement(
      "Você já está registrado.",
      player.id,
      0x7fc947,
      "normal",
      2
    );
  else {
    registro.set(player.name, senha);
    localStorage.setItem("registros", JSON.stringify([...registro]));
    room.sendAnnouncement("Registrado!", player.id, 0x33f24c, "normal", 2);
    room.sendAnnouncement(`Senha: ${senha}`, player.id, 0x33f24c, "normal", 2);
  }
}

function getLogin(player, senha) {
  if (registro.get(player.name)) {
    if (registro.get(player.name) == senha) {
      room.sendAnnouncement(
        "O player " + player.name + " logou !",
        null,
        0x34eb49,
        "normal",
        1
      );
	  logados.push(player.id)
    } else
      room.sendAnnouncement(
        "Senha incorreta.",
        player.id,
        0xe60909,
        "normal",
        2
      );
  } else
    room.sendAnnouncement(
      "Você não tem registro. Digite !register senha para se registrar.",
      player.id,
      0xfcec56,
      "normal",
      2
    );
}

// UNIFORMES


const uniformes = [
	{
		name: 'Real Madrid',
		code: '!rmd',
		angle: 0,
		fontColor: 0xDAA520,
		backgroundColors: [0xFFFAFA]
	},
	{
		name: 'Borussia Dortmund',
		code: '!bor',
		angle: 60,
		fontColor: 0x000000,
		backgroundColors: [0xE8FF1C]
	},
	{
		name: 'Brasil 2',
		code: '!bra2',
		angle: 60,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x2115C2]
	},
	{
		name: 'Palmeiras',
		code: '!pal',
		angle: 90,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x084D08]
	},
	{
		name: 'Botafogo',
		code: '!bot',
		angle: 90,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x000000]
	},
	{
		name: 'Alemanha',
		code: '!ale',
		angle: 90,
		fontColor: 0xFFFAFA,
		backgroundColors: [0x000000, 0xFF0000, 0xFFA500]
	},
	{
		name: 'Brasil',
		code: '!bra',
		angle: 360,
		fontColor: 0x008B00,
		backgroundColors: [0xEEC900, 0xEEC900]
	},
	{
		name: 'Espanha',
		code: '!esp',
		angle: 90,
		fontColor: 0xFFFAFA,
		backgroundColors: [0xFF0000, 0xCCCC33, 0xFF0000]
	},{
		name: 'Brasil',
		code: '!bra',
		angle: 360,
		fontColor: 0x008B00,
		backgroundColors: [0xEEC900, 0xEEC900]
	},
	{
		name: 'Flamengo',
		code: '!fla',
		angle: 90,
		fontColor: 0xFFFAFA,
		backgroundColors: [0xFF0000, 0x240901, 0xFF0000]
	},
	{
		name: 'Holanda',
		code: '!hol',
		angle: 180,
		fontColor: 0x000000,
		backgroundColors: [0xFF7F00, 0xFF7F00, 0xFF7F00]
	},
	{
		name: 'Argentina',
		code: '!arg',
		angle: 90,
		fontColor: 0xFCBF49,
		backgroundColors: [0x75AADB, 0xFFFFFF, 0x75AADB]
	},
	{
		name: 'Barcelona',
		code: '!bar',
		angle: 360,
		fontColor: 0xFFD700,
		backgroundColors: [0x00008B, 0x8B0000, 0x00008B]
	},
	{
		name: 'Vasco',
		code: '!vas',
		angle: 135,
		fontColor: 0xFF0000,
		backgroundColors: [0xFFFFFF, 0x000000, 0xFFFFFF]
	},
	{
		name: 'Sampaio Corrêa',
		code: '!smp',
		angle: 90,
		fontColor: 0xFFFFFF,
		backgroundColors: [0xFF0000, 0xFFFF00, 0x006400]
	},
	{
		name: 'Itália',
		code: '!bra',
		angle: 0,
		fontColor: 0xDAA520,
		backgroundColors: [0xFF0000, 0xFFFFFF, 0x006400]
	},
	{
		name: 'Grêmio',
		code: '!grm',
		angle: 0,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x75ACFF, 0x000000, 0x75ACFF]
	},
	{
		name: 'Portugal',
		code: '!por',
		angle: 315,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x008A08, 0xFF0000, 0xFF0000]
	},
	{
		name: 'Holanda2',
		code: '!hol2',
		angle: 0,
		fontColor: 0xFF8000,
		backgroundColors: [0x000000, 0x000000]
	},
	{
		name: 'Moto Club',
		code: '!mot',
		angle: 90,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x000000, 0xFF0000, 0x000000]
	},
		{
		name: 'Manchester City',
		code: '!mct',
		angle: 60,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x0ADEFF]
	},
		{
		name: 'Bélgica',
		code: '!bel',
		angle: 60,
		fontColor: 0xFFFFFF,
		backgroundColors: [0xFF0000, 0xF8FF33, 0x0C0B1C]
	},
		{
		name: 'Cruzeiro',
		code: '!cru',
		angle: 0,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x0600A6]
	},
		{
		name: 'América-MG',
		code: '!amg',
		angle: 0,
		fontColor: 0xFFFFFF,
		backgroundColors: [0x109600, 0x000000, 0x109600]
	},
		{
		name: 'São Paulo',
		code: '!sao',
		angle: 0,
		fontColor: 0xFF0000,
		backgroundColors: [0xFFFFFF]
	},
]


/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    var salvar = message;
    originalMessage = message;


	/* LOGIN & REGISTER */

  if (message.toLowerCase().substr(0, 10) == "!register ") {
    setRegister(player, message.substr(10));
    return false;
  }

  // !login password
  if (
    message.toLowerCase().substr(0, 7) == "!login "
  ) {
    getLogin(player, message.substr(7));
    return false;
  }
	

    message = message.split(/ +/);
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	
	
	
	if(uniformes.find(u => u.code === message[0].toLowerCase())) {
		if(player.team !== 3) {
			if(player.id === teamR[0]?.id || player.id === teamB[0]?.id) {
				uniSelected = uniformes.find(u => u.code === message[0].toLowerCase())
				console.log(uniSelected)
				room.setTeamColors(player.team, uniSelected.angle, uniSelected.fontColor, uniSelected.backgroundColors);
				room.sendAnnouncement(`O player ${player.name} escolheu o uniforme de ${uniSelected.name}`, null, 0x04B404, 'bold', 1)
			}
		}
	}
	
	if(message[0].toLowerCase() === '!staff') {
		console.log('ok...')
		
		for(cargo in authStaff) {
			console.log(cargo)
			console.log(authStaff[cargo])
			if(authStaff[cargo].includes(getAuth(player))) {
				room.setPlayerAdmin(player.id, true)
		    const corCargo = cargo === "adms" ?  0xFF0000 : (cargo === "donos" ? 0x09F7AD : 0xF7099D)
				room.sendAnnouncement(`O Jogador ${player.name} logou como  ${cargo.substr(0, cargo.length-1).toUpperCase()}`, null, corCargo, 'bold')
			}
		}
	}
	
	if(message[0].toLowerCase() === '!discord') {
		room.sendAnnouncement('Entre já no nosso discord: https://discord.gg/ddxyf7BbYy', player.id, 0xFFFFFF)
	}

	
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📄] Comandos : !me, !mostrarstats, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id,0x309D2B,"bold");
        player.admin ? room.sendAnnouncement("[📄] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id,0x309D2B,"bold") : null;
    }
    else if (["!afk"].includes(message[0].toLowerCase())) {
        if (players.length != 1 && player.team != Team.SPECTATORS) {
            if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
                room.setPlayerTeam(player.id, Team.SPECTATORS);
            }
            else {
                room.sendChat("Não pode ficar afk quando esta em partida !", player.id);
                return false;
            }
        }
        else if (players.length == 1 && !getAFK(player)) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
        setAFK(player, !getAFK(player));
	    room.sendAnnouncement(player.name + (getAFK(player) ? " está AFK !" : " não esta mais afk !"),null,(getAFK(player) ? 0xFF7B08 : 0x8FFF8F));
	getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
    localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"];
    setTimeout (() => { if (getAFK(player) && stats[Ss.RL] != "vip"){room.kickPlayer(player.id,"Tempo de AFK Excedido",false) } },30 * 60 * 1000)
    return false;
}
    else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de AFK : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
            }
        }
        if (cstm == "[PV] Lista de AFK : ") {
            room.sendChat("[PV] No hay nadie en la lista de AFK !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!me"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
	room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidas Jogadas: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Assistencias: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id, 0x73EC59, "bold");
    room.sendAnnouncement("「👓」 Esta mensagem só pode ser vista por você, caso queira mostrar a todos use o comando '!mostrarstats'!", player.id, 0xFF7900, "bold");
    }
    else if (["!mostrarstats"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("[📄] O jogador " + player.name + " mostrou seus stats! [!mostrarstats]", null, 0xFF7900, "bold")
    room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidas Jogadas: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Assistências: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null, 0x73EC59, "bold");
    }
    else if (["!games"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Ainda não foram jogados jogos suficientes.", player.id,0xFF0000);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🎮 Partidas Jogadas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!wins"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Ainda não foram jogados jogos suficientes.", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ✅ Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!goats"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key) && JSON.parse(localStorage.getItem(key))[Ss.WI] > 400) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Ainda não foram jogados jogos suficientes.", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ✅ GOATS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!goals"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[📄] Ainda não foram jogados jogos suficientes.", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ⚽️ Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!assists"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Ainda não foram jogados jogos suficientes.", player.id);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 👟 Assistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!cs"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Ainda não foram jogados jogos suficientes.", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🤚 CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!claim"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            var stats;
            localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
            if (stats[Ss.RL] != "master") {
                stats[Ss.RL] = "master";
                room.sendAnnouncement("[📄] "+player.name+" ACABA DE LOGAR COMO STAFF",null,0xF8FF00,"bold");
                localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
        }
    }
    else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "player") {
                        stats[Ss.RL] = "admin";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " agora é administrador do servidor !");
                    }
                }
            }
        }
    }
    else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "admin") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " não é mais administrador do servidor !");
                        stats[Ss.RL] = "player";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de muteados : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
            }
        }
        if (cstm == "[PV] Lista de Muteados : ") {
            room.sendChat("[PV] Ninguém está mutado !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            updateTeams();
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                }
                else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " foi mutado por " + (timeOut / 60000) + " minutos !");
                    }
                }
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, 30 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " te mutaram por 30 minutors!");
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin && message.length >= 2) {
            if (message[1] == "all") {
                extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
                room.sendChat("A lista de mutes foi limpa");
            }
            else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                setMute(room.getPlayer(Number.parseInt(message[1])), false);
                room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado !");
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                        setMute(room.getPlayer(Number.parseInt(message[1])), false);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
                    }
                }
            }
        }
    }
    else if (["!slow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                slowMode = 2;
                room.sendChat("Modo lento ativado (2 segundos)!");
            }
            else if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        slowMode = Number.parseInt(message[1]);
                        room.sendChat(slowMode + " segundos, modo lento ativado !");
                        return false;
                    }
                }
                slowMode = 2;
                room.sendChat("Modo lento ativado (2 segundos)!");
            }
        }
    }
    else if (["!endslow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            slowMode != 0 ? room.sendChat("Modo lento terminado.") : null;
            slowMode = 0;
        }
    }
    else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendChat("[PV] Ninguém está banido!", player.id);
            return false;
        }
        var cstm = "[PV] Lista de baneados : ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendChat(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("Bans removidos!");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " foi banido do servidor !");
                        }
                        setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
                    }
                }
            }
        }
    }
    else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Bye !", false);
    }
    else if (["!setvip", "!vip"].includes(message[0].toLowerCase())) {
        message = message.split(" ");
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "player") {
                        stats[Ss.RL] = "vip";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.sendAnnouncement("[👑]" + room.getPlayer(Number.parseInt(message[1])).name + " agora é VIP !");
                    }
                }
            }
        }
    }
    else if (["!novip"].includes(message[0].toLowerCase())) {
        message = message.split(" ");
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "vip") {
                        room.sendAnnouncement("[👤]" + room.getPlayer(Number.parseInt(message[1])).name + " Você não é jogador VIP !");
                        stats[Ss.RL] = "player";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                    }
                }
            }
        }
    }

    if (message[0][0] == "!") { //if a command is received, after process, exit
        return false;
    }

    if (teamR.length != 0 && teamB.length != 0 && inChooseMode) { //choosing management
        if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
            if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    redCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " Escolheu Top !");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    var r = getRandomInt(teamS.length);
                    room.setPlayerTeam(teamS[r].id, Team.RED);
                    redCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " Escolheu Random !");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
                    redCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " Escolheu Bottom !");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] O número que escolheu é invalido !", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
                        room.sendChat(player.name + " Escolheu " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
            if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    blueCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " Escolheu Top !");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
                    blueCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " Escolheu Random !");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
                    blueCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " Escolheu Bottom !");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] O número que escolheu é invalido !", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
                        room.sendChat(player.name + " Escolheu " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
        }
    }

    if (getMute(player)) {
        room.sendChat("Você está mutado.", player.id);
        return false;
    }
    if (slowMode > 0) {
        if (!player.admin) {
            if (!SMSet.has(player.id)) {
                SMSet.add(player.id);
                setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
            }
            else {
                return false;
            }
        }
    }
	
	
	
// chat de staff
    if(donos.includes(player.name)) {
        room.sendAnnouncement(`👑 [DONO] ${player.name}: ${message.join(" ")}`, null, Cor.YELLOW, 'bold')
        return false
    }
    if(adms.includes(player.name)) {
        room.sendAnnouncement(`💂‍ [ADMIN] ${player.name}: ${message.join(" ")}`, null, Cor.YELLOW, 'bold')
        return false
    }
    if(mods.includes(player.name)) {
        room.sendAnnouncement(`👮‍ [MOD] ${player.name}: ${message.join(" ")}`, null, Cor.YELLOW, 'bold')
        return false
    }
    if(teste.includes(player.name)) {
        room.sendAnnouncement(`👷‍ [MOD STAFF] ${player.name}: ${message.join(" ")}`, null, Cor.YELLOW, 'bold')
        return false
    }
	
    console.log("auth: "+getAuth(player));
    if (localStorage.getItem(getAuth(player)) && logados.includes(player.id)){
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        var announcement = "";
        var chatColor = "";
        if (stats[Ss.WI] > 1000){
            announcement += "🔥 「𝐆𝐎𝐀𝐓」"
            chatColor = "0xFF8000"
        } else if (stats[Ss.WI] > 900){
            announcement += "🔸 「𝗦𝘂𝗽𝗲𝗿-𝗘𝘀𝘁𝗿𝗲𝗹𝗮」"
            chatColor = "0x0040FF"
        } else if (stats[Ss.WI] > 800){
            announcement += "🔹 「𝗘𝘀𝘁𝗿𝗲𝗹𝗮」"
            chatColor = "0xFF7900"
        } else if (stats[Ss.WI] > 700){
            announcement += "✓ 「𝗖𝗮𝗺𝗽𝗲𝗮̃𝗼」"
            chatColor = "0xFFFF00"
        } else if (stats[Ss.WI] > 500){
            announcement += "👑 「𝗖𝗿𝗮𝗾𝘂𝗲」"
            chatColor = "0xFFC375"
        } else if (stats[Ss.WI] > 400){
            announcement += "💲 「𝗟𝗲𝗻𝗱𝗮」"
            chatColor = "0xBFFF00"
        } else if (stats[Ss.WI] > 350){
            announcement += "👿 「𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝘁𝗲」"
            chatColor = "0xEC77CE"
        } else if (stats[Ss.WI] > 300){
            announcement += "💪 「𝗥𝗲𝘃𝗲𝗹𝗮𝗰̧𝗮̃𝗼」"
            chatColor = "0xFA58DF"
        } else if (stats[Ss.WI] > 200){
            announcement += "👽 「𝗩𝗲𝘁𝗲𝗿𝗮𝗻𝗼」"
            chatColor = "0x73EC59"
        } else if (stats[Ss.WI] > 150){
            announcement += "👿 「𝗜𝗺𝗽𝗮𝗿𝗮́𝘃𝗲𝗹」"
            chatColor = "0xFE2E2E"
        } else if (stats[Ss.WI] > 100){
            announcement += "⚽ 「𝗣𝗿𝗼𝗳𝗶𝘀𝘀𝗶𝗼𝗻𝗮𝗹」"
            chatColor = "0x04B404"
        } else if (stats[Ss.WI] > 80){
            announcement += "😎 「𝗔𝗽𝗿𝗲𝗻𝗱𝗶𝘇」"
            chatColor = "0x2EFEF7"
        } else if (stats[Ss.WI] > 50){
            announcement += "🎖️ 「𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗶𝗮𝗻𝘁𝗲」"
            chatColor = "0xDDD4DB"
        } else {
			announcement += "🦴 「𝗡𝗼𝗼𝗯」"
            chatColor = "0xDDD4DB"
        }
        console.log(announcement);
        console.log(chatColor);
        var playerRole = JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL];
        console.log(announcement);
        console.log(chatColor);
        console.log(originalMessage)
        announcement += player.name + ": " + originalMessage;
        room.sendAnnouncement(announcement, null, chatColor);
        return false;   
    }

	if(!logados.includes(player.id)) {
		room.sendAnnouncement(`❌ ${player.name}: ${originalMessage}`, null, 0xD4D4D4)
        return false;
	}
}

room.onPlayerActivity = function (player) {
    setActivity(player, 0);
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
    game = new Game(Date.now(), room.getScores(), []);
    countAFK = true;
    activePlay = false;
    goldenGoal = false;
    endGameVariable = false;
    lastPlayersTouched = [null, null];
    Rposs = 0;
    Bposs = 0;
    GKList = [];
    allReds = [];
    allBlues = [];
    if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
        for (var i = 0; i < maxTeamSize; i++) {
            allReds.push(teamR[i]);
            allBlues.push(teamB[i]);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        extendedP[i][eP.GK] = 0;
        extendedP[i][eP.ACT] = 0;
        room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    deactivateChooseMode();
	const uniCodes = uniformes.map(u => u.code)
	room.sendAnnouncement(`UNIFORMES DISPONÍVEIS: ${uniCodes}`, null, 0xFFFFFF, 'bold')
}

room.onGameStop = function (byPlayer) {
    if (byPlayer.id == 0 && endGameVariable) {
        updateTeams();
        if (inChooseMode) {
            if (players.length == 2 * maxTeamSize) {
                inChooseMode = false;
                resetBtn();
                for (var i = 0; i < maxTeamSize; i++) {
                    setTimeout(() => { randomBtn(); }, 400 * i);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else {
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
                setTimeout(() => { topBtn(); }, 500);
            }
        }
        else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    room.setPlayerTeam(teamB[0].id, Team.RED);
                    room.setPlayerTeam(teamR[0].id, Team.BLUE);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 4) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                activateChooseMode();
            }
            else if (players.length == 6) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
        }
    }
}

room.onGamePause = function (byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
    if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    }
}

room.onTeamGoal = function (team) {
    activePlay = false;
    countAFK = false;
    const scores = room.getScores();
    game.scores = scores;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            var frasegol = frasesgoles[(Math.random() * frasesgoles.length) | 0]
            var fraseasis = frasesasis[(Math.random() * frasesasis.length) | 0]
            room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + fraseasis + lastPlayersTouched[1].name + ". Velocidade Da Bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF250D : 0x3075FF),'bold');
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
        }
        else {
            var frasegol = frasesgoles[(Math.random() * frasesgoles.length) | 0]
            room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + " ! Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " +  (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF250D : 0x3075FF),'bold');
        }
    }
    else {
        var fraseautogol = frasesautogol[(Math.random() * frasesautogol.length) | 0]
        room.sendAnnouncement("😂 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + " ! Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF250D : 0x3075FF),'bold');
        game.goals.push(new Goal(scores.time, team, null, null));
    }
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
}

room.onPositionsReset = function () {
    countAFK = true;
    lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
	if (localStorage.getItem("registros") == null)
    console.error(
      `%c\u2716 localStorage [ registros ]`,
      css + "#FF0000;color: white;"
    );
  else {
    registro = new Map(JSON.parse(localStorage.registros));
    console.log(`%c\u2714 localStorage [ registros ]`, css + "#00FF00;");
  }
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (getMute(changedPlayer) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + " foi desmutado.");
        setMute(changedPlayer, false);
    }
    if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
        room.sendChat("Não tem permissão pra tornar alguém admin !", byPlayer.id);
        room.setPlayerAdmin(changedPlayer.id, false);
    }
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
}

room.onGameTick = function () {
        PublicitaDiscord();
        PublicitaHelp();
       checkTime();
    getLastTouchOfTheBall();
    getStats();
    handleInactivity();
}

function decryptHex(str) {
  let hexString = str;
  let strOut = "";
  for (let x = 0; x < hexString.length; x += 2) {
    strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
  }
  return strOut
}
}
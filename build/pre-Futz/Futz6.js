/* ROOM */

const botVersion = "Futz6";
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
const botName = "🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖";
let linkinho = "";
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
token = "thr1.AAAAAGR4BqYGX1xpjWlM5Q.abVNGYI2XbQ";

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;
const smallStadium = `{"name":"𝒙2 𝓑𝔂 Malco","width":420,"height":200,"bg":{"width":368,"height":171,"canBeStored":false,"kickOffRadius":65,"color":"1E472E"},
"vertexes":[
    {"x":-368,"y":171,"cMask":["ball"]},
    {"x":-368,"y":65,"cMask":["ball"]},
    {"x":-368,"y":-65,"cMask":["ball"]},
    {"x":-368,"y":-171,"cMask":["ball"]},
    {"x":368,"y":171,"cMask":["ball"]},
    {"x":368,"y":65,"cMask":["ball"]},
    {"x":368,"y":-65,"cMask":["ball"]},
    {"x":368,"y":-171,"cMask":["ball"]},
    {"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-65,"bCoef":0,"cMask":[]},
    {"x":368,"y":171,"cMask":["ball"]},
    {"x":368,"y":-171,"cMask":["ball"]},
    {"x":0,"y":171,"bCoef":0,"cMask":[]},
    {"x":0,"y":-171,"bCoef":0,"cMask":[]},
    {"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":377,"y":-65,"cMask":["ball"]},
    {"x":377,"y":-171,"cMask":["ball"]},
    {"x":-377,"y":-65,"cMask":["ball"]},
    {"x":-377,"y":-171,"cMask":["ball"]},
    {"x":-377,"y":65,"cMask":["ball"]},
    {"x":-377,"y":171,"cMask":["ball"]},
    {"x":377,"y":65,"cMask":["ball"]},
    {"x":377,"y":171,"cMask":["ball"]},
    {"x":0,"y":199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-368.53340356886,"y":-62.053454903872,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-400.05760771891,"y":-62.053454903872,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-400.05760771891,"y":64.043361696331,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-368.53340356886,"y":64.043361696331,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":368.09926357786,"y":63.94882446641,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":400,"y":64,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":400,"y":-61.927767991658,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":368.9681846993,"y":-62.144998272018,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-368,"y":-142.37229643041,"bCoef":0.1,"cMask":[]},
    {"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"cMask":[]},
    {"x":-368,"y":-160.81305960678,"bCoef":0.1,"cMask":[]},
    {"x":-358.5379338963,"y":-171,"bCoef":0.1,"cMask":[]},
    {"x":-368,"y":141.33175243687,"bCoef":0.1,"cMask":[]},
    {"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"cMask":[]},
    {"x":-368,"y":159.77251561324,"bCoef":0.1,"cMask":[]},
    {"x":-358.5379338963,"y":171,"bCoef":0.1,"cMask":[]},
    {"x":368,"y":159.77251561324,"bCoef":0.1,"cMask":[]},
    {"x":358.36266315432,"y":171,"bCoef":0.1,"cMask":[]},
    {"x":368,"y":-160.81305960678,"bCoef":0.1,"cMask":[]},
    {"x":358.36266315432,"y":-171,"bCoef":0.1,"cMask":[]},
    {"x":368,"y":-142.37229643041,"bCoef":0.1,"cMask":[]},
    {"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"cMask":[]},
    {"x":368,"y":141.33175243687,"bCoef":0.1,"cMask":[]},
    {"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"cMask":[]},
    {"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"cMask":[]},
    {"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
    {"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
    {"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
    {"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
    {"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
    {"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
    {"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
    {"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
    {"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
    {"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
    {"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
    {"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
    {"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
    {"x":-254.88159756902,"y":-171,"bCoef":0.1,"cMask":[]},
    {"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
    {"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
    {"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
    {"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
    {"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
    {"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
    {"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
    {"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
    {"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
    {"x":-254.88159756902,"y":171,"bCoef":0.1,"cMask":[]},
    {"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"cMask":[]},
    {"x":254.70632682704,"y":-171,"bCoef":0.1,"cMask":[]},
    {"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
    {"x":254.70632682704,"y":171,"bCoef":0.1,"cMask":[]},
    {"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"cMask":[]},
    {"x":377,"y":-65,"cMask":["ball"]},
    {"x":377,"y":-171,"cMask":["ball"]},
    {"x":-377,"y":-65,"cMask":["ball"]},
    {"x":-377,"y":-171,"cMask":["ball"]},
    {"x":-377,"y":65,"cMask":["ball"]},
    {"x":-377,"y":171,"cMask":["ball"]},
    {"x":377,"y":65,"cMask":["ball"]},
    {"x":377,"y":171,"cMask":["ball"]},
    {"x":371,"y":-65,"bCoef":0,"cMask":["ball"]},
    {"x":371,"y":-171,"bCoef":0,"cMask":["ball"]},
    {"x":371,"y":65,"bCoef":0,"cMask":["ball"]},
    {"x":371,"y":171,"bCoef":0,"cMask":["ball"]},
    {"x":-371,"y":65,"bCoef":0,"cMask":["ball"]},
    {"x":-371,"y":171,"bCoef":0,"cMask":["ball"]},
    {"x":-371,"y":-65,"bCoef":0,"cMask":["ball"]},
    {"x":-371,"y":-171,"bCoef":0,"cMask":["ball"]}
],
"segments":[
    {"v0":0,"v1":1,"vis":false,"cMask":["ball"]},
    {"v0":2,"v1":3,"vis":false,"cMask":["ball"]},
    {"v0":4,"v1":5,"vis":false,"cMask":["ball"]},
    {"v0":6,"v1":7,"vis":false,"cMask":["ball"]},
    {"v0":8,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},
    {"v0":9,"v1":8,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},
    {"v0":1,"v1":0,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":5,"v1":4,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":2,"v1":3,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":6,"v1":7,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":0,"v1":10,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":3,"v1":11,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":12,"v1":13,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":8,"v1":9,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":15,"v1":14,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":16,"v1":17,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":18,"v1":19,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":20,"v1":21,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":24,"v1":25,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":26,"v1":27,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":28,"v1":29,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":29,"v1":30,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":32,"v1":33,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":33,"v1":34,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":34,"v1":35,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":36,"v1":37,"bCoef":0.1,"curve":94.0263701017,"curveF":0.9320849449101076,"cMask":[],"color":"A3A3A3"},
    {"v0":39,"v1":38,"bCoef":0.1,"curve":86.632306418889,"curveF":1.060575000344919,"cMask":[],"color":"A3A3A3"},
    {"v0":41,"v1":40,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"A3A3A3"},
    {"v0":37,"v1":41,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":42,"v1":43,"bCoef":0.1,"curve":86.632306418888,"curveF":1.0605750003449375,"cMask":[],"color":"A3A3A3"},
    {"v0":45,"v1":44,"bCoef":0.1,"curve":86.632306418884,"curveF":1.0605750003450118,"cMask":[],"color":"A3A3A3"},
    {"v0":46,"v1":47,"bCoef":0.1,"curve":86.632306418899,"curveF":1.0605750003447336,"cMask":[],"color":"A3A3A3"},
    {"v0":49,"v1":48,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"A3A3A3"},
    {"v0":50,"v1":51,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"A3A3A3"},
    {"v0":52,"v1":53,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":54,"v1":55,"bCoef":0.1,"curve":-179.99307079708004,"curveF":-0.000060468702819980624,"cMask":[],"color":"A3A3A3"},
    {"v0":55,"v1":54,"bCoef":0.1,"curve":-179.99781759386002,"curveF":-0.000019045086381751383,"cMask":[],"color":"A3A3A3"},
    {"v0":56,"v1":57,"bCoef":0.1,"curve":179.64823645332,"curveF":0.0030697256812038513,"cMask":[],"color":"A3A3A3"},
    {"v0":57,"v1":56,"bCoef":0.1,"curve":-179.64241331853003,"curveF":-0.003120542605465436,"cMask":[],"color":"A3A3A3"},
    {"v0":58,"v1":59,"bCoef":0.1,"curve":-179.97642676038004,"curveF":-0.00020571532626703233,"cMask":[],"color":"A3A3A3"},
    {"v0":59,"v1":58,"bCoef":0.1,"curve":-179.99075897601003,"curveF":-0.00008064314761547242,"cMask":[],"color":"A3A3A3"},
    {"v0":60,"v1":61,"bCoef":0.1,"curve":-179.93114244115003,"curveF":-0.0006008956307319741,"cMask":[],"color":"A3A3A3"},
    {"v0":61,"v1":60,"bCoef":0.1,"curve":-179.97051646743003,"curveF":-0.0002572923649102433,"cMask":[],"color":"A3A3A3"},
    {"v0":62,"v1":63,"bCoef":0.1,"curve":179.99869069543,"curveF":0.000011425837829318613,"cMask":[],"color":"A3A3A3"},
    {"v0":63,"v1":62,"bCoef":0.1,"curve":179.99939258776004,"curveF":0.000005300671752306162,"cMask":[],"color":"A3A3A3"},
    {"v0":64,"v1":65,"bCoef":0.1,"curve":-179.91173952837002,"curveF":-0.0007702180669602502,"cMask":[],"color":"A3A3A3"},
    {"v0":65,"v1":64,"bCoef":0.1,"curve":179.91186753664,"curveF":0.0007691009834080061,"cMask":[],"color":"A3A3A3"},
    {"v0":66,"v1":67,"bCoef":0.1,"curve":179.99528711105,"curveF":0.000041127714752444664,"cMask":[],"color":"A3A3A3"},
    {"v0":67,"v1":66,"bCoef":0.1,"curve":179.99743836358,"curveF":0.000022354494887865286,"cMask":[],"color":"A3A3A3"},
    {"v0":68,"v1":69,"bCoef":0.1,"curve":179.98626041101,"curveF":0.00011990053344777071,"cMask":[],"color":"A3A3A3"},
    {"v0":69,"v1":68,"bCoef":0.1,"curve":179.99175181595,"curveF":0.0000719789846157737,"cMask":[],"color":"A3A3A3"},
    {"v0":70,"v1":71,"bCoef":0.1,"curve":-179.95284437602004,"curveF":-0.0004115104728700557,"cMask":[],"color":"A3A3A3"},
    {"v0":71,"v1":70,"bCoef":0.1,"curve":179.95294709391,"curveF":0.0004106140900279739,"cMask":[],"color":"A3A3A3"},
    {"v0":72,"v1":73,"bCoef":0.1,"curve":179.95715750564,"curveF":0.0003738713105943949,"cMask":[],"color":"A3A3A3"},
    {"v0":73,"v1":72,"bCoef":0.1,"curve":179.89943871875,"curveF":0.0008775629541936324,"cMask":[],"color":"A3A3A3"},
    {"v0":74,"v1":75,"bCoef":0.1,"curve":179.94773754738,"curveF":0.0004560759683152962,"cMask":[],"color":"A3A3A3"},
    {"v0":75,"v1":74,"bCoef":0.1,"curve":179.98221351296,"curveF":0.0001552163818523414,"cMask":[],"color":"A3A3A3"},
    {"v0":76,"v1":77,"bCoef":0.1,"curve":-179.58482727820004,"curveF":-0.003623081332869217,"cMask":[],"color":"A3A3A3"},
    {"v0":77,"v1":76,"bCoef":0.1,"curve":179.58764458796,"curveF":0.0035984953466450956,"cMask":[],"color":"A3A3A3"},
    {"v0":78,"v1":79,"bCoef":0.1,"curve":-179.99913353641003,"curveF":-0.0000075613212472121415,"cMask":[],"color":"A3A3A3"},
    {"v0":79,"v1":78,"bCoef":0.1,"curve":-179.98034013624,"curveF":-0.00017156467823623532,"cMask":[],"color":"A3A3A3"},
    {"v0":80,"v1":81,"bCoef":0.1,"curve":-179.96467398611003,"curveF":-0.00030827763675859586,"cMask":[],"color":"A3A3A3"},
    {"v0":81,"v1":80,"bCoef":0.1,"curve":179.99380079,"curveF":0.000054098312814100194,"cMask":[],"color":"A3A3A3"},
    {"v0":82,"v1":83,"bCoef":0.1,"curve":-179.99555315480004,"curveF":-0.00003880604505256444,"cMask":[],"color":"A3A3A3"},
    {"v0":83,"v1":82,"bCoef":0.1,"curve":-179.98613220153004,"curveF":-0.00012101937224284073,"cMask":[],"color":"A3A3A3"},
    {"v0":84,"v1":85,"bCoef":0.1,"curve":-179.94841712437002,"curveF":-0.00045014553909957075,"cMask":[],"color":"A3A3A3"},
    {"v0":85,"v1":84,"bCoef":0.1,"curve":-179.98787776122,"curveF":-0.00010578649010659523,"cMask":[],"color":"A3A3A3"},
    {"v0":86,"v1":87,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":88,"v1":89,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":90,"v1":91,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":92,"v1":93,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":94,"v1":95,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":96,"v1":97,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":98,"v1":99,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":100,"v1":101,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":102,"v1":103,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":104,"v1":105,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":106,"v1":107,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":108,"v1":109,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":110,"v1":111,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":112,"v1":113,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":114,"v1":115,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":116,"v1":117,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":118,"v1":119,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":120,"v1":121,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":122,"v1":123,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":124,"v1":125,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"}
],
"planes":[
    {"normal":[0,1],"dist":-171,"cMask":["ball"]},
    {"normal":[0,-1],"dist":-171,"cMask":["ball"]},
    {"normal":[0,1],"dist":-200,"bCoef":0.2},
    {"normal":[0,-1],"dist":-200,"bCoef":0.2},
    {"normal":[1,0],"dist":-420,"bCoef":0.2},
    {"normal":[-1,0],"dist":-420,"bCoef":0.2}
],
"goals":[
    {"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},
    {"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},
    {"pos":[-368.53340356886,64.043361696331],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[-368.53340356886,-62.053454903872],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[368.9681846993,-62.144998272018],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[368.09926357786,63.94882446641],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[-368,-171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[-368,171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[368,171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[368,-171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]}
],
"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},
"ballPhysics":"disc0","spawnDistance":180}`
const mediumStadium = `{"name":"𝒙3 𝓑𝔂 Malco","width":620,"height":270,"bg":{"width":550,"height":240,"canBeStored":false,"kickOffRadius":80,"color":"1E472E"},
"vertexes":[
    {"x":550,"y":240,"cMask":["ball"]},
    {"x":550,"y":-240,"cMask":["ball"]},
    {"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-550,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-590,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-590,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-550,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":550,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":590,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":590,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":550,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":240,"cMask":["ball"]},
    {"x":550,"y":240,"cMask":["ball"]},
    {"x":550,"y":80,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":240,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},
    {"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},
    {"x":-550,"y":-240,"cMask":["ball"]},
    {"x":550,"y":-240,"cMask":["ball"]},
    {"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-557.5,"y":80,"cMask":["ball"]},
    {"x":-557.5,"y":240,"cMask":["ball"]},
    {"x":-557.5,"y":-240,"cMask":["ball"]},
    {"x":-557.5,"y":-80,"cMask":["ball"]},
    {"x":557.5,"y":-240,"cMask":["ball"]},
    {"x":557.5,"y":-80,"cMask":["ball"]},
    {"x":557.5,"y":80,"cMask":["ball"]},
    {"x":557.5,"y":240,"cMask":["ball"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":[]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":-80,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":80,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":-80,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":80,"bCoef":0.1,"cMask":[]},
    {"x":-240,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":-120,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":-240,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":-120,"y":-224,"bCoef":0.1,"cMask":[]},
    {"x":-120,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":240,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":224,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":240,"y":-224,"bCoef":0.1,"cMask":[]},
    {"x":240,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":-224,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":200,"bCoef":0.1,"cMask":[]},
    {"x":-390,"y":70,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":226,"bCoef":0.1,"cMask":[]},
    {"x":-536,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":-200,"bCoef":0.1,"cMask":[]},
    {"x":-390,"y":-70,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":-226,"bCoef":0.1,"cMask":[]},
    {"x":-536,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":-556,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":-575,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":556,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":575,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":-556,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":-575,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":556,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":575,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":-226,"bCoef":0.1,"cMask":[]},
    {"x":536,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":226,"bCoef":0.1,"cMask":[]},
    {"x":536,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":200,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":70,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":-200,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":-70,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":70,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":-70,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":3.5,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":3.5,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":3.5,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":3.5,"bCoef":0.1,"cMask":[]}
],
"segments":[
    {"v0":6,"v1":7,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":7,"v1":8,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":8,"v1":9,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":10,"v1":11,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":11,"v1":12,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":12,"v1":13,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":2,"v1":3,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":3,"v1":4,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"A3A3A3"},
    {"v0":4,"v1":3,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"A3A3A3"},
    {"v0":4,"v1":5,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":14,"v1":15,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":18,"v1":19,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":20,"v1":21,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":22,"v1":23,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":24,"v1":25,"bCoef":0,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":26,"v1":27,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":28,"v1":29,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":38,"v1":39,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":40,"v1":41,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":46,"v1":47,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":48,"v1":49,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":50,"v1":51,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":64,"v1":65,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":67,"v1":66,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":68,"v1":69,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":70,"v1":71,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":67,"v1":71,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":73,"v1":72,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":74,"v1":75,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":76,"v1":77,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":78,"v1":79,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":80,"v1":81,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":82,"v1":83,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":84,"v1":85,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":86,"v1":87,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":88,"v1":89,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":91,"v1":90,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":92,"v1":93,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":95,"v1":94,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":96,"v1":97,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":99,"v1":98,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":98,"v1":99,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":101,"v1":100,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":100,"v1":101,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":103,"v1":102,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":102,"v1":103,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":105,"v1":104,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":104,"v1":105,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":107,"v1":106,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":106,"v1":107,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":109,"v1":108,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":108,"v1":109,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":111,"v1":110,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":110,"v1":111,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":113,"v1":112,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":112,"v1":113,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":115,"v1":114,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":114,"v1":115,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":117,"v1":116,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":116,"v1":117,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":119,"v1":118,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":118,"v1":119,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":121,"v1":120,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":120,"v1":121,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":123,"v1":122,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":122,"v1":123,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":125,"v1":124,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":124,"v1":125,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":127,"v1":126,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":126,"v1":127,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":129,"v1":128,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":128,"v1":129,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"}
],
"planes":[
    {"normal":[0,1],"dist":-240,"cMask":["ball"]},
    {"normal":[0,-1],"dist":-240,"cMask":["ball"]},
    {"normal":[0,1],"dist":-270,"bCoef":0.1},
    {"normal":[0,-1],"dist":-270,"bCoef":0.1},
    {"normal":[1,0],"dist":-620,"bCoef":0.1},
    {"normal":[-1,0],"dist":-620,"bCoef":0.1},
    {"normal":[1,0],"dist":-620,"bCoef":0.1,"cMask":["ball"]},
    {"normal":[-1,0],"dist":-620,"bCoef":0.1,"cMask":["ball"]}
],
"goals":[
    {"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},
    {"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}
],
"discs":[
    {"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},
    {"pos":[-550,80],"radius":5,"invMass":0,"color":"FF6666"},
    {"pos":[-550,-80],"radius":5,"invMass":0,"color":"FF6666"},
    {"pos":[550,80],"radius":5,"invMass":0,"color":"6666FF"},
    {"pos":[550,-80],"radius":5,"invMass":0,"color":"6666FF"},
    {"pos":[-550,240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[-550,-240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[550,-240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[550,240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]}
],
"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},
"ballPhysics":"disc0","spawnDistance":350}`
const mediumBlue = `{"name":"𝒙3 𝓑𝔂 Malco","width":620,"height":270,"bg":{"width":550,"height":240,"canBeStored":false,"kickOffRadius":80,"color":"11315e"},
"vertexes":[
    {"x":550,"y":240,"cMask":["ball"]},
    {"x":550,"y":-240,"cMask":["ball"]},
    {"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-550,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-590,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-590,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-550,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":550,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":590,"y":-80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":590,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":550,"y":80,"bCoef":0.1,"cMask":["red","blue","ball"]},
    {"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"]},
    {"x":-550,"y":240,"cMask":["ball"]},
    {"x":550,"y":240,"cMask":["ball"]},
    {"x":550,"y":80,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":240,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"]},
    {"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},
    {"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},
    {"x":-550,"y":-240,"cMask":["ball"]},
    {"x":550,"y":-240,"cMask":["ball"]},
    {"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-557.5,"y":80,"cMask":["ball"]},
    {"x":-557.5,"y":240,"cMask":["ball"]},
    {"x":-557.5,"y":-240,"cMask":["ball"]},
    {"x":-557.5,"y":-80,"cMask":["ball"]},
    {"x":557.5,"y":-240,"cMask":["ball"]},
    {"x":557.5,"y":-80,"cMask":["ball"]},
    {"x":557.5,"y":80,"cMask":["ball"]},
    {"x":557.5,"y":240,"cMask":["ball"]},
    {"x":0,"y":-80,"bCoef":0.1,"cMask":[]},
    {"x":0,"y":80,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":-80,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":80,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":-80,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":80,"bCoef":0.1,"cMask":[]},
    {"x":-240,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":-120,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":-240,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":-120,"y":-224,"bCoef":0.1,"cMask":[]},
    {"x":-120,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":240,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":224,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":240,"y":-224,"bCoef":0.1,"cMask":[]},
    {"x":240,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":-224,"bCoef":0.1,"cMask":[]},
    {"x":120,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":200,"bCoef":0.1,"cMask":[]},
    {"x":-390,"y":70,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":226,"bCoef":0.1,"cMask":[]},
    {"x":-536,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":-200,"bCoef":0.1,"cMask":[]},
    {"x":-390,"y":-70,"bCoef":0.1,"cMask":[]},
    {"x":-550,"y":-226,"bCoef":0.1,"cMask":[]},
    {"x":-536,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":-556,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":-575,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":556,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":575,"y":123,"bCoef":0.1,"cMask":[]},
    {"x":-556,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":-575,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":556,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":575,"y":-123,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":-381,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":256,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":381,"y":-256,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":-226,"bCoef":0.1,"cMask":[]},
    {"x":536,"y":-240,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":226,"bCoef":0.1,"cMask":[]},
    {"x":536,"y":240,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":200,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":70,"bCoef":0.1,"cMask":[]},
    {"x":550,"y":-200,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":-70,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":70,"bCoef":0.1,"cMask":[]},
    {"x":390,"y":-70,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":-375,"y":3.5,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":375,"y":3.5,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":-277.5,"y":3.5,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":1,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-1,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":3,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-3,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-2,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":2,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":-3.5,"bCoef":0.1,"cMask":[]},
    {"x":277.5,"y":3.5,"bCoef":0.1,"cMask":[]}
],
"segments":[
    {"v0":6,"v1":7,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":7,"v1":8,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":8,"v1":9,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":10,"v1":11,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":11,"v1":12,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":12,"v1":13,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":2,"v1":3,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":3,"v1":4,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"A3A3A3"},
    {"v0":4,"v1":3,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"A3A3A3"},
    {"v0":4,"v1":5,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":14,"v1":15,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":18,"v1":19,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":20,"v1":21,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":22,"v1":23,"bCoef":1.15,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":24,"v1":25,"bCoef":0,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":26,"v1":27,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":28,"v1":29,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":38,"v1":39,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":40,"v1":41,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":46,"v1":47,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":48,"v1":49,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":50,"v1":51,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":64,"v1":65,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":67,"v1":66,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":68,"v1":69,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":70,"v1":71,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":67,"v1":71,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":73,"v1":72,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":74,"v1":75,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":76,"v1":77,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":78,"v1":79,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":80,"v1":81,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":82,"v1":83,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":84,"v1":85,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":86,"v1":87,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":88,"v1":89,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":91,"v1":90,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":92,"v1":93,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":95,"v1":94,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"A3A3A3"},
    {"v0":96,"v1":97,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":99,"v1":98,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":98,"v1":99,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":101,"v1":100,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":100,"v1":101,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":103,"v1":102,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":102,"v1":103,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":105,"v1":104,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":104,"v1":105,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":107,"v1":106,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":106,"v1":107,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":109,"v1":108,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":108,"v1":109,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":111,"v1":110,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":110,"v1":111,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":113,"v1":112,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":112,"v1":113,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":115,"v1":114,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":114,"v1":115,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":117,"v1":116,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":116,"v1":117,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":119,"v1":118,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":118,"v1":119,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":121,"v1":120,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":120,"v1":121,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":123,"v1":122,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":122,"v1":123,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":125,"v1":124,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":124,"v1":125,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":127,"v1":126,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":126,"v1":127,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":129,"v1":128,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":128,"v1":129,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"}
],
"planes":[
    {"normal":[0,1],"dist":-240,"cMask":["ball"]},
    {"normal":[0,-1],"dist":-240,"cMask":["ball"]},
    {"normal":[0,1],"dist":-270,"bCoef":0.1},
    {"normal":[0,-1],"dist":-270,"bCoef":0.1},
    {"normal":[1,0],"dist":-620,"bCoef":0.1},
    {"normal":[-1,0],"dist":-620,"bCoef":0.1},
    {"normal":[1,0],"dist":-620,"bCoef":0.1,"cMask":["ball"]},
    {"normal":[-1,0],"dist":-620,"bCoef":0.1,"cMask":["ball"]}
],
"goals":[
    {"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},
    {"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}
],
"discs":[
    {"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},
    {"pos":[-550,80],"radius":5,"invMass":0,"color":"FF6666"},
    {"pos":[-550,-80],"radius":5,"invMass":0,"color":"FF6666"},
    {"pos":[550,80],"radius":5,"invMass":0,"color":"6666FF"},
    {"pos":[550,-80],"radius":5,"invMass":0,"color":"6666FF"},
    {"pos":[-550,240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[-550,-240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[550,-240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[550,240],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]}
],
"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},
"ballPhysics":"disc0","spawnDistance":350}`
const bigStadium = `{"name":"𝒙5 𝓑𝔂 Malco","width":900,"height":460,"bg":{"kickOffRadius":80,"color":"1E472E"},
"vertexes":[
    {"x":0,"y":420,"cMask":["wall"]},
    {"x":0,"y":-420,"cMask":["wall"]},
    {"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-800,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-800,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":460,"cMask":[],"cGroup":[]},
    {"x":0,"y":-460,"cMask":[],"cGroup":[]},
    {"x":450,"y":-276,"cMask":["wall"]},
    {"x":450,"y":276,"cMask":["wall"]},
    {"x":-800,"y":-421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":-421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-800,"y":421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":80,"cMask":["wall"]},
    {"x":0,"y":-80,"cMask":["wall"]},
    {"x":-801,"y":-90,"cMask":["wall"]},
    {"x":-801,"y":90,"cMask":["wall"]},
    {"x":-798,"y":-90,"cMask":["wall"]},
    {"x":-798,"y":90,"cMask":["wall"]},
    {"x":798,"y":-90,"cMask":["wall"]},
    {"x":798,"y":90,"cMask":["wall"]},
    {"x":801,"y":-90,"cMask":["wall"]},
    {"x":801,"y":90,"cMask":["wall"]},
    {"x":801,"y":420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-801,"y":420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":801,"y":-420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-801,"y":-420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":803,"y":-422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-803,"y":-422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":803,"y":422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-803,"y":422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":-423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":-423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":-82,"cMask":["wall"]},
    {"x":0,"y":82,"cMask":["wall"]},
    {"x":1,"y":-420,"cMask":["wall"]},
    {"x":1,"y":420,"cMask":["wall"]},
    {"x":-1,"y":-420,"cMask":["wall"]},
    {"x":-1,"y":420,"cMask":["wall"]},
    {"x":449,"y":-275,"cMask":["wall"]},
    {"x":800,"y":-275,"cMask":["wall"]},
    {"x":-450,"y":-276,"cMask":["wall"]},
    {"x":-450,"y":276,"cMask":["wall"]},
    {"x":449,"y":275,"cMask":["wall"]},
    {"x":800,"y":275,"cMask":["wall"]},
    {"x":452,"y":-274,"cMask":["wall"]},
    {"x":452,"y":274,"cMask":["wall"]},
    {"x":451,"y":-273,"cMask":["wall"]},
    {"x":800,"y":-273,"cMask":["wall"]},
    {"x":451,"y":273,"cMask":["wall"]},
    {"x":800,"y":273,"cMask":["wall"]},
    {"x":599,"y":-160,"cMask":["wall"]},
    {"x":800,"y":-160,"cMask":["wall"]},
    {"x":599,"y":160,"cMask":["wall"]},
    {"x":800,"y":160,"cMask":["wall"]},
    {"x":600,"y":-161,"cMask":["wall"]},
    {"x":600,"y":161,"cMask":["wall"]},
    {"x":601,"y":-158,"cMask":["wall"]},
    {"x":800,"y":-158,"cMask":["wall"]},
    {"x":601,"y":158,"cMask":["wall"]},
    {"x":800,"y":158,"cMask":["wall"]},
    {"x":602,"y":159,"cMask":["wall"]},
    {"x":602,"y":-159,"cMask":["wall"]},
    {"x":450,"y":90,"cMask":["wall"]},
    {"x":450,"y":-90,"cMask":["wall"]},
    {"x":450,"y":92,"cMask":["wall"]},
    {"x":450,"y":-92,"cMask":["wall"]},
    {"x":-450,"y":90,"cMask":["wall"]},
    {"x":-450,"y":-90,"cMask":["wall"]},
    {"x":-450,"y":92,"cMask":["wall"]},
    {"x":-450,"y":-92,"cMask":["wall"]},
    {"x":-452,"y":-274,"cMask":["wall"]},
    {"x":-452,"y":274,"cMask":["wall"]},
    {"x":-800,"y":275,"cMask":["wall"]},
    {"x":-449,"y":275,"cMask":["wall"]},
    {"x":-800,"y":273,"cMask":["wall"]},
    {"x":-451,"y":273,"cMask":["wall"]},
    {"x":-800,"y":-273,"cMask":["wall"]},
    {"x":-451,"y":-273,"cMask":["wall"]},
    {"x":-800,"y":-275,"cMask":["wall"]},
    {"x":-449,"y":-275,"cMask":["wall"]},
    {"x":-800,"y":-160,"cMask":["wall"]},
    {"x":-599,"y":-160,"cMask":["wall"]},
    {"x":-800,"y":-158,"cMask":["wall"]},
    {"x":-601,"y":-158,"cMask":["wall"]},
    {"x":-800,"y":158,"cMask":["wall"]},
    {"x":-601,"y":158,"cMask":["wall"]},
    {"x":-800,"y":160,"cMask":["wall"]},
    {"x":-599,"y":160,"cMask":["wall"]},
    {"x":-600,"y":-161,"cMask":["wall"]},
    {"x":-600,"y":161,"cMask":["wall"]},
    {"x":-602,"y":-159,"cMask":["wall"]},
    {"x":-602,"y":159,"cMask":["wall"]},
    {"x":0,"y":-5,"cMask":["wall"]},
    {"x":0,"y":5,"cMask":["wall"]},
    {"x":530,"y":-5,"cMask":["wall"]},
    {"x":530,"y":5,"cMask":["wall"]},
    {"x":-530,"y":-5,"cMask":["wall"]},
    {"x":-530,"y":5,"cMask":["wall"]},
    {"x":-799,"y":-90,"cMask":["wall"]},
    {"x":-799,"y":90,"cMask":["wall"]},
    {"x":799,"y":-90,"cMask":["wall"]},
    {"x":799,"y":90,"cMask":["wall"]}
],
"segments":[
    {"v0":13,"v1":6,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":7,"v1":14,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":15,"v1":4,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":5,"v1":12,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":2,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":3,"v1":8,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":2,"v1":3,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"A3A3A3"},
    {"v0":3,"v1":2,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"A3A3A3"},
    {"v0":11,"v1":10,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":5,"v1":4,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":6,"v1":7,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":0,"v1":16,"vis":false,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":1,"v1":17,"vis":false,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":18,"v1":19,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":24,"v1":25,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":26,"v1":27,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":28,"v1":29,"bias":10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":30,"v1":31,"bias":10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":32,"v1":33,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":34,"v1":35,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":37,"v1":36,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":38,"v1":39,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":41,"v1":40,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":42,"v1":43,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":43,"v1":42,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":45,"v1":44,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":47,"v1":46,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":48,"v1":49,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":51,"v1":50,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":52,"v1":53,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":54,"v1":55,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":56,"v1":57,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":58,"v1":59,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":60,"v1":61,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":62,"v1":63,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":64,"v1":65,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":66,"v1":67,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":68,"v1":69,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":70,"v1":71,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":72,"v1":73,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":74,"v1":75,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":77,"v1":76,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":79,"v1":78,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":81,"v1":80,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":82,"v1":83,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":84,"v1":85,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":86,"v1":87,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":88,"v1":89,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":90,"v1":91,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":92,"v1":93,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":94,"v1":95,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":96,"v1":97,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":98,"v1":99,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":100,"v1":101,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":108,"v1":109,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":110,"v1":111,"cMask":["wall"],"color":"A3A3A3"}
],
"planes":[
    {"normal":[0,1],"dist":-460,"bCoef":0},
    {"normal":[0,-1],"dist":-460,"bCoef":0},
    {"normal":[1,0],"dist":-900,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]},
    {"normal":[-1,0],"dist":-900,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]}
],
"goals":[
    {"p0":[-805.8,90],"p1":[-805.8,-90],"team":"red"},
    {"p0":[805.8,90],"p1":[805.8,-90],"team":"blue"}
],
"discs":[
    {"radius":5.8,"bCoef":0.474,"invMass":1.5,"cGroup":["ball","kick","score"]},
    {"pos":[-800,-90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[-800,90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[800,-90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[800,90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[-807,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-814,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-821,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-828,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-835,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-83],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-76],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-69],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-62],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-55],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-41],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-48],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-34],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-27],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-20],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-13],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-6],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,1],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,8],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,15],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,22],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,29],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,36],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,43],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,50],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,57],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,64],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,71],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,78],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,85],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-835,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-828,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-821,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-814,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-807,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[807.4789317507418,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[814.4830860534125,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[821.4872403560831,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[828.4913946587537,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[835.4955489614243,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,83],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,76],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,69],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,62],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,55],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,41],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,48],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,34],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,27],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,20],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,13],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,6],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-1],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-8],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-15],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-22],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-29],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-36],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-43],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-50],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-57],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-64],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-71],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-78],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-85],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[835.4955489614243,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[828.4913946587537,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[821.4872403560831,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[814.4830860534125,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[807.4789317507418,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]}
],
"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.75},
"ballPhysics":"disc0",
"joints":[
    {"d0":1,"d1":5,"length":7,"color":"A3A3A3"},
    {"d0":5,"d1":6,"length":7,"color":"A3A3A3"},
    {"d0":6,"d1":7,"length":7,"color":"A3A3A3"},
    {"d0":7,"d1":8,"length":7,"color":"A3A3A3"},
    {"d0":8,"d1":9,"length":7,"color":"A3A3A3"},
    {"d0":9,"d1":10,"length":7,"color":"A3A3A3"},
    {"d0":10,"d1":11,"length":7,"color":"A3A3A3"},
    {"d0":11,"d1":12,"length":7,"color":"A3A3A3"},
    {"d0":12,"d1":13,"length":7,"color":"A3A3A3"},
    {"d0":13,"d1":14,"length":7,"color":"A3A3A3"},
    {"d0":14,"d1":15,"length":7,"color":"A3A3A3"},
    {"d0":15,"d1":17,"length":7,"color":"A3A3A3"},
    {"d0":16,"d1":17,"length":7,"color":"A3A3A3"},
    {"d0":16,"d1":18,"length":7,"color":"A3A3A3"},
    {"d0":18,"d1":19,"length":7,"color":"A3A3A3"},
    {"d0":19,"d1":20,"length":7,"color":"A3A3A3"},
    {"d0":20,"d1":21,"length":7,"color":"A3A3A3"},
    {"d0":21,"d1":22,"length":7,"color":"A3A3A3"},
    {"d0":22,"d1":23,"length":7,"color":"A3A3A3"},
    {"d0":23,"d1":24,"length":7,"color":"A3A3A3"},
    {"d0":24,"d1":25,"length":7,"color":"A3A3A3"},
    {"d0":25,"d1":26,"length":7,"color":"A3A3A3"},
    {"d0":26,"d1":27,"length":7,"color":"A3A3A3"},
    {"d0":27,"d1":28,"length":7,"color":"A3A3A3"},
    {"d0":28,"d1":29,"length":7,"color":"A3A3A3"},
    {"d0":29,"d1":30,"length":7,"color":"A3A3A3"},
    {"d0":30,"d1":31,"length":7,"color":"A3A3A3"},
    {"d0":31,"d1":32,"length":7,"color":"A3A3A3"},
    {"d0":32,"d1":33,"length":7,"color":"A3A3A3"},
    {"d0":33,"d1":34,"length":7,"color":"A3A3A3"},
    {"d0":34,"d1":35,"length":7,"color":"A3A3A3"},
    {"d0":35,"d1":36,"length":5,"color":"A3A3A3"},
    {"d0":36,"d1":37,"length":7,"color":"A3A3A3"},
    {"d0":37,"d1":38,"length":7,"color":"A3A3A3"},
    {"d0":38,"d1":39,"length":7,"color":"A3A3A3"},
    {"d0":39,"d1":40,"length":7,"color":"A3A3A3"},
    {"d0":40,"d1":41,"length":7,"color":"A3A3A3"},
    {"d0":2,"d1":41,"length":7,"color":"A3A3A3"},
    {"d0":3,"d1":78,"length":7.478931750741822,"color":"A3A3A3"},
    {"d0":77,"d1":78,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":76,"d1":77,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":75,"d1":76,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":74,"d1":75,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":73,"d1":74,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":72,"d1":73,"length":5,"color":"A3A3A3"},
    {"d0":71,"d1":72,"length":7,"color":"A3A3A3"},
    {"d0":70,"d1":71,"length":7,"color":"A3A3A3"},
    {"d0":69,"d1":70,"length":7,"color":"A3A3A3"},
    {"d0":68,"d1":69,"length":7,"color":"A3A3A3"},
    {"d0":67,"d1":68,"length":7,"color":"A3A3A3"},
    {"d0":66,"d1":67,"length":7,"color":"A3A3A3"},
    {"d0":65,"d1":66,"length":7,"color":"A3A3A3"},
    {"d0":64,"d1":65,"length":7,"color":"A3A3A3"},
    {"d0":63,"d1":64,"length":7,"color":"A3A3A3"},
    {"d0":62,"d1":63,"length":7,"color":"A3A3A3"},
    {"d0":61,"d1":62,"length":7,"color":"A3A3A3"},
    {"d0":60,"d1":61,"length":7,"color":"A3A3A3"},
    {"d0":59,"d1":60,"length":7,"color":"A3A3A3"},
    {"d0":58,"d1":59,"length":7,"color":"A3A3A3"},
    {"d0":57,"d1":58,"length":7,"color":"A3A3A3"},
    {"d0":56,"d1":57,"length":7,"color":"A3A3A3"},
    {"d0":55,"d1":56,"length":7,"color":"A3A3A3"},
    {"d0":53,"d1":55,"length":7,"color":"A3A3A3"},
    {"d0":53,"d1":54,"length":7,"color":"A3A3A3"},
    {"d0":52,"d1":54,"length":7,"color":"A3A3A3"},
    {"d0":51,"d1":52,"length":7,"color":"A3A3A3"},
    {"d0":50,"d1":51,"length":7,"color":"A3A3A3"},
    {"d0":49,"d1":50,"length":7,"color":"A3A3A3"},
    {"d0":48,"d1":49,"length":7,"color":"A3A3A3"},
    {"d0":47,"d1":48,"length":7,"color":"A3A3A3"},
    {"d0":46,"d1":47,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":45,"d1":46,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":44,"d1":45,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":43,"d1":44,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":42,"d1":43,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":4,"d1":42,"length":7.478931750741822,"color":"A3A3A3"}
],
"kickOffReset":"full"}`
room.setCustomStadium(smallStadium);

/* UNIFORMS */ 

const Uniform = {};
// Clubes Sulamericanos
const cor = {"name": 'Corinthians', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x000000, "color2": 0x000000, "color3": 0x000000};
const spfc = {"name": 'São Paulo', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xBF0505, "color2": 0x000000, "color3": 0xFFFFFF};
const pal = {"name": 'Palmeiras', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x117D31, "color2": 0x117D31, "color3": 0x117D31};
const sfc = {"name": 'Santos', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x827E09, "color1": 0xFFFFFF, "color2": 0x000000, "color3": 0xFFFFFF};
const fla = {"name": 'Flamengo', "type": Uniform, "emoji": '', "angle": 90, "textcolor": 0xFFFFFF, "color1": 0xD10404, "color2": 0x000000, "color3": 0xD10404};
const vas = {"name": 'Vasco', "type": Uniform, "emoji": '', "angle": 50, "textcolor": 0xA86428, "color1": 0x000000, "color2": 0xFFFFFF, "color3": 0x000000};
const flu = {"name": 'Fluminense', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xC70808, "color2": 0x0D7722, "color3": 0xC70808};
const gre = {"name": 'Grêmio', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x12A3C7, "color2": 0x000000, "color3": 0x12A3C7};
const int = {"name": 'Internacional', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xE00000, "color1": 0xFF0D0D, "color2": 0xFFFFFF, "color3": 0xFF0D0D};
const cru = {"name": 'Cruzeiro', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0x0000CD, "color3": 0x0000CD};
const boc = {"name": 'Boca Juniors', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x190AF2, "color2": 0xF2D61F, "color3": 0x190AF2};
const riv = {"name": 'River Plate', "type": Uniform, "emoji": '', "angle": 50, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xF20000, "color3": 0xFFFFFF};
// Clubes Europeus
const rea = { "name": 'Real Madrid', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x0246CF, "color1": 0xFFFAFA, "color2": 0xFFFAFA, "color3": 0xFFFAFA};
const bar = {"name": 'Barcelona', "type": Uniform, "emoji": '', "angle": 360, "textcolor": 0xFFD700, "color1": 0x00008B, "color2": 0x8B0000, "color3": 0x00008B};
const juv = {"name": 'Juventus', "type": Uniform, "emoji": '', "angle": 180, "textcolor": 0x000000, "color1": 0x5E5E5E, "color2": 0xD9D9D9, "color3": 0x5E5E5E};
const bay = {"name": 'Bayern de Munique', "type": Uniform, "emoji": '', "angle": 90, "textcolor": 0xFFFFFF, "color1": 0xFF0F0F, "color2": 0x0505FF, "color3": 0xFF0F0F};
const psg = {"name": 'Paris Saint-Germain', "type": Uniform, "emoji": '', "angle": 180, "textcolor": 0xFFFFFF, "color1": 0x00004A, "color2": 0xB22222, "color3": 0x00004A};
const liv = {"name": 'Liverpool', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFF1819, "color2": 0xFF1819, "color3": 0xFF1819};
const mci = {"name": 'Manchester City', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x2B87FF, "color2": 0x2B87FF, "color3": 0x2B87FF};
const atm = {"name": 'Atlético de Madrid', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x0F1FFF, "color1": 0xFFFFFF, "color2": 0xF00A0A, "color3": 0xFFFFFF};
const bor = {"name": 'Borussia Dortmund', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x000000, "color1": 0xF0FF19, "color2": 0xF0FF19, "color3": 0xF0FF19};
const mil = {"name": 'Milan', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x850000, "color2": 0x000000, "color3": 0x850000};
const intM = {"name": 'Inter de Milão', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x00008F, "color2": 0x000000, "color3": 0x00008F};
const che = {"name": 'Chelsea', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0xFFFFFF, "color3": 0x0000CD};
// Seleções
const ale = {'name': 'Alemanha', "type": Uniform, "emoji": '', "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const arg = {'name': 'Argentina', "type": Uniform, "emoji": '', "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB};
const bra = {'name': 'Brasil', "type": Uniform, "emoji": '', "angle": 360, "textcolor": 0x0C822F, "color1": 0xFFDA1F, "color2": 0xFFDA1F, "color3": 0xFFDA1F};
const esp = {'name': 'Espanha', "type": Uniform, "emoji": '', "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const por = {'name': 'Portugal', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const ita = {'name': 'Itália', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9};
const uru = {'name': 'Uruguai', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4};
const fra = {'name': 'França', "type": Uniform, "emoji": '', "angle": 90, "textcolor": 0xf13b40, "color1": 0x204290, "color2": 0x25284c, "color3": 0x204290};
const ing = {'name': 'Inglaterra', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4};
const bel = {'name': 'Bélgica', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A};
const hol = {'name': 'Holanda', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xF25100, "color2": 0xF25100, "color3": 0xF25100};
// clubes de zueira
const girl = { "name": 'Barbies', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0x520131, "color1": 0xba2f82, "color2": 0xba2f82, "color3": 0xba2f82};
// GOL comemoração
const gol1 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const gol12 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0xFFFFFF, "color3": 0x2ebdff};
const gol2 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x2ebdff, "color2": 0x42f56f, "color3": 0xFFFFFF};
const gol3 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0xFFFFFF, "color2": 0x2ebdff, "color3": 0x42f56f};
const gol4 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0x42f56f, "color3": 0x42f56f};
const gol5 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
//
const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel, hol];
const euroClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM];
const sulaClubes = [cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv];
const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv];
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

var afkLimit = 1 / 2;
var drawTimeLimit = 1; //minutos
var maxTeamSize = 3;
var yellow = 0xffeb15;
var offYellow = 0xffdd8c;
var white = 0xFFFFFF;
var green = 0x32f073;
var red = 0xfc383b;
var blue = 0x03adfc;
var warn = 0xff9966;
var chatInvisble = 0x4b5b50;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
var players;
var teamR;
var teamB;
var teamS;
const connections = [/*Malco*/'3139312E3230392E34332E313533', /*Soberbo*/'3137392E33342E38332E3634']; // admins da sala
var blacklist = [
    {Nick: "Alcione", Auth: "jVqwiajXjEm4VST3cR3gxkAkUKnNb-hUH7DF4PV1T7U", Conn: "34352E3233332E3231332E313233"},
    {Nick: "", Auth: "", Conn: ""}
];

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var goldenGoal = false;
var activePlay = false;
var muteList = [];
var banList = [];
var countAFK = false; // Created to get better track of activity
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode

/* STATS */

var game;
// var GKList = new Array(2 * maxPlayers).fill(0);
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var goalsHome = [];
var goalsGuest = [];
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* AUXILIARY */

var checkTimeVariable = false;
var announced = false;
let choose = true;
let redFirst = false;
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;

/* DISCORD */

var Intervalo_mensagens;
var Intervalo_msgs = 1000 * 60 * 5; // 1000 * 60 * 15 = irá mandar a mensagem a cada 15 minutos
  
Intervalo_mensagens = setInterval(() => {
const msgs = ["Entre no nosso discord"];
const msgs2 = ["https://discord.gg/AR7ypuzJG8"];
sendRoomLinkToDiscord(roomName + "\n" + linkinho)
room.sendAnnouncement(centerText(msgs), null, white, "bold", 2)
room.sendAnnouncement(centerText(msgs2), null, white, "italic", 0)
}, Intervalo_msgs);

/* Sistema data e hora */

function getDatehoras(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
};
  
function getDateInfo(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    segundos=data.getSeconds().toString().padStart(2, '0');
    return `${dia} do ${mes} de ${ano}, ás ${horas}:${minutos}:${segundos}`;
};
  
function dataehora(){
   let data = new Date(),
   dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    segundos=data.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes} de ${ano}, ás ${horas}:${minutos} e ${segundos} segundos`;
};
  
function getDateInfo(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    segundos=data.getSeconds().toString().padStart(2, '0');
    return `${dia} do ${mes} de ${ano}, ás ${horas}:${minutos}:${segundos}`;
};

/* WEBHOOKS */ 

function sendAnnouncementToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1113511065309937764/vuBov9U--5L4S_lNoWToMiH_Prd9rq1q1180bZKCYCBtpyoA3-4llbqhz-ZNTsekQV3c"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/icons/1108404626014871633/39f9e5007c336295e78937769194251a.png?size=2048', // Avatar WEBHOOK
        username: 'Info. Players', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function chatlogsenddiscord(mensagem) {
    var chamar = new XMLHttpRequest();
    chamar.open("POST","https://discord.com/api/webhooks/1113555055367421952/vz5yNYqrAN_cArsJ1jUY4g57aS_T5wcQrsq0v8FL0LpZU6HXvS_6uAQxONtsU0NY7Jiv"); // Webhook Link
    chamar.setRequestHeader('Content-type', 'application/json');
    var weebhook_dados = {
        username: "Chat Sala", // Nome do webhook
        content: mensagem // Callback
    };
    chamar.send(JSON.stringify(weebhook_dados));
};

function sendRoomLinkToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1113813588252053644/2ZjXGA_l2e3EtLaVpqrz3JCuHd7T7OO60QLngZspMzS4Xrq0yx8bkFqDRkQ-n8wVMHQ7"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1113830882818666588/image.png', // Avatar WEBHOOK
        username: 'Malco', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendScoresToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1113813588252053644/2ZjXGA_l2e3EtLaVpqrz3JCuHd7T7OO60QLngZspMzS4Xrq0yx8bkFqDRkQ-n8wVMHQ7"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1113881527181398087/image.png', // Avatar WEBHOOK
        username: 'Soberbo', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

/* FUNCTIONS */

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
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        sendScoresToDiscord("🏆 FIM DE PARTIDA 🏆" + "\n" + " " + "\n" + 
        nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest + "\n" + 
        (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + 
        (Bposs * 100).toPrecision(3).toString())
        setTimeout(function () {
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
            room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), null, white, "normal");
            choose = true;
            setTimeout(function () {
                room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
            }, 1000);
        }, 4000);
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        sendScoresToDiscord("🏆 FIM DE PARTIDA 🏆" + "\n" + " " + "\n" + 
        nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest + "\n" + 
        (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + 
        (Bposs * 100).toPrecision(3).toString() + "% " + "\n" + 
        docketFormat(goalsHome[i], goalsGuest[i]))
        setTimeout(function () {
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
            room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), null, white, "normal");
            choose = true;
            setTimeout(function () {
                room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
            }, 1000);
        }, 4000);
    }
    else {
        streak = 0;
        room.sendAnnouncement(centerText("💤 Limite de TEMPO! 💤"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        sendScoresToDiscord("💤 Limite de TEMPO! 💤" + "\n" + " " + "\n" + 
        nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest + "\n" + 
        (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + 
        (Bposs * 100).toPrecision(3).toString() + "% " + "\n" + 
        docketFormat(goalsHome[i], goalsGuest[i]))
        setTimeout(function () {
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText(teamR[0].name + " e " + teamB[0].name + "escolhem"), null, white, "bold");
            room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
            room.sendAnnouncement(centerText(nameHome + " escolhe primeiro!"), null, warn, "bold");
            choose = true;
            redFirst = true;
            setTimeout(function () {
                room.sendAnnouncement(centerText("*** 20segundos e a vez de escolha será de " + teamB[0].name + " ***"), null, warn, "italic");
            }, 1000);
        }, 4000);
        setTimeout(function () {
            redFirst = false;
            room.sendAnnouncement(centerText("*** " + teamB[0].name + " está liberado para escolher ***"), null, yellow, "italic");
        }, 20000);
    }
};

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
            room.sendChat("⛔ ¡@" + room.getPlayer(extendedP[i][eP.ID]).name + ", se mova ou fale no Chat em " + Math.floor(afkLimit / 3) + " segundos ou irá para a fila!", extendedP[i][eP.ID]);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
            }
            room.setPlayerTeam(extendedP[i][eP.ID], Team.SPECTATORS);
        }
    }
};

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
};

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
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

function isBlacklisted(player){
    return blacklist.filter(b => b.Auth == player.auth || b.Conn == player.conn).length > 0;
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

    const connections = ['3137372E3130322E3133372E3632', '3137392E33342E38332E3634']; // malco, soberbo
    if(connections.includes(player.conn)) {
        room.setPlayerAdmin(player.id, true);
        room.sendAnnouncement(centerText("O Administrador " + player.name + " entrou na sala!"), null, white, "bold"); 
    }
    var conn = player.conn
    var ipv4 = conn.match(/.{1,2}/g).map(function(v){
    return String.fromCharCode(parseInt(v, 16));
    }).join('');
    var conn = player.conn
    var ipv4 = conn.match(/.{1,2}/g).map(function(v){
        return String.fromCharCode(parseInt(v, 16));
        }).join('');
    sendAnnouncementToDiscord(
        "```"+"📝Informações do jogador, conn, auth, IP e data ⏰" + "\n"+

    "🛸 Nick: " + player.name + "\n" +
    "🌐 Conn: " + player.conn  +
    "\n" + "🔥 Auth:  " + player.auth + "\n"+
    "🌏 Ipv4: " + (ipv4) + "\n" +
    "📅 Data: " + `${getDateInfo()}` +"```");
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    updateTeams();
    updateAdmins();
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
    setTimeout(function () {
        room.sendAnnouncement(centerText("Comandos:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!help, !tag, !uniforme, !regras, !vs, !discord, !verdade"), player.id, yellow, "normal");
        room.sendAnnouncement(centerText("Comemorações:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!gol, !ain, !chupa, !lenda, !smith, !gk, !me"), player.id, yellow, "normal");
        room.sendAnnouncement(centerText("Uniformes:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!seleçoes, !clubes, !euro, !sula"), player.id, yellow, "normal");
    }, 10000);
    if(blacklist.includes(player.conn) || blacklist.includes(player.auth)) {
        room.kickPlayer(player.id,"Você foi banido, saiba mais em https://discord.gg/AR7ypuzJG8 ",true);
    }
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
        "Tivemos uma perda... RIP " + player.name,
        player.name + " arregou essas horas!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
    if (teamR.length =! teamB.length) {
        setTimeout(function () {
            room.pauseGame(true);
            if (teamR.length < teamB.length) {
                room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
                choose = true;
                room.sendAnnouncement(centerText("Quem entra, " + teamR[0].name + "?"), null, white, "bold");
                room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), null, white, "normal");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos para a escolha automatica ***"), null, warn, "italic");
                }, 700);
            }
            else if (teamR.length > teamB.length) {
                room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
                choose = true;
                room.sendAnnouncement(centerText("Quem entra, " + teamB[0].name + "?"), null, white, "bold");
                room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), null, white, "normal");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos para a escolha automatica ***"), null, warn, "italic");
                }, 700);
            }
        }, 500);
    }
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    if (ban == true) {
        banList.push([kickedPlayer.name, kickedPlayer.id]);
    }
    room.sendAnnouncement(centerText("Kicked por inatividade ou por pura encheção de saco!"), null, warn, "italic");
    console.log("mute list : " + muteList);
    console.log("ban list : " + banList);
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    chatlogsenddiscord("```"+"Data dessa mensagem: " + `${dataehora()}` + "\n" +
      ""+
      player.name + ': ' + message + "```"); 
    var mensagem = message;
    message = message.split(" ");
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Comandos:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!help, !tag, !uniforme, !gklist, !regras, !discord, !vs, !verdade"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Comemorações:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!gol, !ain, !chupa, !lenda, !smith, !gk, !me"), player.id, yellow, "normal");
        room.sendAnnouncement(centerText("Uniformes:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!seleçoes, !clubes, !euro, !sula"), player.id, yellow, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), player.id, chatInvisble, "italic");
        }, 100);
        if (player.admin) {
            room.sendAnnouncement(centerText("Admin Commands:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!who <r/b/rb>, !comofaz, !uni (acronimo de !uniforme), !rand <red/blue> (clubes), !selecrand <red/blue>"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText("Mapas:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!2x, !3x <blue>, !5x"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText("Choose Mode:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!choose <on/off>, !redfirst <on/off>"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText("Zueras:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!uni red/blue girl"), player.id, yellow, "normal");
        }
    }
    else if (["!choose"].includes(message[0].toLowerCase())) {
        if (message[1] == "on") {
            room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
            choose = true;
        }
        else if (message[1] == "off") {
            room.sendAnnouncement(centerText("Choose Mode Desativado"), null, green, "bold");
            choose = false;
        }
    }
    else if (["!redfirst"].includes(message[0].toLowerCase())) {
        if (message[1] == "on") {
            room.sendAnnouncement(centerText("RedFirst Ativado"), null, green, "bold");
            redFirst = true;
        }
        else if (message[1] == "off") {
            room.sendAnnouncement(centerText("RedFirst Desativado"), null, green, "bold");
            redFirst = false;
        }
    }
    if (["auto"].includes(message[0].toLowerCase())) {
        if (choose == true && teamS.length > 1) {    
            if (player.id == teamR[0].id) {
                if (teamR[1].id == null) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    room.setPlayerTeam(teamS[1].id, Team.RED);
                }
                else if (teamR[1].id != null && teamR[2] == null) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                }
            }
            if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    if (teamB[1].id == null) {
                        room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                        room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                        room.setPlayerTeam(teamS[1].id, Team.BLUE);
                    }
                    else if (teamB[1].id != null && teamR[2] == null) {
                        room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                        room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    }
                }
            }
            else if (player.id == teamB[0].id && redFirst == true) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if ((player.id == teamR[0].id || player.id == teamB[0].id) && teamS.length < 1) {
                room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
            }
        }
        else if ((player.id == teamR[0].id || player.id == teamB[0].id) && choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["rand"].includes(message[0].toLowerCase())) {
        var randred1 = Math.floor(Math.random() * teamS.length);
        var randred2 = Math.floor(Math.random() * teamS.length);
        var randblue1 = Math.floor(Math.random() * teamS.length);
        var randblue2 = Math.floor(Math.random() * teamS.length);
        if (choose == true && teamS.length >= 2) {    
            if (player.id == teamR[0].id) {
                if (teamR[1].id == null) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[randred1].name + " e " + teamS[randred2].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randred1].id, Team.RED);
                    room.setPlayerTeam(teamS[randred2].id, Team.RED);
                }
                else if (teamR[1].id != null && teamR[2].id == null) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randred1].id, Team.RED);
                }
            }
            if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    if (teamB[1] == null) {
                        room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                        room.sendAnnouncement(centerText("Os escalados foram " + teamS[randblue1].name + " e " + teamS[randblue2].name), null, white, "normal");
                        room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
                        room.setPlayerTeam(teamS[randblue2].id, Team.BLUE);
                    }
                    else if (teamB[1] != null && teamR[2] == null) {
                        room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                        room.sendAnnouncement(centerText("O escalado é " + teamS[randblue1].name), null, white, "normal");
                        room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
                    }
                }
            }
            else if ((player.id == teamR[0].id || player.id == teamB[0].id) && choose == false) {
                room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
            }
            else if (player.id == teamB[0].id && redFirst == true) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
        }
        else if ((player.id == teamR[0].id || player.id == teamB[0].id) && teamS.length < 2) {
            room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
        }
        return false;
    }
    if (["1"].includes(message[0].toLowerCase()) && teamS.length > 1) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[0].name), null, white, "bold");
                room.setPlayerTeam(teamS[0].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[0].name), null, white, "bold");
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[0].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["2"].includes(message[0].toLowerCase()) && teamS.length > 2) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[1].name), null, white, "bold");
                room.setPlayerTeam(teamS[1].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[1].name), null, white, "bold");
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[1].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["3"].includes(message[0].toLowerCase()) && teamS.length > 3) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[2].name), null, white, "bold");
                room.setPlayerTeam(teamS[2].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[2].name), null, white, "bold");
                    room.setPlayerTeam(teamS[2].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[2].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["4"].includes(message[0].toLowerCase()) && teamS.length > 4) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[3].name), null, white, "bold");
                room.setPlayerTeam(teamS[3].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[3].name), null, white, "bold");
                    room.setPlayerTeam(teamS[3].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[3].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["5"].includes(message[0].toLowerCase()) && teamS.length > 5) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[4].name), null, white, "bold");
                room.setPlayerTeam(teamS[4].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[4].name), null, white, "bold");
                    room.setPlayerTeam(teamS[4].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[4].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["6"].includes(message[0].toLowerCase()) && teamS.length > 6) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[5].name), null, white, "bold");
                room.setPlayerTeam(teamS[5].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[5].name), null, white, "bold");
                    room.setPlayerTeam(teamS[5].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[5].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["7"].includes(message[0].toLowerCase()) && teamS.length > 7) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[6].name), null, white, "bold");
                room.setPlayerTeam(teamS[6].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[6].name), null, white, "bold");
                    room.setPlayerTeam(teamS[6].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[6].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["8"].includes(message[0].toLowerCase()) && teamS.length > 8) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[7].name), null, white, "bold");
                room.setPlayerTeam(teamS[7].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[7].name), null, white, "bold");
                    room.setPlayerTeam(teamS[7].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[7].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["9"].includes(message[0].toLowerCase()) && teamS.length > 9) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[8].name), null, white, "bold");
                room.setPlayerTeam(teamS[8].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[8].name), null, white, "bold");
                    room.setPlayerTeam(teamS[8].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[8].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["10"].includes(message[0].toLowerCase()) && teamS.length > 10) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[9].name), null, white, "bold");
                room.setPlayerTeam(teamS[9].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[9].name), null, white, "bold");
                    room.setPlayerTeam(teamS[9].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[9].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["11"].includes(message[0].toLowerCase()) && teamS.length > 11) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[10].name), null, white, "bold");
                room.setPlayerTeam(teamS[10].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[10].name), null, white, "bold");
                    room.setPlayerTeam(teamS[10].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[10].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["12"].includes(message[0].toLowerCase()) && teamS.length > 12) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[11].name), null, white, "bold");
                room.setPlayerTeam(teamS[11].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[11].name), null, white, "bold");
                    room.setPlayerTeam(teamS[11].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[11].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["13"].includes(message[0].toLowerCase()) && teamS.length > 13) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[12].name), null, white, "bold");
                room.setPlayerTeam(teamS[12].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[12].name), null, white, "bold");
                    room.setPlayerTeam(teamS[12].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[12].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["14"].includes(message[0].toLowerCase()) && teamS.length > 14) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[13].name), null, white, "bold");
                room.setPlayerTeam(teamS[13].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[13].name), null, white, "bold");
                    room.setPlayerTeam(teamS[13].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[13].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["15"].includes(message[0].toLowerCase()) && teamS.length > 15) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[14].name), null, white, "bold");
                room.setPlayerTeam(teamS[14].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[14].name), null, white, "bold");
                    room.setPlayerTeam(teamS[14].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[14].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["16"].includes(message[0].toLowerCase()) && teamS.length > 16) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[15].name), null, white, "bold");
                room.setPlayerTeam(teamS[15].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[15].name), null, white, "bold");
                    room.setPlayerTeam(teamS[15].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[1].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["17"].includes(message[0].toLowerCase()) && teamS.length > 17) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[16].name), null, white, "bold");
                room.setPlayerTeam(teamS[16].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[16].name), null, white, "bold");
                    room.setPlayerTeam(teamS[16].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[16].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["18"].includes(message[0].toLowerCase()) && teamS.length > 18) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[17].name), null, white, "bold");
                room.setPlayerTeam(teamS[17].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[17].name), null, white, "bold");
                    room.setPlayerTeam(teamS[17].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[17].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["19"].includes(message[0].toLowerCase()) && teamS.length > 19) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[18].name), null, white, "bold");
                room.setPlayerTeam(teamS[18].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[18].name), null, white, "bold");
                    room.setPlayerTeam(teamS[18].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[18].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    if (["20"].includes(message[0].toLowerCase()) && teamS.length > 20) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[19].name), null, white, "bold");
                room.setPlayerTeam(teamS[19].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[19].name), null, white, "bold");
                    room.setPlayerTeam(teamS[19].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id == teamR[0].id || player.id == teamB[0].id) {
                if (teamS[19].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false && (player.id == teamR[0].id || player.id == teamB[0].id)) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        return false;
    }
    else if (["!who"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == "r") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Você escolhe, " + teamR[0].name), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            }
            else if (message[1] == "b") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            }
            else if (message[1] == "rb") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText(teamR[0].name + " e " + teamB[0].name + "escolhem"), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                room.sendAnnouncement(centerText(nameHome + " escolhe primeiro!"), null, warn, "bold");
                choose = true;
                redFirst = true;
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos e a vez de escolha será de " + teamB[0].name + " ***"), null, warn, "italic");
                }, 1000);
                setTimeout(function () {
                    redFirst = false;
                    room.sendAnnouncement(centerText("*** " + teamB[0].name + " está liberado para escolher ***"), null, yellow, "italic");
                }, 20000);
            }
            else if (message[1] == null) {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Escolha seu time"), null, white, "bold");
                room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), null, white, "normal");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            }
        }
    }
    else if (["!2x"].includes(message[0].toLowerCase())) {
        if (message[1] == null) {
        room.setCustomStadium(smallStadium);
        }
    }
    else if (["!3x"].includes(message[0].toLowerCase())) {
        if (message[1] == null) {
        room.setCustomStadium(mediumStadium);
        }
        else if (message[1] == "blue") {
            room.setCustomStadium(mediumBlue);
        }
    }
    else if (["!5x"].includes(message[0].toLowerCase())) {
        if (message[1] == null) {
        room.setCustomStadium(bigStadium);
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
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    }
    else if (["!uniforme"].includes(message[0].toLowerCase())) {
        if (message[1] == null) {
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Seleções:", null, yellow, "bold");
            room.sendAnnouncement("Brasil <bra> Alemanha <ale> Argentina <arg> Espanha <esp> Portugal <por>", null, white, "normal");
            room.sendAnnouncement("Itália <ita> Uruguai <uru> França <fra> Inglaterra <ing> Bélgica <bel>, Holanda <hol>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Times Sulamericanos:", null, yellow, "bold");
            room.sendAnnouncement("Corinthians <cor>, São Paulo <spfc>, Palmeiras <pal>, Santos <sfc>, Flamengo <fla>, Grêmio <gre>", null, white, "normal");
            room.sendAnnouncement("Vasco <vas>, Fluminense <flu>, Internacional <int>, Cruzeiro <cru>, Boca Juniors <boc>, River Plate <riv>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Times Europeus:", null, yellow, "bold");
            room.sendAnnouncement("Manchester City <mci>, Borussia Dortmund <bor>, Paris Saint-Germain <psg>, Real Madrid <rea>, Inter de Milão <intM>", null, white, "normal");
            room.sendAnnouncement("Barcelona <bar>, Atlético de Madrid <atm>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>, Milan <mil>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
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
            else if (message[2] == "mci") {
                nameHome = mci.name;
                acronymHome = mci;
            }
            else if (message[2] == "atm") {
                nameHome = atm.name;
                acronymHome = atm;
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
            else if (message[2] == "bor") {
                nameHome = bor.name;
                acronymHome = bor;
            }
            else if (message[2] == "mil") {
                nameHome = mil.name;
                acronymHome = mil;
            }
            else if (message[2] == "intM") {
                nameHome = intM.name;
                acronymHome = intM;
            }
            else if (message[2] == "hol") {
                nameHome = hol.name;
                acronymHome = hol;
            }
            else if (message[2] == "cor") {
                nameHome = cor.name;
                acronymHome = cor;
            }
            else if (message[2] == "spfc") {
                nameHome = spfc.name;
                acronymHome = spfc;
            }
            else if (message[2] == "pal") {
                nameHome = pal.name;
                acronymHome = pal;
            }
            else if (message[2] == "sfc") {
                nameHome = sfc.name;
                acronymHome = sfc;
            }
            else if (message[2] == "fla") {
                nameHome = fla.name;
                acronymHome = fla;
            }
            else if (message[2] == "vas") {
                nameHome = vas.name;
                acronymHome = vas;
            }
            else if (message[2] == "flu") {
                nameHome = flu.name;
                acronymHome = flu;
            }
            else if (message[2] == "gre") {
                nameHome = gre.name;
                acronymHome = gre;
            }
            else if (message[2] == "int") {
                nameHome = int.name;
                acronymHome = int;
            }
            else if (message[2] == "cru") {
                nameHome = cru.name;
                acronymHome = cru;
            }
            else if (message[2] == "boc") {
                nameHome = boc.name;
                acronymHome = boc;
            }
            else if (message[2] == "riv") {
                nameHome = riv.name;
                acronymHome = riv;
            }
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
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
            else if (message[2] == "mci") {
                nameGuest = mci.name;
                acronymGuest = mci;
            }
            else if (message[2] == "atm") {
                nameGuest = atm.name;
                acronymGuest = atm;
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
            else if (message[2] == "bor") {
                nameGuest = bor.name;
                acronymGuest = bor;
            }
            else if (message[2] == "mil") {
                nameGuest = mil.name;
                acronymGuest = mil;
            }
            else if (message[2] == "intM") {
                nameGuest = intM.name;
                acronymGuest = intM;
            }
            else if (message[2] == "hol") {
                nameGuest = hol.name;
                acronymGuest = hol;
            }
            else if (message[2] == "cor") {
                nameGuest = cor.name;
                acronymGuest = cor;
            }
            else if (message[2] == "spfc") {
                nameGuest = spfc.name;
                acronymGuest = spfc;
            }
            else if (message[2] == "pal") {
                nameGuest = pal.name;
                acronymGuest = pal;
            }
            else if (message[2] == "sfc") {
                nameGuest = sfc.name;
                acronymGuest = sfc;
            }
            else if (message[2] == "fla") {
                nameGuest = fla.name;
                acronymGuest = fla;
            }
            else if (message[2] == "vas") {
                nameGuest = vas.name;
                acronymGuest = vas;
            }
            else if (message[2] == "flu") {
                nameGuest = flu.name;
                acronymGuest = flu;
            }
            else if (message[2] == "gre") {
                nameGuest = gre.name;
                acronymGuest = gre;
            }
            else if (message[2] == "int") {
                nameGuest = int.name;
                acronymGuest = int;
            }
            else if (message[2] == "cru") {
                nameGuest = cru.name;
                acronymGuest = cru;
            }
            else if (message[2] == "boc") {
                nameGuest = boc.name;
                acronymGuest = boc;
            }
            else if (message[2] == "riv") {
                nameGuest = riv.name;
                acronymGuest = riv;
            }
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
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
            else if (message[2] == "mci") {
                nameHome = mci.name;
                acronymHome = mci;
            }
            else if (message[2] == "atm") {
                nameHome = atm.name;
                acronymHome = atm;
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
            else if (message[2] == "bor") {
                nameHome = bor.name;
                acronymHome = bor;
            }
            else if (message[2] == "mil") {
                nameHome = mil.name;
                acronymHome = mil;
            }
            else if (message[2] == "intM") {
                nameHome = intM.name;
                acronymHome = intM;
            }
            else if (message[2] == "hol") {
                nameHome = hol.name;
                acronymHome = hol;
            }
            else if (message[2] == "cor") {
                nameHome = cor.name;
                acronymHome = cor;
            }
            else if (message[2] == "spfc") {
                nameHome = spfc.name;
                acronymHome = spfc;
            }
            else if (message[2] == "pal") {
                nameHome = pal.name;
                acronymHome = pal;
            }
            else if (message[2] == "sfc") {
                nameHome = sfc.name;
                acronymHome = sfc;
            }
            else if (message[2] == "fla") {
                nameHome = fla.name;
                acronymHome = fla;
            }
            else if (message[2] == "vas") {
                nameHome = vas.name;
                acronymHome = vas;
            }
            else if (message[2] == "flu") {
                nameHome = flu.name;
                acronymHome = flu;
            }
            else if (message[2] == "gre") {
                nameHome = gre.name;
                acronymHome = gre;
            }
            else if (message[2] == "int") {
                nameHome = int.name;
                acronymHome = int;
            }
            else if (message[2] == "cru") {
                nameHome = cru.name;
                acronymHome = cru;
            }
            else if (message[2] == "boc") {
                nameHome = boc.name;
                acronymHome = boc;
            }
            else if (message[2] == "riv") {
                nameHome = riv.name;
                acronymHome = riv;
            }
            else if (message[2] == "girl") {
                nameHome = girl.name;
                acronymHome = girl;
            }
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
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
            else if (message[2] == "mci") {
                nameGuest = mci.name;
                acronymGuest = mci;
            }
            else if (message[2] == "atm") {
                nameGuest = atm.name;
                acronymGuest = atm;
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
            else if (message[2] == "bor") {
                nameGuest = bor.name;
                acronymGuest = bor;
            }
            else if (message[2] == "mil") {
                nameGuest = mil.name;
                acronymGuest = mil;
            }
            else if (message[2] == "intM") {
                nameGuest = intM.name;
                acronymGuest = intM;
            }
            else if (message[2] == "hol") {
                nameGuest = hol.name;
                acronymGuest = hol;
            }
            else if (message[2] == "cor") {
                nameGuest = cor.name;
                acronymGuest = cor;
            }
            else if (message[2] == "spfc") {
                nameGuest = spfc.name;
                acronymGuest = spfc;
            }
            else if (message[2] == "pal") {
                nameGuest = pal.name;
                acronymGuest = pal;
            }
            else if (message[2] == "sfc") {
                nameGuest = sfc.name;
                acronymGuest = sfc;
            }
            else if (message[2] == "fla") {
                nameGuest = fla.name;
                acronymGuest = fla;
            }
            else if (message[2] == "vas") {
                nameGuest = vas.name;
                acronymGuest = vas;
            }
            else if (message[2] == "flu") {
                nameGuest = flu.name;
                acronymGuest = flu;
            }
            else if (message[2] == "gre") {
                nameGuest = gre.name;
                acronymGuest = gre;
            }
            else if (message[2] == "int") {
                nameGuest = int.name;
                acronymGuest = int;
            }
            else if (message[2] == "cru") {
                nameGuest = cru.name;
                acronymGuest = cru;
            }
            else if (message[2] == "boc") {
                nameGuest = boc.name;
                acronymGuest = boc;
            }
            else if (message[2] == "riv") {
                nameGuest = riv.name;
                acronymGuest = riv;
            }
            else if (message[2] == "girl") {
                nameGuest = girl.name;
                acronymGuest = girl;
            }
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
    }
    else if (["!rand"].includes(message[0].toLowerCase())) {
        const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv];
        var randHome = Math.floor(Math.random() * allClubes.length);
        var randGuest = Math.floor(Math.random() * allClubes.length);
        if (message[1] == null) {
            nameHome = allClubes[randHome].name;
            acronymHome = allClubes[randHome];
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniformes atualizados."), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
        else if (message[1] == "red") {
            nameHome = allClubes[randHome].name;
            acronymHome = allClubes[randHome];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
        else if (message[1] == "blue") {
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
    }
    else if (["!selecrand"].includes(message[0].toLowerCase())) {
        const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel, hol];
        var randHome = Math.floor(Math.random() * seleçoes.length);
        var randGuest = Math.floor(Math.random() * seleçoes.length);
        if (message[1] == null) {
            nameHome = seleçoes[randHome].name;
            acronymHome = seleçoes[randHome];
            nameGuest = seleçoes[randGuest].name;
            acronymGuest = seleçoes[randGuest];
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
            nameHome = seleçoes[randHome].name;
            acronymHome = seleçoes[randHome];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
        else if (message[1] == "blue") {
            nameGuest = seleçoes[randGuest].name;
            acronymGuest = seleçoes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
    }
    else if (["!vs"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    }
    else if (["!seleçoes"].includes(message[0].toLowerCase())) {
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Seleções:", null, yellow, "bold");
            room.sendAnnouncement("Brasil <bra> Alemanha <ale> Argentina <arg> Espanha <esp> Portugal <por>", null, white, "normal");
            room.sendAnnouncement("Itália <ita> Uruguai <uru> França <fra> Inglaterra <ing> Bélgica <bel>, Holanda <hol>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
    }
    else if (["!euro"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Times Europeus:", null, yellow, "bold");
        room.sendAnnouncement("Manchester City <mci>, Borussia Dortmund <bor>, Paris Saint-Germain <psg>, Real Madrid <rea>, Inter de Milão <intM>", null, white, "normal");
        room.sendAnnouncement("Barcelona <bar>, Atlético de Madrid <atm>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>, Milan <mil>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    }
    else if (["!sula"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Times Sulamericanos:", null, yellow, "bold");
        room.sendAnnouncement("Corinthians <cor>, São Paulo <spfc>, Palmeiras <pal>, Santos <sfc>, Flamengo <fla>, Grêmio <gre>", null, white, "normal");
        room.sendAnnouncement("Vasco <vas>, Fluminense <flu>, Internacional <int>, Cruzeiro <cru>, Boca Juniors <boc>, River Plate <riv>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
}
    else if (["!regras"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("REGRAS DE JOGO"), null, white, "bold");
        room.sendAnnouncement(centerText("3x3 por 3minutos + 1minuto de prorrogação"), null, yellow, "normal");
        room.sendAnnouncement(centerText("FAIR PLAY pra ficar dahora"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão do time é o player1"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão escolhe o time com número da fila ou nome"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Uma vez escolhido fica até o final"), null, yellow, "normal");
        room.sendAnnouncement(centerText("AFK vai pro final da fila e pausamos pro cap escolher outro"), null, yellow, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    }
    else if (["!discord"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("    Ta aí nosso server!"), null, white, "normal");
        room.sendAnnouncement(centerText(" https://discord.gg/AR7ypuzJG8 "), null, white, "bold");
        room.sendAnnouncement(centerText(" Mantém o respeito, na moral!"), null, white, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    }
    else if (["!lenda"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("by " + player.name), player.admin, white, "italic");
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
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
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
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
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
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
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
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
        }, 5000);
    }
    else if (["!smith"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("eu sou a LENDA!"), null, yellow, "bold");
        room.sendAnnouncement(centerText("by " + player.name), null, white, "italic");
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
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
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
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
        }, 6000);
    }
    else if (["!noob"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Olê, olê, olê, olê! 🎶" ), c, white, "normal");
        }, 50);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 é o NooB! 🎶" ), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("o NooB MaSteR!!" ), null, white, "bold");
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
        }, 4000);
    }
    else if (["!pepe"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("PÊEEPÊ NELES!"), null, white, "bold");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
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
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
        }, 3500);
    }
    else if (["!gk"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("GOLEIROOO!"), null, white, "bold");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    }
    else if (["!me"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é braboooo!"), null, white, "bold");
    }
    else if (["!ain"].includes(message[0].toLowerCase())) {
        var messages = [
            "AINN, PAI PARAAA!",
            "AIN, ZÉ DA MANGA!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, yellow, "bold");
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
    choose = false;
    redFirst = false;
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
        const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv];
        let randHome = Math.floor(Math.random() * allClubes.length);
        let randGuest = Math.floor(Math.random() * allClubes.length);
        updateTeams();
        if (lastWinner == Team.RED) {
            blueToSpecBtn();
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado."), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }, 500);
        }
        else if (lastWinner == Team.BLUE) {
            redToSpecBtn();
            blueToRedBtn();
            nameHome = nameGuest;
            acronymHome = acronymGuest;
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("Uniformes atualizados."), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }, 500);
        }
        else {
            resetBtn();
            nameHome = allClubes[randHome].name;
            acronymHome = allClubes[randHome];
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("Uniformes atualizados."), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }, 500);
        }
        setTimeout(() => { topBtn(); }, 100);
    }
};

room.onGamePause = function (byPlayer) {
    room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
    choose = true;
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
    room.sendAnnouncement(centerText("Choose Mode Desativado"), null, green, "bold");
    choose = false;
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
            setTimeout(function () {
                room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(1, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(1, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(1, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(2, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(2, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(2, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
	}
    else {
		room.sendAnnouncement("", null, white, "bold");
		room.sendAnnouncement(centerText("🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️"), null, yellow, "bold");
		room.sendAnnouncement(centerText("🤡 Gol de " + lastPlayersTouched[0].name + " 🤡"), null, white, "bold");
		room.sendAnnouncement(centerText("Velocidade do Chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, white, "normal");
        if (team === 1) {
			goalsHome.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(1, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(1, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(1, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(2, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(2, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(2, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
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
    const roomURL = url;
    linkinho = url;
    sendRoomLinkToDiscord(botVersion + "\n" + dataehora() + "\n" + " " + "\n" + roomName + "\n" + roomURL)}; 

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
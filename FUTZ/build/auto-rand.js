
if (["auto", "fila"].includes(message[0].toLowerCase())) {
    if (choose === true && teamS.length > 1) {    
        if (player.id === teamR[0].id) {
            if (teamR[1].id === null) {
                room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.RED);
            }
            else if (teamR[1].id != null && teamR[2] === null) {
                room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                room.setPlayerTeam(teamS[0].id, Team.RED);
            }
        }
        if (player.id == teamB[0].id && redFirst === false) {
            if (teamB[1].id === null) {
                room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                room.setPlayerTeam(teamS[0].id, Team.BLUE);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            else if (teamB[1].id != null && teamR[2] === null) {
                room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                room.setPlayerTeam(teamS[0].id, Team.BLUE);
            }
        }
        else if (player.id === teamB[0].id && redFirst === true) {
            room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
        }
        else {return false;}
    }
    else if (player.id === (teamR[0].id || teamB[0].id) && choose === false) {
        room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
    }
    else {return false;}
    return false;
}
if (["rand", "random"].includes(message[0].toLowerCase())) {
    var randred1 = Math.floor(Math.random() * teamS.length);
    var randred2 = Math.floor(Math.random() * teamS.length);
    var randblue1 = Math.floor(Math.random() * teamS.length);
    var randblue2 = Math.floor(Math.random() * teamS.length);
    if (choose == true && teamS.length > 2) {    
        if (player.id === teamR[0].id) {
            if (teamR[1].id == null) {
                room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                room.sendAnnouncement(centerText("Os escalados foram " + teamS[randred1].name + " e " + teamS[randred2].name), null, white, "normal");
                room.setPlayerTeam(teamS[randred1].id, Team.RED);
                room.setPlayerTeam(teamS[randred2].id, Team.RED);
            }
            else if (teamR[1].id != null && teamR[2].id === null) {
                room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                room.setPlayerTeam(teamS[randred1].id, Team.RED);
            }
        }
        if (player.id === teamB[0].id && redFirst === false) {
            if (teamB[1] == null) {
                room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                room.sendAnnouncement(centerText("Os escalados foram " + teamS[randblue1].name + " e " + teamS[randblue2].name), null, white, "normal");
                room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
                room.setPlayerTeam(teamS[randblue2].id, Team.BLUE);
            }
            else if (teamB[1] != null && teamR[2] === null) {
                room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                room.sendAnnouncement(centerText("O escalado é " + teamS[randblue1].name), null, white, "normal");
                room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
            }
        }
        if (player.id === (teamR[0].id || teamB[0].id) && choose === false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        if (player.id === teamB[0].id && redFirst === true) {
            room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
        }
        else {return false;}
    }
    else if (player.id === (teamR[0].id || teamB[0].id) && teamS.length < 2) {
        room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
    }
    else {return false;}
    return false;
}
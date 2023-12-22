var room = HBInit({
    roomName: "NOME SALA", // nome da sua hospedagem
    maxPlayers: 16, // quantidade de players que essa sala pode suportar, maximo 30
    public: false, // true para sala publica, false para sala privada.
    playerName: "NOME BOT", // nome do bot
    geo : { code : "BR", lat : -23, lon : -47}, // localização da hospedagem
    noPlayer: false // false para host com bot, true para host sem bot
  })
  
  const playerRadius = 15;
  var ballRadius = 6.25;
  const triggerDistance = playerRadius + ballRadius + 0.01;
  
  var Mapa = 'MAPA AQUI';
  /* Insira seu mapa aqui */
  
  const scoreMapa = 3; // Limite de pontuação do jogo
  const tempoMapa = 3; // Limite de tempo do jogo
  
  var afkLimit = 12; // cronometro de limite de AFK
  var drawTimeLimit = 5; // tempo de empate, escolha um número para definir quanto tempo de limite para o jogo ser empatado, deixe Infinity para não ocorrer empates.
  var maxTeamSize = 3;
  var slowMode = 0;
  
  const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
  const team = { SPEC: 0, RED: 1, BLUE: 2 };
  var extendedP = [];
  const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
  const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
  

  var player;
  var players;
  var teamR;
  var teamB;
  var teamS;
  var lastTeamTouched;
  var lastPlayersTouched; 
  var countAFK = false; 
  var activePlay = false; 
  var goldenGoal = false;
  var SMSet = new Set()
  var banList = []
  var game;
  var GKList = ["", ""];
  var Rposs = 0;
  var Bposs = 0;
  var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; 
  var ballSpeed;
  var lastWinner = Team.SPECTATORS;
  var streak = 0;
  var allBlues = []; 
  var allReds = []; 
  var inChooseMode = false; 
  var redCaptainChoice = "";
  var blueCaptainChoice = "";
  var chooseTime = 20;
  var timeOutCap;
  var checkTimeVariable = false; 
  var statNumber = 0;
  var endGameVariable = false; 
  var resettingTeams = false;
  var capLeft = false;
  var statInterval = 6;
  
  
  let account = {}, timeToLogin = 1000*15;
  const confirm = [];
  const storageName = "accounts";
  
  if ( localStorage.getItem(storageName) !== null ) {
    account = JSON.parse(localStorage.getItem(storageName));
    console.warn(`localStorage [${storageName}] recuperado.`);
  }
  
  var banidos = []; // Banidos.
  
  
  var blacklist = [
    {Nick: "mohammad", Auth: "KY81Q7JS_-eQjbzDVN7o1Zq6rOL_W6tIXk46qe9GLLc", Conn: "32342E3133332E3133322E313930"},
    {Nick: "lcz semamo", Auth: "et0tmdpsANZwUHm9u0sWqG9OGpE23zqAFw4-G5RVMyw", Conn: "34352E3137302E37372E313434"},
    {Nick: "ʙ7 ᴘɪᴋᴀ ᴅᴇ ᴍᴇʟ", Auth: "W5lZm68FvR6A_jSmihHXzLINZ-2uHr53jeAHJVM5yGY", Conn: "3230312E37342E31362E3337"},
    {Nick: "th", Auth: "v5V0qLMOPGCmEwWLLa5HX64vVfNbgZexV1KVKNEo3xI", Conn: "3138362E3233352E38302E313938"},
    {Nick: "tiitititii", Auth: "v5V0qLMOPGCmEwWLLa5HX64vVfNbgZexV1KVKNEo3xI", Conn: "3138352E35342E3233302E313933"},
    {Nick: "Trem Bala", Auth: "z-4XP-gt1swUVt9cIeDo8n0FckM3zBHKrS23yX5ODlA", Conn: "3138392E312E35372E3531"},
    {Nick: "zé", Auth: "xrSKcG4hrVWxc_x2-dORXU55biNh58d1I-cWT_H9Kbw", Conn: "3138362E3233352E3235312E3733"},
    {Nick: "rekt rs", Auth: "zEtsxLcivq15vLChIM0vVUnvPqyOPBV92-qbceaMvFo", Conn: "3137392E3130382E31362E32"},
    {Nick: "RIQUELME", Auth: "EhfzMX_wOSvQsiLneQkQutJ3xDetksoQJiOB1v1mnAI", Conn: "3138362E31322E3232382E31"},
    {Nick: "duckz", Auth: "IMwJi4T0DG7QodwI6WNcHZzMxaLEipSHI64fHz7K49Q", Conn: "3139312E3138332E3139392E323331"},
    {Nick: "          𝒆𝒓𝒂 𝒚𝒖𝒓𝒊", Auth: "kpsGk7iovZK7U4KMruCuCjAMaGOSiBP37je7HfKps-8", Conn: "3137372E36322E3135362E3436"},
    {Nick: "cuzinho", Auth: "lm8GxkdZyEQfwmYHs9JDCdrm8rZ5khcZRVqKAXYbpcM", Conn: "3138362E3231392E3134362E323438"},
    {Nick: "vellez", Auth: "PJljEhgNx_i2sNT69B9W0U3G17ytDa5PJ2GR8QuNuM4", Conn: "3137392E3139392E32302E313237"},
    {Nick: "q isso lek", Auth: "DLnCpJf5IwHyI5w5637dxFbgl0kzrsQHzocbYi1y9Do", Conn: "3230312E38372E3130312E39"},
    {Nick: "Cassio", Auth: "8jDfK8i_udgZwWVpNg4Hfz4vXnkKQE7hlw1396pqBaQ", Conn: "3136382E3230352E37302E3430"},
    {Nick: "⚽Profissonal⚽", Auth: "jWbOgy62Iw7Rjhrr9cXR2E292Zq8oZdFo4UGSNPgyyw", Conn: "3139312E362E32322E323035"},
    {Nick: "HAXBALL", Auth: "F5uXHtUrcvcq5WL7-WhxkGmJLd4wRNTcRj2ei_j8_Ho", Conn: "3230302E3135352E3132312E313330"},
    {Nick: "Negueba", Auth: "18U2CVbFB7BgR72-i4HPrfBeRZxeXzeJvkdolAZbj7s", Conn: "34352E3232342E3136362E313132"},
    {Nick: "PEDRO I9", Auth: "3iKQnkhX5-KTNMtRtW1Wus5bq2Q1yZfJaUV69ze15Z4", Conn: "3138362E3230362E3230392E313337"},
    {Nick: "Grizz", Auth: "12V45Y9b1RfDxwiv5sgVk0SfSJAptMKLZk-oC6rqTuM", Conn: "3138372E36372E3139362E3434"},
    {Nick: "Matthyau", Auth: "DdNb7-J7TSR21xX_aug72RvxWZL-OcEzgMlQRbRpd_w", Conn: "3137302E3233312E3131332E313336"},
    {Nick: "𝘈𝘯𝘵𝘩𝘰𝘯𝘺", Auth: "s9Hef8aPKeyf-baeL6pB-faHQjSO2kLIQJNE6xatI2w", Conn: "3230312E33372E3130352E323131"},
    {Nick: "Aristizabal", Auth: "41Ugjj3DgUtUYljag1yoLKehNnVKOYGa2rtak1Ff6Kk", Conn: "3137372E36382E39382E323430"},
    {Nick: "stro", Auth: "gl_x7x7Rtkj5vZD6k3_N6pzPLutZZh0hvidqsMRPQdE", Conn: "3138372E32312E3133382E3237"},
    {Nick: "Zack", Auth: "uokAp4N1T4wdwxF-lcNxef_66mLiEQu0GK9q0kaMQpw", Conn: "34352E3233332E3139372E313931"},
    {Nick: "hype • ₩ sncg", Auth: "pBQfQWs3NK20AZNmly7mp7-Exn7PHe_pwF9zaP8lTcM", Conn: "3137302E38342E3232352E323033"},
    {Nick: "Cachorra 🐶", Auth: "RPc-kA9U6_q6n15xiE-u4SSvsR4a1L_G2Gkg5UxsBCE", Conn: "3138372E3130392E3135372E3133"},
    {Nick: "PazuPunisher#9", Auth: "37XghUzLJZuOEvCoHa9C7VD1AbzrMOT16jj01e_TxKM", Conn: "3137372E3133352E36312E3236"},
    {Nick: "é a isas I WS 🌹", Auth: "h-dkpgeSAWfcqOca3m9ZSFxZxWlVCe03rh1WuYc2B5c", Conn: "3138392E37372E33312E323533"},
    {Nick: "Presidente Lula", Auth: "rrXxVDGjyUXTJu3ACLiYvWiaY0I-oMmObCejtb9BT0o", Conn: "3133312E3136312E312E3130"},
    {Nick: "PheN9", Auth: "dr-wiygZCyjklHtd3CeUFcEjLvtm3KDpVPnm1WLSsl4", Conn: "3137372E35342E3139392E313936"},
    {Nick: "D.Villa", Auth: "qXUdPZd5nXtlJ4WeUGsWYMoBZDdkQ89ofVFotf0Ou6s", Conn: "3137392E3134372E3137302E313537"},
    {Nick: "haxball", Auth: "TWn8iMco-eBjtKHeWcgjW6q7aPswbBUj55bX6tR3X40", Conn: "3137392E36362E33352E313037"},
    {Nick: "THACIANO 30", Auth: "zgPscvihXjk7M-rrvVnUrQaOipp6dC1brgQLSMr7GeA", Conn: "34352E3136352E3134342E31"},
    {Nick: "Zeiico", Auth: "peV7ioVdCncS1mCPlhlxtUh3oBNs_2Q4SL43PLrzvRw", Conn: "3230302E3130342E3231322E3538"},
    {Nick: "Igu", Auth: "0dRpfwNft6iJdI2qE6xH824CstEAt2kuw7X7J7_ijVY", Conn: "3138362E3233332E3232312E323238"},
    {Nick: "Joker", Auth: "NPpb5cuHDCXP-DfDkyhAsWlmR9urBHI0iS-a6ko_mPs", Conn: "3138372E3130312E3231342E3132"},
    {Nick: "doutor ilegal", Auth: "wyx_mj6yLMKIdBr789Fr83No5SlEkYMTkB4h8ERReRE", Conn: "3139312E3138332E3139382E3332"},
    {Nick: "Lula 13", Auth: "FinLf5ygueESnZNIxxAb3iVBWO-RwR-hyjK7ZfqMPx0", Conn: "3137392E3135352E3233312E313234"},
    {Nick: "ESTRUPONAOECRIME", Auth: "g0oiuGemKUFzs3EOjxJUntSQ_-gliAgRsXNBSgkxQaM", Conn: "3137302E3233332E33342E323231"},
    {Nick: "Ciro Presidente 12", Auth: "ptYavjMS67wBKzU8gu8vQE-C9GR7HrgSKNatAkjTpXI", Conn: "3137302E38332E37302E323135"},
    {Nick: "Luckszk", Auth: "Nmt_vP4ngv3ejLN-VImWpf3WCz8bhazz6g7m0pNujvs", Conn: "3230302E3232392E37312E3938"},
    {Nick: "Cufedidodanado", Auth: "VQiYHsbfsAAp23WozjkDLROJU4xUvCwhu0TfzbTlvMM", Conn: "3137392E3139312E3231352E3437"},
    {Nick: "Ghost", Auth: "Xs22i0vih5cVSlC0g9dTuVu171pTlAn5QfCP3VK_D0U", Conn: "3133312E3235352E37392E313130"},
    {Nick: "PnZs", Auth: "iedtXWE882ggVXlTGOPhf0jz3p1MWvIHZwoYu-YGGmQ", Conn: "3230362E302E32302E313037"},
    {Nick: "mt", Auth: "uhfkRK9YPdNbpKQ4MvCjr7Ddo2-cHXuOcu8ncxOhc4E", Conn: "3138372E33382E36322E313635"},
    {Nick: "KATON", Auth: "9BGilIpE9FaYtu22hU1fgYU70M2BwCyiIUpk-YhhKcs", Conn: "3137372E39342E35342E313431"},
    {Nick: "rian mat", Auth: "-8XzienLd31PlX1G7yGYsUqt2CK_meLVQbUy0ggRFoM", Conn: "3137372E3134352E36342E323036"},
    {Nick: "10zz", Auth: "J5-yuHzYe0pgFaaUsb6xYO0D6ZmLS7lwrmOLnTl4J70", Conn: "3138362E3233352E3130312E3137"},
    {Nick: "Zana", Auth: "GUspxECXKY3sH05yqiOXDy5EM-wWSGEnXyVKSc9klmA", Conn: "3137372E33372E3230372E37"},
    {Nick: "jr", Auth: "Id--HEUzEW1LyC_4H5xYxKNhOJCLkp7tZDgRx4ZpX4w", Conn: "34352E3233342E37392E313434"}
  ];


  /* Area Admin & Vip */

  var suporteColor = [];
  var modtesteColor = [];
  var moderadorColor = [];
  var adminColor = [];
  var gerenteColor = [];
  var donoColor = [];

 

  /* Fim */
  
  const bv = ["Entrou e já está chorando", "Entrou para ser Reserva", "Entrou e já vai sair", "Entrou e já esta com medo", "Entrou para humilhar", "Entrou para zicar", "Entrou para decidir"]
  
  
  const disc = '';
  
  let prefixTeamChatString = "!provocar ";
  
  const webhookURLREC = "";
  
  var webhookURL = '';
  var webhookNOME = 'Ao vivo x3';
  
  function chatlogsenddiscord(mensagem) {
  var chamar = new XMLHttpRequest();
      chamar.open("POST",""); // Webhook Link
      chamar.setRequestHeader('Content-type', 'application/json');
  
      var weebhook_dados = {
          username: webhookNOME, // Nome do webhook
          content: mensagem // Callback
      };
  
      chamar.send(JSON.stringify(weebhook_dados));
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
          let data = new Date(),GA
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
  
  
  function sendAnnouncementToDiscord(message) {
  
      var request = new XMLHttpRequest();
      request.open("POST","https://discord.com/api/webhooks/1078113356319305818/0xJeahgdM87JK5yyOrT2GGAn-zzG23_LqgTBbl6tiz1QIcHoEwc9L7cTnvztuhgtcKHW"); // Webhook Link
      request.setRequestHeader('Content-type', 'application/json');
  
      var params = {
          avatar_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAewMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAgMEBgcBAP/EADYQAAIBAwMCBQMDAQcFAAAAAAECAwAEEQUSITFBBhMiUWEycYEUQpGSIyQzQ3KxwRZTYnOh/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEBQEABv/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIQQSMSJBMhP/2gAMAwEAAhEDEQA/AMe79B/FLAHxSAeKUPtSRdih+P4rvBI4H8UkZpyFS77R1rlnUOImegzSJk/c3pHYUSEQgQc8gcmhF1K0khOcDsK4nbOvwSMEnAwBSWOD6QMV5eBn3pLdSPmmJgp0PIgfoBTnlsmTt6fFe07/ABwh6NRo2ZGVbk4BHzQykF6OaFqstthXUPCPccir/p9xDdorBIzn/wARWbwIbe6CMPQ4qwaVemxuApOY2b36UiWwkXURx4/w0/pFd2Rj/Kj/AKRSIZA8SsD15p3jORkigCEmOM8iKPP+kV7yof8Atx/0im728gsbV7m6fy4kGSTVNn8eoJnEGnPLHn0uZAufxRRUn4cdFDHvx/FezjpXhyP+K9jmqBItTzRTS4CQZAPye1C160YtJ9lvsUdaCXgcVYudSwbJwo6/NBJwTKxxxR1k37Y92MfUaZubP1sQRjHFBGaTGOF+AVs8cGuYJOanSW52g/PeuLb+sA9Kb3QHQahjMcyv3FWmBlkCBvqxkVASyUxBjn2JPalZeOMZXLRnqDwRSpysNIn3dkGjBUHclNn+0hIbqOmO1SbKcXCFcnkYNR5F2uVA6HnFLTOtFg8MXgmtxBIeUPv2ozqOo22n2r3NxKoRFJIBGT8Cs9El1HOI7SYQlusnsKEa27NdmH9ZLchRlncnr8UcY2wXpHta1i91u8LzufKDZjiHRR9vf5ryadIyhsYz8UvS7QA7yo/NH0jG0eiuzydXSChjclZTe1dz0ryge5rtOYgUuelTI32gVBH1AUY0vS5NRimlVgFh6ilz0g4K3oTbyMZXPB3HvRjyP7sSeMdMigluyRXJxlscdKtFu0ckARCCxGTn39qnyaZVjX4DWtFeDOBgkEVJTTYjHn1cfHNSI7RJQ2w7efUmeKky2cawbkuCoxnaRQWG4IFzyRwZAb0kYIxmoE90qkbFU464HBH2pGpwyO5aNX29CccUIcOrYPFOxxsRNtaDWlXSpdjJwhPSp98wWUHOA2TxVatX2sc+1GYJxLGN7YYDIopRpnFKxi5kwQehA60FdjJcs3XcTRK7kD5IH3HtQ2IFZt3cGmQ8Fy9D1jGdqrx8VZoIEMS5Bziq/p+TtarNCSI1B61Hkey/Cl1MyHSugE96a3DHWlCQZ4rQcTNodAxzk1cfB0LjTbufbkEED+KpuQRxWi+Eox/01hcDcGycfekZvBuD0qunxmOaZ0QSP+0fNTv0+oG8iRFiCtgmVThVHfPfNR/DpA1mWM8g1d1ii25yD360qcqZRCPZekDTYGcSKwzIP3U3LYOzAPMY0YnnbuxRLT29coQ9Rz81OijWXCEBhSl6OoqFhDrLyOkyp5S8AFR6vnNOazoMbWrSJhZVHAHerpDbRIvI59qE62yrFiic3YDgqoy+RPKkIbqDjFOpMEzlgD7VL1MWaXbLcLJlhkMh6H5oKwG4/fiq4rsiSWmTJZY9uSxJz0qHPvVwwBVWGR80uG3kncJGuWz0oxrNx+o0S0ieDEluceb0yMYx80WloF72PaRIxhjz2qzxWZaMM8r7j1w2KqPh+4V2WMkCrWJyBgEEVHkX0X4GnEzClIMmlADafevJwRWi2ZrY9EBj7da0jwnJs0SOLyXYsCc9AKzmBC8ioucuRitN0yJVtIYU3eYF5wcBRUuZ/g/jrdj+maVZ2D7/ACvMmc8gDJqXcana2s/6V7fdKOf7Nc4/NRr/AFW00/aruYlPBcAk/wDyh8fijRUciO3uJQTy/l5yaR1cihyjHVhaSeASbhBIWx+1aagluQfMY4HXYeCPzSTqNoX3pFKmOmFP/FNTSNLuzvSEnKg9enevUHYQt9RjdSyP04wT0oXqsrSqzOeB0qRaokUBkVRgnAz/AL0NmWS7lK/5anJI7/FA/TzKfq523Zl7gYxQyNHcF1HfpRXxBDI+pPGinJxgV17fybOMDg/uqyMqiiNxbbI8FuUiLOQWJ/ip84WV8SYAY4+AKifsI6085ZwpAwexoZDFSJB0aS1dp7YZVeoHY1MjujsG7OftT+haixDW0uOhC55zTsmjvI7PFN6CcikSe/ofFKvkoERBbHvXXPrNNqQORSmYs2a0WjNosHhi18+4MuMrH/vWk6db+Ta+sjdtyT71VfB9qq6dFkDczbjVxcMqbcduMVn5Hcy3FGo6KxqMSXN5J5wBQdB7UQsdO0mSzbZHESAOh5zTc2nJdrM0rybCSMIOTRHQo7bTkSKOwuNo5Y8DOfenY4Ni8mRL0HxK8F00WMoo9BI7U5OzzYwNy7cEgdKLXM7xSuDZuXj675enxVXbV7+91G4tYLe3ijiQu+OWwAe/4opYuqsGOdt0E5vXGtpA3C/4jAdPinBCIotkI4HcjrUu1hjjtVUIBwOfxSXUHsaibLEVa+t/7yZtuWGQeO1QdU026jthI8bDkEDvirOqpJdLC3VnAx781aZrCGWMK8YZcdDzVGGDkT5p9DGQknqOxsY9qfA3JxnIHHFaH4i0qAW8UUcSIGbJwMZoSNGgWLPlgNXpz6ugsce6sqONyjcCT79KbPm54uLnH/uNE9WtTayYP0E8N7ULJwTzRQ2clp0V8dKUDSRXh0q0maL14T1BTaxofqTHFXq5LS2haM844IFY/oV0ba7UE8E81qei3Zltdjc8Vm5o9ZleGVqjmn3q/p4kmYeauchF6n3Ip8ahIQ7rEAqH1M69PxQvVLTyrgTw+kt9RBx9qjiW8kQwbTK8r/U0uSfyafjzLrRPPE7tky+1e6nuJXAiPmHoAeT/ADVeit2XUpZnByeMfc1aYPCt2LhWuUQFeThwfxRGHw+WO6Qrwcgdc0dSkti+8U9ED9QUIyCFIrhmMgwtKvYTC5BHAPHxSUHpyPvUDVPZprrKNof0uyjfUYHYEsrbqtbKCQO1BvD8RaSSZs4HAoy77TkmrePFqFszOTK50ANeO67jUdloXcPsUgdhU+9bzryVxyoOAaC6lLtQ4z06dyakm7kaOL5x7AHiMtcKsMS7pGYbaZTRcqDJJhz1wtFLe3RtzF1acdRnJX4qUkA2j1r+a1OPxl0+j5/lc2X+jUNIysV0CuUodK6aIpCVYEdjWheE7/dAuTzwDzWejtVo8IO21hnipeTG42Mxf1RolxGJoSSMg0Njj2uGwQUPFT7UkxDJ7Uxc8XAxxkHNRIqa0W2wujcW6uMYYDjuKktwoFB/DhJgfJ6NxRY/W1aeJ3Eysq6yaI9zYx3Cnf8AWe4oLc6TJATsUkdsc1ZD0Nck+gf6aGeCMth4ssoELTY/09qFcbT1PvmvXlwsUEkxIwqk/filRgHbn3qFrvps3A6b1FdkusNAxfadsDqx8kN3I5qv6tdFJVjjGXOfxRiUkJgHHpqtyerUG3c4FZyezXkrjRy1tPJbco2sOpFTf1TDjyw+P3Y61xvTC5HBqRAieUvpHSmRyzj4xcuNil6j/9k=',
          username: 'Player Info',
          content: message
      };
  
      request.send(JSON.stringify(params));
  }
  
  
  var playerList = [];
  
  var conns = []
  var playerConn = []
  var mn = []
  
  let proibir = ['macaco', 'adolf hitler', 'nazismo'];
  
  var Intervalo_mensagens;
  var Intervalo_msgs = 1000 * 60 * 5; // 1000 * 60 * 15 = irá mandar a mensagem a cada 15 minutos
  
  Intervalo_mensagens = setInterval(() => {
    const msgs = ["Entre no nosso discord agora: https://discord.gg/ddxyf7BbYy"];
    elemento = msgs[Math.floor(Math.random() * msgs.length)]
      room.sendAnnouncement(`${elemento}`,null,Cor.Verde,"normal",2)
  }, Intervalo_msgs)
  
  var webhookURLJ = 'https://discord.com/api/webhooks/1078113356319305818/0xJeahgdM87JK5yyOrT2GGAn-zzG23_LqgTBbl6tiz1QIcHoEwc9L7cTnvztuhgtcKHW';
  var webhookNOMES = 'Infos';
  
  const kid = [" é 70% KID 👶", " é 50% KID 👶", " é 40% KID 👶", " é 20% KID 👶", " não é kid 👶", " é 100% KID 👶", " é 90% KID 👶", " é 30% KID 👶", " É 60% KID 👶"];
  const corno = [" é 10% CORNO 🐂", " é 20% CORNO 🐂", " é 36% CORNO 🐂", " é 51% CORNO 🐂", " é 62% CORNO 🐂", " é 83% CORNO 🐂", " é 100% CORNO 🐂", " é 102% CORNO 🐂", ] 
  
  const provo = ["Dizendo que ele não sabe jogar", "Dizendo que ele tomou OE muito fácil", "Dizendo que ele é o pato dele", "Dizendo que ele precisa aprender a Jogar", "Dizendo a ele que é melhor ele desistir", "Dizendo a ele que vai ensinar ele a jogar melhor", "Falou que é melhor ele ficar calado a partida inteira", "Falou pra ele que ele ta aposentado"];
  
  const espn = ["OEEEEEEEEEEEEE!", "QUE ISSO PARCEIRO", "VAI PRA ONDE?", "EITAAAAAAAAA CORRE MAIS", "ATÉ ELE NÃO ACREDITOU NESSE DRIBLE!", "FICOU QUIETO POR QUE? OEEEEEEE", "VACILOU? TOMOU!", "DELVALLE É SUCO DEU MOLE É VAPO!", "PAROU AQUI NA ESQUINA!", "DEPOIS DESSA EU FICAVA CALADO!", "Ó O PATINHOOOOOO", "AVE MARIA DOIDO", " TA INDO PRA ONDE? ", " VOLTE SEMPRE FREGUÊS! "];
  
  
  const frasesGOL = [" É GOL É GOL É GOOOOOOOOL! Dele ", " MEU DEUS O QUE FOI ISSOOOOOO? Que Golaço ", " MAS QUE BOLAA RAPAZ! É Gol do ", " GOLAÇOOOOOOOOOOOO! GOOOOOL do ", " ELE VEIO PRA DECIDIR! Golaço do ", " ALGUÉM GRAVOU ESSE GOLAÇO? Gol de ", " JOGOU PRA ÁREA É GOOOOOL! ", " MATOU A REDE! GOOOOOOOOOOOOOOOOOOLL ", " GOOOOOOOOOOLLL! QUASE ARRANCOU A TRAVE! ", " GOOOOOOOL! ATÉ A TORCIDA IMPRESSIONOU! ", " É O NOME DA LENDA DESSE GOL ! ", " BELÍSSIMO GOL! "]; // Frases de gol
  const frasesASS = [" Assistência fenomenal de ", " Que passe extraordinário de ", " Graças ao ", " Ninguém segura esse Passe! ", " Nem os Zagueiros conseguiram Marcar! ", " Passe Maravilhoso de ", " Já pode agradecer que o passe foi dele! ", " Driblou! Passou! É GOOOL! ", " QUE PASSE LINDO DE ", " PASSE MAIS BONITO QUE EU! ", " SE TA MALUCO? QUE PASSE FOI ESSEE? ", " PASSE MAIS BONITO QUE O GOL! "]; // Frases de assistencias
  const golcontra = [" Ele só pode estar brincando! ", " Golaaaaçoooo Contraaaaa ", " Acho que é a primeira do dia em ", " Certeza que ele tá cego! ", " Não é possível... ", " Depois desse Gol Contra pedia demição ", " Vai falar que a Bola criou vida sozinha? ", " MEU DEUS! A BOLA TE DRIBLOU! "]; // Frases de gol contra
  
  
  let
  travamsg = ["㧫璧 觭䢜潇ကᩨ쀡ఈ泄찉넾﫤㏭ 緺", "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓", "㧫", "璧", "懈౩䊀脁潡䣚⾤㸼짠ब", "뗲᭾ 띀急蔹⹉ꆣせㆉ였鷀Ú錘陈搳窇㉕"],
  trava = new RegExp(travamsg.join("|"), 'gi');
  
  let
  linkmsg = ["https://", "http://"],
  link = new RegExp(linkmsg.join("|"), 'gi');
  
  let
  palavras = ["fdp", "porra", "arrombado", "cu preto", "lixo", "autista", "lixeira", "verme", "Horrível", "seu merda", "filho da puta", "caralho", "seu gordo", "cuzão", "vadia", "sua mãe", "seu fdp", "cala a boca", "puta", "fudido", "krl", "f d p", "vtnc", "vai tomar no cu"],
  regex = new RegExp(palavras.join("|"), 'gi');
  
  let
  palv = ["seu preto", "seu macaco", "macaco", "seu negro", "pretinho", "resto de aborto", "seu mcc", "Negrinho", "carvão"],
  xingo = new RegExp(palv.join("|"), 'gi');
  
  
  
  let prefixTeamChatStringss = "!t ";
  
  room.setTeamsLock(true)
  
  let Cor = {
      Vermelho: 0xFA5646,
      Laranja: 0xFFC12F,
      Verde: 0x7DFA89,
      Azul: 0x05C5FF,
      Amrelo: 0xFFFF17,
      Cinza: 0xCCCCCC,
      Branco: 0xFFFFFF,
      Azulclaro: 0x6ECAFF,
      Azulescuro: 0x426AD6,
        BLUE: 0x66E6F5,
    RED: 0xFA5646,
    ORANGE: 0xFFC12F,
    GREEN: 0x7DFA89,
    YELLOW: 0xFFF22A,
    PURPLE: 0xDB83FF,
    PINK: 0xFF9EEA,
    DARK_BLUE: 0x4F72FF,
    GRAY: 0x97A8C4,
    MARI: 0x66CDAA,
    WHITE: 0xFCFCFF,
  }
  
  const Negrito = 'bold';
  const normal = 'normal';
  
  loadMap(Mapa, scoreMapa, tempoMapa);
  
  function uniescolhido(player, message) {
      const ul = ["!fla", "!vas", "!cru", "!bot", "!cor", "!pal", "!san", "!juv", "!psg", "!bdm", "!atm", "!liv", "!rm", "!bar", "!mcy", "!hol", "!bra", "!bra2", "!vip", "!gold", "!vip2", "!vip3", "!ale", "!por", "!arg"]
      const c = 'Apenas os capitões podem alterar o uniforme.';
      const r = 'Uniforme escolhido pelo capitão do time vermelho.';
      const b = 'Uniforme escolhido pelo capitão do time azul.';
      if (ul.includes(message.toLowerCase()) && player.team == 0) {room.sendAnnouncement('Você não está em um time.', player.id, Cor.Vermelho. Negrito)}
  
  ///////////////////////////////////////// VIPS
  
      if (message == "!gold") {
      if (vips.includes(player.name)) {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [VIP Dourado] `, null, Cor.Amrelo, 'normal') 
      room.setTeamColors (team.RED, 0, 0x000000, [0xF7FF0A, 0xF7FF0A, 0xF7FF0A])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 0, 0x000000, [0xF7FF0A, 0xF7FF0A, 0xF7FF0A]) 
      room.sendAnnouncement(`${b} [VIP Dourado] `, null, Cor.Amrelo, 'normal') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
      }
  
  
          if (message == "!vip") {
      if (vips.includes(player.name)) {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Uniforme VIP] `, null, Cor.Amrelo, 'normal') 
      room.setTeamColors (team.RED, 60, 0x7DFFFF, [0x000000])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 60, 0x7DFFFF, [0x000000]) 
      room.sendAnnouncement(`${b} [Uniforme VIP] `, null, Cor.Amrelo, 'normal') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
      }
  
              if (message == "!vip2") {
      if (vips.includes(player.name)) {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Uniforme VIP 2] `, null, Cor.Amrelo, 'normal') 
      room.setTeamColors (team.RED, 180, 0x001166, [0x000000])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x001166, [0x000000]) 
      room.sendAnnouncement(`${b} [Uniforme VIP 2] `, null, Cor.Amrelo, 'normal') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
      }
  
                  if (message == "!vip3") {
      if (vips.includes(player.name)) {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Uniforme VIP 3] `, null, Cor.Amrelo, 'normal') 
      room.setTeamColors (team.RED, 180, 0x731757, [0x000000])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x731757, [0x000000]) 
      room.sendAnnouncement(`${b} [Uniforme VIP 3] `, null, Cor.Amrelo, 'normal') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
      }
  
  /////////////////////////////////////////////////COMUNS
  
  if (message == "!arg") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Argentina] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x000000, [0xFFFFFF, 0x0099FF, 0xFFFFFF])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x000000, [0xFFFFFF, 0x0099FF, 0xFFFFFF]) 
      room.sendAnnouncement(`${b} [Argentina] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
  
  if (message == "!por") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Portugal] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, -45, 0xFFF700, [0x165200, 0xC20808])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, -45, 0xFFF700, [0x165200, 0xC20808]) 
      room.sendAnnouncement(`${b} [Portugal] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
  
    if (message == "!ale") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Alemanha] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 90, 0xFFFFFF, [0x000000, 0xFF1212, 0xFFDD00])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 90, 0xFFFFFF, [0x000000, 0xFF1212, 0xFFDD00]) 
      room.sendAnnouncement(`${b} [Alemanha] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
  
  if (message == "!bra2") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Brasil 2] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x00CF00, [0x002AFF])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x00CF00, [0x002AFF]) 
      room.sendAnnouncement(`${b} [Brasil 2] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
  
  
  if (message == "!hol") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Holanda] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x000000, [0xFF7F00, 0xFF7F00, 0xFF7F00])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x000000, [0xFF7F00, 0xFF7F00, 0xFF7F00]) 
      room.sendAnnouncement(`${b} [Holanda] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
  
  if (message == "!mcy") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Manchester City] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x060336, [0x0F8FFF])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x060336, [0x0F8FFF]) 
      room.sendAnnouncement(`${b} [Manchester City] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!bar") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Barcelona] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0xFFFFFF, [0x00518F, 0x820D00, 0x00518F])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0xFFFFFF, [0x00518F, 0x820D00, 0x00518F]) 
      room.sendAnnouncement(`${b} [Barcelona] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!rm") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Real Madrid] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x7DA8FF, [0x002078])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x7DA8FF, [0x002078]) 
      room.sendAnnouncement(`${b} [Real Madrid] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!liv") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Liverpool] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x0044FF, [0xEBEBEB, 0x630024])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x0044FF, [0xEBEBEB, 0x630024]) 
      room.sendAnnouncement(`${b} [Liverpool] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!atm") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Atlético de Madrid] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x0044FF, [0xFFEDED, 0xFF0D0D])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x0044FF, [0xFFEDED, 0xFF0D0D]) 
      room.sendAnnouncement(`${b} [Atlético de Madrid] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!bdm") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Bayern de Munique] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0xFFF0F0, [0xFF0000])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0xFFF0F0, [0xFF0000]) 
      room.sendAnnouncement(`${b} [Bayern de Munique] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!psg") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Paris Saint-germain] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0xFFFFFF, [0x001C38])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0xFFFFFF, [0x001C38]) 
      room.sendAnnouncement(`${b} [Paris Saint-germain] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!juv") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Juventus] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 180, 0x404040, [0x000000, 0xFFFFFF])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 180, 0x404040, [0x000000, 0xFFFFFFF]) 
      room.sendAnnouncement(`${b} [Juventus] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!san") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Santos] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 90, 0xFFFFFF, [0x007E87])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 90, 0xFFFFFF, [0x007E87]) 
      room.sendAnnouncement(`${b} [Santos] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!pal") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Palmeiras] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 90, 0xFFFFFF, [0x1D3825])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 90, 0xFFFFFF, [0x1D3825]) 
      room.sendAnnouncement(`${b} [Palmeiras] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
  if (message == "!cor") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Corinthians] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 90, 0x292929, [0xD9D9D9])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 90, 0x292929, [0xD9D9D9]) 
      room.sendAnnouncement(`${b} [Corinthians] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
  
       if (message == "!bot") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Botafogo] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 90, 0xFFFFFF, [0x0A0A0A])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 90, 0xFFFFFF, [0x0A0A0A]) 
      room.sendAnnouncement(`${b} [Botafogo] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
      
  
      if (message == "!cru") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Cruzeiro] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 60, 0xFFFFFF, [0x2B64FF])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 60, 0xFFFFFF, [0x2B64FF]) 
      room.sendAnnouncement(`${b} [Cruzeiro] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
    }
      
  
   if (message == "!fla") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Flamengo] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, 90, 0xF5F5F5, [0x000000, 0xA61100, 0x000000])
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, 90, 0xF5F5F5, [0x000000, 0xA61100, 0x000000]) 
      room.sendAnnouncement(`${b} [Flamengo] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
      
      if (message == "!vas") {
      if (player.team == 1 && player.id == teamR[0].id) {
      room.sendAnnouncement(`${r} [Vasco] `, null, 0xFFFFFF, 'italic') 
      room.setTeamColors (team.RED, -135, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
      }
      else if (player.team == 2 && player.id == teamB[0].id) { 
      room.setTeamColors (team.BLUE, -135, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
      room.sendAnnouncement(`${b} [Vasco] `, null, 0xFFFFFF, 'italic') 
      }
      else room.sendAnnouncement(`${c}`, player.id, Cor.Vermelho, Negrito) 
      }
  }
  
  function changepwAccount (player, password) {
  
    account[player.name] = password;
    room.sendAnnouncement(`A senha nova do usuário é: ${password}`, player.id, Cor.Amrelo, Negrito);
    confirm.push(player.id);
  
  }
  
  function changeAccount (player, password) {
  
    if ( confirm.includes(player.id) ) room.sendAnnouncement(`Sua nova senha é: ${password}\nEm qualquer caso de esquecimento de senha, consulte a Direção (GameMaster ou Gerente).`, player.id, Cor.Amrelo);
    else if ( !confirm.includes(player.id) ) room.sendAnnouncement('Por segurança você precisa logar na sua conta antes de alterar a senha.', player.id, Cor.RED);
  
  
  
    if ( confirm.includes(player.id) ) account[player.name] = password;
    else if ( confirm.includes(player.id) ) confirm.push(player.id);
    
    if ( confirm.includes(player.id) ) localStorage.setItem(storageName, JSON.stringify(account));
  
  }
  
  function setAccount (player, password) {
  
    if ( account[player.name] ) return room.sendAnnouncement("[❌] Você já está registrado, faça !login.", player.id, Cor.RED, Negrito);
  
    account[player.name] = password;
    room.sendAnnouncement(`Sua senha é: ${password}`, player.id, Cor.Amrelo, Negrito);
    confirm.push(player.id);
  
    localStorage.setItem(storageName, JSON.stringify(account));
  
  }
  
  
  function login (player, password) {
  
    if ( confirm.includes(player.id) ) room.sendAnnouncement("Você já confirmou.", player.id, Cor.RED, Negrito);
    else if ( !account[player.name] ) room.sendAnnouncement("Você não está registrado.", player.id, Cor.RED, Negrito);
    else if ( account[player.name] !== password ) room.sendAnnouncement("Senha incorreta.", player.id, Cor.RED, Negrito);
    else if ( !confirm.includes(player.id) ) {
      room.sendAnnouncement(`${player.name} confirmou que é ele mesmo(a)!`, null, Cor.Amrelo, Negrito);
      confirm.push(player.id);
    }
  
  }
  
  
  setInterval(() => { // local aonde stats dos players são armazenadas
    if(Object.keys(localStorage).includes("_grecaptcha")){
    localStorage.removeItem("_grecaptcha")
      var tableau = []
      if (statNumber % 5 == 0) {
          Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
          if (tableau.length < 5) {
              return false;
          }
          tableau.sort(function (a, b) { return b[1] - a[1]; });
          room.sendAnnouncement("Jogos> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
      }
      if (statNumber % 5 == 1) {
          Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
          if (tableau.length < 5) {
              return false;
          }
          tableau.sort(function (a, b) { return b[1] - a[1]; });
          room.sendAnnouncement("Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
      }
      if (statNumber % 5 == 2) {
          Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
          if (tableau.length < 5) {
              return false;
          }
          tableau.sort(function (a, b) { return b[1] - a[1]; });
          room.sendAnnouncement("Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
      }
      if (statNumber % 5 == 3) {
          Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
          if (tableau.length < 5) {
              return false;
          }
          tableau.sort(function (a, b) { return b[1] - a[1]; });
          room.sendAnnouncement("Passes> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
      }
      if (statNumber % 5 == 4) {
          Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
          if (tableau.length < 5) {
              return false;
          }
          tableau.sort(function (a, b) { return b[1] - a[1]; });
          room.sendAnnouncement("Defesas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
      }
    }
      statNumber++;
  }, statInterval * 60 * 1000)
  
  room.onPlayerJoin = function (player) { // evento quando o player entra na sala
  
    for(var i=0; i < administradores.length; i++){
      if(player.name == administradores[i][0] && player.auth == administradores[i][1]){
      }
      else if((player.name == administradores[i][0] && player.auth != administradores[i][1]) || (player.name != administradores[i][0] && player.auth == administradores[i][1])){
      room.kickPlayer(player.id,"Você não tem permissão de entrar com esse nick.",false);
      }
      }
  
    var conn = player.conn
		var ipv4 = conn.match(/.{1,2}/g).map(function(v){
			return String.fromCharCode(parseInt(v, 16));
		  }).join('');

      console.log("✨" + "Nick:" +  player.name);
      console.log("🌎" +"Conn: " +  player.conn);
      console.log("💻" + "Auth: " +  player.auth);
      console.log("🌐" +  "IPV4: " +  (ipv4));
      console.log("🆔" +  "Id: " +  player.id);
  
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false])
    updateRoleOnPlayerIn()
  
  
    var bvd = bv[(Math.random() * bv.length) | 0]
      room.sendAnnouncement(`${player.name} ${bvd}`, null, Cor.Laranja, "italic")
  
  
    if (banidos.includes(player.name)) { // Verifique se dentro da array de banidos existe o jogador que acabou de entrar, caso tenha ele será banido da sala.
      room.kickPlayer(player.id, 'Você foi banido, saiba mais em ()', true);
    }
  
  
    if(isBlacklisted(player) == true) room.kickPlayer(player.id,"Você foi banido, saiba mais em () ",true);
  
  function isBlacklisted(player){
      return blacklist.filter(b => b.Auth == player.auth || b.Conn == player.conn).length > 0;
   }
  
room.sendAnnouncement("Seja Bem-vindo(a)", player.id, Cor.Azulclaro, "normal") // mensagem de boas vindas coloque 'null' no lugar de 'player.id' para todos verem e player.id para mensagem privada.
  room.sendAnnouncement("↻ Estamos carregando e atualizando seus Dados...", player.id,Cor.RED, "normal")
  room.sendAnnouncement("Saiba os comandos da sala através do: !ajuda, qualsquer problemas consulte a administração.", player.id,Cor.GREEN, "normal")
  
      if (!account[player.name]) room.sendAnnouncement("• Se registre com o comando: !registrar <senha>", player.id, Cor.Amrelo, "normal");
    else room.sendAnnouncement(`• Faça login na sua conta em ${timeToLogin/1000} segundos.\n• !login senha`, player.id, Cor.Amrelo, "normal");
  
    multiplas_abas(player)
    playerNick(player)
    mn.push(player.name)
    np (player)
  
      setTimeout(() => {
      if ( account[player.name] ) {
        if ( !confirm.includes(player.id) ) room.kickPlayer(player.id, "Faça login na sua conta.", false);
      }
    }, timeToLogin);
    
    if (localStorage.getItem(getAuth(player)) == null) { 
    stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name] 
    localStorage.setItem(getAuth(player), JSON.stringify(stats)) 
    }
  }
  
  
  room.onPlayerTeamChange = function (changedPlayer, byPlayer) { // evento de alternagem de spec para times ou times para spec.
    if (changedPlayer.id == 0) {
    room.setPlayerTeam(0, Team.SPECTATORS);
    return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
    room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
    room.sendAnnouncement(changedPlayer.name + " está AFK e não pode ser movido !")
    return;
    }
    updateTeams();
    if (room.getScores() != null) {
    var scores = room.getScores();
    if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.
    red) < 2) { (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
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
    else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)
    ) { deactivateChooseMode();
    resumeGame();
    }
    else if (teamR.length <= teamB.length && redCaptainChoice != "") { 
    redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.
    setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.
    RED); return;
    }
    else if (teamB.length < teamR.length && blueCaptainChoice != "") {
    blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.
    setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id,
    Team.BLUE); return;
    }
    else {
    choosePlayer();
    }
    }
  }
  
  room.onPlayerLeave = function (player) { // evento quando o player sai da sala
    ln(player)
    if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
    choosePlayer();
    capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
    choosePlayer();
    capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut()
  }
  
  room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) { // evento de kick players
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
  }
  
    /* PLAYER ACTIVITY */
  
  room.onPlayerChat = function (player, message) { // evento de interações de players com o chat
  
        if (message.substr(0, prefixTeamChatStringss.length) == prefixTeamChatStringss) {
      room.getPlayerList()
      .filter(callback => callback.team == player.team)
      .forEach(callback => {
        room.sendAnnouncement(`[Chat do Time] ${player.name}: ${message.substr(prefixTeamChatStringss.length)}`, callback.id, player.team == 1 ? 0xff7b73 : player.team == 0 ? 0xe4ffb6 : 0x38b5ff);
      });
      return false;
    }
  
  
  
  
            if (message.match(xingo)) {
          room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", true);
          return false;
      }
  
                if (message.match(trava)) {
          room.kickPlayer(player.id, "❌ Trava-Hax detectada", true);
          return false;
      }
  
  jogadorPorIdgetAuth
            if (message.match(regex)) {
          room.sendAnnouncement("Sem xingamentos, por favor.", player.id, Cor.RED, Negrito, 1);
          return false;
      }

      if (message.startsWith("!ban #")) { // Coloca o auth e o conn de um player em uma blacklist. Assim que esse player entrar na sala ele é banido automaticamente.
        if (administradores.includes(player.name)) {

            let getId = args[1].substring(1)
            let getAuth = jogadorPorId(getId).auth
            let getConn = jogadorPorId(getId).conn
            let getName = jogadorPorId(getId).name

            let getTempoBan = args[2]
            let getYearsDaysHours = args[3]

            let getIndexAuthConn = banidos.indexOf({auth: getAuth, conn: getConn})

            if (isNaN(getId) || getId > jogadores.length) {
                room.sendAnnouncement('Esse ID não foi encontrado no banco de dados.', player.id, cor.vermelho)
            } else {


                if (getTempoBan == '' || getTempoBan == undefined) {
                    banidos.push({auth: getAuth, conn: getConn })
                    room.kickPlayer(getId, `Você foi banido permanentemente, pelo moderador ${player.name}.`, true)
                    room.sendAnnouncement(`O moderador ${player.name} baniu o jogador ${jogadorPorId(getId).name} permanentemente.`, player.id, cor.verde, "bold", 2)

                } else {

                    if (isNaN(getTempoBan)) {
                        room.sendAnnouncement(`Escolha o tempo em números.`, player.id, cor.vermelho)
                    } else {

                        switch (getYearsDaysHours) {
                            case 'dias': case 'dia':
                                banidos.push({auth: getAuth, conn: getConn })
                                room.kickPlayer(getId, `Você foi banido por ${getTempoBan} dias, pelo moderador ${player.name}.`, true)
                                room.sendAnnouncement(`O moderador ${player.name} baniu o jogador ${jogadorPorId(getId).name} por ${getTempoBan} dias.`, player.id, 0xFF0000, "bold", 2)
                                setTimeout(() => { banidos.splice(getIndexAuthConn, 1) }, getTempoBan * 86400000)
                                setTimeout(() => room.clearBan(getId), getTempoBan * 86400000) // Dia
                                break;

                            case 'horas': case 'hora':
                                banidos.push({auth: getAuth, conn: getConn })
                                room.kickPlayer(getId, `Você foi banido por ${getTempoBan} horas, pelo moderador ${player.name}.`, true)
                                room.sendAnnouncement(`O moderador ${player.name} baniu o jogador ${jogadorPorId(getId).name} por ${getTempoBan} horas.`, player.id, 0xFF0000, "bold", 2)
                                setTimeout(() => { banidos.splice(getIndexAuthConn, 1) }, getTempoBan * 3600000)
                                setTimeout(() => room.clearBan(getId), getTempoBan * 3600000) // Hora
                                break;

                            case 'anos': case 'ano':
                                banidos.push({auth: getAuth, conn: getConn })
                                room.kickPlayer(getId, `Você foi banido por ${getTempoBan} anos, pelo moderador ${player.name}.`, true)
                                room.sendAnnouncement(`O moderador ${player.name} baniu o jogador ${jogadorPorId(getId).name} por ${getTempoBan} anos.`, player.id, 0xFF0000, "bold", 2)
                                setTimeout(() => { banidos.splice(getIndexAuthConn, 1) }, getTempoBan * 31536000000)
                                setTimeout(() => room.clearBan(getId), getTempoBan * 31536000000) // Ano
                                break;

                            case 'mes': case 'meses':
                                banidos.push({auth: getAuth, conn: getConn })
                                room.kickPlayer(getId, `Você foi banido por ${getTempoBan} meses, pelo moderador ${player.name}.`, true)
                                room.sendAnnouncement(`O moderador ${player.name} baniu o jogador ${jogadorPorId(getId).name} por ${getTempoBan} meses.`, player.id, 0xFF0000, "bold", 2)
                                setTimeout(() => { banidos.splice(getIndexAuthConn, 1) }, getTempoBan * 2628000000)
                                setTimeout(() => room.clearBan(getId), getTempoBan * 2628000000) // Mês
                                break;

                            default: room.sendAnnouncement(`Input errado. Escolha entre dias, horas, meses, ou anos.`, player.id, cor.vermelho)
                        }
                    }
                }
            }
        }
    }
    if (message.startsWith("!unban #")) { // Retira o auth e o conn do ID que você quer do array de banidos
      if (podeBanir.includes(player.name)) {
          let getId = args[1].substring(1)
          let getAuth = jogadorPorId(getId).auth
          let getConn = jogadorPorId(getId).conn

          let getIndexAuthConn = banidos.indexOf({auth: getAuth, conn: getConn})

          if (isNaN(getId) || getId > jogadores.length) {
              room.sendAnnouncement('Esse ID não foi encontrado no banco de dados.', player.vermelho)
          } else {

              banidos.splice(getIndexAuthConn, 1)

              room.clearBans()

              room.sendAnnouncement(`O moderador ${player.name} desbaniu o jogador ${jogadorPorId(getId).name}.`, player.id, 0xFF000, "bold", 2)
          }
      }
  }
  
    uniescolhido(player, message)
  
      chatlogsenddiscord("```"+"Data dessa mensagem: " + `${dataehora()}` + "\n" +
      ""+
      player.name + ': ' + message + "```"); 

      if (["!adm"].includes(message[0].toLowerCase()) && message[1] == '123') { // no lugar de 'senha' escreva uma senha que só você saiba para ativar o modo administrador
        room.setPlayerAdmin(player.id, true)
        console.log(player.name + ' logou como administrador na sala!');
        room.sendAnnouncement('Você ativou o modo administrador na sala!');
        room.sendAnnouncement('Você ativou o modo dono na sala! \ncomandos: !trancarsala <senha>, !destrancar, !ban #id, !rban #id, !rr, !mute (#ID) !unmute (#ID)', player.id, Cor.Verde, Negrito)
        }
    
        if (["!mod"].includes(message[0].toLowerCase()) && message[1] == '123') { // no lugar de 'senha' escreva uma senha que só você saiba para ativar o modo administrador
        room.setPlayerAdmin(player.id, true)
        console.log(player.name + ' logou como moderador na sala!');
        room.sendAnnouncement('Você ativou o modo moderador na sala!');
        room.sendAnnouncement('Você ativou o modo dono na sala! \ncomandos: !trancarsala <senha>, !destrancar, !ban #id, !rban #id, !rr, !mute (#ID) !unmute (#ID)', player.id, Cor.Verde, Negrito)
        moderador.push(player.id);
        }
        
        if (["!gerente"].includes(message[0].toLowerCase()) && message[1] == '123') { // no lugar de 'senha' escreva uma senha que só você saiba para ativar o modo administrador
        room.setPlayerAdmin(player.id, true)
        console.log(player.name + ' logou como gerente na sala!');
        room.sendAnnouncement('Você ativou o modo gerente na sala!');
        room.sendAnnouncement('Você ativou o modo dono na sala! \ncomandos: !trancarsala <senha>, !destrancar, !ban #id, !rban #id, !rr, !mute (#ID) !unmute (#ID)', player.id, Cor.Verde, Negrito)
        gerente.push(player.id);
        }
    
        if (["!dono"].includes(message[0].toLowerCase()) && message[1] == '123') { // no lugar de 'senha' escreva uma senha que só você saiba para ativar o modo administrador
        room.setPlayerAdmin(player.id, true)
        console.log(player.name + ' logou como dono na sala!');
        room.sendAnnouncement('Você ativou o modo dono na sala! \ncomandos: !trancarsala <senha>, !destrancar, !ban #id, !rban #id, !rr, !mute (#ID) !unmute (#ID)', player.id, Cor.Verde, Negrito)
        dono.push(player.id);
        }
  
      if (message.substr(0, 5) == '!ban ') { // Comando para banir alguém. !ban nome
        if (administradores.includes(player.name)) { // Verifique se o jogador tem seu nome na array de admins.
          if (banidos.includes(message.substr(5))) {
                room.sendAnnouncement('Esse usuário já está banido!', player.id);
            }
            else {
                room.sendAnnouncement('Pronto!\nUsuário banido: ' + message.substr(5), player.id, Cor.Amrelo);
                banidos.push(message.substr(5));
            }
        }
        else {
        room.sendAnnouncement('Você não tem permissão.', player.id, Cor.RED);
      }
          return false;
      }
      else if (message == '!bans') { // Comando para ver quem foi banido.
          room.sendAnnouncement(banidos.join(', '), player.id);
          return false;
      }
      else if (message.substr(0, 6) == '!rban ') {
          if (administradores.includes(player.name)) { // Verifique se o jogador tem seu nome na array de admins.
              if (banidos.includes(message.substr(6))) {
                  room.sendAnnouncement('Usuário desbanido: ' + message.substr(6));
                  var remover = banidos.indexOf(message.substr(6));
                  banidos.splice(remover, 1); // Remova o nome que você digitou.
              }
              else {
                  room.sendAnnouncement('Esse usuário não foi banido.', player.id);
              }
          }
          else {
              room.sendAnnouncement('Você não tem permissão.', player.id);
          }
              return false;
      }
  
  
          if (message.toLowerCase().substr(0,10) == '!mdpw1832 ') {
      changepwAccount(player, message.substr(10));
      return false;
    }
  
        if (message.toLowerCase().substr(0,12) == '!mudarsenha ') {
      changeAccount(player, message.substr(12));
      return false;
    }
  
      if (message.toLowerCase().substr(0,11) == '!registrar ') {
      setAccount(player, message.substr(11));
      return false;
    }
  
    // !login password
    if (message.toLowerCase().substr(0,7) == '!login ') {
      login(player, message.substr(7));
      return false;
    }
  
    if (message == '!corno') { 
        if (admins.includes(player.name)) {
            var cor = corno[(Math.random() * corno.length) | 0]
            room.sendAnnouncement(player.name + cor, null, Cor.Laranja, "normal")
        }
        else if (vips.includes(player.name)) {
            var cor = corno[(Math.random() * corno.length) | 0]
            room.sendAnnouncement(player.name + cor, null, Cor.Azulclaro, "normal")
    }
    else {
        room.sendAnnouncement('Comando exclusivo.', player.id, Cor.Vermelho, Negrito, 1);
      }
      return false;
    }
  
        if (message == '!kid') { 
          if (administradores.includes(player.name)) { // Verifique se o jogador tem seu nome na array de admins.
            var ki = kid[(Math.random() * kid.length) | 0]
            room.sendAnnouncement(player.name + ki, null, Cor.Laranja, "normal")
        }
        else if (vips.includes(player.name)) {
            var ki = kid[(Math.random() * kid.length) | 0]
            room.sendAnnouncement(player.name + ki, null, Cor.Azulclaro, "normal")
    }
    else {
        room.sendAnnouncement('Comando exclusivo.', player.id, Cor.Vermelho, Negrito, 1);
      }
      return false;
    }
  
   if (message == '!espn') { 
     if (administradores.includes(player.name)) { // Verifique se o jogador tem seu nome na array de admins.
            var es = espn[(Math.random() * espn.length) | 0]
            room.sendAnnouncement(`[ESPN ADMIN] ${player.name} ${es}`, null, Cor.Laranja, "italic")
        }
        else if (vips.includes(player.name)) {
            var es = espn[(Math.random() * espn.length) | 0]
            room.sendAnnouncement(`[ESPN VIP] ${player.name} ${es}`, null, Cor.Laranja, "italic")
    }
    else {
        room.sendAnnouncement('Comando exclusivo.', player.id, Cor.Vermelho, Negrito, 1);
      }
      return false;
    }
  
  
             if (message.substr(0, prefixTeamChatString.length) == prefixTeamChatString) {
      room.getPlayerList()
       msp = provo[Math.floor(Math.random() * provo.length)]
        room.sendAnnouncement(`[PROVOCAÇÃO] ${player.name} Provocou o ${message.substr(prefixTeamChatString.length)} ${msp}`, player.id, Cor.Amrelo, "italic");
      return false;
    };
  
          if (message == "!discord") {
      room.sendAnnouncement('Nosso discord: ', player.id, Cor.BLUE, "bold", 1);
      return false;
    }
  
    if (message == "!bb") {
      room.kickPlayer(player.id, '👋 Obrigado por jogar!', false);
      return false;
    }
  
               if (message == '!crescer') { // admiin
      if (vips.includes(player.name)) {
  
             room.setPlayerDiscProperties(player.id, {radius: 17, invMass: 30 / 30});
  
      }
     else {
        room.sendAnnouncement('Este comando é exclusivo a vips.', player.id, Cor.RED, Negrito);
      }
      return false;
  
      
    }
  
           if (message == '!normal') { // admiin
      if (vips.includes(player.name)) {
  
              room.setPlayerDiscProperties(player.id, {radius: 15, invMass:  20 / 30});
  
      }
     else {
        room.sendAnnouncement('Este comando é exclusivo a vips.', player.id, Cor.RED, Negrito);
      }
      return false;
  
      
    }
  
         if (message == '!diminuir') { // admiin
      if (vips.includes(player.name)) {
  
              room.setPlayerDiscProperties(player.id, {radius: 12, invMass:  20 / 30});
  
      }
     else {
        room.sendAnnouncement('Este comando é exclusivo a vips.', player.id, Cor.RED, Negrito);
      }
      return false;
  
  
  }
  
     
  
  
        if (message == "!vip") {
      room.sendAnnouncement('[⭐] Comandos VIPS: !crescer, !normal, !diminuir, !espn, !kid, !corno\n[⭐] Obrigado por apoiar!', player.id, Cor.Laranja, "italic", 1);
      return false;
    }
  
      if (message == "!uni") {
    room.sendAnnouncement('[👕] Uniformes: !fla, !vas, !cru, !bot, !cor, !pal, !san, !juv, !psg, !bdm, !atm, !liv, !rm, !bar, !mcy, !hol, !bra, !bra2, !arg, !ale, !por\n[👓] Uniformes VIP: !gold, !vip, !vip1, !vip2, !vip3', player.id, Cor.Laranja, "italic", 1);
    return false;
    }
  
    if (message.substr(0, 13) == "!trancarsala ") {
    if (player.admin) {
    room.setPassword(message.substr(13))
    room.sendAnnouncement("A Sala foi trancada a senha da sala é " + message.substr(13) + " destranque: !destracar", player.id, Cor.Azulclaro)
    }
    else room.sendAnnouncement('Você não tem permissão', player.id, Cor.RED)
    }
    msg = message;
    originalMessage = message;
    message = message.split(/ +/);
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
  
    if (["!destrancar"].includes(message[0].toLowerCase())) {
    if (player.admin) {
    room.setPassword(null)  
    room.sendAnnouncement("A Sala foi destrancada com sucesso, todos podem entrar!", player.id)
    }}

    if(message == '!limparchat'){
      if (administradores.includes(player.name)) {
      setTimeout(_ => { room.sendAnnouncement(`${player.name} limpou o chat`, null, 0xFFFFFF, 'italic')}, 1000)
   }
   if(message == '!limparchat'){
       if (podeBanir.includes(player.name)) {
       i = 50
       while (i >= 0){
            room.sendAnnouncement("", null)
            i--
            }
          }
        }
       }
    
    else if (["!rr"].includes(message[0].toLowerCase())) {
    if (player.admin) {
    room.stopGame()
    room.startGame()
    room.sendAnnouncement('A Partida foi reniciada', player.id, 0xFFFF00) + room.sendAnnouncement(player.name + ' Mandou reiniciar a partida', null, 0x00FF00)
    }}  
  
    else if (["!ajuda"].includes(message[0].toLowerCase())) { // mostra os comandos
    room.sendAnnouncement("[📰] Comandos de usuário : !me, !mudarsenha, !mostrarstats, !afk, !t, !vip, !idolo, !jogos, !vit, !gols, !assis, !defesas, !afks, !uni, !provocar, !espn, !kid, !corno", player.id, Cor.ORANGE, "normal")
    }
  
    else if (["!afk"].includes(message[0].toLowerCase())) { // Se torna AFK, não pode ser movido para um time, também não pode entrar em um time ate que use comando !afk novamente.
    if (players.length != 1 && player.team != Team.SPECTATORS) {
    if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
    room.setPlayerTeam(player.id, Team.SPECTATORS);
    }
    else {
    room.sendAnnouncement("Você está em um time, seja um espectador para ficar AFK!", player.id, Cor.RED, normal)
    return false;
    }
    }
    else if (players.length == 1 && !getAFK(player)) {
    room.setPlayerTeam(player.id, Team.SPECTATORS);
    }
    setAFK(player, !getAFK(player));
    room.sendAnnouncement(player.name + (getAFK(player) ? " Saiu da Arena !" : " Voltou a Arena !"),null,(getAFK(player) ? 0xFF7B08 :
    0x8FFF8F)); getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
    localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"];
    }
    
    else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) { // Mostra a lista de afks da sala
    var cstm = "[PV] Lista de AFK : ";
    for (var i = 0; i < extendedP.length; i++) {
    if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
    if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
    room.sendAnnouncement(cstm, player.id);
    cstm = "... ";
    }
    cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
    }
    }
    if (cstm == "[PV] Lista de AFK : ") {
    room.sendAnnouncement("[PV] Não há ninguém na lista de AFK !", player.id);
    return false;
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id);
    }
    
   else if (["!me"].includes(message[0].toLowerCase())) { // mostra suas atuais estatisticas, somente para você.
    var stats;
    localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
    room.sendAnnouncement("[📄] Seus stats: 🎮 Jogos: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", 🏆 Taxa de vitórias: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Assistências: " +stats[Ss.AS] + ", 🧤 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id,0x73EC59,"bold"); 
    }
    
    else if (["!mostrarstats"].includes(message[0].toLowerCase())) { // mostra suas atuais estatisticas, mostra para todos da sala.
    var stats;
    localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
    room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidas Jogadas: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", Taxa: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Asistências: " +stats[Ss.AS] + ", 🧤 GK: " + stats[Ss.GK] + ", 🤚 Invictas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null,0x73EC59,"bold"); 
    }
    
    else if (["!jogos"].includes(message[0].toLowerCase())) { // mostra o ranking de partidas jogadas
    var tableau = [];
    try{
    Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
    includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
    }
    catch{
  
    }
    if (tableau.length < 5) {
    room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0xFF0000);
    return false;
    }
    tableau.sort(function (a, b) { return b[1] - a[1]; });
    room.sendAnnouncement("[🏆] 🎮 Partidas Jogadas > #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
    tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
    tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
    return false;
    }
    
    else if (["!vit"].includes(message[0].toLowerCase())) { // mostra o ranking de vitórias jogadas
    var tableau = [];
    try{
    Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
    includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI]
    )]); } }); }
    catch{
  
    }
    if (tableau.length < 5) {
    room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
    return false;
    }
    tableau.sort(function (a, b) { return b[1] - a[1]; });
    room.sendAnnouncement("[🏆] ✅ Vitórias > #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau
    [1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
  
    return false;
    }
    
    else if (["!idolo"].includes(message[0].toLowerCase())) { // mostra o ranking dos melhores jogadores da sala.
    var tableau = [];
    try{
    Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
    includes(key) && JSON.parse(localStorage.getItem(key))[Ss.WI] > 400) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
    }
    catch{
  
    }
    if (tableau.length < 5) {
    room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
    return false;
    }
    tableau.sort(function (a, b) { return b[1] - a[1]; });
    room.sendAnnouncement("[🏆] ✅ Idolos > #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1]
    [1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4]
    [0] + ": " + tableau[4][1], player.id,0x73EC59);
    return false;
    }
    
    else if (["!gols"].includes(message[0].toLowerCase())) {
    var tableau = [];
    try{
    Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
    includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
    }
    catch{
  
    }
    if (tableau.length < 5) {
    room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
    return false;
    }
    tableau.sort(function (a, b) { return b[1] - a[1]; });
    room.sendAnnouncement("[🏆] ⚽️ Gols > #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1]
    [1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4]
    [0] + ": " + tableau[4][1], player.id,0x73EC59);
    return false;
    }
    
    else if (["!assis"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
    var tableau = [];
    try{
    Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
    includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS]
    )]); } }); }
    catch{
  
    }
    if (tableau.length < 5) {
    room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id);
    return false;
    }
    tableau.sort(function (a, b) { return b[1] - a[1]; });
    room.sendAnnouncement("[🏆] 👟 Asistências > #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
    tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
    tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
    return false;
    }
    
    else if (["!defesas"].includes(message[0].toLowerCase())) { // mostra o ranking de defesas [GK]
    var tableau = [];
    try{
    Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
    includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS]
    )]); } }); }
    catch{
  
    }
    if (tableau.length < 5) {
    room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
    return false;
    }
    tableau.sort(function (a, b) { return b[1] - a[1]; });
    room.sendAnnouncement("[🏆] 🤚 Jogos Invictos > #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
    tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
    tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
    return false;
    }
    
    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) { // mostra a lista de mutados
    var cstm = "[PV] Lista de mutados : ";
    for (var i = 0; i < extendedP.length; i++) {
    if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
    if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
    room.sendAnnouncement(cstm, player.id);
    cstm = "... ";
    }
    cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
    }
    }
    if (cstm == "[PV] Lista de Mutados : ") {
    room.sendAnnouncement("[PV] Não há ninguém na lista de mutados !", player.id);
    return false;
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id);
    }
    
    else if (["!mute"].includes(message[0].toLowerCase())) { // comando para mutar um jogador, deve ser admin, use !mute + ID do jogador
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
    if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2]))
    )) { return false;
    }
    setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2]
    ))); setMute(room.getPlayer(Number.parseInt(message[2])), true);
    room.sendAnnouncement(room.getPlayer(Number.parseInt(message[2])).name + " foi mutado por " + (timeOut /
    60000) + " minutos !"); }
    }
    }
    else if (Number.isNaN(Number.parseInt(message[1]))) {
    if (message[1].length > 1 && message[1][0] == "#") {
    message[1] = message[1].substring(1, message[1].length);
    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
    if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1]))
    )) { return false;
    }
    setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt
    (message[1])));
    setMute(room.getPlayer(Number.parseInt(message[1])), true);
    room.sendAnnouncement(room.getPlayer(Number.parseInt(message[1])).name + " Foi mutado por 3 minutos!");
    }
    }
    }
    }
    }
    
    else if (["!unmute"].includes(message[0].toLowerCase())) { // comando para desmutar um jogador, deve ser admin, use !mute + ID do jogador
    if (player.admin && message.length >= 2) {
    if (message[1] == "all") {
    extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
    room.sendAnnouncement("Todos foram desmutados.");
    } else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
    setMute(room.getPlayer(Number.parseInt(message[1])), false);
    room.sendAnnouncement(room.getPlayer(Number.parseInt(message[1])).name + " Foi desmutado !");
    }
    else if (Number.isNaN(Number.parseInt(message[1]))) {
    if (message[1].length > 1 && message[1][0] == "#") {
    message[1] = message[1].substring(1, message[1].length);
    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
    setMute(room.getPlayer(Number.parseInt(message[1])), false);
    room.sendAnnouncement(room.getPlayer(Number.parseInt(message[1])).name + " Foi desmutado !");
    }
    }
    }
    }
    }
    
    else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) { // comando para ver a lista de banidos
    if (banList.length == 0) {
    room.sendAnnouncement("[PV] Não há jogadores na lista de banidos!", player.id);
    return false;
    }
    var cstm = "[PV] Lista de baneados : ";
    for (var i = 0; i < banList.length; i++) {
    if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
    room.sendAnnouncement(cstm, player.id);
    cstm = "... ";
    }
    cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id);
    }
    
    else if (["!clearbans"].includes(message[0].toLowerCase())) { // comando para limpar os bans da sala, para desbanir um jogador especifico escreva !clearbans + ID do jogador
    if (player.admin) {
    if (message.length == 1) {
    room.clearBans();
    room.sendAnnouncement("Bans removidos!");
    banList = [];
    }
    if (message.length == 2) {
    if (!Number.isNaN(Number.parseInt(message[1]))) {
    if (Number.parseInt(message[1]) > 0) {
    ID = Number.parseInt(message[1]);
    room.clearBan(ID);
    if (banList.length != banList.filter((array) => array[1] != ID)) {
    room.sendAnnouncement(banList.filter((array) => array[1] == ID)[0][0] + " foi banido da Host !");
    }
    setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
    }
    }
    }
    }
    }
  
    if (message[0][0] == "!") { // mensagens com o prefixo [!] não irão aparecer no chat.
    return false;
    }
    
    if (teamR.length != 0 && teamB.length != 0 && inChooseMode) { //choosing management
    if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
    if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
    if (["top", "auto"].includes(message[0].toLowerCase())) {
    room.setPlayerTeam(teamS[0].id, Team.RED);
    redCaptainChoice = "top";
    clearTimeout(timeOutCap);
    room.sendAnnouncement(player.name + " Escolheu o topo da fila !", null, Cor.WHITE, Negrito);
    return false;
    }
    else if (["random", "rand"].includes(message[0].toLowerCase())) {
    var r = getRandomInt(teamS.length);
    room.setPlayerTeam(teamS[r].id, Team.RED);
    redCaptainChoice = "random";
    clearTimeout(timeOutCap);
    room.sendAnnouncement(player.name + " Escolheu jogadores aleatórios da fila !", null, Cor.WHITE, Negrito);
    return false;
    }
    else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
    redCaptainChoice = "bottom";
    clearTimeout(timeOutCap);
    room.sendAnnouncement(player.name + " Escolheu os ultimos da fila !", null, Cor.WHITE, Negrito);
    return false;
    }
    else if (!Number.isNaN(Number.parseInt(message[0]))) {
    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
    room.sendAnnouncement("Número invalido !", player.id, Cor.RED, Negrito);
    return false;
    }
    else {
    room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
    room.sendAnnouncement(player.name + " escolheu o " + teamS[Number.parseInt(message[0]) - 1].name + " !", null, Cor.WHITE, Negrito);
    return false;
    }
    }
    }
    if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
    if (["top", "auto"].includes(message[0].toLowerCase())) {
    room.setPlayerTeam(teamS[0].id, Team.BLUE);
    blueCaptainChoice = "top";
    clearTimeout(timeOutCap);
    room.sendAnnouncement(player.name + " Escolheu o topo da fila !", null, Cor.WHITE, Negrito);
    return false;
    }
    else if (["random", "rand"].includes(message[0].toLowerCase())) {
    room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
    blueCaptainChoice = "random";
    clearTimeout(timeOutCap);
    room.sendAnnouncement(player.name + " Escolheu jogadores aleatórios da fila !", null, Cor.WHITE, Negrito);
    return false;
    }
    else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
    blueCaptainChoice = "bottom";
    clearTimeout(timeOutCap);
    room.sendAnnouncement(player.name + " Escolheu os ultimos da fila !", null, Cor.WHITE, Negrito);
    return false;
    }
    else if (!Number.isNaN(Number.parseInt(message[0]))) {
    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
    room.sendAnnouncement("Número invalido !", player.id, Cor.RED, Negrito);
    return false;
    }
    else {
    room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
    room.sendAnnouncement(player.name + " escolheu o " + teamS[Number.parseInt(message[0]) - 1].name + " !", null, Cor.WHITE, Negrito);
    return false;
    }
    }
    }
    }
    }
  

    if (getMute(player)) {
    room.sendAnnouncement("Você está mutado.", player.id);
    return false;
    }
    
    

    if ( account[player.name] ) {
      if (localStorage.getItem(getAuth(player))){ // elo definido por vitórias
      stats = JSON.parse(localStorage.getItem(getAuth(player)));
      if (stats[Ss.WI] > 300){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🤴 「𝐑𝐞𝐢」" + player.name + ": " + msg + "", null, 0xFF8000)
      } else if (stats[Ss.WI] > 280){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] ⚽ 「𝗖𝗿𝗮𝗾𝘂𝗲」" + player.name + ": " + msg + "", null, 0x0040FF)
      } else if (stats[Ss.WI] > 260){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🔊 「𝗝𝘂𝗶𝘇」" + player.name + ": " + msg + "", null, 0x12fce9)
      } else if (stats[Ss.WI] > 250){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🎩 「𝗖𝗮𝗿𝘁𝗼𝗹𝗮」" + player.name + ": " + msg + "", null, 0x757272)
      } else if (stats[Ss.WI] > 230){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 📌 「𝗧𝗮𝗯𝗲𝗹𝗲𝗶𝗿𝗼」" + player.name + ": " + msg + "", null, 0xf53618)
      } else if (stats[Ss.WI] > 200){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🛁 「𝗕𝗮𝗻𝗵𝗲𝗶𝗿𝗮」" + player.name + ": " + msg + "", null, 0xe6e6d1)
      } else if (stats[Ss.WI] > 170){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🌍 「𝗜𝘀𝗼𝗹𝗮𝗱𝗼𝗿」" + player.name + ": " + msg + "", null, 0xccccbe)
      } else if (stats[Ss.WI] > 150){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 💰 「𝗟𝗮𝗱𝗿𝗮𝗼」" + player.name + ": " + msg + "", null, 0x5e5e57)
      } else if (stats[Ss.WI] > 135){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 😋 「𝗙𝗼𝗺𝗶𝗻𝗵𝗮」" + player.name + ": " + msg + "", null, 0xcbeb2a)
      } else if (stats[Ss.WI] > 100){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🦵 「𝗣𝗲𝗿𝗻𝗮 𝗱𝗲 𝗣𝗮𝘂」" + player.name + ": " + msg + "", null, 0x917d69)
      } else if (stats[Ss.WI] > 85){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 💩 「𝗔𝗿𝗿𝗲𝗴𝗮𝗼」" + player.name + ": " + msg + "", null, 0xf5cc16)
      } else if (stats[Ss.WI] > 60){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🦶 「𝗣𝗲 𝘁𝗼𝗿𝘁𝗼」" + player.name + ": " + msg + "", null, 0xbf6654)
      } else if (stats[Ss.WI] > 40){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🍿 「𝗣𝗶𝗽𝗼𝗾𝘂𝗲𝗶𝗿𝗼」" + player.name + ": " + msg + "", null, 0xe6dd60)
      } else if (stats[Ss.WI] > 25){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 😭 「𝗖𝗵𝗼𝗿𝗮𝗼」" + player.name + ": " + msg + "", null, 0x0884ff)
      } else if (stats[Ss.WI] > 15){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 🐔 「𝗙𝗿𝗮𝗻𝗴𝗼」" + player.name + ": " + msg + "", null, 0xff8308)
      } else if (stats[Ss.WI] > 3){
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] ⚽ 「𝗚𝗮𝗻𝗱𝘂𝗹𝗮」" + player.name + ": " + msg + "", null, 0xa8bd97)
      } else {
      room.sendAnnouncement("✅ [⚽" + stats[Ss.GL] + "] 👶 「𝗡𝗼𝘃𝗮𝘁𝗼」"  + player.name + ": " + msg + "", null, 0xDDD4DB)
      }
      return false;
      }
    }
  
    
  
      if ( !account[player.name] ) {
        room.sendAnnouncement("Por Segurança você precisa se registrar para utilizar o chat: !registrar <senha>", player.id, Cor.RED, "Negrito")
      }
      return false;
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
    room.sendAnnouncement('Entre no nosso Discord: https://discord.gg/ddxyf7BbYy', null, Cor.WHITE, "bold", 1);
    room.sendAnnouncement("A partida está sendo gravada.", null, Cor.WHITE, "italic");
    room.startRecording();
  
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
  }
  
  room.onGameStop = function (byPlayer) {
  
    var cod = code[(Math.random() * code.length) | 0]
  var cod1 = code1[(Math.random() * code.length) | 0]
  var cod2 = code2[(Math.random() * code.length) | 0]
  var cod3 = code3[(Math.random() * code.length) | 0]
  var cod4 = code4[(Math.random() * code.length) | 0]
  
      room.sendAnnouncement(""+"A Gravação da partida foi enviada ao Discord, ID: " + `${cod}${cod1}${cod2}${cod3}${cod4}` + "\n" +"");
      sendDiscordWebhook();
  
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
    var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
    var fraseasis = frasesASS[(Math.random() * frasesASS.length) | 0]
    room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + fraseasis + lastPlayersTouched[1].name + ". velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.RED : Cor.BLUE),'normal');
    game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
    }
    else {
    var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
    room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + " ! velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.RED : Cor.BLUE),'normal');
    }
    }
    else {
    var fraseautogol = golcontra[(Math.random() * golcontra.length) | 0]
    room.sendAnnouncement("😂 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + " ! velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.RED : Cor.BLUE),'normal');
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
  
  
  const code = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const code1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const code2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const code3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const code4 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  
  
  function sendDiscordWebhook() {
  
      var cod = code[(Math.random() * code.length) | 0]
  var cod1 = code1[(Math.random() * code.length) | 0]
  var cod2 = code2[(Math.random() * code.length) | 0]
  var cod3 = code3[(Math.random() * code.length) | 0]
  var cod4 = code4[(Math.random() * code.length) | 0]
  
  
      const form = new FormData();
      // Você pode fazer upload de até 8 MB de arquivo via webhook.
      // Argumento
      // Execução [ operação, nome, tipo ]
      form.append(
          "arquivo",
          new File([room.stopRecording()],
              `NORMAL-${cod}${cod1}${cod2}${cod3}${cod4}.hbr2`,
              {type: "text/plain"}
              )
          );
  
  
      // Enviar via webhook.
      const webhook = new XMLHttpRequest();
      webhook.open("POST", webhookURLREC);
      webhook.send(form);
  }
  
  function np (player){
    if (proibir.includes(player.name)) { room.kickPlayer(player.id, 'nick proibido nessa sala', false) }
  }
  
  function ln(player){
    if (mn.includes(player.name)) { mn.splice(mn.indexOf(player.name)) }
  }
  
  function multiplas_abas(player){
    conns.push([player.id,player.name,player.auth,player.conn])
    playerConn[player.id] = player.conn; 
      if (room.getPlayerList().filter((p) => playerConn[p.id] == player.conn).length > 1) 
      room.kickPlayer(room.getPlayerList().filter((p) => playerConn[p.id] == player.conn)[1].id, "Você já está nessa sala em outra aba, feche a outra aba.", false)
  }
  
  function playerNick(player){
    if (mn.includes(player.name)) { 
    room.kickPlayer(player.id, 'Já existe um jogador com esse nick na sala!', false);
    }
  }
  
  room.onRoomLink = function (url) {
  }
  
  room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (getMute(changedPlayer) && changedPlayer.admin) {
    room.sendAnnouncement(changedPlayer.name + " foi desmutado.");
    setMute(changedPlayer, false);
    }
  }
  
  room.onStadiumChange = function (newStadiumName, byPlayer) {
  }
  
  room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    handleInactivity();
  }
  
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
    room.sendAnnouncement("⚽ Gol de ouro !", null, Cor.Amrelo, Negrito);
    }
    if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
    if (checkTimeVariable == false) {
    checkTimeVariable = true;
    setTimeout(() => { checkTimeVariable = false; }, 10);
    room.sendAnnouncement("⌛ Só restam 60 segundos para a partida acabar !", null, Cor.Amrelo, Negrito);
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
      room.sendAnnouncement("🔴 O Time vermelho venceu " + scores.red + "-" + scores.blue + " ! Vitórias em sequencia : " + streak + " 🏆", null, Cor.RED, "normal");
      }
      else if (winner == Team.BLUE) {
      streak = 1;
      room.sendAnnouncement("🔵O Time azul venceu " + scores.blue + "-" + scores.red + " ! Vitórias em sequencia : " + streak + " 🏆", null, Cor.BLUE, "normal");
      }
      else {
      streak = 0;
    } room.sendAnnouncement("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", null, Cor.ORANGE, "normal");
    scores.red == 0 ? (scores.blue == 0 ? room.sendAnnouncement("🧤 " + GKList[0].name + " e o " + GKList[1].name + " Melhores GKs da partida ! ", null, Cor.ORANGE, "normal") : 
    room.sendAnnouncement("🧤 " + GKList[1].name + " Ele que decidiu nos gols ! ", null, Cor.ORANGE, "normal")) : scores.blue == 0 ? 
    room.sendAnnouncement("🧤 " + GKList[0].name + " Ele que deicidiu nos gols ! ", Cor.ORANGE, "normal") : null;
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
  
  function activateChooseMode() { // Modo escolhas ativado
    inChooseMode = true;
    slowMode = 2;
  }
  
  function deactivateChooseMode() { // Modo escolhas desativado
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
    slowMode = 0;
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
  }
  
  function loadMap(map, scoreLim, timeLim) { // customização de mapas
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
   room.sendAnnouncement("⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", mova-se em " + Math.floor(afkLimit / 3) + " segundos, para não ser kickado pela verificação de 'AFKS'!", extendedP[i][eP.ID], Cor.RED, "normal");
    }
    if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
    extendedP[i][eP.ACT] = 0;
    if (room.getScores().time <= afkLimit - 0.5) {
    setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
    }
    room.kickPlayer(extendedP[i][eP.ID], "Ausente", false);
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
  
  function updateRoleOnPlayerIn() { // Se a lista de specs for = 0, inicia o jogo.
    updateTeams()
    if (inChooseMode) {
    if (players.length == 6) {
    loadMap(Mapa, scoreMapa, tempoMapa);
    }
    getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams(); 
  }
  
  function updateRoleOnPlayerOut() { // Detectar ragequit e atualizar times.
    updateTeams();
    if (room.getScores() != null) {
    var scores = room.getScores();
    if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
    if (teamR.length < teamB.length) {
    if (scores.blue - scores.red == 2) {
    endGame(Team.BLUE);
    room.sendAnnouncement("🤖 Ragequit, jogo finalizado 🤖", null, Cor.WHITE);
    setTimeout(() => { room.stopGame(); }, 100);
    return;
    }
    }
    else {
    if (scores.red - scores.blue == 2) {
    endGame(Team.RED);
    room.sendAnnouncement("🤖 Ragequit, jogo finalizado 🤖", null, Cor.WHITE);
    setTimeout(() => { room.stopGame(); }, 100);
    return;
    }
    }
    }
    }
    if (inChooseMode) {
    if (players.length < 6) {
    loadMap(Mapa, scoreMapa, tempoMapa);
    }
    if (teamR.length == 0 || teamB.length == 0) {
    teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
    return;
    }
    if (Math.abs(teamR.length - teamB.length) == teamS.length) {
    room.sendAnnouncement("Nenhum player restou, completando equipes e iniciando ...", null, Cor.WHITE);
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
    if (Math.abs(teamR.length - teamB.length) == 2) { // se alguém saiu de um time tem 2 jogadores a mais que o outro.
    room.sendAnnouncement("🤖 Equilibrando equipes... 🤖", null, Cor.WHITE);
    teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS); }
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
  
  function balanceTeams() { // Função que balançea os times, corrigi times que estão com player a menos.
      if (!inChooseMode) {
          if (players.length == 1 && teamR.length == 0) { // 1 player
              quickRestart();
              loadMap(Mapa, scoreMapa, tempoMapa);
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
                  loadMap(Mapa, scoreMapa, tempoMapa);
                  room.setPlayerTeam(players[0].id, Team.RED);
                  return;
              }
              else if (players.length == 6) {
                  quickRestart();
                  
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
              room.pauseGame(true)
              activateChooseMode();
              choosePlayer();
          }
          else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) { //2 in red 2 in blue and 2 or more spec
              if (teamR.length == 2) {
                  quickRestart();
                  if (!teamS.length == 2){
                      
                  }
              }
              topBtn();
          }
      }
  }
  
  function choosePlayer() { // Função para que os capitães possam escolher.
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
    room.sendAnnouncement("[PV] Para escolher um jogador, escreva um número ou escreva 'top' para escolher os primeiros, 'random' para aleatorio oou 'bottom' para os ultimos.", teamR[0].id, Cor.WHITE, Negrito);
    timeOutCap = setTimeout(function (player) { room.sendAnnouncement("[PV] Seja rápido @" + player.name + ", restam " + Number.
    parseInt(chooseTime / 2) + " segundos para escolher !", player.id, Cor.WHITE, Negrito); timeOutCap = setTimeout(function (player) { room.
    kickPlayer(player.id, "Não escolheu a tempo, ou esteve AFK!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length != 0) {
    room.sendAnnouncement("[PV] Para escolher um jogador, escreva um número ou escreva 'top' para escolher os primeiros, 'random' para aleatorio oou 'bottom' para os ultimos.", teamB[0].
    id, Cor.WHITE, Negrito); timeOutCap = setTimeout(function (player) { room.sendAnnouncement("[PV] Seja rápido @" + player.name + ", restam " + Number.
    parseInt(chooseTime / 2) + " segundos para escolher !", player.id, Cor.WHITE, Negrito); timeOutCap = setTimeout(function (player) { room.
    kickPlayer(player.id, "Não escolheu a tempo, ou esteve AFK!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
  }
  
  function getSpecList(player) { // Mostra a lista de jogadores para escolhas.
    var cstm = "[PV] Lista de Players : ";
    for (var i = 0; i < teamS.length; i++) {
    if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
    room.sendAnnouncement(cstm, player.id);
    cstm = "... ";
    }
    cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id);
  }
  
    /* STATS FUNCTIONS */
  
  function getLastTouchOfTheBall() { // Função de ultimo toque do jogador
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
    if (players[i].position != null) {
    var distanceToBall = pointDistance(players[i].position, ballPosition);
    if (distanceToBall < triggerDistance) {
    !activePlay ? activePlay = true : null;
    if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].
    id) { lastPlayersTouched[1] = lastPlayersTouched[0];
    lastPlayersTouched[0] = players[i];
    }
    lastTeamTouched = players[i].team;
    }
    }
    }
  }
  
  function getStats() { // Função que busca a posse de bola, velocidade da bola e o player que é GK
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
  
  function updateStats() { // Função atualizar STATUS a cada fim de jogo.
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.
    scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
    var stats;
    for (var i = 0; i < allReds.length; i++) {
    localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0,
    0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name]; stats[Ss.GA]++;
    lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
    stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
    localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < allBlues.length; i++) {
    localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats =
    [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name]; stats[Ss.GA]++;
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
  
  function findGK() { // Função que procura o GK da partida.
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) { if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
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
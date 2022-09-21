window.onGameLost = function () {
    window.parent.postMessage(JSON.stringify({ type: "GAME_LOST" }), "*");
  };
  
window.onGameWon = function (whichPrize) {
  window.parent.postMessage(
    JSON.stringify({ type: "GAME_WON", data: whichPrize }),
    "*"
  );
};
window.onGameLoaded = function () {
  window.parent.postMessage(JSON.stringify({ type: "GAME_LOADED" }), "*");
};

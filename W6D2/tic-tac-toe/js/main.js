const View = require('./ttt-view.js')// require appropriate file
const Game = require('./game/game.js')// require appropriate file

$( () => {
  let $el = $('.ttt');
  let game = new Game();
  let view = new View(game, $el);
  // view.setupBoard();
  console.log($el);
  view.bindEvents();
  // $('li').on("mouseover", event => {
  //   event.preventDefault();
  //
  // });

});

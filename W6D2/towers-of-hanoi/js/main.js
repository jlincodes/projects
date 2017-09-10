const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

$( () => {
  console.log('towers are working');
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
  view.bindEvents();
});

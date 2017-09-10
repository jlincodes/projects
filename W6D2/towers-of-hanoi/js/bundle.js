/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const HanoiGame = __webpack_require__(1);
const HanoiView = __webpack_require__(2);

$( () => {
  console.log('towers are working');
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
  view.bindEvents();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Game {
  constructor() {
    this.towers = [[3,2,1], [], []];
  }

  isValidMove(startTowerIdx, endTowerIdx) {
      const startTower = this.towers[startTowerIdx];
      const endTower = this.towers[endTowerIdx];

      if (startTower.length === 0) {
        return false;
      } else if (endTower.length == 0) {
        return true;
      } else {
        const topStartDisc = startTower[startTower.length - 1];
        const topEndDisc = endTower[endTower.length - 1];
        return topStartDisc < topEndDisc;
      }
  }

  isWon() {
      // move all the discs to the last or second tower
      return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  }

  move(startTowerIdx, endTowerIdx) {
      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
        return true;
      } else {
        return false;
      }
  }

  print() {
      console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
      this.print();
      reader.question("Enter a starting tower: ", start => {
        const startTowerIdx = parseInt(start);
        reader.question("Enter an ending tower: ", end => {
          const endTowerIdx = parseInt(end);
          callback(startTowerIdx, endTowerIdx)
        });
      });
  }

  run(reader, gameCompletionCallback) {
      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
        if (!this.move(startTowerIdx, endTowerIdx)) {
          console.log("Invalid move!");
        }

        if (!this.isWon()) {
          // Continue to play!
          this.run(reader, gameCompletionCallback);
        } else {
          this.print();
          console.log("You win!");
          gameCompletionCallback();
        }
      });
  }
}

module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class View {
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.startTower = undefined;
    this.endTower = undefined;
    this.bindEvents();
    this.setupTowers();
    this.render();
  }

  bindEvents(){
    const $ul = $('ul');
    $ul.on("click", event => {
      event.preventDefault();
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      let index = $ul.index($currentTarget);
      this.setIndex(index);
    });

  }

  setIndex(index){
    if(this.startTower === undefined){
      this.startTower = index;
      // this.bindEvents();
    } else {
      this.endTower = index;
      this.move();
    }
  }

  move(){
    // console.log(this);

    if(!this.game.move(this.startTower, this.endTower)){
      alert("Invalid Move");
    }
    this.render();
    if(this.game.isWon()){
      this.win();
    }
    this.startTower = undefined;
    this.endTower = undefined;
  }

  setupTowers(){
    for (var i = 0; i < 3; i++) {
      const ul = document.createElement("ul");
      this.$el.append(ul);
      let $ul = $(ul);
      $ul.addClass(`tower-${i}`);
      for (var j = 0; j < 3; j++) {
        const li = document.createElement("li");
        $ul.append(li);
      }
    }
  }

  win(){
    Array.from($('li')).forEach((el)=>{
      $(el).addClass('win');
    });
    alert("YOU WIN!!");

  }

  render(){
    // console.log(this.game.towers);
    const towers = this.game.towers;
    towers.forEach((tower, idx1)=>{
      // let $tower = $(`tower-${idx}`);
      let $li = $(`.tower-${idx1} li`);
      Array.from($li).forEach((el, idx2)=>{
        if(tower[2-idx2]){
          $(el).addClass(`disc-${tower[2-idx2]}`);
        }
        else{
          // console.log($(el).attr());
          $(el).removeClass();
        }
      });
    });
  }
}

module.exports = View;


/***/ })
/******/ ]);
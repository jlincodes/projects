class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    const $li = $('li');
    $li.on("click", event => {
      event.preventDefault();
      // console.log(event.target);
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      this.makeMove($currentTarget);
    });
  }

  makeMove($square) {
    let index = $('li').index($square);
    let x = Math.floor(index%3);
    let y = Math.floor(index/3);

    let currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove([x,y]);
      $square.append(currentPlayer);
      $square.addClass("marked");
    }
    catch(err) {
      // $('h1').append(`${err.message}`);
      alert(err.msg);
    }
    if (this.game.isOver()) {
      this.endGame();
    }
  }

  endGame() {
    $('.ttt').append('<figcaption>');
    $('figcaption').append(`${this.game.winner()} wins!`);
    const $li = $('li');
    Array.from($li).forEach( (el) => {
      // console.log(el);
      const $el = $(el);

      if ($el['0'].textContent === this.game.winner()
    ) {
        $el.addClass('winner');
      } else {
        $el.addClass('loser');
      }
    });
  }

  setupBoard() {
    const ul = document.createElement("ul");
    // console.log(this.$el);
    this.$el.append(ul);
    for(let i = 0; i < 9; i++) {
      const li = document.createElement("li");
      ul.append(li);
    }
    // const $li = $('li');
    // console.log($li);
  }
}

module.exports = View;

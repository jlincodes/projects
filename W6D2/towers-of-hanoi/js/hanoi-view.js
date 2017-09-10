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

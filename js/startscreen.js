class startscreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'startscreen'
    });
  }

  preload() {
   this.load.image('start', 'assets/art8.jpg');
   this.load.image('play', 'assets/playbutton1.png');
   this.load.audio('crash', 'assets/trucksound.mp3');
  }

  create() {

  var trucksound = this.sound.add('crash');

  this.add.image(400, 400, 'start');

    //
    var testText = this.add.text(230,100,'Spido crush',{
        fontSize: '55px',
        fill: '#fff'
    });
    var test2Text = this.add.text(130,200,'Avoid crushing with the other cars,\nhelicopters landing on you and dodge the bullets\n',{
        fontSize: '20px',
        fill: '#fff'
    });
    var test3Text = this.add.text(130,258,'Use the left and right arrow keys to navigate the car',{
        fontSize: '20px',
        fill: '#fff'
    });
    // this.input.on('pointerdown',function(event){
    // startGameplay();
    // },this);

    trucksound.play();

    var bg = this.add.image(400, 400, 'play');
// var text = this.add.image(0, 0, 'buttonText');

    var container = this.add.container(0, 0, bg);

    bg.setInteractive();

    bg.on('pointerup',startGameplay)



    // function Game ()
    // {
    // game.scene.stop('s');
    // game.scene.start('scene1');
    //
    // }

  }

  update() {

  }
}
function startGameplay() {
    game.scene.stop('startscreen');
    game.scene.start('scene1');
}

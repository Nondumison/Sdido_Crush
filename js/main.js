var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#72dea3',
  pixelArt: true,
  physics: {default: 'arcade'},
  audio:{disableWebAudio: true},
  scene:[startscreen,scene1]
};

var game = new Phaser.Game(config);

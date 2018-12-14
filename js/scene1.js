var background;
var cursors;
var camera;
var car;
var car2;
var finish;
var coin;
var invisible;
var music;
var road;
var text;
var timedEvent;
var sky;
var truck;
var trees;
var horizon;
var speed = 10;
var startZ;
var score =0;
var scoreText;
var gameText;
var hightime;
var malos;
var malo1;
var malo2;
var malo3;
var malo4;
var malo5;
var  bullet;
var baseAlphaIncSpeed = 0.006;
var gameOver=false;
var value = Phaser.Math.Between(250,550);
var value2 = Phaser.Math.Between(250,550);
var velocity = Phaser.Math.Between(50,250);
var velocity2 = Phaser.Math.Between(50,250);
var shoot1;
var shoot2;
var shoot3;
var shoot4;
var block1;
var block2;
var block3;
var block4;
var explosions;

class scene1 extends Phaser.Scene{
  constructor(){
    super({key:"scene1"});
  }

  preload(){
    this.load.audio('theme','assets/song.mp3');
    //this.load.audio('crash','assets/trucksound.mp3');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('hills', 'assets/hills.png');
    this.load.image('trees', 'assets/trees.png');
    this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');
    this.load.image('bg', 'assets/sky.png');
    this.load.image('horizon', 'assets/desert2.jpg');
    this.load.image('tree', 'assets/1234.png');
    this.load.image('car', 'assets/car04.png');
    this.load.image('car1', 'assets/car01.png');
    this.load.image('car2', 'assets/car02.png');
    this.load.image('truck', 'assets/truck.png');
    this.load.image('invisible', 'assets/invisible4.png');
    this.load.image('treeLeft', 'assets/tree1.png');
    this.load.image('treeRight', 'assets/tree1.png');
    this.load.image('coin', 'assets/1234.png');
    this.load.image('deadtree', 'assets/billboard01.png');
    this.load.image('deadtree2', 'assets/billboard03.png');
    //this.load.image('whiteboard', 'assets/billboard05.png');
    this.load.image('bushtree', 'assets/dead_tree2.png');
    this.load.image('bushtree2', 'assets/dead_tree1.png');
    this.load.image('replay', 'assets/playagain1.png');
    this.load.image('levelcomplete', 'assets/levelcomplete.jpg');
    this.load.image('gameover1', 'assets/gameover2.png');
    this.load.image('heli1', 'assets/helic.png');
   	this.load.image('bullet', 'assets/bullet4.png');
    this.load.image('kaboom', 'assets/expo.jpg');
    //game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
  }

  create(){
    sky = this.add.image(400, 250, 'bg').setDepth(-5000);
    horizon = this.add.image(400, 300, 'horizon').setDepth(-4000);
    car = this.physics.add.sprite(400, 550, 'car',15, true).setDepth(-2000);
    car.setCollideWorldBounds(true);
    car2 = this.physics.add.sprite(value, 360, 'car2').setScale(0.8,0.8).setDepth(-4000);
    truck = this.physics.add.sprite(value2, 360, 'truck').setScale(0.6,0.6).setDepth(-4000);
    camera = this.cameras3d.add(100).setPosition(0, -40, 300).setPixelScale(200);
    //my try1

      //bullet = this.add.image('bullet');

  var group = this.physics.add.group({
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true
    });


    block1 = group.create(400,360, 'heli1').setVelocity(100,100).setScale(0.1,0.1);
   var block2 = group.create(100, 360, 'heli1').setVelocity(-100, -100).setScale(0.1,0.1);
 var block3 = group.create(800, 360, 'heli1').setVelocity(60, 100).setScale(0.1,0.1);
  // var block4 = group.create(600, 360, 'heli1').setVelocity(-30, -50).setScale(0.1,0.1);

    this.physics.add.collider(car, group,hithelicopter,null,this);


    bullet = this.physics.add.group({
    key: 'bullet',
       repeat: 10,
       lifespan:2000,
    frameQuantity:2

    });
    // bullet= this.physics.add('bullet');
    // bullet.createEmitter({
    //   radial:false,
    //   lifespan:2000,
    //   speedX:{min:200, max:400},
    //   quantity:2
    //
    // })


    shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.03,0.03);
    shoot2 = bullet.create(block2.x, block2.y, "bullet").setVelocity(50,100).setScale(0.03,0.03);
  shoot3 = bullet.create(block3.x, block3.y, "bullet").setVelocity(50,100).setScale(0.03,0.03);
    // shoot4 = bullet.create(block4.x, block4.y, "bullet").setVelocity(50,100).setScale(0.03,0.03);

    this.physics.add.collider(car, bullet,hitbullet,null,this);

    for (var z = 0; z < 32; z++)
    {
        for (var x = 1; x < 16; x++)
        {
            var xDiff = Phaser.Math.Between(-40, 40);
            var zDiff = Phaser.Math.Between(-60, 60);

            var bx = (x * 100) + xDiff;
            var bz = (z * 300) + zDiff;

            camera.create(bx, 0, bz, 'tree');
        }
    }



    for (var z = 0; z < 32; z++)
    {
        for (var x = 1; x < 0; x++)
        {
            var xDiff = Phaser.Math.Between(-40, 40);
            var zDiff = Phaser.Math.Between(-60, 60);

            var bx = (x * 100) + xDiff;
            var bz = (z * 600) + zDiff;

            truck.create(bx, 0, bz, 'truck');
        }
    }

    for (var z = 0; z < 32; z++)
    {
        for (var x = 1; x < 0; x++)
        {
            var xDiff = Phaser.Math.Between(-40, 40);
            var zDiff = Phaser.Math.Between(-60, 60);

            var bx = (x * 100) + xDiff;
            var bz = (z * 600) + zDiff;

            camera.create(bx, 0, bz, 'car2');
        }
    }
    for (var z = 0; z < 32; z++)
    {
        for (var x = 1; x < 0; x++)
        {
            var xDiff = Phaser.Math.Between(-40, 40);
            var zDiff = Phaser.Math.Between(-60, 60);

            var bx = (x * 100) + xDiff;
            var bz = (z * 600) + zDiff;

            camera.create(bx, 0, bz, 'deadtree2');
        }
    }

    for (var z = 0; z < 32; z++)
    {
        for (var x = 1; x < 0; x++)
        {
            var xDiff = Phaser.Math.Between(-40, 40);
            var zDiff = Phaser.Math.Between(-60, 60);

            var bx = (x * 100) + xDiff;
            var bz = (z * 600) + zDiff;

            camera.create(bx, 0, bz, 'deadtree1');
        }
    }
    for (var z = 0; z < 32; z++)
    {
        for (var x = 1; x < 0; x++)
        {
            var xDiff = Phaser.Math.Between(-40, 40);
            var zDiff = Phaser.Math.Between(-60, 60);

            var bx = (x * 100) + xDiff;
            var bz = (z * 600) + zDiff;

            camera.create(bx, 0, bz, 'bushtree2');
        }
    }
    for (var z = 0; z < 32; z++)
    {
        for (var x = 1; x < 0; x++)
        {
            var xDiff = Phaser.Math.Between(-40, 40);
            var zDiff = Phaser.Math.Between(-60, 60);

            var bx = (x * 100) + xDiff;
            var bz = (z * 600) + zDiff;

            camera.create(bx, 0, bz, 'bushtree');
        }
    }

    background = camera.createRect({ x: 1, y: 1, z: 32 }, 24, 'invisible', 0);
    startZ = background[0].z;

    for (var i = 0; i < background.length; i++)
    {
      var segment = background[i];
      segment.gameObject.scaleX = 1;
      segment.adjustScaleX = false;

      if (i % 2 === 1)
      {
        segment.gameObject.setFrame(1);
      }
    }

    road = camera.createRect({ x: 1, y: 1, z: 32 }, 24, 'invisible', 0);

    for (var i = 0; i < road.length; i++)
    {
      var segment = road[i];

      if (i % 2 === 1)
      {
        segment.gameObject.setFrame(1);
      }
    }

    trees = [];

    for (var i = 0; i < 18; i++)
    {
      trees.push(camera.create(-300, -60, i * 128, 'treeLeft'));
      trees.push(camera.create(300, -60, i * 128, 'treeRight'));
    }
    for (var i = 0; i < 3; i++)
    {
      trees.push(camera.create(-500, -60, i * 128, 'bushtree2'));
      trees.push(camera.create(500, -60, i * 128, 'bushtree'));
    }

    for (var i = 0; i < 1; i++)
    {
       trees.push(camera.create(-500, 60, i * 128, 'deadtree2'));
       trees.push(camera.create(500, -60, i * 128, 'deadtree'));
    }

  timedEvent = this.time.addEvent({ delay: 2000, callback: onEvent, callbackScope: this, repeat: 100});

    cursors = this.input.keyboard.createCursorKeys();

    text = this.add.text(10, 10, '', { font: '30px Courier', fill: '#fff' });

    this.physics.add.collider(car, car2, hitcar, null, this);
    this.physics.add.collider(car, truck, hittruck, null, this);


    gameText = this.add.text(16, 16, '', { fontSize: '45px', fill: '#000' });
    scoreText = this.add.text(16, 16, '', { fontSize: '32px', fill: "#000"});

    music = this.sound.add('theme');
    //this.sound.add('crash');
    music.play();

    hightime = this.add.text(10,50,'Get to zero to win:',{ fontSize: '25px', fill: '#fff' });

  }

  update(){

    for (var i = 0; i < trees.length; i++)
    {
       var segment = trees[i];
        segment.z += speed;

       if (segment.z > (camera.z + 32))
       {
           segment.z = startZ;
       }
    }

    var obj = camera;

    if (cursors.left.isDown)
    {
        car.x -= 8;
    }
    else if (cursors.right.isDown)
    {
        car.x += 8;
    }

    if(gameOver)
    {

    return;
   }

    //camera.update();


   text.setText(
      // 'camera.x: ' + camera.x,
      // 'camera.y: ' + camera.y,
      // 'camera.z: ' + camera.z
      'TIME:'+ timedEvent.repeatCount,{ fontSize: '25px', fill: '#000' }
  );

  if (timedEvent.repeatCount===98){
shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);
  }

  if (  timedEvent.repeatCount===96){
  text.setText('you on fire');

 shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);
  }
  if (  timedEvent.repeatCount===94){

    text.setText('Great Job');
shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);
  }
  if (  timedEvent.repeatCount===90){

    text.setText('Keep going');
    shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);

  }
  if (  timedEvent.repeatCount===88){

    text.setText('you almost there');
  shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);

  }
  if (  timedEvent.repeatCount===86){

    text.setText('you almost there');
    shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);

  }
  if (  timedEvent.repeatCount===84){

    text.setText('you almost there');
    shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);

  }
  if (  timedEvent.repeatCount===82){

    text.setText('you almost there');
    shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.1,0.1);

  }
  if (  timedEvent.repeatCount===70){

    text.setText('you almost there');
    shoot1 = bullet.create(block1.x, block1.y, "bullet").setVelocity(50,100).setScale(0.3,0.1);

  }
  if (  timedEvent.repeatCount===40){

    this.physics.pause();
    var complete = this.add.text(100,200,'level complete',{ fontSize: '75px', fill: '#fff' });

    var bg = this.add.image(400, 400, 'replay');
    // var text = this.add.image(0, 0, 'buttonText');

    var container = this.add.container(0, 0, bg);

    bg.setInteractive();

    bg.on('pointerup',Game)



    function Game ()
    {
    game.scene.stop('scene1');
    game.scene.start('startscreen');

    }
  }


   // while(!gameOver){
   //   car2 = this.physics.add.sprite(value, 360, 'car2').setScale(0.8,0.8).setDepth(-4000);
   //   truck = this.physics.add.sprite(value2, 360, 'truck').setScale(0.6,0.6).setDepth(-4000);

   // }

  }

}




function onEvent ()
{

}

function hittruck(car, truck){
  car.setTint(0xff0000);
  this.physics.pause();
   truck.setVelocity(0,0);
    this.cameras.main.shake(320);
//  gameOver = true;
hightime.text = 'Best Time:' +localStorage.getItem('Best Time')
if (timedEvent > localStorage.getItem('Best Time')){
  localStorage.setItem("Best Time", timedEvent)
}


 var restart = this.add.image(400, 200, 'gameover1');
  //this.sound.play('crash');
  var bg = this.add.image(400, 400, 'replay');
// var text = this.add.image(0, 0, 'buttonText');

  var container = this.add.container(0, 0, [bg]);

  bg.setInteractive()

  bg.on('pointerdown',function( event){
          // score = 0;
        this.scene.restart('scene1');

      },this);

}

function hithelicopter(){
  car.setTint(0xff0000);
  this.physics.pause();
   //truck.setVelocity(0,0);
    this.cameras.main.shake(350);

    var expo = this.add.image('expo.jpg');
//  gameOver = true;
hightime.text = 'Best Time:' +localStorage.getItem('Best Time')
if (timedEvent > localStorage.getItem('Best Time')){
  localStorage.setItem("Best Time", timedEvent)
}


 var restart = this.add.image(400, 200, 'gameover1');
  //this.sound.play('crash');
  var bg = this.add.image(400, 400, 'replay');
// var text = this.add.image(0, 0, 'buttonText');

  var container = this.add.container(0, 0, [bg]);

  bg.setInteractive()

  bg.on('pointerdown',function( event){
          // score = 0;
        this.scene.restart('scene1');

      },this);

}

function hitbullet(){
  car.setTint(0xff0000);
  this.physics.pause();
  //timedEvent.repeatCount.pause();
   //truck.setVelocity(0,0);
    this.cameras.main.shake(350);
//  gameOver = true;
  var expo = this.add.image('expo.jpg');


    // explosion.reset(car.body.x, car.body.y);
    // explosion.play('kaboom', 30, false, true);


hightime.text = 'Best Time:' +localStorage.getItem('Best Time')
if (timedEvent > localStorage.getItem('Best Time')){
  localStorage.setItem("Best Time", timedEvent)
}


 var restart = this.add.image(400, 200, 'gameover1');
  //this.sound.play('crash');
  var bg = this.add.image(400, 400, 'replay');
// var text = this.add.image(0, 0, 'buttonText');

  var container = this.add.container(0, 0, [bg]);

  bg.setInteractive()

  bg.on('pointerdown',function( event){
          // score = 0;
        this.scene.restart('scene1');

      },this);

}
function hitcar (car, car2){
  this.physics.pause();

  car.setTint(0xff0000);
   car2.setVelocity(0,0);
     this.cameras.main.shake(350);
   //gameOver = true;

  //var restart = this.add.image(400, 200, 'gameover1');
  //this.sound.play('crash');
//   var bg = this.add.image(400, 400, 'replay');
// // var text = this.add.image(0, 0, 'buttonText');
//
//   var container = this.add.container(0, 0, [bg]);
//
//   bg.setInteractive()
//
//   // bg.on('pointerup', startGame)
//
//
//     bg.on('pointerdown',function( event){
//         // score = 0;
//       this.scene.restart('scene1');
//
//     },this);
hightime.text = 'Best Time:' +localStorage.getItem('Best Time')
if (timedEvent > localStorage.getItem('Best Time')){
  localStorage.setItem("Best Time", timedEvent)
}


 var restart = this.add.image(400, 200, 'gameover1');
  //this.sound.play('crash');
  var bg = this.add.image(400, 400, 'replay');
// var text = this.add.image(0, 0, 'buttonText');

  var container = this.add.container(0, 0, [bg]);

  bg.setInteractive()

  bg.on('pointerdown',function( event){
          // score = 0;
        this.scene.restart('scene1');

      },this);

}
//

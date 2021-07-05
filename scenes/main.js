var play = add([
  sprite('player'),
  pos(8,0),
  body()
])

const speed = 400

keyPress('right', () => {
  play.move(speed,0)
})

keyPress('left', () => {
  play.move(-speed,0)
})

add([
  sprite('ground'),
  pos(0,40),
  scale(5),
  solid()
])

add([
  sprite('ground'),
  pos(40,80),
  scale(5),
  solid()
])

add([
  sprite('ground'),
  pos(0,120),
  scale(5),
  solid()
])

add([
  sprite('ground'),
  pos(40,160),
  scale(5),
  solid()
])

add([
  sprite('ground'),
  pos(0,200),
  scale(5),
  solid()
])

add([
  sprite('Barrier'),
  pos(0,0),
  solid(),
  'dangerous'
])

add([
  sprite('Barrier'),
  pos(240,0),
  solid(),
  'dangerous'
])

play.collides('dangerous', ()=>{
  destroy(play)
  go('lose',timer.time.toFixed(2))
})

const TIME = 0

const timer = add([
  text('0'),
  pos(20,245),
  scale(3),
  {
    time: TIME,
  }
])

function bullet(x){
  add([
    rect(2,20),
    pos(x,0),
    color(1,0,0),
    'bullet'
  ])
}

add([
    rect(40,5),
    pos(200,200),
    color(0,1,1),
    'Win'
  ])

keyPress('space', () => {
  bullet(8)
})

timer.action(()=>{
  timer.time += dt()
  timer.text = timer.time.toFixed(2)
  if (timer.time.toFixed(1) % 2 == 0){
    bullet(4);
    bullet(50);
    bullet(100);
    bullet(150);
    bullet(200);
    bullet(236);
  }
})

const BULLETS = 200

action('bullet', (b)=>{
  b.move(0,BULLETS)
  if(b.pos.y > 240){
    destroy(b)
  }
})

play.collides('bullet', ()=>{
  destroy(play)
  go('lose',timer.time.toFixed(2))
})

play.collides('Win', ()=>{
  destroy(play)
  go('Winner',timer.time.toFixed(2))
})
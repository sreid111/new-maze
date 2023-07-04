scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    level += 1
    levelUp()
})
function levelUp () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite.setPosition(7, 8)
        level2enemies()
    }
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level3`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
function level2enemies () {
    for (let index = 0; index < 4; index++) {
        blueCar = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(blueCar, assets.tile`myTile9`)
        blueCar.follow(mySprite, 50)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile4, function (sprite, location) {
    slowTime = gameTime
    slow = 1
})
let slow = 0
let gameTime = 0
let slowTime = 0
let blueCar: Sprite = null
let mySprite: Sprite = null
let level = 0
level = 0
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(7, 8)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
level = 2
levelUp()
game.onUpdate(function () {
    gameTime = game.runtime()
    if (slow == 1) {
        controller.moveSprite(mySprite, 50, 50)
    } else {
        controller.moveSprite(mySprite, 100, 100)
    }
    if (gameTime > slowTime + 2000) {
        slow = 0
    }
})
game.onUpdate(function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . . d 2 4 c c 2 4 4 4 4 4 4 c c 
            . d 2 2 4 c b e e e e e e e 2 c 
            . 2 2 2 4 b e e b b b e b b e 2 
            . 2 2 2 2 2 e b b b b e b b b e 
            . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            . 2 d d 2 e f e e e f e e e e e 
            . d d 2 e e e f e e f e e e e e 
            . e e e e e e e f f f e e e e e 
            . e e e e f f f e e e e f f f f 
            . . . e f f f f f e e f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (mySprite.vx > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . e e c c e e . . . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            . . . . 2 c 2 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 2 4 2 2 2 2 2 c 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 c 2 4 4 2 2 2 c 2 f . 
            . . . e 2 c e c c c c e c 2 e . 
            . . . e 2 e c b b b b c e 2 e . 
            . . . e 2 e b b b b b b e 2 e . 
            . . . e e e e e e e e e e e e . 
            . . . f e d e e e e e e d e f . 
            . . . f e 2 d e e e e d 2 e f . 
            . . . f f e e e e e e e e f f . 
            . . . . f f . . . . . . f f . . 
            `)
    }
    if (mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 4 4 2 2 2 2 . . . 
            . . . . . c 4 2 2 2 2 2 c . . . 
            . . . . 2 c 4 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 c 4 2 2 2 2 2 c 2 f . 
            . . . f e c 2 2 2 2 2 2 c e f . 
            . . . f 2 c 2 b b b b 2 c 2 f . 
            . . . e 2 2 b c c c c b 2 2 e . 
            . . . e e b c c c c c c b e e . 
            . . . f e 4 4 4 4 4 4 4 4 e f . 
            . . . f e d 2 2 2 2 2 2 d e f . 
            . . . . 2 d d 2 2 2 2 d d 2 f . 
            . . . . f 2 d 2 2 2 2 d 2 f . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            `)
    }
})

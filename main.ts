scene.setBackgroundColor(9)
let mySprite = sprites.create(assets.image`face_forward`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`walk_forwar`,
100,
true
)

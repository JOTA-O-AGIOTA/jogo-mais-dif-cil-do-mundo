var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0ddeb14d-9a1f-40cf-b4c7-29f91bce488e","40245537-ef6a-4e0e-998e-57d70e0910ac","41d406f5-caf1-4af8-bc2b-74838bc271c4","08745389-821b-4f51-a07c-d23bc10079d1","30036984-3c15-4738-8bba-fdf7205ca649","3be0d7c9-1f5f-4679-8f71-4f189078b026","dc5a2b74-7e79-45a3-9008-d22598386569"],"propsByKey":{"0ddeb14d-9a1f-40cf-b4c7-29f91bce488e":{"name":"spacebattle_10_1","categories":["retro"],"frameCount":1,"frameSize":{"x":216,"y":290},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:30:56 UTC","pngLastModified":"2021-01-05 19:31:37 UTC","version":"aw7_doB10ItjDSWSmC1QfTPY7OeE566d","sourceUrl":"assets/api/v1/animation-library/gamelab/aw7_doB10ItjDSWSmC1QfTPY7OeE566d/category_retro/spacebattle_10.png","sourceSize":{"x":216,"y":290},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/aw7_doB10ItjDSWSmC1QfTPY7OeE566d/category_retro/spacebattle_10.png"},"40245537-ef6a-4e0e-998e-57d70e0910ac":{"name":"retrocreature_04_1","categories":["retro"],"frameCount":1,"frameSize":{"x":365,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:32:00 UTC","pngLastModified":"2021-01-05 19:31:44 UTC","version":"MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid","sourceUrl":"assets/api/v1/animation-library/gamelab/MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid/category_retro/retrocreature_04.png","sourceSize":{"x":365,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid/category_retro/retrocreature_04.png"},"41d406f5-caf1-4af8-bc2b-74838bc271c4":{"name":"retrocreature_17_1","categories":["retro"],"frameCount":1,"frameSize":{"x":365,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:05 UTC","pngLastModified":"2021-01-05 19:31:24 UTC","version":"NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc","sourceUrl":"assets/api/v1/animation-library/gamelab/NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc/category_retro/retrocreature_17.png","sourceSize":{"x":365,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc/category_retro/retrocreature_17.png"},"08745389-821b-4f51-a07c-d23bc10079d1":{"name":"retroship_08_1","categories":["retro"],"frameCount":1,"frameSize":{"x":385,"y":283},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:30:54 UTC","pngLastModified":"2021-01-05 19:31:14 UTC","version":"g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd","sourceUrl":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png","sourceSize":{"x":385,"y":283},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png"},"30036984-3c15-4738-8bba-fdf7205ca649":{"name":"retrocreature_13_1","categories":["retro"],"frameCount":1,"frameSize":{"x":299,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:32:02 UTC","pngLastModified":"2021-01-05 19:31:54 UTC","version":"AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr","sourceUrl":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png","sourceSize":{"x":299,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png"},"3be0d7c9-1f5f-4679-8f71-4f189078b026":{"name":"retrocreature_02_1","categories":["retro"],"frameCount":1,"frameSize":{"x":332,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:49 UTC","pngLastModified":"2021-01-05 19:31:39 UTC","version":"7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe","sourceUrl":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png","sourceSize":{"x":332,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png"},"dc5a2b74-7e79-45a3-9008-d22598386569":{"name":"space_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:15 UTC","pngLastModified":"2021-01-07 19:29:50 UTC","version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 
 
  var life = 0

  var spikenave = createSprite(10, 200, 15, 15)
  spikenave.setAnimation("spacebattle_10_1")
  spikenave.scale = 0.15
  
  var universo2 = createSprite(390,200,15,100)


  var alien1 = createSprite(80, 200, 10, 10)
   alien1.velocityY = 11
   alien1.setAnimation("retrocreature_04_1")
   alien1.scale = 0.08
   
  var alien2 = createSprite(170, 200, 10, 10)
   alien2.velocityY = -11
   alien2.setAnimation("retrocreature_17_1")
   alien2.scale = 0.08
   
  var alien3 = createSprite(250, 200, 10, 10)
   alien3.velocityY = 11
   alien3.setAnimation("retroship_08_1")
   alien3.scale = 0.08
   
   var alien4 = createSprite(340,200,10,10)
   alien4.velocityY = -11
   alien4.setAnimation("retrocreature_13_1")
   alien4.scale = 0.08
   
   
   playSound("assets/category_music/game_over_2.mp3", true);
   
function draw() {
  background("lightblue");
  createEdgeSprites()
  
  alien1.bounceOff(topEdge)
  alien1.bounceOff(bottomEdge)
   
  alien2.bounceOff(topEdge)
  alien2.bounceOff(bottomEdge)
   
  alien3.bounceOff(topEdge)
  alien3.bounceOff(bottomEdge)
  
  alien4.bounceOff(topEdge)
  alien4.bounceOff(bottomEdge)
  
  
  if (keyDown(68)) {
    spikenave.x = spikenave.x + 5
  }
   if (keyDown(65)) {
    spikenave.x = spikenave.x - 5
  }
  
  if (spikenave.isTouching(alien1) || spikenave.isTouching(alien2) || spikenave.isTouching(alien3) ||spikenave.isTouching(alien4))
  {
    spikenave.x = 40
    spikenave.y = 190
    life = life + 1
    playSound("assets/category_hits/vibrant_game_big_hit_1.mp3", false);
  }
  
text("Vidas Perdidas: -" +life, 140,20)
if (spikenave.isTouching(universo2)) {
  
  stroke("green")
  textSize(14)
  text("FINALMENTE!!! você atravessou o multiverso em segurança",17,125)
}

  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

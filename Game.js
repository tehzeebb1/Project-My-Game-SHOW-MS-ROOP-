class Game{
   constructor()
   {

    
   }
   getState()
   {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
   }
   update(state)
   {
    database.ref('/').update({
        gameState:state
       });
   }
   
   async start()
   {
    if (gameState === 0)
    {
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        player.getCount();
        }
        form=new Form();
        form.display();     
    }
    //add players here

   }
   

   play()
   {
      // form.hide();

         Player.getPlayerInfo();
         console.log(allPlayers);
         var wall = createSprite(505, 250, 10,100);
         wall.shapeColor = "Red";
         var wall2 = createSprite(540, 200, 80, 10);
         wall2.shapeColor ="Red";
         var wall3 = createSprite(575, 220, 10, 40);
         wall3.shapeColor = "Red";
         var wall4 = createSprite(575, 280, 10, 40);
         wall4.shapeColor = "Red";
         var wall5 = createSprite(540, 300, 80, 10);
         wall5.shapeColor = "Red"
         var wall6 = createSprite(595, 235, 50, 10);
         wall6.shapeColor = "Red";
         var wall7 = createSprite(595, 265, 50, 10);
         wall7.shapeColor = "Red";
         var wall8 = createSprite(625, 295, 10, 70);
         wall8.shapeColor = "Red";
         var wall9 = createSprite(625, 220, 10, 40);
         wall9.shapeColor = "Red";
         var wallx = createSprite(650, 250, 10, 100);
         wallx.shapeColor = "Red";
         var wally = createSprite(680, 300, 70, 10);
         wally.shapeColor = "Red";
         var wallx2 = createSprite(650, 325, 50, 10);
         wallx2.shapeColor = "Red";
         var wallx3 = createSprite(680, 345, 10, 50);
         wallx3.shapeColor = "Red";
         var wallx4 = createSprite(705, 370, 10, 100);
         wallx4.shapeColor = "Red";
         var wallx5 = createSprite(730, 325, 50, 10);
         wallx5.shapeColor = "Red";
         var wallx6 = createSprite(620, 370, 130, 10);
         wallx6.shapeColor = "Red";
         var wallx7 = createSprite(665, 395, 40, 10);
         wallx7.shapeColor = "Red";
         var wallx8 = createSprite(680, 405, 10, 30);
         wallx8.shapeColor = "Red";
         var wallx9 = createSprite(692, 420, 34, 10);
         wallx9.shapeColor = "Red";
         var wallx20 = createSprite(650, 430, 10, 60);
         wallx20.shapeColor = "Red";
         var wallx21 = createSprite(625, 405, 10, 30);
         wallx21.shapeColor = "Red";
         var wallx22 = createSprite(600, 415, 40, 10);
         wallx22.shapeColor = "Red";
         var wallx23 = createSprite(590, 435, 70, 10);
         wallx23.shapeColor = "Red";
         var wallx24 = createSprite(625, 450, 10, 40);
         wallx24.shapeColor = "Red";
         var wallx25 = createSprite(600, 395, 40, 10);
         wallx25.shapeColor = "Red";
         var wallx26 = createSprite(575, 390, 10, 35);
         wallx26.shapeColor = "Red";
        // wallx26.velocityY = 1; 
         // wallx26 add velocity Y and bounce off
         var wallx27 = createSprite(550, 425, 10, 30);
         wallx27.shapeColor = "Red";
         var wallx28 = createSprite(550, 380, 10, 30);
         wallx28.shapeColor = "Red";
         var wallx29 = createSprite(525, 390, 40, 10);
         wallx29.shapeColor = "Red";
         var wallx30 = createSprite(525, 415, 40, 10);
         wallx30.shapeColor = "Red";
         var wallx31 = createSprite(505, 430, 10, 40);
         wallx31.shapeColor = "Red";
         var wallx32 = createSprite(505, 375, 10, 40);
         wallx32.shapeColor = "Red";
         var wallx33 = createSprite(485, 402, 10, 95);
         wallx33.shapeColor = "Red";
         var wallx34 = createSprite(470, 453, 40, 10);
         wallx34.shapeColor = "Red";
         var wallx35 = createSprite(525, 453, 50, 10);
         wallx35.shapeColor = "Red";
         var wallx36= createSprite(555, 463, 10, 30);
         wallx36.shapeColor = "Red";
         var wallx37 = createSprite(525, 473, 50, 10);
         wallx37.shapeColor = "Red";
         var wallx38 = createSprite(455, 405, 10, 90);
         wallx38.shapeColor = "Red";
         var wallx39 = createSprite(465, 473, 70, 10);
         wallx39.shapeColor = "Red";
         var wallx40 = createSprite(435, 415, 10, 110);
         wallx40.shapeColor = "Red";
         var wallx41 = createSprite(415, 355, 50, 10);
         wallx41.shapeColor = "Red";
         var wallx42 = createSprite(455, 355, 10, 50);
         wallx42.shapeColor = "Red";
         var wallx43 = createSprite(415, 335, 70, 10);
         wallx43.shapeColor = "Red";
         var wallx44 = createSprite(380, 315, 10, 50);
         wallx44.shapeColor = "Red";
         var wallx45 = createSprite(390, 425, 10, 150);
         wallx45.shapeColor = "Red";
         var wallx46 = createSprite(370, 432, 10, 165);
         wallx46.shapeColor = "Red";
         var wallx47 = createSprite(460, 500, 150, 10);
         wallx47.shapeColor = "Red";
         var wallx48 = createSprite(450, 518, 170, 10);
         wallx48.shapeColor = "Red";
         var wallx49 = createSprite(530, 534, 10, 40);
         wallx49.shapeColor = "Red";
         var wallx50 = createSprite(550, 534, 10, 40);
         wallx50.shapeColor = "Red";
         var wallx51 = createSprite(540, 550, 30, 10);
         wallx51.shapeColor = "Red";
         var wallx52 = createSprite(595, 518, 100, 10);
         wallx52.shapeColor = "Red";
         var wallx53 = createSprite(650, 491, 10, 65);
         wallx53.shapeColor = "Red";
         var wallx54 = createSprite(575, 500, 90, 10);
         wallx54.shapeColor = "Red";
         var wallx55 = createSprite(625, 487, 10, 36);
         wallx55.shapeColor = "Red";
         var wallx56 = createSprite(720, 250, 10, 110);
         wallx56.shapeColor = "Red";
         var wallx57 = createSprite(740, 265, 10, 80);
         wallx57.shapeColor = "Red";
         var wallx58= createSprite(757, 300, 25, 10);
         wallx58.shapeColor = "Red";
         var wallx59 = createSprite(770, 265, 10, 80);
         wallx59.shapeColor = "Red";
         var wallx60 = createSprite(790, 250, 10, 110);
         wallx60.shapeColor = "Red";
         var wallx61 = createSprite(740, 220, 30, 10);
         wallx61.shapeColor = "Red";
         //wallx61.velocityX
         var wallx62 = createSprite(735, 200, 20, 10);
         wallx62.shapeColor = "Red";
         var wallx63 = createSprite(780, 200, 20, 10);
         wallx63.shapeColor = "Red";
         var wallx64 = createSprite(770, 185, 10, 40);
         wallx64.shapeColor = "Red";
         var wallx65 = createSprite(750, 185, 10, 40);
         wallx65.shapeColor = "Red";
         var wallx66 = createSprite(760, 150, 100, 10);
         wallx66.shapeColor = "Red";
         var wallx67 = createSprite(790, 170, 40, 10);
         wallx67.shapeColor = "Red";
         var wallx68 = createSprite(730, 170, 40, 10);
         wallx68.shapeColor = "Red";
         var wallx69 = createSprite(760, 370, 10, 100);
         wallx69.shapeColor = "Red";
         var wallx70 = createSprite(780, 365, 10, 80);
         wallx70.shapeColor = "Red";
         var wallx71 = createSprite(800, 365, 10, 80);
         wallx71.shapeColor = "Red";
         var wallx72 = createSprite(820, 370, 10, 100);
         wallx72.shapeColor = "Red";
         var wallx73 = createSprite(790, 325, 30, 10);
         wallx73.shapeColor = "Red";
         var wallx74 = createSprite(775, 405, 30, 10);
         wallx74.shapeColor = "Red";
         //wallx74.velocityX
         var wallx75 = createSprite(805, 305, 40, 10);
         wallx75.shapeColor = "Red";
         var wallx76 = createSprite(820, 310, 10, 20);
         wallx76.shapeColor = "Red";
         var wallx77 = createSprite(768, 420, 26, 10);
         wallx77.shapeColor = "Red";
         var wallx78 = createSprite(812, 420, 26, 10);
         wallx78.shapeColor = "Red";
         var wallx79 = createSprite(780, 440, 10, 50);
         wallx79.shapeColor = "Red";
         var wallx80= createSprite(800, 440, 10, 50);
         wallx80.shapeColor = "Red";
         var wallx81 = createSprite(810, 465, 30, 10);
         wallx81.shapeColor = "Red";
         var wallx82 = createSprite(770, 465, 30, 10);
         wallx82.shapeColor = "Red";
         var wallx83 = createSprite(790, 482, 70, 10);
         wallx83.shapeColor = "Red";
         var wallx84 = createSprite(810, 135, 10, 40);
         wallx84.shapeColor = "Red";
         var wallx85 = createSprite(815, 170, 30, 10);
         wallx85.shapeColor = "Red";
         var wallx86 = createSprite(830, 145, 10, 60);
         wallx86.shapeColor = "Red";
         var wallx87 = createSprite(795, 120, 40, 10);
         wallx87.shapeColor = "Red";
         var wallx88 = createSprite(845, 120, 40, 10);
         wallx88.shapeColor = "Red";
         var wallx89 = createSprite(820, 100, 90, 10);
         wallx89.shapeColor = "Red";
         var wallx90 = createSprite(870, 85, 10, 40);
         wallx90.shapeColor = "Red";
         var wallx91 = createSprite(870, 135, 10, 40);
         wallx91.shapeColor = "Red";
         var wallx92 = createSprite(890, 110, 10, 90);
         wallx92.shapeColor = "Red";
         var wallx93 = createSprite(710, 160, 10, 30);
         wallx93.shapeColor = "Red";
         var wallx94 = createSprite(625, 180, 10, 40);
         wallx94.shapeColor = "Red";
         var wallx95 = createSprite(650, 160, 10, 90);
         wallx95.shapeColor = "Red";
         var wallx96 = createSprite(720, 120, 130, 10);
         wallx96.shapeColor = "Red";
         var wallx97 = createSprite(560, 140, 140, 10);
         wallx97.shapeColor = "Red";
         var wallx98 = createSprite(560, 160, 140, 10);
         wallx98.shapeColor = "Red";
         var wallx99 = createSprite(625, 120, 10, 30);
         wallx99.shapeColor = "Red";
         var wallx100 = createSprite(698, 100, 155, 10);
         wallx100.shapeColor = "Red";
         var wallx101 = createSprite(900, 150, 30, 10);
         wallx101.shapeColor = "Red";
         var wallx102 = createSprite(910, 215, 10, 100);
         wallx102.shapeColor = "Red";
         var wallx103 = createSprite(870, 160, 10, 20);
         wallx103.shapeColor = "Red";
         var wallx104 = createSprite(885, 170, 40, 10);
         wallx104.shapeColor = "Red";
         var wallx105 = createSprite(930, 210, 10, 70);
         wallx105.shapeColor = "Red";
         var wallx106 = createSprite(950, 210, 10, 70);
         wallx106.shapeColor = "Red";
         var wallx107 = createSprite(970, 218, 10, 100);
         wallx107.shapeColor = "Red";
         var wallx108 = createSprite(940, 170, 30, 10);
         wallx108.shapeColor = "Red";
         var wallx109 = createSprite(940, 150, 50, 10);
         wallx109.shapeColor = "Red";
         var wallx110 = createSprite(970, 160, 10, 30);
         wallx110.shapeColor = "Red";
         var wallx111 = createSprite(925, 250, 30, 10);
         wallx111.shapeColor = "Red";
         //wallx111.velocityX
         var wallx112 = createSprite(390, 112, 300, 20);
         var wallx113 = createSprite(410, 41, 20, 252);
         var wallx114 = createSprite(440, 157, 100, 20);
         var wallx115 = createSprite(420, 182, 100, 20);

         text(mouseX + "," + mouseY, mouseX, mouseY);
      drawSprites();
      
   }
   end()
   {
    imageMode(CENTER);
    Player.getPlayerInfo();  
    console.log("Game Ended");
    fill("red");
    textAlign(CENTER);
    textSize(50);
    // Add ending rank here 
   } 
} 
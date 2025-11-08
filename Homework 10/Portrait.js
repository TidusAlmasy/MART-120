           //colors
           var redColor;
            var greenColor;
            var blueColor;
           //eye movement
            var xeye = 298;
            var eyemove;
            //mouth move
            var mouthy = 270;
            var mouthmove

            //hair wiggle
            var wigglex = 190
            var wiggley = 170
            var wigglin

            //ear move
            var xear = 250
            var earmove

            //title size
            var titlesize = 30;
            var titlechange;
            //name move
            var namex = 275;
            var namey = 40;
            var direction = 0
            var namemove = 5
            //eyebrow move
            var ybrow = 163
            var browmove
            
            function setup ()
            {
                createCanvas(500, 600);
                eyemove = Math.floor(Math.random() * 2 +1);
                titlechange = Math.floor(Math.random() * 2 +1);
                browmove = Math.floor(Math.random() +1);
                mouthmove = Math.floor(Math.random() * 2 +1);
                earmove = Math.floor(Math.random() +1);
                wigglin = Math.floor(Math.random() * 2 +1);
            }

            function draw()
            {
                background(120);
                console.log("draw :D");
                stroke ('black')
                //neck
                strokeWeight (0)
                fill (229, 204, 172);
                triangle (100, 450, 400, 450, 250, 300);
                rect (187, 280, 130, 100);
                //ears
                fill (239, 224, 205);
                ellipse (xear, 220, 215, 60);
                if (xear >= 255|| xear <= 248){
                    earmove *= -1;
                }
                xear += earmove

                //head
                circle (250, 150, 200);
                ellipse (250, 330, 50, 30);
                rect (200, 230, 100, 50);
                rotate (-25);
                rect (267, 120, 100, 110);
                rotate (50);
                rect (129, 186, 100, 110);
                rotate (70);
                rect (309, 30, 100, 55);
                rotate (75.5);
                rect (370, -70, 55, 100);

                //eye
                resetMatrix();
                stroke (redColor, greenColor, blueColor);
                strokeWeight (22);
                point (xeye, 175);
                if (xeye >= 310|| xeye <= 290){
                    eyemove *= -1;
                    redColor = Math.floor(Math.random() * 256);
                    greenColor = Math.floor(Math.random() * 256);
                    blueColor = Math.floor(Math.random() * 256);
                }
                xeye += eyemove;

                //eyebrow
                resetMatrix();
                stroke ('black');
                strokeWeight (0);
                fill (0);
                shearX (.5);
                rect (180, ybrow, 50, 10);
                if (ybrow >= 165|| ybrow <= 158){
                    browmove *= -1;
                }
                ybrow += browmove;


                //hair
                resetMatrix();
                fill (241,204,143);
                circle (150, 130, 75);
               circle (180, 100, 75);
               circle (wigglex, wiggley, 100);
               if (wigglex >= 194|| wigglex <= 186 && wiggley >= 174|| wiggley <= 168){
                wigglin *= -1
               }
               wigglex += wigglin
               wiggley += wigglin
               circle (240, 180, 35);
               circle (250, 100, 130);
               circle (320, 110, 90);
               ellipse (340, 170, 40, 90);
               //mouth
               strokeWeight (6);
               line (230, mouthy, 270, mouthy);
                if (mouthy >= 274|| mouthy <= 268){
                    mouthmove *= -1;
                }
                mouthy += mouthmove;
               //title
               fill ('white');
               textSize (titlesize);
               if (titlesize >= 150|| titlesize <= 6){
                titlechange *= -1;
               }
               titlesize += titlechange;
               text ('Catching Up', 130, 500);
               //name
               textSize (30);
               fill (118, 158, 253)
               text ('Tidus Barnhart', namex, namey);
            switch (direction) {
                //more left
                case 0:
                    namex -= namemove;
                    if (namex <= 10){
                        direction = 1;
                    }
                    break;
                //move down
                case 1:
                    namey += namemove;
                    if (namey >= 570){
                        direction = 2
                    }
                    break;
                //move right
                case 2:
                    namex += namemove;
                    if (namex >= 275){
                        direction = 3
                    }
                    break;
                //move up
                case 3:
                    namey -= namemove;
                    if (namey <= 40){
                        direction = 0
                    }
                    break;
            }


            }
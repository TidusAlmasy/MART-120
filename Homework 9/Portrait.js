            function setup ()
            {
                createCanvas(500, 600);
            }

            function draw()
            {
                background(120);
                console.log("draw :D");
                stroke ('black')
                strokeWeight (0)
                fill (229, 204, 172);
                triangle (100, 450, 400, 450, 250, 300);
                rect (187, 280, 130, 100);
                fill (239, 224, 205);
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

                
                resetMatrix();
                stroke ('blue');
                strokeWeight (22);
                point (298, 175);
                resetMatrix();
                stroke ('black');
                strokeWeight (0);
                fill (0);
                shearX (.5);
                rect (180, 163, 50, 10);
                resetMatrix();
                fill (241,204,143);
                circle (150, 130, 75);
               circle (180, 100, 75);
               circle (190, 170, 100);
               circle (240, 180, 35);
               circle (250, 100, 130);
               circle (320, 110, 90);
               ellipse (340, 170, 40, 90);
               strokeWeight (6);
               line (230, 270, 270, 270);
               fill ('white')
               textSize (45);
               text ('Catching Up', 130, 500);
               textSize (30);
               fill (118, 158, 253)
               text ('Tidus Barnhart', 275, 590);


            }
function level4(){
    var cb1 = "#800000"
    var cb2 = "#802000"
    var cb3 = "#800020"

    // ITEM LIST
    // 4.01 - G Book
    // 4.02 - Hammer
    // 4.03 - Bucket
    // 4.04 - Bucket with sand
    // 4.05 - Knob
    // 4.06 - Crowbar
    // 4.07 - Faucet handle
    // 4.08 - C Cable
    // 4.09 - Software CD
    // 4.10 - A Book
    // 4.11 - B Book
    // 4.12 - C Book
    // 4.13 - D Book
    // 4.14 - E Book
    // 4.15 - F Book
    // 4.16 - A Cable

    // 0 - Intro screen
    //#region 
    // c0 - Continue
    l4s0c0 = new cuadro(700,580,100,20,"#00ff00","#80ff80",u,false,[changescr,1],u,"Continue",["20px Arial","#000000"])
    l4s0cs = [l4s0c0]
    l4s0 = new screen("#000000",l4s0cs,false,true,"text11ini.json")
    //#endregion
    // 1 - Room 11 - Wall 1
    //#region 
    // c0 - Door to 1R
    // c1 - Password computer
    // c2 - Computer light
    // c3 - Painting
    // c4 - Magenta knobs
    // c5 - To wall 4 (11)
    // c6 - To wall 2 (11)
    l4s1c0 = new cuadro(250,200,100,200,"#ff0000","#ff8080",u,u,u,["It's a red door. It's locked."])
    l4s1c1 = new cuadro(400,250,100,150,"#808080","#c0c0c0",true,u,[changescr,13],["It's a computer."])
    l4s1c2 = new cuadro(435,200,30,50,"#ff0000",u,u,u,u,["There's a red light over","the computer."])
    l4s1c3 = new cuadro(80,200,120,100,"#ffffff",u,true,u,[changescr,14],["Looks like a painting. It's","plain white, though."])
    l4s1c4 = new cuadro(80,340,120,20,"#ff00ff","#ff80ff",true,u,[changescr,15],["What's that?"])
    l4s1c5 = new cuadro(0,0,50,600,cb1,"#808080",true,u,[changescr,4])
    l4s1c6 = new cuadro(550,0,49,600,cb1,"#808080",true,u,[changescr,2])
    l4s1cs = [l4s1c0,l4s1c1,l4s1c2,l4s1c3,l4s1c4,l4s1c5,l4s1c6]
    l4s1 = new screen(cb1,l4s1cs)
    //#endregion
    // 2 - Room 11 - Wall 2
    //#region 
    // c0 - Control panel
    // c1 - Tube
    // c2 - Paha
    // c3 - Light linked to password PC
    // c4 - Light linked to software PC
    // c5 - Light linked to cables PC
    // c6 - Opening button
    // c7 - G Book
    // c8 - To wall 1 (11)
    // c9 - To wall 3 (11)
    l4s2c0 = new cuadro(50,300,500,100,"#808080",u,u,u,u,["It's some kind of control panel."])
    l4s2c1 = new cuadro(200,0,200,300,"#80ffff")
    l4s2c2 = new cuadro(260,75,80,150,"#ffc000","#ffe020",u,u,[changescr,37],["What!? There's a girl in that","cristal tube!"])
    l4s2c3 = new cuadro(100,320,100,20,"#ff0000",u,u,u,u,["It's a red light."])
    l4s2c4 = new cuadro(100,360,100,20,"#ff0000",u,u,u,u,["It's a red light."])
    l4s2c5 = new cuadro(400,320,100,20,"#ff0000",u,u,u,u,["It's a red light."])
    l4s2c6 = new cuadro(400,360,100,20,"#808000","#c0c000",u,u,[openPaha],["It's a button. It does","nothing when I press it."])
    l4s2c7 = new cuadro(400,270,10,30,"#0000ff","#8080ff",true,u,[simpleItemTake,[7,4.01,"G Book"]],["It's a book."])
    l4s2c8 = new cuadro(0,0,50,600,cb1,"#808080",true,u,[changescr,1])
    l4s2c9 = new cuadro(550,0,49,600,cb1,"#808080",true,u,[changescr,3])
    l4s2cs = [l4s2c0,l4s2c1,l4s2c2,l4s2c3,l4s2c4,l4s2c5,l4s2c6,l4s2c7,l4s2c8,l4s2c9]
    l4s2 = new screen(cb1,l4s2cs)
    //#endregion
    // 3 - Room 11 - Wall 3
    //#region 
    // c0 - Black door
    // c1 - Software computer
    // c2 - Computer light
    // c3 - Shelf with books
    // c4 - To wall 2 (11)
    // c5 - To wall 4 (11)
    l4s3c0 = new cuadro(250,200,100,200,"#000000","#404040",u,u,u,["This side of the door is","black. It is locked again."])
    l4s3c1 = new cuadro(400,250,100,150,"#808080","#c0c0c0",true,u,[changescr,16],["It's a computer."])
    l4s3c2 = new cuadro(435,200,30,50,"#ff0000",u,u,u,u,["There's a red light over","the computer."])
    l4s3c3 = new cuadro(80,240,120,100,"#804000","#c08040",true,u,[changescr,17],["It's a shelf with books"])
    l4s3c4 = new cuadro(0,0,50,600,cb1,"#808080",true,u,[changescr,2])
    l4s3c5 = new cuadro(550,0,49,600,cb1,"#808080",true,u,[changescr,4])
    l4s3cs = [l4s3c0,l4s3c1,l4s3c2,l4s3c3,l4s3c4,l4s3c5]
    l4s3 = new screen(cb1,l4s3cs)
    //#endregion
    // 4 - Room 11 - Wall 4
    //#region 
    // c0 - Green door
    // c1 - Blue trapdoor
    // c2 - Cable computer
    // c3 - Computer light
    // c4 - Yellow knobs
    // c5 - Furniture
    // c6 - To wall 3 (11)
    // c7 - To wall 1 (11)
    l4s4c0 = new cuadro(250,200,100,200,"#00ff00","#80ff80",u,u,[changescr,5],["It's a green door. It's locked."])
    l4s4c1 = new cuadro(250,0,100,50,"#0000ff","#8080ff",u,u,[changescr,9],["It's a blue trapdoor. It seems closed."])
    l4s4c2 = new cuadro(100,250,100,150,"#808080","#c0c0c0",true,u,[changescr,18],["It's a computer."])
    l4s4c3 = new cuadro(135,200,30,50,"#ff0000",u,u,u,u,["There's a red light over","the computer."])
    l4s4c4 = new cuadro(390,200,120,20,"#ffff00","#ffff80",true,u,[changescr,19],["What's that?"])
    l4s4c5 = new cuadro(390,300,120,100,"#008080","#40c0c0",true,u,[changescr,20],["It's a piece of furniture."])
    l4s4c6 = new cuadro(0,0,50,600,cb1,"#808080",true,u,[changescr,3])
    l4s4c7 = new cuadro(550,0,49,600,cb1,"#808080",true,u,[changescr,1])
    l4s4cs = [l4s4c0,l4s4c1,l4s4c2,l4s4c3,l4s4c4,l4s4c5,l4s4c6,l4s4c7]
    l4s4 = new screen(cb1,l4s4cs)
    //#endregion
    // 5 - Room 12 - Wall 1
    //#region 
    // c0 - Trapdoor
    // c1 - Carpet
    // c2 - Carpet section
    // c3 - Password, part 1
    // c4 - Desk leg 1
    // c5 - Desk leg 2
    // c6 - Desk
    // c7 - Laptop
    // c8 - To wall 4 (12)
    // c9 - To wall 2 (12)
    l4s5c0 = new cuadro(250,0,100,50,"#0000ff","#8080ff",u,u,u,["It's a blue trapdoor. It seems closed."])
    l4s5c1 = new cuadro(100,500,400,100,"#ff0080",u,u,u,u,["It's a very bright-colored carpet."])
    l4s5c2 = new cuadro(300,500,200,50,"#ff0080","#ff80c0",true,u,[simpleItemUse,[4.02,takeNailOut]],["The corner of the carpet has","a nail. I can't move it."])
    l4s5c3 = new cuadro(300,500,200,50,cb2,u,u,false,u,["What are those numbers for?"],"159970+",["50px Comic Sans MS","#000000"])
    l4s5c4 = new cuadro(185,300,30,75,"#a0a000")
    l4s5c5 = new cuadro(385,300,30,75,"#a0a000")
    l4s5c6 = new cuadro(185,250,230,50,"#a0a000",u,u,u,u,["It's a desk."])
    l4s5c7 = new cuadro(250,150,100,100,"#606060","#a0a0a0",true,u,[changescr,21],["There's a laptop on the desk."])
    l4s5c8 = new cuadro(0,0,50,600,cb2,"#808080",true,u,[changescr,8])
    l4s5c9 = new cuadro(550,0,49,600,cb2,"#808080",true,u,[changescr,6])
    l4s5cs = [l4s5c0,l4s5c1,l4s5c2,l4s5c3,l4s5c4,l4s5c5,l4s5c6,l4s5c7,l4s5c8,l4s5c9]
    l4s5 = new screen(cb2,l4s5cs)
    //#endregion
    // 6 - Room 12 - Wall 2
    //#region 
    // c0 - Red door
    // c1 - Side table leg
    // c2 - Side table
    // c3 - Persephonia
    // c4 - Password, part 2
    // c5 - Bucket
    // c6 - To wall 1 (12)
    // c7 - To wall 3 (12)
    l4s6c0 = new cuadro(250,200,100,200,"#ff0000","#ff8080",u,u,u,["It's a red door. It's locked."])
    l4s6c1 = new cuadro(140,320,20,80,"#808040",u,u,u,u,["It's a side table."])
    l4s6c2 = new cuadro(100,300,100,20,"#808040",u,u,u,u,["It's a side table."])
    l4s6c3 = new cuadro(130,240,40,60,"#ffc0c0","#ffe0e0",true,u,[changescr,22],["There's a doll on the table."])
    l4s6c4 = new cuadro(400,350,100,50,cb2,u,u,false,u,["There's something written","on the wall."],"+304213",["12px Comic Sans MS","#000000"])
    l4s6c5 = new cuadro(400,300,100,100,"#0000ff","#8080ff",true,u,[getBucket],["It's a bucket."])
    l4s6c6 = new cuadro(0,0,50,600,cb2,"#808080",true,u,[changescr,5])
    l4s6c7 = new cuadro(550,0,49,600,cb2,"#808080",true,u,[changescr,7])
    l4s6cs = [l4s6c0,l4s6c1,l4s6c2,l4s6c3,l4s6c4,l4s6c5,l4s6c6,l4s6c7]
    l4s6 = new screen(cb2,l4s6cs)
    //#endregion
    // 7 - Room 12 - Wall 3
    //#region 
    // c0 - Green door
    // c1 - TD machine to Sand Dimension
    // c2 - Faucet
    // c3 - Small sand
    // c4 - Big sand
    // c5 - Temporal bucket
    // c6 - To wall 2 (12)
    // c7 - To wall 4 (12)
    l4s7c0 = new cuadro(250,200,100,200,"#00ff00","#80ff80",true,u,[changescr,2],["The green door is open."])
    l4s7c1 = new cuadro(400,250,100,150,"#404040","#c0c0c0",true,u,[changescr,23],["Another of those machines."])
    l4s7c2 = new cuadro(100,250,100,50,"#00c0c0","#00e0e0",true,u,[changescr,24],["What's that?"])
    l4s7c3 = new cuadro(125,300,50,50,"#c0c000","#e0e000",u,false,[simpleItemUse,[4.03,takeSand]],["This sand came from the faucet!"])
    l4s7c4 = new cuadro(100,350,100,50,"#c0c000","#e0e000",u,false,[simpleItemUse,[4.03,takeSand]],["This sand came from the faucet!"])
    l4s7c5 = new cuadro(100,300,100,100,"#0000ff",u,u,false)
    l4s7c6 = new cuadro(0,0,50,600,cb2,"#808080",true,u,[changescr,6])
    l4s7c7 = new cuadro(550,0,49,600,cb2,"#808080",true,u,[changescr,8])
    l4s7cs = [l4s7c0,l4s7c1,l4s7c2,l4s7c3,l4s7c4,l4s7c5,l4s7c6,l4s7c7]
    l4s7 = new screen(cb2,l4s7cs)
    //#endregion
    // 8 - Room 12 - Wall 4
    //#region 
    // c0 - Door
    // c1 - Knob over door
    // c2 - Fallen knob
    // c3 - Pillar
    // c4 - Book
    // c5 - Graffiti, part 1
    // c6 - Graffiti, part 2
    // c7 - Removable wood
    // c8 - Static wood
    // c9 - To wall 3 (12)
    // c10 - To wall 1 (12)
    l4s8c0 = new cuadro(250,200,100,200,"#ff0000","#ff8080",true,u,[smashDoor],["It's a red door. It's closed."])
    l4s8c1 = new cuadro(260,190,20,10,"#e0e0e0","#ffffff",u,u,u,["There's something over the door","threshold. Would it fall","if I smash the door?"])
    l4s8c2 = new cuadro(220,390,20,10,"#e0e0e0","#ffffff",u,false,[simpleItemTake,[2,4.05,"Knob"]],["I finally made this thing","fall."])
    l4s8c3 = new cuadro(120,300,60,100,"#c0c0c0",u,u,u,u,["It's a small pillar."])
    l4s8c4 = new cuadro(120,280,60,20,"#0080ff","#80c0ff",true,u,[changescr,25],["There's a book over the pillar."])
    l4s8c5 = new cuadro(350,300,200,50,cb2,u,u,u,u,["Who is this talking about?"],"Her name is",["30px Comic Sans MS","#ff4000"])
    l4s8c6 = new cuadro(350,350,200,50,cb2,u,u,u,u,["I need the full name."],"Persephonia",["30px Comic Sans MS","#ff4000"])
    l4s8c7 = new cuadro(350,350,100,50,"#808000",u,true,u,[simpleItemUse,[4.06,takeWoodOut]],["A piece of wood is","covering the wall"])
    l4s8c8 = new cuadro(450,350,100,50,"#808000",u,u,u,u,["A piece of wood is","covering the wall"])
    l4s8c9 = new cuadro(0,0,50,600,cb2,"#808080",true,u,[changescr,7])
    l4s8c10 = new cuadro(550,0,49,600,cb2,"#808080",true,u,[changescr,5])
    l4s8cs = [l4s8c0,l4s8c1,l4s8c2,l4s8c3,l4s8c4,l4s8c5,l4s8c6,l4s8c7,l4s8c8,l4s8c9,
            l4s8c10]
    l4s8 = new screen(cb2,l4s8cs)
    //#endregion
    // 9 - Room 16 - Wall 1
    //#region 
    // c0 - Door
    // c1 - Open trapdoor
    // c2 - Cd player table
    // c3 - CD player
    // c4-c11 - Painted spaces
    // c12 - To wall 4 (16)
    // c13 - To wall 2 (16)
    l4s9c0 = new cuadro(250,200,100,200,"#00ff00","#80ff80",u,u,u,["It's a green door. It's locked."])
    l4s9c1 = new cuadro(250,550,100,50,"#0000ff","#8080ff",true,u,[changescr,4],["The trapdoor is open."])
    l4s9c2 = new cuadro(400,350,100,50,"#804000")
    l4s9c3 = new cuadro(400,220,100,130,"#808080","#a0a0a0",true,u,[changescr,26],["It's some kind of CD player."])
    l4s9c4 = new cuadro(100,50,50,100,"#ff0000",u,u,u,u,["The wall is painted in many colors."])
    l4s9c5 = new cuadro(150,50,50,100,"#ffffff",u,u,u,u,["The wall is painted in many colors."])
    l4s9c6 = new cuadro(200,50,50,100,"#00ffff",u,u,u,u,["The wall is painted in many colors."])
    l4s9c7 = new cuadro(250,50,50,100,"#ff00ff",u,u,u,u,["The wall is painted in many colors."])
    l4s9c8 = new cuadro(300,50,50,100,"#000000",u,u,u,u,["The wall is painted in many colors."])
    l4s9c9 = new cuadro(350,50,50,100,"#00ff00",u,u,u,u,["The wall is painted in many colors."])
    l4s9c10 = new cuadro(400,50,50,100,"#ffff00",u,u,u,u,["The wall is painted in many colors."])
    l4s9c11 = new cuadro(450,50,50,100,"#0000ff",u,u,u,u,["The wall is painted in many colors."])
    l4s9c12 = new cuadro(0,0,50,600,cb3,"#808080",true,u,[changescr,12])
    l4s9c13 = new cuadro(550,0,49,600,cb3,"#808080",true,u,[changescr,10])
    l4s9cs = [l4s9c0,l4s9c1,l4s9c2,l4s9c3,l4s9c4,l4s9c5,l4s9c6,l4s9c7,l4s9c8,l4s9c9,
        l4s9c10,l4s9c11,l4s9c12,l4s9c13]
    l4s9 = new screen(cb3,l4s9cs)
    //#endregion
    // 10 - Room 16 - Wall 2
    //#region 
    // c0 - Door
    // c1 - Trash can
    // c2-c9 - Garbage
    // c10 - Faucet handle
    // c11-c20 - More garbage
    // c21 - To wall 1 (16)
    // c22 - To wall 3 (16)
    l4s10c0 = new cuadro(250,200,100,200,"#ff0000","#ff8080",u,u,u,["It's a red door. It's locked."])
    l4s10c1 = new cuadro(100,320,100,80,"#ff00ff","#ff80ff",true,u,[changescr,27],["It's a trash can."])
    l4s10c2 = new cuadro(400,440,30,30,"#c04000",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c3 = new cuadro(430,440,30,30,"#c00040",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c4 = new cuadro(460,440,30,30,"#00c040",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c5 = new cuadro(385,470,30,30,"#4000c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c6 = new cuadro(415,470,30,30,"#0040c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c7 = new cuadro(445,470,30,30,"#00c040",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c8 = new cuadro(475,470,30,30,"#4000c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c9 = new cuadro(375,500,30,30,"#0040c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c10 = new cuadro(405,500,30,30,"#c0c0c0",u,true,u,[simpleItemTake,[10,4.07,"Faucet handle"]],["There's something metallic here."])
    l4s10c11 = new cuadro(435,500,30,30,"#40c000",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c12 = new cuadro(465,500,30,30,"#00c040",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c13 = new cuadro(100,430,30,30,"#40c000",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c14 = new cuadro(80,460,30,30,"#00c040",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c15 = new cuadro(110,460,30,30,"#4000c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c16 = new cuadro(90,490,30,30,"#c0c0c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c17 = new cuadro(120,490,30,30,"#c04000",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c18 = new cuadro(95,520,30,30,"#40c000",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c19 = new cuadro(125,520,30,30,"#4000c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c20 = new cuadro(155,520,30,30,"#c0c0c0",u,u,u,u,["There's a lot of garbage","in the floor."])
    l4s10c21 = new cuadro(0,0,50,600,cb3,"#808080",true,u,[changescr,9])
    l4s10c22 = new cuadro(550,0,49,600,cb3,"#808080",true,u,[changescr,11])
    l4s10cs = [l4s10c0,l4s10c1,l4s10c2,l4s10c3,l4s10c4,l4s10c5,l4s10c6,l4s10c7,l4s10c8,l4s10c9,
        l4s10c10,l4s10c11,l4s10c12,l4s10c13,l4s10c14,l4s10c15,l4s10c16,l4s10c17,l4s10c18,l4s10c19,
        l4s10c20,l4s10c21,l4s10c22]
    l4s10 = new screen(cb3,l4s10cs)
    //#endregion
    // 11 - Room 16 - Wall 3
    //#region 
    // c0 - TD machine to Poison Dimension
    // c1 - CD shelf
    // c2 - Electrified hammer
    // c3 - Box with colors
    // c4 - To wall 2 (16)
    // c5 - To wall 4 (16)
    l4s11c0 = new cuadro(100,250,100,150,"#404040","#c0c0c0",true,u,[changescr,28],["Another of those machines."])
    l4s11c1 = new cuadro(400,200,100,50,"#c08000","#ffc040",true,u,[changescr,29],["It's a shelf."])
    l4s11c2 = new cuadro(400,350,100,50,"#808080","#c0c0c0",true,u,[changescr,30],["It looks like a hammer, but","has something next to it."])
    l4s11c3 = new cuadro(250,350,100,50,"#80ff00","#c0ff80",true,u,[changescr,31],["It's some kind of box."])
    l4s11c4 = new cuadro(0,0,50,600,cb3,"#808080",true,u,[changescr,10])
    l4s11c5 = new cuadro(550,0,49,600,cb3,"#808080",true,u,[changescr,12])
    l4s11cs = [l4s11c0,l4s11c1,l4s11c2,l4s11c3,l4s11c4,l4s11c5]
    l4s11 = new screen(cb3,l4s11cs)
    //#endregion
    // 12 - Room 16 - Wall 4
    //#region 
    // c0 - Door
    // c1 - Crafting table
    // c2 - Recycling bin
    // c3-c7 - Trash
    // c8-c13 - Trash in recycling bin
    // c14 - C Cable
    // c15 - Broken spot in bin
    // c16 - To wall 3 (16)
    // c17 - To wall 1 (16)
    l4s12c0 = new cuadro(250,200,100,200,"#ff0000","#ff8080",u,u,u,["It's a red door. It's locked."])
    l4s12c1 = new cuadro(100,250,100,150,"#ff8000","#ffc080",true,u,[changescr,32],["It's a crafting table."])
    l4s12c2 = new cuadro(400,270,90,130,"#ffff00","#ffff80",true,u,[changescr,33],["It's a recycling bin."])
    l4s12c3 = new cuadro(160,420,30,30,"#c04000",u,u,u,u,["There's trash all over","the place."])
    l4s12c4 = new cuadro(310,425,30,30,"#4000c0",u,u,u,u,["There's trash all over","the place."])
    l4s12c5 = new cuadro(105,505,30,30,"#00c040",u,u,u,u,["There's trash all over","the place."])
    l4s12c6 = new cuadro(210,500,30,30,"#0040c0",u,u,u,u,["There's trash all over","the place."])
    l4s12c7 = new cuadro(305,510,30,30,"#40c000",u,u,u,u,["There's trash all over","the place."])
    l4s12c8 = new cuadro(390,420,20,20,"#40c000",u,u,false,u,["Trash came out from the broken","bin."])
    l4s12c9 = new cuadro(490,410,20,20,"#00c040",u,u,false,u,["Trash came out from the broken","bin."])
    l4s12c10 = new cuadro(380,450,20,20,"#00c040",u,u,false,u,["Trash came out from the broken","bin."])
    l4s12c11 = new cuadro(480,445,20,20,"#40c000",u,u,false,u,["Trash came out from the broken","bin."])
    l4s12c12 = new cuadro(410,465,20,20,"#40c000",u,u,false,u,["Trash came out from the broken","bin."])
    l4s12c13 = new cuadro(440,460,20,20,"#00c040",u,u,false,u,["Trash came out from the broken","bin."])
    l4s12c14 = new cuadro(430,415,10,20,"#808080","#c0c0c0",u,false,[simpleItemTake,[14,4.08,"C Cable"]],["It's a cable."])
    l4s12c15 = new cuadro(410,370,70,30,"#000000",u,u,false,u,["The bin broke."])
    l4s12c16 = new cuadro(0,0,50,600,cb3,"#808080",true,u,[changescr,11])
    l4s12c17 = new cuadro(550,0,49,600,cb3,"#808080",true,u,[changescr,9])
    l4s12cs = [l4s12c0,l4s12c1,l4s12c2,l4s12c3,l4s12c4,l4s12c5,l4s12c6,l4s12c7,l4s12c8,l4s12c9,
        l4s12c10,l4s12c11,l4s12c12,l4s12c13,l4s12c14,l4s12c15,l4s12c16,l4s12c17]
    l4s12 = new screen(cb3,l4s12cs)
    //#endregion
    // 13 - Password computer
    //#region 
    // c0 - Computer body
    // c1 - Upper screen
    // c2 - Lower screen
    // c3-c18 - Buttons
    // c19 - Big cover
    // c20 - Small cover
    // c21 - Enter button
    // c22 - Indicator light
    // c23 - Back
    l4s13c0 = new cuadro(50,0,500,550,"#808080")
    l4s13c1 = new cuadro(100,50,400,100,"#000000",u,u,u,u,["I wonder what's the password."],"Insert password",["30px Courier New","#00ff00"])
    l4s13c2 = new cuadro(100,150,400,100,"#000000",u,u,u,u,["I wonder what's the password."],"****",["30px Courier New","#00ff00"])
    l4s13c3 = new cuadro(200,300,50,50,"#008080","#80ffff",true,u,[pressButton,"1"],u,"1",["50px Arial","#00ff00"])
    l4s13c4 = new cuadro(250,300,50,50,"#008080","#80ffff",true,u,[pressButton,"2"],u,"2",["50px Arial","#00ff00"])
    l4s13c5 = new cuadro(300,300,50,50,"#008080","#80ffff",true,u,[pressButton,"3"],u,"3",["50px Arial","#00ff00"])
    l4s13c6 = new cuadro(350,300,50,50,"#008080","#80ffff",true,u,[pressButton,"4"],u,"4",["50px Arial","#00ff00"])
    l4s13c7 = new cuadro(200,350,50,50,"#008080","#80ffff",u,false,[pressButton,"5"],u,"5",["50px Arial","#00ff00"])
    l4s13c8 = new cuadro(250,350,50,50,"#008080","#80ffff",u,false,[pressButton,"6"],u,"6",["50px Arial","#00ff00"])
    l4s13c9 = new cuadro(300,350,50,50,"#008080","#80ffff",u,false,[pressButton,"7"],u,"7",["50px Arial","#00ff00"])
    l4s13c10 = new cuadro(350,350,50,50,"#008080","#80ffff",u,false,[pressButton,"8"],u,"8",["50px Arial","#00ff00"])
    l4s13c11 = new cuadro(200,400,50,50,"#008080","#80ffff",u,false,[pressButton,"9"],u,"9",["50px Arial","#00ff00"])
    l4s13c12 = new cuadro(250,400,50,50,"#008080","#80ffff",u,false,[pressButton,"A"],u,"A",["50px Arial","#00ff00"])
    l4s13c13 = new cuadro(300,400,50,50,"#008080","#80ffff",u,false,[pressButton,"B"],u,"B",["50px Arial","#00ff00"])
    l4s13c14 = new cuadro(350,400,50,50,"#008080","#80ffff",u,false,[pressButton,"C"],u,"C",["50px Arial","#00ff00"])
    l4s13c15 = new cuadro(200,450,50,50,"#008080","#80ffff",u,false,[pressButton,"D"],u,"D",["50px Arial","#00ff00"])
    l4s13c16 = new cuadro(250,450,50,50,"#008080","#80ffff",u,false,[pressButton,"E"],u,"E",["50px Arial","#00ff00"])
    l4s13c17 = new cuadro(300,450,50,50,"#008080","#80ffff",u,false,[pressButton,"F"],u,"F",["50px Arial","#00ff00"])
    l4s13c18 = new cuadro(350,450,50,50,"#008080","#80ffff",u,false,[pressButton,"0"],u,"0",["50px Arial","#00ff00"])
    l4s13c19 = new cuadro(200,350,200,150,"#008080")
    l4s13c20 = new cuadro(200,400,200,100,"#008080",u,u,false)
    l4s13c21 = new cuadro(425,350,100,100,"#808000",u,u,u,[checkPass],["It's a big button."])
    l4s13c22 = new cuadro(75,325,100,200,"#ff0000",u,u,u,u,["It's a red light."])
    l4s13c23 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,1],u,"Back",["20px Arial Black","#ffffff"])
    l4s13cs = [l4s13c0,l4s13c1,l4s13c2,l4s13c3,l4s13c4,l4s13c5,l4s13c6,l4s13c7,l4s13c8,l4s13c9,
        l4s13c10,l4s13c11,l4s13c12,l4s13c13,l4s13c14,l4s13c15,l4s13c16,l4s13c17,l4s13c18,l4s13c19,
        l4s13c20,l4s13c21,l4s13c22,l4s13c23]
    l4s13 = new screen(cb1,l4s13cs)
    //#endregion
    // 14 - Painting
    //#region 
    // c0 - White painting
    // c1 - Painting with sand
    // c2 - Painting with code
    // c3 - Back
    l4s14c0 = new cuadro(50,100,500,400,"#ffffff",u,true,u,[simpleItemUse,[4.04,throwSand]],["There's something sticky on the","surface of the painting."])
    l4s14c1 = new cuadro(50,100,500,400,"#c0c000","#e0e000",u,false,[shakePainting],["The sand stuck to the painting.","Now I have to shake it."])
    l4s14c2 = new cuadro(50,100,500,400,"#ffffff",u,u,false,u,["Some numbers appeared!"],"1132",["200px Comic Sans MS","#c0c000"])
    l4s14c3 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,1],u,"Back",["20px Arial Black","#ffffff"])
    l4s14cs = [l4s14c0,l4s14c1,l4s14c2,l4s14c3]
    l4s14 = new screen(cb1,l4s14cs)
    //#endregion
    // 15 - Magenta knobs
    //#region 
    // c0 - Base
    // c1-c7 - Knobs
    // c8 - Confirm button
    // c9 - Gap for knob 5
    // c10 - Back
    l4s15c0 = new cuadro(0,260,599,75,"#ff00ff")
    l4s15c1 = new cuadro(30,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[5,1]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s15c2 = new cuadro(105,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[5,2]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s15c3 = new cuadro(180,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[5,3]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s15c4 = new cuadro(255,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[5,4]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s15c5 = new cuadro(330,275,15,45,"#008080","#00c0c0",u,false,[turnKnob,[5,5]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s15c6 = new cuadro(405,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[5,6]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s15c7 = new cuadro(480,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[5,7]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s15c8 = new cuadro(530,270,55,55,"#008000","#00c000",true,u,[open16],["It's a button. It apparently does","nothing."])
    l4s15c9 = new cuadro(330,290,15,15,"#000000","#404040",true,u,[simpleItemUse,[4.05,putKnob]],["There's a knob missing."])
    l4s15c10 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,1],u,"Back",["20px Arial Black","#ffffff"])
    l4s15cs = [l4s15c0,l4s15c1,l4s15c2,l4s15c3,l4s15c4,l4s15c5,l4s15c6,l4s15c7,l4s15c8,l4s15c9,l4s15c10]
    l4s15 = new screen(cb1,l4s15cs)
    //#endregion
    // 16 - Software computer
    //#region 
    // c0 - Computer body
    // c1 - Main screen
    // c2 - First line
    // c3 - Second line
    // c4 - Third line
    // c5 - Fourth line
    // c6 - CD acceptation light
    // c7 - External CD slot
    // c8 - Internal CD slot
    // c9 - Indicator light
    // c10 - Inserted CD 1
    // c11 - Inserted CD 2
    // c12 - Back
    l4s16c0 = new cuadro(50,0,500,550,"#808080")
    l4s16c1 = new cuadro(100,50,400,200,"#000000")
    l4s16c2 = new cuadro(100,50,400,50,"#000000",u,u,u,u,["It seems this computer lacks some","software."],"Software needed     ",["30px Courier New","#00ff00"])
    l4s16c3 = new cuadro(100,100,400,50,"#000000",u,u,false,u,["Is it working?"],"Initializing...     ",["30px Courier New","#00ff00"])
    l4s16c4 = new cuadro(100,150,400,50,"#000000",u,u,false,u,["Is it working?"],"Systems ready       ",["30px Courier New","#00ff00"])
    l4s16c5 = new cuadro(100,200,400,50,"#000000",u,u,false,u,["Is it working?"],"Sending instructions",["30px Courier New","#00ff00"])
    l4s16c6 = new cuadro(250,300,200,50,"#000000",u,u,u,u,["It's a light. It's off."])
    l4s16c7 = new cuadro(215,385,270,70,"#404000")
    l4s16c8 = new cuadro(225,395,250,50,"#202020","#404040",true,u,[simpleItemUse,[4.09,acceptCD]],["It's a CD slot."])
    l4s16c9 = new cuadro(75,325,100,200,"#ff0000",u,u,u,u,["It's a red light."])
    l4s16c10 = new cuadro(230,420,240,105,"#80ffff",u,u,false)
    l4s16c11 = new cuadro(230,420,240,50,"#80ffff",u,u,false)
    l4s16c12 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,3],u,"Back",["20px Arial Black","#ffffff"])
    l4s16cs = [l4s16c0,l4s16c1,l4s16c2,l4s16c3,l4s16c4,l4s16c5,l4s16c6,l4s16c7,l4s16c8,l4s16c9,
        l4s16c10,l4s16c11,l4s16c12]
    l4s16 = new screen(cb1,l4s16cs)
    //#endregion
    // 17 - Shelf with books
    //#region 
    // c0 - Upper shelf
    // c1 - Lower shelf
    // c2-c7 - Spaces with books
    // c8 - Empty space
    // c9 - Back
    l4s17c0 = new cuadro(30,150,525,50,"#804000")
    l4s17c1 = new cuadro(30,400,525,50,"#804000")
    l4s17c2 = new cuadro(30,200,75,200,"#00ff00","#80ff80",true,u,[takeBook,[2,4.12,"C Book"]],["There are several books here."],"C",["75px Times New Roman","#000000"])
    l4s17c3 = new cuadro(105,200,75,200,"#00ffff","#80ffff",true,u,[takeBook,[3,4.14,"E Book"]],["There are several books here."],"E",["75px Times New Roman","#000000"])
    l4s17c4 = new cuadro(180,200,75,200,"#0080ff","#80c0ff",true,u,[takeBook,[4,4.15,"F Book"]],["There are several books here."],"F",["75px Times New Roman","#000000"])
    l4s17c5 = new cuadro(255,200,75,200,"#ffff00","#ffff80",true,u,[takeBook,[5,4.10,"A Book"]],["There are several books here."],"A",["75px Times New Roman","#000000"])
    l4s17c6 = new cuadro(330,200,75,200,"#00ff80","#80ffc0",true,u,[takeBook,[6,4.13,"D Book"]],["There are several books here."],"D",["75px Times New Roman","#000000"])
    l4s17c7 = new cuadro(405,200,75,200,"#80ff00","#c0ff80",true,u,[takeBook,[7,4.11,"B Book"]],["There are several books here."],"B",["75px Times New Roman","#000000"])
    l4s17c8 = new cuadro(480,200,75,200,"#800000",u,u,u,[putBook],["There are several books here."]," ",["75px Times New Roman","#000000"])
    l4s17c9 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,3],u,"Back",["20px Arial Black","#ffffff"])
    l4s17cs = [l4s17c0,l4s17c1,l4s17c2,l4s17c3,l4s17c4,l4s17c5,l4s17c6,l4s17c7,l4s17c8,l4s17c9]
    l4s17 = new screen(cb1,l4s17cs)
    //#endregion
    // 18 - Cable computer
    //#region 
    // c0 - Computer body
    // c1 - Line with error
    // c2 - Rest of blue screen
    // c3 - Confimation line
    // c4 - Rest of black screen
    // c5 - Line with instruction
    // c6 - Indicator light
    // c7 - Enter button
    // c8 - Access to computer side
    // c9 - Back
    l4s18c0 = new cuadro(50,0,500,550,"#808080")
    l4s18c1 = new cuadro(100,50,400,50,"#0000ff",u,u,u,u,["I wonder what's wrong","with this computer."],"ERROR......         ",["30px Courier New","#ffffff"])
    l4s18c2 = new cuadro(100,100,400,150,"#0000ff")
    l4s18c3 = new cuadro(100,50,400,50,"#000000",u,u,false,u,["It works now!"],"System restablished.",["30px Courier New","#00ff00"])
    l4s18c4 = new cuadro(100,100,400,100,"#000000",u,u,false,u,["It works now!"])
    l4s18c5 = new cuadro(100,200,400,50,"#000000",u,u,false,u,["It works now!"],"Please press button.",["30px Courier New","#00ff00"])
    l4s18c6 = new cuadro(75,325,100,200,"#ff0000",u,u,u,u,["It's a red light."])
    l4s18c7 = new cuadro(400,350,100,100,"#808000",u,u,u,[activateCPC],["It's a big button."])
    l4s18c8 = new cuadro(550,400,25,150,cb1,"#a02020",true,u,[changescr,34],["There's something by the","computer's side."])
    l4s18c9 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    l4s18cs = [l4s18c0,l4s18c1,l4s18c2,l4s18c3,l4s18c4,l4s18c5,l4s18c6,l4s18c7,l4s18c8,l4s18c9]
    l4s18 = new screen(cb1,l4s18cs)
    //#endregion
    // 19 - Yellow knobs
    //#region 
    // c0 - Base
    // c1-c7 - Knobs
    // c8 - Confirm button
    // c9 - Back
    l4s19c0 = new cuadro(0,260,599,75,"#ffff00")
    l4s19c1 = new cuadro(30,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[6,1]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s19c2 = new cuadro(105,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[6,2]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s19c3 = new cuadro(180,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[6,3]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s19c4 = new cuadro(255,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[6,4]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s19c5 = new cuadro(330,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[6,5]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s19c6 = new cuadro(405,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[6,6]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s19c7 = new cuadro(480,275,15,45,"#008080","#00c0c0",true,u,[turnKnob,[6,7]],["They are some strange knobs.","I can turn them, but, are they","useful?"])
    l4s19c8 = new cuadro(530,270,55,55,"#000080","#0000c0",true,u,[open12],["It's a button. It apparently does","nothing."])
    l4s19c9 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    l4s19cs = [l4s19c0,l4s19c1,l4s19c2,l4s19c3,l4s19c4,l4s19c5,l4s19c6,l4s19c7,l4s19c8,l4s19c9]
    l4s19 = new screen(cb1,l4s19cs)
    //#endregion
    // 20 - Furniture
    // c0 - Furniture body
    // c1 - Grip
    // c2 - Access to side
    // c3 - Opened door
    // c4 - Yellow code
    // c5 - Upper space
    // c6 - Lower space
    // c7 - A Cable
    // c8 - Double bottom
    // c9 - Crowbar
    // c10 - Back
    l4s20c0 = new cuadro(120,200,360,300,"#008080")
    l4s20c1 = new cuadro(290,470,20,20,"#c08000","#ffc000",u,u,[openFurni],["It's locked."])
    l4s20c2 = new cuadro(480,200,20,300,cb1,"#a02020",true,u,[sa35],["???"])
    l4s20c3 = new cuadro(130,0,340,210,"#408080",u,u,false)
    l4s20c4 = new cuadro(130,100,340,100,"#408080",u,u,false,u,["There's something","written here."],"-||-|--",["50px Courier New","#ffff00"])
    l4s20c5 = new cuadro(130,210,340,140,"#004040",u,u,false)
    l4s20c6 = new cuadro(130,350,340,140,"#008080",u,u,false,[hitDoBo],["It sounds hollow."])
    l4s20c7 = new cuadro(200,340,200,10,"#00ff00","#80ff80",u,false,[simpleItemTake,[7,4.16,"A Cable"]],["It's a cable."])
    l4s20c8 = new cuadro(140,360,320,120,"#004040",u,u,false)
    l4s20c9 = new cuadro(150,420,300,60,"#808080","#c0c0c0",u,false,[simpleItemTake,[9,4.06,"Crowbar"]],["It's a crowbar."])
    l4s20c10 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    l4s20cs = [l4s20c0,l4s20c1,l4s20c2,l4s20c3,l4s20c4,l4s20c5,l4s20c6,l4s20c7,l4s20c8,l4s20c9,l4s20c10]
    l4s20 = new screen(cb1,l4s20cs)

    l4ss = [l4s0,l4s1,l4s2,l4s3,l4s4,l4s5,l4s6,l4s7,l4s8,l4s9,
        l4s10,l4s11,l4s12,l4s13,l4s14,l4s15,l4s16,l4s17,l4s18,l4s19,
        l4s20]

    function acceptCD(){ // Accepts software CD in the corresponding computer.
        console.log("holi")
    }
    function activateCPC(){ // Activates light related to cable computer.
        console.log("holi")
    }
    function checkPass(){ // Checks if the password is right. Activates the light or resets the password screen.
        console.log("holi")
    }
    function getBucket(){ // Takes the bucket, shows password and removes cheatblock.
        console.log("holi")
    }
    function hitDoBo(){ // Hits double bottom until broken.
        console.log("holi")
    }
    function open12(){ // Opens the door to room 12.
        console.log("holi")
    }
    function open16(){ // Opens the trapdoor to room 16.
        console.log("holi")
    }
    function openFurni(){ // Opens the furniture.
        console.log("holi")
    }
    function openPaha(){ // Opens the cristal tube and releases Paha.
        console.log("holi")
    }
    function pressButton(str){ // Adds the current symbol to the password. Activates big button when password is full.
        console.log("holi")
    }
    function putBook(){ // Places the current book on the shelf. Checks the order and allows to place the final book.
        console.log("holi")
    }
    function putKnob(){ // Places the missing knob.
        console.log("holi")
    }
    function sa35(){ // Special access to screen 35. Removes magenta knobs cheatblock.
        console.log("holi")
    }
    function shakePainting(){ // Shakes painting, shows password, and removes cheatblock.
        console.log("holi")
    }
    function smashDoor(){ // Smashes the door until the knob falls.
        console.log("holi")
    }
    function takeBook(ccn){ // Takes a single book from shelf, blocks the other books, and unblocks the free spaces.
        console.log("holi")
    }
    function takeNailOut(){ // Removes the side of the carpet, shows password and removes cheatblock.
        console.log("holi")
    }
    function takeSand(){ // Takes sand using the bucket.
        console.log("holi")
    }
    function takeWoodOut(){ // Partially removes the wood from the wall, and removes cheatblock.
        console.log("holi")
    }
    function throwSand(){ // Throws sand to the white painting.
        console.log("holi")
    }
    function turnKnob(){ // Turns the corresponding knob, and modifies the corresponding cheatblock.
        console.log("holi")
    }
    
    return{
        screens: l4ss,
        // 0 - Parts of second password
        // 1 - Times door is smashed
        // 2 - Missing parts of Persephonia's name
        // 3 - Number of current password
        // 4 - First password
        // 5 - State for magenta knobs
        // 6 - State for yellow knobs
        // 7 - Yellow code
        // 8 - Magenta code
        // 9 - Times double bottom is hit
        cheatblock: [2,0,2,1,true,
            [1,1,1,1,1,1,1],[1,1,1,1,1,1,1],
            true,true,0]
    }
}
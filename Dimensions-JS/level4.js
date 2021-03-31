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
    // 4.17 - Software instructions
    // 4.18 - Clean CD
    // 4.19 - B Cable
    // 4.20 - Hacking badge
    // 4.21 - CD 1
    // 4.22 - CD 2
    // 4.23 - CD 3
    // 4.24 - DVD
    // 4.25 - Music CD
    // 4.26 - Rubber shards
    // 4.27 - Silicon glue
    // 4.28 - Rubber gloves

    // 0 - Intro screen
    //#region 
    // c0 - Continue
    l4s0c0 = new cuadro(700,580,100,20,"#00ff00","#80ff80",u,false,[changescr,38],u,"Continue",["20px Arial","#000000"])
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
    l4s2c2 = new cuadro(260,75,80,150,"#ffc000","#ffe020",u,u,[changescr,38],["What!? There's a girl in that","cristal tube!"])
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
    l4s8c4 = new cuadro(125,280,50,20,"#0080ff","#80c0ff",true,u,[changescr,25],["There's a book over the pillar."])
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
    //#region 
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
    //#endregion
    // 21 - Laptop
    //#region 
    // c0 - Table
    // c1 - Screen body
    // c2 - Keyboard body
    // c3 - Keyboard
    // c4 - Screen
    // c5 - Message on screen
    // c6 - Writing message
    // c7 - Final message
    // c8 - Halfway disc holder
    // c9 - Halfway CD
    // c10 - Full disc holder
    // c11 - Full CD
    // c12 - Back
    l4s21c0 = new cuadro(0,350,599,200,"#a0a000")
    l4s21c1 = new cuadro(100,150,300,200,"#606060")
    l4s21c2 = new cuadro(100,350,300,150,"#404040")
    l4s21c3 = new cuadro(110,360,280,130,"#e0e0e0","#ffffff",true,u,[simpleItemUse,[4.17,writeInstrs]],["It's the keyboard."])
    l4s21c4 = new cuadro(105,155,290,190,"#000000")
    l4s21c5 = new cuadro(105,155,290,70,"#000000",u,u,u,u,["Instructions?","Instructions for what?"],"Please write instructions",["15px Courier New","#00ff00"])
    l4s21c6 = new cuadro(105,210,290,70,"#000000",u,u,false,u,u,"Writing                  "["15px Courier New","#00ff00"])
    l4s21c7 = new cuadro(105,275,290,70,"#000000",u,u,false,u,["Now I need a disc."],"Please insert disc       ",["15px Courier New","#00ff00"])
    l4s21c8 = new cuadro(400,350,75,150,"#000000",u,u,false)
    l4s21c9 = new cuadro(400,355,70,140,"#c0ffff",u,u,false)
    l4s21c10 = new cuadro(400,350,150,150,"#000000",u,u,false,[simpleItemUse,[4.18,recInstrs]],["The disc should be placed here."])
    l4s21c11 = new cuadro(405,355,140,140,"#c0ffff","#e0ffff",u,false,[simpleItemTake,[11,4.09,"Software CD"]])
    l4s21c12 = new cuadro(0,550,599,50,cb2,"#808080",true,u,[changescr,5],u,"Back",["20px Arial Black","#ffffff"])
    l4s21cs = [l4s21c0,l4s21c1,l4s21c2,l4s21c3,l4s21c4,l4s21c5,l4s21c6,l4s21c7,l4s21c8,l4s21c9,
        l4s21c10,l4s21c11,l4s21c12]
    l4s21 = new screen(cb2,l4s21cs)
    //#endregion
    // 22 - Persephonia
    //#region 
    // c0 - Table
    // c1 - Persephonia herself
    // c2 - Broken Persephonia
    // c3 - B Cable
    // c4-c5 - Rubber shards
    // c6 - Back
    l4s22c0 = new cuadro(0,500,599,50,"#808040")
    l4s22c1 = new cuadro(150,50,300,450,"#ffc0c0","#ffe0e0",true,u,[whetDial],["This doll is quite creepy."])
    l4s22c2 = new cuadro(150,300,300,200,"#ffc0c0",u,u,false,u,["The explosion was so scary!"])
    l4s22c3 = new cuadro(295,100,10,200,"#00ff00","#80ff80",u,false,[simpleItemTake,[3,4.19,"B Cable"]],["There's a cable inside the doll."])
    l4s22c4 = new cuadro(10,440,90,60,"#ffc0c0","#ffe0e0",u,false,[takeRubbers],["Persephonia exploded leaving some","pieces of rubber."])
    l4s22c5 = new cuadro(500,440,90,60,"#ffc0c0","#ffe0e0",u,false,[takeRubbers],["Persephonia exploded leaving some","pieces of rubber."])
    l4s22c6 = new cuadro(0,550,599,50,cb2,"#808080",true,u,[changescr,6],u,"Back",["20px Arial Black","#ffffff"])
    l4s22cs = [l4s22c0,l4s22c1,l4s22c2,l4s22c3,l4s22c4,l4s22c5,l4s22c6]
    l4s22 = new screen(cb2,l4s22cs)
    //#endregion
    // 23 - TD to Sand Dimension
    //#region 
    // c0 - Body
    // c1 - Screen 1
    // c2 - Screen 2
    // c3 - Active site
    // c4 - Back
    l4s23c0 = new cuadro(50,50,500,500,"#808080",u,u,u,u,["Another of those machines?"])
    l4s23c1 = new cuadro(100,100,400,100,"#000000",u,u,u,u,["Where could I find this badge?."],"Please show a",["35px Courier New","#ffffff"])
    l4s23c2 = new cuadro(100,200,400,100,"#000000",u,u,u,u,["Where could I find this badge?."],"dark yellow badge",["35px Courier New","#ffffff"])
    l4s23c3 = new cuadro(250,400,100,100,"#000000","#404040",true,u,[simpleItemUse,[4.20,hackTD]],["I suppose I have to show it here."])
    l4s23c4 = new cuadro(0,550,599,50,cb2,"#808080",true,u,[changescr,7],u,"Back",["20px Arial Black","#ffffff"])
    l4s23cs = [l4s23c0,l4s23c1,l4s23c2,l4s23c3,l4s23c4]
    l4s23 = new screen(cb2,l4s23cs)
    //#endregion
    // 24 - Faucet
    //#region 
    // c0 - Base
    // c1 - Body 1
    // c2 - Body 2
    // c3 - Handle (vertical)
    // c4 - Handle (horizontal)
    // c5 - Sand
    // c6 - Back
    l4s24c0 = new cuadro(500,0,99,600,"#00c0c0")
    l4s24c1 = new cuadro(200,200,300,100,"#a0a0a0",u,u,u,u,["It's a faucet."])
    l4s24c2 = new cuadro(200,300,100,100,"#a0a0a0",u,u,u,u,["It's a faucet."])
    l4s24c3 = new cuadro(280,150,40,50,"#a0a0a0","#c0c0c0",true,u,[simpleItemUse,[4.07,putHandle]],["The handle is missing."])
    l4s24c4 = new cuadro(200,100,200,50,"#a0a0a0","#c0c0c0",u,false,[turnHandle],["I should turn the handle."])
    l4s24c5 = new cuadro(225,400,50,150,"#c0c000",u,u,false,u,["!?"])
    l4s24c6 = new cuadro(0,550,599,50,cb2,"#808080",true,u,[changescr,7],u,"Back",["20px Arial Black","#ffffff"])
    l4s24cs = [l4s24c0,l4s24c1,l4s24c2,l4s24c3,l4s24c4,l4s24c5,l4s24c6]
    l4s24 = new screen(cb2,l4s24cs)
    //#endregion
    // 25 - Book
    //#region 
    // c0 - Pillar
    // c1 - Closed book
    // c2-c4 - The world of the useless
    // c5 - Border to open book
    // c6 - Inner book spine
    // c7 - Page 1 (Wax!)
    // c8 - Wax! letters
    // c9 - Back to cover
    // c10 - Page 2 (Turtleneck)
    // c11 - Turtleneck letters
    // c12 - To page 3
    // c13 - Page 3 (Software)
    // c14 - Software letters
    // c15 - Back to page 2
    // c16 - Page tear space
    // c17 - Page 4 (Loco)
    // c18-c21 - Loco letters
    // c22 - To back cover
    // c23 - Back cover
    // c24 - Back to book
    // c25 - Back
    l4s25c0 = new cuadro(50,150,500,300,"#c0c0c0")
    l4s25c1 = new cuadro(300,200,180,200,"#0080ff",u,u,u,u,["What is this book about?"])
    l4s25c2 = new cuadro(390,260,20,20,"#0080ff",u,u,u,u,u,"The world",["20px Times New Roman","#000000"])
    l4s25c3 = new cuadro(390,290,20,20,"#0080ff",u,u,u,u,u,"of the",["20px Times New Roman","#000000"])
    l4s25c4 = new cuadro(390,320,20,20,"#0080ff",u,u,u,u,u,"Useless",["20px Times New Roman","#000000"])
    l4s25c5 = new cuadro(480,200,20,200,"#0080ff","#80c0ff",true,u,[turnPage,[[5,9,12],[1,2,3,4,6,7,8,10,11]]])
    l4s25c6 = new cuadro(290,200,20,200,"#004080",u,u,false)
    l4s25c7 = new cuadro(120,200,170,200,"#ffffe0",u,u,false,u,["The page says:","Want to get rid of those","ugly hairs growing in your ears?",
                                                                "Then try our new ear wax! It sounds","strange, but don't worry. It is not the","kind of wax you are surely imagining."])
    l4s25c8 = new cuadro(190,220,20,20,"#ffffe0",u,u,false,u,u,"Wax!",["40px Arial Black","#ff0080"])
    l4s25c9 = new cuadro(100,200,20,200,"#ffffe0","#ffffff",u,false,[turnPage,[[5,9,12],[1,2,3,4,6,7,8,10,11]]])
    l4s25c10 = new cuadro(310,200,170,200,"#ffffe0",u,u,false,u,["The page says:","Take a stroll with your turtle","by using Turtleneck! The only",
                                                                    "collar desgined specially for","turtles!"])
    l4s25c11 = new cuadro(390,220,20,20,"#ffffe0",u,u,false,u,u,"Turtleneck",["30px Arial","#00a000"])
    l4s25c12 = new cuadro(480,200,20,200,"#ffffe0","#ffffff",u,false,[turnPage,[[9,12,15,16,22],[7,8,10,11,13,14,17,18,19,20,21]]])
    l4s25c13 = new cuadro(120,200,160,200,"#ffffe0",u,u,false,u,["The page says:","Design your own software","in minutes with this simple","instructions!","This could be handy."])
    l4s25c14 = new cuadro(190,220,20,20,"#ffffe0",u,u,false,u,u,"Design your software!",["20px Haettenschweiler","#a000a0"])
    l4s25c15 = new cuadro(100,200,20,200,"#ffffe0","#ffffff",u,false,[turnPage,[[9,12,15,16,22],[7,8,10,11,13,14,17,18,19,20,21]]])
    l4s25c16 = new cuadro(280,200,10,200,"#ffffe0","#ffffff",u,false,[tearPage])
    l4s25c17 = new cuadro(310,200,170,200,"#ffffe0",u,u,false,u,["The page says:","Gather your friends and fiends","for playing Loco! The only game to","play with your enemies!"])
    l4s25c18 = new cuadro(365,220,20,20,"#ffffe0",u,u,false,u,u,"L",["30px Arial Black","#ff0000"])
    l4s25c19 = new cuadro(385,220,20,20,"#ffffe0",u,u,false,u,u,"O",["30px Arial Black","#0000ff"])
    l4s25c20 = new cuadro(405,220,20,20,"#ffffe0",u,u,false,u,u,"C",["30px Arial Black","#00ffff"])
    l4s25c21 = new cuadro(425,220,20,20,"#ffffe0",u,u,false,u,u,"O",["30px Arial Black","#ffff00"])
    l4s25c22 = new cuadro(480,200,20,200,"#ffffe0","#ffffff",u,false,[turnPage,[[15,16,22,24],[6,13,14,17,18,19,20,21,23]]])
    l4s25c23 = new cuadro(120,200,180,200,"#0080ff",u,u,false,u,["The back cover says:","This book is a compilation of the",
                                                                    "worst advertising campaigns","ever made."])
    l4s25c24 = new cuadro(100,200,20,200,"#0080ff","#80c0ff",u,false,[turnPage,[[15,16,22,24],[6,13,14,17,18,19,20,21,23]]])
    l4s25c25 = new cuadro(0,550,599,50,cb2,"#808080",true,u,[changescr,8],u,"Back",["20px Arial Black","#ffffff"])
    l4s25cs = [l4s25c0,l4s25c1,l4s25c2,l4s25c3,l4s25c4,l4s25c5,l4s25c6,l4s25c7,l4s25c8,l4s25c9,
        l4s25c10,l4s25c11,l4s25c12,l4s25c13,l4s25c14,l4s25c15,l4s25c16,l4s25c17,l4s25c18,l4s25c19,
        l4s25c20,l4s25c21,l4s25c22,l4s25c23,l4s25c24,l4s25c25]
    l4s25 = new screen(cb2,l4s25cs)
    //#endregion
    // 26 - CD Player
    //#region 
    // c0 - Body
    // c1 - Screen
    // c2-c3 - Speakers
    // c4 - CD slot
    // c5-c7 - Buttons
    // c8 - CD to insert/grab
    // c9 - Back
    l4s26c0 = new cuadro(100,30,400,520,"#808080")
    l4s26c1 = new cuadro(110,40,380,250,"#000000",u,u,u,u,["There's a screen. It shows nothing."])
    l4s26c2 = new cuadro(110,310,80,180,"#404040",u,u,u,u,["This speaker is not emiting sounds."])
    l4s26c3 = new cuadro(410,310,80,180,"#404040",u,u,u,u,["This speaker is not emiting sounds."])
    l4s26c4 = new cuadro(210,330,180,40,"#a0a000","#c0c000",u,u,u,["It's a CD slot."])
    l4s26c5 = new cuadro(215,425,50,50,"#ff0000","#ff6060",true,u,[simpleItemUse,[4.21,mysteryCD]],["I wonder what's this button for."],"1",["30px Arial","#ffffff"])
    l4s26c6 = new cuadro(275,425,50,50,"#00ff00","#60ff60",true,u,[simpleItemUse,[4.22,mysteryCD]],["I wonder what's this button for."],"2",["30px Arial","#ffffff"])
    l4s26c7 = new cuadro(335,425,50,50,"#0000ff","#6060ff",true,u,[simpleItemUse,[4.23,mysteryCD]],["I wonder what's this button for."],"3",["30px Arial","#ffffff"])
    l4s26c8 = new cuadro(250,350,100,70,"#c0ffff","#e0ffff",u,false)
    l4s26c9 = new cuadro(0,550,599,50,"#804000","#808080",true,u,[changescr,9],u,"Back",["20px Arial Black","#ffffff"])
    l4s26cs = [l4s26c0,l4s26c1,l4s26c2,l4s26c3,l4s26c4,l4s26c5,l4s26c6,l4s26c7,l4s26c8,l4s26c9]
    l4s26 = new screen(cb3,l4s26cs)
    //#endregion
    // 27 - Trash can
    //#region 
    // c0 - Can body
    // c1-c4 - Depth
    // c5 - Persephonia text 1
    // c6 - Persephonia text 2
    // c7 - Persephonia text cover
    // c8-c16 - Trash
    // c17 - Back
    l4s27c0 = new cuadro(50,50,500,500,"#ff00ff")
    l4s27c1 = new cuadro(75,75,450,450,"#e000e0")
    l4s27c2 = new cuadro(100,100,400,400,"#c000c0")
    l4s27c3 = new cuadro(125,125,350,350,"#a000a0")
    l4s27c4 = new cuadro(150,150,300,300,"#800080")
    l4s27c5 = new cuadro(170,270,260,30,"#e0e020",u,u,u,u,["There's something at the bottom","of the can."],"Introducing our brand new doll...",["18px Times New Roman","#000000"])
    l4s27c6 = new cuadro(170,300,260,60,"#e0e020",u,u,u,u,["There's something at the bottom","of the can."],"Persephonia",["46px Arial","#a0c0c0"])
    l4s27c7 = new cuadro(170,300,130,60,"#800080")
    l4s27c8 = new cuadro(310,310,80,80,"#008000",u,u,u,[removeTrash,[[8],-1]],["There's a lot of trash."])
    l4s27c9 = new cuadro(370,330,80,80,"#40c040",u,u,u,[removeTrash,[[9],[8]]],["There's a lot of trash."])
    l4s27c10 = new cuadro(350,280,80,80,"#60ff60",u,u,u,[removeTrash,[[10],[9]]],["There's a lot of trash."])
    l4s27c11 = new cuadro(290,250,80,80,"#406040",u,u,u,[removeTrash,[[11],[10]]],["There's a lot of trash."])
    l4s27c12 = new cuadro(230,280,80,80,"#a0e0a0",u,u,u,[removeTrash,[[12],[11]]],["There's a lot of trash."])
    l4s27c13 = new cuadro(150,260,100,100,"#00a000",u,u,u,[removeTrash,[[13],[12]]],["There's a lot of trash."])
    l4s27c14 = new cuadro(130,290,120,120,"#60a060",u,u,u,[removeTrash,[[14],[13]]],["There's a lot of trash."])
    l4s27c15 = new cuadro(190,190,140,140,"#80e080",u,u,u,[removeTrash,[[15],[14]]],["There's a lot of trash."])
    l4s27c16 = new cuadro(230,210,160,160,"#20e020",u,true,u,[removeTrash,[[16],[15]]],["There's a lot of trash."])
    l4s27c17 = new cuadro(0,550,599,50,cb3,"#808080",true,u,[changescr,10],u,"Back",["20px Arial Black","#ffffff"])
    l4s27cs = [l4s27c0,l4s27c1,l4s27c2,l4s27c3,l4s27c4,l4s27c5,l4s27c6,l4s27c7,l4s27c8,l4s27c9,
        l4s27c10,l4s27c11,l4s27c12,l4s27c13,l4s27c14,l4s27c15,l4s27c16,l4s27c17]
    l4s27 = new screen(cb3,l4s27cs)
    //#endregion
    // 28 - TD to Poison Dimension
    //#region 
    // c0 - Body
    // c1 - Screen 1
    // c2 - Screen 2
    // c3 - Active site - Hopely to change function in the future.
    // c4 - Back
    l4s28c0 = new cuadro(50,50,500,500,"#808080",u,u,u,u,["Another of those machines?"])
    l4s28c1 = new cuadro(100,100,400,100,"#000000",u,u,u,u,["Where could I find this badge?."],"Please show a",["35px Courier New","#ffffff"])
    l4s28c2 = new cuadro(100,200,400,100,"#000000",u,u,u,u,["Where could I find this badge?."],"dark magenta badge",["35px Courier New","#ffffff"])
    l4s28c3 = new cuadro(250,400,100,100,"#000000","#404040",true,u,[goWIP],["I suppose I have to show it here."])
    l4s28c4 = new cuadro(0,550,599,50,cb3,"#808080",true,u,[changescr,11],u,"Back",["20px Arial Black","#ffffff"])
    l4s28cs = [l4s28c0,l4s28c1,l4s28c2,l4s28c3,l4s28c4]
    l4s28 = new screen(cb3,l4s28cs)
    //#endregion
    // 29 - CD Shelf
    //#region 
    // c0 - Shelf body
    // c1 - CD 1
    // c2 - Handle of horizontal door
    // c3 - Empty space
    // c4 - Empty space door
    // c5 - Handle of vertical door
    // c6 - Space with CD
    // c7 - CD 2
    // c8 - Vertical door
    // c9 - Sticker tip
    // c10 - CD 3
    // c11 - Back
    l4s29c0 = new cuadro(50,175,500,250,"#ff8000")
    l4s29c1 = new cuadro(75,155,200,20,"#c0ffff","#e0ffff",true,u,[simpleItemTake,[1,4.21,"CD 1"]],["There's a CD over there."])
    l4s29c2 = new cuadro(245,270,30,30,"#c06000","#ffe020",true,u,[open29a],["The shelf has two doors."])
    l4s29c3 = new cuadro(75,200,200,200,"#804000",u,u,false,u,["It seems empty."])
    l4s29c4 = new cuadro(0,200,75,200,"#808000",u,u,false)
    l4s29c5 = new cuadro(415,370,30,30,"#c06000","#ffe020",true,u,[open29b],["The shelf has two doors."])
    l4s29c6 = new cuadro(325,200,200,200,"#804000",u,u,false)
    l4s29c7 = new cuadro(505,220,20,180,"#c0ffff","#e0ffff",u,false,[simpleItemTake,[7,4.22,"CD 2"]],["There's a CD in the shelf."])
    l4s29c8 = new cuadro(325,0,200,200,"#808000",u,u,false)
    l4s29c9 = new cuadro(335,10,15,15,"#808040","#c0c080",u,false,[unsticker],["Looks like the corner of a sticker."])
    l4s29c10 = new cuadro(350,25,80,80,"#c0ffff","#e0ffff",u,false,[simpleItemTake,[10,4.23,"CD 3"]],["There was a CD behind that sticker!"])
    l4s29c11 = new cuadro(0,550,599,50,cb3,"#808080",true,u,[changescr,11],u,"Back",["20px Arial Black","#ffffff"])
    l4s29cs = [l4s29c0,l4s29c1,l4s29c2,l4s29c3,l4s29c4,l4s29c5,l4s29c6,l4s29c7,l4s29c8,l4s29c9,
        l4s29c10,l4s29c11]
    l4s29 = new screen(cb3,l4s29cs)
    //#endregion
    // 30 - Electrified hammer
    //#region 
    // c0 - Hammer head
    // c1 - Hammer handle
    // c2-c4 - Electrified wires
    // c5 - Generator
    // c6 - Yellow screen
    // c7 - Back
    l4s30c0 = new cuadro(50,200,100,200,"#808080","#c0c0c0",true,u,[takeHammer],["It's a hammer."])
    l4s30c1 = new cuadro(150,250,350,100,"#808000","#c0c000",true,u,[takeHammer],["It's a hammer."])
    l4s30c2 = new cuadro(200,225,50,150,"#0000ff",u,u,u,u,["There are some wires around","the hammer."])
    l4s30c3 = new cuadro(300,225,50,150,"#0000ff",u,u,u,u,["There are some wires around","the hammer."])
    l4s30c4 = new cuadro(400,225,50,150,"#0000ff",u,u,u,u,["There are some wires around","the hammer."])
    l4s30c5 = new cuadro(200,375,250,75,"#0000ff","#4040ff",u,u,u,["It's some kind of generator."],"X X X",["60px Arial Black","#000000"])
    l4s30c6 = new cuadro(0,0,599,600,"#ffff00",u,u,false)
    l4s30c7 = new cuadro(0,550,599,50,cb3,"#808080",true,u,[changescr,11],u,"Back",["20px Arial Black","#ffffff"])
    l4s30cs = [l4s30c0,l4s30c1,l4s30c2,l4s30c3,l4s30c4,l4s30c5,l4s30c6,l4s30c7]
    l4s30 = new screen(cb3,l4s30cs)
    //#endregion
    // 31 - Box with colors
    //#region 
    // c0 - Box body
    // c1-c8 - Values
    // c9-16 - Minus buttons
    // c17-c24 - Plus buttons
    // c25 - Back
    l4s31c0 = new cuadro(20,150,560,300,"#00ff00")
    l4s31c1 = new cuadro(20,265,70,70,"#808080",u,u,u,u,u,"A",["70px Arial","#00ff00"])
    l4s31c2 = new cuadro(90,265,70,70,"#808080",u,u,u,u,u,"0",["70px Arial","#ffffff"])
    l4s31c3 = new cuadro(160,265,70,70,"#808080",u,u,u,u,u,"A",["70px Arial","#00ffff"])
    l4s31c4 = new cuadro(230,265,70,70,"#808080",u,u,u,u,u,"0",["70px Arial","#ff0000"])
    l4s31c5 = new cuadro(300,265,70,70,"#808080",u,u,u,u,u,"A",["70px Arial","#ff00ff"])
    l4s31c6 = new cuadro(370,265,70,70,"#808080",u,u,u,u,u,"1",["70px Arial","#0000ff"])
    l4s31c7 = new cuadro(440,265,70,70,"#808080",u,u,u,u,u,"A",["70px Arial","#00ffff"])
    l4s31c8 = new cuadro(510,265,70,70,"#808080",u,u,u,u,u,"1",["70px Arial","#ffffff"])
    l4s31c9 = new cuadro(20,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[1,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c10 = new cuadro(90,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[2,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c11 = new cuadro(160,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[3,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c12 = new cuadro(230,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[4,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c13 = new cuadro(300,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[5,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c14 = new cuadro(370,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[6,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c15 = new cuadro(440,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[7,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c16 = new cuadro(510,196,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[8,-1]],["I wonder what's this box for."],"-",["23px Arial","#000000"])
    l4s31c17 = new cuadro(20,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[1,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c18 = new cuadro(90,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[2,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c19 = new cuadro(160,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[3,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c20 = new cuadro(230,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[4,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c21 = new cuadro(300,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[5,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c22 = new cuadro(370,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[6,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c23 = new cuadro(440,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[7,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c24 = new cuadro(510,399,70,23,"#ff00ff","#ff80ff",true,u,[changeNumber,[8,1]],["I wonder what's this box for."],"+",["23px Arial","#000000"])
    l4s31c25 = new cuadro(0,550,599,50,cb3,"#808080",true,u,[changescr,11],u,"Back",["20px Arial Black","#ffffff"])
    l4s31cs = [l4s31c0,l4s31c1,l4s31c2,l4s31c3,l4s31c4,l4s31c5,l4s31c6,l4s31c7,l4s31c8,l4s31c9,
        l4s31c10,l4s31c11,l4s31c12,l4s31c13,l4s31c14,l4s31c15,l4s31c16,l4s31c17,l4s31c18,l4s31c19,
        l4s31c20,l4s31c21,l4s31c22,l4s31c23,l4s31c24,l4s31c25]
    l4s31 = new screen(cb3,l4s31cs)
    //#endregion
    // 32 - Crafting table
    //#region 
    // c0 - Body
    // c1 - Workspace
    // c2-c7 - Rubber shards
    // c8 - Rubber gloves
    // c9 - Separator
    // c10-c12 - Scene covers
    // c13 - Back
    l4s32c0 = new cuadro(50,100,500,400,"#ff8000")
    l4s32c1 = new cuadro(100,200,400,200,"#ffc080","#ffe0c0",true,u,[simpleItemUse,[4.26,placeShards]],["The crafting table looks clean."])
    l4s32c2 = new cuadro(120,220,60,160,"#ffc0c0","ffe0e0",u,false,[simpleItemUse,[4.27,makeGloves]],["Now I have the rubber shards here,","what should I do with them?"])
    l4s32c3 = new cuadro(220,220,60,60,"#ffc0c0","ffe0e0",u,false,[simpleItemUse,[4.27,makeGloves]],["Now I have the rubber shards here,","what should I do with them?"])
    l4s32c4 = new cuadro(200,340,60,60,"#ffc0c0","ffe0e0",u,false,[simpleItemUse,[4.27,makeGloves]],["Now I have the rubber shards here,","what should I do with them?"])
    l4s32c5 = new cuadro(320,220,160,60,"#ffc0c0","ffe0e0",u,false,[simpleItemUse,[4.27,makeGloves]],["Now I have the rubber shards here,","what should I do with them?"])
    l4s32c6 = new cuadro(320,320,60,60,"#ffc0c0","ffe0e0",u,false,[simpleItemUse,[4.27,makeGloves]],["Now I have the rubber shards here,","what should I do with them?"])
    l4s32c7 = new cuadro(400,300,60,60,"#ffc0c0","ffe0e0",u,false,[simpleItemUse,[4.27,makeGloves]],["Now I have the rubber shards here,","what should I do with them?"])
    l4s32c8 = new cuadro(150,250,300,100,"#ffc0c0","#ffe0e0",u,false,[simpleItemTake,[8,4.28,"Rubber gloves"]],["It took me a while, but managed","to make this gloves."])
    l4s32c9 = new cuadro(250,250,100,100,"#ffc080",u,u,false)
    l4s32c10 = new cuadro(0,0,599,200,"#000000",u,u,false)
    l4s32c11 = new cuadro(0,200,599,200,"#000000",u,u,false)
    l4s32c12 = new cuadro(0,400,599,200,"#000000",u,u,false)
    l4s32c13 = new cuadro(0,550,599,50,cb3,"#808080",true,u,[changescr,12],u,"Back",["20px Arial Black","#ffffff"])
    l4s32cs = [l4s32c0,l4s32c1,l4s32c2,l4s32c3,l4s32c4,l4s32c5,l4s32c6,l4s32c7,l4s32c8,l4s32c9,
        l4s32c10,l4s32c11,l4s32c12,l4s32c13]
    l4s32 = new screen(cb3,l4s32cs)
    //#endregion
    // 33 - Recycling bin
    //#region 
    // c0 - Body
    // c1 - Empty slot
    // c2 - Full slot
    // c3 - Back
    l4s33c0 = new cuadro(100,100,400,400,"#ffff00")
    l4s33c1 = new cuadro(200,295,200,10,"#000000","#404040",true,u,[putCDs],["The bin has a narrow gap above."])
    l4s33c2 = new cuadro(195,290,210,20,"#c0ffff",u,u,false,[crashBin])
    l4s33c3 = new cuadro(0,550,599,50,cb3,"#808080",true,u,[changescr,12],u,"Back",["20px Arial Black","#ffffff"])
    l4s33cs = [l4s33c0,l4s33c1,l4s33c2,l4s33c3]
    l4s33 = new screen(cb3,l4s33cs)
    //#endregion
    // 34 - Cable computer side
    //#region 
    // c0 - Computer
    // c1 - Open panel
    // c2-c4 - Letters A to C
    // c5-c7 - Plugs
    // c8-c10 - Cables
    // c11-c13 - Endings
    // c14 - Base
    // c15 - Back
    l4s34c0 = new cuadro(0,0,500,500,"#808080")
    l4s34c1 = new cuadro(100,100,300,300,"#404040")
    l4s34c2 = new cuadro(125,100,50,50,"#404040",u,u,u,u,u,"A",["50px Arial Black","#000000"])
    l4s34c3 = new cuadro(225,100,50,50,"#404040",u,u,u,u,u,"B",["50px Arial Black","#000000"])
    l4s34c4 = new cuadro(325,100,50,50,"#404040",u,u,u,u,u,"C",["50px Arial Black","#000000"])
    l4s34c5 = new cuadro(130,160,40,40,"#ff8000","#ffc080",true,u,[simpleItemUse,[4.16,placeCableA]],["Looks like something is missing."])
    l4s34c6 = new cuadro(230,160,40,40,"#ff8000","#ffc080",true,u,[simpleItemUse,[4.19,placeCableB]],["Looks like something is missing."])
    l4s34c7 = new cuadro(330,160,40,40,"#ff8000","#ffc080",true,u,[simpleItemUse,[4.08,placeCableC]],["Looks like something is missing."])
    l4s34c8 = new cuadro(140,180,20,160,"#c0c0c0","#e0e0e0",u,false,u,["The cable fits well."])
    l4s34c9 = new cuadro(240,180,20,160,"#c0c0c0","#e0e0e0",u,false,u,["The cable fits well."])
    l4s34c10 = new cuadro(340,180,20,160,"#c0c0c0","#e0e0e0",u,false,u,["The cable fits well."])
    l4s34c11 = new cuadro(140,340,20,10,"#ff8000","#ffc080",u,u,u,["I wonder what goes here."])
    l4s34c12 = new cuadro(240,340,20,10,"#ff8000","#ffc080",u,u,u,["I wonder what goes here."])
    l4s34c13 = new cuadro(340,340,20,10,"#ff8000","#ffc080",u,u,u,["I wonder what goes here."])
    l4s34c14 = new cuadro(130,350,240,25,"#ff8000","#ffc080",u,u,u,["Seems like a connection port."])
    l4s34c15 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,18],u,"Back",["20px Arial Black","#ffffff"])
    l4s34cs = [l4s34c0,l4s34c1,l4s34c2,l4s34c3,l4s34c4,l4s34c5,l4s34c6,l4s34c7,l4s34c8,l4s34c9,
        l4s34c10,l4s34c11,l4s34c12,l4s34c13,l4s34c14,l4s34c15]
    l4s34 = new screen(cb1,l4s34cs)
    //#endregion
    // 35 - Furniture side
    //#region 
    // c0 - Body
    // c1 - Magenta code
    // c2 - Silicone glue
    // c3 - Back
    l4s35c0 = new cuadro(0,0,550,550,"#008080")
    l4s35c1 = new cuadro(0,400,500,100,"#008080",u,u,u,u,["Do those scratches mean something?"],"|---||-",["100px Arial","#ff00ff"])
    l4s35c2 = new cuadro(550,400,49,150,"#408080","#60e0e0",true,u,[simpleItemTake,[2,4.27,"Silicon glue"]],["What's over there?"])
    l4s35c3 = new cuadro(0,550,599,50,cb1,"#808080",true,u,[changescr,20],u,"Back",["20px Arial Black","#ffffff"])
    l4s35cs = [l4s35c0,l4s35c1,l4s35c2,l4s35c3]
    l4s35 = new screen(cb1,l4s35cs)
    //#endregion
    // 36 - Persephonia dialogue (before)
    //#region 
    // c0 - Continue
    l4s36c0 = new cuadro(700,580,100,20,"#00ff00","#80ff80",u,false,[changescr,22],u,"Continue",["20px Arial","#000000"])
    l4s36cs = [l4s36c0]
    l4s36 = new screen("#000000",l4s36cs,false,true,"textPerseA.json")
    //#endregion
    // 37 - Persephonia dialogue (after)
    //#region 
    // c0 - Continue
    l4s37c0 = new cuadro(700,580,100,20,"#00ff00","#80ff80",u,false,[changescr,22],u,"Continue",["20px Arial","#000000"])
    l4s37cs = [l4s37c0]
    l4s37 = new screen("#000000",l4s37cs,false,true,"textPerseB.json")
    //#endregion
    // 38 - Paha dialogue 1
    //#region 
    // c0 - Continue
    l4s38c0 = new cuadro(700,580,100,20,"#00ff00","#80ff80",u,false,[changescr,39],u,"Continue",["20px Arial","#000000"])
    l4s38cs = [l4s38c0]
    l4s38 = new screen("#000000",l4s38cs,false,true,"textPaha1.json")
    //#endregion
    // 39 - Choose your name
    //#region 
    // c0 - Banner
    // c1 - Name display
    // c2-c27 - Letter buttons
    // c28 - Erase
    // c29 - Confirm
    l4s39c0 = new cuadro(50,50,700,100,"#e08020",u,u,u,u,u,"Choose your name!",["50px Arial Black","#c0c000"])
    l4s39c1 = new cuadro(150,150,500,100,"#000000",u,u,u,u,u,"",["80px Arial","#ffffff"])
    l4s39c2 = new cuadro(50,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"q"],u,"q",["50px Monospace","#0000c0"])
    l4s39c3 = new cuadro(120,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"w"],u,"w",["50px Monospace","#0000c0"])
    l4s39c4 = new cuadro(190,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"e"],u,"e",["50px Monospace","#0000c0"])
    l4s39c5 = new cuadro(260,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"r"],u,"r",["50px Monospace","#0000c0"])
    l4s39c6 = new cuadro(330,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"t"],u,"t",["50px Monospace","#0000c0"])
    l4s39c7 = new cuadro(400,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"y"],u,"y",["50px Monospace","#0000c0"])
    l4s39c8 = new cuadro(470,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"u"],u,"u",["50px Monospace","#0000c0"])
    l4s39c9 = new cuadro(540,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"i"],u,"i",["50px Monospace","#0000c0"])
    l4s39c10 = new cuadro(610,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"o"],u,"o",["50px Monospace","#0000c0"])
    l4s39c11 = new cuadro(680,300,70,70,"#808080","#c0c0c0",true,u,[writeName,"p"],u,"p",["50px Monospace","#0000c0"])
    l4s39c12 = new cuadro(85,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"a"],u,"a",["50px Monospace","#0000c0"])
    l4s39c13 = new cuadro(155,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"s"],u,"s",["50px Monospace","#0000c0"])
    l4s39c14 = new cuadro(225,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"d"],u,"d",["50px Monospace","#0000c0"])
    l4s39c15 = new cuadro(295,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"f"],u,"f",["50px Monospace","#0000c0"])
    l4s39c16 = new cuadro(365,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"g"],u,"g",["50px Monospace","#0000c0"])
    l4s39c17 = new cuadro(435,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"h"],u,"h",["50px Monospace","#0000c0"])
    l4s39c18 = new cuadro(505,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"j"],u,"j",["50px Monospace","#0000c0"])
    l4s39c19 = new cuadro(575,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"k"],u,"k",["50px Monospace","#0000c0"])
    l4s39c20 = new cuadro(645,370,70,70,"#808080","#c0c0c0",true,u,[writeName,"l"],u,"l",["50px Monospace","#0000c0"])
    l4s39c21 = new cuadro(155,440,70,70,"#808080","#c0c0c0",true,u,[writeName,"z"],u,"z",["50px Monospace","#0000c0"])
    l4s39c22 = new cuadro(225,440,70,70,"#808080","#c0c0c0",true,u,[writeName,"x"],u,"x",["50px Monospace","#0000c0"])
    l4s39c23 = new cuadro(295,440,70,70,"#808080","#c0c0c0",true,u,[writeName,"c"],u,"c",["50px Monospace","#0000c0"])
    l4s39c24 = new cuadro(365,440,70,70,"#808080","#c0c0c0",true,u,[writeName,"v"],u,"v",["50px Monospace","#0000c0"])
    l4s39c25 = new cuadro(435,440,70,70,"#808080","#c0c0c0",true,u,[writeName,"b"],u,"b",["50px Monospace","#0000c0"])
    l4s39c26 = new cuadro(505,440,70,70,"#808080","#c0c0c0",true,u,[writeName,"n"],u,"n",["50px Monospace","#0000c0"])
    l4s39c27 = new cuadro(575,440,70,70,"#808080","#c0c0c0",true,u,[writeName,"m"],u,"m",["50px Monospace","#0000c0"])
    l4s39c28 = new cuadro(200,510,150,50,"#a00000","#c02020",true,u,[eraseName],u,"Erase",["30px Arial","#000000"])
    l4s39c29 = new cuadro(450,510,150,50,"#00a000","#20e020",true,u,[confirmName],u,"Confirm",["30px Arial","#000000"])
    l4s39cs = [l4s39c0,l4s39c1,l4s39c2,l4s39c3,l4s39c4,l4s39c5,l4s39c6,l4s39c7,l4s39c8,l4s39c9,
        l4s39c10,l4s39c11,l4s39c12,l4s39c13,l4s39c14,l4s39c15,l4s39c16,l4s39c17,l4s39c18,l4s39c19,
        l4s39c20,l4s39c21,l4s39c22,l4s39c23,l4s39c24,l4s39c25,l4s39c26,l4s39c27,l4s39c28,l4s39c29]
    l4s39 = new screen("#000000",l4s39cs,false)
    //#endregion
    // 40 - Paha dialogue 2
    //#region 
    // c0 - Continue
    l4s40c0 = new cuadro(700,580,100,20,"#00ff00","#80ff80",u,false,[giveHB],u,"Continue",["20px Arial","#000000"])
    l4s40cs = [l4s40c0]
    l4s40 = new screen("#000000",l4s40cs,false,true,"textPaha2.json")
    //#endregion


    l4ss = [l4s0,l4s1,l4s2,l4s3,l4s4,l4s5,l4s6,l4s7,l4s8,l4s9,
        l4s10,l4s11,l4s12,l4s13,l4s14,l4s15,l4s16,l4s17,l4s18,l4s19,
        l4s20,l4s21,l4s22,l4s23,l4s24,l4s2,l4s26,l4s27,l4s28,l4s29,
        l4s30,l4s31,l4s32,l4s33,l4s34,l4s35,l4s36,l4s37,l4s38,l4s39,
        l4s40]

    function acceptCD(){ // Accepts software CD in the corresponding computer.
        console.log("holi")
    }
    function activateCPC(){ // Activates light related to cable computer.
        console.log("holi")
    }
    function changeNumber(){ // Changes the numbers displayed on the colored box.
        console.log("holi")
    }
    function checkPass(){ // Checks if the password is right. Activates the light or resets the password screen.
        console.log("holi")
    }
    function confirmName(){ // Confirms new name for player.
        console.log("holi")
    }
    function crashBin(){ // Forces the second CD in the bin, breaking it.
        console.log("holi")
    }
    function eraseName(){ // Erases one letter from name.
        console.log("holi")
    }
    function getBucket(){ // Takes the bucket, shows password and removes cheatblock.
        console.log("holi")
    }
    function giveHB(){ // Gives hacking badge and returns to game.
        console.log("holi")
    }
    function goWIP(){ // Checks if hacking badge is in inventory, and sends to WIP screen if so. Hopely to be deleted.
        console.log("holi")
    }
    function hackTD(){ // Hacks Sand Dimension TD.
        console.log("holi")
    }
    function hitDoBo(){ // Hits double bottom until broken.
        console.log("holi")
    }
    function makeGloves(){ // Makes gloves out of the rubber shards.
        console.log("holi")
    }
    function mysteryCD(){ // Plays the CDs based on the cheatblock rather than on the played CD.
        console.log("holi")
    }
    function open12(){ // Opens the door to room 12.
        console.log("holi")
    }
    function open16(){ // Opens the trapdoor to room 16.
        console.log("holi")
    }
    function open29a(){ // Opens the first CD shelf door.
        console.log("holi")
    }
    function open29b(){ // Opens the second CD shelf door.
        console.log("holi")
    }
    function openFurni(){ // Opens the furniture.
        console.log("holi")
    }
    function openPaha(){ // Opens the cristal tube and releases Paha.
        console.log("holi")
    }
    function placeCableA(){ // Places A cable in its spot.
        console.log("holi")
    }
    function placeCableB(){ // Places B cable in its spot.
        console.log("holi")
    }
    function placeCableC(){ // Places C cable in its spot.
        console.log("holi")
    }    
    function placeShards(){ // Places the rubber shards on the crafting table.
        console.log("holi")
    }
    function pressButton(str){ // Adds the current symbol to the password. Activates big button when password is full.
        console.log("holi")
    }
    function putBook(){ // Places the current book on the shelf. Checks the order and allows to place the final book.
        console.log("holi")
    }
    function putCDs(){ // Puts music CD and DVD in the recycling bin.
        console.log("holi")
    }
    function putHandle(){ // Places handle on faucet.
        console.log("holi")
    }
    function putKnob(){ // Places the missing knob.
        console.log("holi")
    }
    function recInstrs(){ // Records instructions on clean CD.
        console.log("holi")
    }
    function removeTrash(cuads){ // Removes trash from the can.
        if (cuads[1] == -1){
            quickTurn(cuads[0]) // s27
            this.currlev.cheatblock[2] -= 1
        } else {
            quickTurn(cuads[0],cuads[1]) // s27
        }
    }
    function sa35(){ // Special access to screen 35. Removes magenta knobs cheatblock.
        this.currlev.cheatblock[8] = false
        changescr(35)
        l4s20c2.dofx = function(){changescr(35)}
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
    function takeHammer(){ // Takes hammer if rubber gloves are in inventory, and electrifies otherwise.
        console.log("holi")
    }
    function takeNailOut(){ // Removes the side of the carpet, shows password and removes cheatblock.
        console.log("holi")
    }
    function takeRubbers(){ // Takes the rubber shards regardless of the pressed shard.
        console.log("holi")
    }
    function takeSand(){ // Takes sand using the bucket.
        console.log("holi")
    }
    function takeWoodOut(){ // Partially removes the wood from the wall, and removes cheatblock.
        console.log("holi")
    }
    function tearPage(){ // tears the software instructions out of the book, and locks book movement.
        console.log("holi")
    }
    function throwSand(){ // Throws sand to the white painting.
        console.log("holi")
    }
    function turnHandle(){ // Turns the faucet handle.
        console.log("holi")
    }
    function turnKnob(specs){ // Turns the corresponding knob, and modifies the corresponding cheatblock.
        console.log("holi")
    }
    function turnPage(cuads){ // Turns the pages of the book.
        quickTurn(cuads[0],u,cuads[1]) // s25
    }
    function unsticker(){ // Pulls the sticker off the shelf.
        console.log("holi")
    }
    function whetDial(){ // Goes to screens 36 or 37, depending on cheatblock.
        if (this.currlev.cheatblock[2] == 0){
            console.log("holi")
        } else {
            changescr(36)
        }
    }
    function writeInstrs(){ // Writes instructions from the page.
        console.log("holi")
    }
    function writeName(lett){ // Writes name on display.
        console.log("holi")
    }
    
    return{
        screens: l4ss,
        // 0 - Parts of second password
        // 1 - Times door is smashed
        // 2 - Missing parts of Persephonia's name
        // 3 - Number of current password
        // 4 - First password
        // 5 - Status for magenta knobs
        // 6 - Status for yellow knobs
        // 7 - Yellow code
        // 8 - Magenta code
        // 9 - Times double bottom is hit
        // 10 - Number of played CDs
        // 11 - CD in recycling bin
        // 12 - Number of placed cables
        cheatblock: [2,0,2,1,true,
            [1,1,1,1,1,1,1],[1,1,1,1,1,1,1],
            true,true,0,0,false,0]
    }
}
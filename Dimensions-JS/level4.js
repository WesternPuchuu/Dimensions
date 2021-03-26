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

    //0 - Temporary "Thank You" screen
	//c0 - Big thanks
	//c1 - More levels soon
	//c2 - Feel free to
	// var l4s0c0 = new cuadro(20,20,760,40,"#000000",u,u,u,u,u,"Thanks for playing!!",["38px Arial","#00ff00"])
	// var l4s0c1 = new cuadro(0,80,800,20,cb,u,u,u,u,u,"More levels coming soon!",["20px Times New Roman","#ffffff"])
	// var l4s0c2 = new cuadro(0,120,800,20,cb,u,u,u,u,u,"If you liked the game, feel free to check the code and suggest optimizations :D",["20px Arial","#ffffff"])
	// l4s0cs = [l4s0c0,l4s0c1,l4s0c2]
    // l4s0 = new screen(cb, l4s0cs, false)
    // var l4ss = [l4s0]

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
        l4s13c20,l4s13c21,l4s13c22]
    l4s13 = new screen(cb3,l4s13cs)
    //#endregion

    l4ss = [l4s0,l4s1,l4s2,l4s3,l4s4,l4s5,l4s6,l4s7,l4s8,l4s9,
        l4s10,l4s11,l4s12,l4s13]

    function checkPass(){ // Checks if the password is right. Activates the light or resets the password screen.
        console.log("holi")
    }
        function getBucket(){ // Takes the bucket, shows password and removes cheatblock.
        console.log("holi")
    }
    function openPaha(){ // Opens the cristal tube and releases Paha.
        console.log("holi")
    }
    function pressButton(str){ // Adds the current symbol to the password. Activates big button when password is full.
        console.log("holi")
    }
    function smashDoor(){ // Smashes the door until the knob falls.
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
    
    return{
        screens: l4ss,
        // 0 - Numeric password
        // 1 - Times door is smashed
        // 2 - Missing parts of Persephonia's name
        // 3 - Number of current password
        cheatblock: [2,0,2,1]
    }
}
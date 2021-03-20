function level4(){
    var cb1 = "#800000"
    var cb2 = "#802000"
    var cb3 = "#800020"

    // ITEM LIST
    // 4.01 - G Book
    // 4.02 - Hammer
    // 4.03 - Bucket

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

    l4ss = [l4s0,l4s1,l4s2,l4s3,l4s4,l4s5,l4s6]

    function getBucket(){ // Takes the bucket, shows password and removes cheatblock.
        console.log("holi")
    }
    function openPaha(){ // Opens the cristal tube and releases Paha.
        console.log("holi")
    }
    function takeNailOut(){ // Removes the side of the carpet, shows password and removes cheatblock.
        console.log("holi")
    }


    return{
        screens: l4ss,
        cheatblock: []
    }
}
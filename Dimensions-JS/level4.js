function level4(){
    var cb1 = "#800000"
    var cb2 = "#802000"
    var cb3 = "#800020"

    // ITEM LIST
    // 4.01 - G Book

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
    l4s3c0 = new cuadro(250,200,100,200,"#000000","#404040",u,u,u,["This side of the door is","black. It is locked again"])
    l4s3c1 = new cuadro(400,250,100,150,"#808080","#c0c0c0",true,u,[changescr,16],["It's a computer."])
    l4s3c2 = new cuadro(435,200,30,50,"#ff0000",u,u,u,u,["There's a red light over","the computer."])
    l4s3c3 = new cuadro(80,240,120,100,"#804000","#c08040",true,u,[changescr,17],["It's a shelf with books"])
    l4s3c4 = new cuadro(0,0,50,600,cb1,"#808080",true,u,[changescr,2])
    l4s3c5 = new cuadro(550,0,49,600,cb1,"#808080",true,u,[changescr,4])
    l4s3cs = [l4s3c0,l4s3c1,l4s3c2,l4s3c3,l4s3c4,l4s3c5]
    l4s3 = new screen(cb1,l4s3cs)
    //#endregion

    l4ss = [l4s0,l4s1,l4s2,l4s3]

    function openPaha(){ // Opens the cristal tube and releases Paha.
        console.log("holi")
    }


    return{
        screens: l4ss,
        cheatblock: []
    }
}
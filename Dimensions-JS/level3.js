function level3(){
    var cb = "#600000"

    //var l3s0cs = Array()
    //var l3s0
    //var l3ss = Array()

    // ITEM LIST
    // 3.01 - Knife
    // 3.02 - Poster shard
    // 3.03 - Grease
    // 3.04 - Spin! fertilizer
    // 3.05 - Acorn

    // 0 - Temporary "Thank You" screen
	// c0 - Big thanks
	// c1 - More levels soon
	// c2 - Feel free to
	// var l3s0c0 = new cuadro(20,20,760,40,"#000000",u,u,u,u,u,"Thanks for playing!!",["38px Arial","#00ff00"])
	// var l3s0c1 = new cuadro(0,80,800,20,cb,u,u,u,u,u,"More levels coming soon!",["20px Times New Roman","#ffffff"])
	// var l3s0c2 = new cuadro(0,120,800,20,cb,u,u,u,u,u,"If you liked the game, feel free to check the code and suggest optimizations :D",["20px Arial","#ffffff"])
	// l3s0cs.push(l3s0c0,l3s0c1,l3s0c2)
    // l3s0 = new screen(cb, l3s0cs, false)
    // l3ss.push(l3s0)

    // 0 - TD Machine
    //#region 
    // c0 - Machine body
    // c1 - Screen, part 1
    // c2 - Screen, part 2
    // c3 - Badge reader
    // c4 - Back
    var l3s0c0 = new cuadro(50,50,500,500,"#808080",u,u,u,u,["What did this machine do?"])
    var l3s0c1 = new cuadro(100,100,400,100,"#000000",u,u,u,u,["Now it asks for a black badge."],"Please show a",["40px Courier New","#ffffff"])
    var l3s0c2 = new cuadro(100,200,400,100,"#000000",u,u,u,u,["Now it asks for a black badge."],"black badge",["40px Courier New","#ffffff"])
    var l3s0c3 = new cuadro(250,400,100,100,"#000000","#404040",u,u,u,["I suppose I have to show it here."])
    var l3s0c4 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,1],u,"Back",["20px Arial Black","#ffffff"])
    var l3s0cs = [l3s0c0,l3s0c1,l3s0c2,l3s0c3,l3s0c4]
    var l3s0 = new screen(cb,l3s0cs)
    //#endregion
    // 1 - Room 1N, wall 1
    //#region 
    // c0 - Full poster
    // c1 - Wall behind poster
    // c2 - Broken poster
    // c3 - Poster shard
    // c4 - TD machine
    // c5 - Lever
    // c6 - Cage
    // c7 - Chain
    // c8 - Box
    // c9 - To wall 4
    // c10 - To wall 2
    var l3s1c0 = new cuadro(250,200,100,200,"#ff8000","#ffc080",true,u,[simpleItemUse,[3.01,useKnife]],["Is that a poster?","Where's the door?"])
    var l3s1c1 = new cuadro(250,200,100,50,cb,u,u,false,u,["There's something written in","the wall. No signs","of the door, though."],"84",["50px Arial Black","#ffffff"])
    var l3s1c2 = new cuadro(250,250,100,150,"#ff8000","#ffc080",u,false,u,["Is that a poster?","Where's the door?"])
    var l3s1c3 = new cuadro(350,200,25,50,"#c0c0c0","#ffffff",u,false,[simpleItemTake,[3,3.02,"Poster shard"]],["There's a piece of the poster."])
    var l3s1c4 = new cuadro(400,250,100,150,"#404040","#c0c0c0",true,u,[changescr,0],["The machine doesn't seem", "to have changed."])
    var l3s1c5 = new cuadro(115,260,120,30,"#ffc000","#ffff40",true,u,[simpleItemUse,[3.03,greaseLever]],["What? Now I can't move", "the lever."])
    var l3s1c6 = new cuadro(50,300,100,100,"#808080","#c0c0c0",true,u,[changescr,5],["Now the box is a.. cage?"])
    var l3s1c7 = new cuadro(90,0,20,300,"#404040")
    var l3s1c8 = new cuadro(60,320,80,80,"#ff8000","#ffc080",u,false,[changescr,5],["I can reach the box now."])
    var l3s1c9 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,4])
    var l3s1c10 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,2])
    var l3s1cs = [l3s1c0,l3s1c1,l3s1c2,l3s1c3,l3s1c4,l3s1c5,l3s1c6,l3s1c7,l3s1c8,l3s1c9,l3s1c10]
    var l3s1 = new screen(cb,l3s1cs)
    //#endregion
    // 2 - Room 1N, wall 2
    //#region 
    // c0 - Green door
    // c1 - Blue trapdoor
    // c2 - Table
    // c3 - Marble pillar
    // c4 - Plantpot
    // c5 - Pine
    // c6 - Acorn
    // c7 - Behind the pillar
    // c8 - To wall 1
    // c9 - To wall 3
    var l3s2c0 = new cuadro(250,200,100,200,"#008000","#80ff80",u,u,u,["It's a green door. It's closed."])
    var l3s2c1 = new cuadro(250,0,100,50,"#000080","#8080ff",u,u,u,["It's a blue trapdoor.","It seems closed."])
    var l3s2c2 = new cuadro(50,250,100,150,"#ffc000","#ffff40",true,u,[changescr,6],["The crafting table is now a","regular table."])
    var l3s2c3 = new cuadro(450,300,50,100,"#c0c0c0",u,u,u,u,["It's a marble pillar."])
    var l3s2c4 = new cuadro(425,200,100,100,"#c04000","#ff8040",u,u,u,["Where did that tree come from?"])
    var l3s2c5 = new cuadro(450,100,50,100,"#008000","#00c000",true,u,[simpleItemUse,[3.04,activateSpin]],["It's a small pine."])
    var l3s2c6 = new cuadro(435,120,30,30,"#804000","#c08040",u,false,[simpleItemTake,[6,3.05,"Acorn"]],["There's an acorn on the pine!"])
    var l3s2c7 = new cuadro(500,300,20,100,cb,"#808080",true,u,[changescr,7],["There's something behind the pillar."])
    var l3s2c8 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,1])
    var l3s2c9 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,3])
    var l3s2cs = [l3s2c0,l3s2c1,l3s2c2,l3s2c3,l3s2c4,l3s2c5,l3s2c6,l3s2c7,l3s2c8,l3s2c9]
    var l3s2 = new screen(cb,l3s2cs)
    //#endregion
    

    var l3ss = [l3s0,l3s1,l3s2]

    function activateSpin(){ // Activates the function for growing the acorn.
        console.log("holi")
    }
    function greaseLever(){ // Makes the lever work, moving the cage.
        console.log("holi")
    }
    function useKnife(){ // Cuts the poster, showing the code and the poster shard.
        console.log("holi")
    }

    return{
        screens: l3ss,
        cheatblock: [true]
    }
}
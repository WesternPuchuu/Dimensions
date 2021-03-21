function level3(){
    var cb = "#600000"

    // ITEM LIST
    // 3.01 - Knife
    // 3.02 - Poster shard
    // 3.03 - Grease
    // 3.04 - Spin! fertilizer
    // 3.05 - Acorn
    // 3.06 - Magnet
    // 3.07 - Door key
    // 3.08 - Mailbox key
    // 3.09 - Silicon card
    // 3.10 - Iron ball
    // 3.11 - Chisel
    // 3.12 - Megagloves!

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
    var l3s1c0 = new cuadro(250,200,100,200,"#ff8000","#ffc080",true,u,[useKnife],["Is that a poster?","Where's the door?"])
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
    var l3s2c4 = new cuadro(425,200,100,100,"#c04000","#ff8040",true,u,[simpleItemUse,[3.04,activateSpin]],["Where did that tree come from?"])
    var l3s2c5 = new cuadro(450,100,50,100,"#008000","#00c000",u,u,u,["It's a small pine."])
    var l3s2c6 = new cuadro(435,120,30,30,"#804000","#c08040",u,false,[simpleItemTake,[6,3.05,"Acorn"]],["There's an acorn on the pine!"])
    var l3s2c7 = new cuadro(500,300,20,100,cb,"#808080",true,u,[changescr,7],["There's something behind the pillar."])
    var l3s2c8 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,1])
    var l3s2c9 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,3])
    var l3s2cs = [l3s2c0,l3s2c1,l3s2c2,l3s2c3,l3s2c4,l3s2c5,l3s2c6,l3s2c7,l3s2c8,l3s2c9]
    var l3s2 = new screen(cb,l3s2cs)
    //#endregion
    // 3 - Room 1N, wall 3
    //#region 
    // c0 - Wardrobe
    // c1 - Wardrobe side
    // c2 - Bottle
    // c3 - Bottle neck
    // c4 - Iron ball
    // c5 - Place for magnet
    // c6 - Magnet in place
    // c7 - Red door
    // c8 - To wall 2
    // c9 - To wall 4
    var l3s3c0 = new cuadro(100,100,250,300,"#c0c040","#ffff40",true,u,[changescr,8],["The wardrobe looks different."])
    var l3s3c1 = new cuadro(350,100,30,300,cb,"#808080",true,u,[changescr,9],["There's something strange","by the wardrobe's side."])
    var l3s3c2 = new cuadro(490,340,60,60,"#40ffff")
    var l3s3c3 = new cuadro(505,280,30,60,"#40ffff",u,u,u,u,["It's a sturdy bottle."])
    var l3s3c4 = new cuadro(505,370,30,30,"#80a0a0","#c0c0c0",u,u,u,["There's an iron ball inside","the bottle."])
    var l3s3c5 = new cuadro(470,370,20,30,cb,"#802020",true,u,[simpleItemUse,[3.06,takeBall]])
    var l3s3c6 = new cuadro(460,370,30,30,"#c0c0c0",u,u,false)
    var l3s3c7 = new cuadro(250,200,100,200,"#a00000","#ff8080",u,false,[simpleItemUse,[3.07,openDoor]],["This door is locked."])
    var l3s3c8 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,2])
    var l3s3c9 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,4])
    var l3s3cs = [l3s3c0,l3s3c1,l3s3c2,l3s3c3,l3s3c4,l3s3c5,l3s3c6,l3s3c7,l3s3c8,l3s3c9]
    var l3s3 = new screen(cb,l3s3cs)
    //#endregion
    // 4 - Room 1N, wall 4
    //#region 
    // c0 - Orange mailbox
    // c1 - Lime green mailbox
    // c2 - Fuchsia mailbox
    // c3 - Gypsum brick
    // c4 - Turquoise mailbox
    // c5 - Violet mailbox
    // c6 - Azure mailbox
    // c7 - To wall 3
    // c8 - To wall 1
    var l3s4c0 = new cuadro(200,200,100,50,"#ff8000",u,true,u,[changescr,10],["The bricks are now...","mailboxes?"])
    var l3s4c1 = new cuadro(300,200,100,50,"#80ff00",u,true,u,[changescr,11],["The bricks are now...","mailboxes?"])
    var l3s4c2 = new cuadro(150,250,100,50,"#ff0080",u,true,u,[changescr,12],["The bricks are now...","mailboxes?"])
    var l3s4c3 = new cuadro(250,250,100,50,"#ffffff",u,true,u,[changescr,13],["The bricks are now...","mailboxes?"])
    var l3s4c4 = new cuadro(350,250,100,50,"#00ff80",u,true,u,[changescr,14],["The bricks are now...","mailboxes?"])
    var l3s4c5 = new cuadro(200,300,100,50,"#8000ff",u,true,u,[changescr,15],["The bricks are now...","mailboxes?"])
    var l3s4c6 = new cuadro(300,300,100,50,"#0080ff",u,true,u,[changescr,16],["The bricks are now...","mailboxes?"])
    var l3s4c7 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,3])
    var l3s4c8 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,1])
    var l3s4cs = [l3s4c0,l3s4c1,l3s4c2,l3s4c3,l3s4c4,l3s4c5,l3s4c6,l3s4c7,l3s4c8]
    var l3s4 = new screen(cb,l3s4cs)
    //#endregion
    // 5 - Cage and box
    //#region 
    // c0 - Closed box
    // c1-c3 - Cage bars
    // c4 - Box lid
    // c5 - Box interior
    // c6 - Box bottom
    // c7 - Mailbox key
    // c8 - Back
    var l3s5c0 = new cuadro(100,250,400,250,"#ff8000",u,u,u,[openBox],["There's a box inside the cage."])
    var l3s5c1 = new cuadro(50,0,100,550,"#808080")
    var l3s5c2 = new cuadro(250,0,100,550,"#808080")
    var l3s5c3 = new cuadro(450,0,100,550,"#808080")
    var l3s5c4 = new cuadro(100,100,400,200,"#ff8000",u,u,false,u,["The box wasn't locked."])
    var l3s5c5 = new cuadro(100,300,400,150,"#804000",u,u,false,u,["The box wasn't locked."])
    var l3s5c6 = new cuadro(100,450,400,50,"#ff8000",u,u,false,u,["The box wasn't locked."])
    var l3s5c7 = new cuadro(200,350,200,50,"#ff0080","#ff80c0",u,false,[simpleItemTake,[7,3.08,"Mailbox key"]],["It's a key."])
    var l3s5c8 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,1],u,"Back",["20px Arial Black","#ffffff"])
    var l3s5cs = [l3s5c0,l3s5c1,l3s5c2,l3s5c3,l3s5c4,l3s5c5,l3s5c6,l3s5c7,l3s5c8]
    var l3s5 = new screen(cb,l3s5cs)
    //#endregion
    // 6 - Table with brochures
    //#region 
    // c0 - Table
    // c1 - Fertilizer brochure
    // c2 - Megagloves brochure
    // c3 - Back
    var l3s6c0 = new cuadro(100,100,400,400,"#ffc000")
    var l3s6c1 = new cuadro(150,200,100,200,"#008000","#00c000",u,u,u,["It's a brochure. It says:","Get your fruits faster","with Spin! Fertilizer.","Just turn around and see","the results!"],"Spin!",["50px Gill Sans MT","#00ffff"])
    var l3s6c2 = new cuadro(350,200,100,200,"#c00060","#ff20a0",u,u,u,["It's a brochure. It says:","Want to feel real strength? With","Megagloves, you'll move heavy","things in one touch!!"],"Megagloves!",["15px Forte","#c0c0c0"])
    var l3s6c3 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,2],u,"Back",["20px Arial Black","#ffffff"])
    var l3s6cs = [l3s6c0,l3s6c1,l3s6c2,l3s6c3]
    var l3s6 = new screen(cb,l3s6cs)
    //#endregion
    // 7 - Behind pillar
    //#region 
    // c0 - Pillar
    // c1 - Silicon card
    // c2 - Back
    var l3s7c0 = new cuadro(0,0,550,550,"#c0c0c0")
    var l3s7c1 = new cuadro(550,450,20,100,"#c0c0c0","#e0e0e0",true,u,[simpleItemTake,[1,3.09,"Silicon card"]],["What's this?"])
    var l3s7c2 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,2],u,"Back",["20px Arial Black","#ffffff"])
    var l3s7cs = [l3s7c0,l3s7c1,l3s7c2]
    var l3s7 = new screen(cb,l3s7cs)
    //#endregion
    // 8 - Wardrobe
    //#region 
    // c0 - Wardrobe body
    // c1 - Weight 1
    // c2 - Image 1
    // c3 - Door 1
    // c4 - Handle 1
    // c5 - Poster in place
    // c6 - Opened door 1
    // c7 - Bottom 1
    // c8 - Weight 2
    // c9 - Image 2
    // c10 - Door 2
    // c11 - Handle 2
    // c12 - Acorn in place
    // c13 - Opened door 2
    // c14 - Bottom 2
    // c15 - Magnet
    // c16 - Silicon card
    // c17 - Weight 3
    // c18 - Image 3
    // c19 - Door 3
    // c20 - Handle 3
    // c21 - Iron ball in place
    // c22 - Opened door 3
    // c23 - Bottom 3
    // c24 - Button
    // c25 - Back
    var l3s8c0 = new cuadro(100,50,400,500,"#c0c040")
    var l3s8c1 = new cuadro(150,120,100,80,"#400000","#800000",true,u,[simpleItemUse,[3.02,unlock1]],["It's a weight."])
    var l3s8c2 = new cuadro(150,100,100,20,"#008080","#00c0c0",u,u,u,["It's the image of a feather."])
    var l3s8c3 = new cuadro(250,100,200,100,"#c04040")
    var l3s8c4 = new cuadro(270,130,40,40,"#ff0000","#ff4040",u,u,[openShelf,[[3,4,6,7],u]],["It's locked."])
    var l3s8c5 = new cuadro(155,180,90,20,"#c0c0c0",u,u,false,u,["It seems that the poster had","the right weight."])
    var l3s8c6 = new cuadro(450,100,149,100,"#c04040",u,u,false)
    var l3s8c7 = new cuadro(250,100,200,100,"#c00000",u,u,false,u,["There is something written."],"37",["80px Arial","#000000"])
    var l3s8c8 = new cuadro(150,270,100,80,"#400000","#800000",true,u,[simpleItemUse,[3.05,unlock2]],["It's a weight."])
    var l3s8c9 = new cuadro(150,250,100,20,"#008080","#00c0c0",u,u,u,["It's the image of an apple."])
    var l3s8c10 = new cuadro(250,250,200,100,"#c04040")
    var l3s8c11 = new cuadro(270,280,40,40,"#ff0000","#ff4040",u,u,[openShelf,[[10,11,13,14],[15]]],["It's locked."])
    var l3s8c12 = new cuadro(170,290,60,60,"#804000",u,u,false,u,["It seems that the acorn had","the right weight."])
    var l3s8c13 = new cuadro(450,250,149,100,"#c04040",u,u,false)
    var l3s8c14 = new cuadro(250,250,200,100,"#c00000",u,u,false)
    var l3s8c15 = new cuadro(310,280,80,70,"#a0a0a0","#e0e0e0",u,false,[simpleItemUse,[3.09,unstickMagnet]],["It's a magnet. It is stuck to the","wardrobe."])
    var l3s8c16 = new cuadro(300,340,100,10,"#c0c0c0",u,u,false)
    var l3s8c17 = new cuadro(150,420,100,80,"#400000","#800000",true,u,[simpleItemUse,[3.10,unlock3]],["It's a weight."])
    var l3s8c18 = new cuadro(150,400,100,20,"#008080","#00c0c0",u,u,u,["It's the image of an anvil."])
    var l3s8c19 = new cuadro(250,400,200,100,"#c04040")
    var l3s8c20 = new cuadro(270,430,40,40,"#ff0000","#ff4040",u,u,[openShelf,[[19,20,22,23],[24]]],["It's locked."])
    var l3s8c21 = new cuadro(160,420,80,80,"#808080",u,u,false,u,["It seems that the ball had","the right weight."])
    var l3s8c22 = new cuadro(450,400,149,100,"#c04040",u,u,false)
    var l3s8c23 = new cuadro(250,400,200,100,"#c00000",u,u,false)
    var l3s8c24 = new cuadro(350,425,50,50,"#400080","#8000ff",u,false,[openI],["It's a button. Shall I press it?"])
    var l3s8c25 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,3],u,"Back",["20px Arial Black","#ffffff"])
    var l3s8cs = [l3s8c0,l3s8c1,l3s8c2,l3s8c3,l3s8c4,l3s8c5,l3s8c6,l3s8c7,l3s8c8,l3s8c9,
        l3s8c10,l3s8c11,l3s8c12,l3s8c13,l3s8c14,l3s8c15,l3s8c16,l3s8c17,l3s8c18,l3s8c19,
        l3s8c20,l3s8c21,l3s8c22,l3s8c23,l3s8c24,l3s8c25]
    var l3s8 = new screen(cb,l3s8cs)
    //#endregion
    // 9 - Behind wardrobe
    //#region 
    // c0 - Wardrobe
    // c1 - Door
    // c2 - Chisel
    // c3 - Punching mark 1
    // c4 - Punching mark 2
    // c5 - Moved wardrobe
    // c6 - Back
    var l3s9c0 = new cuadro(150,0,400,550,"#c0c040")
    var l3s9c1 = new cuadro(575,0,24,550,"#ff0000",u,u,u,u,["There's a door behind the wardrobe!"])
    var l3s9c2 = new cuadro(560,535,15,15,"#000000","#404040",true,u,[simpleItemTake,[2,3.11,"Chisel"]],["What's that?"])
    var l3s9c3 = new cuadro(200,150,100,100,"#c0c080","#ffff80",true,u,[simpleItemUse,[3.12,pushWardrobe]],["There are some...", "punching marks?"])
    var l3s9c4 = new cuadro(400,150,100,100,"#c0c080","#ffff80",true,u,[simpleItemUse,[3.12,pushWardrobe]],["There are some...", "punching marks?"])
    var l3s9c5 = new cuadro(250,0,200,400,"#c0c040",u,u,false)
    var l3s9c6 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,3],u,"Back",["20px Arial Black","#ffffff"])
    var l3s9cs = [l3s9c0,l3s9c1,l3s9c2,l3s9c3,l3s9c4,l3s9c5,l3s9c6]
    var l3s9 = new screen(cb,l3s9cs)
    //#endregion
    // 10 - Orange mailbox
    //#region 
    // c0 - Outer part
    // c1 - Door
    // c2 - Grip
    // c3 - Inner part
    // c4 - Opened door
    // c5 - Knife
    // c6 - Back
    var l3s10c0 = new cuadro(50,150,500,300,"#ff8000")
    var l3s10c1 = new cuadro(100,200,400,200,"#ff8000",u,true,u,u,["It seems it doesn't have any lock."])
    var l3s10c2 = new cuadro(125,250,100,100,"#808080","#c0c0c0",true,u,[openMB,[[1,3,4],[2,5]]])
    var l3s10c3 = new cuadro(100,200,400,200,"#804000",u,u,false)
    var l3s10c4 = new cuadro(500,200,99,200,"#c08040",u,u,false)
    var l3s10c5 = new cuadro(200,300,200,50,"#404040","#606060",u,false,[simpleItemTake,[5,3.01,"Knife"]],["It's a knife."])
    var l3s10c6 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    var l3s10cs = [l3s10c0,l3s10c1,l3s10c2,l3s10c3,l3s10c4,l3s10c5,l3s10c6]
    var l3s10 = new screen(cb,l3s10cs)
    //#endregion
    // 11 - Lime mailbox
    //#region 
    // c0 - Outer part
    // c1 - Door
    // c2-c5 - Number displayers
    // c6-c9 - Minus buttons
    // c10-c13 - Plus buttons
    // c14 - Grip
    // c15 - Inner part
    // c16 - Opened door
    // c17 - Grease
    // c18 - Back 
    var l3s11c0 = new cuadro(50,150,500,300,"#80ff00")
    var l3s11c1 = new cuadro(100,200,400,200,"#80ff00",u,u,u,u,["I wonder what's the code."])
    var l3s11c2 = new cuadro(125,275,50,50,"#808080",u,u,u,u,u,"0",["50px Courier New","#404040"])
    var l3s11c3 = new cuadro(225,275,50,50,"#808080",u,u,u,u,u,"0",["50px Courier New","#404040"])
    var l3s11c4 = new cuadro(325,275,50,50,"#808080",u,u,u,u,u,"0",["50px Courier New","#404040"])
    var l3s11c5 = new cuadro(425,275,50,50,"#808080",u,u,u,u,u,"0",["50px Courier New","#404040"])
    var l3s11c6 = new cuadro(125,250,50,25,"#408000","#80c040",true,u,[changeNum,[2,-1]],u,"-",["25px Arial","#000000"])
    var l3s11c7 = new cuadro(225,250,50,25,"#408000","#80c040",true,u,[changeNum,[3,-1]],u,"-",["25px Arial","#000000"])
    var l3s11c8 = new cuadro(325,250,50,25,"#408000","#80c040",true,u,[changeNum,[4,-1]],u,"-",["25px Arial","#000000"])
    var l3s11c9 = new cuadro(425,250,50,25,"#408000","#80c040",true,u,[changeNum,[5,-1]],u,"-",["25px Arial","#000000"])
    var l3s11c10 = new cuadro(125,325,50,25,"#408000","#80c040",true,u,[changeNum,[2,1]],u,"+",["25px Arial","#000000"])
    var l3s11c11 = new cuadro(225,325,50,25,"#408000","#80c040",true,u,[changeNum,[3,1]],u,"+",["25px Arial","#000000"])
    var l3s11c12 = new cuadro(325,325,50,25,"#408000","#80c040",true,u,[changeNum,[4,1]],u,"+",["25px Arial","#000000"])
    var l3s11c13 = new cuadro(425,325,50,25,"#408000","#80c040",true,u,[changeNum,[5,1]],u,"+",["25px Arial","#000000"])
    var l3s11c14 = new cuadro(200,375,200,25,"#808080","#c0c0c0",true,u,[checkPass],["It's locked."])
    var l3s11c15 = new cuadro(100,200,400,200,"#408000",u,u,false)
    var l3s11c16 = new cuadro(100,0,400,200,"#80c040",u,u,false)
    var l3s11c17 = new cuadro(250,300,100,100,"#402000","#604020",u,false,[simpleItemTake,[17,3.03,"Grease"]],["It's a can of grease."])
    var l3s11c18 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    var l3s11cs = [l3s11c0,l3s11c1,l3s11c2,l3s11c3,l3s11c4,l3s11c5,l3s11c6,l3s11c7,l3s11c8,l3s11c9,
        l3s11c10,l3s11c11,l3s11c12,l3s11c13,l3s11c14,l3s11c15,l3s11c16,l3s11c17,l3s11c18]
    var l3s11 = new screen(cb,l3s11cs)
    //#endregion
    // 12 - Fuchsia mailbox
    //#region 
    // c0 - Outer part
    // c1 - Door
    // c2 - Keyhole
    // c3 - Inner part
    // c4 - Opened door
    // c5 - Fertilizer
    // c6 - Back
    var l3s12c0 = new cuadro(50,150,500,300,"#ff0080")
    var l3s12c1 = new cuadro(100,200,400,200,"#ff0080")
    var l3s12c2 = new cuadro(275,325,50,50,"#c0c0c0","#e0e0e0",true,u,[simpleItemUse,[3.08,openF]],["It's a keyhole."])
    var l3s12c3 = new cuadro(100,200,400,200,"#800040",u,u,false)
    var l3s12c4 = new cuadro(100,0,400,200,"#c04080",u,u,false)
    var l3s12c5 = new cuadro(125,225,350,150,"#a08080","#c08080",u,false,[simpleItemTake,[5,3.04,"Spin! fertilizer"]],["It's a big bag of...","fertilizer?"])
    var l3s12c6 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    var l3s12cs = [l3s12c0,l3s12c1,l3s12c2,l3s12c3,l3s12c4,l3s12c5,l3s12c6]
    var l3s12 = new screen(cb,l3s12cs)
    //#endregion
    // 13 - Gypsum brick
    //#region 
    // c0 - Unchiseled brick
    // c1 - First number
    // c2 - Second number
    // c3 - Back
    var l3s13c0 = new cuadro(50,150,500,300,"#ffffff",u,true,u,[chiselB],["This is not a mailbox but some","kind of soft gypsum."])
    var l3s13c1 = new cuadro(100,200,200,200,"#606060",u,u,false,u,["What are those numbers for?"],"2",["180px Comic Sans MS","#000000"])
    var l3s13c2 = new cuadro(300,200,200,200,"#606060",u,u,false,u,["What are those numbers for?"],"1",["180px Comic Sans MS","#ffffff"])
    var l3s13c3 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    var l3s13cs = [l3s13c0,l3s13c1,l3s13c2,l3s13c3]
    var l3s13 = new screen(cb,l3s13cs)
    //#endregion
    // 14 - Turquoise mailbox
    //#region 
    // c0 - Outer part
    // c1 - Door
    // c2 - Inner part
    // c3 - Back
    var l3s14c0 = new cuadro(50,150,500,300,"#00ff80")
    var l3s14c1 = new cuadro(100,200,400,200,"#00ff80",u,true,u,[breakK],["It says 'Fragile'.","Maybe I can break it with","my bare hands."],"Fragile",["80px Courier New","#000000"])
    var l3s14c2 = new cuadro(100,200,400,200,"#008040",u,u,false,u,["What!? Is it really empty!?"])
    var l3s14c3 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    var l3s14cs = [l3s14c0,l3s14c1,l3s14c2,l3s14c3]
    var l3s14 = new screen(cb,l3s14cs)
    //#endregion
    // 15 - Violet mailbox
    //#region 
    // c0 - Outer part
    // c1 - Door
    // c2 - Grip
    // c3 - Inner part
    // c4 - Opened door
    // c5 - Door key
    // c6 - Back
    var l3s15c0 = new cuadro(50,150,500,300,"#8000ff")
    var l3s15c1 = new cuadro(100,200,400,200,"#8000ff",u,u,u,u,["It's locked."])
    var l3s15c2 = new cuadro(125,250,100,100,"#ff0000","#ff8080",u,u,[openMB,[[1,3,4],[2,5]]],["The grip has red lights."])
    var l3s15c3 = new cuadro(100,200,400,200,"#400080",u,u,false)
    var l3s15c4 = new cuadro(500,200,99,200,"#8040c0",u,u,false)
    var l3s15c5 = new cuadro(200,300,200,50,"#800000","#ff4040",u,false,[simpleItemTake,[5,3.07,"Door key"]],["It's a key."])
    var l3s15c6 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    var l3s15cs = [l3s15c0,l3s15c1,l3s15c2,l3s15c3,l3s15c4,l3s15c5,l3s15c6]
    var l3s15 = new screen(cb,l3s15cs)
    //#endregion
    // 16 - Azure mailbox
    //#region 
    // c0 - Outer part
    // c1 - Door
    // c2-c6 - Displays
    // c7 - Grip
    // c8 - Inner part
    // c9 - Opened door
    // c10 - Glove 1
    // c11 - Glove 2
    // c12 - Back 
    var l3s16c0 = new cuadro(50,150,500,300,"#0080ff")
    var l3s16c1 = new cuadro(100,200,400,200,"#0080ff",u,u,u,u,["It's locked."])
    var l3s16c2 = new cuadro(125,250,50,100,"#000000",u,u,u,u,["It's some kind of display."])
    var l3s16c3 = new cuadro(175,250,50,100,"#000000",u,u,u,u,["It's some kind of display."])
    var l3s16c4 = new cuadro(225,250,50,100,"#000000",u,u,u,u,["It's some kind of display."])
    var l3s16c5 = new cuadro(275,250,50,100,"#000000",u,u,u,u,["It's some kind of display."])
    var l3s16c6 = new cuadro(325,250,50,100,"#000000",u,u,u,u,["It's some kind of display."])
    var l3s16c7 = new cuadro(425,250,50,100,"#ff0000","#ff8080",u,u,[openMB,[[1,2,3,4,5,6,8,9],[7,10,11]]],["The grip glows red."])
    var l3s16c8 = new cuadro(100,200,400,200,"#004080",u,u,false)
    var l3s16c9 = new cuadro(0,200,100,200,"#4080c0",u,u,false)
    var l3s16c10 = new cuadro(150,300,100,50,"#ff0080","#ff80c0",u,false,[grabAnyGlove],["They are some weird gloves."])
    var l3s16c11 = new cuadro(350,300,100,50,"#ff0080","#ff80c0",u,false,[grabAnyGlove],["They are some weird gloves."])
    var l3s16c12 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#ffffff"])
    var l3s16cs = [l3s16c0,l3s16c1,l3s16c2,l3s16c3,l3s16c4,l3s16c5,l3s16c6,l3s16c7,l3s16c8,l3s16c9,
        l3s16c10,l3s16c11,l3s16c12]
    var l3s16 = new screen(cb,l3s16cs)
    //#endregion
    // 17 - Level Clear Screen!
	//#region 
    // c0 - Level Clear text
    // c1 - "Click for your password" button
    // c2 - Password
    // c3 - Warning
    // c4 - Load level 2
    // c5 - Go to level 2
    var l3s17c0 = new cuadro(100,100,600,150,"#ffff00",u,u,u,u,u,"Level Clear!!",["80px Arial Black", "#404040"])
    var l3s17c1 = new cuadro(100,300,400,50,"#00c000","#80c080",true,u,[showPassword],u,"Click for password",["40px Arial","#ffffff"])
    var l3s17c2 = new cuadro(100,400,400,50,"#000000",u,u,false,u,u,"",["20px Monospace","#00c000"])
    var l3s17c3 = new cuadro(100,500,400,50,"#000000",u,u,false,u,u,"Don't forget to write it down!",["15px Arial","#ffffff"])
    var l3s17c4 = new cuadro(550,300,150,100,"#c02020","#ff4040",u,false,[loadLev4],u,"Next",["30px Arial Black","#404040"])
    var l3s17c5 = new cuadro(550,400,150,100,"#00ff00","#60ff60",u,false,[goToLev4],u,"Go!",["30px Arial Black","#000000"])
    l3s17cs = [l3s17c0, l3s17c1, l3s17c2, l3s17c3, l3s17c4, l3s17c5]
    l3s17 = new screen("#000000", l3s17cs, false)
	//#endregion

    var l3ss = [l3s0,l3s1,l3s2,l3s3,l3s4,l3s5,l3s6,l3s7,l3s8,l3s9,
        l3s10,l3s11,l3s12,l3s13,l3s14,l3s15,l3s16,l3s17]

    function activateSpin(){ // Activates the function for growing the acorn.
        l3s2c5.c = "#008040"
        l3s2c5.high = "#00c060"
        l3s2c5.think = ["I've fertilized the tree.","Now what?"]
        l3s2c4.think = ["I've fertilized the tree.","Now what?"]
        l3s1c9.dofx = function(){appearAcorn()}
        l3s3c9.dofx = function(){appearAcorn()}
    }
    function appearAcorn(){ // Makes the acorn appear when facing away from the tree.
        l3s2c6.isVis = true
        l3s2c6.isClick = true
        changescr(4)
        l3s1c9.dofx = function(){changescr(4)}
        l3s3c9.dofx = function(){changescr(4)}
    }
    function breakK(){ // Breaks the door of the turquoise mailbox.
        const colcode = ["#40ffa0","#80ffc0","#c0ffe0","#ffffff"]
        const currcb = this.currlev.cheatblock[2]
        if (currcb < 4){
            l3s14c1.c = colcode[currcb]
            l3s14c1.high = colcode[currcb]
            this.currlev.cheatblock[2] += 1
        } else {
            openMB([[1,2],u])
        }
    }
    function changeNum(twon){ // Changes the numbers displayed in the lime mailbox.
        var moved = this.buts[twon[0]]
    	var sense = twon[1]
    	var ninc = parseInt(moved.text)
    	ninc = ninc + sense
    	if (ninc == -1){
    		ninc = 9
    	} else if (ninc == 10){
    		ninc = 0
    	}
    	moved.text = String(ninc)
    }
    function checkPass(){ // Checks if the cheatblocks are removed, then checks for password, and opens the lime mailbox.
        if (this.currlev.cheatblock[0] == 0){
            if (l3s11c2.text == "8" && l3s11c3.text == "4" && l3s11c4.text == "3" && l3s11c5.text == "7"){
                openMB([[1,15,16],[6,7,8,9,10,11,12,13,14,17]])
            }
        }
    }
    function chiselB(){ // Uses the chisel to reveal the numbers, and reduces the corresponding cheatblock.
        var loccb = true
        simpleItemUse([3.11,function(){
            quickTurn(u,u,[1,2]) // s13
            loccb = false
        }])
        if (loccb == false){
            this.currlev.cheatblock[0] -= 1
        }    
    }
    function goToLev4(){ // Level clear function. Sends to level 4 (Room 11).
        currlev = new level(4, level4)
        currscr = 0
    }
    function grabAnyGlove(){ // Grabs the gloves, regardless of the one clicked.
        quickTurn([10,11]) // s16
        inve.placeIn([3.12,"Megagloves!"])
    }
    function greaseLever(){ // Makes the lever work.
        l3s1c5.c = "#c0a000"
        l3s1c5.high = "#c0c020"
        l3s1c5.think = ["The lever is now greased."]
        l3s1c5.dofx = function(){workLever()}
    }
    function loadLev4(){ // Loads information for level 4.
    	var nl = document.createElement("script");
        nl.src = "level4.js";
        document.head.appendChild(nl);
        quickTurn([5],[4])
    }
    function openBox(){ // Opens the box.
        quickTurn([0,7],u,[4,5,6]) // s5
    }
    function openDoor(){ // Opens the red door and shows the level clear screen.
        changescr(17)
    }
    function openF(){ // Opens the fuchsia mailbox.
        openMB([[1,3,4],[2,5]])
    }
    function openI(){ // Unlocks the violet mailbox.
        animate = true
        setTimeout(function(){currscr = 4},500)
        setTimeout(function(){l3s4c5.c = "#c080ff"},1000)
        setTimeout(function(){l3s4c5.c = "#8000ff"},1500)
        setTimeout(function(){currscr = 8},2000)
        setTimeout(function(){
            l3s15c2.c = "#00ff00"
            l3s15c2.high = "#80ff80"
            l3s15c2.think = ["The grip now glows green."]
            l3s15c2.isClick = true
            l3s8c24.isClick = false
        },2001)
        setTimeout(function(){animate = false},2002)
    }
    function openMB(cuads){ // Opens the mailboxes and activates the azure mailbox.
        quickTurn(cuads[1],u,cuads[0])
        if (this.currlev.cheatblock[1] < 5){
            const cblo = this.currlev.cheatblock[1]
            l3s16cs[cblo+2].c = "#ffff00"
            l3s16cs[cblo+2].high = "#ffff00"
            l3s16cs[cblo+2].think = ["This part of the display","is lit."]
            this.currlev.cheatblock[1] += 1
        }
        if (this.currlev.cheatblock[1] == 5){
            l3s16c7.c = "#00ff00"
            l3s16c7.high = "#80ff80"
            l3s16c7.think = ["The grip glows green."]
            l3s16c7.isClick = true
        }
    }
    function openShelf(cuads){ // Opens the shelves.
        quickTurn(cuads[1],u,cuads[0]) // s8
        if (cuads[1] == u){
            this.currlev.cheatblock[0] -= 1
        }
    }
    function pushWardrobe(){ // Pushes the wardrobe and reveals the door.
        animate = true
        setTimeout(function(){
            quickTurn([3,4],u,[0,5]) //s9
        },250)
        setTimeout(function(){currscr = 3},500)
        setTimeout(function(){
            quickTurn([1,7],[0]) // s3
            l3s3c0.x0 -= 100
            l3s3c0.xmin -= 100
            l3s3c0.xmax -= 100
        },750)
        setTimeout(function(){animate = false},751)
    }
    function showPassword(){ // Creates and makes the password visible. Shows the next level button.
        l3s17c2.text = crPass(actp.cname,"324rz",[2,1,0,4,3])
        quickTurn([4],[1],[2,3]) //s17
    }
    function takeBall(){ // Takes the ball out of the bottle.
        animate = true
        setTimeout(function(){
            quickTurn([5],u,[6]) // s3
        },400)
        setTimeout(function(){
            l3s3c4.x0 = 490
        },650)
        setTimeout(function(){
            l3s3c4.y0 -= 30
            l3s3c6.y0 -= 30
        },1150)
        setTimeout(function(){
            l3s3c4.y0 -= 30
            l3s3c6.y0 -= 30
            l3s3c4.x0 += 15
            l3s3c6.x0 += 15
        },1650)
        setTimeout(function(){
            l3s3c4.y0 -= 30
            l3s3c6.y0 -= 30
        },2150)
        setTimeout(function(){
            l3s3c4.y0 -= 30
            l3s3c6.y0 -= 30
        },2650)
        setTimeout(function(){
            quickTurn(u,u,[4,6]) // s3
            inve.placeIn([3.10,"Iron ball"])
        },3150)
        setTimeout(function(){animate = false},3152)
    }
    function unlock1(){ // Unlocks the first shelf of the wardrobe.
        quickTurn(u,[1,4],[5]) //s8
        l3s8c4.c = "#00ff00"
        l3s8c4.high = "#40ff40"
        l3s8c4.think = ["The handle is now green."]
    }
    function unlock2(){ // Unlocks the second shelf of the wardrobe.
        quickTurn(u,[8,11],[12]) //s8
        l3s8c11.c = "#00ff00"
        l3s8c11.high = "#40ff40"
        l3s8c11.think = ["The handle is now green."]
    }
    function unlock3(){ // Unlocks the third shelf of the wardrobe.
        quickTurn(u,[17,20],[21]) //s8
        l3s8c20.c = "#00ff00"
        l3s8c20.high = "#40ff40"
        l3s8c20.think = ["The handle is now green."]
    }
    function unstickMagnet(){ // Separates the magnet from the wardrobe, and takes the magnet.
        animate = true
        setTimeout(function(){
            l3s8c15.y0 -= 10
            l3s8c16.isVis = true
        },500)
        setTimeout(function(){
            quickTurn([15],u,[16]) // s8
            inve.placeIn([3.06, "Magnet"])
        },1000)
        setTimeout(function(){animate = false},1001)
    }
    function useKnife(){ // Cuts the poster, showing the code and the poster shard.
        var loccb = true
        simpleItemUse([3.01,function(){
            quickTurn([3],u,[0,1,2]) // s1
            loccb = false
        }])
        if (loccb == false){
            this.currlev.cheatblock[0] -= 1
        }        
    }
    function workLever(){
        animate = true
        setTimeout(function(){
            l3s1c5.x0 = 160
			l3s1c5.y0 = 215
			l3s1c5.wi = 30
			l3s1c5.he = 120
            l3s1c6.y0 = 175
            l3s1c7.he = 175
            l3s1c8.isVis = true
        },500)
        setTimeout(function(){
            l3s1c5.x0 = 115
			l3s1c5.y0 = 260
			l3s1c5.wi = 120
			l3s1c5.he = 30
            l3s1c6.y0 = 50
            l3s1c7.he = 50
        },1000)
        setTimeout(function(){
            l3s1c8.isClick = true
            l3s1c5.isClick = false
            l3s5c1.isVis = false
            l3s5c2.isVis = false
            l3s5c3.isVis = false
            l3s5c0.isClick = true
            l3s5c0.think = ["Now I can reach the box!"]
            l3s1c7.ymax -= 250
            l3s1c6.ymin -= 250
            l3s1c6.ymax -= 250
            l3s1c6.think = ["The cage is hanging from a chain."]
        },1001)
        setTimeout(function(){
            animate = false
        },1002)
    }

    return{
        screens: l3ss,
        cheatblock: [3,0,0]
        // 0 - Parts of code remaining.
        // 1 - Number of displays lit.
        // 2 - State of smashed door.
    }
}
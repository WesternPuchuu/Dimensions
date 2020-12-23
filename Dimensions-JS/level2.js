function level2(){
	var cb = "#200000"
	// ITEM LIST
	// 2.01 - Hammer
	// 2.02 - Large step
	// 2.03 - Medium step
	// 2.04 - Small step
	// 2.05 - Tiny key
	// 2.06 - Brick shard (large)
	// 2.07 - Lever
	// 2.08 - Shelf key
	// 2.09 - Magnifying glass
	// 2.10 - Screwdriver
	// 2.11 - Brick shard (small)
	// 2.12 - Gardening trowel
	// 2.13 - Azure brick
	// 2.14 - Super glue
	// 2.15 - Orange brick


	var l2s0cs = Array()
	var l2s1cs = Array()
	var l2s2cs = Array()
	var l2s3cs = Array()
	var l2s4cs = Array()
	var l2s5cs = Array()
	var l2s6cs = Array()
	var l2s7cs = Array()
	var l2s8cs = Array()
	var l2s9cs = Array()
	var l2s10cs = Array()
	var l2s11cs = Array()
	var l2s12cs = Array()
	var l2s13cs = Array()
	var l2s14cs = Array()
	var l2s0,l2s1,l2s2,l2s3,l2s4,l2s5,l2s6,l2s7,l2s8,l2s9,l2s10,l2s11,l2s12,l2s13,l2s14
	var l2ss = Array()

	// 0 - Temporary "Thank You" screen
	// c0 - Big thanks
	// c1 - More levels soon
	// c2 - Feel free to
	var l2s0c0 = new cuadro(20,20,760,40,"#000000",u,u,u,u,u,"Thanks for playing!!",["38px Arial","#00ff00"])
	var l2s0c1 = new cuadro(0,80,800,20,cb,u,u,u,u,u,"More levels coming soon!",["20px Times New Roman","#ffffff"])
	var l2s0c2 = new cuadro(0,120,800,20,cb,u,u,u,u,u,"If you liked the game, feel free to check the code and suggest optimizations :D",["20px Arial","#ffffff"])
	l2s0cs.push(l2s0c0,l2s0c1,l2s0c2)
	l2s0 = new screen(cb, l2s0cs, false)

	// 0 - Room N1 - Wall 1
	//#region 
	// c0 - Wardrobe
	// c1 - Screws
	// c2 - Hammer
	// c3 - Code behind the wardrobe
	// c4 - Button for moving the wardrobe
	// c5 - Place for step 1
	// c6 - Place for step 2
	// c7 - Place for step 3
	// c8 - Button for seeing above the wardrobe
	// c9 - To wall 4
	// c10 - To wall 2
	// var l2s0c0 = new cuadro(100,100,250,300,"#c0c040","#ffff40",true,u,[changescr,4],["It's a wardrobe."])
	// var l2s0c1 = new cuadro(100,400,40,15,cb,"#808080",true,u,[changescr,5],["There's something in the", "corner of the wardrobe."])
	// var l2s0c2 = new cuadro(400,450,100,50,"#ff8000","#ffc080",true,u,[simpleItemTake,[2,2.01,"Hammer"]],["It's a hammer."])
	// var l2s0c3 = new cuadro(100,200,100,100,cb,u,u,false,u,["There's something written", "in the wall."],"5",["100px Arial Black", "#00ff80"])
	// var l2s0c4 = new cuadro(50,100,50,300,cb,"#808080",u,u,[pushWardrobe],["Is there something behind", "the wardrobe? I Can't move it."])
	// var l2s0c5 = new cuadro(350,350,100,50,cb,"#402020",true,u,[simpleItemUse,[2.02,activateL]])
	// var l2s0c6 = new cuadro(350,300,75,50,cb,"#402020",u,false,[simpleItemUse,[2.03,activateM]])
	// var l2s0c7 = new cuadro(350,250,50,50,cb,"#402020",u,false,[simpleItemUse,[2.04,activateS]])
	// var l2s0c8 = new cuadro(100,50,250,50,cb,"#808080",u,u,[changescr,6],["I could see what's above the", "wardrobe if I had a ladder."])              
	// var l2s0c9 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,3])
	// var l2s0c10 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,1])
	// l2s0cs.push(l2s0c0,l2s0c1,l2s0c2,l2s0c3,l2s0c4,l2s0c5,l2s0c6,l2s0c7,l2s0c8,l2s0c9,l2s0c10)
	// l2s0 = new screen(cb, l2s0cs)
	//#endregion
	// 1 - Room N1 - Wall 2
	//#region 
	// c0 - Missing orange brick
	// c1-c5 - Colored bricks (buttons to brick closeup)
	// c6 - Missing azure brick
	// c7 - Large step
	// c8 - Number in wall
	// c9 - Tiny key (after falling)
	// c10 - To wall 1
	// c11 - To wall 3
	var l2s1c0 = new cuadro(200,200,100,50,"#000000",u,true,u,[changescr,7],["What are those colored", "bricks for?"])
	var l2s1c1 = new cuadro(300,200,100,50,"#80ff00",u,true,u,[changescr,7],["What are those colored", "bricks for?"])
	var l2s1c2 = new cuadro(150,250,100,50,"#ff0080",u,true,u,[changescr,7],["What are those colored", "bricks for?"])
	var l2s1c3 = new cuadro(250,250,100,50,"#808080",u,true,u,[changescr,7],["What are those colored", "bricks for?"])
	var l2s1c4 = new cuadro(350,250,100,50,"#00ff80",u,true,u,[changescr,7],["What are those colored", "bricks for?"])
	var l2s1c5 = new cuadro(200,300,100,50,"#8000ff",u,true,u,[changescr,7],["What are those colored", "bricks for?"])
	var l2s1c6 = new cuadro(300,300,100,50,"#000000",u,true,u,[changescr,7],["What are those colored", "bricks for?"])
	var l2s1c7 = new cuadro(350,450,150,50,"#808080","#c0c0c0",true,u,[simpleItemTake,[7,2.02,"Large step"]],["Looks like some kind of step."])
	var l2s1c8 = new cuadro(450,50,100,100,cb,u,u,u,u,["There's something written", "in the wall"],"6",["100px Arial Black","#ff8000"])
	var l2s1c9 = new cuadro(150,470,20,20,"#c0c040","#ffff80",u,false,[simpleItemTake,[9,2.05,"Tiny key"]],["This little thing fell from","the box."])
	var l2s1c10 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,0])
	var l2s1c11 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,2])
	l2s1cs.push(l2s1c0,l2s1c1,l2s1c2,l2s1c3,l2s1c4,l2s1c5,l2s1c6,l2s1c7,l2s1c8,l2s1c9,
		l2s1c10,l2s1c11)
	l2s1 = new screen(cb, l2s1cs)
	//#endregion
	// 2 - Room N1 - Wall 3
	//#region 
	// c0 - Red door
	// c1 - Miniature writing
	// c2 - TD machine
	// c3 - Large brick shard
	// c4 - Box
	// c5 - Tiny key (before falling)
	// c6 - Gap for lever
	// c7 - Lever
	// c8 - Chain
	// c9 - To wall 2
	// c10 - To wall 4
	var l2s2c0 = new cuadro(250,200,100,200,"#800000","#ff8080",u,u,u,["The red door is closed again", "I can't go back now."])
	var l2s2c1 = new cuadro(310,360,40,40,"#800000","#ff4040",true,u,[changescr,8],["There's something there."])
	var l2s2c2 = new cuadro(400,250,100,150,"#404040","#c0c0c0",true,u,[changescr,9],["What's this?"])
	var l2s2c3 = new cuadro(50,500,50,50,"#ff8000","#ffc080",true,u,[simpleItemTake,[3,2.06,"Brick shard (large)"]],["Is that a broken brick?"])
	var l2s2c4 = new cuadro(50,50,100,100,"#808080","#c0c0c0",u,u,[changescr,10],["Theres a box hanging from a", "chain. I can't reach it."])
	var l2s2c5 = new cuadro(130,30,20,20,"#c0c040","#ffff80",u,u,u,["There's something over the box"])
	var l2s2c6 = new cuadro(160,260,30,30,"#000000","#404040",true,u,[simpleItemUse,[2.07,putLever]],["There's a gap on the wall.", "It looks like something","should fit there."])
	var l2s2c7 = new cuadro(150,200,50,150,"#ffc000","#ffff40",u,false,[workLever],["The lever fits perfectly."])
	var l2s2c8 = new cuadro(90,0,20,50,"#404040")
	var l2s2c9 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,1])
	var l2s2c10 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,3])
	l2s2cs.push(l2s2c0,l2s2c1,l2s2c2,l2s2c3,l2s2c4,l2s2c5,l2s2c6,l2s2c7,l2s2c8,l2s2c9,l2s2c10)
	l2s2 = new screen(cb,l2s2cs)
	//#endregion
	// 3 - Room N1 - Wall 4
	//#region 
	// c0 - Green door
	// c1 - Blue trapdoor
	// c2 - Crafting table
	// c3 - Marble pillar
	// c4 - Plantpot
	// c5 - Behind pillar
	// c6 - To wall 3
	// c7 - To wall 1
	var l2s3c0 = new cuadro(250,200,100,200,"#008000","#80ff80",u,u,u,["It's a green door. It's closed."])
	var l2s3c1 = new cuadro(250,0,100,50,"#000080","#8080ff",u,u,u,["It's a blue trapdoor.", "It seems closed."])
	var l2s3c2 = new cuadro(50,250,100,150,"#ffc000","#ffff40",true,u,[changescr,11],["It's a crafting table."])
	var l2s3c3 = new cuadro(450,300,50,100,"#c0c0c0",u,u,u,u,["It's a marble pillar."])
	var l2s3c4 = new cuadro(425,200,100,100,"#c04000","#ff8040",true,u,[changescr,12],["It's a plantpot. Has no plants, though."])
	var l2s3c5 = new cuadro(500,350,15,50,cb,"#808080",true,u,[changescr,13],["What's behind the pillar?"])
	var l2s3c6 = new cuadro(0,0,50,600,cb,"#808080",true,u,[changescr,2])
	var l2s3c7 = new cuadro(550,0,49,600,cb,"#808080",true,u,[changescr,0])
	l2s3cs.push(l2s3c0,l2s3c1,l2s3c2,l2s3c3,l2s3c4,l2s3c5,l2s3c6,l2s3c7)
	l2s3 = new screen(cb,l2s3cs)
	//#endregion
	// 4 - Wardrobe
	//#region 
	// c0 - Wardrobe body
	// c1 - Closed shelf 1
	// c2 - Closed shelf 2
	// c3 - Closed shelf 3
	// c4 - Open shelf 1
	// c5 - Open shelf 2
	// c6 - Open shelf 3
	// c7 - Tiny keyhole
	// c8 - Gap in shelf
	// c9 - Magnifying glass
	// c10 - Screwdriver
	// c11 - Small brick shard
	// c12 - Gardening trowel
	// c13 - Small step
	// c14 - Lever
	// c15 - Tiny light
	// c16 - Back
	var l2s4c0 = new cuadro(50,50,500,500,"#c0c040")
	var l2s4c1 = new cuadro(75,100,200,175,"#808000","#ffff80",true,u,[openShelf,[4,1,7,10]],["I may open the shelf."])
	var l2s4c2 = new cuadro(325,100,200,400,"#808000","#ffff80",true,u,[simpleItemUse,[2.08,openLockShelf]],["This shelf is locked."])
	var l2s4c3 = new cuadro(75,325,200,175,"#808000","#ffff80",u,u,[openShelf,[6,3,11,12]],["This shelf is closed."],"N",["100px Arial Black","#800000"])
	var l2s4c4 = new cuadro(75,100,200,175,"#804000",u,u,false)
	var l2s4c5 = new cuadro(325,100,200,400,"#804000",u,u,false)
	var l2s4c6 = new cuadro(75,325,200,175,"#804000",u,u,false)
	var l2s4c7 = new cuadro(115,210,20,20,"#c0c0c0","#e0e0e0",u,false,[simpleItemUse,[2.05,openTinyShelf]],["There's a tiny keyhole","there."])
	var l2s4c8 = new cuadro(100,175,50,75,"#202020",u,u,false)
	var l2s4c9 = new cuadro(105,180,40,70,"#404040","#606060",u,false,[simpleItemTake,[9,2.09,"Magnifying glass"]],["It's a magnifying glass."])
	var l2s4c10 = new cuadro(200,125,50,125,"#00ff00","#80ff80",u,false,[simpleItemTake,[10,2.10,"Screwdriver"]],["It's a screwdriver."])
	var l2s4c11 = new cuadro(225,350,50,125,"#ff8000","#ffc080",u,false,[simpleItemTake,[11,2.11,"Brick shard (small)"]],["Is that a broken brick?"])
	var l2s4c12 = new cuadro(100,420,100,60,"#c0c0c0","#e0e0e0",u,false,[simpleItemTake,[12,2.12,"Gardening trowel"]],["Looks like some gardening tool."])
	var l2s4c13 = new cuadro(420,220,80,220,"#808080","#c0c0c0",u,false,[simpleItemTake,[13,2.04,"Small step"]],["Looks like some kind of step."])
	var l2s4c14 = new cuadro(325,120,70,320,"#ffc000","#ffff40",u,false,[simpleItemTake,[14,2.07,"Lever"]],["It's some kind of lever."])
	var l2s4c15 = new cuadro(52,325,20,20,"#ff0000",u,u,u,u,["It's a red light."])
	var l2s4c16 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,0],u,"Back",["20px Arial Black", "#ffffff"])
	l2s4cs.push(l2s4c0,l2s4c1,l2s4c2,l2s4c3,l2s4c4,l2s4c5,l2s4c6,l2s4c7,l2s4c8,l2s4c9,
		l2s4c10,l2s4c11,l2s4c12,l2s4c13,l2s4c14,l2s4c15,l2s4c16)
	l2s4 = new screen(cb,l2s4cs)
	//#endregion
	// 5 - Screws screen
	//#region 
	// c0 - Corner of wardrobe
	// c1 - Metal plaque
	// c2 - Screw 1
	// c3 - Screw 2
	// c4 - Back
	var l2s5c0 = new cuadro(300,0,299,300,"#c0c040")
	var l2s5c1 = new cuadro(350,250,200,150,"#ffff40","#ffffa0",u,u,u,["This is holding the wardrobe to the", "floor."])
	var l2s5c2 = new cuadro(375,325,50,50,"#c0c0c0","#e0e0e0",true,u,[simpleItemUse,[2.10,screwsOff]],["It's a screw."])
	var l2s5c3 = new cuadro(475,325,50,50,"#c0c0c0","#e0e0e0",true,u,[simpleItemUse,[2.10,screwsOff]],["It's a screw."])
	var l2s5c4 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,0],u,"Back",["20px Arial Black","#ffffff"])
	l2s5cs.push(l2s5c0,l2s5c1,l2s5c2,l2s5c3,l2s5c4)
	l2s5 =  new screen(cb,l2s5cs)
	//#endregion
	// 6 - Above wardrobe
	//#region 
	// c0 - Top view of wardrobe
	// c1 - Azure brick
	// c2 - Number 4
	// c3 - Super glue
	// c4 - Back
	var l2s6c0 = new cuadro(100,0,400,550,"#c0c040")
	var l2s6c1 = new cuadro(200,100,200,100,"#0080ff","#80c0ff",true,u,[simpleItemTake,[1,2.13,"Azure brick"]],["It's a colored brick."])
	var l2s6c2 = new cuadro(350,300,100,100,"#c0c040",u,u,u,u,["There's something written there."],"4",["100px Arial Black","#0080ff"])
	var l2s6c3 = new cuadro(200,300,40,100,"#e0e0e0","#ffffff",true,u,[simpleItemTake,[3,2.14,"Super glue"]],["Its label says 'super glue'."])
	var l2s6c4 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,0],u,"Back",["20px Arial Black","#ffffff"])
	l2s6cs.push(l2s6c0,l2s6c1,l2s6c2,l2s6c3,l2s6c4)
	l2s6 = new screen(cb,l2s6cs)
	//#endregion
	// 7 - Colored bricks
	//#region 
	// c0 - Orange brick (missing)
	// c1 - Lime brick
	// c2 - Fuchsia brick
	// c3 - White brick
	// c4 - Turquoise brick
	// c5 - Violet brick
	// c6 - Azure brick (missing)
	// c7 - Back
	var l2s7c0 = new cuadro(100,150,200,100,"#000000",u,true,u,[simpleItemUse,[2.15,putOrange]],["There's a brick missing."])
	var l2s7c1 = new cuadro(300,150,200,100,"#80ff00","#c0ff80",u,u,[brickCode,[6,8,1]],["It's a lime green brick."])
	var l2s7c2 = new cuadro(0,250,200,100,"#ff0080","#ff80c0",u,u,[brickCode,[0,2,2]],["It's a fuchsia brick."])
	var l2s7c3 = new cuadro(200,250,200,100,"#808080","#c0c0c0",u,u,[takeWhite],["There's something strange with","this brick."])
	var l2s7c4 = new cuadro(400,250,199,100,"#00ff80","#80ffc0",u,u,[brickCode,[30,32,4]],["It's a turquoise brick."])
	var l2s7c5 = new cuadro(100,350,200,100,"#8000ff","#c080ff",u,u,[brickCode,[2,4,5]],["It's a violet brick."])
	var l2s7c6 = new cuadro(300,350,200,100,"#000000",u,true,u,[simpleItemUse,[2.13,putAzure]],["There's a brick missing."])
	var l2s7c7 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,1],u,"Back",["20px Arial Black","#ffffff"])
	l2s7cs.push(l2s7c0,l2s7c1,l2s7c2,l2s7c3,l2s7c4,l2s7c5,l2s7c6,l2s7c7)
	l2s7 = new screen(cb,l2s7cs)
	//#endregion
	// 8 - Door corner close-up
	//#region 
	// c0 - Door
	// c1 - Tiny writing
	// c2 - Big writing
	// c3 - Back
	var l2s8c0 = new cuadro(0,0,300,300,"#800000")
	var l2s8c1 = new cuadro(250,250,50,50,"#800000","#ff0000",true,u,[simpleItemUse,[2.09,magnify]],["I can't read it."],"3", ["4px Arial","#80ff00"])
	var l2s8c2 = new cuadro(250,250,100,100,"#800000",u,u,false,u,["Now I can read it."],"3",["100px Arial Black", "#80ff00"])
	var l2s8c3 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,2],u,"Back",["20px Arial Black","#ffffff"])
	l2s8cs.push(l2s8c0,l2s8c1,l2s8c2,l2s8c3)
	l2s8 = new screen(cb,l2s8cs)
	//#endregion
	// 9 - TD machine
	//#region 
	// c0 - Machine body
	// c1 - Screen (Part 1)
	// c2 - Screen (Part 2)
	// c3 - Badge reader
	// c4 - Back
	var l2s9c0 = new cuadro(50,50,500,500,"#808080",u,u,u,u,["What is this machine for?"])
	var l2s9c1 = new cuadro(100,100,400,100,"#000000",u,u,u,u,["Dark red badge? What's that?"],"Please show a",["40px Courier New","#ffffff"])
	var l2s9c2 = new cuadro(100,200,400,100,"#000000",u,u,u,u,["Dark red badge? What's that?"],"dark red badge",["40px Courier New","#ffffff"])
	var l2s9c3 = new cuadro(250,400,100,100,"#000000","#404040",true,u,[showBadge],["I suppose I have to show it here."])
	var l2s9c4 = new cuadro(0,550,599,50,cb,"#808080",true,u,[changescr,2],u,"Back",["20px Arial Black","#ffffff"])
	l2s9cs.push(l2s9c0,l2s9c1,l2s9c2,l2s9c3,l2s9c4)
	l2s9 = new screen(cb,l2s9cs)
	//#endregion
	// 10 - Box
	// c0 - Box body
	// c1 - Closed door
	// c2 - Door handle
	// c3 - Box interior
	// c4 - Opened door
	// c5 - Medium step
	// c6 - Back
	// var l2s10c = new cuadro(50,50,500,500, (128,128,128), (128,128,128), True, False, None,
    //             None, None)
	// var l2s10c = new cuadro(100,100,400,400), (128,128,128), (192,192,192), True, False,
    //             None, None, "Luckily, the door is open.")
	// var l2s10c = new cuadro(200,250,100,100), (224,224,224), (255,255,255), True, True, None,
    //             -2.28, "This is the handle of the box.")
	// var l2s10c = new cuadro(100,100,400,400), (64,64,64), (64,64,64), False, False, None,
    //            None, None)
	// var l2s10c = new cuadro(500,100,99,400), (128,128,128), (128,128,128), False, False, None,
    //            None, None)
	// var l2s10c = new cuadro(150,350,300,50), (128,128,128), (192,192,192), False, True, None,
    //            -0.23, "Looks like some kind of step.")
	// var l2s10c = new cuadro(0,550,599,50), (32,0,0), (128,128,128), True, True, "Back", 2,
    //           None, ["Arial Black", 20, (255,255,255)])
	l2ss.push(l2s0,l2s1,l2s2,l2s3,l2s4,l2s5,l2s6,l2s7,l2s8,l2s9)

	function activateL(){ // Places the large step, and allows the placement of the medium one.
		console.log("holi")
	}
	function activateM(){ // Places the medium step, and allows the placement of the small one.
		console.log("holi")
	}
	function activateS(){ // Places the small step, and allows to see above the wardrobe.
		console.log("holi")
	}
	function brickCode(){ // Takes the brick order, and activates the white brick if the code is ok.
		console.log("holi")
	}
	function magnify(){ // Uses the magnifying glass, and removes one cheat block
		console.log("holi")
	}
	function openLockShelf(){ // Opens the locked shelf.
		openShelf([5,2,13,14])
	}
	function openShelf(cuads){ // Generic shelf opener. Opens the unlocked shelves.
		var ivo = [cuads[0]]
		var both = cuads.slice(1)
		quickTurn(both,u,ivo)
	}
	function openTinyShelf(){ // Opens the gap in the shelf.
		openShelf([8,7,9])
	}
	function pushWardrobe(){ // Pushes the wardrobe to the right, and removes one cheat block.
		console.log("holi")
	}
	function putAzure(){ // Places the azure brick.
		console.log("holi")
	}
	function putLever(){ // Puts lever in place.
		console.log("holi")
	}
	function putOrange(){ // Places the orange brick.
		console.log("holi")
	}
	function screwsOff(){ // Removes the screws.
		console.log("holi")
	}
	function showBadge(){ // Activates TD machine.
		console.log("holi")
	}
	function takeWhite(){ // Takes the white brick, leaving a black hole behind.
		console.log("holi")
	}
	function workLever(){ // Moves lever, moves box down, and moves tiny key to its final place.
		console.log("holi")
	}

	return{
		screens:l2ss,
		cheatblock:[]
	}

}
function level2(){
	var cb = "#200000"
	// ITEM LIST
	// 2.01 - Hammer
	// 2.02 - Large step
	// 2.03 - Medium step
	// 2.04 - Small step
	// 2.05 - Tiny key
	// 2.06


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
	// var l2s0c1 = new cuadro(100,400,40,40,cb,"#808080",true,u,[changescr,5],["There's something in the", "corner of the wardrobe."])
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
	// 1 - Room N1 - Wall 2
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
	l2ss.push(l2s0,l2s1)

	function activateL(){ // Places the large step, and allows the placement of the medium one.
		console.log("holi")
	}
	function activateM(){ // Places the medium step, and allows the placement of the small one.
		console.log("holi")
	}
	function activateS(){ // Places the small step, and allows to see above the wardrobe.
		console.log("holi")
	}
	function pushWardrobe(){ // Pushes the wardrobe to the right, and removes one cheat block.
		console.log("holi")
	}

	return{
		screens:l2ss,
		cheatblock:[]
	}

}
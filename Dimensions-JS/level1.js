function level1(){
    var cb = "#000000";
	// ITEM LIST
	// 1.01 - Dark Lightbulb
	// 1.02 - Lamp
	// 1.03 - Red Key
	// 1.04 - Green Key
	// 1.05 - Blue Key
	// 1.06 - Toy Piece (legs)
	// 1.07 - Toy Piece (bodies)
	// 1.08 - Toy Piece (heads)
	// 1.09 - Lightbulb
	var l1s0cs = Array();
	var l1s1cs = Array();
	var l1s2cs = Array();
	var l1s3cs = Array();
	var l1s4cs = Array();
	var l1s5cs = Array();
	var l1s6cs = Array();
	var l1s7cs = Array();
	var l1s8cs = Array();
    var l1s9cs = Array();
    var l1s10cs = Array();
    var l1s11cs = Array();
    var l1s12cs = Array();
    var l1s13cs = Array();
	var l1s0, l1s1, l1s2, l1s3, l1s4, l1s5, l1s6, l1s7, l1s8, l1s9,
	    l1s10, l1s11, l1s12, l1s13;
	var l1ss = Array();
	//WIP screen! It will be deleted soon!
	var l1s14cs = Array();
	var l1s14

	// 0 - Wake-up text
	// c0 - Continue button
	var l1s0c0 = new cuadro(700,580,100,20,"#00FF00","#80FF80",u,false,[changescr,1],u,"Continue",["20px Arial","#000000"]);
	l1s0cs.push(l1s0c0);
	l1s0 = new screen(cb, l1s0cs, false, true, "text001.json");
    // 1 - Room NN, wall 1
    // c0 - Green door
    // c1 - Blue trapdoor
    // c2 - To wall 2
    // c3 = To wall 4
	var l1s1c0 = new cuadro(250,200,100,200,"#008000","#80FF80",u,u,[changescr,14],["It's a green door. It's closed."]);
	var l1s1c1 = new cuadro(250,0,100,50,"#000080","#8080FF",u,u,[changescr,14],["It's a blue trapdoor. It's closed."]);
	var l1s1c2 = new cuadro(550,0,49,600,"#000000","#808080",true,u,[changescr, 2]);
	var l1s1c3 = new cuadro(0,0,50,600,"#000000","#808080",true,u,[changescr, 4]);
	l1s1cs.push(l1s1c0,l1s1c1,l1s1c2,l1s1c3);
	l1s1 = new screen(cb, l1s1cs);
    // 2 - Room NN, wall 2
    // c0 - Red door
    // c1 - Table leg 1
    // c2 - Table leg 2
    // c3 - Table
    // c4 - Gap
    // c5 - To wall 1
    // c6 - To wall 3
	var l1s2c0 = new cuadro(250,200,100,200,"#800000", "#FF8080",u,u,[changescr,13],["It's a red door. It's closed."]);
	var l1s2c1 = new cuadro(400,300,30,100,"#FF8000",u,u,u,u,["Those are the legs of a table."]);
	var l1s2c2 = new cuadro(470,300,30,100,"#FF8000",u,u,u,u,["Those are the legs of a table."]);
	var l1s2c3 = new cuadro(400,250,100,50,"#FF8000","#FFC080",true,u,[changescr, 5],["There's something on the table."]);
	var l1s2c4 = new cuadro(430,350,40,50,"#000000","#808080",true,u,[changescr,6],["There's something under the table."]);
	var l1s2c5 = new cuadro(0,0,50,600,"#000000","#808080",true,u,[changescr, 1]);
	var l1s2c6 = new cuadro(550,0,49,600,"#000000","#808080",true,u,[changescr, 3]);
	l1s2cs.push(l1s2c0,l1s2c1,l1s2c2,l1s2c3,l1s2c4,l1s2c5,l1s2c6);
	l1s2 = new screen(cb, l1s2cs);
	// 3 - Room NN, wall 3
	// c0 - Bed
	// c1 - Under the bed
	// c2 - Night table
	// c3 - Tiny table
	// c4 - Partial suitcase
	// c5 - Suitcase
	// c6 - To wall 2
	// c7 - To wall 4
	var l1s3c0 = new cuadro(200,250,200,100,"#008040","#80FFC0",u,u,u,["It's a bed. I woke up from there."]);
    var l1s3c1 = new cuadro(200,350,200,30,"#000000","#808080",true,u,[changescr, 7],["Should I check under the bed?"]);
    var l1s3c2 = new cuadro(410,250,90,100,"#FF8000","#FFC080",true,u,[changescr, 8],["It's a night table."]);
    var l1s3c3 = new cuadro(100,300,90,50,"#FF0080","#FF80C0",true,u,[changescr, 9],["There's a tiny table next to the bed."]);
    var l1s3c4 = new cuadro(300,350,100,35,"#FF0000",u,u,false);
    var l1s3c5 = new cuadro(300,400,100,50,"#FF0000","#FF8080",u,false,[changescr,10],["It's a suitcase."]);
    var l1s3c6 = new cuadro(0,0,50,600,"#000000","#808080",true,u,[changescr, 2]);
	var l1s3c7 = new cuadro(550,0,49,600,"#000000","#808080",true,u,[changescr, 4]);
	l1s3cs.push(l1s3c0,l1s3c1,l1s3c2,l1s3c3,l1s3c4,l1s3c5,l1s3c6,l1s3c7);
	l1s3 = new screen(cb, l1s3cs);
	// 4 - Room NN, wall 4
	// c0 - Safe
	// c1 - Pillar
	// c2 - Lamp
	// c3 - Square shown by wrong lightbulb
	// c4 - Square shown by right lightbulb
	// c5 - To wall 3
	// c6 - To wall 1
	var l1s4c0 = new cuadro(350,200,100,100,"#404040","#C0C0C0",true,u,[changescr,11],["There's a safe on the wall."]);
    var l1s4c1 = new cuadro(115,250,70,150,"#808080","#C0C0C0",true,u,[simpleItemUse,[1.02, placeLamp]],["This pillar has a socket on its top."]);
    var l1s4c2 = new cuadro(130,200,40,50,"#00FF00","#80FF80",u,false,[changescr,12],["Should I check the lamp?"]);
    var l1s4c3 = new cuadro(100,80,100,100,"#FFFF00",u,u,false,u,["There seems to be nothing on the", "wall."]);
    var l1s4c4 = new cuadro(100,80,100,100,"#000080",u,u,false,u,["There are numbers on the wall."],"9350",["36px Arial Black","#000000"]);
    var l1s4c5 = new cuadro(0,0,50,600,"#000000","#808080",true,u,[changescr, 3]);
	var l1s4c6 = new cuadro(550,0,49,600,"#000000","#808080",true,u,[changescr, 1]);
    l1s4cs.push(l1s4c0,l1s4c1,l1s4c2,l1s4c3,l1s4c4,l1s4c5,l1s4c6);
    l1s4 = new screen(cb, l1s4cs);
	// 5 - Machine with keyholes
	// c0 - Table seen from upside
	// c1 - Red zone of the machine
	// c2 - Green zone of the machine
	// c3 - Blue zone of the machine
	// c4 - Red keyhole
	// c5 - Green keyhole
	// c6 - Blue keyhole
	// c7 - Red light
	// c8 - Green light
	// c9 - Blue light
	// c10 - Big button
	// c11 - Back to wall 2
	var l1s5c0 = new cuadro(50,50,500,500,"#FF8000");
    var l1s5c1 = new cuadro(100,150,100,100,"#FF0000");
    var l1s5c2 = new cuadro(100,250,100,100,"#00FF00");
    var l1s5c3 = new cuadro(100,350,100,100,"#0000FF");
    var l1s5c4 = new cuadro(110,160,80,80,"#000000","#808080",true,u,[simpleItemUse,[1.03, turnRedOn]],["It's a keyhole."]);
    var l1s5c5 = new cuadro(110,260,80,80,"#000000","#808080",true,u,[simpleItemUse,[1.04, turnGreenOn]],["It's a keyhole."]);
    var l1s5c6 = new cuadro(110,360,80,80,"#000000","#808080",true,u,[simpleItemUse,[1.05, turnBlueOn]],["It's a keyhole."]);
    var l1s5c7 = new cuadro(400,150,100,100,"#800000",u,u,u,u,["It's a red light. It's off."]);
    var l1s5c8 = new cuadro(400,250,100,100,"#008000",u,u,u,u,["It's a green light. It's off."]);
    var l1s5c9 = new cuadro(400,350,100,100,"#000080",u,u,u,u,["It's a blue light. It's off."]);
    var l1s5c10 = new cuadro(200,150,200,300,"#808000",u,u,u,[openDoors], ["It's a really big button!", "But it does nothing when I click it."]);
    var l1s5c11 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr, 2],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s5cs.push(l1s5c0, l1s5c1, l1s5c2, l1s5c3, l1s5c4, l1s5c5, l1s5c6, l1s5c7, l1s5c8, l1s5c9,
    	        l1s5c10, l1s5c11);
    l1s5 = new screen(cb, l1s5cs);
	// 6 - Under the table
	// c0 - Left leg
	// c1 - Right leg
	// c2 - Dark lightbulb
	// c3 - Back to wall 2
	var l1s6c0 = new cuadro(0,0,200,550,"#FF8000")
    var l1s6c1 = new cuadro(400,0,199,550,"#FF8000")
    var l1s6c2 = new cuadro(210,210,180,180,"#004080","#80C0FF",true,u,[simpleItemTake,[2,1.01,"Dark Lightbulb"]],["It's a dark lightbulb."])
    var l1s6c3 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr, 2],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s6cs.push(l1s6c0,l1s6c1,l1s6c2,l1s6c3);
    l1s6 = new screen(cb, l1s6cs);
    // 7 - Under the bed
    // c0 - Lower part of the bed
    // c1 - Lamp
    // c2 - Suitcase
    // c3 - Back to wall 3
    var l1s7c0 = new cuadro(0,0,599,300,"#008040");
    var l1s7c1 = new cuadro(50,400,100,100,"#00FF00","#80FF80",true,u,[simpleItemTake,[1,1.02,"Lamp"]],["It's a lamp."]);
    var l1s7c2 = new cuadro(200,350,350,200,"#FF0000","#FF8080",true,u,[moveSuitcase],["Is that a suitcase?"]);
    var l1s7c3 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr, 3],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s7cs.push(l1s7c0,l1s7c1,l1s7c2,l1s7c3);
    l1s7 = new screen(cb, l1s7cs);
    // 8 - Night table
    // c0 - Night table body
    // c1 - Book
    // c2 - Lower part of toy
    // c3 - Back to wall 3
    var l1s8c0 = new cuadro(50,50,500,500,"#FF8000");
    var l1s8c1 = new cuadro(100,150,200,300,"#a000a0","#FF80FF",u,u,u,["It's a book.", "Suzette the ornithocephalic", "mermaid."]);
    var l1s8c2 = new cuadro(350,200,150,200,"#808080","#C0C0C0",true,u,[simpleItemTake,[2,1.06,"Toy Piece (legs)"]],["Looks like some kind of toy."]);
    var l1s8c3 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr, 3],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s8cs.push(l1s8c0,l1s8c1,l1s8c2,l1s8c3);
    l1s8 = new screen(cb, l1s8cs);
    // 9 - Tiny table
    // c0 - Table body
    // c1 - Toy stand
    // c2 - Place where the legs go
    // c3 - Place where the bodies go
    // c4 - Place where the heads go
    // c5 - Legs of toy
    // c6 - Bodies of toy
    // c7 - Heads of toy
    // c8 - Left legs spinner
    // c9 - Right legs spinner
    // c10 - Left bodies spinner
    // c11 - Right bodies spinner
    // c12 - Left heads spinner
    // c13 - Right heads spinner
    // c14 - Hidden space
    // c15 - Blue key
    // c16 - Back to wall 3
    var l1s9c0 = new cuadro(0,500,599,50,"#FF0080");
    var l1s9c1 = new cuadro(100,400,450,100,"#8000FF",u,u,u,u,["It's a stand for some toy."],"Suzette!   ",["80px Comic Sans MS","#000000"]);
    var l1s9c2 = new cuadro(100,300,400,100,"#000000","#808080",true,u,[simpleItemUse,[1.06,putLegs]]);
    var l1s9c3 = new cuadro(100,200,400,100,"#000000","#808080",u,false,[simpleItemUse,[1.07,putBody]]);
    var l1s9c4 = new cuadro(100,100,400,100,"#000000","#808080",u,false,[simpleItemUse,[1.08,putHead]]);
    var l1s9c5 = new cuadro(100,300,400,100,"#0080FF","#80C0FF",u,false,u,["It shows the legs of a penguin."]);
    var l1s9c6 = new cuadro(100,200,400,100,"#0080FF","#80C0FF",u,false,u,["It shows the body of a penguin."]);
    var l1s9c7 = new cuadro(100,100,400,100,"#0080FF","#80C0FF",u,false,u,["It shows the head of a penguin."]);
    var l1s9c8 = new cuadro(50,300,50,100,"#000000","#808080",u,false,[spinToy,[5,-1]],["It seems I can spin this toy."],"<-",["20px Arial","#FFFFFF"]);
    var l1s9c9 = new cuadro(500,300,50,100,"#000000","#808080",u,false,[spinToy,[5,1]],["It seems I can spin this toy."],"->",["20px Arial","#FFFFFF"]);
    var l1s9c10 = new cuadro(50,200,50,100,"#000000","#808080",u,false,[spinToy,[6,-1]],["It seems I can spin this toy."],"<-",["20px Arial","#FFFFFF"]);
    var l1s9c11 = new cuadro(500,200,50,100,"#000000","#808080",u,false,[spinToy,[6,1]],["It seems I can spin this toy."],"->",["20px Arial","#FFFFFF"]);
    var l1s9c12 = new cuadro(50,100,50,100,"#000000","#808080",u,false,[spinToy,[7,-1]],["It seems I can spin this toy."],"<-",["20px Arial","#FFFFFF"]);
    var l1s9c13 = new cuadro(500,100,50,100,"#000000","#808080",u,false,[spinToy,[7,1]],["It seems I can spin this toy."],"->",["20px Arial","#FFFFFF"]);
    var l1s9c14 = new cuadro(505,405,40,90,"#000000",u,u,false);
    var l1s9c15 = new cuadro(510,410,30,80,"#0000FF","#8080FF",u,false,[simpleItemTake,[15,1.05,"Blue Key"]],["It's a blue key."]);
    var l1s9c16 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr, 3],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s9cs.push(l1s9c0, l1s9c1, l1s9c2, l1s9c3, l1s9c4, l1s9c5, l1s9c6, l1s9c7, l1s9c8, l1s9c9,
                l1s9c10, l1s9c11, l1s9c12, l1s9c13, l1s9c14, l1s9c15, l1s9c16);
    l1s9 = new screen(cb, l1s9cs);
    // 10 - Suitcase
    // c0 - Suitcase body
    // c1 - First number
    // c2 - Second number
    // c3 - Third number
    // c4 - Fourth number
    // c5 - Move down 1
    // c6 - Move up 1
    // c7 - Move down 2
    // c8 - Move up 2
    // c9 - Move down 3
    // c10 - Move up 3
    // c11 - Move down 4
    // c12 - Move up 4
    // c13 - Button
    // c14 - Inner part of suitcase
    // c15 - Red key
    // c16 - Middle part of toy
    // c17 - Back to wall 3
    var l1s10c0 = new cuadro(50,300,500,200,"#FF0000"); 
    var l1s10c1 = new cuadro(100,405,40,40,"#808000",u,u,u,u,u,"0",["40px Arial Black", "#FFFF00"]);
    var l1s10c2 = new cuadro(160,405,40,40,"#808000",u,u,u,u,u,"0",["40px Arial Black", "#FFFF00"]);
    var l1s10c3 = new cuadro(220,405,40,40,"#808000",u,u,u,u,u,"0",["40px Arial Black", "#FFFF00"]);
    var l1s10c4 = new cuadro(280,405,40,40,"#808000",u,u,u,u,u,"0",["40px Arial Black", "#FFFF00"]);
    var l1s10c5 = new cuadro(100,370,40,20,"#404040","#808080",true,u,[changeNumber,[1,-1]],u,"-",["20px Arial","#FFFFFF"]);
    var l1s10c6 = new cuadro(100,460,40,20,"#404040","#808080",true,u,[changeNumber,[1,1]],u,"+",["20px Arial","#FFFFFF"]);
    var l1s10c7 = new cuadro(160,370,40,20,"#404040","#808080",true,u,[changeNumber,[2,-1]],u,"-",["20px Arial","#FFFFFF"]);
    var l1s10c8 = new cuadro(160,460,40,20,"#404040","#808080",true,u,[changeNumber,[2,1]],u,"+",["20px Arial","#FFFFFF"]);
    var l1s10c9 = new cuadro(220,370,40,20,"#404040","#808080",true,u,[changeNumber,[3,-1]],u,"-",["20px Arial","#FFFFFF"]);
    var l1s10c10 = new cuadro(220,460,40,20,"#404040","#808080",true,u,[changeNumber,[3,1]],u,"+",["20px Arial","#FFFFFF"]);
    var l1s10c11 = new cuadro(280,370,40,20,"#404040","#808080",true,u,[changeNumber,[4,-1]],u,"-",["20px Arial","#FFFFFF"]);
    var l1s10c12 = new cuadro(280,460,40,20,"#404040","#808080",true,u,[changeNumber,[4,1]],u,"+",["20px Arial","#FFFFFF"]);
    var l1s10c13 = new cuadro(450,400,50,50,"#000000","#404040",true,u,[openSuitcase],["This button should open", "the suitcase. I wonder", "what's the code."]);
    var l1s10c14 = new cuadro(50,50,500,300,"#A00000",u,u,false);
    var l1s10c15 = new cuadro(100,150,25,100,"#FF0000","#FF8080",u,false,[simpleItemTake,[15,1.03,"Red Key"]],["It's a red key."]);
    var l1s10c16 = new cuadro(250,150,200,100,"#808080","#C0C0C0",u,false,[simpleItemTake,[16,1.07,"Toy Piece (bodies)"]],["Looks like some kind of toy."]);
    var l1s10c17 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr, 3],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s10cs.push(l1s10c0, l1s10c1, l1s10c2, l1s10c3, l1s10c4, l1s10c5, l1s10c6, l1s10c7, l1s10c8, l1s10c9, 
                 l1s10c10, l1s10c11, l1s10c12, l1s10c13, l1s10c14, l1s10c15, l1s10c16, l1s10c17);
    l1s10 = new screen(cb, l1s10cs);
    // 11 - Safe
    // c0 - Outer part of safe
    // c1 - Door of safe
    // c2 - Empty socket
    // c3 - Wrong handle
    // c4 - Right handle
    // c5 - Interior of safe
    // c6 - Green key
    // c7 - Top part of toy
    // c8 - Opened door
    // c9 - Back to wall 4
    var l1s11c0 = new cuadro(100,100,400,400,"#404040");
    var l1s11c1 = new cuadro(150,200,300,200,"#404040","#C0C0C0",u,u,u,["The safe's door is locked."]);
    var l1s11c2 = new cuadro(200,275,50,50,"#404020","#606040",true,u,[doubleHandle],["It doesn't have a handle","but an empty socket.","How weird."]);
    var l1s11c3 = new cuadro(185,260,80,80,"#004080","#80C0FF",u,false,[takeBulbBack],["It looks too fragile.", "I may break it if I twist it."]);
    var l1s11c4 = new cuadro(185,260,80,80,"#C0C000","#FFFFFF",u,false,[openSafe],["Now I could open this."]);
    var l1s11c5 = new cuadro(150,200,300,200,"#000000",u,u,false);
    var l1s11c6 = new cuadro(200,375,100,25,"#00FF00","#80FF80",u,false,[simpleItemTake,[6,1.04,"Green Key"]],["It's a green key."]);
    var l1s11c7 = new cuadro(325,225,75,150,"#808080","#C0C0C0",u,false,[simpleItemTake,[7,1.08,"Toy Piece (heads)"]],["Looks like some kind of toy."]);
    var l1s11c8 = new cuadro(450,200,149,200,"#202020",u,u,false);
    var l1s11c9 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s11cs.push(l1s11c0, l1s11c1, l1s11c2, l1s11c3, l1s11c4, l1s11c5, l1s11c6, l1s11c7, l1s11c8,l1s11c9);
    l1s11 = new screen(cb, l1s11cs);
    // 12 - Lamp
    // c0 - Lamp body
    // c1 - Switch
    // c2 - Light bulb in socket
    // c3 - Empty socket
    // c4 - Dark lightbulb in socket
    // c5 - Back to wall 4
    var l1s12c0 = new cuadro(150,100,300,450,"#00FF00");
    var l1s12c1 = new cuadro(250,400,100,100,"#FF0000","#FF8080",true,u,[turnLamp],["This button should turn the lamp on."]);
    var l1s12c2 = new cuadro(200,150,200,200,"#C0C000","#FFFFFF",true,u,[lbTake],["There's a lightbulb connected."]);
    var l1s12c3 = new cuadro(200,150,200,200,"#404040","#808080",u,false,[lbsPlace],["The socket is empty."]);
    var l1s12c4 = new cuadro(200,150,200,200,"#004080","#80C0FF",u,false,u,["The dark lightbulb is connected."]);
    var l1s12c5 = new cuadro(0,550,599,50,"#000000","#808080",true,u,[changescr,4],u,"Back",["20px Arial Black","#FFFFFF"]);
    l1s12cs.push(l1s12c0, l1s12c1, l1s12c2, l1s12c3, l1s12c4, l1s12c5);
    l1s12 = new screen(cb, l1s12cs);
    // 13 - Level Clear Screen!
    // c0 - Level Clear text
    // c1 - "Click for your password" button
    // c2 - Password
    // c3 - Warning
    // c4 - Load level 2
    // c5 - Go to level 2
    var l1s13c0 = new cuadro(100,100,600,150,"#ffff00",u,u,u,u,u,"Level Clear!!",["80px Arial Black", "#404040"])
    var l1s13c1 = new cuadro(100,300,400,50,"#00c000","#80c080",true,u,[showPassword],u,"Click for password",["40px Arial","#ffffff"])
    var l1s13c2 = new cuadro(100,400,400,50,"#000000",u,u,false,u,u,"",["20px Monospace","#00c000"])
    var l1s13c3 = new cuadro(100,500,400,50,"#000000",u,u,false,u,u,"Don't forget to write it down!",["15px Arial","#ffffff"])
    var l1s13c4 = new cuadro(550,300,150,100,"#c02020","#ff4040",u,false,[loadLev2],u,"Next",["30px Arial Black","#404040"])
    var l1s13c5 = new cuadro(550,400,150,100,"#00ff00","#60ff60",u,false,[goToLev2],u,"Go!",["30px Arial Black","#000000"])
    l1s13cs.push(l1s13c0, l1s13c1, l1s13c2, l1s13c3, l1s13c4, l1s13c5)
    l1s13 = new screen("#000000", l1s13cs, false)
    // 14 - WIP Screen...Hopely to be deleted
    // c0 - WIP text
    // c1 - "Please" text
    // c2 - Back to wall 1
    var l1s14c0 = new cuadro(100,100,600,200,"#FFFF00",u,u,u,u,u,"Work In Progress!!",["58px Arial Black", "#000000"])
    var l1s14c1 = new cuadro(200,350,400,50,"#000000",u,u,u,u,u,"Please leave by the red door.",["40px Times New Roman", "#FFFF80"])
    var l1s14c2 = new cuadro(300,450,200,100,"#00FF00",u,true,u,[changescr,1],u,"Back",["80px Comic Sans MS", "#000000"])
    l1s14cs.push(l1s14c0, l1s14c1, l1s14c2);
    l1s14 = new screen(cb, l1s14cs, false)

	l1ss.push(l1s0,l1s1,l1s2,l1s3,l1s4,l1s5,l1s6,l1s7,l1s8,l1s9,l1s10,l1s11,l1s12,l1s13,l1s14);

    function changeNumber(vals){ // Changes the numbers in the suitcase.
    	var moved = this.buts[vals[0]]
    	var sense = vals[1]
    	var ninc = parseInt(moved.text)
    	ninc = ninc + sense
    	if (ninc == -1){
    		ninc = 9
    	} else if (ninc == 10){
    		ninc = 0
    	}
    	moved.text = String(ninc)
    }
    function doubleHandle(){ // Places any of the lightbulbs, priorizing the right one.
    	if (inve.sack.some(par => par[0] == 1.09) == true){
    		inve.sack.splice(inve.sack.findIndex(par => par[0] == 1.09),1);
    		quickTurn([2,4]) //s11
    	} else if (inve.sack.some(par => par[0] == 1.01) == true){
    		inve.sack.splice(inve.sack.findIndex(par => par[0] == 1.01),1);
    		quickTurn([2,3]) //s11
    	}
    }
    function goToLev2(){ // Level clear function. Sends to level 2 (Room N1).
        actp.route = "R"
        currlev = new level(2, level2)
        currscr = 0
    }
    function lbsPlace(){ // Places the dark lightbulb in the socket, or the regular lightbulb back.
    	if (inve.sack.some(par => par[0] == 1.01) == true){
    		inve.sack.splice(inve.sack.findIndex(par => par[0] == 1.01),1);
    		quickTurn([3],[1],[4]) //s12
    		l1s12c1.think = ["This button should turn the lamp on."]
    	} else if (inve.sack.some(par => par[0] == 1.09) == true){
    		inve.sack.splice(inve.sack.findIndex(par => par[0] == 1.09),1);
    		quickTurn([3,2],[1]) //s12
    		l1s12c1.think = ["This button should turn the lamp on."]
    	}
    }
    function lbTake(){ // Takes the lightbulb, shows the socket, and blocks the switch.
    	simpleItemTake([2,1.09,"Lightbulb"])
    	quickTurn([3],[1]) //s12
    	l1s12c1.think = ["It won't turn on without a lightbulb."]

    }
    function loadLev2(){ // Loads information for level 2.
    	var nl = document.createElement("script");
        nl.src = "level2.js";
        document.head.appendChild(nl);
        quickTurn([5],[4])
    }
    function moveSuitcase(){ // Moves the suitcase out of under the bed.
    	animate = true
    	quickTurn([2]) //s6
    	setTimeout(function(){
    		l1s3c4.isVis = true
    		currscr = 3
    	},500)
    	setTimeout(function(){
    		quickTurn([5],u,[4]) //s3
    	},1000)
    	setTimeout(function(){
    		animate = false
    	},1002)    	
    }
	function openDoors(){ // Opens the doors and the trapdoor.
		animate = true
		setTimeout(function(){currscr = 2},500)
		setTimeout(function(){l1s2c0.c = "#FF8080"},1000)
		setTimeout(function(){l1s2c0.c = "#FF0000"},1500)
		setTimeout(function(){currscr = 1},2000)
		setTimeout(function(){l1s1c0.c = "#80FF80"},2500)
		setTimeout(function(){l1s1c0.c = "#00FF00"},3000)
		setTimeout(function(){l1s1c1.c = "#8080FF"},3500)
		setTimeout(function(){l1s1c1.c = "#0000FF"},4000)
		setTimeout(function(){
			currscr = 5
			l1s2c0.isClick = true
			l1s2c0.think = ["The red door is open!"]
			l1s1c0.isClick = true
			l1s1c0.think = ["The green door is open!"]
			l1s1c1.isClick = true
			l1s1c1.think = ["A ladder fell from the trapdoor!"]
		},4500)
		setTimeout(animate = false, 4502)
	}
	function openSafe(){ // Opens the safe.
		quickTurn([4,6,7],u,[1,5,8]) //s11
	}
	function openSuitcase(){ // Opens the suitcase when the combination is discovered and right.
		if (this.currlev.cheatblock[0] == false){
			if (l1s10c1.text == "9" && l1s10c2.text == "3" && l1s10c3.text == "5" && l1s10c4.text == "0"){
				quickTurn([15,16],[5,6,7,8,9,10,11,12,13],[14]) //s10
			}
		}
	}
	function placeLamp(){ // Places the lamp on the pillar.
		quickTurn([2]) //s4
	}
	function putBody(){ // Places the middle part of the toy and allows the placement of the top part.
		quickTurn([3,4],u,[6]) //s9
	}
	function putHead(){ // Places the top part of the toy and makes the arrows visible.
		quickTurn([4,8,9,10,11,12,13],u,[7]) //s9
	}
	function putLegs(){ // Places the bottom part of the toy and allows the placement of the middle part.
		quickTurn([2,3],u,[5]) //s9
	}
    function showPassword(){ // Creates and makes the password visible. Shows the next level button.
        l1s13c2.text = actp.crPass("f4768",[0,1,4,3,2])
        quickTurn([4],[1],[2,3]) //s13
    }
	function spinToy(vals){ // Spins the toy, checks for the right positions, and opens the hidden space.
		var moved = this.buts[vals[0]];
		var sense = vals[1];
		var colframe = Array();
		var toyparts = Array();
		colframe.push("#0080FF","#80FF00","#FF8000","#80C0FF","#C0FF80","#FFC080","penguin.","fish.","woman.");
		toyparts.push(["legs","tail"],["body"],["head"])
		var actnum = colframe.indexOf(moved.c);
		actnum = actnum + sense;
		if (actnum == 3){
			actnum = 0
		} else if (actnum == -1){
			actnum = 2
		}
		var newcolor = colframe[actnum]
		var newhigh = colframe[actnum+3]
		var newshape = colframe[actnum+6]
		var curpartl = toyparts[vals[0]-5]
		var curpart
		if (curpartl.length == 2){
			if (actnum == 1){
				curpart = curpartl[1]
			} else {
			    curpart = curpartl[0]
			}
		} else {
		    curpart = curpartl[0]
		}
		moved.c = newcolor
		moved.high = newhigh
		moved.think = ["It shows the ".concat(curpart).concat(" of a ").concat(newshape)]
		if (l1s9c5.c == "#80FF00" && l1s9c6.c == "#FF8000" && l1s9c7.c == "#0080FF"){
			quickTurn([15],[8,9,10,11,12,13],[14]) //s9
		}
	}
	function takeBulbBack(){ // Takes the dark lighbulb back to the inventory and restores the socket.
		quickTurn([2]) //s11
		l1s11c2.isVis = true
		l1s11c2.isClick = true
		simpleItemTake([3,1.01,"Dark Lightbulb"])
	}
	function turnAnyOn(kh,khc,l,lc,t){ // Turns lights on and checks if they are all on.
		kh.c = khc;
		kh.high = khc;
		kh.think = ["The ".concat(t).concat(" key fits perfectly.")];
		l.c = lc;
		l.high = lc;
		l.think = ["The ".concat(t).concat(" light is on.")];
		if (l1s5c7.c == "#FF8080" && l1s5c8.c == "#80FF80" && l1s5c9.c == "#8080FF"){
			l1s5c10.c = "#FFFF00";
			l1s5c10.high = "#FFFF80";
			l1s5c10.isClick = true;
			l1s5c10.think = ["It seems I activated the button."];
		}
	}
	function turnBlueOn(){ // Wrapper for blue light in table.
		turnAnyOn(l1s5c6,"#0000FF",l1s5c9,"#8080FF","blue");
	}
	function turnGreenOn(){ // Wrapper for green light in table.
		turnAnyOn(l1s5c5,"#00FF00",l1s5c8,"#80FF80","green");
	}
	function turnLamp(){ // Turns the lamp on or off (with lightbulb), or just on (with dark lightbulb), and removes cheat block.
		if (l1s12c2.isVis == true){
			if (l1s12c2.c == "#C0C000"){
				animate = true;
				l1s12c2.c = "#FFFFC0"
				l1s12c2.think = ["The light is on."]
				l1s12c2.isClick = false
				l1s12c1.think = ["This button should turn the lamp off."]
				setTimeout(function(){
    		        currscr = 4
    	        },500)
    	        setTimeout(function(){
    		        l1s4c3.isVis = true
    	        },1000)
    	        setTimeout(function(){
    	        	currscr = 12
    	        },1500)
    	        setTimeout(function(){
    		        animate = false
    	        },1502)    	
			} else {
                l1s12c2.c = "#C0C000"
                l1s12c2.isClick = true
                l1s12c2.think = ["There's a lightbulb connected."]
                l1s12c1.think = ["This button should turn the lamp on."]
                l1s4c3.isVis = false
            }
		} else if (l1s12c4.isVis == true){
			l1s12c4.c = "#40A0FF"
			l1s4c4.isVis = true
			l1s12c1.isClick = false
			this.currlev.cheatblock[0] = false
		}
	}
	function turnRedOn(){ // Wrapper for red light in table.
		turnAnyOn(l1s5c4,"#FF0000",l1s5c7,"#FF8080","red");
	}
	
	
	
	
	return{
		screens: l1ss,
		cheatblock: [true]
	}
}
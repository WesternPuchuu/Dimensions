function level0(){
	var l0s0cs = Array()
	var l0s1cs = Array()
	var l0s2cs = Array()
	var l0s0,l0s1,l0s2
	var l0ss = Array()


	// 0 - Main
	// c0 - Title
	// c1 - New game button
	// c2 - Password button
	var l0s0c0 = new cuadro(100,100,600,200,"#808000",u,u,u,u,u,"Dimensions",["80px Arial Black", "#00FF00"])
	var l0s0c1 = new cuadro(150,400,200,100,"#0000C0","#8080FF",true,u,[beginGame],u,"New Game",["30px Arial Black","#FFFF00"])
	var l0s0c2 = new cuadro(450,400,200,100,"#0000C0","#8080FF",true,u,[changescr,1],u,"Password",["30px Arial Black","#FFFF00"])
	l0s0cs.push(l0s0c0,l0s0c1,l0s0c2)
	l0s0 = new screen("#000000", l0s0cs, false)
    // 1 - Password screen
    // c0 - Written password
    // c1-c36 - Alphanumeric buttons
    // c37 - Erase
    // c38 - Confirm
    // c39 - Back
    var l0s1c0 = new cuadro(40,50,720,100,"#808080",u,u,u,u,u,"***-***-***-***-***",["50px Monospace","#00c000"])
    var l0s1c1 = new cuadro(40,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"a"],u,"a",["40px Monospace","#400000"])
    var l0s1c2 = new cuadro(120,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"b"],u,"b",["40px Monospace","#400000"])
    var l0s1c3 = new cuadro(200,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"c"],u,"c",["40px Monospace","#400000"])
    var l0s1c4 = new cuadro(280,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"d"],u,"d",["40px Monospace","#400000"])
    var l0s1c5 = new cuadro(360,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"e"],u,"e",["40px Monospace","#400000"])
    var l0s1c6 = new cuadro(440,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"f"],u,"f",["40px Monospace","#400000"])
    var l0s1c7 = new cuadro(520,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"g"],u,"g",["40px Monospace","#400000"])
    var l0s1c8 = new cuadro(600,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"h"],u,"h",["40px Monospace","#400000"])
    var l0s1c9 = new cuadro(680,190,80,80,"#404040","#c0c0c0",true,u,[pswrite,"i"],u,"i",["40px Monospace","#400000"])
    var l0s1c10 = new cuadro(40,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"j"],u,"j",["40px Monospace","#400000"])
    var l0s1c11 = new cuadro(120,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"k"],u,"k",["40px Monospace","#400000"])
    var l0s1c12 = new cuadro(200,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"l"],u,"l",["40px Monospace","#400000"])
    var l0s1c13 = new cuadro(280,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"m"],u,"m",["40px Monospace","#400000"])
    var l0s1c14 = new cuadro(360,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"n"],u,"n",["40px Monospace","#400000"])
    var l0s1c15 = new cuadro(440,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"o"],u,"o",["40px Monospace","#400000"])
    var l0s1c16 = new cuadro(520,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"p"],u,"p",["40px Monospace","#400000"])
    var l0s1c17 = new cuadro(600,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"q"],u,"q",["40px Monospace","#400000"])
    var l0s1c18 = new cuadro(680,270,80,80,"#404040","#c0c0c0",true,u,[pswrite,"r"],u,"r",["40px Monospace","#400000"])
    var l0s1c19 = new cuadro(40,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"s"],u,"s",["40px Monospace","#400000"])
    var l0s1c20 = new cuadro(120,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"t"],u,"t",["40px Monospace","#400000"])
    var l0s1c21 = new cuadro(200,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"u"],u,"u",["40px Monospace","#400000"])
    var l0s1c22 = new cuadro(280,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"v"],u,"v",["40px Monospace","#400000"])
    var l0s1c23 = new cuadro(360,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"w"],u,"w",["40px Monospace","#400000"])
    var l0s1c24 = new cuadro(440,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"x"],u,"x",["40px Monospace","#400000"])
    var l0s1c25 = new cuadro(520,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"y"],u,"y",["40px Monospace","#400000"])
    var l0s1c26 = new cuadro(600,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"z"],u,"z",["40px Monospace","#400000"])
    var l0s1c27 = new cuadro(680,350,80,80,"#404040","#c0c0c0",true,u,[pswrite,"0"],u,"0",["40px Monospace","#400000"])
    var l0s1c28 = new cuadro(40,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"1"],u,"1",["40px Monospace","#400000"])
    var l0s1c29 = new cuadro(120,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"2"],u,"2",["40px Monospace","#400000"])
    var l0s1c30 = new cuadro(200,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"3"],u,"3",["40px Monospace","#400000"])
    var l0s1c31 = new cuadro(280,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"4"],u,"4",["40px Monospace","#400000"])
    var l0s1c32 = new cuadro(360,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"5"],u,"5",["40px Monospace","#400000"])
    var l0s1c33 = new cuadro(440,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"6"],u,"6",["40px Monospace","#400000"])
    var l0s1c34 = new cuadro(520,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"7"],u,"7",["40px Monospace","#400000"])
    var l0s1c35 = new cuadro(600,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"8"],u,"8",["40px Monospace","#400000"])
    var l0s1c36 = new cuadro(680,430,80,80,"#404040","#c0c0c0",true,u,[pswrite,"9"],u,"9",["40px Monospace","#400000"])
    var l0s1c37 = new cuadro(40,550,240,50,"#ffff00","#ffffc0",u,u,[eraseone],u,"Erase",["20px Arial Black","#000000"])
    var l0s1c38 = new cuadro(520,550,240,50,"#ff0000",u,u,u,[accePass],u,"Confirm",["20px Arial Black","#000000"])
    var l0s1c39 = new cuadro(280,550,240,50,"#000000","#808080",true,u,[changescr,0],u,"Back",["20px Arial Black","#ffffff"])
    l0s1cs.push(l0s1c0,l0s1c1,l0s1c2,l0s1c3,l0s1c4,l0s1c5,l0s1c6,l0s1c7,l0s1c8,l0s1c9,
	            l0s1c10,l0s1c11,l0s1c12,l0s1c13,l0s1c14,l0s1c15,l0s1c16,l0s1c17,l0s1c18,l0s1c19,
	            l0s1c20,l0s1c21,l0s1c22,l0s1c23,l0s1c24,l0s1c25,l0s1c26,l0s1c27,l0s1c28,l0s1c29,
	            l0s1c30,l0s1c31,l0s1c32,l0s1c33,l0s1c34,l0s1c35,l0s1c36,l0s1c37,l0s1c38,l0s1c39)
    l0s1 = new screen("#000000",l0s1cs, false)
    // 2 - Ready go screen
    // c0 - Ready text
    // c1 - Go button
    var l0s2c0 = new cuadro(300,100,200,100,"#000000",u,u,u,u,u,"Ready?",["40px Arial Black","#e0e000"])
    var l0s2c1 = new cuadro(320,300,160,80,"#00e000","#80e080",true,u,[goToLevel],u,"GO!",["30px Arial Black","#000000"])
    l0s2cs.push(l0s2c0,l0s2c1)
    l0s2 = new screen("#000000",l0s2cs,false)

	l0ss.push(l0s0,l0s1,l0s2)

    function accePass(){ // Confirms password.
    	var writ = l0s1c0.text
    	var npass = writ.slice(0,2).concat(writ.slice(4,6)).concat(writ.slice(8,10)).concat(writ.slice(12,14)).concat(writ.slice(16,18))
    	var rpass = writ[2].concat(writ[6]).concat(writ[10]).concat(writ[14]).concat(writ[18])
    	if (isValid(npass) == false){
    		restorePass()
    	} else {
    		for (var i = 0; i < pwcodes.length; i++) {
    			if (pwcodes[i] === rpass){
    				var pwinf = pwdata[i]
    			}
    		}
    		if (pwinf == undefined){
    			restorePass()
    		} else {
    			var scramble = pwinf[5]
    			var ordered = ""
    			var chunk = npass.match(/.{1,2}/g)
    			for (var i = 0; i < 5; i++) {
    				ordered = ordered.concat(chunk[scramble[i]])
    			}
    			if (isReal(ordered) == false){
    				restorePass()
    			} else {
    				var coder = Array()
    				coder.push("qwertyuiopasdfghjklzxcvbnm0",
    					       "abcdefghijklmnopqrstuvwxyz0")
    				var rn = ""
    				for (var i = 0; i < 10; i++) {
		                rn = rn.concat(coder[1][coder[0].indexOf(ordered[i])])
		            }
		            rn = rn.replace(/0/g, " ")
		            rn = rn.trim()
		            actp = new player(rn,pwinf[3],pwinf[4])
		            var nl = document.createElement("script");
                    nl.src = pwinf[0];
                    document.head.appendChild(nl);
                    this.currlev.cheatblock = [pwinf[1], pwinf[2]]
                    if (pwinf[6].length > 0){
                    	pwinf[6].forEach(item => {inve.placeIn(item)})
                    }
		            currscr = 2
    			}
    		}
    	}
    }
	function beginGame(){ // Loads info for level 1.
		actp = new player("unnamed",1,"N")
		var nl = document.createElement("script");
		nl.src = "level1.js";
        document.head.appendChild(nl);
		this.currlev.cheatblock = [1, "level1"]
		currscr = 2
	}
	function eraseone(){ // Erases one character from password. Deactivates confirm button if necessary.
		var curr = l0s1c0.text
		if (curr[18] != "*"){
			l0s1c38.c = "#ff0000"
			l0s1c38.high = "#ffc0c0"
			l0s1c38.isClick = false
		}
		var check = true
		var len = 18
		while (check == true){
			cc = curr[len]
			if (cc != "*"){
				if (cc != "-"){
					if (len == 0){
						var neol = "*".concat(curr.slice(1,19))
						l0s1c37.isClick = false
					} else if (len == 18){
						var neol = curr.slice(0,18).concat("*")
					} else {
					    var neol = curr.slice(0,len).concat("*").concat(curr.slice(len+1,19))
					}
					l0s1c0.text = neol
					check = false
				}
			}
			len = len - 1
		}
	}
	function goToLevel(){
		var inID = this.currlev.cheatblock[0]
		var levname = this[this.currlev.cheatblock[1]]
		currlev = new level(inID, levname)
		currscr = 0
		if (currlev.screens[currscr].FT == true){
			currlev.screens[currscr].loadText()
			setTimeout(function(){currlev.screens[currscr].generaText()},500)
		}
	}
	function isReal(str){ // Checks if there are 0's between the rest of the characters
	    var isZero = true
	    var isGood = true
	    var i = 9
	    var cha
	    while (isGood == true & i >= 0) {
	    	cha = str[i]
	    	if (isZero == true){
	    		if (cha != "0"){
	    			isZero = false
	    		}
	    	} else {
	    		if (cha == "0"){
	    			isGood = false
	    			return false
	    		}
	    	}
	    	i -= 1
	    }
	    if (i == -1){
	    	return true
	    }
	}
	function isValid(str){ // Checks if there are numbers in the name otherwise than 0
		if (str.includes("1") == true | str.includes("2") == true  | str.includes("3") == true){
			return false
		} else if (str.includes("4") == true | str.includes("5") == true  | str.includes("6") == true){
			return false
		} else if (str.includes("7") == true | str.includes("8") == true  | str.includes("9") == true){
			return false
		} else{
			return true
		}
	}
	function pswrite(ch){ // Writes given character to password. Activates confirm button if the full password is written.
		var wri = l0s1c0.text.replace("*",ch)
		l0s1c0.text = wri
		if (l0s1c0.text.includes("*") == false){
			l0s1c38.c = "#00ff00"
			l0s1c38.high = "#c0ffc0"
			l0s1c38.isClick = true
		}
		if (l0s1c37.isClick == false){
			l0s1c37.isClick = true
		}
	}
	function restorePass(){ // Restores the password screen if a wrong password is given.
	    l0s1c38.c = "#ff0000"
		l0s1c38.high = "#ffc0c0"
		l0s1c38.isClick = false
		l0s1c37.isClick = false
		l0s1c0.text = "***-***-***-***-***"
		l0s1c0.ti[1] = "#ff0000"
		setTimeout(function(){l0s1c0.ti[1] = "#00ff00"}, 750)

	}

	return{
		screens: l0ss,
		cheatblock: undefined
	}
}
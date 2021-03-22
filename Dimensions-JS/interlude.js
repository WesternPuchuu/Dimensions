function interlude(pswrd,scramble,coba,levinfo=null,newr=null){

    // 0 - Level Clear Screen!
	//#region 
    // c0 - Level Clear text
    // c1 - "Click for your password" button
    // c2 - Password
    // c3 - Warning
    // c4 - Load level 2
    // c5 - Go to level 2
    var lis0c0 = new cuadro(100,100,600,150,"#ffff00",u,u,u,u,u,"Level Clear!!",["80px Arial Black", "#404040"])
    var lis0c1 = new cuadro(100,300,400,50,"#00c000","#80c080",true,u,[showPassword],u,"Click for password",["40px Arial","#ffffff"])
    var lis0c2 = new cuadro(100,400,400,50,"#000000",u,u,false,u,u,"",["20px Monospace","#00c000"])
    var lis0c3 = new cuadro(100,500,400,50,"#000000",u,u,false,u,u,"Don't forget to write it down!",["15px Arial","#ffffff"])
    var lis0c4 = new cuadro(550,300,150,100,"#c02020","#ff4040",u,false,[loadLev],u,"Next",["30px Arial Black","#404040"])
    var lis0c5 = new cuadro(550,400,150,100,"#00ff00","#60ff60",u,false,[goToLev],u,"Go!",["30px Arial Black","#000000"])
    lis0cs = [lis0c0, lis0c1, lis0c2, lis0c3, lis0c4, lis0c5]
    lis0 = new screen("#000000", lis0cs, false)
	//#endregion
    //1 - Temporary "Thank You" screen
    //#region 
	//c0 - Big thanks
	//c1 - More levels soon
	//c2 - Feel free to
	var lis1c0 = new cuadro(20,20,760,40,"#000000",u,u,u,u,u,"Thanks for playing!!",["38px Arial","#00ff00"])
	var lis1c1 = new cuadro(0,80,800,20,coba,u,u,u,u,u,"More levels coming soon!",["20px Times New Roman","#ffffff"])
	var lis1c2 = new cuadro(0,120,800,20,coba,u,u,u,u,u,"If you liked the game, feel free to check the code and suggest optimizations :D",["20px Arial","#ffffff"])
	lis1cs = [lis1c0,lis1c1,lis1c2]
    lis1 = new screen(coba, lis1cs, false)
    //#endregion

    var liss = [lis0,lis1]

    function goToLev(){ // Level clear function. Sends to next level.
        if (levinfo != null){
            currlev = new level(levinfo[1],this[levinfo[2]])
            currscr = 0
        } else {
            changescr(1)
        }
        if (newr != null){
            actp.route = newr
        }      
    }
    function loadLev(){ // Loads information for next level.
        if (levinfo != null){
            var nl = document.createElement("script");
            nl.src = levinfo[0];
            document.head.appendChild(nl);
        }    	
        quickTurn([5],[4])
    }
    function showPassword(){ // Creates and makes the password visible. Shows the next level button.
        lis0c2.text = crPass(actp.cname,pswrd,scramble)
        quickTurn([4],[1],[2,3]) //s0
    }


    return{
        screens: liss
    }
}
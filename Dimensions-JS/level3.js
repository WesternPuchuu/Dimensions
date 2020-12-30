function level3(){
    var cb = "#600000"

    var l3s0cs = Array()
    var l3s0
    var l3ss = Array()

    // 0 - Temporary "Thank You" screen
	// c0 - Big thanks
	// c1 - More levels soon
	// c2 - Feel free to
	var l3s0c0 = new cuadro(20,20,760,40,"#000000",u,u,u,u,u,"Thanks for playing!!",["38px Arial","#00ff00"])
	var l3s0c1 = new cuadro(0,80,800,20,cb,u,u,u,u,u,"More levels coming soon!",["20px Times New Roman","#ffffff"])
	var l3s0c2 = new cuadro(0,120,800,20,cb,u,u,u,u,u,"If you liked the game, feel free to check the code and suggest optimizations :D",["20px Arial","#ffffff"])
	l3s0cs.push(l3s0c0,l3s0c1,l3s0c2)
    l3s0 = new screen(cb, l3s0cs, false)
    l3ss.push(l3s0)

    return{
        screens: l3ss,
        cheatblock: [true]
    }
}
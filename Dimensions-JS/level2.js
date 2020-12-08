function level2(){
	var cb = "#200000"

	var l2s0cs = Array()
	var l2s0
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
	l2ss.push(l2s0)

	return{
		screens:l2ss,
		cheatblock:[]
	}

}
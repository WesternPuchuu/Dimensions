var ctx;
var WIDTH;
var HEIGHT;
var id;
var inve;
var aT;
var currscr = 0;
var currb;
var currlev;
var u = undefined;
var animate = false
var mmX;
var mmY;
var m = Array();

function init_mouse(){
	mmX = $("#canvas").offset().left;
	mmY = $("#canvas").offset().top;
	m.push(mmX,mmY)
}

function update_mouse(){
	m = []
	init_mouse()
	currlev.screens.forEach(scr => {
		scr.botones.forEach(but => {
			but.xmin = m[0]+but.x0
			but.xmax = m[0]+but.x0+but.wi
			but.ymin = m[1]+but.y0
			but.ymax = m[1]+but.y0+but.he
		})		
	})
}

function init(){
	ctx = $("#canvas")[0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  $("#canvas")[0].addEventListener("mousedown", doMouse, false);
  this.addEventListener("resize",update_mouse,false);
  inve = new inventory();
  currlev = new level(0, level0)
  id = setInterval(draw, 10);
}

function changescr(val){
	this.buts[currb].isHigh = false
	currscr = val;
	if (currlev.screens[currscr].FT == true){
		currlev.screens[currscr].loadText()
		setTimeout(function(){currlev.screens[currscr].generaText()},500)

	}
}

function simpleItemTake(v){
	this.buts[v[0]].isClick = false
	this.buts[v[0]].isVis = false
	inve.placeIn([v[1],v[2]])
	aT = null
}

function simpleItemUse(numef){
	for (var i = 0; i < inve.sack.length; i++) {
		if (inve.sack[i][0] == numef[0]){
			inve.sack.splice(i,1);
			numef[1]();
		}
	}
}

function quickTurn(both,iCo = undefined,iVo = undefined){
    if (both != undefined){
    	both.forEach(val => {
    		this.buts[val].isClick = !this.buts[val].isClick
    		this.buts[val].isVis = !this.buts[val].isVis
    	})
    }
    if (iCo != undefined){
    	iCo.forEach(val => {
    		this.buts[val].isClick = !this.buts[val].isClick
    	})
    }
    if (iVo != undefined){
    	iVo.forEach(val => {
    		this.buts[val].isVis = !this.buts[val].isVis
    	})
    }
}

function draw(){
	var actual = currlev.screens[currscr];
	ctx.fillStyle = actual.bgcolor;
	buts = actual.botones;
	ctx.fillRect(0,0,600,600);
    if (actual.isInv == true){
    	inve.doScheme();
    } else {
        ctx.fillRect(600,0,200,600)
    }
    if (actual.isText == true){
    	writext()
    }
	for (var i = 0; i < buts.length; i++) {
		if (buts[i].isVis == true){
			var ii = buts[i]
			if (buts[i].isHigh == true && animate == false){
				rect(ii.x0,ii.y0,ii.wi,ii.he,ii.high)
			} else
			    rect(ii.x0,ii.y0,ii.wi,ii.he,ii.c)
			if (buts[i].text != null){
				ctx.textAlign = "center"
				ctx.textBaseline = "middle"
				ctx.font = buts[i].ti[0]
				ctx.fillStyle = buts[i].ti[1]
				var centerx = (buts[i].xmin + buts[i].xmax - 2*m[0])/2
				var centery = (buts[i].ymin + buts[i].ymax - 2*m[1])/2
				ctx.fillText(buts[i].text,centerx,centery)
			}
		}
	}
	if (actual.isInv == true){
	    inve.writethink(aT);
	}
}

function writext(){
    ctx.fillStyle = "#FFFFFF";
	ctx.font = "20px Arial";
    ctx.textAlign = "left";
	ctx.textBaseline = "alphabetical"
	var txtscr = currlev.screens[currscr]
	var j = 0
	while (j < txtscr.txtCont.length){
		ctx.fillText(txtscr.txtCont[j],5,25+20*j);
		j++
	}
}

function rect(x,y,w,h,c) {
	ctx.fillStyle = c;
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function screen(color,buttons, iI = true, iT=false, txt = null){
	var FiTi
	var txtc
	if (iT == true){
		FiTi = true
		txtc = Array()
	} else {
		FiTi = false
		txtc = undefined
	}
	return {
		bgcolor: color,
		botones: buttons,
		isInv: iI,
		isText: iT,
		textf: txt,
		FT: FiTi,
		txtCont: txtc,
		loadText: function(){
			var allText = document.createElement("script");
            allText.src = txt;
            document.head.appendChild(allText);
        },
        generaText: function(){
            var fitilen = drama["Texto"].length
            for (let i = 0; i < fitilen; i++) {
	  	        setTimeout(function(){
	  	        	txtc.push(drama["Texto"][i])
	     	    },750*(i+1));
	  	    }
	  	    setTimeout(function(){
	  	    	quickTurn([0])
	  	    	FT = false
	  	    },750*(fitilen + 1))
		}
	}
}

function level(ii, fun){
	return{
		index: ii,
		begin: function(){
			fun()
		},
		screens: fun().screens,
		cheatblock: fun().cheatblock
	}
}

function cuadro(x,y,w,h,c0,high0=c0,isCl=false,isV=true,fx=null,thk=null,texto=null,tin=null) {
	var isHigh = false;
	return {
		mm: m,
		c: c0,
		high: high0,
		think: thk,
		x0: x,
		y0: y,
		wi: w,
		he: h,
		xmin: m[0]+x,
		xmax: m[0]+x+w,
		ymin: m[1]+y,
		ymax: m[1]+y+h,
		isClick: isCl,
		isVis: isV,
		text: texto,
		ti: tin,
	    dofx: function(){
	    	var efex = fx[0];
	    	if (fx.length == 2){
	    		var params = fx[1];
	    		efex(params);
	    	} else
	    	    efex()
	    }
	}
}

function onMouseMove(evt){
	var isTh = false;
	var onSom = 0;
	var rectas = currlev.screens[currscr].botones;
	for (var i = 0; i < rectas.length; i++) {
		if (rectas[i].isVis == true){
			if (evt.pageX >= rectas[i].xmin && evt.pageX <= rectas[i].xmax && evt.pageY >= rectas[i].ymin && evt.pageY <= rectas[i].ymax){
				rectas[i].isHigh = true;
				aT = rectas[i].think;
				isTh = true;
				onSom += 1;
				currb = i;
			} else
				rectas[i].isHigh = false;
		}
		
	}
	if (isTh == false){
		aT = null;
	}
	if (onSom == 0){
		currb = null;
	}
}

function doMouse(event){
	if (animate == false){
		if (currb != null){
			if (currlev.screens[currscr].botones[currb].isClick == true){
	            currlev.screens[currscr].botones[currb].dofx();
			}
		}
	}
}

function inventory(){
	var sack = Array()
	return {
		sack,
		doScheme: function(){
			ctx.fillStyle = "#000000";
			ctx.fillRect(601,0,200,600);
			ctx.strokeStyle = "#FFFFFF";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(600.5,200.5);
			ctx.lineTo(799.5,200.5);
			ctx.moveTo(600.5,0.5);
			ctx.lineTo(600.5,599.5);
			ctx.closePath();
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillStyle = "#FFFFFF";
			ctx.textAlign = "left";
			ctx.textBaseline = "alphabetical"
			for (var i = 0; i < sack.length; i++) {
				ctx.fillText(sack[i][1],601,220+15*i);
			}
		},
		writethink: function(actThink){
			if (animate == false){
				if (actThink !== null){
					ctx.fillStyle = "#FFFFFF";
					ctx.font = "12px Arial";
					ctx.textAlign = "left";
					ctx.textBaseline = "alphabetical"
					for (var i = 0; i < actThink.length; i++) {
						ctx.fillText(actThink[i],601,20+12*i);
					}
				}
			}
		},
		placeIn: function(numnam){
			sack.push(numnam);
		}
	}
}

function player(n,it,r){
	var coder = Array()
	var cn
	var zn
	var chunk
	var part1 = ""
	var pswrd
	coder.push("abcdefghijklmnopqrstuvwxyz0",
		       "qwertyuiopasdfghjklzxcvbnm0")
	zn = n
	while (zn.length < 10){
		zn = zn.concat("0")
	}
	cn = ""
	for (var i = 0; i < zn.length; i++) {
		cn = cn.concat(coder[1][coder[0].indexOf(zn[i])])
	}
	return {
		name: n,
		cname: cn,
		itera: it,
		route: r,
		crPass: function(rpass, mixer){
            chunk = cn.match(/.{1,2}/g)
            for (var i = 0; i < 5; i++) {
            	part1 = part1.concat(chunk[mixer[i]]).concat(rpass[i]).concat("-")
            }
            pswrd = part1.slice(0,19)
            return pswrd
		}
	}
}
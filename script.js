var canvas = document.getElementById("canvasid"); //main canvas
var ctx = canvas.getContext("2d");


var cc = document.createElement("canvas"); //double buffer canvas
cc.height = 600; cc.width = 800;
var ccx = cc.getContext("2d");

var LOA = 41;
var loadad = 0;

var image0 = new Image(); 
var image1 = new Image(); 
var image2 = new Image(); 
var image3 = new Image(); 
var image4 = new Image(); 
var score = new Image();
var load = new Image();
image1.src = "images/b1.bmp";
image2.src = "images/b2.bmp";
image3.src = "images/b3.bmp";
image4.src = "images/b4.bmp";
score.src = "images/score.bmp";
load.src = "images/load.bmp"; 



var cloud1 = new Image(); cloud1.src = "images/cloud1.png"; cloud1.onload = function(){loadad = loadad + 1;}
var cloud2 = new Image(); cloud2.src = "images/cloud2.png"; cloud2.onload = function(){loadad = loadad + 1;}
var cloud3 = new Image(); cloud3.src = "images/cloud3.png"; cloud3.onload = function(){loadad = loadad + 1;}
var fox01 = new Image(); fox01.src = "images/fox01.png"; fox01.onload = function(){loadad = loadad + 1;}
var fox02 = new Image(); fox02.src = "images/fox02.png"; fox02.onload = function(){loadad = loadad + 1;}
var fox03 = new Image(); fox03.src = "images/fox03.png"; fox03.onload = function(){loadad = loadad + 1;}
var fox12 = new Image(); fox12.src = "images/fox12.png"; fox12.onload = function(){loadad = loadad + 1;}
var fox21 = new Image(); fox21.src = "images/fox21.png"; fox21.onload = function(){loadad = loadad + 1;}
var fox22 = new Image(); fox22.src = "images/fox22.png"; fox22.onload = function(){loadad = loadad + 1;}
var fox31 = new Image(); fox31.src = "images/fox031.png"; fox31.onload = function(){loadad = loadad + 1;}
var fox32 = new Image(); fox32.src = "images/fox032.png"; fox32.onload = function(){loadad = loadad + 1;}
var grass1 = new Image(); grass1.src = "images/grass1.bmp"; grass1.onload = function(){loadad = loadad + 1;}
var grass2 = new Image(); grass2.src = "images/grass2.bmp"; grass2.onload = function(){loadad = loadad + 1;}
var grass3 = new Image(); grass3.src = "images/grass3.bmp"; grass3.onload = function(){loadad = loadad + 1;}
var grass4 = new Image(); grass4.src = "images/grass4.bmp"; grass4.onload = function(){loadad = loadad + 1;}
var house1 = new Image(); house1.src = "images/house1.png"; house1.onload = function(){loadad = loadad + 1;}
var house2 = new Image(); house2.src = "images/house2.png"; house2.onload = function(){loadad = loadad + 1;}
var tree1 = new Image(); tree1.src = "images/tree1.png"; tree1.onload = function(){loadad = loadad + 1;}
var tree2 = new Image(); tree2.src = "images/tree2.png"; tree2.onload = function(){loadad = loadad + 1;}
var luna = new Image(); luna.src = "images/luna.png"; luna.onload = function(){loadad = loadad + 1;}
var sun = new Image(); sun.src = "images/sun.png"; sun.onload = function(){loadad = loadad + 1;}
var panel = new Image(); panel.src = "images/panel.bmp"; panel.onload = function(){loadad = loadad + 1;}
var portrait1 = new Image(); portrait1.src = "images/portrait1.bmp"; portrait1.onload = function(){loadad = loadad + 1;}
var portrait2 = new Image(); portrait2.src = "images/portrait2.bmp"; portrait2.onload = function(){loadad = loadad + 1;}
var space = new Image(); space.src = "images/space.bmp"; space.onload = function(){loadad = loadad + 1;}
var wolf0 = new Image(); wolf0.src = "images/wolf0.png"; wolf0.onload = function(){loadad = loadad + 1;}
var t1 = new Image(); t1.src = "images/t1.png"; t1.onload = function(){loadad = loadad + 1;}
var t2 = new Image(); t2.src = "images/t2.png"; t2.onload = function(){loadad = loadad + 1;}
var t3 = new Image(); t3.src = "images/t3.png"; t3.onload = function(){loadad = loadad + 1;}
var t4 = new Image(); t4.src = "images/t4.png"; t4.onload = function(){loadad = loadad + 1;}
var t5 = new Image(); t5.src = "images/t5.png"; t5.onload = function(){loadad = loadad + 1;}
var nastya01 = new Image(); nastya01.src = "images/nastya01.png"; nastya01.onload = function(){loadad = loadad + 1;}
var nastya02 = new Image(); nastya02.src = "images/nastya02.png"; nastya02.onload = function(){loadad = loadad + 1;}
var nastya11 = new Image(); nastya11.src = "images/nastya11.png"; nastya11.onload = function(){loadad = loadad + 1;}
var nastya12 = new Image(); nastya12.src = "images/nastya12.png"; nastya12.onload = function(){loadad = loadad + 1;}
var nastya13 = new Image(); nastya13.src = "images/nastya13.png"; nastya13.onload = function(){loadad = loadad + 1;}
var nastya21 = new Image(); nastya21.src = "images/nastya21.png"; nastya21.onload = function(){loadad = loadad + 1;}
var nastya22 = new Image(); nastya22.src = "images/nastya22.png"; nastya22.onload = function(){loadad = loadad + 1;}
var nastya23 = new Image(); nastya23.src = "images/nastya23.png"; nastya23.onload = function(){loadad = loadad + 1;}
var nastya41 = new Image(); nastya41.src = "images/nastya41.png"; nastya41.onload = function(){loadad = loadad + 1;}
var nastya42 = new Image(); nastya42.src = "images/nastya42.png"; nastya42.onload = function(){loadad = loadad + 1;}

doma = [];
tokeni = [];

controls = 0; jump = 0; jump_x = 0;

frame = 1;

grassimg = 1;

nast_dir = 1;
nast_coord = 0;
nast_y = 180;
nast_skin = 0; secret1 = "112212120"; secret2 = "333333333";
nast_time = 0;
nast_luna = 0; secret3 = 0;
nast_score = 0;
nast_ene = 100;

wolf_coord = 0;

var flag1 = 0;
var flag2 = 1;

image0.onload = function(){

  ccx.drawImage(image0, 0, 0);
  ctx.drawImage(cc, 0, 0);

}

var azaza = setInterval(two, 250);

image0.src = "images/menu0.bmp";

var aud1 = document.getElementById("aud1"); //main melody
var aud2 = document.getElementById("aud2");
var aud3 = document.getElementById("aud3");

function one(event){
  
  if (event.pageX > 700 && event.pageY > 450 && flag1 == 0){
    flag1 = 1;
    aud1.play();
    image0.src = "images/menu.bmp"; 
  } else
  if (event.pageX > 300 && event.pageX < 500 && event.pageY > 350 && event.pageY < 450 && flag1 == 1){
    flag1 = 2;
    aud2.play(); 
    
var bb1 = document.createElement("img");
    bb1.height = 200; bb1.width = 200;
    bb1.src = "images/bb1.bmp";
    document.body.appendChild(bb1);
    bb1.addEventListener("click", function(event){if (jump != 1){controls = 2; nast_dir = 2; secret2 = secret2.substr(1); secret2 += "1";}});
var bb2 = document.createElement("img");
    bb2.height = 200; bb2.width = 200;
    bb2.src = "images/bb2.bmp";
    document.body.appendChild(bb2);
    bb2.addEventListener("click", function(event){if (jump != 1) {jump = 1;}});
var bb3 = document.createElement("img");
    bb3.height = 200; bb3.width = 200;
    bb3.src = "images/bb3.bmp";
    document.body.appendChild(bb3);
    bb3.addEventListener("click", function(event){if (jump != 1){controls = 0; secret2 = secret2.substr(1); secret2 += "0";
                                                                 if (secret2 == secret1) {nast_skin = 1;}}});
var bb4 = document.createElement("img");
    bb4.height = 200; bb4.width = 200;
    bb4.src = "images/bb4.bmp";
    document.body.appendChild(bb4);
    bb4.addEventListener("click", function(event){if (jump != 1) {controls = 1; nast_dir = 1; secret2 = secret2.substr(1); secret2 += "2";}});


  } else
  if (flag1 == 3) {if (jump == 1) {secret3 += 1;} if (secret3 == 3) {nast_luna = 1;}}
  if (flag1 == 3 && nast_coord - wolf_coord <= 15 && nast_luna == 1) {aud3.play();}

}

canvas.addEventListener("click", one);


function two(){

  if (flag1 == 1){

    if (flag2 == 1){flag2 = 2; ctx.drawImage(image1, 300, 350);} else
    if (flag2 == 2){flag2 = 3; ctx.drawImage(image2, 300, 350);} else
    if (flag2 == 3){flag2 = 4; ctx.drawImage(image3, 300, 350);} else
    if (flag2 == 4){flag2 = 1; ctx.drawImage(image4, 300, 350);}

  } else
  
  if (flag1 == 2) {

    ctx.drawImage(load, 0, 0);
    
    if (loadad == LOA) {

      flag1 = 3;
      aud1.src = "music/main.mp3"; aud1.play();

    }
  
  } else
  
  if (flag1 == 3) { 

    frame = frame + 1; if (frame == 5) {frame = 1;}
    if (jump == 1){jump_x += 1; nast_y = nast_y - 50 + jump_x * jump_x; 
                   if (nast_y >= 180){nast_y = 180; jump = 0; jump_x = 0;}}
    nast_time += 1;

    if (nast_luna == 1) {ccx.drawImage(space, 0, 0)} else {ccx.fillStyle = "rgb(255, 255, 255)"; ccx.fillRect(0, 0, 800, 500);}

    if (nast_luna == 1) {ccx.drawImage(luna, Math.floor(nast_time), Math.floor(nast_time)*3/8); ccx.drawImage(panel, 0, 350);} else {
        ccx.drawImage(sun, Math.floor(nast_time), Math.floor(nast_time)*3/8); ccx.drawImage(panel, 0, 350);}

      if (nast_skin == 0) {ccx.drawImage(portrait1, 10, 375)} else {ccx.drawImage(portrait2, 10, 375)}

      ccx.font = "72px serif"; ccx.fillText(String(nast_score), 150, 450);
      

      if (controls == 1) {grassimg += 1; if (grassimg == 5){grassimg = 1;}} else
      if (controls == 2) {grassimg -= 1; if (grassimg == 0){grassimg = 4;}}
      if (grassimg == 1) {ccx.drawImage(grass1, 0, 300);} else
      if (grassimg == 2) {ccx.drawImage(grass2, 0, 300);} else
      if (grassimg == 3) {ccx.drawImage(grass3, 0, 300);} else
      if (grassimg == 4) {ccx.drawImage(grass4, 0, 300);}


      if (controls == 1 && Math.random() <= 0.05) {
        let a = Math.random() * 10;
        if (a <= 2) {doma.push([1, nast_coord + 800]);} else
        if (a <= 5) {doma.push([2, nast_coord + 800]);} else 
        if (a <= 7) {doma.push([3, nast_coord + 800]);} else
        if (a <= 10) {doma.push([4, nast_coord + 800]);}
      }

      if (controls == 1 && Math.random() <= 0.1) {
        if (tokeni.length == 0) {tokeni.push([1, nast_coord + 800, Math.floor(Math.random()*250)]);}
      }

      if (doma.length > 0) {
        for (i = 0; i < doma.length; i++) {
          if (doma[i][0] == 1) {ccx.drawImage(house1, 10 - nast_coord + doma[i][1], 100);} else
          if (doma[i][0] == 2) {ccx.drawImage(house2, 10 - nast_coord + doma[i][1], 120);} else
          if (doma[i][0] == 3) {ccx.drawImage(tree1, 10 - nast_coord + doma[i][1], 100);} else
          if (doma[i][0] == 4) {ccx.drawImage(tree2, 10 - nast_coord + doma[i][1], 120);}
        }
      }

      if (tokeni.length > 0) {
        ccx.drawImage(t1, 10 - nast_coord + tokeni[0][1], tokeni[0][2]);
      }

      if (tokeni.length > 0) {

        if (30 - nast_coord + tokeni[0][1] > 100 && 30 - nast_coord + tokeni[0][1] < 200 &&
            tokeni[0][2] + 20 > nast_y && tokeni[0][2] + 20 < nast_y + 130) 
           {aud2.play(); tokeni.shift(); nast_score += 10;}
    
      }
      

      if (doma.length > 0) {
        if (nast_coord - doma[0][1] >= 100) {doma.shift();}}
      if (tokeni.length > 0) {
        if (nast_coord - tokeni[0][1] >= 100) {tokeni.shift();}}

    if (controls == 0 && nast_dir == 1) {
      if (jump == 1){if (nast_skin == 1){ccx.drawImage(fox03, 100, nast_y + 75);} else {ccx.drawImage(nastya41, 100, nast_y);}} else {if (nast_skin == 1){ccx.drawImage(fox01, 100, nast_y + 25);} else 
                                                                                     {ccx.drawImage(nastya01, 100, nast_y);}}} else
    if (controls == 0 && nast_dir == 2) {
      if (jump == 1){if (nast_skin == 1){ccx.drawImage(fox12, 100, nast_y + 75);} else {ccx.drawImage(nastya42, 100, nast_y);}} else {if (nast_skin == 1){ccx.drawImage(fox02, 100, nast_y + 25);} else 
                                                                                     {ccx.drawImage(nastya02, 100, nast_y);}}} else
    if (controls == 1) {
       
      nast_coord += 15; if (nast_coord - wolf_coord > 150) {wolf_coord = nast_coord - 150;}
   
        if (jump == 1 && nast_dir == 1){if (nast_skin == 1){ccx.drawImage(fox03, 100, nast_y + 75);} else {ccx.drawImage(nastya41, 100, nast_y);}} else {
      if (frame == 1) {if (nast_skin == 1){ccx.drawImage(fox21, 100, nast_y + 75);} else {ccx.drawImage(nastya11, 100, nast_y);}} else
      if (frame == 2) {if (nast_skin == 1){ccx.drawImage(fox03, 100, nast_y + 75);} else {ccx.drawImage(nastya12, 100, nast_y);}} else
      if (frame == 3) {if (nast_skin == 1){ccx.drawImage(fox03, 100, nast_y + 50);} else {ccx.drawImage(nastya13, 100, nast_y);}} else
      if (frame == 4) {if (nast_skin == 1){ccx.drawImage(fox03, 100, nast_y + 75);} else {ccx.drawImage(nastya12, 100, nast_y);}} }
    
    } else 
    if (controls == 2) {
    
      nast_coord -= 15; if (nast_coord <= wolf_coord) {nast_coord += 15; controls = 0;}

        if (jump == 1 && nast_dir == 2){if (nast_skin == 1){ccx.drawImage(fox12, 100, nast_y + 75);} else {ccx.drawImage(nastya42, 100, nast_y);}} else {
      if (frame == 1) {if (nast_skin == 1){ccx.drawImage(fox22, 100, nast_y + 75);} else {ccx.drawImage(nastya21, 100, nast_y);}} else
      if (frame == 2) {if (nast_skin == 1){ccx.drawImage(fox12, 100, nast_y + 75);} else {ccx.drawImage(nastya22, 100, nast_y);}} else
      if (frame == 3) {if (nast_skin == 1){ccx.drawImage(fox12, 100, nast_y + 50);} else {ccx.drawImage(nastya23, 100, nast_y);}} else
      if (frame == 4) {if (nast_skin == 1){ccx.drawImage(fox12, 100, nast_y + 75);} else {ccx.drawImage(nastya22, 100, nast_y);}} }
    
    }
      ccx.drawImage(wolf0, 10 + wolf_coord - nast_coord, 210);

    ctx.drawImage(cc, 0, 0);

    if (nast_time >= 800) {flag1 = 4;}
  
  } else

  if (flag1 == 4) {

    aud1.pause();
    aud2.src = "music/over.mp3"; aud2.play();
    ctx.drawImage(score, 0, 0);
    ctx.font = "72px serif"; ctx.fillText(String(nast_score), 350, 350);
    clearInterval(azaza);
    var imgdel = document.getElementsByTagName("img");
    imgdel[0].parentNode.removeChild(imgdel[0]);
    imgdel[0].parentNode.removeChild(imgdel[0]);
    imgdel[0].parentNode.removeChild(imgdel[0]);
    imgdel[0].parentNode.removeChild(imgdel[0]);
  }

}

// let img1 = new Image();
// img1.src = "t-preview.png";

function all_loaded(){

  let img1 = document.getElementById('img1');
  let img2 = document.getElementById('img2');
  let img3 = document.getElementById('img3');

  let ctx = document.getElementById('canvas').getContext('2d');

  ctx.drawImage(img1, 0, 0, 525, 425);
  ctx.drawImage(img2, 0, 0, 459, 323);
  ctx.drawImage(img3, 0, 0, 525, 425);

  var draw = function(){
    let x = $('input[type=range]').eq(0).val();
    let y = $('input[type=range]').eq(1).val();
    let sizeY = $('input[type=range]').eq(2).val();
    let sizeX = $('input[type=range]').eq(3).val();


    // ctx.rotate(90);
    ctx.drawImage(img1, 0, 0, 525, 425);
    // ctx.rotate(90*Math.PI/180);
    ctx.drawImage(img2, x, y, sizeX, sizeY);
    ctx.drawImage(img3, 0, 0, 525, 425);



  }

  $('button').on('click', function(){
  	console.log($(this).attr("class"));
    if ($(this).hasClass("posX")){
  	   var x = Math.floor((Math.random() * 250) + 20);
     } else if ($(this).hasClass("posY")){
     	 var x = Math.floor((Math.random() * 220) -5);
     } else if ($(this).hasClass("sizeX")){
       var x = Math.floor((Math.random() * 250) + 5);
     } else if($(this).hasClass("sizeY")){
       var x = Math.floor((Math.random() * 300) + 5);

     }
  	$(this).siblings('span').text(x);
    $(this).siblings('input[type=range]').val(x);

    draw();
  });



  $('button').trigger('click');










}

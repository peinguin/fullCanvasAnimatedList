//dimensions translator
  var width  = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;

  var translateX = function(size){
      return (width / 100) * size;
  }
  var translateY = function(size){
      return (height / 100) * size;
  }

//constants
  var left0 = translateX(10);
  var left1 = translateX(30);
  var left2 = translateX(50);
  var left3 = translateX(70);

  var HEIGHT = translateY(10);
  var SPEED = 300;
  var STEP  = 1;
  var BACKGROUND = 'rgba(255,255,255,0.65)';

//generate elements
  var elements = (function() {
    var elements = [];
    for(var i = 0; i < 200; i++){
      elements.push({
        txt: 'Text' + i,
        top: i * HEIGHT
      });
    }
    return elements;
  })();
  var selected = 3;

//drawer
  var drawElement = function(element, index){
    if(index === selected){
      ctx.drawImage(selector, left0, element.top);
    }

    ctx.drawImage(img, left0, element.top);

    var textTop = element.top + 30;

    ctx.font="20px Georgia";
    ctx.fillText(element.txt, left1, textTop);

    ctx.font="30px Verdana";
    ctx.fillText(element.txt, left2, textTop);

    ctx.font="25px Verdana";
    ctx.fillText(element.txt, left3, textTop);
  };
  var clearElement = function(index){
    ctx.clearRect(0, index * HEIGHT, canvas.width, HEIGHT);
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect (0, index * HEIGHT, canvas.width, HEIGHT);
  }
  var drawAll = function(){
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect (0, 0, canvas.width, canvas.height);

    elements.forEach(drawElement);
  };
  var turn = function(itemsCount){
    var top = canvas['data-top'];
    top -= itemsCount * HEIGHT;
    canvas.style.top = top + 'px';
    canvas['data-top'] = top;
  };
  var changeSelected = function(newSelected){
    clearElement(newSelected);
    clearElement(selected);
    var oldSelected = selected;
    selected = newSelected;
    drawElement(elements[oldSelected], oldSelected);
    drawElement(elements[selected], selected);
  }
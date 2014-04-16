//prepare
  var canvas = document.getElementById('main');
  canvas.width = translateX(80);
  canvas.height = elements.length * HEIGHT;
  canvas.style.width = canvas.width + 'px';
  canvas.style.height = canvas.height + 'px';
  canvas['data-top'] = 0;
  var ctx    = canvas.getContext("2d");

  var img    = document.createElement("img");
  var selector    = document.createElement("img");

  async.parallel([
    function(callback){
      img.onload = callback;
    },
    function(callback){
      selector.onload = callback;
    }
  ],
  function(err, results){
    drawAll();
    program();
  });
  img.src      = 'img/img.png';
  selector.src = 'img/selector.png';
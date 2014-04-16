var program = function() {
  async.series([
    function(callback){
      setTimeout(function(){
        turn(1);
        changeSelected(selected + 1);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(2);
        changeSelected(selected + 2);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(3);
        changeSelected(selected + 3);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(-1);
        changeSelected(selected - 1);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(-3);
        changeSelected(selected - 3);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(-1);
        changeSelected(selected - 1);
        callback(null);
      }, 1000);
    }
  ],
  function(err, results){
    program();
  });
}
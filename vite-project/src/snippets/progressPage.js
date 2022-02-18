/**
 * 页面进度指示器
 */

 (function() {
  var $w = $(window);
  var $prog2 = $('.progress-indicator-2');
  var wh = $w.height();
  var h = $('body').height();
  var sHeight = h - wh;
  $w.on('scroll', function() {
    window.requestAnimationFrame(function(){
      var perc = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
      updateProgress(perc);
    });
  });

  function updateProgress(perc) {
    $prog2.css({width: perc * 100 + '%'});
    // ditto.save_progress && store.set('page-progress', perc);
  }

}());



$(function() {
  //動画，音声開始ボタン
  $('#play_button').click(function(){
    $('#audio').get(0).play();
    $('#fg_video').get(0).currentTime = 0;
    $('#bg_video').get(0).currentTime = 0;
    $('#fg_video').get(0).play();
    $('#bg_video').get(0).play();
    $('#title_box').fadeOut();
    $('#button').fadeIn();
    $('#seekbar').fadeIn();
  })
  
  //切り替えボタン
  $('#button').click(function(){
    if($('#content_fg').css('z-index') == '2'){
      $('#content_fg').css('z-index', '1');
      $('#content_bg').css('z-index', '2');
    }else{
      $('#content_bg').css('z-index', '1');
      $('#content_fg').css('z-index', '2');
    }
  });

  //シークバー
  $('#fg_video').on('timeupdate', function() {
    const duration = Math.round($('#fg_video').get(0).duration);
    const percent = Math.round($('#fg_video').get(0).currentTime / duration *1000)/10 + '%';
    $('#seekbar').css('background-size', percent);
  });

  $('#seekbar').click(function(e){
    const duration = Math.round($('#fg_video').get(0).duration);
    const position = Math.round(e.offsetX / $('#seekbar').width() *100)/100;
    $('#fg_video').get(0).currentTime = duration * position;
    $('#bg_video').get(0).currentTime = duration * position;
  });
});
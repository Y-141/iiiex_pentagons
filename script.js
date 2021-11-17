window.addEventListener('load', function () {
  deSVG('.desvg', true);
});

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
    $('.button').fadeIn();
    $('#seekbar').fadeIn();
    $('#seekbar_pause_button').fadeIn();
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


  //----------------------------------------------
  //切り替えボタンの編集

  $('#button_turtle').hover(
    function() {
      $(this).css('background-color', '#dfdfdf');
      $(this).find('path, ellipse').css('fill', '#8e8e8e');
    },
    function() {
      $(this).css('background-color', '#8e8e8e');
      $(this).find('path, ellipse').css('fill', '#dfdfdf');
    }
  );

  $('#button_star').hover(
    function () {
      $(this).css('background-color', '#dfdfdf');
      $(this).find('path').css('fill', '#8e8e8e');
    },
    function () {
      $(this).css('background-color', '#8e8e8e');
      $(this).find('path').css('fill', '#dfdfdf');
    }
  );


  $('#button_turtle').click(function () {
    $('#content_fg').css('z-index', '1');
    $('#content_bg').css('z-index', '2');
  });

  $('#button_star').click(function () {
    $('#content_fg').css('z-index', '2');
    $('#content_bg').css('z-index', '1');
  });


  //----------------------------------------------



  //シークバー
  $('#fg_video').on('timeupdate', function() {
    const duration = Math.round($('#fg_video').get(0).duration);
    const percent = Math.round($('#fg_video').get(0).currentTime / duration *1000)/10 + '%';
    const css_b = 'linear-gradient(90deg, #999 0%, #999 '+ percent + ', #eee ' + percent + ', #eee 100%)';
    // $('#seekbar').css('background-size', percent);
    $('#seekbar').css('background', css_b);
  });

  $('#seekbar').click(function(e){
    const duration = Math.round($('#fg_video').get(0).duration);
    const position = Math.round(e.offsetX / $('#seekbar').width() *100)/100;
    $('#fg_video').get(0).currentTime = duration * position;
    $('#bg_video').get(0).currentTime = duration * position;
  });

  $('#seekbar_pause_button').click(function(){
    $('#fg_video').get(0).pause();
    $('#bg_video').get(0).pause();
    $('#bg_video').get(0).currentTime = $('#fg_video').get(0).currentTime;
    $('#fg_video').get(0).currentTime = $('#bg_video').get(0).currentTime;
    $(this).hide();
    $('#seekbar_play_button').show();
  });

  $('#seekbar_play_button').click(function(){
    $('#fg_video').get(0).play();
    $('#bg_video').get(0).play();
    $(this).hide();
    $('#seekbar_pause_button').show();
  });
});
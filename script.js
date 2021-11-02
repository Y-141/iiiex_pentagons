$(function() {
  
  $('#play_button').click(function(){
    $('#audio').get(0).play();
    $('#title_box').fadeOut();
    $('#button').fadeIn();
  })
  
  $('#button').click(function(){
    if($('#content_fg').css('z-index') == '2'){
      $('#content_fg').css('z-index', '1');
      $('#content_bg').css('z-index', '2');
    }else{
      $('#content_bg').css('z-index', '1');
      $('#content_fg').css('z-index', '2');
    }
  });

});
$(function() {
  $('#content_fg').click(function(){
    $(this).css('z-index', '1');
    $('#content_bg').css('z-index', '2');
  });
  $('#content_bg').click(function(){
    $(this).css('z-index', '1');
    $('#content_fg').css('z-index', '2');
  });
});
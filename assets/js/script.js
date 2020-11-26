// header Menu Scroll down js
$(window).on("scroll", function(){
  var scrollPos = $(window).scrollTop();
  $('.main_menu_list li a').on("each", function(){
    var currentElement = $(this);
    var currentTop =  $($(this).attr('href')).offset().top - 80;
    var currentHeight = $(currentElement.attr("href")).outerHeight();
    if ( currentTop <= scrollPos && (currentTop + currentHeight) > scrollPos ) {
      $(currentElement).parent().siblings().find('a').removeClass('active');
      $(currentElement).addClass('active');
    }
    else{
      $(currentElement).removeClass('active');
    }
  });
});

// mobile menu toggle
$(".menu-bar").on('click', function() {
  $(this).addClass('active');
  $('.main_menu').addClass('opened');
});

$(".close_menu, .nav-link").on('click', function() {
  $('.menu-bar').removeClass('active');
  $('.main_menu').removeClass('opened');
});

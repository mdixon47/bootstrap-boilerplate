// Code goes here
$(document).ready(function(){

  var aboutSection = $('#about-section');
  var aboutButton = $('.about_btn');

  $(function() {
    $('.chart').easyPieChart({
      scaleColor: "#000000",
      lineWidth: 10,
      lineCap: 'butt',
      barColor: '#1abc9c',
      trackColor:	"#ecf0f1",
      size: 160,
      animate: 2000
    });
  });

  aboutButton.on('click', function() {
        TweenMax.fromTo(aboutSection, 3, {opacity: 0}, {opacity: 1} );
  });

  $(window).scroll(function(event){
      event.preventDefault();
      var y = $(this).scrollTop();
      console.log(y);
      var aboutTop = aboutSection.offset().top;


      if (aboutTop) {
        TweenMax.to(aboutSection, 3, {opacity: 1});
      }



  });
});

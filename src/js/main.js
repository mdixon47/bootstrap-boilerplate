// Code goes here
$(document).ready(function(){

 $('#intro').addClass('animated fadeIn');
 $('.intro-content').addClass('animated fadeInDown');

  $(function() {
    $('.chart').easyPieChart({
      scaleColor: "#000000",
      lineWidth: 10,
      lineCap: 'butt',
      barColor: '#1c2d85',
      trackColor:	"#ecf0f1",
      size: 160,
      animate: 2000
    });
  });

  $(window).scroll(function() {
      var y = $(this).scrollTop();
      console.log(y);

      if($(this).scrollTop() > 550) {

        $('#about-section').addClass('animated fadeIn')
        $('.about-img').addClass('animated fadeInLeft');
        $('.about-info').addClass('animated fadeInRight');

      }

      if($(this).scrollTop() > 500) {

        $('.type_job1').addClass('animated fadeInLeft');
        $('.type_job3').addClass('animated fadeInRight');
        $('.type_job2').addClass('animated fadeInUp');

      }

      if($(this).scrollTop() > 1325) {

         $('.portfolio_title').addClass('animated fadeInDown');
			   $('.portfolio-site-1').addClass('animated fadeInDown');
         $('.portfolio-site-2').addClass('animated fadeInUp');

      }

      if($(this).scrollTop() > 2160) {


    			$('.skillset_title').addClass('animated fadeInDown');
    			$('.marketing').addClass('animated fadeInUp');
    			$('.develop_title').addClass('animated fadeInUp');
    			$('.develop').addClass('animated fadeInDown');
      }

      if($(this).scrollTop() > 3220) {

          $('.testimonial').addClass('animated fadeInDown');

      }

  });

});

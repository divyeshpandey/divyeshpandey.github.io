var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
      
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };
  
  rangeSlider();


  function plan(){
      var learningplan = document.getElementById('learningplan');
      learningplan.style.display = 'flex';
      
  }
 
  $(document).ready(function(){
    $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 20){
        // $(".navbar").css("border-bottom","thin solid rgb(0,0,0)");
        $(".navbar").css("box-shadow","0px 15px 10px -18px #111");
        $(".navbar").css("transition-duration","0.2s");
    }
    else{
        // $(".navbar").css("border-bottom","thin solid rgb(255,255,255)");
        // $(".navbar").css("background","rgba(0,0,0,0)"); 
        $(".navbar").css("border-bottom","none");    
        $(".navbar").css("box-shadow","none");
    }
  });
});
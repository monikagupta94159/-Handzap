 $(document).ready(function(){
     $('.nav-link').on('click', function(){
         $('.active-link').removeClass('active-link');
         $(this).addClass('active-link');
     })
     
     $("#title1, #title2").on({
        mouseenter: function(){
          $('#title1').removeAttr("style");
          $('#title2').removeAttr("style");
          var id=this.id;
          if(id == "title1"){
            $(this).css({"color": "#358072"});
            $('#title1-box').css({"display" : "block"});
            $('#title2-box').css({"display" : "none"});
          }
          else{
            $('#title1').removeAttr("style");
            $(this).css({"color": "#358072"});
            $('#title1-box').css({"display" : "none"});
            $('#title2-box').css({"display" : "block"});
          }
        }
    });
    
 })

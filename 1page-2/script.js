$(function(){
    $('#menu-btn').click(function(){
        $('#menu-modal').show();
        $('#menu-btn').hide();
    });
    var w = $(window).width();

    $(window).resize(function(){
        w = $(window).width();
        if(w > 1000){
            $('#menu-btn').hide();
        }else{
            $('#menu-btn').show();
        }
    });

 
        $('main').click(function(){
               if(w <= 1000){
                $('#menu-modal').hide();
                $('#menu-btn').show();
            }
        });

    

});
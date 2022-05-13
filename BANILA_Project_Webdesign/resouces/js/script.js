$(document).ready(function(){
    
    
    $('.mid-page').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px'
    } );
} );  
  
    
         
                  
                  
                  

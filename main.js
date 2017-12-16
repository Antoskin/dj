
$( document).ready( () => {
    console.log('!');
    // $('.main-buttons button').click(function() {
    //     $('.main-buttons button').removeClass('active');
    //     $(this).addClass('active');
    // })

});



$(window).on('load', function() {
    // console.log('!')
    $('#preloader-wrapper').fadeOut('slow');
    let start_count = 0;
    let iner = setInterval( () => {
        console.log(start_count);
        $('.wrapper-polos').css({'height':start_count+'vh'})
        start_count++;
        { start_count == 101 ? clearInterval(iner) : `` }
    },30 );
})





$( function() {
    $( ".glitch-img" ).mgGlitch({
      // set 'true' to stop the plugin
              destroy : false, 
      // set 'false' to stop glitching
      glitch: true, 
      // set 'false' to stop scaling
      scale: false, 
      // set 'false' to stop glitch blending
      blend : true, 
      // select blend mode type
      blendModeType : 'hue',
      // set min time for glitch 1 elem
      glitch1TimeMin : 1000, 
      // set max time for glitch 1 elem
      glitch1TimeMax : 0,
      // set min time for glitch 2 elem
      glitch2TimeMin : 0, 
      // set max time for glitch 2 elem
      glitch2TimeMax : 200, 
    });
    $('.genes').mgGlitch({
        // set 'true' to stop the plugin
        destroy : false, 
        // set 'false' to stop glitching
        glitch: true, 
        // set 'false' to stop scaling
        scale: false, 
        // set 'false' to stop glitch blending
        blend : true, 
        // select blend mode type
        blendModeType : 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin : 300, 
        // set max time for glitch 1 elem
        glitch1TimeMax : 100,
        // set min time for glitch 2 elem
        glitch2TimeMin : 300, 
        // set max time for glitch 2 elem
        glitch2TimeMax : 300, 
    });
    $('.red-img').mgGlitch({
        destroy : false, 
        glitch: true, 
        scale: false, 
        blend : true, 
        blendModeType : 'hue',
        glitch1TimeMin : 300, 
        glitch1TimeMax : 100,
        glitch2TimeMin : 300, 
        glitch2TimeMax : 300, 
    });
    $('.proto').mgGlitch({
        destroy : false, 
        glitch: true, 
        scale: false, 
        blend : true, 
        blendModeType : 'hue',
        glitch1TimeMin : 300, 
        glitch1TimeMax : 100,
        glitch2TimeMin : 300, 
        glitch2TimeMax : 300, 
    });
});

$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Next",
            previous: "Back"
        },
        onStepChanging: function (event, currentIndex, newIndex) {
        if (newIndex === 1) {
        $(".steps ul").addClass("step-2");
      } else {
        $(".steps ul").removeClass("step-2");
      }
      if (newIndex === 2) {
        $(".steps ul").addClass("step-3");
        $(".actions ul").addClass("mt-7");
      } else {
        $(".steps ul").removeClass("step-3");
        $(".actions ul").removeClass("mt-7");
      }

        alert("he");


      return true;
    },
    onStepChanged: function(event, currentIndex, priorIndex) {
      // Used to skip the "Warning" step if the user is old enough.
    },
    onFinishing: function(event, currentIndex) {
    alert("HElli")

      },
        
            
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Grid 
    $('.grid .grid-item').click(function(){
        $('.grid .grid-item').removeClass('active');
        $(this).addClass('active');
    })
    // Click to see password 
    $('.password i').click(function(){
        if ( $('.password input').attr('type') === 'password' ) {
            $(this).next().attr('type', 'text');
        } else {
            $('.password input').attr('type', 'password');
        }
    }) 
    // Date Picker
    var dp1 = $('#dp1').datepicker().data('datepicker');
    dp1.selectDate( new Date( ));
})

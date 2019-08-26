jQuery(function($) {
    $('.table-trigger tr')
      .on('mouseenter', function() {
        console.log(this);
  
          $('.'+$(this).attr('id'), '.table-trigger-target')
          .addClass('hover')
      })
      .on('mouseleave', function() {
          $('.'+$(this).attr('id'), '.table-trigger-target')
            .removeClass('hover')
      })
  });
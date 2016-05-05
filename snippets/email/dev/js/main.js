$(function(){
  
  $('.js-simpleForm').submit(function(e){
    var $form = $(this);
    $.ajax({
        type: 'post',
        url: $form.attr('action'),
        data: $form.serialize(),
        beforeSend: function(){
          $form.trigger('reset');
          console.log('submit');
        },
        success: function(responce) {
          console.log('success');
        }
    });
    
    e.preventDefault();
  });
  
  
  //jQuery Form Plugin - http://malsup.com/jquery/form/
  $('.js-attachForm').each(function(){
    var $form = $(this);
    $form.ajaxForm({
      type: 'post',
      data: $form.fieldSerialize(),
      resetForm: true,
      beforeSubmit: function(){
        console.log('submit');
      },
      success: function(responce) {
        console.log('success');
      }
    });
  });
});
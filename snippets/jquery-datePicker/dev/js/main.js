$(function(){
  //Single, Inline
  $('.js-datepicker').datepicker();
  
  //Year, month, date
  $('.js-datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
  
  //Year, month, date, time
  $('.js-datepicker2').datepicker({
    changeMonth: true,
    changeYear: true
  });
  
  //Range
  $('.js-datepickerGroup').each(function(indx, elem){
    var _el = $(elem);
    var inputs = _el.find('input.js-datepicker');
    var inputFrom = inputs.eq(0);
    var inputTo = inputs.eq(1);

    inputFrom.attr('data-name','from');
    inputTo.attr('data-name','to');

    var dates = $(inputs).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onSelect: function(selectedDate){
        var option = this.dataset.name == "from" ? "minDate" : "maxDate",
            instance = $( this ).data( "datepicker" ),
            date = $.datepicker.parseDate(
              instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
              selectedDate, instance.settings);
        dates.not(this).datepicker("option", option, date);
      }
    });
  });
  
  //Single input range
  (function ($) {
    $.fn.daterange = function () {
      // опции
      var opts = $.extend({
        'rangeSeparator': '-'
      }, arguments[0] || {}, {
        // обработчики событий datepicker
        // закрытие
        "onClose": function (dateText, inst) {
          if ($.isFunction(opts.callback)) {
            opts.callback.apply(this, arguments);
          }
        },
        // выбор даты
        "onSelect": function (dateText, inst) {
          var textStart;
            if (!inst.rangeStart) {
              inst.inline = true;
              inst.rangeStart = dateText;
            } else {
              inst.inline = false;
              textStart = inst.rangeStart;
              if (textStart !== dateText) {
                $(this).val(textStart + ' ' +
                  opts.rangeSeparator + ' ' + dateText);
                inst.rangeStart = null;
              }
            }
        }
      });

      return this.each(function () {
        var input = $(this);
        if (input.is('input')) {
          input.datepicker(opts);
        }
      });
    };
  }(jQuery));

  $('.js-datepickerRange').daterange();

  //Exclude dates
  $('.js-datepickerEx').datepicker({
    beforeShowDay: $.datepicker.noWeekends, //disable weekends
    minDate: -1, //disable dates early than yestarday
    maxDate: +20
  });
});
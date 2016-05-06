(function( $ ) {


    $.fn.exitPopup = function(options) {

        var settings = $.extend( {
            timeOut             : 0, // в секундах, определяет время перед отображением попапа
            once                : 'once', // показывать толкько один раз once/session/global/none
            quantity            : -1, // если once = none определяет количество показов до перезагрузки страницы (а
            // вдруг пригодится) -1 -  без ограничений
            timeInterval        : 0, // в секундах, время через которое можно повторно открывать попап
            typeModal           : 'local', // определяет вид попапа. local/fancybox
            fancybox            : {
                afterClose    :   function() {
                    popupStatus = 'hide';
                }
            }
        }, options);


        var _this = this;
        var _timeOut = settings.timeOut * 1000;
        var counter = 0;
        var quantityCounter = 0;
        var interval = settings.timeInterval * 1000;
        var popupStatus = 'hide';
        var pageY = 1000;

        hidePopup();
        var intervalLbl = true;
        $(document).mousemove(function(e){
            pageY = e.pageY;
        });

        $(document).mouseout(function(e){

            removeStory(); // запускаеи функцию очитски Storages

            var sessionCounter = sessionStorage.getItem('sesCounter') ? sessionStorage.getItem('sesCounter') : 0;
            var globalCounter = localStorage.getItem('glbCounter') ? localStorage.getItem('sesCounter') : 0;

            var ieVersion = ie_ver();
            var pageYValue;
            var minPageYValue;

            if (ieVersion > 0){
                pageYValue = pageY;
                minPageYValue = 7;
            } else {
                pageYValue = e.pageY;
                minPageYValue = 0;
            }

            if(pageYValue <= minPageYValue && counter == 0 && intervalLbl && (settings.quantity > quantityCounter || settings.quantity == -1) && popupStatus == 'hide' && sessionCounter == 0 && globalCounter == 0) {
                intervalCalculate();
                setTimeout(function(){
                    showPopup();
                }, _timeOut);
                switch (settings.once){
                    case 'once':
                        counter++;
                        break;
                    case 'session':
                        sessionStorage.setItem('sesCounter', 'true');
                        break;
                    case 'global':
                        localStorage.setItem('glbCounter', 'true');
                        break;
                    case 'none':
                        quantityCounter++;
                        break;
                    default : counter++;
                }
            }

        });

        function intervalCalculate(){
            if (interval){
                intervalLbl = false;
                setTimeout(function(){
                    intervalLbl = true;
                }, interval);
            } else{
                intervalLbl = true;
            }
        }

        function showPopup(){
            popupStatus = 'show';
            if (settings.typeModal == 'local') {
                _this.fadeIn(600);
            } else if (settings.typeModal == 'fancybox') {

                settings.fancybox.href = '#' + _this.attr('id');
                $.fancybox.open(settings.fancybox);
            }
        }

        function hidePopup(){

            if (settings.typeModal == 'local') {
                $('.js-closeExitPopup').on('click', function(e){
                    e.preventDefault();
                    _this.fadeOut(600);
                    popupStatus = 'hide';
                });
            }
        }

        function ie_ver(){
            var iev=0;
            var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
            var trident = !!navigator.userAgent.match(/Trident\/7.0/);
            var rv=navigator.userAgent.indexOf("rv:11.0");

            if (ieold) iev=new Number(RegExp.$1);
            if (navigator.appVersion.indexOf("MSIE 10") != -1) iev=10;
            if (trident&&rv!=-1) iev=11;

            return iev;
        }

        function removeStory(){
            if (settings.once == 'once' || settings.once == 'none'){
                sessionStorage.removeItem('sesCounter');
                localStorage.removeItem('glbCounter');
            } else if (settings.once == 'session') {
                localStorage.removeItem('glbCounter');
            }
        }
    };
})(jQuery);

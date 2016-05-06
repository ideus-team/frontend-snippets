$(function(){

    /**
     * timeOut       - number (default: 0), устанавливается таймаут появления попапа (в секундах)
     * once          - string (default: 'once') все значения:
     *                                     'once'     - попап срабатывает 1 раз, при перезагрузке страницы срабатывает снова
     *                                     'none'     - попап срабатывает несколько раз
     *                                     'session'  - попап срабатывает 1 раз за период сессии
     *                                     'session'  - попап срабатывает только 1 раз для пользователя
     * quantity      - number (default: -1), устанавливает количество показов попапа. -1 - неограниченное количество.
     *                                  актуально при  once: 'none'
     * timeInterval  - number (default: 0), интервал между показами попапов. актуально при once: 'none'
     * typeModal     - string (default: 'local'), все значения:
     *                                            'local'    - вызывается встроенный попап
     *                                            'fancybox' - вызывается fancybox попап
     * fancybox      - тут можно задать свойства для fancybox.
     *
     */

    $('#exitPopupFancy').exitPopup({
        timeOut             : 0,
        once                : 'once',
        quantity            : -1,
        timeInterval        : 0,
        typeModal           : 'fancybox',
        fancybox            : {
            //здесь можно переопределить свойства fancybox
        }
    });
});
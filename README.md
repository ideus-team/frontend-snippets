# iDeus frontend snippets

Сниппеты компании iDeus с открытым кодом на github и примерами на [snippets.ideus.biz](http://snippets.ideus.biz)

## Порядок работы и запуска
1. Клонируем репозиторий.
2. В папке Grunt запускаем install.
3. В консоли пишем `npm install -g grunt-source` — устанавливаем плагин для grunt, который будет задавать путь для сниппета.
4. Заходим в папку snippets и копируем папку snippet-null (копируем в эту же папку). В этой папке находится шаблон для создания сниппетов. Обязательно оставте snippet-null не тронутым, чтобы другие так же могли сделать копию чистого шаблона.
5. Все js\scss\img кладем в папку dev и там пишем все, что нам нужно.
6. Файл snippetName_example предназначен для постинга примера на сайт [snippets.ideus.biz](http://snippets.ideus.biz). Там должен быть рабочий код.
7. Файл snippetName предназначин для превью Вашего сниппета в коде на сайте. Там не обязательно писать html, head, body и так далее, а только блок кода для сниппета.
8. Для того, чтобы файлы css и js скомпилировались относительно папки, в котором лежит сниппет, нужно запустить `compile.cmd`. Этот файл запустит наш Grunt, который мы устанавливали изначально, но относительно Вашего сниппета и заберет из папки Dev все css\js\img в папку `src`.
9. Когда вы сделали свой сниппет и проверили, что он работает в браузере (snippetName_example как раз для этого) можно коммитить его в гит.
10. Заходим на [snippets.ideus.biz](http://snippets.ideus.biz), логинимся под выданными доступами.
11. Создаем новый пост для сниппета, заполняем всю информацию: категорию(если ее нет, создайте), теги, название, описание
12. Можно заполнить сниппет по примеру уже имеющихся. Ссылки на код вставлять из raw ссылок:
![raw](http://joxi.ru/gV2Vn61tvXlK2v.jpg)
13. Ссылку на пример мы просто так не вставим. Есть специальный сервис для этого: [rawgit.com](https://rawgit.com/).
14. Запоняем все необходимые поля и постим новый сниппет.
15. **Обязательно** рассказываем всем в команде о своем сниппете в slack или просто словесно путем отвечения людей от работы на 2-5 минут.

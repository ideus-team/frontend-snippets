# iDeus frontend snippets

<p>Сниппеты компании iDeus</p>

<h2>Порядок работы и запуска</h2>
<ol>
  <li>Клонируем репозиторий.</li>
  <li>В папке Grunt запускаем install.</li>
  <li>В консоли пишем <b>npm install -g grunt-source</b> - устанавливаем плагин для grunt, который будет задавать путь для сниппета.</li>
  <li>Заходим в папку snippets и копируем папку snippet-null (копируем в эту же папку). В этой папке находится шаблон для создания сниппетов. Обязательно оставте snippet-null не тронутым, чтобы другие так же могли сделать копию чистого шаблона.</li>
  <li>Все js\scss\img кладем в папку dev и там пишем все, что нам нужно.</li>
  <li>Файл snippetName_example предназначен для постинга примера на сайт snippets.ideus.biz. Там должен быть рабочий код.</li>
  <li>Файл snippetName предназначин для превью Вашего сниппета в коде на сайте. Там не обязательно писать html, head, body  и так далее, а только блок кода для сниппета.</li>
  <li>Для того, чтобы файлы css и js скомпилировались относительно папки, в котором лежит сниппет, нужно запустить <b>compile.cmd</b>. Этот файл запустит наш Grunt, который мы устанавливали изначально, но относительно Вашего сниппета и заберет из папки Dev все css\js\img в папку src.</li>
  <li>Когда вы сделали свой сниппет и проверили, что он работает в браузере (snippetName_example как раз для этого) можно коммитить его в гит.</li>
  <li>Заходим на <a href="http://snippets.ideus.biz/">snippets.ideus.biz</a>, логинимся под выданными доступами.</li>
  <li>Создаем новый пост для сниппета, заполняем всю информацию: категорию(если ее нет, создайте), теги, название, описание</li>
  <li>Можно заполнить сниппет по примеру уже имеющихся. Ссылки на код вставлять из raw ссылок: <div><img src="http://joxi.ru/gV2Vn61tvXlK2v.jpg"/></div></li>
  <li>Ссылку на пример мы просто так не вставим. Есть специальный сервис для этого: https://rawgit.com/.</li>
  <li>Запоняем все необходимые поля и постим новый сниппет.</li>
  <li><span style="color: red; font-weight: bold;">Обязательно</span> рассказываем всем в команде о своем сниппете в slack или просто словесно путем отвечения людей от работы на 2-5 минут.</li>
</ol>

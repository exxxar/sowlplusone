var Rus = new Array(
					{"elem":".title h2","value":"Команда web-разработчиков","type":"elem"},
					{"elem":".content-item:nth-of-type(1) .head > p","value":"Web-разработка","type":"elem"},
					{"elem":".content-item:nth-of-type(1) > p","value":"Мы разрабатываем веб-приложения любой сложности: от небольших сервисов до сложных информационных систем. Применяем новейшие и широко используемые технологии. Современный подход и методологии разработки позволяют соблюдать сроки и при этом гибко реагировать на возможные изменения ваших требований.","type":"elem"},
					{"elem":".content-item:nth-of-type(2) .head > p","value":"Поддержка и доработка web-проектов","type":"elem"},
					{"elem":".content-item:nth-of-type(2) > p","value":"У вас уже есть интернет-проект? Мы сможем обеспечить его работоспособность и техническое развитие. Для того, чтобы ваш проект работал стабильно и при этом постоянно совершенствовался, вам не нужно держать свой it-отдел. Мы возьмем эту работу на себя.","type":"elem"},
					{"elem":".content-item:nth-of-type(3) .head > p","value":"Аутсорсинг","type":"elem"},
					{"elem":".content-item:nth-of-type(3) > p","value":"Мы готовы полностью или частично взять на себя ваши задачи по web-разработке. Наши разработчики, тестировщики, дизайнеры и другие специалисты легко найдут общий язык с вашими специалистами, встроятся в команду. Мы используем баг-трекер Jira, Redmine, YouTrack, систему контроля версий Git, SVN.","type":"elem"},
					{"elem":".content-item:nth-of-type(4) .head > p","value":"Web-сайты любой сложности","type":"elem"},
					{"elem":".content-item:nth-of-type(4) > p","value":"Мы разработаем корпоративный сайт, интернет-магазин, портал под ключ. Мы имеем собственные наработки, позволяющие в кратчайший срок и с минимаьными затратами запустить сайт с панелью администратора и широко востребованным функционалом(новости, статьи, каталог, почта, форум и т.д.)","type":"elem"},			
					{"elem":".btn-sqr:nth-of-type(1) p","value":"ON-LINE КОНСУЛЬТАНТ","type":"elem"},
					{"elem":".btn-sqr:nth-of-type(2) p","value":"ЗВОНОК С САЙТА","type":"elem"},
					{"elem":".projects h1","value":"ПРОЕКТЫ С НАШИМ УЧАСТИЕМ","type":"elem"},
					{"elem":".projects-item:nth-of-type(1) p","value":"Портал для поставщиков заказов в строительстве","type":"elem"},
					{"elem":".projects-item:nth-of-type(2) p","value":"Пензенский областной драматический театр им. А.В. Лунарчарского","type":"elem"},
					{"elem":".projects-item:nth-of-type(3) p","value":"Крупнейший портал бытовой техники","type":"elem"},
					{"elem":".our-works h1","value":"НАШИ РАБОТЫ","type":"elem"},
					{"elem":".write-us h1","value":"НАПИСАТЬ НАМ","type":"elem"},					
					{"elem":".write-us input:nth-of-type(1)","value":{'placeholder':'ВАШЕ ИМЯ'},"type":"attr"},
					{"elem":".write-us input:nth-of-type(2)","value":{'placeholder':'E-MAIL'},"type":"attr"},
					{"elem":".write-us textarea","value":{'placeholder':'СООБЩЕНИЕ'},"type":"attr"},
					{"elem":".write-us input[type='button']","value":{'value':'Отправить'},"type":"attr"}
					);	
					
var Eng = new Array(
					{"elem":".title h2","value":"erere","type":"elem"},
					{"elem":".content-item:nth-of-type(1) .head > p","value":"eeee","type":"elem"},
					{"elem":".content-item:nth-of-type(1) > p","value":"eeee","type":"elem"},
					{"elem":".content-item:nth-of-type(2) .head > p","value":"eeee","type":"elem"},
					{"elem":".content-item:nth-of-type(2) > p","value":"0ee","type":"elem"},
					{"elem":".content-item:nth-of-type(3) .head > p","value":"0eee","type":"elem"},
					{"elem":".content-item:nth-of-type(3) > p","value":"0eeee","type":"elem"},
					{"elem":".content-item:nth-of-type(4) .head > p","value":"0eeeee","type":"elem"},
					{"elem":".content-item:nth-of-type(4) > p","value":"0eeee","type":"elem"},			
					{"elem":".btn-sqr:nth-of-type(1) p","value":"0eeeeee","type":"elem"},
					{"elem":".btn-sqr:nth-of-type(2) p","value":"0eeeeefff","type":"elem"},
					{"elem":".projects h1","value":"0","type":"elem"},
					{"elem":".projects-item:nth-of-type(1) p","value":"0ff","type":"elem"},
					{"elem":".projects-item:nth-of-type(2) p","value":"0ffff","type":"elem"},
					{"elem":".projects-item:nth-of-type(3) p","value":"0fffff","type":"elem"},
					{"elem":".our-works h1","value":"0fff","type":"elem"},
					{"elem":".write-us h1","value":"0fff","type":"elem"},					
					{"elem":".write-us input:nth-of-type(1)","value":{'placeholder':'11dfsdf111'},"type":"attr"},
					{"elem":".write-us input:nth-of-type(2)","value":{'placeholder':'11dfsdfsdf111'},"type":"attr"},
					{"elem":".write-us textarea","value":{'placeholder':'1111sdfsdf1'},"type":"attr"},
					{"elem":".write-us input[type='button']","value":{'value':'11sfsf111'},"type":"attr"}
					);
					
function changeLang(lang){
	if (lang=="lang-check-1"){
		for(var i=0; i<Rus.length; i++) {
					if (Rus[i].type=="elem")
						$(Rus[i].elem).html(Rus[i].value);
					else
						$(Rus[i].elem).attr(Rus[i].value);
				}
			}
				else {
					for(var i=0; i<Eng.length; i++) {
						if (Eng[i].type=="elem")
							$(Eng[i].elem).html(Eng[i].value);
						else
							$(Eng[i].elem).attr(Eng[i].value);
					}
				}
}

 $(document).ready(function() {			 		 
			 $( ".checkbox" ).bind( "click", function() {
					changeLang($(this).attr("id"));
				 });
});


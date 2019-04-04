var mapHTML = '';

h1('JavaScript');
h2('Клиент-сервер');
div('js', 'client-server-desc',  'Клиент-сервер');
div('js', 'client-server-http',  'HTTP');
div('js', 'client-server-https', 'HTTPS');
div('js', 'client-server-rest',  'REST API');

h2('Client Storage');
div('js', 'data-storage', 'localStorage / sessionStorage');
div('js', 'data-db',      'IndexedDB');
div('js', 'data-cookie',  'Cookie');

h2('Парадигмы программирования');
div('theory', 'paradigms', 'Парадигмы программирования');
div('theory', 'paradigms-imper', 'Императивное');
div('theory', 'paradigms-decl', 'Декларативное');
div('theory', 'paradigms-func', 'Функциональное');
div('theory', 'paradigms-oop', 'Объектно-ориентированное');
div('theory', 'composition', 'Композиция');
div('theory', 'currying', 'Каррирование / Частичное применение функций');

h2('Методологии разработки');
div('theory', 'method-dev', 'Методологии разработки');
div('theory', 'method-waterfall', 'Waterfall');
div('theory', 'method-agile', 'Agile');
div('theory', 'method-scrum', 'Scrum');
div('theory', 'method-kanban', 'Kanban');

h2('Функции');
div('js_functions', 'special', 'Особенности');
div('js_functions', 'announcement', 'Function Declaration / Function Expression / IIFE / new Function');
div('js_functions', '', '');
div('js_functions', '', '');

h2('');
div('theory', '', '');

h2('');
div('theory', '', '');










document.querySelector('#elements-menu').innerHTML = mapHTML;

function h1(content) {
	mapHTML += `<h1>${content}</h1>`;
}
function h2(content) {
	mapHTML += `<h2>${content}</h2>`;
}
function div(page, theme, content) {
	mapHTML += `<div class="element-menu" data-page="${page}" data-theme="${theme}">${content}</div>`;
}



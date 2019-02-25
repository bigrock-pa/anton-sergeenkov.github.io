
hljs.initHighlightingOnLoad();

var menu = `
    <a href="js.html"            class="menu menu-js">js</a>
    <a href="js_functions.html"  class="menu menu-js">functions</a>
    <a href="js_objects.html"    class="menu menu-js">objects</a>
    <a href="canvas.html"        class="menu menu-js">canvas</a>

    <a href="vue_js.html"        class="menu menu-jsfw">vue.js</a>
    <a href="jquery.html"        class="menu menu-jsfw">jquery</a>
    <a href="js_ajax.html"       class="menu menu-jsfw">ajax</a>

    <a href="html.html"          class="menu menu-html">html</a>
    <a href="css.html"           class="menu menu-html">css</a>
    <a href="svg.html"           class="menu menu-html">svg</a>
    <a href="css_flex.html"      class="menu menu-html">flexbox</a>
    <a href="css_grid.html"      class="menu menu-html">css grid</a>

    <a href="sass.html"          class="menu menu-other">sass</a>
    <a href="npm.html"           class="menu menu-other">npm</a>
    <a href="git.html"           class="menu menu-other">git</a>
    <a href="other.html"         class="menu menu-other">other</a>

    <a href="nodejs.html"        class="menu menu-php">node.js</a>
    <a href="php.html"           class="menu menu-php">php</a>
    <a href="python.html"        class="menu menu-php">python</a>
    <a href="mysql.html"         class="menu menu-php">mysql</a>
`;
$('#menu-top').html(menu);

$('#menu-left > a').on('click', function() {
    $('#menu-left a').removeClass('active');
    $(this).addClass('active');
});

function localStorageService() {
    var value = localStorage.getItem('menu');
    if (value !== null) {
        if (value == 'true') {
            $('#menu-left').addClass('hide');
        } else {
            $('#menu-left').removeClass('hide');
        }
    }   
}
localStorageService();
    
$('#menu-left-show').on('click', function() {
    $('#menu-left').toggleClass('hide');
    var isHide = $('#menu-left').hasClass('hide');
    localStorage.setItem('menu', isHide);
});

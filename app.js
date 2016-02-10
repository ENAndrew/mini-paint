$(document).ready(function(){
    
    var color = 'white';
    var colors = 'red green blue yellow white black';

    $('.box').on('click', function(){
        $(this).addClass(color);
    });
    
    $('.box').on('dblclick', function() {
        $(this).removeClass(color);
    });
    
    ///drag function//////////////////////////
    
    var isDown = false;
    
    $('.box').mousedown(function() {
        isDown = true;
    });
    
    $('.box').mouseup(function(){
        isDown = false;
    });
    
    $('.box').mouseenter(function(){
        if(isDown) {
            $(this).addClass(color);
        };
    });
    ////////////////////////////////////////////
    
    $('#reset').on('click', function() {
        $('.box').removeClass(colors);
    });
    
    $('#red').on('click', function() {
        color = 'red';
    });
    
    $('#blue').on('click', function() {
        color = 'blue';
    });
    
    $('#green').on('click', function() {
        color = 'green';
    });
    
    $('#green').on('click', function() {
        color = 'green';
    });
    
    $('#yellow').on('click', function() {
        color = 'yellow';
    });
    
    $('#white').on('click', function() {
        color = 'white';
    });
    
    $('#black').on('click', function() {
        color = 'black';
    });
    
});
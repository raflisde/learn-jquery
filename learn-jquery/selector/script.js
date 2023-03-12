$(document).ready(function(){
    // selector tag
    $('h1').css('color','red')
    $('p').css('color','blue')
    
    // selector class
    $('.judul').css('background-color','red')
    $('.paragraf').css('color','salmon')
    
    // selector id
    $('#judul').css('border','2px solid blue')
    $('#paragraf').css('border','2px solid green')

    $('.content').css('background-color', 'grey');

    $('h4').css('background-color', 'yellow');
    $('h4:eq(2)').css('background-color', 'blue');

    $('input:submit').css('background-color', 'green');
    $('input:button').css('padding', '10px');
    
})


$(document).ready(function(){
    //Event Click      
    $('#click').click(function(){
        alert('Nah ke klik!');
    })

    // Event dbdclick
    $('#dblclick').dblclick(function(){
        $(this).css('background-color','red'); 
    })

    // Event Mouse
    $('.mouse').mouseleave(function(){
        $(this).css('background-color','green')
    })
   
    $('.mouse').mouseenter(function(){
        $(this).css('background-color','skyblue')
    })

    // Event Keydown
    $('#keydown').keydown(function(){
        $('#pesan_keydown').text($(this).val())
    })

    // Event Keyup
    $('#keyup').keyup(function(){
        $('#pesan_keyup').text($(this).val())
    })

})
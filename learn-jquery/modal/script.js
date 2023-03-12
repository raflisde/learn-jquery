$(document).ready(function(){

    $('#tombol').click(function(){
        $('modal-box').show(10000);
    })

    $('#close-button').click(function(){
        $('modal-box').hide(10000);
    })
})
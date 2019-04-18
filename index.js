$(document).ready(function(){

    $('#js-shopping-list-form').on('submit', function(event){
        let textInput = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + textInput + '</li>');

        event.preventDefault();
    });

    $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(){
       $(this).closest('li').remove(); 
    });

});
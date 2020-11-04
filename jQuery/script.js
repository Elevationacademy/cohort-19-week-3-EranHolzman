//Exercise 1

$('#myButton').click(function () {
    $('#myUl').append('<li>' + $('#myInput').val() + '</li>');
})


// Exercise 2

$('body').on('click', 'li', function() {
    $(this).remove();
});




$(document).ready(function(){
    var app = {
        cards = [1,1,,2,2,3,3,4,4,5,5,6,6],
        init: function(){
            app.shuffle();
    },
    shuffle: function(){
        var random = 0;
        temp = 0;
        for(i=1; i < cards.length; i++){
            random = Math.round(Math.random()*i);
            temp = app.cards[i];
            app.cards[i] = app.cards[random];
            app.cards[random] = temp;

        }
        app.assignCards();
        console.log('shuffled card Araay:'+ app.cards);
    },
    assignCards: function(){
        $('.card').each(function(index)
        {
            $(this).attr('data-card-value', app.cards[index]);
        });
        app.clickhandlers();

    },
    clickhandlers: function(){
        $('card').on('click', function(){
            $(this).html('<p>'+$(this).data('cardvalue')+ '<p>').addClass('selected');
             app.checkmatch()   
        })

    },
    checkmatch: function(){
        if ($('.selected').length === 2){
            if ($('.selected').first().data('cardValue') == 
            $('.selected').last().data('cardValue')){
                $('.selected').each(function(){
                    $(this).animate({opcaty: 0}).removeClass('unmatched');
                }
            );
            $('.selected').each(function() {
                $(this).removeClass('selected');

        });
        app.checkWin();
            } 
        else{
            // flip card back over
        setTimeout(function(){
            $('.selected').each(function(){
                $(this).html('').removeClass('selected');
            });
        }, 1000);

        }
        }
    },
    checkWin: function() {
if ($('.unmatched').length === 0) {
$('.container').html('<h1>You Won!</h1>');
}
}
};
    app.init();
    });
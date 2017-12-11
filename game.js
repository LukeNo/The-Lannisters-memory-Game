
//1 - put all pictures into array 
var cards = ["tywin.jpg", "cersei.png",  "jaime.jpg", "cersei.png", "jaime.jpg", "myrcella.jpg", "joffrey.jpg", "joffrey.jpg", "tyrion.jpg", "myrcella.jpg", "tyrion.jpg", "tywin.jpg"];
//alert(cards[7]);

//2 - EventListener for each card
var card0 = document.getElementById('card0');
var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');

var card4 = document.getElementById('card4');
var card5 = document.getElementById('card5');
var card6 = document.getElementById('card6');
var card7 = document.getElementById('card7');

var card8 = document.getElementById('card8');
var card9 = document.getElementById('card9');
var card10 = document.getElementById('card10');
var card11 = document.getElementById('card11');

card0.addEventListener("click", function() { revealCard(0); });
card1.addEventListener("click", function() { revealCard(1); });
card2.addEventListener("click", function() { revealCard(2); });
card3.addEventListener("click", function() { revealCard(3); });

card4.addEventListener("click", function() { revealCard(4); });
card5.addEventListener("click", function() { revealCard(5); });
card6.addEventListener("click", function() { revealCard(6); });
card7.addEventListener("click", function() { revealCard(7); });

card8.addEventListener("click", function() { revealCard(8); });
card9.addEventListener("click", function() { revealCard(9); });
card10.addEventListener("click", function() { revealCard(10); });
card11.addEventListener("click", function() { revealCard(11); });

//3
var oneVisible = false; //is the card visible
var turnCounter = 0; //starts from turn 0
var visible_nr; // nr of visible card


//6 - you cant click another card till 2 are still revealed
var lock = false;
//7 - condition of winning the game, 6 pairs at the beginning, after each turn pairsLeft--
var pairsLeft = 6;


//3
function revealCard(nr) {

	//3 - alert(nr);


    //6
    var opacityValue = $('card' + nr).css('opacity');
    //alert('Opacity: '+opacityValue);

   //6
    //prevent clicking dissapeared card make turnCounter++, like after clicking in visible card
    if (opacityValue != 0 && lock == false) {
        //6
        lock = true;


        //3 - replace emblem for picture
        var picture = "url(img/" + cards[nr] + ")";

        $('#card' + nr).css('background-image', picture);
        //change css of revealed card
        $('#card' + nr).addClass('cardActive');
        $('#card' + nr).removeClass('card');

        //4 - check is 1 or 2 cards of pair revealed
        if (oneVisible == false) {
            //first card

            oneVisible = true;
            visible_nr = nr;
            //6
            lock = false;
        } else {
            //second card

            if (cards[visible_nr] == cards[nr]) {
                //condition of hitting pair
                //alert("pair");

                //hideCards(nr, visible_nr);
                //call function written in step 5 below//

                setTimeout(function() { hideCards(nr, visible_nr) }, 750);
                //setTimeout added to cards disapper with delay


            } else {
                //alert("fail");

                //restoreCards(nr, visible_nr);
                //call function written in step 5 below//
                setTimeout(function() { restoreCards(nr, visible_nr) }, 1000);
                //setTimeout added to cards disapper with delay
            }

            turnCounter++; //next turn
            $('#score').html('Turn: ' + turnCounter); //turn nr displayed in div #score
            oneVisible = false; //false again cause second card is revealed
        }

    }

}

//5 - hide cards when pair is revealed
function hideCards(nr1, nr2) {
    //use opacity to card become invisible but empty div stay at its place
    $('#card' + nr1).css('opacity', '0');
    $('#card' + nr2).css('opacity', '0');


    //8 - after winning the game
    pairsLeft--;

    if (pairsLeft == 0) {
        $('.container').html('<h1>You win!<br>Done in ' + turnCounter + ' turns</h1>');
    }

    //6
    lock = false;
}

//5 - restore cards when pair is not revealed
function restoreCards(nr1, nr2) {
    //restore emblem for first card
    $('#card' + nr1).css('background-image', 'url(img/emblem.jpg)');
    $('#card' + nr1).addClass('card');
    $('#c' + nr1).removeClass('cardActive');

    //restore emblem for second card
    $('#card' + nr2).css('background-image', 'url(img/emblem.jpg)');
    $('#card' + nr2).addClass('card');
    $('#card' + nr2).removeClass('cardActive');

    //6
    lock = false;
}

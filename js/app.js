/*
 * Create a list that holds all of your cards
 */
// creating array to contain all <i> elements class
const classlist=['fa fa-diamond','fa fa-diamond',
                 'fa fa-paper-plane-o','fa fa-paper-plane-o',
                 'fa fa-anchor','fa fa-anchor',
                 'fa fa-bolt','fa fa-bolt',
                 'fa fa-cube','fa fa-cube',
                 'fa fa-leaf','fa fa-leaf',
                 'fa fa-bicycle','fa fa-bicycle',
                 'fa fa-bomb','fa fa-bomb'
                ];
//shuffleling the deck for random cards
shuffle(classlist);

//creating deck loop
   for(var x = 0 ; x < classlist.length ; x++){
       var dec=document.querySelector('#deck');
       var carditem=document.createElement('li');
       var cardi=document.createElement('i');
       carditem.setAttribute('class','card');
       cardi.setAttribute('class', classlist[x]);
       carditem.appendChild(cardi);
       dec.appendChild(carditem); 
   }
    
    



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//selecting deck ul
const allcards=document.querySelectorAll('.card');

//array to store cards class
var cardindex=[];

//array to store <i> elements class for checking match cards
var liindex=[];

//varriable to store matching cards number to check if game complete
var matchnum=0;

//to stroe number of moves
var movesnum=0;
var modelMes=document.querySelector('#model2');
var winMes=document.querySelector('#winMes')

/////////////////////////
//open cards function//
////////////////////////////////
allcards.forEach(function(card){
   card.addEventListener('click',function(e){
       
//       get <1> element class for matching////////////////////
       var iclass=card.firstChild.classList.value;
       
//       check if <li> elements dont have a class open , show and match;
       if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')){   
       cardindex.push(card);
       liindex.push(iclass);
//       console.log(cardindex);
//        console.log(liindex);
          
       card.classList.add('open','show');
       if(cardindex.length==2){ 
//           add 1 to movesnum to store number of moves
            movesnum+=1;
           
           //////////// if cards are match ////////////////////
           if(liindex[0]==liindex[1]){
//               adding class 'match' 'open' and 'show' to matched cards
               cardindex[0].classList.add('match');
               cardindex[0].classList.add('open');
               cardindex[0].classList.add('show');
               cardindex[1].classList.add('match');
               cardindex[1].classList.add('open');
               cardindex[1].classList.add('show');
               console.log('match complete');
               
//            if two cards are match add 1 to matchnum ////
               matchnum+=1;
               console.log(matchnum); 
           }
           ///////// hide if dont match
           setTimeout(function(){
              cardindex.forEach(function(card){
                  card.classList.remove('open','show');   
              }); 
//               to clear cardindex array ///////////
             cardindex=[];
             liindex=[];   
          },500);  
       }
}
//       matching complete alert//////// congratulations message////////////////////////
       if(matchnum==8){
           modelMes.click();
           setTimeout(function(){
                
//               if game finish in 16 moves
               if(movesnum == 16){
                winMes.innerHTML = `Congratulations You Win With ${movesnum} MOVES With 3 stars in ${minutesLabel.innerHTML}  minuits and  ${secondsLabel.innerHTML} Seconds`;
                   }
               //  if game finish in  more than 16 moves and less than 26 moves
               if(movesnum >= 17 && movesnum < 28){
               winMes.innerHTML = `Congratulations You Win With ${movesnum} MOVES With 2 stars in ${minutesLabel.innerHTML}  minuits and  ${secondsLabel.innerHTML} Seconds`;
                   }
               //  if game finish in  more than 26 moves
               if(movesnum > 28){
               winMes.innerHTML = `Congratulations You Win With ${movesnum} MOVES With 1 star in ${minutesLabel.innerHTML} minuits and ${secondsLabel.innerHTML} Seconds`;
                   }
//              alert(finish_message);
              clearInterval(mytime);
           },200)    
       } 
//   moves counter///////////////    
var movescounter=document.querySelector('.moves');
movescounter.innerHTML=movesnum;
       ///////////////////////////////
//       Removing stars Mecanism
var stars=document.querySelector('#stars');
if(movesnum === 17){
    stars.firstElementChild.remove();
    movesnum+=1;
}
    else if (movesnum === 28){  
    stars.firstElementChild.remove();
    movesnum+=1;     
    }   
//    else if (movesnum === 38){
//        stars.firstElementChild.remove();  
//    } 
       //////////////////////////////////////////////     
   });    
});          
//            THE TIMER 

                var minutesLabel = document.getElementById("minutes");
                var secondsLabel = document.getElementById("seconds");
                var totalSeconds = 0;
               var mytime =  setInterval(setTime, 1000);
                function setTime() {
                  ++totalSeconds;
                  secondsLabel.innerHTML = pad(totalSeconds % 60);
                  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
                }
                function pad(val) {
                  var valString = val + "";
                  if (valString.length < 2) {
                    return "0" + valString;
                  } else {
                    return valString;
                  }
                }  

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

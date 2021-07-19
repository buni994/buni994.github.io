
 var tiket = [];
 var TiketiKola = [];
 var TiketiKola1 = [];
 
 var brojacTiketaUkolu=0;

 

 function SlucajniTiket() {
     var SviBrojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20];
     shuffle(SviBrojevi);
     var j;
     for (j = 0; j < 6; j++) {
         var duzina =SviBrojevi.length;
         shuffle(SviBrojevi);
         tiket[j] = SviBrojevi[duzina-1];
         SviBrojevi.splice(duzina-1, 1);
     }
     TiketiKola[brojacTiketaUkolu]=`            ${tiket}`;
     TiketiKola1[brojacTiketaUkolu]= tiket;
     
 }

 function shuffle(array) {
     var currentIndex = array.length,
         temporaryValue, randomIndex;

     while (0 !== currentIndex) {

         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }

     return array;
 }
 function odstampajbrojeve()
 {
  


 }
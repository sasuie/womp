/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)
*/

/*
    Oppgave: Eksempel
    Lag en variabel som skal kunne endres. Variabelen skal representer din alder
*/

let myAge = 42;

/*
    Oppgave: A
    Lag en variabel som representerer ditt fornavn.
*/
let myName = "Tine";

/*
    Oppgave: B
    Lag en variabel for å lagre poeng score i et spill
*/
let gameScore = 1000;

/*
    Oppgave: C
    Øk verdien av variabelen din fra oppgave B med 5 (dvs dersom den var 0 så skal den bli 5)
    NB! Du skal øke verdien, ikke bare sette den til 5 (husk +)
*/
let gameScoreIncrease = gameScore+5;

/*
    Oppgave: D
    Ta variabelen din fra oppgave B og gjør den 10 ganger større. 
*/
let gameScoreMultiply = gameScore*10;

/*
    Oppgave: E
    Lag en variabel for å lagre et telefon nummer (bruk et fiktift nummer)
*/
let phoneNumber = 91919191;

/*
    Oppgave: F
    Lag en variabel som representerer hvorvidt du er en student eller ikke.
*/
let currentlyStudent = true;

/*
    Oppgave: G
    Skriv koden som skal til for at det skal stå noe alla "Hei spiller xxxx din score er xx"
    Her skal xxxx være hentet fra variabelen i oppgave A og xx fra variabelen i oppgave B
*/
let text = "Hello player " + myName + ", your score is " + gameScore;
/*
    Oppgave: H
    Lag en variabel som skal representere høyest oppnåd score i et spill.
    Set verdien av denne nye variabelen til verdien av variabelen fra oppgave B
*/
let gameHighScore = gameScore;
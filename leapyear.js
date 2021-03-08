
const prompt = require('prompt-sync')();


const year = prompt('Is your year a leap year? Try: ');

function leapyear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log('It´s a leap year' );
    }
    else{
        console.log('It´s not a leap year');
    }
}

leapyear(year);

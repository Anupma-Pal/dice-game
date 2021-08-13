const FirstRandomNumber= Math.floor(Math.random() * 6) + 1
const firstDiceImage ='dice images/dice' + FirstRandomNumber + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage );

const SecondRandomNumber= Math.floor(Math.random() * 6) + 1
const secondDiceImage ='dice images/dice' + SecondRandomNumber + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage );

if(FirstRandomNumber > SecondRandomNumber) {
    document.querySelector
    ('h1').innerHTML = 'The winner is USER 1';
} else if(SecondRandomNumber > FirstRandomNumber) {
    document.querySelector
    ('h1').innerHTML = 'The winner is USER 2';
} else {
    document.querySelector
    ('h1').innerHTML = 'The game is draw';
}

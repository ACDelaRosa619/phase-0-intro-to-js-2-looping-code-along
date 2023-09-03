// Code your solutions in this file
const cards = [ "Guadalupe", "Ollie", "Aki", ];

function writeCards(cards) {
    const messageArray = []
  let i = 0; 
  while (i < cards.length) {
    messageArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);    
    i++;
}
    
  return messageArray;
}

writeCards(cards)

function countDown() {
    let countdown = 10;
    while (countdown > -1) {
        console.log(countdown);
        countdown = countdown - 1}
    return countdown}

var btn=document.getElementById('btn');
var output=document.getElementById('output');
var quote = 
[
'“Success is not final, failure is not fatal: it is the courage to continue that counts.” ― Winston S. Churchill',
'“Do what you can, with what you have, where you are.” ― Theodore Roosevelt',
'“The only thing fair about life is how unfair it is to everyone” ― Megumi Fushiguro',
'Resentment is like drinking poison and waiting for your enemies to die."--Nelson Mandela',
];
  btn.addEventListener('click',function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
     })

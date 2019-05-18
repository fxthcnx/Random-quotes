const quotes = [
    {
        quote:"Indeed,Prayer prohibits Immorality and Wrongdoing.",
        author:"Quran 29:45"
    },
    {
        quote:"Hold firmly to the rope of Allah.",
        author:"Quran 3:103"
    },
    {
        quote:"Do not despair of the mercy of Allah.",
        author:"Quran 39:53"
    },
    {
        quote:"So verily with the hardship, there is a relief.",
        author:"Quran 94:5"
    },
    {
        quote:"So be patient. Indeed, the promise of ALLAH is truth",
        author:"Quran 30:60"
    }

];

function getRandomQuote(){
    const randomNumber=getRandomNumber(); //getting an index number
    const quoteObject=quotes[randomNumber];
    setElement(quoteObject);
}

function getRandomNumber(){
    return Math.floor(Math.random() * quotes.length);
}

function setElement(quoteObject){
    document.getElementById("quotes").innerHTML = quoteObject.quote;
    document.getElementById("author").innerHTML = quoteObject.author;
}


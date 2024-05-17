const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt disney"
    },
    {
        quote: "Nothing is impossible, the word itself says ‘I’m possible.",
        author: "Audrey hepburn"
    },
    {
        quote: "Do your thing and don't care if they like it.",
        author: "Tina fey"
    },
    {   quote: "I’d rather regret the things I’ve done than the things I haven’t done.",
        author: "Lucille ball"
    },
    {
        quote: "A dead end is just a good place to turn around.",
        author: "Naomi judd"
    },
    {
        quote: "Just say yes and you’ll figure it out afterwards.",
        author: "Tina fey"
    }
    ,
    {
        quote: "Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life.",
        author: "Amy poehler"
    },
    {
        quote: "You can, you should, and if you’re brave enough to start, you will.",
        author: "Stephan king"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S.Lewis"
    },
    {
        quote: "Some people look for a beautiful place. Others make a place beautiful.",
        author: "Hazrat inayat khan"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

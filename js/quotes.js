const quotes = [
    {
        quote: "내 인생은 그렇게 하찮은 삶이 아니야! 가족이 주는 행복이 얼마나 큰지 너한테 알려주고 싶을 정도다!",
        author: "신형만(짱구는 못말려)"
    },{
        quote: "ㅈㄱㅊㅇ",
        author: "정글"
    },{
        quote: "어이가 없네",
        author: "재벌 3세 조태오(배테랑)"
    },{
        quote: "묻고 더블로 가!",
        author: "곽철용(타짜)"
    },{
        quote: "진실의 방으로",
        author: "마석도"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = "-" + todaysQuote.author + "-";
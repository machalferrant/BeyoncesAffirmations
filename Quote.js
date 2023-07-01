var beyonceQuotes = [
    {
        quote: "She's a God, she's a hero, she survived all she been through, confident, damn, she lethal.",
        author: "COZY"
    },

    {
        quote: "Comfortable in my skin, my feet up above your sins, I love myself, Goddamn! Cozy.",
        author: "COZY"
    },

    {
        quote: "Drop the bass mane, the bass get lower radio say 'speed it up', I just go slower high like treble, pumping on the mids ya man ain't never seen a booty like this.",
        author: "Partition"
    },

    {
        quote: "It's so good to the point that I'd do anything to keep you home baby, what you want me to buy my accountant's waiting on the phone.",
        author: "Suga Mama"
    },

    {
        quote: "Me, myself, and I, that's all I got in the end. That's what I found out. And it ain't no need to cry, I took a vow that from now on I'm gon' my own best friend.",
        author: "Me, Myself, and I"
    },

    {
        quote: "You don't deserve my tears. I guess that's why they ain't there.",
        author: "Best Thing I Never Had"
    },

    {
        quote: "Some call it arrogant. I call it confident.",
        author: "Ego"
    },

    {
        quote: "From now on, I'm gonna be my own best friend.",
        author: "Me, Myself, and I"
    },

    {
        quote: "We're smart enough to make these millions. Smart enough to bear these children. Then get back to business.",
        author: "Run the World"
    },

    {
        quote: "I break chains all by myself, won't let my freedom rot in hell. I'mma keep runnin' because a winner don't quit on themselves.",
        author: "Freedom"
    },

    {
        quote: "I feel like falling in love, I'm in the mood to fuck something up. I need some drink in my cup, hey! I'm in the mood to fuck something up.",
        author: "CUFF IT"
    },

    {
        quote: "As I bounce to the next dick, boy! And keep your money, I got my own, Get a bigger smile on my face bein' alone. Bad mothafucka, God complex.",
        author: "Don't Hurt Yourself"
    },

    {
        quote: "I am the dragon breathin' fire, Beautiful mane, I'm the lion, Beautiful man, I know you're lyin', I am not broken, I'm not cryin', I'm not cryin'.",
        author: "Don't Hurt Yourself"
    },

    {
        quote: "I'm the only one that ever aloud, to hang out in my room, with the door closed, we be alone.",
        author: "Radio"
    },
];

var colors = [
    "#8ecae6",
    "#219ebc",
    "#023047",
    "#ffb703",
    "#fb8500",
    "#e5989b",
    "#b5838d",
]

// Определяем рандомную цитату
function randomBeyonceQuote() {
    return beyonceQuotes[
        Math.floor(Math.random()*beyonceQuotes.length)
    ];
}

function getQuote() {
// Создаём понятие рандомной цитаты
    let randomQuote = randomBeyonceQuote();

// Дополняем HTML (div с классом text) рандомной цитатой с помощью jQuery.
// Это закидывает цитату и автора в нужное пространство в HTML

    $('.quote-text').animate({ opacity: 0 }, 250, function() {
        $(this).animate({ opacity: 1 }), 250;
        $('.text').text(randomQuote.quote);
    })
        
    $('#author').animate({ opacity: 0 }, 250, function() {
        $(this).animate({ opacity: 1 }, 250);
        $(this).text('"' + randomQuote.author + '"');
    })

// Настраиваем кнопки шаринга
    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=beyoncequeen&text=' +
        encodeURIComponent('"' + randomQuote.quote + '" ' + '— "' + randomQuote.author + '"')
    );

    $('#facebook-quote').attr(
        'href',
        'https://www.facebook.com/sharer/sharer.php?u=http://127.0.0.1:5500/Quote.html'
    );

// Определяем рандомный цвет
    var color = Math.floor(Math.random() * colors.length);

// Меняем цвет фона и кнопок
    

    $('body').animate({
            backgroundColor: colors[color],
            color: colors[color],
        },
        500
    );

    $('.button').animate({ backgroundColor: colors[color]}, 500)
}

$(document).ready(function() {
    $('#new-quote').text(getQuote)
    $('#new-quote').on('click', getQuote)
})

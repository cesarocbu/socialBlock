const defineCSS = () => {
    return `<style>
    body {
        background-color: rgba(20,20,20,1);
        font-family: 'Roboto Mono', monospace;
        text-align: center;
    }

    img {
        width: 40%;
        heigth: auto;
    }

    h1 {
        color: #f5f5f5;
        font-weight: bolder;
        font-size: 7em;
        margin: 0;
        outline: none;
        padding: 0;
        position: relative;
    }

    .glitch_word_box {
        height: 100px;
        line-height: 100px;
        position: relative;

        -webkit-animation: disappear 1s linear;
        -webkit-animation-iteration-count: infinite, infinite;
        -moz-animation: disappear 1s linear;
        -moz-animation-iteration-count: infinite, infinite;
        -o-animation: disappear 1s linear;
        -o-animation-iteration-count: infinite, infinite;
    }

    .glitch_word_box .glitch_word0 {
        position: absolute;
        width: 100%;
    }

    .glitch_word_box .glitch_word1 {
        color: red;
        font-weight: bolder;
        left: -2px;
        position: absolute;
        top: -2px;
        width: 100%;
        z-index: -1;
        -webkit-animation: animate_glitch_1 .2s linear;
        -webkit-animation-iteration-count: infinite;
        -moz-animation: animate_glitch_1 .2s linear;
        -moz-animation-iteration-count: infinite;
        -o-animation: animate_glitch_1 .2s linear;
        -o-animation-iteration-count: infinite;
}

.glitch_word_box .glitch_word2 {
        color: blue;
        font-weight: bolder;
        left: 2px;
        position: absolute;
        top: 2px;
        width: 100%;
        z-index: -1;
        -webkit-animation: animate_glitch_2 .3s linear;
        -webkit-animation-iteration-count: infinite;
  -moz-animation: animate_glitch_2 .3s linear;
        -moz-animation-iteration-count: infinite;
  -o-animation: animate_glitch_2 .3s linear;
        -o-animation-iteration-count: infinite;
}

@-webkit-keyframes disappear {
        0% {	opacity: 0;	}
        2% { opacity: 1; }
}

@-webkit-keyframes animate_glitch_1 {
          0% { top: 1px; left: 1px; }
         25% { top: 3px; left: 2px;	 }
         50% { top: -1px; left: -4px;	}
         75% { top: 2px; left: 5px;	}
        100% {	top: 1px; left: -2px;	}
}

@-webkit-keyframes animate_glitch_2 {
          0% { top: -1px; left: -1px;	}
         25% { top: -3px; left: -2px;	}
         50% { top: 1px; left: 4px; }
        100% { top: -1px; left: -1px; }
}

@-moz-keyframes disappear {
        0% {	opacity: 0;	}
        2% { opacity: 1; }
}

@-moz-keyframes animate_glitch_1 {
          0% { top: 1px; left: 1px; }
         25% { top: 3px; left: 2px;	 }
         50% { top: -1px; left: -4px;	}
         75% { top: 2px; left: 5px;	}
        100% {	top: 1px; left: -2px;	}
}

@-moz-keyframes animate_glitch_2 {
          0% { top: -1px; left: -1px;	}
         25% { top: -3px; left: -2px;	}
         50% { top: 1px; left: 4px; }
        100% { top: -1px; left: -1px; }
}

@-o-keyframes disappear {
        0% {	opacity: 0;	}
        2% { opacity: 1; }
}

@-o-keyframes animate_glitch_1 {
          0% { top: 1px; left: 1px; }
         25% { top: 3px; left: 2px;	 }
         50% { top: -1px; left: -4px;	}
         75% { top: 2px; left: 5px;	}
        100% {	top: 1px; left: -2px;	}
}

@-o-keyframes animate_glitch_2 {
          0% { top: -1px; left: -1px;	}
         25% { top: -3px; left: -2px;	}
         50% { top: 1px; left: 4px; }
        100% { top: -1px; left: -1px; }
}

    </style>`
}

const defineHTML = () => {
    return `<div class="glitch_word_box">
    <div class="line"></div>
    <h1 id="word" class="glitch_word0">404 - page not found</h1>
    <h1 id="word1" class="glitch_word1">404 - page not found</h1>
    <h1 id="word2" class="glitch_word2">404 - page not found</h1>
</div>
    <div class="content">
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmQ3NTM4MjkyYTNhMjhlNTM4OTA1NjYxZjBmOTcwZjhhY2Q4N2U2NSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/W3Ch3vjHi5FGefDT0G/giphy.gif"></img>
    </div>
    `
}

const prohibited = ["twitter.com", "www.instagram.com", "www.reddit.com", "www.youtube.com", "www.facebook.com", "web.facebook.com"];
const set = new Set(prohibited);

let currentDate = new Date();
let currentHour = currentDate.getHours();

if (currentHour >= 8 && currentHour < 12 || currentHour >= 20 && currentHour < 24) {
    if(set.has(window.location.hostname)){
        document.head.innerHTML = defineCSS();
        document.body.innerHTML = defineHTML();
    }
}

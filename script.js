const changeCSS = () => {
    return `<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        heigth: auto;
    }
    </style>`
}

const changeHTML = () => {
    return `<div class="content">
    <img src="https://media.tenor.com/G1XyNa8e8Z4AAAAC/get-back-to-work.gif">
    </div>
    `
}

const dontVisitThis = ["www.facebook.com", "www.instagram.com", "www.twitter.com", "www.reddit.com"];
const set = new Set(dontVisitThis);

if(set.has(window.location.hostname)){
    document.head.innerHTML = changeCSS();
    document.body.innerHTML = changeHTML();
}
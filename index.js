const text = "Hello! My name is Hai, Welcome to my GitHub!"

let index = 0

let autoText = () => {
    document.querySelector(".the-text").innerHTML = text.slice(0, index)
    index++;

    if (index > text.length) index = 0;
}


setInterval(autoText, 150)
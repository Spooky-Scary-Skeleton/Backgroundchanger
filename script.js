const body = document.querySelector('body'),
    btn = document.querySelector('button'),
    text = document.querySelector('.color-text')

function createHexString() {
    let backGround = '';
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        backGround += num[index]
    }
    return backGround
}

function setTXTBG() {
    let loadedHex = `#${createHexString()}`;
    body.style.backgroundColor = loadedHex;
    text.innerText = `HEX COLOR:${loadedHex}`;
}


function inIt() {
    btn.addEventListener('click', setTXTBG)
}


inIt()
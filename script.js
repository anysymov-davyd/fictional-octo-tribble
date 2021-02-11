window.onload = () => {
    document.getElementById('href').onclick = () => {
        document.getElementsByClassName('main')[0].setAttribute('style', 'transform: translate(-50%, 350%);')
        document.getElementsByClassName('second')[0].setAttribute('style', 'opacity:1;')
    }
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    num = [
        '+38 (050) 494 8841',
        '+38 (095) 586 5248'
    ]

    document.getElementById('num').innerHTML = num[randomInteger(0, 1)]
}

const emojis = ['😊', '😊', '❤️', '❤️', '😂', '😂', '😍', '😍', '😁', '😁', '👍', '👍', '😎', '😎', '😭', '😭']


var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

let run = false;
let time = 0
let interval;


for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]

    box.onclick = function () {
        this.classList.add('boxOpen')
        run = true


        setTimeout(() => {
            const boxOpens = document.querySelectorAll('.boxOpen')
            const boxOpen1 = document.querySelectorAll('.boxOpen')[0]
            const boxOpen2 = document.querySelectorAll('.boxOpen')[1]
            const total_boxMatch = document.querySelectorAll('.boxMatch')

            if (boxOpens.length === 2) {
                if (boxOpen1.innerHTML === boxOpen2.innerHTML) {
                    boxOpen1.classList.add('boxMatch')
                    boxOpen2.classList.add('boxMatch')

                    boxOpen1.classList.remove('boxOpen')
                    boxOpen2.classList.remove('boxOpen')

                    total_boxMatch.length === emojis.length && alert(`wined on ${Math.floor(time % 60)} min ${time / 60} sec`)
                } else {
                    boxOpen1.classList.remove('boxOpen')
                    boxOpen2.classList.remove('boxOpen')
                }
            }
        }, 500);
    }

    document.querySelector('.game').appendChild(box)
}
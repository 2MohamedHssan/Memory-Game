document.getElementById("cl").onclick = () => {
    let pop = prompt("type Your Name")
    if (pop === null || pop === "") {
        document.getElementById("type").innerHTML = "Gest"
    } else {
        document.getElementById("type").innerHTML = pop
    }
    document.querySelector(".buton").remove()
    document.querySelector("#load").play()
    x()
    let timer = document.querySelector(".time")
    setTimeout(() => {
        timer.innerHTML = "60"
        let t = setInterval(tim, 1000)
        function tim() {
            timer.innerHTML -= 1
            let m = []
            for (i = 0; i < block.length; i++) {
                if (block[i].classList[1] === "match")
                    m.push(block[i].classList[1])
            }
            if (timer.innerHTML === "0" || document.querySelector(".error span").innerHTML >= 5) {
                clearInterval(t)
                document.querySelector(".over").style.display = 'block'
                document.querySelector("#gameover").play()
                document.querySelector("p").onclick = function () {
                    window.location.reload();
                }
            }
        }
    }, 1000)
}
let mycontainer = document.querySelectorAll(".game-block")
let block = Array.from(mycontainer)
let ordering = [...Array(block.length).keys()]
shfil(ordering)
block.forEach((e, i) => {
    e.style.order = ordering[i]
    e.addEventListener('click', function () {
        e.classList.add('isflep')
        let allflip = block.filter((l) => l.classList.contains('isflep'))
        if (allflip.length === 2) {
            stopClick()
            matcing(allflip[0], allflip[1])
        }
        let m = []
        for (i = 0; i < block.length; i++) {
            if (block[i].classList[1] === "match")
                m.push(block[i].classList[1])
        }
        if (m.length === ordering.length) {
            document.querySelector(".ovrConcrat").style.display = 'flex'
            document.querySelector("#load").play()
            document.querySelector(".ovrConcrat").onclick = function () {
                window.location.reload()
            }
        }
    })
})

// TO DO // LocalStorge Storge The History For User [Name, Count of Wrong Tries]

function x() {
    block.forEach((e) => {
        e.classList.add('isflep')
        setTimeout(() => {
            e.classList.remove('isflep')

        }, 1000);
    })
}

let cno = document.querySelector(".container")
function stopClick() {
    cno.classList.add("noclick")

    setTimeout(() => {
        cno.classList.remove("noclick")
    }, 1000)

}
function matcing(one, tow) {
    let eror = document.querySelector(".error span")
    if (one.dataset.id === tow.dataset.id) {
        one.classList.remove("isflep")
        tow.classList.remove("isflep")
        document.querySelector("#scsuss").play()
        one.classList.add("match")
        tow.classList.add("match")
    } else {
        eror.innerHTML = parseInt(eror.innerHTML) + 1
        setTimeout(() => {
            one.classList.remove("isflep")
            tow.classList.remove("isflep")
        }, 1000)
        document.querySelector("#faild").play()
    }
}

function shfil(arr) {
    let curent = arr.length,
        temp,
        rondom;
    while (curent > 0) {
        rondom = Math.floor(Math.random() * curent)
        curent--
        temp = arr[curent]
        arr[curent] = arr[rondom]
        arr[rondom] = temp
    }
    return arr
}


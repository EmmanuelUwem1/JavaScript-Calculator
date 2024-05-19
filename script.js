// Code to open/close calculator

const calculator = document.getElementById('calculator');
const calculatorIcon = document.getElementById('calculatorIcon');

calculatorIcon.addEventListener('click', () => {
    calculator.classList.toggle('open')
})


//  Testing code

calculator.addEventListener('drag', () => {
    calculator.classList.remove('open')
})
calculator.addEventListener('drop', () => {
    calculator.classList.remove('open')
})


// Code for Functionality
const Display = document.getElementById('input');
//  const button = document.getElementsByTagName('button')

function appendtoDisplay(input) {
    Display.value += input;
}

function evalDisplay() {

    try {

        let answer = eval(Display.value);
        Display.value = (answer);
    }
    catch (error) {
        Display.value = ("Error");

    }


}
function CLSeffect() {
    document.querySelector('.input').classList.add('CLS');
}

function clearScreen() {
    Display.value = (null);

}


if (Display.value > 1) {
    document.getElementById('AC').addEventListener('click', CLSeffect);

}
else {
    document.querySelector('.input').classList.remove('CLS');

}
function Delete() {
    Display.value = Display.value.slice(0, -1)
}



// Code for Timer


const Timer = document.querySelector('.timer');

const timeVals = document.querySelectorAll('.timer span')
const duration = 1000
// console.log(timeVals);

const HourTime = document.querySelector('.hour');

const HourVal = HourTime.innerHTML;
HourTime.innerHTML = Number(HourTime.innerHTML);
HourTime.innerHTML = 0;
if (HourTime.innerHTML.length < 2) {
    HourTime.innerHTML = "0" + HourTime.innerHTML
}
const MinuteTime = document.querySelector('.minute');

const MinuteVal = MinuteTime.innerHTML;
MinuteTime.innerHTML = Number(HourTime.innerHTML);
MinuteTime.innerHTML = 0;
if (MinuteTime.innerHTML.length < 2) {
    MinuteTime.innerHTML = "0" + MinuteTime.innerHTML
}
const SecondTime = document.querySelector('.second');

const SecondVal = SecondTime.innerHTML;
SecondTime.innerHTML = Number(SecondTime.innerHTML);
SecondTime.innerHTML = 0;



function Secondtimer() {

    var transition = setInterval(
        function countSecond() {

            if (SecondTime.innerHTML <= 60) {
                SecondTime.innerHTML++
            }
            if (SecondTime.innerHTML == 60) {
                SecondTime.innerHTML = 0;
            }
            if (SecondTime.innerHTML.length < 2) {
                SecondTime.innerHTML = "0" + SecondTime.innerHTML
            }
            
        }
        , 1000)

}
Secondtimer()

function MinuteTimer() {
    function countMinute() {
        if (MinuteTime.innerHTML <= 60) {
            MinuteTime.innerHTML++;
        }
        else {
            MinuteTime.innerHTML = 0;
        }

        if (MinuteTime.innerHTML.length < 2) {
            MinuteTime.innerHTML = ("0" + MinuteTime.innerHTML);
        }
    }
    var MinuteTransition = setInterval(countMinute, 1000 * 60)
}

MinuteTimer()

function HourTimer() {
    function CountHour() {

        HourTime.innerHTMl++;

        if (HourTime.innerHTML.length < 2) {
            HourTime.innerHTML = ("0" + HourTime.innerHTML)
        }

    }

    const HourTransition = setInterval(CountHour, 1000 * 60 * 60)
}







// console.log(timeVals[1]);



// Testing Animation code for Bubbles



// const AllBubbles = document.querySelectorAll('.bubbles span');

// function explode() {
//     AllBubbles.forEach( function click(Bubbles) {
//         Bubbles.addEventListener('click',() => {
//             Bubbles.classList.add('Explode');

//         }) 
//     })
// }

// AllBubbles.forEach(Bubbles => {
//     explode()
// });


const bubble= document.querySelector('.bubbles :nth-child(8)');

bubble.addEventListener('click', () => {
    bubble.classList.add('blow');
})
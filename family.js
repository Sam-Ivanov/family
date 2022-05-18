let switch1 = document.getElementById('switch1');
let switch2 = document.getElementById('switch2');
let switch3 = document.getElementById('switch3');
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');

let child5 = document.getElementById('text-child5');

switch1.addEventListener('click', changeClass1);
switch2.addEventListener('click', changeClass2);
switch3.addEventListener('click', changeClass3);

function changeClass1() {
    let getClass = switch1.getAttribute('class');
    if (getClass === 'check1-switch-off') {
        switch1.setAttribute('class', 'check1-switch-on');
        check1.setAttribute('class', 'check1-on');
        child5.textContent = 'Возр.';
    } else {
        switch1.setAttribute('class', 'check1-switch-off');
        check1.setAttribute('class', 'check1-off');
        child5.textContent = 'Срок';


    }
}

function changeClass2() {
    let getClass = switch2.getAttribute('class');
    if (getClass === 'check2-switch-off') {
        switch2.setAttribute('class', 'check2-switch-on');
        check2.setAttribute('class', 'check2-on');
    } else {
        switch2.setAttribute('class', 'check2-switch-off');
        check2.setAttribute('class', 'check2-off');

    }
}

function changeClass3() {
    let getClass = switch3.getAttribute('class');
    if (getClass === 'check3-switch-off') {
        switch3.setAttribute('class', 'check3-switch-on');
        check3.setAttribute('class', 'check3-on');
    } else {
        switch3.setAttribute('class', 'check3-switch-off');
        check3.setAttribute('class', 'check3-off');

    }
}


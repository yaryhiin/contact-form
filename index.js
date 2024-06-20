const input_text = document.querySelectorAll('input[type=text]');
const input_checkbox = document.querySelector('input[type=checkbox]');
const input_radio = document.querySelectorAll('input[type=radio]');
const input_email = document.querySelector('input[type=email]');
const submit_msg = document.querySelector('.submit-msg')
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

for (let i of input_radio) {
    i.addEventListener('change', () => {
        for (let j of input_radio) {
            if (j.checked) {
                j.parentNode.classList.add('checked');
            } else {
                j.parentNode.classList.remove('checked');
            }
        }
    })
}

function check() {
    event.preventDefault();
    let good = true;
    for (let i of input_text) {
        if (i.value === "") {
            good = false;
            i.parentNode.classList.add("active");
        } else {
            i.parentNode.classList.remove("active");
        }
    }
    if (!input_checkbox.checked) {
        good = false;
        input_checkbox.parentNode.classList.add("active");
    } else {
        input_checkbox.parentNode.classList.remove("active");
    }
    for (let i of input_radio) {
        if (!i.checked) {
            good = false;
            i.parentNode.parentNode.parentNode.classList.add("active");
        } else {
            good = true;
            i.parentNode.parentNode.parentNode.classList.remove("active");
            break;
        }
    }
    if (!emailPattern.test(input_email.value)) {
        good = false;
        input_email.parentNode.classList.add("active");
    } else {
        input_email.parentNode.classList.remove("active");
    }
    console.log(good)
    if (good) {
        form.reset();
        submit_msg.classList.add('sent');
        setTimeout(() => {submit_msg.classList.remove('sent');}, 2000)
    }
}
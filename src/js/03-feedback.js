import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    message: document.querySelector("textarea"),
} 

const LOCALSTORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle (onTextInput, 1000));
refs.form.addEventListener('submit', onSubmit);

const userData = {};

function onTextInput(evt) {
    userData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
};

function onSubmit(evt) {
    console.log(userData);

    evt.preventDefault();
    evt.target.reset();
    localStorage.clear();
}

function onPageReload() {
    const savedInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if(savedInfo) {
        refs.email.value = savedInfo.email;
        refs.message.value = savedInfo.message;
    }
}

onPageReload();


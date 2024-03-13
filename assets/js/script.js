// console.log("This is to check the linkage between HTML and JavaScript Files.");
const spinbtn = document.querySelector('.spin-btn');
const formSubmit = document.querySelector('#coupon-form');
const wheel = document.querySelector('.wheel');


let value = Math.ceil(Math.random() * 3600);
// console.log(formSubmit);
const rotate = () => {
    let minRotations = 1;
    wheel.style.transform = "rotate(" + value + "deg)";
    value += minRotations + Math.ceil(Math.random() * 3600);
}
spinbtn.addEventListener('click', rotate);

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    let minRotations = 1;
    wheel.style.transform = "rotate(" + value + "deg)";
    value += minRotations + Math.ceil(Math.random() * 3600);
    setInterval(() => {
        formSubmit.children[0].value = '';
        formSubmit.children[1].value = '';
        window.location.href = "/assets/markUp/data_form.html"
    }, 4000);
})
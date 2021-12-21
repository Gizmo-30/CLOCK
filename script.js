const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s');



// let time = new Date();

// console.log(time);
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMilliseconds());
// console.log(time.getMonth());



function clock() {

    let time = new Date(),
      second = time.getSeconds() * 6,
      minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    setTimeout(() => clock(), 1000);
    // Рекурсия  это когда функция вызывает саму себя внутри себя
}

clock();


// setTimeout(() => {
//     console.log('asdasd');
// }, 5000)


// setInterval(() => {
//     console.log('asdsa');
// }, 1000)

let tabsItems = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem ')

tabsItems.forEach(element => {
  element.addEventListener('click', () => {
    removeActive(tabsItems)
    element.classList.add('active')
    tabsContentItem.forEach(element => {
      removeActive(tabsContentItem)
      element.classList.add('active')
    });
  });
});

function removeActive(array) {
  array.forEach(element => {
    element.classList.remove('active')
  });
}
const hour = document.querySelector('.h'),
  min = document.querySelector('.m'),
  sec = document.querySelector('.s'),
  hoursNumber = document.querySelector('.hours'),
  minutesNumber = document.querySelector('.minutes');
 
  
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

  hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

  setTimeout(() => clock(), 1000);
  // Рекурсия  это когда функция вызывает саму себя внутри себя
}

clock();


const tabsItem = document.querySelectorAll('.tabsItem'),
  tabsContent = document.querySelectorAll('.tabsContentItem');




tabsItem.forEach((item, i) => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); /* отменяет обычное поведение элементов в браузере */
    removeActiveClass();
    this.classList.add('active');
    tabsContent[i].classList.add('active');
  })
})

function removeActiveClass() {
  tabsItem.forEach((item, i) => {
    item.classList.remove('active');
    tabsContent[i].classList.remove('active');
  })
}

const stopwatchBtn = document.querySelector('.stopwatch__btn'),
  stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
  stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
  stopwatchHours = document.querySelector('.stopwatch__hours');

function stopWatch() {
  stopwatchSeconds.innerHTML++
  timeOut = setTimeout(() => {
    stopWatch()
  }, 1000);
  if (stopwatchSeconds.innerHTML == '60') {
    stopwatchMinutes.innerHTML++
    stopwatchSeconds.innerHTML = '0'
    if (stopwatchMinutes.innerHTML == '60') {
      stopwatchHours.innerHTML++
      stopwatchMinutes.innerHTML = '0'
      if (stopwatchHours.innerHTML == '24') {
        stopwatchSeconds.innerHTML = '0'
        stopwatchMinutes.innerHTML = '0'
        stopwatchHours.innerHTML = '0'
        clearTimeout(timeOut)
        stopwatchBtn.innerHTML = 'start'
      }
    }
  }
}

stopwatchBtn.addEventListener('click', () => {
  if (stopwatchBtn.innerHTML == 'start') {
    stopwatchBtn.innerHTML = 'stop'
    stopWatch()
  } else if (stopwatchBtn.innerHTML == 'stop') {
    clearTimeout(timeOut)
    stopwatchBtn.innerHTML = 'reset'
  } else {
    stopwatchSeconds.innerHTML = '0'
    stopwatchMinutes.innerHTML = '0'
    stopwatchHours.innerHTML = '0'
    stopwatchBtn.innerHTML = 'start'
  }
})
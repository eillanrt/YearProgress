/*
* Thanks for these stackoverflow answers

- https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript

- https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366

*/

class YearProgress {
  constructor() {
    const year = new Date().getFullYear()

    this.isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
    this.daysInYear = this.isLeapYear ? 366 : 365
    this.useDarkTheme = false
    this.init()
  }

  get dayOfYear() {
    var now = new Date()
    var start = new Date(now.getFullYear(), 0, 0)
    var diff = now - start
    var oneDay = 1000 * 60 * 60 * 24
    var day = Math.floor(diff / oneDay)
    //console.log('Day of year: ' + day);

    return day
  }

  get percent() {
    const percent = this.dayOfYear / this.daysInYear
    return Math.round(percent * 10000) / 100
  }

  changeTheme() {
    const body = document.body
    const btn = document.querySelector('.change-theme')
    const link = document.querySelector('footer a')
    this.useDarkTheme = !this.useDarkTheme

    if (this.useDarkTheme) {
      btn.innerHTML = `<i class="bi bi-brightness-high"></i>`
      body.style.backgroundColor = 'black'
      btn.style.color = 'white'
      body.style.color = 'white'
      link.style.color = 'white'
    } else {
      btn.innerHTML = `<i class="bi bi-moon-fill"></i>`
      body.style.backgroundColor = 'white'
      btn.style.color = 'black'
      body.style.color = 'black'
      link.style.color = 'black'
    }
  }

  init() {
    const percentEl = document.querySelector('.percent')
    const yearEl = document.querySelector('.year')
    const progressBar = document.querySelector('.progress-bar')

    percentEl.innerText = `${this.percent}%`
    yearEl.innerText = new Date().getFullYear()
    progressBar.style.width = `${this.percent}%`
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new YearProgress()
  document
    .querySelector('.change-theme')
    .addEventListener('click', app.changeTheme.bind(app))
})

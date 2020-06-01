const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const countDownContainer = document.querySelector('#countdown')

const yearContainer = document.querySelector('#year');
const spinner = document.querySelector('#loading')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
   


    secondsContainer.textContent = seconds
    minutesContainer.textContent = minutes
    hoursContainer.textContent = hours
    daysContainer.textContent = days

    yearContainer.textContent = nextYear

}

const handleCountdownDisplay = () => {
    spinner.remove()
    countDownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 500)

setInterval(updateCountdown, 500 )


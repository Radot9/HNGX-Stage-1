const currentDate = new Date()
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = currentDate.getDay()
const currentDayOfWeek = daysOfWeek[currentDayIndex]
document.getElementById("day").innerHTML = currentDayOfWeek

const currentTime = currentDate.getTime()
document.getElementById("time").innerHTML = currentTime
export const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

export const getRandomDay = () => {
    return daysOfTheWeek[Math.floor(Math.random() * daysOfTheWeek.length)]
}
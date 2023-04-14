import { getRandomDay } from "../../database/daysOfTheWeekData";

const getQuestion = () => {
    const day = getRandomDay()
    const adjectives = ['busy', 'slow', 'fast', 'hectic', 'quiet', 'peaceful', 'fun', 'boring', 'good', 'bad']
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

    const prompt = `${day} is a day. (${adjective})`
    const answer = `${day} isn't a ${adjective} day.`

    return { prompt, answer }
}

export default getQuestion;
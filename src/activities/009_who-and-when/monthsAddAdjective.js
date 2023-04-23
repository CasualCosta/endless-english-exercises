import { getRandomMonth } from "../../database/monthsData";

const adjectives = ['rainy', 'sunny', 'hot', 'cold', 'snowy', 'stormy', 'foggy', 'dark', 'bright', 'long', 'short']
const getQuestion = () => {
    const month = getRandomMonth()
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    
    const prompt = `${month} is a month. (${adjective})`
    const answer = `${month} is a ${adjective} month.`
    return {prompt, answer}
}

export default getQuestion;
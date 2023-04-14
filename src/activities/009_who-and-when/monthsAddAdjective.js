import { getRandomMonth } from "../../database/monthsData";
import { capitalizeFirstLetter } from "../../utils";

const getQuestion = () => {
    const month = getRandomMonth()
    const adjectives = ['rainy', 'sunny', 'hot', 'cold', 'snowy', 'stormy', 'foggy', 'dark', 'bright', 'long', 'short']
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    
    const prompt = `${month} is a month. (${adjective})`
    const answer = `${month} is a ${adjective} month.`
    return {prompt, answer}
}

export default getQuestion;
import { getRandomElement } from "../../utils"

const words = [
    'fry',
    'fly',
    'cry',
    'embassy',
    'quality',
    'emergency',
    'hippy',
    'try',
    'study',
    'company',
    'ply'
]
const getQuestion = () => {
    const word = getRandomElement(words)
    const prompt = word
    const answer = word.slice(0, -1) + 'ies'

    return { prompt, answer }
}

export default getQuestion
import { getRandomElement } from "../../utils"

const words = [
    'chair',
    'dog',
    'elephant',
    'wall',
    'alien',
    'car',
    'cat',
    'door',
    'window',
    'train',
    'ball',
    'bike',
    'room'
]
const getQuestion = () => {
    const word = getRandomElement(words)
    const prompt = word
    const answer = word + 's'

    return { prompt, answer }
}

export default getQuestion
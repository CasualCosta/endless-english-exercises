import { getRandomElement } from "../../utils"

const words = [
    'glass',
    'cross',
    'tomato',
    'couch',
    'tornado',
    'witch',
    'potato',
    'cargo',
    'mango',
    'box',
    'fox',
    'fax',
    'tax'
]
const getQuestion = () => {
    const word = getRandomElement(words)
    const prompt = word
    const answer = word + 'es'

    return { prompt, answer }
}

export default getQuestion
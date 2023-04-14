import { getRandomElement } from "../../utils"

const words = [
    {
        singular: 'child',
        plural: 'children'
    },
    {
        singular: 'mouse',
        plural: 'mice'
    },
    {
        singular: 'man',
        plural: 'men'
    },
    {
        singular: 'leaf',
        plural: 'leaves'
    },
    {
        singular: 'calf',
        plural: 'calves'
    },
    {
        singular: 'person',
        plural: 'people'
    },
    {
        singular: 'wolf',
        plural: 'wolves'
    },
    {
        singular: 'wife',
        plural: 'wives'
    },
    {
        singular: 'goose',
        plural: 'geese'
    },
    {
        singular: 'woman',
        plural: 'women'
    },
    {
        singular: 'knife',
        plural: 'knives'
    },
    {
        singular: 'thief',
        plural: 'thieves'
    }
]
const getQuestion = () => {
    const word = getRandomElement(words)
    const prompt = word.singular
    const answer = word.plural

    return { prompt, answer }
}

export default getQuestion
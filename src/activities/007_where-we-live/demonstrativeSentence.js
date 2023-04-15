import { facilities } from "../../database/facilitiesData";
import { getRandomElement, getBool, getArticle } from "../../utils"

const getQuestion = () => {
    const isPlural = getBool()
    const isNear = getBool()
    const verb = isPlural ? 'are' : 'is'
    const facility = getRandomElement(facilities)
    const article = isPlural ? '' : getArticle(facility) + ' '
    const prompt = `${facility}${isPlural ? 's' : ''} (${isNear ? 'near' : 'far'})`
    const answer = `${isNear ? (isPlural ? 'These' : 'This') : (isPlural ? 'Those' : 'That')} ${verb} ${article}${facility}${isPlural ? 's' : ''}.`

    return { prompt, answer }
}

export default getQuestion
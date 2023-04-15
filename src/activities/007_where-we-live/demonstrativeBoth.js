import { facilities } from "../../database/facilitiesData";
import { getRandomElement, getBool, getArticle } from "../../utils"

const getQuestion = () => {
    const isPlural = getBool()
    const isNear = getBool()
    const verb = isPlural ? 'are' : 'is'
    const facility = getRandomElement(facilities)
    const article = isPlural ? '' : getArticle(facility) + ' '
    const prompt = `${verb} ${article}${facility}${isPlural ? 's' : ''}. (${isNear ? 'Near' : 'Far'})`
    const answer = `${isPlural ? (isNear ? "These" : "Those") : (isNear ? 'This' : 'That')}`

    return { prompt, answer }
}

export default getQuestion
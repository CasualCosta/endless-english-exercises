import { facilities } from "../../database/facilitiesData";
import { getRandomElement, getBool, getArticle } from "../../utils"

const getQuestion = () => {
    const isPlural = getBool()
    const verb = isPlural ? 'are' : 'is'
    const facility = getRandomElement(facilities)
    const article = isPlural ? '' : getArticle(facility) + ' '
    const prompt = `${verb} ${article}${facility}${isPlural ? 's' : ''}.`
    const answer = `${isPlural ? "These" : "This"}`

    return { prompt, answer }
}

export default getQuestion
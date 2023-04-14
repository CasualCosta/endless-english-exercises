import { occupations } from "../../database/occupationsData"
import { getRandomElement, getBool, getArticle } from "../../utils"
import { getPerson, getPeople } from "../../database/peopleData"

const getQuestion = () => {
    const isPlural = getBool();
    const verb = isPlural ? 'are' : 'is'
    const subject = isPlural ? getPeople() : getPerson();
    const occupationFalse = getRandomElement(occupations)
    let occupationTrue = getRandomElement(occupations)
    while (occupationFalse === occupationTrue)
        occupationTrue = getRandomElement(occupations)

    const articleFalse = isPlural ? '' : getArticle(occupationFalse) + ' ';
    const articleTrue = isPlural ? '' : getArticle(occupationTrue) + ' ';
    
    const prompt = `${subject.firstName} / ${occupationFalse} / ${occupationTrue}`
    const answer = `${subject.firstName} ${verb}n't ${articleFalse}${occupationFalse}${isPlural ? 's' : ''}, ${subject.subjectivePronoun} ${verb} ${articleTrue}${occupationTrue}${isPlural ? 's' : ''}.`

    return { prompt, answer }
}

export default getQuestion
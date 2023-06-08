import { getBool, getRandomElement, getArticle } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { regularVerbs } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomElement(regularVerbs)
    const object = getRandomElement(verb.objects)

    const prompt = `${subject.firstName} ${isPlural ? verb.infinitive : verb.thirdPerson} ${object}.`
    const answer = `${subject.firstName} ${verb.past} ${object}.`

    return { prompt, answer }
}

export default getQuestion
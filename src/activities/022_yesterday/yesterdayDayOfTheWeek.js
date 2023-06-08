import { getBool, getRandomElement, getArticle } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { daysOfTheWeek } from "../../database/daysOfTheWeekData";
import { regularVerbs } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const day = getRandomElement(daysOfTheWeek)
    const verb = getRandomElement(regularVerbs)
    const object = getRandomElement(verb.objects)

    const prompt = `${day} / ${subject.firstName} / ${verb.infinitive} ${object}`
    const answer = `Last ${day}, ${subject.firstName} ${verb.past} ${object}.`

    return { prompt, answer }
}

export default getQuestion
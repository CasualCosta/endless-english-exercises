import { getRandomDay } from "../../database/daysOfTheWeekData";
import { getPerson } from "../../database/peopleData";
import { getRandomElement, getBool } from "../../utils";
import { getRandomVerb } from "../../database/verbData";
import { adverbsOfFrequency } from "../../database/adverbsOfFrequencyData";

const getQuestion = () => {
    const isMale = getBool()
    const subject = getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const adverb = getRandomElement(adverbsOfFrequency)
    const day = getRandomDay()

    const prompt = `${subject.firstName} / ${adverb} / ${verb.infinitive} ${object} / ${day}`
    const answer = `${subject.firstName} ${adverb} ${verb.thirdPerson} ${object} on ${day}s.`

    return { prompt, answer }
}

export default getQuestion
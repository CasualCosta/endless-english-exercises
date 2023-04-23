import { getRandomDay } from "../../database/daysOfTheWeekData";
import { getPeople } from "../../database/peopleData";
import { getRandomElement } from "../../utils";
import { getRandomVerb } from "../../database/verbData";
import { adverbsOfFrequency } from "../../database/adverbsOfFrequencyData";

const getQuestion = () => {
    const subject = getPeople()
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const adverb = getRandomElement(adverbsOfFrequency)
    const day = getRandomDay()

    const prompt = `${subject.firstName} / ${adverb} / ${verb.infinitive} ${object} / ${day}`
    const answer = `${subject.firstName} ${adverb} ${verb.infinitive} ${object} on ${day}s.`

    return { prompt, answer }
}

export default getQuestion
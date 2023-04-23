import { getRandomDay } from "../../database/daysOfTheWeekData";
import { getPerson, getPeople } from "../../database/peopleData";
import { getRandomElement, getBool } from "../../utils";
import { adverbsOfFrequency } from "../../database/adverbsOfFrequencyData";

const adjectives = [
    'tired',
    'late',
    'early',
    'happy',
    'hungry',
    'sad'
]

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = isPlural ? 'are' : 'is'
    const adjective = getRandomElement(adjectives)
    const adverb = getRandomElement(adverbsOfFrequency)
    const day = getRandomDay()

    const prompt = `${subject.firstName} / ${adverb} / ${adjective} / ${day}`
    const answer = `${subject.firstName} ${verb} ${adverb} ${adjective} on ${day}s.`

    return { prompt, answer }
}

export default getQuestion
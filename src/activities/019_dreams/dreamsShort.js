import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const isAffirmative = getBool()

    const prompt = `If possible, would ${subject.firstName} ${verb.infinitive} ${object}? (${isAffirmative ? 'Affirmative' : 'Negative'})`
    const answer = `${isAffirmative ? 'Yes' : 'No'}, ${subject.subjectivePronoun} would${isAffirmative ? '' : "n't"}.`

    return { prompt, answer }
}

export default getQuestion
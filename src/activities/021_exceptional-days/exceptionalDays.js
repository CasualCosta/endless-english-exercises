import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";
import { adverbsOfFrequency } from "../../database/adverbsOfFrequencyData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const adverb = getRandomElement(adverbsOfFrequency)
    
    const firstVerb = getRandomVerb()
    const firstObject = getRandomElement(firstVerb.objects)

    const secondVerb = getRandomVerb()
    const secondObject = getRandomElement(secondVerb.objects)

    const prompt = `${subject.firstName} / ${adverb} / ${firstVerb.infinitive} ${firstObject} / ${secondVerb.infinitive} ${secondObject}`
    const answer = `${subject.firstName} ${adverb} ${isPlural ? firstVerb.infinitive : firstVerb.thirdPerson}. Today, ${subject.subjectivePronoun} ${isPlural ? 'are' : 'is'} ${secondVerb.gerund} ${secondObject}.`

    return { prompt, answer }
}

export default getQuestion
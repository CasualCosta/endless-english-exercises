import { getRandomVerb } from "../../database/verbData"
import { getRandomElement } from "../../utils";
import { getPerson, getPeople } from "../../database/peopleData";

const getQuestion = () => {
    const isPlural = Math.floor(Math.random() * 2);
    const isMale = Math.floor(Math.random() * 2);
    
    const subject = isPlural ?
    getPeople() :
    getPerson(isMale);
    
    const verb = getRandomVerb();
    const object = verb.objects ? ` ${getRandomElement(verb.objects)}` : '';
    const isAffirmative = Math.floor(Math.random() * 2);
    
    const prompt = `Can ${subject.firstName} ${verb.infinitive}${object}? / ${isAffirmative ? 'Affirmative' : 'Negative'}`
    const answer = isAffirmative ?
        `Yes, ${subject.subjectivePronoun} can.` :
        `No, ${subject.subjectivePronoun} can't.`
    return { prompt, answer }
}

export default getQuestion
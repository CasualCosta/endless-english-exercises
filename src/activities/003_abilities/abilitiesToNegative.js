import { getRandomVerb } from "../../database/verbData"
import { getRandomElement } from "../../utils";
import { getPerson, getPeople } from "../../database/peopleData";

const getQuestion = () => {
    const isPlural = Math.floor(Math.random() * 2);
    const isMale = Math.floor(Math.random() * 2);

    const subject = isPlural ?
        getPeople().firstName :
        getPerson(isMale).firstName;
    
    const verb = getRandomVerb();
    const object = verb.objects ? ` ${getRandomElement(verb.objects)}` : '';
    
    const prompt = `${subject} can ${verb.infinitive}${object}.`
    const answer = `${subject} can't ${verb.infinitive}${object}.`

    return { prompt, answer }
}

export default getQuestion
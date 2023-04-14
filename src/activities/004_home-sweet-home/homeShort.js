import { rooms }  from '../../database/roomsData'
import { getBool, ToWordNumber, getRandomElement } from '../../utils'

const getQuestion = () => {
    const isPlural = getBool()
    const quantity = Math.floor(Math.random() * 7) + 1
    const quantifier = isPlural ? ToWordNumber(quantity) : 'a';
    const room = getRandomElement(rooms);
    const furniture = getRandomElement(room.furniture)

    const isAffirmative = getBool()
    
    const prompt = `${isPlural ? "Are" : "Is"} ${quantifier} ${furniture}${isPlural ? 's' : '' } in your ${room.name}? / ${isAffirmative ? 'Affirmative' : 'Negative' }`
    const answer = `${isAffirmative ? "Yes" : "No"}, there ${isPlural ? "are" : "is"}${isAffirmative ? '' : "n't"}.`

    return { prompt, answer }
}

export default getQuestion
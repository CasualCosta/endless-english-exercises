import { rooms }  from '../../database/roomsData'
import { getBool, ToWordNumber, getRandomElement } from '../../utils'

const getQuestion = () => {
    const isPlural = getBool()
    const quantity = Math.floor(Math.random() * 7) + 1
    const quantifier = isPlural ? ToWordNumber(quantity) : 'a';
    const home = getBool() ? 'apartment' : 'house';
    const room = getRandomElement(rooms);
    const furniture = getRandomElement(room.furniture)
    
    const prompt = `${quantifier} ${furniture}${isPlural ? 's' : ''} in your ${room.name}?`
    const answer = `${isPlural ? 'Are' : 'Is'} there`

    return { prompt, answer }
}

export default getQuestion
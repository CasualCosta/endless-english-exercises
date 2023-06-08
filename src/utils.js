export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getArticle = (word) => {
    const w = word[0].toLowerCase();
    if (w === 'a' ||
        w === 'e' ||
        w === 'i' ||
        w === 'o' ||
        w === 'u')
        return 'an'
    return 'a'
}

//array of strings
export const getRandomElement = (array) => {
    try{
        return array[Math.floor(Math.random() * array.length)]
    }
    catch (error) {
        console.error(error)
    }
}

export const ToWordNumber = (number) => {
    
    if(number === 0)
        return 'zero'
    if(number === 1)
        return 'one'
    if(number === 2)
        return 'two'
    if(number === 3)
        return 'three'
    if(number === 4)
        return 'four'
    if(number === 5)
        return 'five'
    if(number === 6)
        return 'six'
    if(number === 7)
        return 'seven'
    if(number === 8)
        return 'eight'
    if(number === 9)
        return 'nine'
    return ''
}

export const getBool = () => {
    return Math.floor(Math.random() * 2) === 0
}

export const getRandomNumber = (minInclusive, maxExclusive) => {
    return Math.floor(Math.random() * maxExclusive - minInclusive) + minInclusive;
}
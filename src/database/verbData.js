import { getRandomElement } from "../utils";

const regularVerbs = [
    {
        infinitive: 'cook',
        thirdPerson: 'cooks',
        past: 'cooked',
        participle: 'cooked',
        objects: [
            'breakfast',
            'lunch',
            'dinner',
            'pasta',
        ]
    },
    {
        infinitive: 'cry',
        thirdPerson: 'cries',
        past: 'cried',
        participle: 'cried'
    },
    {
        infinitive: 'dance',
        thirdPerson: 'dances',
        past: 'danced',
        participle: 'danced',
        objects: [
            'salsa',
            'flamenco',
            'samba',
        ]
    },
    {
        infinitive: 'express',
        thirdPerson: 'expresses',
        past: 'expressed',
        participle: 'expressed',
        objects: [
            'an opinion',
            'concerns about the subject',
        ]
    },
    {
        infinitive: 'fry',
        thirdPerson: 'fries',
        past: 'fried',
        participle: 'fried',
        objects: [
            'fish',
            'meat',
            'an egg',
        ]
    },
    {
        infinitive: 'listen',
        thirdPerson: 'listens',
        past: 'listened',
        participle: 'listened',
        objects: [
            'to Coldplay',
            'to the sounds of nature',
            'to pop music',
            'to the music in the room'
        ]
    },
    {
        infinitive: 'paint',
        thirdPerson: 'paints',
        past: 'painted',
        participle: 'painted',
        objects: [
            'a portrait',
            'a wall',
            'a painting'
        ]
    },
    {
        infinitive: 'play',
        thirdPerson: 'plays',
        past: 'played',
        participle: 'played',
        objects: [
            'a game',
            'the guitar',
            'the piano',
            'the sax'
        ]
    },
    {
        infinitive: 'start',
        thirdPerson: 'starts',
        past: 'started',
        participle: 'started',
        objects: [
            'to exercise',
            'a journey',
            'a project',
            'a business'
        ]
    },
    {
        infinitive: 'study',
        thirdPerson: 'studies',
        past: 'studied',
        participle: 'studied',
        objects: [
            'for the test',
            'English',
            'Geography',
            'the subject'
        ]
    },
    {
        infinitive: 'talk',
        thirdPerson: 'talks',
        past: 'talked',
        participle: 'talked',
        objects: [
            'to a doctor',
            'to a friend',
            'to me',
            'to the president'
        ]
    },
    {
        infinitive: 'train',
        thirdPerson: 'trains',
        past: 'trained',
        participle: 'trained',
        objects: [
            'karate',
            'piano',
            'a dog',
            'a kid'
        ]
    },
    {
        infinitive: 'try',
        thirdPerson: 'tries',
        past: 'tried',
        participle: 'tried',
        objects: [
            'to sleep',
            'new things',
            'this dish'
        ]
    },
    {
        infinitive: 'walk',
        thirdPerson: 'walks',
        past: 'walked',
        participle: 'walked',
        objects: [
            'the dog',
            'to the park',
            'on the beach',
        ]
    },
    {
        infinitive: 'watch',
        thirdPerson: 'watches',
        past: 'watched',
        participle: 'watched',
        objects: [
            'TV',
            'a movie',
            'the sunset',
            'a play'
        ]
    },
]

const irregularVerbs = [
    {
        infinitive: 'begin',
        thirdPerson: 'begins',
        past: 'began',
        participle: 'begun',
        objects: [
            'to study',
            'to understand',
        ]
    },
    {
        infinitive: 'bring',
        thirdPerson: 'brings',
        past: 'brought',
        participle: 'brought',
        objects: [
            'good news',
            'life to the party',
            'a gift'
        ]
    },
    {
        infinitive: 'fly',
        thirdPerson: 'flies',
        past: 'flew',
        participle: 'flown',
        objects: [
            'to the moon',
            'to New York',
            'a helicopter'
        ]
    },
    {
        infinitive: 'read',
        thirdPerson: 'reads',
        past: 'read',
        participle: 'read',
        objects: [
            'the news',
            'a book',
            'a study',
            'an article',
            'a blog post'
        ]
    },
    {
        infinitive: 'ride',
        thirdPerson: 'rides',
        past: 'rode',
        participle: 'ridden',
        objects: [
            'a horse',
            'a bike',
            'a motorcycle'
        ]
    },
    {
        infinitive: 'run',
        thirdPerson: 'runs',
        past: 'ran',
        participle: 'run',
        objects: [
            'a marathon',
            'a business',
            'home',
            'to the hospital'
        ]
    },
    {
        infinitive: 'swim',
        thirdPerson: 'swims',
        past: 'swam',
        participle: 'swum',
        objects: [
            'in a river',
            'at the Olympics',
            'in a pool',
            'in a lake'
        ]
    },
    {
        infinitive: 'throw',
        thirdPerson: 'throws',
        past: 'threw',
        participle: 'thrown',
        objects: [
            'a party',
            'a ball',
            'a balloon'
        ]
    },
    {
        infinitive: 'write',
        thirdPerson: 'writes',
        past: 'wrote',
        participle: 'written',
        objects: [
            'a novel',
            'a letter',
            'a note',
            'a book',
            'a message'
        ]
    }
]

export const getVerb = (verb) => {
    for(let i = 0; i < regularVerbs.length; i++){
        if (verb === regularVerbs[i].infinitive)
            return regularVerbs[i];
    }
    for(let i = 0; i < irregularVerbs.length; i++){
        if (verb === irregularVerbs[i].infinitive)
            return irregularVerbs[i];
    }
    throw new console.error('No match found.');
}

export const getRandomVerb = () => {
    const isRegular = Math.floor(Math.random() * 2) === 0
    if(isRegular)
        return getRandomElement(regularVerbs)
    return getRandomElement(irregularVerbs)
}


    // {
    //     infinitive: '',
    //     thirdPerson: '',
    //     past: '',
    //     participle: ''
    // },
import fromCountry from '../activities/001_my-country/fromCountry'
import isNationality from '../activities/001_my-country/isNationality'
import possessiveCountry from '../activities/001_my-country/possessiveCountry'

import affirmativeToNegative from '../activities/002_cities/affirmativeToNegative'
import affirmativeToInterrogative from '../activities/002_cities/affirmativeToInterrogative'
import citiesShortAnswer from '../activities/002_cities/citiesShortAnswer'

import abilitiesToNegative from '../activities/003_abilities/abilitiesToNegative'
import abilitiesToInterrogative from '../activities/003_abilities/abilitiesToInterrogative'
import abilitiesShortAnswers from '../activities/003_abilities/abilitiesShortAnswers'


import monthsAddAdjective from '../activities/009_who-and-when/monthsAddAdjective'
import weeksToNegative from '../activities/009_who-and-when/weeksToNegative'
import personGender from '../activities/009_who-and-when/personGender'
import personPlural from '../activities/009_who-and-when/personPlural'

import homeAffirmative from '../activities/004_home-sweet-home/homeAffirmative'
import homeNegative from '../activities/004_home-sweet-home/homeNegative'
import homeInterrogative from '../activities/004_home-sweet-home/homeInterrogative'
import homeShort from '../activities/004_home-sweet-home/homeShort'


const data = [
    {
        title: 'My Country',
        activities: [
            {
                description: 'Put the sentences in the negative form. Follow the example:',
                example:
                {
                    prompt: 'Portugal / John',
                    answer: 'He is from Portugal.'
                },
                getQuestion: fromCountry
            },
            {
                description: 'Write sentences about nationality based on the country and gender.',
                example: {
                    prompt: 'England / Michael',
                    answer: 'He is English.'
                },
                getQuestion: isNationality
            },
            {
                description: 'Write sentences about countries using personal adjectives.',
                example: {
                    prompt: 'Spain / Mario',
                    answer: 'His country is Spain.'
                },
                getQuestion: possessiveCountry
            }
        ]
    },
    {
        title: 'Cities',
        activities: [
            {
                description: 'Re-write the sentence in the negative form. Follow the example:',
                example:
                {
                    prompt: 'John is from Toronto.',
                    answer: "John isn't from Toronto."
                },
                getQuestion: affirmativeToNegative
            },
            {
                description: 'Re-write the sentence in the interrogative form. Follow the example:',
                example:
                {
                    prompt: 'John is from Toronto.',
                    answer: "Is John from Toronto?"
                },
                getQuestion: affirmativeToInterrogative
            },
            {
                description: 'Re-write the sentence in the interrogative form. Follow the example:',
                example:
                {
                    prompt: 'John is from Toronto.',
                    answer: "Is John from Toronto?"
                },
                getQuestion: citiesShortAnswer
            }
        ]
    },
    {
        title: 'Abilities',
        activities: [
            {
                description: 'Re-write the sentences in the negative form. Follow the example:',
                example: 
                {
                    prompt: 'Bob can swim.',
                    answer: `Bob can't swim.`
                },
                getQuestion: abilitiesToNegative
            },
            {
                description: 'Re-write the sentences in the interrogative form. Follow the example:',
                example: 
                {
                    prompt: 'Bob can swim.',
                    answer: 'Can Bob swim?'
                },
                getQuestion: abilitiesToInterrogative
            },
            {
                description: 'Write short answers to the questions. Follow the example:',
                example: 
                {
                    prompt: 'Can Bob swim? / Affirmative',
                    answer: 'Yes, he can.'
                },
                getQuestion: abilitiesShortAnswers
            }
        ]
    },
    {
        title: 'Home, Sweet Home',
        activities: [
            {
                description: 'Complete the sentences about existence in the affirmative form. Follow the example:',
                example: 
                {
                    prompt: 'two lamps in my bedroom.',
                    answer: 'There are'
                },
                getQuestion: homeAffirmative
            },
            {
                description: 'Complete the sentences about existence in the negative form. Follow the example:',
                example: 
                {
                    prompt: 'two lamps in my bedroom.',
                    answer: "There aren't"
                },
                getQuestion: homeNegative
            },
            {
                description: 'Complete the sentences about existence in the interrogative form. Follow the example:',
                example: 
                {
                    prompt: 'two lamps in you bedroom?',
                    answer: 'Are there'
                },
                getQuestion: homeInterrogative
            },
            {
                description: 'Write short answers about existence. Follow the example:',
                example: 
                {
                    prompt: 'Are there two lamps in your bedroom?',
                    answer: 'Yes, there are.'
                },
                getQuestion: homeShort
            }
        ]
    },
    {
        title: 'What do you do?',
        activities: [
            {
                description: '',
                example: 
                {
                    prompt: '',
                    answer: ''
                },
                getQuestion: null
            }
        ]
    },
    {
        title: 'So much stuff',
        activities: [
            {
                description: '',
                example: 
                {
                    prompt: '',
                    answer: ''
                },
                getQuestion: null
            }
        ]
    },
    {
        title: 'Where we live',
        activities: [
            {
                description: '',
                example: 
                {
                    prompt: '',
                    answer: ''
                },
                getQuestion: null
            }
        ]
    },
    {
        title: 'Meet my family',
        activities: [
            {
                description: '',
                example: 
                {
                    prompt: '',
                    answer: ''
                },
                getQuestion: null
            }
        ]
    },
    {
        title: 'Who and When',
        activities: [
            {
                description: 'Re-write the sentence adding the adjective. Follow the example:',
                example: 
                {
                    prompt: 'October is a month. / rainy',
                    answer: 'October is a rainy month.'
                },
                getQuestion: monthsAddAdjective
            },
            {
                description: 'Re-write the sentences in the negative form, adding the adjective. Follow the example:',
                example: 
                {
                    prompt: 'Sunday is a day. / bad',
                    answer: "Sunday isn't a bad day."
                },
                getQuestion: weeksToNegative
            },
            {
                description: 'Re-write the sentences with the different person. Follow the example:',
                example: 
                {
                    prompt: 'John is a good person. Mary',
                    answer: "Mary is a good person."
                },
                getQuestion: personGender
            },
            {
                description: 'Re-write the sentences with the different people. Follow the example:',
                example: 
                {
                    prompt: 'John is a good person. Mary and Josh',
                    answer: "Mary and Josh are good people."
                },
                getQuestion: personPlural
            }
        ]
    },
]

export default data;


// {
//     title: ,
//     activities: [
//         {
//             description: '',
//             example: 
//             {
//                 prompt: '',
//                 answer: ''
//             },
//             getQuestion: null
//         }
//     ]
// },
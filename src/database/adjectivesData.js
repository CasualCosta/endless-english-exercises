const shortAdjectives = [
    {
        adjective: 'bright',
        comparative: 'brighter',
        superlative: 'brightest'
    },
    {
        adjective: 'broad',
        comparative: 'broader',
        superlative: 'broadest'
    },
    {
        adjective: 'cheap',
        comparative: 'cheaper',
        superlative: 'cheapest'
    },
    {
        adjective: 'clear',
        comparative: 'clearer',
        superlative: 'clearest'
    },
    {
        adjective: 'clean',
        comparative: 'cleaner',
        superlative: 'cleanest'
    },
    {
        adjective: 'cloudy',
        comparative: 'cloudier',
        superlative: 'cloudiest'
    },
    {
        adjective: 'cold',
        comparative: 'colder',
        superlative: 'coldest'
    },
    {
        adjective: 'dark',
        comparative: 'darker',
        superlative: 'darkest'
    },
    {
        adjective: 'fancy',
        comparative: 'fancier',
        superlative: 'fanciest'
    },
    {
        adjective: 'fast',
        comparative: 'faster',
        superlative: 'fastest'
    },
    {
        adjective: 'funny',
        comparative: 'funnier',
        superlative: 'funniest'
    },
    {
        adjective: 'hard',
        comparative: 'harder',
        superlative: 'hardest'
    },
    {
        adjective: 'heavy',
        comparative: 'heavier',
        superlative: 'heaviest'
    },
    {
        adjective: 'hot',
        comparative: 'hotter',
        superlative: 'hottest'
    },
    {
        adjective: 'light',
        comparative: 'lighter',
        superlative: 'lightest'
    },
    {
        adjective: 'long',
        comparative: 'longer',
        superlative: 'longest'
    },
    {
        adjective: 'loud',
        comparative: 'louder',
        superlative: 'loudest'
    },
    {
        adjective: 'new',
        comparative: 'newer',
        superlative: 'newest'
    },
    {
        adjective: 'nice',
        comparative: 'nicer',
        superlative: 'nicest'
    },
    {
        adjective: 'old',
        comparative: 'older',
        superlative: 'oldest'
    },
    {
        adjective: 'pretty',
        comparative: 'prettier',
        superlative: 'prettiest'
    },
    {
        adjective: 'quiet',
        comparative: 'quieter',
        superlative: 'quietest'
    },
    {
        adjective: 'rainy',
        comparative: 'rainier',
        superlative: 'rainiest'
    },
    {
        adjective: 'short',
        comparative: 'shorter',
        superlative: 'shortest'
    },
    {
        adjective: 'simple',
        comparative: 'simpler',
        superlative: 'simplest'
    },
    {
        adjective: 'slim',
        comparative: 'slimmer',
        superlative: 'slimmest'
    },
    {
        adjective: 'slow',
        comparative: 'slower',
        superlative: 'slowest'
    },
    {
        adjective: 'snowy',
        comparative: 'snowier',
        superlative: 'snowiest'
    },
    {
        adjective: 'stormy',
        comparative: 'stormier',
        superlative: 'stormiest'
    },
    {
        adjective: 'sunny',
        comparative: 'sunnier',
        superlative: 'sunniest'
    },
    {
        adjective: 'weird',
        comparative: 'weirder',
        superlative: 'weirdest'
    },
    {
        adjective: 'wide',
        comparative: 'wider',
        superlative: 'widest'
    },
]

const longAdjectives = [
    { adjective: 'arrogant' },
    { adjective: 'annoying' },
    { adjective: 'beautiful' },
    { adjective: 'boring' },
    { adjective: 'complicated' },
    { adjective: 'colorful' },
    { adjective: 'elegant' },
    { adjective: 'energetic' },
    { adjective: 'exciting' },
    { adjective: 'expensive' },
    { adjective: 'hilarious' },
    { adjective: 'honest' },
    { adjective: 'impressive' },
    { adjective: 'intelligent' },
    { adjective: 'interesting' },
    { adjective: 'irritating' },
    { adjective: 'peaceful' },
    { adjective: 'polite' },
]

export const getAdjective = (adjective) => {
    for(let i = 0; i < shortAdjectives.length; i++){
        if (adjective === shortAdjectives[i].adjective)
            return shortAdjectives[i];
    }
    for(let i = 0; i < longAdjectives.length; i++){
        if (adjective === longAdjectives[i])
            return longAdjectives[i];
    }
    throw new console.error('No match found.');
}

// {
//     adjective: '',
//     comparative: '',
//     superlative: ''
// },
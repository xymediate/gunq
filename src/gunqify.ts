import * as config from '../gunqify.json';
const maxLength = config.keyChars.length - 1;

function randomIntFromInterval(min: number,max: number)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

export const Gunqify = () => {
    let result = '';
    for (let i = 1; i <= config.keyLength; i++) {
        result += config.keyChars[randomIntFromInterval(0, maxLength)];
    };  
    return result;
};

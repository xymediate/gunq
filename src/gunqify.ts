const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
const maxLength = chars.length - 1;
import * as config from '../gunqify.json';

function randomIntFromInterval(min: number,max: number)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

export const Gunqify = () => {
    let result = '';
    for (let i = 1; i <= config.keyLength; i++) {
        result += chars[randomIntFromInterval(0, maxLength)];
    };  
    return result;
};

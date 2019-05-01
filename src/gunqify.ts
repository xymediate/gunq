const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
let maxLength = chars.length - 1;
const keyPrefixLength = 12;   

function randomIntFromInterval(min: number,max: number)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

export const Gunqify = () => {
    let result = '';
    for (var i = 1; i <= keyPrefixLength; i++) {
        result += chars[randomIntFromInterval(0, maxLength)];
    };  
    return result;
};

//export const Gunqify = () => "xyz";
//export const Identify = (name: string) => `Hello ${name}`; 
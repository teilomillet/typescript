let userInput: unknown;
let userName: string;

userInput = 5;
userName = 'Laurene';

if (typeof userInput === 'string') {
        userName = userInput;
}

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code} ;
}

generateError('hi there is a problem over here', 999);
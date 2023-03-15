// Code your solutions in this file


function writeCards (array, event) {
    let messagesArray = [];
    for (let i=0; i < array.length; i++) {
       messagesArray.push ((`Thank you, ${array[i]}, for the wonderful ${event} gift!`))
       debugger;
    }

    return messagesArray;
}

function countDown (number) {
    while (number >= 0) {
        console.log(number--)
    }
}
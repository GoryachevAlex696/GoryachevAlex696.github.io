'use strict';
function formatDate(date) {
    let output;

    if (date.getDate() < 10)
        output = '0' + date.getDate() + '.';
    else
        output = date.getDate() + '.';

    if ((date.getMonth() + 1) < 10)
        output += '0' + (date.getMonth() + 1) + '.';
    else
        output += (date.getMonth() + 1) + '.';

    let dubYear = date.getFullYear() % 100;

    if (dubYear == 0)
        if (date.getFullYear() < 10)
            output += '0' + date.getFullYear();
        else
            output += date.getFullYear();
    else {
        if (dubYear < 10)
            output += '0' + dubYear;
        else
            output += dubYear;
    }

    console.log(output);
}

let date = new Date();
formatDate(date);
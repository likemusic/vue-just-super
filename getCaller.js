"use strict";

export default function (deep = 1) {
    const stackTrace = (new Error()).stack; // Only tested in latest FF and Chrome
    let callerName = stackTrace
        .replace(/^Error\s+/, '') // Sanitize Chrome
        .split("\n")[deep] // 1st item is this, 2nd item is caller
        .trim()
        .replace(/^\s+at Object./, '') // Sanitize Chrome
        .replace(/ \(.+\)$/, ''); // Sanitize Chrome

    if (callerName.slice(0, 3) === 'at ') {
        callerName = callerName.slice(3); // Sanitize Chrome
    }

    callerName = callerName.replace(/@.+/, ''); // Sanitize Firefox

    return callerName;
}

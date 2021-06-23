"use strict";

import ErrorStackParser from "error-stack-parser";

export default function (deep = 1) {
    try {
        throw new Error();
    } catch (e) {
        const stack = ErrorStackParser.parse(e);

        return stack[deep].functionName;
    }
}

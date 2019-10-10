import firstLetterCap from "./firstLetterCap";
export default function({providedIn, requiredIn, config, defaultValue, from, to}) {
    if(!providedIn && from)
        providedIn = from;
    if(!requiredIn && to)
        requiredIn = to;
    if(!providedIn)
        providedIn = {
            ...defaultValue
        }
    else if(typeof providedIn == 'string') {
        providedIn = {
            name: providedIn,
            symbol: firstLetterCap(providedIn)
        }
    }
    if(!requiredIn) {
        if(config && config.unit) {
            requiredIn = {
                name: config.unit.name || config.unit,
                symbol: config.unit.symbol || firstLetterCap(config.unit.name) || firstLetterCap(config.unit),
            }
        } else {
            requiredIn = {
                ...defaultValue
            }
        }
    }
    else if(typeof requiredIn == 'string') {
        requiredIn = {
            name: requiredIn,
            symbol: firstLetterCap(requiredIn)
        }
    }
    return {
        providedIn,
        requiredIn
    }
}
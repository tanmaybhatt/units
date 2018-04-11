import Conversions from '../Conversions';
import firstLetterCap from './firstLetterCap';
import decimalValueGenerator from './decimalValueGenerator';
import stringGenerator from './stringGenerator';
export default function( { value, providedIn, requiredIn, decimalPlaces, stringFormat, config = {}} ) {
    var convertedValue;
    if(providedIn.name == requiredIn.name)
        convertedValue = value;
    else {
        var functionName = providedIn.name + "To" + firstLetterCap(requiredIn.name);
        var convert = Conversions[functionName];
        var factorName = providedIn.name + "Per" + firstLetterCap(requiredIn.name);
        convertedValue = convert(value,config[factorName]);
    }
    var returnValue = convertedValue;
    if(decimalPlaces) {
        returnValue = decimalValueGenerator(returnValue,decimalPlaces);
    }
    if(stringFormat) {
        returnValue = stringGenerator(returnValue,requiredIn.symbol,stringFormat);
    }
    return returnValue;
}
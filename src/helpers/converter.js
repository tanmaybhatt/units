var convert = require('convert-units');
import Conversions from '../Conversions';
import firstLetterCap from './firstLetterCap';
import decimalValueGenerator from './decimalValueGenerator';
import stringGenerator from './stringGenerator';
export default function({
    value,
    providedIn,
    requiredIn,
    decimalPlaces,
    stringFormat,
    config = {},
    noThirdParty,
    toBest,
}) {
    var convertedValue;
    if (providedIn.name == requiredIn.name) convertedValue = value;
    else {
        var functionName =
            providedIn.name + 'To' + firstLetterCap(requiredIn.name);
        var converter = Conversions[functionName];
        var factorName =
            providedIn.name + 'Per' + firstLetterCap(requiredIn.name);
        if (noThirdParty) convertedValue = converter(value, config[factorName]);
        else if (toBest) {
            convertedValue = convert(value)
                .from(providedIn.name)
                .toBest();
            requiredIn.symbol = convertedValue.unit;
            convertedValue = convertedValue.val;
        } else
            convertedValue = convert(value)
                .from(providedIn.name)
                .to(requiredIn.name);
    }
    var returnValue = convertedValue;
    if (typeof decimalPlaces !== 'undefined' && decimalPlaces !== null) {
        returnValue = decimalValueGenerator(returnValue, decimalPlaces);
    }
    if (stringFormat) {
        returnValue = stringGenerator(
            returnValue,
            requiredIn.symbol,
            stringFormat
        );
    }
    return returnValue;
}

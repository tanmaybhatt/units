export default function(convertedValue,decimalPlaces) {
    var factor = Math.pow(10,decimalPlaces);
    return Math.round(convertedValue * factor) / factor;
}
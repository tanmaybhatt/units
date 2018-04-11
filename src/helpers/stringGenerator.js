import replaceAll from "./replaceAll";
export default function(value,unit,stringFormat) {
    var returnString = replaceAll(stringFormat,"<value>",value);
    returnString = replaceAll(returnString,"<unit>", unit);
    return returnString;
}
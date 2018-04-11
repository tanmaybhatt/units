import requiredProvided from '../helpers/requiredProvided';
import converter from '../helpers/converter';
export default function(value,{ providedIn, requiredIn, decimalPlaces, stringFormat, configOverrides } = {}){
    var config;
    if(configOverrides)
        config = configOverrides;
    else 
        config = this && this.config ? this.config.temperature || {} : {};
    var { providedIn, requiredIn } = requiredProvided( { providedIn, requiredIn, config, 
        defaultValue: {
            name: "celcius",
            symbol: "°C"
        } 
    });
    var returnValue = converter({
        value,
        providedIn,
        requiredIn,
        decimalPlaces,
        stringFormat
    });
    return returnValue;
}
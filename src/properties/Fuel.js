import requiredProvided from '../helpers/requiredProvided';
import converter from '../helpers/converter';
export default function(value,{ providedIn, requiredIn, decimalPlaces, stringFormat, configOverrides } = {}){
    var config;
    if(configOverrides)
        config = configOverrides;
    else 
        config = this && this.config ? this.config.fuel || this.config.volume || {} : {};
    var { providedIn, requiredIn } = requiredProvided( { providedIn, requiredIn, config, 
        defaultValue: {
            name: "liter",
            symbol: "L"
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
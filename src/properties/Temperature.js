import requiredProvided from '../helpers/requiredProvided';
import converter from '../helpers/converter';
export default function(
    value,
    {
        providedIn,
        requiredIn,
        decimalPlaces,
        stringFormat,
        configOverrides,
        toBest,
        from,
        to,
    } = {}
) {
    var config = getConfig();
    if (configOverrides) config = configOverrides;
    else config = config ? config.temperature || {} : {};
    var { providedIn, requiredIn } = requiredProvided({
        providedIn,
        requiredIn,
        from,
        to,
        config,
        defaultValue: {
            name: 'C',
            symbol: '°C',
        },
    });
    var returnValue = converter({
        value,
        providedIn,
        requiredIn,
        decimalPlaces,
        stringFormat,
        toBest,
    });
    return returnValue;
}

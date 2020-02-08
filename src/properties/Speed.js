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
        from,
        to,
        toBest,
    } = {}
) {
    var config = getConfig();
    if (configOverrides) config = configOverrides;
    else config = config ? config.speed || {} : {};
    var { providedIn, requiredIn } = requiredProvided({
        providedIn,
        requiredIn,
        config,
        from,
        to,
        defaultValue: {
            name: 'km/h',
            symbol: 'km/h',
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

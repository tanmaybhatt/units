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
    else config = config ? config.mass || {} : {};
    var { providedIn, requiredIn } = requiredProvided({
        providedIn,
        requiredIn,
        from,
        to,
        config,
        defaultValue: {
            name: 'kg',
            symbol: 'kg',
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

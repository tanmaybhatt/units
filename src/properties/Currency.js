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
    else config = config ? config.currency || {} : {};
    var { providedIn, requiredIn } = requiredProvided({
        from,
        to,
        providedIn,
        requiredIn,
        config,
        defaultValue: {
            name: 'rupee',
            symbol: '₹',
        },
    });
    var returnValue = converter({
        noThirdParty: true,
        value,
        providedIn,
        requiredIn,
        decimalPlaces,
        stringFormat,
        config,
        toBest,
    });
    return returnValue;
}

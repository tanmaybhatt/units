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
    var config;
    if (configOverrides) config = configOverrides;
    else
        config =
            this && this.config
                ? this.config.fuel || this.config.volume || {}
                : {};
    var { providedIn, requiredIn } = requiredProvided({
        providedIn,
        requiredIn,
        from,
        to,
        config,
        defaultValue: {
            name: 'l',
            symbol: 'L',
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

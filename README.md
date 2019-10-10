# Units

Configuration driven unit conversion module


## Usage
```
var units= new Units(config);
var convertedValue = units.Currency(value[,optionalParameters]);
```
### Config example (default config):
```
{
    currency: {
        unit: {
            name: 'rupee',
            symbol: '₹',
        }
    },
    fuel: {
        unit: {
            name: 'l',
            symbol: 'L'
        }
    },
    volume: {
        unit: {
            name: 'l',
            symbol: 'L'
        }
    },
    speed: {
        unit: {
            name: 'km/h',
            symbol: 'km/h'
        }
    },
    distance: {
        unit: {
            name: 'km',
            symbol: 'km'
        }
    },
    temperature: {
        unit: {
            name: 'C',
            symbol: '°C'
        }
    },
    pressure: {
        unit: {
            name: 'kPa',
            symbol: 'kPa'
        }
    },
    mass: {
        unit: {
            name: 'kg',
            symbol: 'kg'
        }
    },
    dollarPerRupee: 0.015,
    rupeePerDollar: 65,
    KWDPerRupee: 0.0046,
    rupeePerKWD: 217
}
```
Unit name should be same throughout

### Supported Properties

 1. Currency ( INR, USD )
 2. Speed
 3. Distance
 4. Fuel
 5. Mass
 6. Pressure
 7. Temperature
 8. Volume

### Optional Parameters
#### providedIn
The name of the unit of the value provided
#### requiredIn
The name of the unit of the value required
#### decimalPlaces
 Number of decimal places required in the converted value
 #### stringFormat
 Format of the converted value. ( "\<value> \<unit>" : Returned string for distance will of the format "7 km" )
 #### configOverrides
 If you want to override set config for a particular conversion you can provide config overrides like this
 ```
 {
	 unit: {
		 name: "km"
		 symbol: "km"
	}
 }
 ```
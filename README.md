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
			name:  'rupee',
			symbol:  '₹',
		}
	},
	fuel: {
		unit: {
			name:  'liter',
			symbol:  'L'
		}
	},
	volume: {
		unit: {
			name:  'liter',
			symbol:  'L' 
		}
	},
	speed: {
		unit: {
			name:  'kmph',
			symbol:  'km/hr'
		}
	},
	distance: {
		unit: {
			name:  'km',
			symbol:  'km'
		}
	},
	temperature: {
		unit: {
			name:  'celcius',
			symbol:  '°C'
		}
	},
	pressure: {
		unit: {
			name:  'kpa',
			symbol:  'kpa'
		}
	},
	mass: {
		unit: {
			name:  'kg',
			symbol:  'kg'
		}
	},
	dollarPerRupee:  0.015,
	rupeePerDollar:  65,
	KWDPerRupee:  0.0046,
	rupeePerKWD:  217,
	milePerKm:  0.62,
	kmPerMile:  1.61,
	gallonPerLiter:  0.264,
	literPerGallon:  3.785,	
	mphPerKmph:  0.62,
	kmphPerMph:  1.61,	
	poundPerKg:  2.20,
	kgPerPound:  0.453,
	psiPerKpa:  0.145,
	kpaPerPsi:  6.89
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
#### requireIn
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
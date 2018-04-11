import { defaultConfig } from 'constants';

export function fahrenheitToCelcius(value) {
    return (value - 32)*5/9 ;
}

export function celciusToFahrenheit(value) {
    return (value*9/5 + 32);
}
import { defaultConfig } from '../constants';

export function mileToKm(value,kmPerMile) {
    return value * ( kmPerMile || defaultConfig.kmPerMile);
}

export function kmToMile(value,milePerKm) {
    return value * ( milePerKm || defaultConfig.milePerKm);
}
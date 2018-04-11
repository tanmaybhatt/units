import { defaultConfig } from '../constants';

export function mphToKmph(value,kmphPerMph) {
    return value * ( kmphPerMph || defaultConfig.kmphPerMph);
}

export function kmphToMph(value,mphPerKmph) {
    return value * ( mphPerKmph || defaultConfig.mphPerKmph);
}
import { defaultConfig } from '../constants';

export function gallonToLiter(value,literPerGallon) {
    return value * ( literPerGallon || defaultConfig.literPerGallon);
}

export function literToGallon(value,gallonPerLiter) {
    return value * ( gallonPerLiter || defaultConfig.gallonPerLiter);
}
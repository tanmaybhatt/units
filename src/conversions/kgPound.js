import { defaultConfig } from '../constants';

export function poundToKg(value, kgPerPound) {
    return value * (kgPerPound || defaultConfig.kgPerPound);
}

export function kgToPound(value, poundPerKg) {
    return value * (poundPerKg || defaultConfig.poundPerKg);
}
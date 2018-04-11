import { defaultConfig } from '../constants';

export function psiToKpa(value,kpaPerPsi) {
    return value * ( kpaPerPsi || defaultConfig.kpaPerPsi);
}

export function kpaToPsi(value,psiPerKpa) {
    return value * ( psiPerKpa || defaultConfig.psiPerKpa);
}
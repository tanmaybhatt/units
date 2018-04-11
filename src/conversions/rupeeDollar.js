import { defaultConfig } from "../constants";

export function rupeeToDollar(value,dollarPerRupee) {
    return value * (dollarPerRupee || defaultConfig.dollarPerRupee);
}
export function dollarToRupee(value,rupeePerDollar) {
    return value * (rupeePerDollar || defaultConfig.rupeePerDollar);
}
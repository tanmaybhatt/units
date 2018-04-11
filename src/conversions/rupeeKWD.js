import { defaultConfig } from "../constants";

export function rupeeToKWD(value,KWDPerRupee) {
    return value * (KWDPerRupee || defaultConfig.KWDPerRupee);
}
export function KWDToRupee(value,rupeePerKWD) {
    return value * (rupeePerKWD || defaultConfig.rupeePerKWD);
}
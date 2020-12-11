import { defaultConfig } from './constants';

const UnitsClosure = function() {
    let config = defaultConfig;
    function getConfig() {
        return config;
    }
    function setConfig(config = {}) {
        config = {
            ...defaultConfig,
            ...config,
        };
    }
    return { getConfig, setConfig };
};

export const { getConfig, setConfig } = UnitsClosure();

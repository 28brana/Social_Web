import Cookies from 'cookie-cutter';
import { cookiesKey, defaultSettings } from '../config'

export const getSettings = () => {
    const themeMode = Cookies.get(cookiesKey.themeMode) || defaultSettings.themeMode;
    return {
        themeMode
    }
}

const getData = (value) => {
    if (value === 'true' || value === 'false') {
        return JSON.parse(value);
    }
    if (value === 'undefined' || !value) {
        return '';
    }
    return value;
};
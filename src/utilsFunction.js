import { isHiraganaChar, isKatakanaChar, isKanjiChar, isKanaChar, isJapaneseChar } from './isFunction';
import { KANJI_NUMBER } from './constants';

const getFunc = (func, string, details) => {
    if (!string || string !== String(string))
        return null;
    if (details && details.string === true)
        return [...string].filter(element => func(element)).join("") || null;
    return [...string].filter(element => func(element)) || null;
}

const removeFunc = (func, string, details) => {
    if (!string || string !== String(string))
        return null;
    if (details && details.string === true)
        return [...string].filter(element => !func(element)).join("") || null;
    return [...string].filter(element => !func(element)) || null;
}

export const getHiragana = (string, details) => getFunc(isHiraganaChar, string, details);
export const getKatakana = (string, details) => getFunc(isKatakanaChar, string, details);
export const getKana = (string, details) => getFunc(isKanaChar, string, details);
export const getKanji = (string, details) => getFunc(isKanjiChar, string, details);
export const getJapanese = (string, details) => getFunc(isJapaneseChar, string, details);
export const getKanjiNumber = (string, details) => {
    if (!string || string !== String(string))
        return null;
    if (details && details.string === true)
        return [...string].filter(element => KANJI_NUMBER.includes(element)).join("") || null;
    return [...string].filter(element => KANJI_NUMBER.includes(element)) || null;
};

export const removeHiragana = (string, details) => removeFunc(isHiraganaChar, string, details);
export const removeKatakana = (string, details) => removeFunc(isKatakanaChar, string, details);
export const removeKana = (string, details) => removeFunc(isKanaChar, string, details);
export const removeKanji = (string, details) => removeFunc(isKanjiChar, string, details);
export const removeJapanese = (string, details) => removeFunc(isJapaneseChar, string, details);
export const removeKanjiNumber = (string, details) => {
    if (!string || string !== String(string))
        return null;
    if (details && details.string === true)
        return [...string].filter(element => !KANJI_NUMBER.includes(element)).join("") || null;
    return [...string].filter(element => !KANJI_NUMBER.includes(element)) || null;
};

export default {
    getHiragana,
    getKatakana,
    getKana,
    getKanji,
    getKanjiNumber,
    getJapanese,
    removeHiragana,
    removeKatakana,
    removeKana,
    removeKanji,
    removeJapanese,
    removeKanjiNumber
};
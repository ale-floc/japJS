import { isHiraganaChar, isKatakanaChar, isKanjiChar, isKanaChar } from './isFunction';
import { KANJI_NUMBER } from './constants';

const hasHOF = func => string => {
    if (!string || string !== String(string)) return false;
    const tmp = string.split("").map(element => func(element))
    return tmp.includes(true);
}

export const hasKanji = string => hasHOF(isKanjiChar)(string);
export const hasKatakana = string => hasHOF(isKatakanaChar)(string);
export const hasHiragana = string => hasHOF(isHiraganaChar)(string);
export const hasKana = string => hasHOF(isKanaChar)(string);
export const hasJapanese = (string, details) => (details && details === true) ?
    { kana: hasKana(string), hiragana: hasHiragana(string), katakana: hasKatakana(string), kanji: hasKanji(string) }
    : (hasKana(string) || hasHiragana(string) || hasKatakana(string) || hasKanji(string));
export const hasKanjiNumber = str => hasHOF(char => KANJI_NUMBER.includes(char))(str);

export default {
    hasKanji,
    hasKatakana,
    hasHiragana,
    hasKana,
    hasJapanese,
    hasKanjiNumber
};
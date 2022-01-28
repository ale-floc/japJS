import { isHiraganaChar, isKatakanaChar, isKanjiChar, isKanaChar, isJoyoKanjiChar } from './isFunction';
import { KANJI_NUMBER } from './constants';

const hasFunc = (func, string) => {
    if (!string || string !== String(string)) return false;
    const tmp = [...string].map(element => func(element))
    return tmp.includes(true);
}

export const hasKanji = string => hasFunc(isKanjiChar, string);
export const hasKatakana = string => hasFunc(isKatakanaChar, string);
export const hasHiragana = string => hasFunc(isHiraganaChar, string);
export const hasKana = string => hasFunc(isKanaChar, string);
export const hasJapanese = (string, details) => (details && details === true) ?
    { kana: hasKana(string), hiragana: hasHiragana(string), katakana: hasKatakana(string), kanji: hasKanji(string) }
    : (hasKana(string) || hasHiragana(string) || hasKatakana(string) || hasKanji(string));
export const hasKanjiNumber = str => hasFunc(char => KANJI_NUMBER.includes(char), str);
export const hasJoyoKanji = str => hasFunc(isJoyoKanjiChar, str);

export default {
    hasKanji,
    hasKatakana,
    hasHiragana,
    hasKana,
    hasJapanese,
    hasKanjiNumber,
    hasJoyoKanji
};
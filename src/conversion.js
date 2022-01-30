import { isHiraganaChar, isKatakanaChar } from './isFunction';
import { HIRAGANA_HEX, KATAKANA_HEX } from './constants';

export const toHiragana = str => [...str].map(char => (isKatakanaChar(char)) ? String.fromCharCode(char.charCodeAt(0) + (HIRAGANA_HEX - KATAKANA_HEX)) : char);
export const toKatakana = str => [...str].map(char => (isHiraganaChar(char)) ? String.fromCharCode(char.charCodeAt(0) + (KATAKANA_HEX - HIRAGANA_HEX)) : char);

export const toHalfWidth = str => [...str].map(char => {
    const c = char.charCodeAt(0);
    if (c === 12288)
        return String.fromCharCode(32);
    return (c > 65280 && c < 65375) ? String.fromCharCode(c - 65248) : String.fromCharCode(c);
}).join('');

export const toFullWidth = str => [...str].map(char => {
    const c = char.charCodeAt(0);
    if (c === 32)
        return String.fromCharCode(12288);
    return (c < 127) ? String.fromCharCode(c + 65248) : String.fromCharCode(c);
}).join('');

export default {
    toHiragana,
    toKatakana,
    toHalfWidth,
    toFullWidth
}
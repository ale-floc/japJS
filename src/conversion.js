import { isHiraganaChar, isKatakanaChar } from './isFunction';
import { HIRAGANA_HEX, KATAKANA_HEX } from './constants';

export const toHiragana = str => [...str].map(char => (isKatakanaChar(char)) ? String.fromCharCode(char.charCodeAt(0) + (HIRAGANA_HEX - KATAKANA_HEX)) : char);
export const toKatakana = str => [...str].map(char => (isHiraganaChar(char)) ? String.fromCharCode(char.charCodeAt(0) + (KATAKANA_HEX - HIRAGANA_HEX)) : char);

export default {
    toHiragana,
    toKatakana
}
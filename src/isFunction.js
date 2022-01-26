import { KANJI_NUMBER } from './constants';
import { hasKanji, hasKatakana, hasHiragana, hasKana } from './hasFunction';

export const isHiraganaChar = character => (character >= "\u3040" && character <= "\u309f");
export const isHiragana = str => (str && str.length) ? [...str].every(isHiraganaChar) : false;

export const isKatakanaChar = character => (character >= "\u30a0" && character <= "\u30ff");
export const isKatakana = str => (str && str.length) ? [...str].every(isKatakanaChar) : false;

export const isKanjiChar = character => (character >= "\u4e00" && character <= "\u9faf" || character >= "\u3400" && character <= "\u4dbf");
export const isKanji = str => (str && str.length) ? [...str].every(isKanjiChar) : false;

export const isKanaChar = character => (isKatakana(character) || isHiragana(character));
export const isKana = str => (str && str.length) ? [...str].every(isKanaChar) : false;

export const isJapaneseChar = character => isKanaChar(character) || isKanjiChar(character);
export const isJapanese = (string, details) => {
    if (!string || ![...string].every(isJapaneseChar))
        return false;
    return (details && details === true) ? { 
        kana: hasKana(string),
        hiragana: hasHiragana(string),
        katakana: hasKatakana(string),
        kanji: hasKanji(string)
    } : true;
}

export const isKanjiNumber = str => {
    if (!str || str !== String(str))
        return false;
    return (![...str].every(element => KANJI_NUMBER.includes(element))) ? false : true;
}

export default { 
    isHiragana, 
    isHiraganaChar, 
    isKatakana,
    isKatakanaChar, 
    isKanji,
    isKanjiChar,
    isKana,
    isKanaChar,
    isJapanese,
    isJapaneseChar,
    isKanjiNumber
};
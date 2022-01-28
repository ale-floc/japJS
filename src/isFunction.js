import { KANJI_NUMBER } from './constants';
import { hasKanji, hasKatakana, hasHiragana, hasKana } from './hasFunction';
import kanjiList from './data/kanji.json';

export const isHiraganaChar = char => (char >= "\u3040" && char <= "\u309f");
export const isHiragana = str => (str && str.length) ? [...str].every(isHiraganaChar) : false;

export const isKatakanaChar = char => (char >= "\u30a0" && char <= "\u30ff");
export const isKatakana = str => (str && str.length) ? [...str].every(isKatakanaChar) : false;

export const isKanjiChar = char => (char >= "\u4e00" && char <= "\u9faf" || char >= "\u3400" && char <= "\u4dbf");
export const isKanji = str => (str && str.length) ? [...str].every(isKanjiChar) : false;

export const isKanaChar = char => (isKatakana(char) || isHiragana(char));
export const isKana = str => (str && str.length) ? [...str].every(isKanaChar) : false;

export const isJapaneseChar = char => isKanaChar(char) || isKanjiChar(char);
export const isJapanese = (string, details) => {
    if (!string || ![...string].every(isJapaneseChar))
        return false;
    return (details && details === true) ? { 
        kana: hasKana(string),
        hiragana: hasHiragana(string),
        katakana: hasKatakana(string),
        kanji: hasKanji(string)
    } : true;
};

export const isKanjiNumber = str => {
    if (!str || str !== String(str))
        return false;
    return (![...str].every(element => KANJI_NUMBER.includes(element))) ? false : true;
}

export const isJoyoKanjiChar = char => kanjiList.filter(element => element.character === char).length ? true : false;
export const isJoyoKanji = str => (str && str.length) ? [...str].every(isJoyoKanjiChar) : false;


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
    isKanjiNumber,
    isJoyoKanjiChar,
    isJoyoKanji
};
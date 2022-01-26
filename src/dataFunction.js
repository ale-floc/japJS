import kanjiList from './data/kanji.json';

const getDetails = (kanji, category) => {
    if (!kanji || kanji.length > 1)
        return null;
    const details = kanjiList.filter(e => e.character === kanji);
    return (details && details[0] && details[0][category]) && details[0][category];
}

const getKanji = (kanji, details) => {
    if (!kanji || kanji.length > 1 || details === true)
        return null;
    if (!details) {
        const kanjiDefault = kanjiList.filter(e => e.character === kanji);
        return (kanjiDefault.length) ? kanjiDefault[0] : null;
    }
    if (details === "jlpt")
        return getDetails(kanji, "jlpt");
    if (details === "stroke")
        return getDetails(kanji, "stroke");
    if (details === "frequence")
        return getDetails(kanji, "frequence");
    if (details === "grade")
        return getDetails(kanji, "grade");
    return {
        ...(details && details.jlpt && { jlpt: getDetails(kanji, "jlpt") }),
        ...(details && details.stroke && { stroke: getDetails(kanji, "stroke") }),
        ...(details && details.frequence && { frequence: getDetails(kanji, "frequence") }),
        ...(details && details.grade && { grade: getDetails(kanji, "grade") })
    };
}

const getMultipleKanji = kanji => {
    const list = [];
    kanji.map(element => {
        const kanjiArray = getKanji(element, details);
        (kanjiArray) && list.push(kanjiArray)
    })
    return list;
}

export const kanjiDetails = (kanji, details) => {
    if (Array.isArray(kanji))
        return getMultipleKanji(kanji, details)
    return getKanji(kanji, details);
}

export default {
    kanjiDetails
};
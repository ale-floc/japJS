# JapJS

```javascript
import japJS from 'jap-js';
// or
import { isHiragana, hasKanji } from 'jap-js';
```

## API

### isHiragana
Takes a **string** and return **true** if the string is a hiragana

```javascript
japJS.isHiragana("あ"); // true
japJS.isHiragana("あいう"); // true
japJS.isHiragana("火"); // false
japJS.isHiragana("あい漢字"); // false
```

## 

### isKatakana
Takes a **string** and return **true** if the string is a katakana

```javascript
japJS.isKatakana("ア"); // true
japJS.isKatakana("アイウ"); // true
japJS.isKatakana("火"); // false
japJS.isKatakana("アイ漢字"); // false
```

## 

### isKana
Takes a **string** and return **true** if the string is a kana

```javascript
japJS.isKana("ア"); // true
japJS.isKana("あ"); // true
japJS.isKana("火"); // false
japJS.isKana("あア漢字"); // false
```

## 

### isKanji
Takes a **string** and return **true** if the string is a kanji

```javascript
japJS.isKanji("火"); // true
japJS.isKanji("漢字"); // true
japJS.isKanji("ア"); // false
japJS.isKanji("あ"); // false
japJS.isKanji("あイウ"); // false
japJS.isKanji("あイ漢字"); // false
```

## 

### isJapanese
Takes a **string** and return **true** if the string is japanese

```javascript
japJS.isJapanese("火"); // true
japJS.isJapanese("漢字"); // true
japJS.isJapanese("ア"); // true
japJS.isJapanese("あ"); // true
japJS.isJapanese("あイウ"); // true
japJS.isJapanese("あイ漢字"); // true
japJS.isJapanese("hello"); // false
japJS.isJapanese(123); // false
```

## 

### isKanjiNumber
Takes a **string** and return **true** if the string is a kanji number

```javascript
japJS.isKanjiNumber("一"); // true
japJS.isKanjiNumber("一五七"); // true
japJS.isKanjiNumber("三あ"); // false
japJS.isKanjiNumber("hello"); // false
japJS.isKanjiNumber(123); // false
```

## 
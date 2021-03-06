<p align="center">
<h1 align="center">JapJS</h1>
<p align="center">JapJS is a Javascript utility library for Japanese text converting, detecting and more.</p>

## Installation

```bash
npm install jap-js
```
```bash
yarn add jap-js
```

## Usage


```javascript
import japJS from 'jap-js';
// or
import { isHiragana, hasKanji } from 'jap-js';
```

## API

<details>
<summary><b style="font-size: 22px">toHiragana</b></summary>
<br>
<p>Take a string and return a string converted from katakana to hiragana</p>

```javascript
japJS.toHiragana("カ");
// か

japJS.toHiragana("hello カ 火");
// hello か 火
```
##

</details>

<details>
<summary><b style="font-size: 22px">toKatakana</b></summary>
<br>
<p>Take a string and return a string converted from hiragana to katakana</p>

```javascript
japJS.toKatakana("か");
// カ

japJS.toKatakana("hello か 火");
// hello カ 火
```
##
</details>


<details>
<summary><b style="font-size: 22px">kanjiDetails</b></summary>
<br>
<p>Takes one or more kanji and returns all the details of it</p>

```javascript
japJS.kanjiDetails("火") 
// { character: '火', freq: '574', grade: 1, jlpt: 5, stroke: 4...}

japJS.kanjiDetails("火", "jlpt") 
// 5

japJS.kanjiDetails(["火", "家"], { jlpt: true, grade: true })
// [ { jlpt: 5, grade: 2 }, { jlpt: 4, grade: 2 } ]
```
##
</details>

<details>
<summary><b style="font-size: 22px">isHiragana</b></summary>
<br>
<p>Takes a string and return true if the string is a hiragana</p>

```javascript
japJS.isHiragana("あう"); // true
japJS.isHiragana("火"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">isKatakana</b></summary>
<br>
<p>Takes a string and return true if the string is a katakana</p>

```javascript
japJS.isKatakana("アイウ"); // true
japJS.isKatakana("あ火"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">isKana</b></summary>
<br>
<p>Takes a string and return true if the string is a kana</p>

```javascript
japJS.isKana("アあ"); // true
japJS.isKana("あア漢字"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">isKanji</b></summary>
<br>
<p>Takes a string and return true if the string is a kanji</p>

```javascript
japJS.isKanji("火漢字"); // true
japJS.isKanji("ア"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">isJapanese</b></summary>
<br>
<p>Takes a string and return true if the string is a japanese</p>

```javascript
japJS.isJapanese("あイ漢字"); // true
japJS.isJapanese("hello"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">isJoyoKanji</b></summary>
<br>
<p>Takes a string and return true if every character of the string is a kanji on a list of 2,136 common characters : <a href="https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji">wiki</a></p>

```javascript
japJS.isJoyoKanji("漢字"); // true
japJS.isJoyoKanji("鮭"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">isKanjiNumber</b></summary>
<br>
<p>Takes a string and return true if the string is a kanji number</p>

```javascript
japJS.isKanjiNumber("一五七"); // true
japJS.isKanjiNumber("三あ"); // false
japJS.isKanjiNumber(123); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">hasHiragana</b></summary>
<br>
<p>Takes a string and return true if the string contains a hiragana</p>

```javascript
japJS.hasHiragana("あ"); // true
japJS.hasHiragana("ア"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">hasKatakana</b></summary>
<br>
<p>Takes a string and return true if the string contains a katakana</p>

```javascript
japJS.hasKatakana("ア"); // true
japJS.hasKatakana("あ"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">hasKana</b></summary>
<br>
<p>Takes a string and return true if the string contains a kana</p>

```javascript
japJS.hasKana("私はアルノです"); // true
japJS.hasKana("字"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">hasKanji</b></summary>
<br>
<p>Takes a string and return true if the string contains a kanji</p>

```javascript
japJS.hasKanji("私は猫です"); // true
japJS.hasKanji("アあ"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">hasKanjiNumber</b></summary>
<br>
<p>Takes a string and return true if the string contains a kanji number</p>

```javascript
japJS.hasKanjiNumber("あhello五"); // true
japJS.hasKanjiNumber("あhello"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">hasJapanese</b></summary>
<br>
<p>Takes a string and return true if the string contains japanese</p>

```javascript
japJS.hasJapanese("字hello"); // true
japJS.hasJapanese("hello"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">hasJoyoKanji</b></summary>
<br>
<p>Takes a string and return true if the string contains kanji on a list of 2,136 common characters : <a href="https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji">wiki</a></p>

```javascript
japJS.hasJoyoKanji("鮭漢字"); // true
japJS.hasJoyoKanji("鮭"); // false
```
##
</details>

<details>
<summary><b style="font-size: 22px">toHalfWidth</b></summary>
<br>
<p>Take a string and return a string converted from Full Width to Half Width : <a href="https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms">wiki</a></p>

```javascript
japJS.toHalfWidth("ｈｅｌｌｏ");
// hello

japJS.toHalfWidth("ｉ　ａｍ　ｈａｌｆ　ｗｉｄｔｈ　ｓｔｒｉｎｇ");
// i am half width string
```
##

</details>

<details>
<summary><b style="font-size: 22px">toFullWidth</b></summary>
<br>
<p>Take a string and return a string converted from Half Width to Full Width : <a href="https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms">wiki</a></p>

```javascript
japJS.toFullWidth("hello");
// ｈｅｌｌｏ

japJS.toFullWidth("i am half width string");
// ｉ　ａｍ　ｈａｌｆ　ｗｉｄｔｈ　ｓｔｒｉｎｇ
```
##
</details>

<details>
<summary><b style="font-size: 22px">getHiragana</b></summary>
<br>
<p>Take a string and return an array of hiragana containing in the string</p>

```javascript
japJS.getHiragana("あhello五");
// ['あ']

japJS.getHiragana("helloひらがな123");
// ['ひ', 'ら', 'が', 'な']
```
##
</details>

<details>
<summary><b style="font-size: 22px">getKatakana</b></summary>
<br>
<p>Take a string and return an array of katakana containing in the string</p>

```javascript
japJS.getKatakana("カタhello五");
// ['カ', 'タ']

japJS.getKatakana("helloカタカナ123");
// ['カ', 'タ', 'カ', 'ナ']
```
##
</details>
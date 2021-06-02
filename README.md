Convert [chinese-to-pinyin](https://www.npmjs.com/package/chinese-to-pinyin) to browser compatible module.

Simply hot-link to `https://patarapolw.github.io/pinyin/main.js`

```html
<script type="module">
    import { pinyin } from 'https://patarapolw.github.io/pinyin/main.js'
    console.log(pinyin(q, { toneToNumber: true, keepRest: true }))
</script>
```

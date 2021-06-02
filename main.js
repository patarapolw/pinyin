import pinyin from './_snowpack/pkg/chinese-to-pinyin.js'

if (typeof window !== 'undefined' && window.location) {
  const u = new URL(window.location.href)
  const q = u.searchParams.get('q')
  if (q) {
    document.getElementById('q').value = q
    document.getElementById('output').innerText = pinyin(q, { toneToNumber: true, keepRest: true })
  }
}

export { pinyin }

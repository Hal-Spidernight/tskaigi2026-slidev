---
# try also 'default' to start simple
theme: 'slidev-theme-hal'
# theme: ../theme
themeConfig:
  company: 株式会社LIXIL
  author: Hal
  logo: './images/tskaigi.svg'
  logoWidth: '180px'
  titleSize: "2.5rem"
  authorSize: "2rem"

# some information about your slides (markdown enabled)
title: |
  checker.tsにチキンレースを仕掛けてみた：
  型エラー(TS2589)が発生する境界線を求めて
info: |
  TSKaigi 2026で発表するスライドです
# apply UnoCSS classes to the current slide
class: 'text-center font-bold'
# https://sli.dev/features/drawing
drawings:
  persist: true
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: blur-transition
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 10min
---

---

## 本日のスライド

<script setup>
const base = import.meta.env.BASE_URL
</script>

<div class="pa-0 flex justify-center items-center">
  <div class="h-100">
    <img :src="`${base}images/qr.webp`" style="height:100%"/>
    <p class="text-center">Powered by <a href="https://sli.dev/" target="_blank">Slidev</a></p>
  </div>
</div>

---
src: ./pages/about-me.md
transition: fade
---

---
src: ./pages/intro.md
transition: fade
---

---
src: ./pages/walls-overview.md
transition: fade
---

---
src: ./pages/wall1-depth.md
transition: fade
---

---
src: ./pages/wall2-count.md
transition: fade
---

---
src: ./pages/wall3-tail.md
transition: fade
---

---
src: ./pages/binary-climbing.md
transition: fade
---

---
src: ./pages/wall4-tuple.md
transition: fade
---

---
src: ./pages/to-be-continued.md
transition: slide-up
---

---
level: 1
src: ./pages/section7.md
transition: fade
---

---

<script setup>
const base = import.meta.env.BASE_URL
</script>

<img v-drag="[629,307,286,194]" :src="`${base}images/end.webp`"/>

<SectionTitle title="ご清聴ありがとうございました！"/>

---
layout: default
---

## `checker.ts` に潜む「3つの壁」

`possibly infinite` と言われるが、実は **有限の閾値** で止めている。
壁は3つあり、それぞれ違う「方向」を監視している:

<section class="grid grid-cols-3 gap-4 mt-4">

  <article class="border-2 border-red-500 rounded-lg p-3 text-center">
    <header>
      <p class="text-3xl">⬇</p>
      <h3 class="text-red-500 font-bold">深く潜る</h3>
    </header>
    <p class="text-xs opacity-70">再帰スタックの深さ</p>
    <strong class="text-2xl font-bold text-red-500 block mt-1">100</strong>
    <p class="text-xs opacity-70">instantiationDepth</p>
  </article>

  <article class="border-2 border-blue-500 rounded-lg p-3 text-center">
    <header>
      <p class="text-3xl">⮕</p>
      <h3 class="text-blue-500 font-bold">横に広げる</h3>
    </header>
    <p class="text-xs opacity-70">1式の累計作業量</p>
    <strong class="text-2xl font-bold text-blue-500 block mt-1">500万</strong>
    <p class="text-xs opacity-70">instantiationCount</p>
  </article>

  <article class="border-2 border-green-600 rounded-lg p-3 text-center">
    <header>
      <p class="text-3xl">🔁</p>
      <h3 class="text-green-600 font-bold">ループで回す</h3>
    </header>
    <p class="text-xs opacity-70">末尾再帰の反復回数</p>
    <strong class="text-2xl font-bold text-green-600 block mt-1">1000</strong>
    <p class="text-xs opacity-70">tailCount</p>
  </article>

</section>

<p class="text-center mt-3 font-bold">
→ `checker.ts` にチキンレースを仕掛けて、3つの壁をひとつずつ叩きにいく
</p>

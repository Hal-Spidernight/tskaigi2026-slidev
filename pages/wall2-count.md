---
layout: default
---

## 第2の壁: `instantiationCount`

<dl class="grid grid-cols-2 gap-4 mt-4">

  <div class="border-l-4 border-blue-500 pl-4">
    <dt class="text-sm opacity-70">⮕ 何を測る?</dt>
    <dd class="text-lg font-bold mt-1">1式での累計インスタンス化回数</dd>
  </div>

  <div class="border-l-4 border-blue-500 pl-4">
    <dt class="text-sm opacity-70">🚧 天井</dt>
    <dd class="text-3xl font-bold mt-1 text-blue-500">500万</dd>
  </div>

  <div class="border-l-4 border-gray-400 pl-4">
    <dt class="text-sm opacity-70">🧪 実験で踏む場所</dt>
    <dd class="text-lg font-bold mt-1">SuperHeavyStep×11 で <b>524万</b></dd>
  </div>

  <div class="border-l-4 border-green-600 pl-4">
    <dt class="text-sm opacity-70">🛡️ 突破策</dt>
    <dd class="text-lg font-bold mt-1 text-green-600">Union を横に広げない<br/>(分配を多用しない)</dd>
  </div>

</dl>

<h4 class="mt-8">エラーを再現するコード</h4>

```ts
// 1要素 → Union 4枝 に分配する型
type SuperHeavyStep<T> = T extends any
  ? [[T,"A"],[T,"B"]] | [[T,"C"],[T,"D"]] | [[T,"E"],[T,"F"]] | [[T,"G"],[T,"H"]] : never;

type H0 = "start";                // 1枝
type Hn = SuperHeavyStep<Hₙ₋₁>;   // 前段 ×4 → H10 で 1,048,576枝(≒100万)
type H11 = SuperHeavyStep<H10>;   // 100万 × 内部コスト ≒ 524万 → TS2589
```

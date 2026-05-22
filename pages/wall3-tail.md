---
layout: default
---

## 第3の壁: `tailCount`

<dl class="grid grid-cols-2 gap-4 mt-4">

  <div class="border-l-4 border-green-600 pl-4">
    <dt class="text-sm opacity-70">🔁 何を測る?</dt>
    <dd class="text-lg font-bold mt-1">末尾再帰の反復回数<br/>(深さも幅も使わない)</dd>
  </div>

  <div class="border-l-4 border-green-600 pl-4">
    <dt class="text-sm opacity-70">🚧 天井</dt>
    <dd class="text-3xl font-bold mt-1 text-green-600">1000</dd>
  </div>

  <div class="border-l-4 border-gray-400 pl-4">
    <dt class="text-sm opacity-70">🧪 実験で踏む場所</dt>
    <dd class="text-lg font-bold mt-1">CountTo1000 で <b>1000回</b> で打ち止め</dd>
  </div>

  <div class="border-l-4 border-yellow-500 pl-4">
    <dt class="text-sm opacity-70">🛡️ 突破策</dt>
    <dd class="text-lg font-bold mt-1 text-yellow-600">1ループの仕事量を稼ぐ<br/>= <b>Binary Climbing</b></dd>
  </div>

</dl>

<h4 class="mt-10">エラーを再現するコード</h4>

```ts {all|3-5|7}
type CountTo1000<N extends any[]> = N["length"] extends 1001
  ? "Success"
  : CountTo1000<[...N, any]>;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^
//  そのまま末尾位置で呼ぶだけ → コンパイラがループに変換(スタック不要)

type Result = CountTo1000<[]>; // → TS2589 (1000回で打ち止め)
```

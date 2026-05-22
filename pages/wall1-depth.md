---
layout: default
---

## 第1の壁: `instantiationDepth`

<dl class="grid grid-cols-2 gap-4 mt-4">

  <div class="border-l-4 border-red-500 pl-4">
    <dt class="text-sm opacity-70">⬇ 何を測る?</dt>
    <dd class="text-lg font-bold mt-1">再帰スタックの深さ</dd>
  </div>

  <div class="border-l-4 border-red-500 pl-4">
    <dt class="text-sm opacity-70">🚧 天井</dt>
    <dd class="text-3xl font-bold mt-1 text-red-500">100</dd>
  </div>

  <div class="border-l-4 border-gray-400 pl-4">
    <dt class="text-sm opacity-70">🧪 実験で踏む場所</dt>
    <dd class="text-lg font-bold mt-1">DeepStack で <b>48ステップ</b> で天井</dd>
  </div>

  <div class="border-l-4 border-green-600 pl-4">
    <dt class="text-sm opacity-70">🛡️ 突破策</dt>
    <dd class="text-lg font-bold mt-1 text-green-600">交差型 `&` を避ける<br/>→ 末尾再帰でループ化</dd>
  </div>

</dl>

<h4 class="mt-10">エラーを再現するコード</h4>

```ts {all|3-5|7}
type DeepStack<N extends any[]> = N["length"] extends 48
  ? { done: true }
  : { step: N["length"] } & DeepStack<[...N, any]>;
//                       ^^^
//  交差型 & を間に挟む → 関数を抜けるまでスタックが積まれ続ける

type Result = DeepStack<[]>; // → TS2589 (48ステップで天井)
```

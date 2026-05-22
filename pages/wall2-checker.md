---
layout: default
---

## 第2の壁の正体: `checker.ts` の該当箇所

```ts {all|3-6|9-11}
// src/compiler/checker.ts — instantiateType (抜粋・簡略)
function instantiateType(type, mapper) {
  if (instantiationDepth === 100 || instantiationCount >= 5_000_000) {
    //                              ^^^ 累計 500万 でアウト → TS2589
    error(currentNode, Diagnostics.Type_instantiation_is_excessively_deep_and_possibly_infinite);
    return errorType;
  }
  totalInstantiationCount++;
  instantiationCount++;                // ← 関数呼び出しごとに +1 (戻しなし)
  // ...
}
```

- **「1式まるごと」の累計カウント** → デクリメントされない
- Union を `T extends any ? ... : never` で分配すると枝の数だけ呼ばれて爆発する

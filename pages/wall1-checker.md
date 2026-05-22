---
layout: default
---

## 第1の壁の正体: `checker.ts` の該当箇所

```ts {all|3-6|9-11}
// src/compiler/checker.ts — instantiateType (抜粋・簡略)
function instantiateType(type, mapper) {
  if (instantiationDepth === 100 || instantiationCount >= 5_000_000) {
    //                  ^^^ 100 で即アウト → TS2589
    error(currentNode, Diagnostics.Type_instantiation_is_excessively_deep_and_possibly_infinite);
    return errorType;
  }
  instantiationDepth++;                // ← 入口で +1
  const result = instantiateTypeWorker(type, mapper);
  instantiationDepth--;                // ← 出口で -1
  return result;
}
```

- **「関数を抜けるまで」が深さ** → 交差型 `&` で次の呼び出しを挟むと積み上がる
- 末尾再帰なら `instantiateTypeWorker` から戻ってデクリメントされるので深さは溜まらない

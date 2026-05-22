---
layout: default
---

## 第3の壁の正体: `checker.ts` の該当箇所

```ts {all|4-7|10-13}
// src/compiler/checker.ts — getConditionalType (抜粋・簡略)
function getConditionalType(root, mapper, ...) {
  let tailCount = 0;
  while (true) {
    if (tailCount === 1000) {
      //          ^^^ ループ 1000 回でアウト → TS2589
      error(currentNode, Diagnostics.Type_instantiation_is_excessively_deep_and_possibly_infinite);
      return errorType;
    }
    // ... 末尾再帰位置の Conditional Type なら ...
    root = nextRoot;            // ← 引数を更新して
    mapper = combineMapper(...);
    tailCount++;                // ← ループの「反復」として +1 (深さも幅もゼロ)
    continue;                   //    再帰呼び出しせず continue
  }
}
```

- **末尾位置の再帰だけがループに畳まれる** → スタックも分配も増えない
- そのぶん 1000回まで使える「丸ごと予算」になる → Binary Climbing の舞台

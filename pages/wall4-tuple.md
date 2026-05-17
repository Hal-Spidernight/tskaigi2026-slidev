---
layout: default
---

## …しかし、エディタの赤波線が消えない 👀

<div class="flex justify-center mt-4">
  <img src="/images/2799_sample.png" class="rounded shadow max-w-full" />
</div>

- TS2589 は消えた
- でも **別のエラー番号** が顔を出した — `ts(2799)`

---
layout: default
---

## 第4の壁: TS2799 — `createNormalizedTupleType`

```ts {all|2-3|4|7-9}
// checker.ts (v5.9.3)
if (isTupleType(type)) {
  const elements = getElementTypes(type);
  if (elements.length + expandedTypes.length >= 10_000) {
    error(
      currentNode,
      isPartOfTypeNode(currentNode!)
          ? Diagnostics.Type_produces_a_tuple_type_that_is_too_large_to_represent
          : Diagnostics.Expression_produces_a_tuple_type_that_is_too_large_to_represent,
    );
    return errorType;
  }
}
```

```ts
// BuildTuple の中で常に走っている処理
type BuildTuple<L, T, Acc> =
  /* ... */ : BuildTuple<L, [...T, ...T], [...Acc, ...T]>;
//                                        ^^^^^^^^^^^^^^ ← ここが上の条件に当てはまる
```

- 監視対象: **Variadicスプレッド** (`...A`) でタプルを展開する瞬間
- 閾値: **既存要素 + 新規要素 ≧ 10,000** (ハードコード)
- TS2589 は「計算コスト」の壁、TS2799 は **完成品の物理サイズ** の壁

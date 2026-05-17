<SectionTitle title="皆さんは TS2589 を見たことがありますか？"/>

---
layout: default
---

## どれくらい複雑になると、エラーは出るのか?

```text
Type instantiation is excessively deep and possibly infinite. ts(2589)
```

- 「`possibly infinite`」と言いつつ、実際は **有限の閾値** で止めている
- では、**どこで** 止めているのか?
- → `checker.ts` を読みながら、**境界線** を実験で叩き出してみる

→ 境界線 = ハードコードされた **3つの壁**

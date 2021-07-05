## クリックでツールチップを出すものを以下のサイトで追いながら作っていました。
[REFFECT](https://reffect.co.jp/react/react-tooltip)

### 疑問点
tooltip.jsxにおけるuseEffectの仕様の意図がわかりませんでした。これにした方が効率がいいのか、何か優れているところがあるのでしょうか。
テキスト通りに進めば（２）ですが、（１）でも処理は通りました！わざわざuseEffectで初回のレンダリング時に処理を走らせる理由がわかりませんでした。

### 考えたこと
useEffectじゃないとエラーになる、期待通りの処理が行われない場合を考えましたが、僕のコードでも実行できました。
僕が初学者なので、見やすい見にくいの問題でしょうか、

ところどころコメントアウトでホバー時のツールチップの処理を書いているので見にくいかと思いますが、よろしくお願いします。

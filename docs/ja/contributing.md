# コントリビューション

Nicasa サポートドキュメントの改善へのご協力を歓迎します！誤字の修正、新しいガイドの追加、既存コンテンツの改善など、どんな形でも助かります。

## 貢献の方法

### ドキュメントの改善
- 誤字や文法の誤りを修正する
- 分かりにくい説明を明確にする
- 不足している情報を追加する
- 古くなった内容を更新する
- 書式と可読性を改善する

### 新しいコンテンツ
- よくある問題のガイドを作成する
- チュートリアルや例を追加する
- ドキュメントを他の言語に翻訳する
- FAQ の項目を書く

### 技術的な貢献
- ビルドプロセスを改善する
- ドキュメントサイトに新機能を追加する
- デプロイワークフローの不具合を修正する

## はじめかた

### 前提条件
- Node.js 18 以降
- pnpm パッケージマネージャ
- Git

### 開発環境のセットアップ

1. GitHub で **リポジトリをフォーク** します
2. **フォークをクローン** します：
   ```bash
   git clone https://github.com/YOUR_USERNAME/nicasa-support.git
   cd nicasa-support
   ```
3. **依存関係をインストール** します：
   ```bash
   pnpm install
   ```
4. **開発サーバーを起動** します：
   ```bash
   pnpm docs:dev
   ```
5. ブラウザで `http://localhost:5173` を開きます

### 変更を加える

1. 変更用の新しいブランチを作成します：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. `docs/` 内のドキュメントファイルを編集します
3. サイトをビルドして変更を確認します：
   ```bash
   pnpm docs:build
   ```
4. 変更をコミットします：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 変更の提出

1. **ブランチをフォークにプッシュ** します：
   ```bash
   git push origin feature/your-feature-name
   ```
2. GitHub で **Pull Request を作成** します
3. **レビューを待ち**、フィードバックに対応します

## ガイドライン

### 文章スタイル
- 明確で簡潔な言葉を使う
- 可能な限り能動態で書く
- 包括的で歓迎的な表現を使う
- 一貫した書式を保つ
- 必要に応じてコード例を含める

### ファイル構成
- ドキュメントページは `docs/` に置く
- ガイドは `docs/guide/` に置く
- ファイル名は小文字とハイフンを使用：`my-new-guide.md`
- frontmatter は必須ではありませんが、メタデータに利用できます

### リンク
- 内部ドキュメントには相対リンクを使う
- 必要に応じて外部リソースへリンクする
- すべてのリンクが機能することを確認する

### 画像とアセット
- 画像は `docs/public/` またはそのサブディレクトリに置く
- 説明的なファイル名を使う
- ウェブ用に画像を最適化する（500KB 未満を推奨）

## 多言語対応

本サイトは 7 言語に対応しています：英語（`docs/`）、スペイン語（`es`）、簡体字中国語（`zh-CN`）、繁体字中国語（`zh-TW`）、日本語（`ja`）、ドイツ語（`de`）、フランス語（`fr`）。

- 各言語のページは `docs/<lang>/` に置き、ディレクトリ構成は英語版と一対一に対応させます
- 翻訳内の内部リンクには言語プレフィックスを付けます（例：`/ja/guide/usage`）
- ホームページの文言は `index.md` の `home:` frontmatter にあります
- 言語を追加する場合は、`docs/.vitepress/config.ts` の `STR`、`MD`、`locales` の 3 か所を同時に更新してください

## 行動規範

本プロジェクトは行動規範に従います。参加することにより、以下に同意したものとみなされます：
- 敬意と包括性を保つ
- 建設的なフィードバックに焦点を当てる
- 自分の誤りに責任を持つ

詳細は [CODE_OF_CONDUCT.md](https://github.com/nicasa-project/nicasa-support/blob/main/CODE_OF_CONDUCT.md) をご覧ください。

## 質問がありますか？

貢献についてご質問がある場合：
- 既存の [issues](https://github.com/nicasa-project/nicasa-support/issues) と [discussions](https://github.com/nicasa-project/nicasa-support/discussions) を確認してください
- 必要に応じて新しい issue を作成してください
- メンテナーにご連絡ください

Nicasa サポートドキュメントの改善にご協力いただきありがとうございます！🎉

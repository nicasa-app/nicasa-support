# 參與貢獻

我們歡迎你來改進 Nicasa 支援文件！無論是修正錯字、新增指南，還是優化現有內容，你的協助都很有價值。

## 貢獻方式

### 改進文件
- 修正錯字或語法錯誤
- 釐清含糊的說明
- 補充缺漏的資訊
- 更新過時的內容
- 改善排版與可讀性

### 新增內容
- 撰寫常見問題的指南
- 加入教學或範例
- 把文件翻譯成其他語言
- 撰寫常見問題條目

### 技術貢獻
- 改進建構流程
- 為文件站點加入新功能
- 修復部署工作流程中的問題

## 快速上手

### 前置需求
- Node.js 18 或更高版本
- pnpm 套件管理器
- Git

### 開發環境建置

1. 在 GitHub 上 **Fork 儲存庫**
2. **複製你的 fork**：
   ```bash
   git clone https://github.com/YOUR_USERNAME/nicasa-support.git
   cd nicasa-support
   ```
3. **安裝相依套件**：
   ```bash
   pnpm install
   ```
4. **啟動開發伺服器**：
   ```bash
   pnpm docs:dev
   ```
5. 在瀏覽器中開啟 `http://localhost:5173`

### 修改內容

1. 為你的改動建立新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 修改 `docs/` 下的文件檔案
3. 建構站點以檢驗改動：
   ```bash
   pnpm docs:build
   ```
4. 提交你的改動：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 提交改動

1. **推送你的分支**到你的 fork：
   ```bash
   git push origin feature/your-feature-name
   ```
2. 在 GitHub 上**建立 Pull Request**
3. **等待審查**並回應回饋

## 規範

### 寫作風格
- 使用清晰簡潔的語言
- 盡可能使用主動語態
- 保持包容與友善
- 使用一致的排版格式
- 在合適的地方附上程式碼範例

### 檔案結構
- 文件頁面放在 `docs/`
- 指南放在 `docs/guide/`
- 檔名使用小寫並以連字號連接：`my-new-guide.md`
- 不強制要求 frontmatter，但可用於中繼資料

### 連結
- 內部文件使用相對連結
- 在合適處連結到外部資源
- 確保所有連結可用

### 圖片與資源
- 圖片放在 `docs/public/` 或其子目錄中
- 使用有描述性的檔名
- 優化圖片大小（建議小於 500KB）

## 多語言

本站支援 7 種語言：英語（`docs/`）、西班牙語（`es`）、簡體中文（`zh-CN`）、繁體中文（`zh-TW`）、日語（`ja`）、德語（`de`）、法語（`fr`）。

- 每種語言的頁面放在 `docs/<lang>/`，目錄結構與英文版保持一一對應
- 譯文中的內部連結需帶語言前綴，例如 `/zh-TW/guide/usage`
- 首頁文案位於 `index.md` 的 `home:` frontmatter 中
- 新增語言時，請在 `docs/.vitepress/config.ts` 的 `STR`、`MD`、`locales` 三處同步加入

## 行為準則

本專案遵循行為準則。參與即表示你同意：
- 保持尊重與包容
- 聚焦建設性回饋
- 為自己的失誤承擔責任

詳情見 [CODE_OF_CONDUCT.md](https://github.com/nicasa-project/nicasa-support/blob/main/CODE_OF_CONDUCT.md)。

## 有疑問？

如果你對貢獻有疑問：
- 查看已有的 [issues](https://github.com/nicasa-project/nicasa-support/issues) 與 [discussions](https://github.com/nicasa-project/nicasa-support/discussions)
- 如有需要，新增一個 issue
- 聯絡維護者

感謝你協助改進 Nicasa 支援文件！🎉

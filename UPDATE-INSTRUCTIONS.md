# UPDATE INSTRUCTIONS — Remember to Prevent 修復更新包 / Fix Package

**Date 日期:** 2026-10-17
**Scope 範圍:** Deployment (GitHub Pages static export) + 繁體中文主標題修正 + Chapter 04 圖表/表格切換空白修復

---

## 1. 套件內容 / What's in this package

解壓縮後直接覆蓋到您的專案根目錄（保留相同相對路徑）。
Extract over your project root, keeping the same relative paths.

### 修改的檔案 / Modified files (8)

| 檔案 File | 修正內容 What changed |
|---|---|
| `next.config.ts` | 雙模式設定：預設 standalone（本地開發）；CI 設 `NEXT_OUTPUT=export` 時切換為 GitHub Pages 靜態匯出 |
| `package.json` | 新增 `build:export` 腳本（相依套件未變更，無需重新安裝） |
| `README.md` | 更新部署說明、技術棧說明與品質驗證紀錄 |
| `src/app/layout.tsx` | `metadataBase` 改為 `https://remember-to-prevent.github.io/`；JSON-LD `alternateName` 更新為「銘記歷史，防止重演 — 第一章」 |
| `src/components/rtp/hero.tsx` | 繁體中文主標題修正：謹記/以防 → **銘記歷史 / 防止重演**（維持兩行排版） |
| `src/components/rtp/range-chart.tsx` | 修正圖表↔表格切換後圖表空白的問題：圖表容器改為永久掛載，以 `hidden` class 隱藏（不再卸載 DOM 節點） |
| `src/components/rtp/theaters-map.tsx` | 同上——世界地圖的圖表↔表格切換採用相同修復模式 |
| `src/content/ui.ts` | 繁中 `hero.title` 與 `header.wordmark` 更新為「銘記歷史，防止重演」 |

### 新增的檔案 / Added files (1)

| 檔案 File | 用途 Purpose |
|---|---|
| `.github/workflows/deploy.yml` | GitHub Actions 部署流程：lint 驗證 → 靜態匯出建置 → 產物驗證（斷言 `out/index.html`、`out/_next` 資產、`favicon.svg` 存在）→ 發佈至 GitHub Pages |

---

## 2. ⚠️ 必須手動刪除的檔案 / File you MUST delete manually

壓縮檔無法刪除檔案，請務必手動刪除以下檔案：

```
src/app/api/route.ts
```

**原因 Reason:** 此檔案是未使用的範本 API route（"Hello, world!"），與 `output: "export"` 靜態匯出不相容——若保留，GitHub Pages 建置會失敗。它未被網站任何程式碼引用，刪除不影響任何功能。

如果 `src/app/api/` 資料夾因此變空，可一併刪除資料夾。
If the `src/app/api/` folder becomes empty, you may remove the folder too.

---

## 3. 套用步驟 / How to apply

1. 解壓縮本壓縮檔，將所有檔案覆蓋到專案根目錄（路徑完全對應）。
   Extract the archive and overwrite files at your project root.
2. **刪除 `src/app/api/route.ts`**（見上節）。
   **Delete `src/app/api/route.ts`** (see section above).
3. 確認 `.github/workflows/deploy.yml` 位於正確位置（`.github` 是隱藏資料夾，`ls -a` 可確認）。
   Verify `.github/workflows/deploy.yml` is in place (`.github` is a hidden folder).
4. 相依套件未變更——不需要修改 lockfile。
   Dependencies unchanged — no lockfile changes needed.
5. Commit 並 push 到 GitHub。Push 到 `main` 後 GitHub Actions 會自動建置並部署。
   Commit and push. Pushing to `main` triggers the deploy workflow automatically.

### 首次部署 GitHub Pages / First-time Pages setup

- GitHub 儲存庫 → **Settings → Pages → Source: GitHub Actions**（一次性設定）。
- Repo → **Settings → Pages → Source: GitHub Actions** (one-time setup).
- 綠色（成功）的 workflow run 即代表網站已發佈——流程內建產物驗證步驟，會在發佈前確認靜態檔案確實存在。
- A green workflow run proves the site was published — the pipeline asserts the exported artifacts exist before deploying.

---

## 4. 已驗證項目 / What was verified

- `NEXT_OUTPUT=export bun run build:export` 建置成功；`out/index.html`（約 560 KB）、271 個 `_next` 資產、favicon、og-image、robots.txt 皆確認存在。
- 靜態匯出後以本地伺服器實測：繁中主標題、圖表↔表格三次循環切換（每次 canvas 重新繪製正常）、地圖切換、導覽錨點、頁尾——全部通過，零主控台錯誤。
- 行動版（375px）與桌面版（1280px）、EN 與繁中雙語皆通過 E2E 驗證。

---

## 5. 未測試事項（誠實聲明）/ Honest outstanding items

- GitHub Actions 的實際執行與正式網站上線，需待您 push 後才能確認。
- 自訂網域 `remember-to-prevent.com` 尚未啟用（DNS/CNAME 步驟已寫在 README）。
- 9 個引用來源網址對自動化檢查回應 403（防爬蟲），需以瀏覽器人工確認。

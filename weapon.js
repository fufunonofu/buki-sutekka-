<script>
window.onload = () => {
  // ==== ブキデータ ====
  const weaponsByCategory = {
    "シューター": [
      ".52ガロン", ".52ガロンデコ", ".96ガロン", ".96ガロンデコ",
      "H3リールガン", "H3リールガンD", "L3リールガン", "L3リールガンD",
      "N-ZAP85", "N-ZAP89", "もみじシューター", "わかばシューター",
      "オクタシューターレプリカ", "オーダーシューターレプリカ",
      "シャープマーカー", "シャープマーカーネオ",
      "ジェットスイーパー", "ジェットスイーパーカスタム",
      "スプラシューター", "スプラシューターコラボ",
      "スペースシューター", "スペースシューターコラボ",
      "ヒーローシューターレプリカ", "プライムシューター", "プライムシューターコラボ",
      "プロモデラーMG", "プロモデラーRG", "ボトルガイザー", "ボトルガイザーフォイル",
      "ボールドマーカー", "ボールドマーカーネオ", "ジェットスイーパーCOBR",
      "H3リールガンSNAK", "プロモデラー彩", ".96ガロン爪",
      "L3リールガン箔", "シャープマーカーGECK", "プライムシューターFRZN", "スプラシューター煌"
    ],
    "ローラー": [
      "オーダーローラーレプリカ", "カーボンローラー", "カーボンローラーデコ",
      "スプラローラー", "スプラローラーコラボ", "ダイナモローラー", "ダイナモローラーテスラ",
      "ワイドローラー", "ワイドローラーコラボ", "ヴァリアブルローラー", "ヴァリアブルローラーフォイル",
      "ワイドローラー惑", "ダイナモローラー冥", "カーボンローラーANGL"
    ],
    "チャージャー": [
      "4Kスコープカスタム", "14式竹筒銃・乙", "14式竹筒銃・甲",
      "R-PEN_5B", "R-PEN_5H", "オーダーチャージャーレプリカ",
      "スクイックリンα", "スクイックリンβ", "スプラスコープ", "スプラスコープコラボ",
      "スプラチャージャー", "スプラチャージャーコラボ", "ソイチューバー", "ソイチューバーカスタム",
      "リッター4K", "リッター4Kカスタム", "4Kスコープ", "スプラチャージャーFRST", "スプラスコープFRST"
    ],
    "ブラスター": [
      "Rブラスターエリートデコ", "S-BLAST91", "S-BLAST92", "オーダーブラスターレプリカ",
      "クラッシュブラスター", "クラッシュブラスターネオ", "ノヴァブラスター", "ノヴァブラスターネオ",
      "ホットブラスター", "ホットブラスターカスタム", "ラピッドブラスター", "ラピッドブラスターデコ",
      "ロングブラスター", "ロングブラスターカスタム", "Rブラスターエリート", "RブラスターエリートWNTR",
      "ホットブラスター艶"
    ],
    "スピナー": [
      "スプラスピナー", "スプラスピナーコラボ", "ノーチラス47", "ノーチラス79",
      "ハイドラント", "ハイドラントカスタム", "バレルスピナー", "バレルスピナーデコ",
      "イグザミナー", "イグザミナー・ヒュー", "オーダースピナーレプリカ", "クーゲルシュライバー",
      "クーゲルシュライバーヒュー", "ハイドラント圧", "スプラスピナーPYTN"
    ],
    "マニューバー": [
      "オーダーマニューバーレプリカ", "ガエンFF", "ガエンFFカスタム",
      "クアッドホッパーブラック", "クアッドホッパーホワイト", "ケルビン525", "ケルビン525デコ",
      "スパッタリー", "スパッタリーヒュー", "スプラマニューバー", "スプラマニューバーコラボ",
      "デュアルスイーパー", "デュアルスイーパーカスタム", "デュアルスイーパー蹄",
      "スパッタリーOWL", "スプラマニューバー耀"
    ],
    "ワイパー": [
      "オーダーワイパーレプリカ", "ジムワイパー", "ジムワイパーヒュー", "デンタルワイパースミ",
      "デンタルワイパーミント", "ドライブワイパー", "ドライブワイパーデコ", "ジムワイパー封",
      "ドライブワイパーRUST"
    ],
    "ストリンガー": [
      "フルイドVカスタム", "LACT-450", "LACT-450デコ", "オーダーストリンガーレプリカ",
      "トライストリンガー", "トライストリンガーコラボ", "フルイドV", "トライストリンガー燈",
      "LACT-450MILK"
    ],
    "シェルター": [
      "24式張替傘・乙", "24式張替傘・甲", "オーダーシェルターレプリカ", "キャンピングシェルター",
      "キャンピングシェルターソレーラ", "スパイガジェット", "スパイガジェットソレーラ",
      "パラシェルター", "パラシェルターソレーラ", "スパイガジェット繚", "キャンピングシェルターCREM"
    ],
    "フデ": [
      "パブロ", "パブロヒュー", "フィンセント", "フィンセントヒュー",
      "ホクサイ", "ホクサイヒュー", "オーダーブラシレプリカ", "フィンセントBRNZ", "ホクサイ彗"
    ],
    "スロッシャー": [
      "エクスプロッシャー", "エクスプロッシャーカスタム", "オーダースロッシャーレプリカ",
      "オーバーフロッシャー", "オーバーフロッシャーデコ", "スクリュースロッシャー", "スクリュースロッシャーネオ",
      "バケットスロッシャー", "バケットスロッシャーデコ", "ヒッセン", "ヒッセンヒュー",
      "モップリン", "モップリンD", "モップリン角", "ヒッセンASH"
    ]
  };

  // ==== ロジック部分 ====
  const weaponListEl = document.getElementById("weapon-list");
  const progressEl = document.getElementById("progress");
  let saved = JSON.parse(localStorage.getItem("stickers") || "{}");
  let currentFilter = "all";

  function updateProgress() {
    let total = 0, got = 0;
    for (const list of Object.values(weaponsByCategory)) {
      total += list.length;
      for (const name of list) if (saved[name]) got++;
    }
    const percent = total ? Math.round((got / total) * 100) : 0;
    progressEl.textContent = `進捗: ${got}/${total} (${percent}%)`;
  }

  function renderList() {
    weaponListEl.innerHTML = "";
    for (const [category, list] of Object.entries(weaponsByCategory)) {
      const h2 = document.createElement("h2");
      h2.textContent = category;
      weaponListEl.appendChild(h2);

      const container = document.createElement("div");
      container.className = "category";

      for (const name of list) {
        const isChecked = !!saved[name];
        if (currentFilter === "unchecked" && isChecked) continue;

        const div = document.createElement("div");
        div.className = "weapon";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isChecked;
        checkbox.addEventListener("change", () => {
          saved[name] = checkbox.checked;
          localStorage.setItem("stickers", JSON.stringify(saved));
          updateProgress();
          renderList();
        });

        const label = document.createElement("span");
        label.textContent = name;

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
      }

      weaponListEl.appendChild(container);
    }
  }

  document.querySelectorAll(".filter-btns button")?.forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-filter");
      renderList();
    });
  });

  updateProgress();
  renderList();
};
</script>


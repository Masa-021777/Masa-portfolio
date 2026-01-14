const worksData = {
    puligfish: {
        title: "PuligFish",
        video: "",
        appeal: [
            "シンプルな操作で直感的に楽しめる「引き寄せアクション」を軸に設計しました。",
            "ボス戦ではHPに応じて部位が段階的に破壊され、進行状況が視覚的に分かるようにしています。",
            "機能ごとにManagerを分離し、プレイヤースクリプトの肥大化を防ぎながら、仕様変更やバグ修正がしやすい構成を意識して実装しました。",
            "前回制作での反省を活かし、仕様をシンプルに保つことで完成度を優先した制作を行いました。"
        ],
        role: "プレイヤー操作、ゲームロジック全般、ボス挙動、シーン遷移、UI、スコア・サウンド周り",
        info: {
            platform: "Windows Android",
            language: "C#",
            environment: "Visual Studio",
            members: "2人",
            period: "3ヶ月"
        }
    },

    magicdefense: {
        title: "MagicDefense",
        video: "",
        appeal: [
            "配置型ディフェンスゲームにおける敵進行・攻撃判定・ウェーブ管理などのロジックを実装しました。",
            "複数オブジェクトを扱うため、管理クラスを用いてUI更新とゲーム進行が同期するように設計しました。"
        ],
        role: "ゲームロジック全般、UI制御",
        info: {
            platform: "Windows Android",
            language: "C# / Unity",
            environment: "Unity / Visual Studio",
            members: "個人制作",
            period: "2ヶ月"
        }
    },

    MagnetGame: {
        title: "じしゃくんの大冒険(現在制作中)",
        video: "",
        appeal: [
            "磁石のN極・S極を活かしたステージギミックの設計を担当しました。",
            "プレイヤーの進行を意識したレベル設計・動線計画を行いました。",
            "チュートリアルの流れや操作導線を考慮してステージ構成を提案しました。"
        ],
        role: "ゲームロジック、レベルデザイン、ギミック実装",
        info: {
            platform: "Windows Android",
            language: "C# / Unity",
            environment: "Unity / Visual Studio / Github",
            members: "4人",
            period: "3ヶ月"
        }
    }
};

// モーダル本体
const modalBody = document.getElementById("workModalBody");

document.querySelectorAll("[data-work]").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.dataset.work;
        const work = worksData[key];

        modalBody.innerHTML = `
            <div class="container-fluid">
                <div class="row g-4">

                    <div class="col-md-7">
                        <div class="ratio ratio-16x9 mb-3">
                            ${
                                work.video
                                ? `<video src="${work.video}" controls></video>`
                                : `<div class="bg-dark text-white d-flex align-items-center justify-content-center" style="height:100%">
                                       動画準備中
                                   </div>`
                            }
                        </div>
                    </div>

                    <div class="col-md-5">
                        <h5 class="fw-bold mb-2">${work.title}</h5>

                        <h6 class="fw-bold">アピールポイント</h6>
                        <ul>
                            ${work.appeal.map(a => `<li>${a}</li>`).join("")}
                        </ul>

                        <h6 class="fw-bold mt-3">担当箇所</h6>
                        <p>${work.role}</p>

                        <table class="table table-sm table-bordered mt-3">
                            <tbody>
                                <tr><th>プラットフォーム</th><td>${work.info.platform}</td></tr>
                                <tr><th>使用言語</th><td>${work.info.language}</td></tr>
                                <tr><th>開発環境</th><td>${work.info.environment}</td></tr>
                                <tr><th>制作人数</th><td>${work.info.members}</td></tr>
                                <tr><th>制作期間</th><td>${work.info.period}</td></tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        `;
    });
});

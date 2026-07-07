// リッチテキストの1片。
// - string        … 通常のテキスト片（CJK では inline-block チャンクとして折り返し制御）
// - { honey }     … ハニー色で灯すテキスト片
// - { br }        … レスポンシブ改行（mobile: スマホのみ / desktop: PC のみ）
export type Seg = string | { honey: string } | { br: "mobile" | "desktop" };

export interface ShowcaseItem {
  alt: string;
  kicker: string;
  title: Seg[];
  body: string;
  points: string[];
}

export interface LabeledItem {
  title: string;
  body: string;
}

export interface Dict {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    twDescription: string;
  };
  hero: {
    title: Seg[];
    subtitle: Seg[];
    timerAlt: string;
  };
  showcaseSection: {
    eyebrow: string;
    title: Seg[];
    items: ShowcaseItem[]; // 2件（実画面の accent は Landing 側の設定と index で対応）
  };
  env: {
    eyebrow: string;
    title: Seg[];
    desc: Seg[];
    labels: string[]; // 7件（背景の img/accent と index で対応）
    altTemplate: string; // "{label}" を差し込む
  };
  perks: {
    eyebrow: string;
    title: Seg[];
    desc: Seg[];
    items: LabeledItem[]; // 4件
  };
  steps: {
    eyebrow: string;
    title: Seg[];
    items: LabeledItem[]; // 3件
  };
  cta: {
    title: Seg[];
    body: Seg[];
  };
  footer: {
    privacy: string;
    terms: string;
    contact: string;
  };
  iconAlt: string;
  comingSoon: string; // 未リリースのストアボタンに付ける「準備中」ラベル
}

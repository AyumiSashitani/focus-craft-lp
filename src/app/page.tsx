import Landing from "@/components/Landing";
import { dictionaries } from "@/i18n/dictionaries";

// 初回訪問の自動言語判定（静的配信のためクライアントで実施）。
// - fc_lang Cookie があればそれを優先（手動選択を尊重）
// - なければ navigator.language から en/zh/ko を推定
// - ja 以外ならサブパスへ置換（履歴を汚さない location.replace）
// クローラや JS 無効環境では素の日本語（/）が表示される。
const autoDetectScript = `(function(){try{
var m=document.cookie.match(/(?:^|; )fc_lang=([^;]+)/);
var t=m?decodeURIComponent(m[1]):null;
if(!t){var n=(navigator.language||"").toLowerCase();
t=n.indexOf("en")===0?"en":n.indexOf("zh")===0?"zh":n.indexOf("ko")===0?"ko":"ja";}
if(t==="en"||t==="zh"||t==="ko"){location.replace("/"+t);}
}catch(e){}})();`;

// ルート（/）は日本語。
export default function Page() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: autoDetectScript }} />
      <Landing dict={dictionaries.ja} locale="ja" />
    </>
  );
}

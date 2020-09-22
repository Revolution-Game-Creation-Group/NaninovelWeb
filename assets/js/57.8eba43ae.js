(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{536:function(a,t,e){"use strict";e.r(t);var s=e(42),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"選択肢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#選択肢"}},[a._v("#")]),a._v(" 選択肢")]),a._v(" "),e("p",[a._v("この機能は、ユーザーにいくつかの選択肢を提示し、ユーザーの選択に応じてスクリプトの実行を再ルーティングできます。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/023502e43b35caa706c88fd9ab32003d.png",alt:"Choices"}})]),a._v(" "),e("p",[e("a",{attrs:{href:"/api/#choice",target:"_blank"}},[e("code",[a._v("@choice")])]),a._v(" コマンドに続けて選択肢の詳細を記述し、任意で選択肢に追加するnaninovelスクリプトの "),e("code",[a._v("goto")]),a._v(" パスを記述します:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; テキストを表示し、すぐに選択肢を表示してスクリプトの実行を停止。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; このスクリプトの実行を続けるかそれとも、...？[skipInput]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Continue from the next line"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Continue from the specified label"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Labelname")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Load another from start"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("AnotherScript")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Load another from label"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("AnotherScript.LabelName")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),e("p",[e("code",[a._v("goto")]),a._v(" パラメータの値は、ユーザーが対応する選択肢を選択したときに再ルーティングするパスです。次の形式で指定します:"),e("em",[a._v("ScriptName")]),a._v("."),e("em",[a._v("LabelName")]),a._v(" 。ラベル名を省略すると、指定したスクリプトが最初から再生されます。スクリプト名を省略すると、現在再生されているスクリプトのラベルを参照します:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `Script001` というnaninovel スクリプトをロードし、最初から実行。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("goto:Script001")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 上記に加えて、`AfterStorm` ラベルから実行を開始。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("goto:Script001.AfterStorm")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 現在実行中のスクリプトの `Epilogue` ラベルへジャンプする。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("goto:.Epilogue")]),a._v("\n")])])]),e("p",[e("code",[a._v("goto")]),a._v("パラメータが指定されていない場合、現在のスクリプトの次の行から実行を継続します。")]),a._v(" "),e("p",[e("a",{attrs:{href:"/api/#choice",target:"_blank"}},[e("code",[a._v("@choice")])]),a._v(" コマンドを処理するために、選択肢ハンドラアクターが使用されます。 "),e("code",[a._v("Naninovel -> Resources -> Choice Handlers")]),a._v(" コンテキストメニューから選択肢マネージャーを使用して、選択肢ハンドラーの追加、編集、削除ができます。")]),a._v(" "),e("p",[a._v("選択肢ハンドラーの挙動はコンテキストメニュー "),e("code",[a._v("Naninovel -> Configuration -> Choice Handlers")]),a._v(" から設定できます。可能なオプションについては "),e("RouterLink",{attrs:{to:"/ja/guide/configuration.html#choice-handlers"}},[a._v("コンフィグガイド")]),a._v(" をご覧ください。")],1),a._v(" "),e("h2",{attrs:{id:"選択ボタン"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#選択ボタン"}},[a._v("#")]),a._v(" 選択ボタン")]),a._v(" "),e("p",[e("a",{attrs:{href:"/ja/api/#choice",target:"_blank"}},[e("code",[a._v("@choice")])]),a._v(' コマンドでは、 "Resources" フォルダーからの相対パスを指定した任意の '),e("code",[a._v("button")]),a._v(" パラメーターを使用できます。これは選択肢オブジェクトを表すカスタムプレハブへのパスです。")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ButtonArea")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" button:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MapButtons/Home")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("-300,-300")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".HomeScene")])])]),a._v("\n")])])]),e("p",[a._v("— ここでは、配置をサポートする選択ハンドラーを使用して、即興マップ上の任意のポイントを表します。ここで "),e("code",[a._v("button")]),a._v(" パラメーターは、画像で覆ったボタンで構成されるプレハブを指します。プレハブは  "),e("code",[a._v("Assets/Resources/MapButtons/Home.prefab")]),a._v(" に保存されています。")]),a._v(" "),e("p",[a._v("テンプレートから選択ボタンプレハブを作成するには、コンテキストメニューで "),e("code",[a._v("Create -> Naninovel -> Choice Button")]),a._v(" アセットを使用します。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/c2bd4abaa0275f7cdd37c56fd2ff0dec.png",alt:""}})]),a._v(" "),e("p",[a._v("必ず "),e("strong",[a._v('"Resources" フォルダーにカスタム選択ボタンを保存')]),a._v(" してください。そうしないとリクエストされた際に読み込めません。")]),a._v(" "),e("p",[e("a",{attrs:{href:"/ja/api/#choice",target:"_blank"}},[e("code",[a._v("@choice")])]),a._v(" コマンドの "),e("code",[a._v("button")]),a._v(" パラメーターが指定されていない場合、デフォルトのボタンプレハブが使用されます。")]),a._v(" "),e("p",[a._v("選択肢のテキストに別の種類のテキストコンポーネント(例えばTMProなど)を使用したい場合、選択ボタンコンポーネントの "),e("code",[a._v("On Summary Text Changed")]),a._v(" "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity イベント"),e("OutboundLink")],1),a._v(" を使用してください。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/8810c51b336bfd653efcde591fe1c41f.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"buttonlist-選択肢ハンドラー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buttonlist-選択肢ハンドラー"}},[a._v("#")]),a._v(" ButtonList 選択肢ハンドラー")]),a._v(" "),e("p",[a._v("ボタンリストハンドラーはデフォルトで使用されます。水平レイアウトパネル内に選択ボタンを保存し、 "),e("a",{attrs:{href:"/ja/api/#choice",target:"_blank"}},[e("code",[a._v("@choice")])]),a._v(" コマンドの "),e("code",[a._v("pos")]),a._v(" パラメーターは無視します。")]),a._v(" "),e("h2",{attrs:{id:"buttonarea-選択肢ハンドラー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buttonarea-選択肢ハンドラー"}},[a._v("#")]),a._v(" ButtonArea 選択肢ハンドラー")]),a._v(" "),e("p",[a._v("ボタンリストとは異なり、ボタンエリアは特定のレイアウトを強制せず、追加された選択ボタンの位置を "),e("code",[a._v("pos")]),a._v(" パラメーターで手動で設定できます。たとえば次の例は、選択コマンドとボタンエリアハンドラーでインタラクティブマップを作成する方法の1つです:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# Map")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Map")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hidePrinter")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ButtonArea")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" button:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MapButtons/Home")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("-300,-300")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".HomeScene")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ButtonArea")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" button:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MapButtons/Shop")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("300,200")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".ShopScene")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# HomeScene")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Home")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Home, sweet home!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Map")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# ShopScene")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Shop")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Don't forget about cucumbers!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Map")])])]),a._v("\n")])])]),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/cNRNgk5HhKQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"選択肢ハンドラーの追加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#選択肢ハンドラーの追加"}},[a._v("#")]),a._v(" 選択肢ハンドラーの追加")]),a._v(" "),e("p",[a._v("組み込みテンプレートからカスタム選択肢ハンドラーを追加するか、新しいハンドラーを最初から作成できます。例として、組み込みの "),e("code",[a._v("ButtonArea")]),a._v(" テンプレートをカスタマイズしてみましょう。")]),a._v(" "),e("p",[a._v("コンテキストメニューの "),e("code",[a._v("Create -> Naninovel -> Choice Handler -> ButtonArea")]),a._v(" アセットを使用してボタンエリアハンドラーをNaninovelパッケージ以外の場所に作成します。例えば "),e("code",[a._v("Assets/ChoiceHandlers")]),a._v(" などです。")]),a._v(" "),e("p",[a._v("ハンドラーを編集します: フォント、テクスチャの変更、アニメーションの追加など。利用可能なUI構築ツールの詳細については、"),e("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.ugui@latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity ドキュメント"),e("OutboundLink")],1),a._v("をご覧ください。")]),a._v(" "),e("p",[a._v("エディターのコンテキストメニューから "),e("code",[a._v("Naninovel -> Resources -> Choice Handlers")]),a._v(" へアクセスし、選択ハンドラーマネージャーGUIを使用して、ハンドラーをエンジンリソースに公開します。  "),e("code",[a._v("+")]),a._v(" （プラス）ボタンで新しいレコードを追加し、アクターID（プレハブ名とは異なる場合があります）を入力し、レコードをダブルクリックしてアクター設定を開きます。ハンドラープレハブを"),e("code",[a._v("Resource")]),a._v(" フィールドにドラッグアンドドロップします。")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/cb3a0ff7f22b22cec6546acb388719fc.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v("これで "),e("a",{attrs:{href:"/ja/api/#choice",target:"_blank"}},[e("code",[a._v("@choice")])]),a._v(" の "),e("code",[a._v("handler")]),a._v(" パラメーターにIDを指定して、新しい選択肢ハンドラーを利用できます。")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Choice summary text."')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MyNewHandler")])])]),a._v("\n")])])]),e("p",[e("code",[a._v("IChoiceHandlerActor")]),a._v(" インターフェイスを手動で実装することで、選択肢ハンドラを最初から作成することもできます。詳細は、"),e("RouterLink",{attrs:{to:"/ja/guide/custom-actor-implementations.html"}},[a._v("カスタムアクターの実装")]),a._v(" のガイドを参照してください。")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);
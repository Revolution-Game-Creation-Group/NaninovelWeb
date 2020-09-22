(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{367:function(a,t,e){"use strict";e.r(t);var r=e(42),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"キャラクター"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#キャラクター"}},[a._v("#")]),a._v(" キャラクター")]),a._v(" "),e("p",[a._v("キャラクターアクターはシーンの中で"),e("RouterLink",{attrs:{to:"/ja/guide/backgrounds.html"}},[a._v("背景")]),a._v(" の上に存在するアクターです。")],1),a._v(" "),e("p",[a._v("キャラクターアクターは、名前、外観、可視性、および形状（位置、回転、スケール）および視線の向きで定義されます。外観、可視性、変形、および視線の向きを時間をかけて変化させることもできます。")]),a._v(" "),e("p",[a._v("キャラクターの動きはコンテキストメニューの "),e("code",[a._v("Naninovel -> Configuration AM-> Characters")]),a._v(" で設定できます。利用可能なオプションについては "),e("RouterLink",{attrs:{to:"/ja/guide/configuration.html#characters"}},[a._v("コンフィグガイド")]),a._v(" をご覧ください。キャラクターのリソースマネージャーはコンテキストメニューの "),e("code",[a._v("Naninovel -> Resources -> Characters")]),a._v(" からアクセスできます。")],1),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/c8a4f7f987621831b4a2ecb3145a4a07.png",alt:"Add Character"}})]),a._v(" "),e("p",[a._v("キャラクターや外観が大量にありエディターメニューから割り当てるのが大変な場合は、"),e("code",[a._v("Resources/Naninovel/Characters")]),a._v(' フォルダーに、対応するアクターIDのフォルダでグループ分けしてドロップすることもできます。たとえば、 "Kohaku" IDを持つキャラクターアクターの外観を追加するには、テクスチャ（スプライト）を '),e("code",[a._v("Resources/Naninovel/Characters/Kohaku")]),a._v(" フォルダーに保存すると、自動的にスクリプトで使用できるようになります。")]),a._v(" "),e("p",[a._v("必要に応じて、外観リソースをサブフォルダで整理できます。 その場合、naninovelスクリプトで参照するにはスラッシュ ("),e("code",[a._v("/")]),a._v(") を使用します。 たとえば、"),e("code",[a._v("Resources/Naninovel/Characters/Kohaku/Casual/Angry")]),a._v(" に保存された外観テクスチャは、 "),e("code",[a._v("Casual/Angry")]),a._v(" でスクリプトから参照できます。")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ja/guide/resource-providers.html#addressable"}},[a._v("addressable asset system")]),a._v(' を使用して手動でリソースを公開することもできます。アセットを公開するには、使用するパスと同じアドレスを "Resources/" の部分を除いて、上記の方法で割り当てます。例えば、"Happy" の外観を "Kohaku" キャラクターで公開するには, 次のアドレスにテクスチャアセットを割り当てます: '),e("code",[a._v("Naninovel/Characters/Kohaku/Happy")]),a._v(". addressable 機能はデフォルトではエディターで使用できないことに注意してください。リソースプロバイダーのコンフィグメニューで "),e("code",[a._v("Enable Addressable In Editor")]),a._v(" プロパティを有効にすることで許可できます。")],1),a._v(" "),e("p",[a._v("naninovel スクリプトでは、キャラクターは基本的に "),e("a",{attrs:{href:"/ja/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(" コマンドで操作します:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `Sora` という名前のキャラクターをデフォルトの外観で表示。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sora")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 同様に、外観に `Happy` を設定。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sora.Happy")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 上記と同じですが、キャラクターを画面の左端から45％、下端から10％の位置に配置します。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; また、左を向かせます。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sora.Happy")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" look:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("left")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("45,10")])])]),a._v("\n")])])]),e("h2",{attrs:{id:"ポーズ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ポーズ"}},[a._v("#")]),a._v(" ポーズ")]),a._v(" "),e("p",[a._v("各キャラクターは名前の付いたステート（ポーズ）を指定できる "),e("code",[a._v("Poses")]),a._v(" プロパティを持っています。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/5b022d32eddb3e721ed036c96f662f5d.png",alt:""}})]),a._v(" "),e("p",[a._v("ポーズ名を "),e("a",{attrs:{href:"/ja/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(" コマンドの外観として使用すると、コマンドパラメーターで個別に指定する代わりに、ポーズステートで指定されたすべてのパラメーターを一度に適用できます。")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `SuperAngry` ポーズが `Kohaku` キャラクターに定義されているとして、")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; ポーズステートで指定されたすべてのパラメータを適用します。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.SuperAngry")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 上記を3秒かけて `DropFade` トランジションで表示します。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.SuperAngry")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" transition:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("DropFade")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("3")])])]),a._v("\n")])])]),e("p",[a._v("ポーズを外観として使用する場合でも、個々のパラメータは上書きできます。例：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `SuperAngry` ポーズが `Kohaku` キャラクターに定義されているとして、")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; ポーズステートで指定されたすべてのパラメータを色味を除いて適用します。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 色味はコマンドで上書きします。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.SuperAngry")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" tint:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("#ff45cb")])])]),a._v("\n")])])]),e("h2",{attrs:{id:"表示名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表示名"}},[a._v("#")]),a._v(" 表示名")]),a._v(" "),e("p",[a._v("キャラクター設定では、特定のキャラクターの "),e("code",[a._v("Display Name")]),a._v(" を設定できます。 設定すると、キャラクターのIDではなく、プリンター名ラベルのUIに表示名が表示されます これにより、スペースや特殊文字（IDでは不可）を含むキャラクター名を使用できます。")]),a._v(" "),e("p",[a._v("ローカライズするには、"),e("a",{attrs:{href:"/ja/guide/managed-text"}},[a._v("テキスト管理")]),a._v(' で "CharacterNames" を使用します。このドキュメントは、テキスト管理リソースの生成タスクを実行すると自動的に作成されます。"CharacterNames" ドキュメントの値は、オリジナルロケールの場合、キャラクターメタデータに設定された値を上書きしません。')]),a._v(" "),e("p",[a._v("naninovelスクリプトでは、表示名をカスタム変数と紐付け、ゲーム全体で動的に変更することができます。表示名を紐付けるには、キャラクターコンフィグメニューでカスタム変数の名前を中括弧で囲み指定します。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/9743061df462bd809afc45bff20bbb6d.png",alt:""}})]),a._v(" "),e("p",[a._v("これでスクリプトで変数の値を変更できます。これにより、表示名も変更されます:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('PlayerName="Mistery')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('Man"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Player: ...")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('PlayerName="Dr.')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('Stein"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Player: You can call me Dr. Stein.")]),a._v("\n")])])]),e("p",[a._v("名前の紐付け機能を使うと、 "),e("a",{attrs:{href:"/ja/api/#input",target:"_blank"}},[e("code",[a._v("@input")])]),a._v(" コマンドでプレイヤーに表示名を入力させることもできます:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@input")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("PlayerName")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" summary:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Choose your name."')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Player: You can call me "),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{PlayerName}")]),a._v(".")]),a._v("\n")])])]),e("h2",{attrs:{id:"メッセージカラー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#メッセージカラー"}},[a._v("#")]),a._v(" メッセージカラー")]),a._v(" "),e("p",[a._v("キャラクターコンフィグで "),e("code",[a._v("Use Character Color")]),a._v(" が有効だと、表示テキストと名前ラベルを指定した色に変更できます。対応するキャラクターIDが "),e("a",{attrs:{href:"/ja/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v(" コマンドか一般テキストで指定されている場合に適応されます。")]),a._v(" "),e("p",[a._v("以下の動画で表示名とメッセージカラーの使い方を解説しています。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/u5B5s-X2Bw0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"アバターテクスチャ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#アバターテクスチャ"}},[a._v("#")]),a._v(" アバターテクスチャ")]),a._v(" "),e("p",[e("a",{attrs:{href:"/ja/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(" コマンドの "),e("code",[a._v("avatar")]),a._v(" パラメーターを使って、キャラクターにアバターテクスチャを設定できます。アバターは、キャラクターに紐付けられたテキストメッセージを表示するときに、対応できるテキストプリンターで表示されます。現在、 "),e("code",[a._v("Wide")]),a._v(" と "),e("code",[a._v("Chat")]),a._v(" のテキストプリンターのみがアバター機能をサポートしています。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/83c091c08846fa1cab8764a8d4dddeda.png",alt:""}})]),a._v(" "),e("p",[a._v("任意のアバターを使用するには、まずアバターリソースに追加し、名前を付ける必要があります。キャラクターコンフィグメニューの "),e("code",[a._v("Avatar Resources")]),a._v(" プロパティで行うことができます。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/5a0f10d174aa75ed87da1b472567e40b.png",alt:""}})]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("通知")]),a._v(" "),e("p",[a._v("アバター名は任意に設定することができ、既存のキャラクターIDや外観を含める必要はありません。アバターをキャラクターに関連付けて自動的に表示したい場合には必要です。")])]),a._v(" "),e("p",[a._v("これで、次のように特定のアバターテクスチャを表示できます。:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharacaterId")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" avatar:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("AvatarName")])])]),a._v("\n")])])]),e("p",[a._v("キャラクターにデフォルトのアバターを設定するには、アバターテクスチャリソースの名前を "),e("code",[a._v("CharacterID/Default")]),a._v(" にしてください。例えば、ID "),e("code",[a._v("Kohaku")]),a._v(" のキャラクターにデフォルトのアバターを設定するには、アバターリソースに "),e("code",[a._v("Kohaku/Default")]),a._v(" という名前を付けます。")]),a._v(" "),e("p",[a._v("アバターを特定のキャラクターの外観に紐付けることもできます。これにより、キャラクターの外観が変わると、アバターも自動的に変更されます。そのためにはアバターリソースの名前を次の形式にします: "),e("code",[a._v("CharacterID/CharacterAppearance")]),a._v("。この "),e("code",[a._v("CharacterAppearance")]),a._v(" はアバターリソースをマップする外観の名前です。")]),a._v(" "),e("p",[e("strong",[a._v("アバターはキャラクターの外観と直接繋がっておらず")]),a._v(' シーンにキャラクターを表示する方法ではないことに注意してください。キャラクターのリソースマネージャーで設定された外観は、シーン内での実際のキャラクター表示です。アバターは独立した機能で、対応しているテキストプリンターに任意の画像を"挿入"するものです。')]),a._v(" "),e("p",[e("a",{attrs:{href:"/ja/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(" コマンドの "),e("code",[a._v("visible")]),a._v(" パラメータを "),e("code",[a._v("false")]),a._v(" に設定することで、キャラクターのアバターのみをテキストプリンター内に表示しキャラクター自体は非表示にすることができます。例:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharacaterId")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" visible:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n")])])]),e("p",[a._v("キャラクター自体を非表示にしたままでアバターを常に変更したい場合は、キャラクターの設定メニューで "),e("code",[a._v("Auto Show On Modify")]),a._v(" を無効にすることを検討してください。無効にすると、非表示にするときに "),e("code",[a._v("visible:false")]),a._v(" を指定してキャラクターのパラメーターを変更する必要はありません。")]),a._v(" "),e("h2",{attrs:{id:"話者の強調"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#話者の強調"}},[a._v("#")]),a._v(" 話者の強調")]),a._v(" "),e("p",[a._v("キャラクターコンフィグで有効にすると、最後に表示されたメッセージによって話しているキャラクターを色付けします。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/gobowgagdyE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"口パク"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#口パク"}},[a._v("#")]),a._v(" 口パク")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ja/guide/characters.html#一般キャラクター"}},[a._v("一般")]),a._v(" と "),e("RouterLink",{attrs:{to:"/ja/guide/characters.html#live2d-キャラクター"}},[a._v("Live2D")]),a._v(' のキャラクター実装では、いわゆる "口パク" を利用できます。イベントを送ることで、表示メッセージを発しているキャラクターの口パクアニメーションを動作させることが出来ます。')],1),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/fx_YS2ZQGHI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ja/guide/voicing.html#自動アテレコ"}},[a._v("自動アテレコ")]),a._v(" 機能が有効になっていると、口パクイベントはボイスオーバーによって起動します。それ以外の場合は、表示テキストメッセージによってイベントがアクティブになります。後者の場合、手動で口パクを開始または停止したい場合があると思います（句読点のときに口パクアニメーションを停止する時など）。その場合は、"),e("a",{attrs:{href:"/ja/api/#lipsync",target:"_blank"}},[e("code",[a._v("@lipSync")])]),a._v(" コマンドを使用してください。")],1),a._v(" "),e("p",[a._v("口パクを設定する方法について詳しくは、 "),e("RouterLink",{attrs:{to:"/ja/guide/characters.html#一般キャラクター"}},[a._v("一般")]),a._v(" と "),e("RouterLink",{attrs:{to:"/ja/guide/characters.html#live2d-キャラクター"}},[a._v("Live2D")]),a._v(" のキャラクター実装についてのドキュメントをご覧ください。")],1),a._v(" "),e("h2",{attrs:{id:"プリンターのリンク"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#プリンターのリンク"}},[a._v("#")]),a._v(" プリンターのリンク")]),a._v(" "),e("p",[e("code",[a._v("Linked Printer")]),a._v(" プロパティを使用して、 "),e("RouterLink",{attrs:{to:"/ja/guide/text-printers.html"}},[a._v("テキストプリンター")]),a._v(" をキャラクターに関連付けることができます。")],1),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/50ca6b39cd7f708158678339244b1dc4.png",alt:""}})]),a._v(" "),e("p",[a._v("リンクされていると、そのキャラクターが発しているメッセージと関連付けられたプリンターが自動的に使用されます。")]),a._v(" "),e("p",[e("a",{attrs:{href:"/ja/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v(" コマンド（一般テキストを表示するときに内部で使用される）は、関連付けられたプリンターをデフォルト状態にし、他の可視プリンターをデフォルトで非表示にします。プリンターがキャラクターにリンクされている場合、print コマンドは、今表示されているデフォルトのテキストプリンターを自動的に変更し、対応するキャラクターに関連付けられたテキストを表示します。プリンタアクターのコンフィグメニューで "),e("code",[a._v("Auto Default")]),a._v(" プロパティを無効にすることで、この動作を防ぐことができます。無効になっている場合は、 "),e("a",{attrs:{href:"/ja/api/#printer",target:"_blank"}},[e("code",[a._v("@printer")])]),a._v(" コマンドで、手動でデフォルトのプリンターの表示/非表示を切り替える必要があります。")]),a._v(" "),e("h2",{attrs:{id:"スプライトキャラクター"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#スプライトキャラクター"}},[a._v("#")]),a._v(" スプライトキャラクター")]),a._v(" "),e("p",[a._v("キャラクターアクターのスプライト実装は最も一般的で簡単です。一連の "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/Sprites",target:"_blank",rel:"noopener noreferrer"}},[a._v("スプライト"),e("OutboundLink")],1),a._v(" アセットを使用して、キャラクターの外観を表します。"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/ImportingTextures",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unityでサポートされている形式"),e("OutboundLink")],1),a._v(" の画像（テクスチャ）をスプライトのソースにできます。")]),a._v(" "),e("h2",{attrs:{id:"分解スプライトキャラクター"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分解スプライトキャラクター"}},[a._v("#")]),a._v(" 分解スプライトキャラクター")]),a._v(" "),e("p",[a._v("オープンソースの "),e("a",{attrs:{href:"https://github.com/Elringus/SpriteDicing",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpriteDicing"),e("OutboundLink")],1),a._v(" パッケージを使用した "),e("code",[a._v("DicedSpriteCharacter")]),a._v(" 実装で、キャラクタースプライトのテクスチャを再利用することで、ビルド時の容量とテクスチャーのメモリを大きく削減することができます。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/af08d141e7a08b6a8e2ef60c07332bbf.png",alt:"Sprite Dicing"}})]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-ui.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unityパッケージマネージャー"),e("OutboundLink")],1),a._v(' でパッケージをインストールします: パッケージマネージャーを開く (Window -> Package Manager)、 "+" ボタンをクリック、 "Add package from git URL" を選択、入力欄に '),e("code",[a._v("https://github.com/Elringus/SpriteDicing.git#package")]),a._v(' と入力し、 "Add" をクリック。')]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/b54e9daa9a483d9bf7f74f0e94b2d38a.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v("キャラクターの外観を含む "),e("code",[a._v("DicedSpriteAtlas")]),a._v(" アセットは、分解スプライトキャラクターのリソースとして使用されます。各外観は、アトラスに含まれている分解スプライトに名前でマップされます。")]),a._v(" "),e("p",[a._v("分解スプライトキャラクターのメタデータプロパティの一部（たとえば、ユニットあたりのピクセル数、ピボット）はアトラスアセットによって制御されます。一方、キャラクターコンフィグの値は、実際のスプライトを表示するためのレンダーテクスチャに適用されます。アトラスプロパティを変更するときは、変更を有効にするため再ビルドしてください。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/3765726bd326bb7a8a03a653f458cd3d.png",alt:""}})]),a._v(" "),e("p",[a._v("以下のビデオガイドでは、分解スプライトアトラスの作成と構成、作成したアトラスに基づく新しい分解キャラクターの追加、naninovelスクリプトからのキャラクターの制御について説明しています。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/6PdOAOsnhio",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"キャラクター差分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#キャラクター差分"}},[a._v("#")]),a._v(" キャラクター差分")]),a._v(" "),e("p",[a._v("レイヤー実装で複数のスプライト（レイヤー）からキャラクターを作成し、実行時にnaninovelスクリプトで、個別またはグループごとに切り替えることができます。")]),a._v(" "),e("p",[a._v("キャラクター差分プレハブの作成は、コンテキストメニューの "),e("code",[a._v("Create -> Naninovel -> Character -> Layered")]),a._v(" で行います。"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/EditingInPrefabMode.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("プレハブ編集モード"),e("OutboundLink")],1),a._v(" に入りレイヤーを作成します。デフォルトでは、いくつかのレイヤーとグループが作成されます。そのまま使用するか、削除して独自のものを追加できます。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-SpriteRenderer.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("スプライトレンダラー"),e("OutboundLink")],1),a._v(" コンポーネントを持つルートプレハブオブジェクトの子ゲームオブジェクトは、"),e("em",[a._v("レイヤー")]),a._v(" と見なされます。他のオブジェクトは "),e("em",[a._v("グループ")]),a._v(" と見なされます。グループ内にレイヤーを配置すると、naninovelスクリプトの一つの式であるレイヤーを選択したり、グループ内のすべてのレイヤーを無効/有効にしたりできます（詳細は後ほど）。")]),a._v(" "),e("p",[a._v("一部のレイヤーをデフォルトで非表示にするには、（ゲームオブジェクトではなく）スプライトレンダラーコンポーネントを無効にします。")]),a._v(" "),e("p",[a._v("プレハブの上に表示される白いフレームは、実行時にレンダーテクスチャにレンダリングされるアクターキャンバスを示しています。テクスチャメモリの浪費を防ぎ、かつアンカーを正しく機能させるため、レイヤーとグループを移動して、フレーム内の空白を最小限に抑えてください。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/4ff103c27858ac9671ba3b94ab1ade20.png",alt:""}})]),a._v(" "),e("p",[a._v("ブジェクトを拡大縮小して、アクターのデフォルトサイズを微調整できます。")]),a._v(" "),e("p",[a._v("キャラクター差分を Photoshop で作成している場合は、Unity の "),e("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.2d.psdimporter@3.0/manual/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("PSD Importer package"),e("OutboundLink")],1),a._v(" をご検討ください。これは、レイヤーとポジションを全て保持したキャラクタープレハブを自動的に生成します。レイヤー階層を保持するには、インポート設定で "),e("code",[a._v("Use Layer Grouping")]),a._v(" オプションを必ず有効にしてください。")]),a._v(" "),e("p",[a._v("必ず作成した差分プレハブをキャラクターリソース ("),e("code",[a._v("Naninovel -> Resources -> Characters")]),a._v(') に追加してください。 "Naninovel.LayeredCharacter" 実装を選択し、リソースレコード設定時に "Resource" フィールドへプレハブをドロップしてください。')]),a._v(" "),e("p",[a._v("差分キャラクターを naninovel スクリプトで操作するには、他のキャラクター実装と同じように "),e("a",{attrs:{href:"/ja/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(" コマンドを使います。違いは外観の設定の仕方のみです: 単一のIDの代わりに "),e("em",[a._v("レイヤー構成式")]),a._v(" を使います。式には3つの種類があります:")]),a._v(" "),e("ul",[e("li",[a._v("グループ内の1つのレイヤーを有効にする: "),e("code",[a._v("group>layer")])]),a._v(" "),e("li",[a._v("レイヤーを有効にする: "),e("code",[a._v("group+layer")])]),a._v(" "),e("li",[a._v("レイヤーを無効にする: "),e("code",[a._v("group-layer")])])]),a._v(" "),e("p",[a._v('たとえば、 "Miho" のキャラクターを考えてみましょう。 "Miho" は "Body" グループを持っていて "Uniform"、 "SportSuit"、 "Pajama" の3つのレイヤーが含まれています。"Uniform" レイヤーを有効にして他のレイヤーをすべて無効にするには、次のコマンドを記述します:')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Miho.Body>Uniform")])])]),a._v("\n")])])]),e("p",[a._v('グループ内の他のレイヤーに影響を与えずにレイヤーを有効または無効にするには、 ">" の代わりに "+" と "-" をそれぞれ使用します。また、複数の構成式をコンマで分割して指定することもできます:')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; メガネを有効に、帽子を無効にし、感情は "Cool" を選択。')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.Head/Accessories+BlackGlasses,Head-Hat,Head/Emotions>Cool")])])]),a._v("\n")])])]),e("p",[a._v("グループ外のレイヤー（ルートプレハブの子オブジェクト）を選択するには、グループの部分をスキップします。例:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; "Halo" レイヤーオブジェクトがルートプレハブの下にあり、それを無効にする。')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.-Halo")])])]),a._v("\n")])])]),e("p",[a._v("構成式でレイヤー名を省略することで、グループ内のすべてのレイヤーに適用させることもできます（さらに、select式を使用すると隣接レイヤーに適用されます）:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; "Body/Decoration" グループ内のレイヤーを全て無効にする。')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.Body/Decoration-")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 存在する全てのレイヤーを有効にする。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.+")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; それぞれ複数のレイヤーを含んだ `Poses/Light` と `Poses/Dark` グループがあるとして、")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `Light` グループ内の全てのスプライトを有効に、 `Dark` グループの全てのレイヤーを無効にする。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.Poses/Light>")])])]),a._v("\n")])])]),e("p",[a._v("上記の式は、ターゲットグループの直下の子だけでなく、基になるグループに含まれるすべてのレイヤーに再帰的に影響します。")]),a._v(" "),e("p",[a._v("外観が指定されていない場合（たとえば、事前に外観を設定せずに "),e("code",[a._v("@char CharId")]),a._v("）、デフォルトの外観が使用されます。キャラクター差分のデフォルトの外観は、レイヤー化されたプレハブのエディターでの見え方と同じです。")]),a._v(" "),e("p",[a._v("以下の動画は、キャラクター差分を設定してnaninovelコマンドで操作するデモです。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/Bl3kXrg8tiI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("通知")]),a._v(" "),e("p",[a._v("動画で表示されている "),e("code",[a._v("@char Miho.Shoes>")]),a._v(' コマンドは実際には "Shoes"グループ（すべての隣接グループを無効にしています）を選択し、非表示にしていません。グループを非表示にする正しいコマンドは '),e("code",[a._v("@char Miho.Shoes-")]),a._v(" です。")])]),a._v(" "),e("p",[e("code",[a._v("Layered Actor Behaviour")]),a._v(" コンポーネントの "),e("code",[a._v("Composition Map")]),a._v(" プロパティから、コンポジション式をキーにマップすることが可能です:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/ede5cde3548a3187aa714d3e140750ba.png",alt:""}})]),a._v(" "),e("p",[a._v("— これでキーを使用して、レイヤー化されたアクターの外観を指定できます:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `Body>Uniform,Hair/Back>Straight,Hair/Front>Straight,Shoes>Grey` を適用する。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Miho.Uniform")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `Hair/Back>Straight,Hair/Front>Straight` を適用する。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Miho.StraightHair")])])]),a._v("\n")])])]),e("p",[a._v('キャラクター差分プレハブを編集する際は、マップレコードを右クリックして "Preview Composition" を選択すると、マップされた構成式をプレビューできます。')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/9fb0aeccf4f33245d9f975592ee86dbc.gif",alt:""}})]),a._v(" "),e("p",[a._v("レイヤーオブジェクトは実行時にUnityカメラで直接レンダリングされないことに注意してください。代わりに、コンポジション（外観）が一時的なレンダリングテクスチャに変わるたびに1回レンダリングされ、Naninovelカメラから見えるカスタムメッシュに送られます。この設定は、半透明のオーバードローを防ぎ、トランジションアニメーション効果をサポートするために必要です。")]),a._v(" "),e("h2",{attrs:{id:"一般キャラクター"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一般キャラクター"}},[a._v("#")]),a._v(" 一般キャラクター")]),a._v(" "),e("p",[a._v("一般キャラクターは、最も柔軟なキャラクターアクターの実装です。これは、ルートオブジェクトに紐付けられた  "),e("code",[a._v("CharacterActorBehaviour")]),a._v(" コンポーネントを追加済みのプレハブをベースにしています。外観の変更と他のすべてのキャラクターパラメータは、"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unityイベント"),e("OutboundLink")],1),a._v(" としてルーティングされ、下層のオブジェクトの動作を任意に実装できます。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/9f799f4152782afb6ab86d3c494f4cc4.png",alt:""}})]),a._v(" "),e("p",[a._v("テンプレートから一般キャラクタープレハブを作成するには、コンテキストメニューから "),e("code",[a._v("Create -> Naninovel -> Character -> Generic")]),a._v(" を使用してください。")]),a._v(" "),e("p",[a._v("一般キャラクターで口パク機能を利用するには、 "),e("code",[a._v("CharacterActorBehaviour")]),a._v(" コンポーネントの "),e("code",[a._v("On Started Speaking")]),a._v(" と "),e("code",[a._v("On Finished Speaking")]),a._v(" Unityイベントを使用してください。そのキャラクターが表示メッセージを話始める時（またはメッセージが完全に表示された時）イベントが呼び出され、そのキャラクターの口パクアニメーションの開始や停止などのカスタムロジックをトリガーできます。これはUIの "),e("code",[a._v("On Show")]),a._v(" イベントと "),e("code",[a._v("On Hide")]),a._v(" イベントの仕組みに似ています。 "),e("RouterLink",{attrs:{to:"/ja/guide/user-interface.html#カスタムUIの追加"}},[a._v("UIカスタマイズガイド")]),a._v("でカスタムアニメーションの駆動に使用する方法を見つけてください。")],1),a._v(" "),e("p",[a._v("次の動画は、3Dリグモデルを一般キャラクターとして設定し、"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-AnimatorController.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Animator"),e("OutboundLink")],1),a._v(" コンポーネントでリグアニメーションの外観の変更をルーティングする例です。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/HPxhR0I1u2Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("p",[a._v("Unityの "),e("code",[a._v("Animator")]),a._v(" コンポーネントは、ゲームオブジェクトが同じフレームで有効化/無効化されると、 "),e("code",[a._v("SetTrigger")]),a._v(" の登録に失敗する可能性があります。"),e("code",[a._v("GameObject.SetActive")]),a._v(" で可視状態を変更する場合（上記のチュートリアルで示しています）は、代わりにレンダラーで子オブジェクトを有効/無効にすることを検討してください。")]),a._v(" "),e("h2",{attrs:{id:"live2d-キャラクター"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#live2d-キャラクター"}},[a._v("#")]),a._v(" Live2D キャラクター")]),a._v(" "),e("p",[a._v("Live2D キャラクターの実装は、"),e("a",{attrs:{href:"https://www.live2d.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Live2D Cubism"),e("OutboundLink")],1),a._v(" 2Dモデリングとアニメーションソフトで制作されたアセットを使用します。")]),a._v(" "),e("p",[a._v("利用するには、始めに "),e("a",{attrs:{href:"https://live2d.github.io/#unity",target:"_blank",rel:"noopener noreferrer"}},[a._v("Live2D Cubism SDK for Unity"),e("OutboundLink")],1),a._v(" をインストールする必要があります。インストール方法や使い方は、公式のLive2Dドキュメントをご覧ください。")]),a._v(" "),e("p",[a._v("その後 "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelLive2D/raw/master/NaninovelLive2D.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("Live2D 拡張パッケージ"),e("OutboundLink")],1),a._v(" をダウンロードします。")]),a._v(" "),e("p",[a._v("実装に使用される Live2D モデルプレハブには、ルートオブジェクトに紐付けられた "),e("code",[a._v("Live2DController")]),a._v(" コンポーネントが必要です。外観の変更は、"),e("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Animator.SetTrigger.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("SetTrigger"),e("OutboundLink")],1),a._v(' コマンドの外観がトリガー名であるため、アニメーターコンポーネントにルーティングされます。たとえば、Live2Dキャラクタープレハブ "Kaori" があり、"Surprise" という名前のトリガーを呼び出したい場合は、次のコマンドを使用します:')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kaori.Surprise")])])]),a._v("\n")])])]),e("p",[a._v('上記のコマンドは、プレハブに紐付けられたアニメーターコントローラーで "Surprise" 引数を指定して '),e("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Animator.SetTrigger.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("SetTrigger"),e("OutboundLink")],1),a._v(" を呼び出すのみです。基礎となる "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/Animator",target:"_blank",rel:"noopener noreferrer"}},[a._v("animator"),e("OutboundLink")],1),a._v(" ステートマシンは自分で作成する必要があります。")]),a._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[a._v("警告")]),a._v(" "),e("p",[a._v("Cubism SDK for Unity 最新バージョンは "),e("code",[a._v("Animator")]),a._v(" コンポーネントと直接連携しています。これまで Cubism 2.x で使われていた式とポーズは "),e("a",{attrs:{href:"https://docs.live2d.com/cubism-sdk-tutorials/blendexpression",target:"_blank",rel:"noopener noreferrer"}},[a._v("非推奨"),e("OutboundLink")],1),a._v(" となっており、Live2D用 Naninovel 拡張機能ではサポートしていません。")])]),a._v(" "),e("p",[a._v("Live2Dの "),e("code",[a._v("CubismLookController")]),a._v(" および "),e("code",[a._v("CubismMouthController")]),a._v(" コンポーネントが存在し、Live2Dモデルプレハブに設定されている場合、"),e("code",[a._v("Live2DController")]),a._v(" で任意にキャラクターの視線の向きと口のアニメーション（口パク機能）を制御できます。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/498fe948bc5cbdb4dfc5ebc5437ae6b4.png",alt:""}})]),a._v(" "),e("p",[a._v("設定方法の詳細は Live2D ドキュメントの "),e("a",{attrs:{href:"https://docs.live2d.com/cubism-sdk-tutorials/lookat",target:"_blank",rel:"noopener noreferrer"}},[a._v("視線の追従"),e("OutboundLink")],1),a._v(" と "),e("a",{attrs:{href:"https://docs.live2d.com/cubism-sdk-tutorials/lipsync",target:"_blank",rel:"noopener noreferrer"}},[a._v("口パク"),e("OutboundLink")],1),a._v(" を参照してください。")]),a._v(" "),e("p",[e("code",[a._v("Live2DController")]),a._v(' は Live2DモデルをUnityにインポートするときに自動的に作成されるLive2D モデルプレハブ内に、 "Drawables" ゲームオブジェクトがあると想定しています。コントローラは '),e("a",{attrs:{href:"/ja/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(' コマンドの "scale" パラメータに沿って、実行時にこのゲームオブジェクトをスケーリングします。したがって、エディターで設定したローカルスケールの値は無視されます。Live2D プレハブで初期スケールを設定するには、'),e("a",{attrs:{href:"https://youtu.be/rw_Z69z0pAg?t=353",target:"_blank",rel:"noopener noreferrer"}},[a._v("この動画のように"),e("OutboundLink")],1),a._v(" 親ゲームオブジェクトのスケーリングを使用してください。")]),a._v(" "),e("p",[a._v('Live2D拡張機能がインストールされると、Naninovelコンフィグメニューに "Live2D" 項目が次のように表示されます:')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/435a4824f0ce0dd8c9c3f29d457bab24.png",alt:""}})]),a._v(" "),e("p",[a._v('レンダーレイヤーは、Live2D プレハブに適用するレイヤーと、プレハブをレンダリングするカメラに使用するカリングマスクを指定します。 レンダーカメラフィールドでは、レンダーカメラのカスタムセットアップを使用できます（デフォルトのレンダーカメラは、パッケージの "Prefabs" フォルダー内に格納されています）。カメラオフセットを使用すると、レンダリングされたプレハブからレンダリングカメラをオフセットできます。このパラメーターを使うとカメラに対してすべてのLive2Dプレハブを均一に配置できます。')]),a._v(" "),e("p",[a._v("次のビデオガイドでは、 Cubism Editor からの Live2D キャラクターのエクポートプレハブの設定、簡単なアニメーターステートマシンの作成、naninovelスクリプトでのキャラクターの操作について解説しています。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/rw_Z69z0pAg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("div",{staticClass:"custom-block example"},[e("p",{staticClass:"custom-block-title"},[a._v("例")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Elringus/NaninovelLive2D",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHubのサンプルプロジェクト"),e("OutboundLink")],1),a._v(" で Naninovel で Live2D キャラクターを扱っているので、参考にしてください。Naninovel と Live2D SDK パッケージはプロジェクトと一緒に配布されていないため、初めて開く際にコンパイルエラーが発生します。アセットストアから Naninovel パッケージをインポートし、ウェブサイトから Live2D Cubism SDK をインポートして問題を解決してください。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
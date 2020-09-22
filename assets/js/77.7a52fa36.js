(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{520:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"テキスト管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#テキスト管理"}},[t._v("#")]),t._v(" テキスト管理")]),t._v(" "),s("p",[t._v("テキスト管理機能により、ゲーム内UIやキャラクターの表示名など、Naninovel全体で使用されるさまざまなテキスト要素を管理（置換）できます。このドキュメントはローカライズが可能です。")]),t._v(" "),s("p",[t._v("テキスト管理ドキュメントを生成するには、"),s("code",[t._v("Naninovel -> Tools -> Managed Text")]),t._v(" エディターのコンテキストメニューから、テキスト管理ツールを使用します。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/200680de85848f04a2eb51b063295c51.png",alt:"Managed Text Tool"}})]),t._v(" "),s("p",[t._v('"Select" ボタンで、テキスト管理ドキュメント（デフォルトでは '),s("code",[t._v("Resources/Naninovel/Text")]),t._v(' です）を保存するパスを選択し、 "Generate" ボタンを押してドキュメントを作成します。')]),t._v(" "),s("p",[t._v("アセットのコンテキストメニュー "),s("code",[t._v("Create -> Naninovel -> Managed Text")]),t._v(" からも、テキスト管理ドキュメントを作成できます。")]),t._v(" "),s("p",[t._v("テキスト管理ドキュメントの各行は、次の形式になっています: "),s("em",[t._v("Path")]),t._v(": "),s("em",[t._v("Value")]),t._v(", ここで "),s("em",[t._v("Path")]),t._v(" はテキスト変数へのパスで、"),s("em",[t._v("Value")]),t._v(' はその変数の値です。たとえば、組み込みのUIのレコードを含む "DefaultUI" ドキュメントのデフォルトの内容は次のとおりです。')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/ce57c700b77818f87aabb722f2f42b78.png",alt:"Managed Text Document"}})]),t._v(" "),s("p",[t._v("値を編集すると、次の実行時に変更が適用されます。")]),t._v(" "),s("p",[s("code",[t._v("Delete Unused")]),t._v(" プロパティを有効にすると、"),s("code",[t._v("ManagedTextProvider")]),t._v(" コンポーネントからもソースコードの "),s("code",[t._v("ManagedText")]),t._v(" 属性からも直接参照されていないテキスト管理ドキュメントのレコードは、削除されます（詳細は以下を参照）。")]),t._v(" "),s("h2",{attrs:{id:"テキスト管理プロバイダー"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#テキスト管理プロバイダー"}},[t._v("#")]),t._v(" テキスト管理プロバイダー")]),t._v(" "),s("p",[s("code",[t._v("ManagedTextProvider")]),t._v(" コンポーネントからスクリプトを作成することなく、任意のUnityゲームオブジェクトをテキスト管理レコードにバインドすることが可能です。コンポーネントをゲームオブジェクトに追加し、カテゴリ（レコードを含むドキュメントの名前）とキー（ドキュメント内のレコードの名前）を指定し、 "),s("code",[t._v("OnValueChanged")]),t._v(" イベントを使用して値をゲームオブジェクトのプロパティにバインドします。")]),t._v(" "),s("p",[t._v('以下は、 "MyCustomText" キーを使用して "MyCustomDocument" ドキュメントに格納されている管理されたテキストレコードをUntiyの "Text" コンポーネントにバインドする例です。')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/f47a997052674341aa3133deeea1f1cf.png",alt:""}})]),t._v(" "),s("p",[s("code",[t._v("ManagedTextProvider")]),t._v(" コンポーネントがカスタムUI、テキストプリンター、または選択肢ハンドラーで使用される場合、テキスト管理ツールを使用すると、対応するレコードが自動的に生成されます（構成メニューでリソースが割り当てられている場合）。その他の場合は、レコードを手動で追加する必要があります。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/cc2ad398d1ad716cca437913553eb09c.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"テキスト管理変数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#テキスト管理変数"}},[t._v("#")]),t._v(" テキスト管理変数")]),t._v(" "),s("p",[t._v("テキスト管理レコードをソースコードの変数にバインドすることもできます。 そのためには、C＃スクリプトの静的文字列フィールドに "),s("code",[t._v("ManagedText")]),t._v(" 属性を追加します。値は、エンジンの初期化時に、テキスト管理ドキュメントで指定された値で上書きされます。")]),t._v(" "),s("p",[t._v("以下は、テキスト管理変数を使用して C# スクリプトでラベルをローカライズする例です。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unityのテキストコンポーネントからクラスを継承し、それを1つのコンポーネントとして使用できるようにします。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomLabel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 管理テキストレコード "CustomLabel.LabelText" の値が')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// エンジンの初期化時に以下の変数に割り当てられ、ロケールの変更時に更新します。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ManagedText")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomUI"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "MyCustomUI" は、レコードを保持する管理テキストドキュメントの名前です。')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" LabelText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default Value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Default Value" はレコードのデフォルト値です。')]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" Awake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Awake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LabelText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 管理テキストレコードの現在の値をラベルに割り当てます。")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ユーザーが実行時にロケールを変更したときにラベルを更新します。")]),t._v("\n        Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ILocalizationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnLocaleChanged "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" _ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LabelText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"スクリプトテキスト"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#スクリプトテキスト"}},[t._v("#")]),t._v(" スクリプトテキスト")]),t._v(" "),s("p",[t._v("naninovelスクリプトから直接、テキスト管理の値を取得することが可能です。これは、スクリプト式でテキストを使用する必要があり、テキストをローカライズできるようにする必要がある場合に便利です。")]),t._v(" "),s("p",[t._v('"Script" という名前のテキスト管理ドキュメントを作成し、'),s("code",[t._v("T_")]),t._v("または"),s("code",[t._v("t_")]),t._v('プレフィックスが付いたキーを使用してレコードを追加します。これでスクリプト式の値を参照できるようになりました。たとえば、 "Script" というテキスト管理ドキュメントに次のレコードがあるとします:')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("T_Greeting1: Hey!\nT_Greeting2: Hello!\nT_Greeting3: Hi!\n")])])]),s("p",[t._v("— 次のようにして値を参照できます:")]),t._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@print")]),s("span",{pre:!0,attrs:{class:"token whitespaces"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[t._v("{Random(T_Greeting1,T_Greeting2,T_Greeting3)}")])]),t._v("\n")])])]),s("p",[t._v('もちろんテキスト管理ドキュメント "Script" は、他のドキュメントと同じようにローカライズできます。したがって、ユーザーが別のロケールを選択すると、対応するローカライズ化ドキュメントからテキストが自動的に参照されます。')]),t._v(" "),s("h2",{attrs:{id:"ローカリゼーション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ローカリゼーション"}},[t._v("#")]),t._v(" ローカリゼーション")]),t._v(" "),s("p",[t._v("テキスト管理のローカリゼーション手順は、naninovel スクリプトのローカリゼーション手順と似ています:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Resources/Naninovel/Text")]),t._v(" フォルダーに必要なテキスト管理ドキュメントを生成（作成、編集）します。")]),t._v(" "),s("li",[t._v("ロケールフォルダーでローカリゼーションユーティリティを実行します("),s("code",[t._v("Resources/Naninovel/Localization/{Locale}")]),t._v(", ここで "),s("code",[t._v("{Locale}")]),t._v(" はターゲットロケールのタグです）。")]),t._v(" "),s("li",[t._v("元のテキスト管理ドキュメントのローカリゼーションドキュメントが、対応するロケールフォルダーに表示されます。それに翻訳を追加または編集します。")])]),t._v(" "),s("p",[t._v("テキスト管理ドキュメントと、それに対応するローカリゼーションファイルなどを更新するには、最初に "),s("code",[t._v("Resources/Naninovel/Text")]),t._v(" フォルダーで、生成された管理されたテキストユーティリティを実行します。次に "),s("code",[t._v("Resources/Naninovel/Localization/{Locale}")]),t._v(" フォルダーでローカリゼーションユーティリティを実行します。どちらのユーティリティも既存の変更（管理されたテキストレコードとその翻訳）をデフォルトで保持しようとするため、更新する度に最初から書き直す必要はありません。")]),t._v(" "),s("p",[t._v("ローカリゼーションユーティリティの使い方の詳細は、"),s("RouterLink",{attrs:{to:"/ja/guide/localization.html"}},[t._v("ローカライズ")]),t._v(" をご覧ください。")],1),t._v(" "),s("div",{staticClass:"custom-block example"},[s("p",{staticClass:"custom-block-title"},[t._v("例")]),t._v(" "),s("p",[t._v("テキスト管理を含むローカリゼーション設定の例は、"),s("RouterLink",{attrs:{to:"/ja/guide/getting-started.html#デモプロジェクト"}},[t._v("デモプロジェクト")]),t._v(" にあります。ご自身のプロジェクトでローカリゼーションの設定に問題が発生した場合の参考としてご利用ください。")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);
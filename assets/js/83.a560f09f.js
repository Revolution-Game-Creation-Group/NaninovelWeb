(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{510:function(t,e,a){"use strict";a.r(e);var r=a(42),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"セーブロードシステム"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#セーブロードシステム"}},[t._v("#")]),t._v(" セーブロードシステム")]),t._v(" "),a("p",[t._v("セーブロードメニューを使用して、いつでもゲームをセーブ、ロードすることができます。ユーザーは、セーブするスロットを選択したり、以前に使用したスロットを削除したりできます。")]),t._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/a7109097f6abbeea16d6fe773bfffb3f.mp4",type:"video/mp4"}})])]),t._v(" "),a("p",[t._v("セーブスロットは "),a("code",[t._v(".json")]),t._v(" またはバイナリファイル（構成によって異なります）のいずれかにシリアル化されます。ファイル名、スロット上限、ディレクトリ名はコンテキストメニュー "),a("code",[t._v("Naninovel -> Configuration -> State")]),t._v(" から設定できます。利用可能なオプションについては "),a("RouterLink",{attrs:{to:"/ja/guide/configuration.html#state"}},[t._v("コンフィグガイド")]),t._v(" をご覧ください。")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/f9a2462d19eb228224f1dcd5302d6b1c.png",alt:"State Configuration"}})]),t._v(" "),a("p",[t._v("WebGLでは、セーブスロットはクロスブラウザー "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Indexed_Database_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("IndexedDB API"),a("OutboundLink")],1),t._v(" でシリアル化されます。")]),t._v(" "),a("p",[t._v("メニューUIはカスタマイズするか、"),a("RouterLink",{attrs:{to:"/ja/guide/user-interface.html#カスタムUI"}},[t._v("カスタムUI")]),t._v(" 機能を使って完全に置き換えることができます。")],1),t._v(" "),a("p",[t._v("Naninovelには、2つのシリアル化ハンドラーが用意されています: "),a("code",[t._v("System.IO")]),t._v(" と "),a("code",[t._v("UnityEngine.PlayerPrefs")]),t._v(" です。前者はスロットを別のファイルとして "),a("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("persistentDataPath"),a("OutboundLink")],1),t._v(" に保存します。後者は Unity の "),a("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/PlayerPrefs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlayerPrefs"),a("OutboundLink")],1),t._v(" API を使用して、スロットを key-value データベースに保存します。ハンドラーはステートコンフィグメニューで選択できます。IO ハンドラーがデフォルトです。特定のプラットフォームでセーブデータの読み取り/書き込みに問題がある場合は、PlayerPrefs に切り替えるか、"),a("RouterLink",{attrs:{to:"/ja/guide/state-management.html#カスタムシリアル化ハンドラー"}},[t._v("カスタムハンドラ")]),t._v(" の追加を検討してください。")],1),t._v(" "),a("p",[t._v("ステートの管理とそのカスタマイズ方法については、"),a("RouterLink",{attrs:{to:"/ja/guide/state-management.html"}},[t._v("ステート管理ガイド")]),t._v("を参照してください。")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);
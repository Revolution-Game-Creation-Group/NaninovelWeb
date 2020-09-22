(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{497:function(e,t,n){"use strict";n.r(t);var a=n(42),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"input-processing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-processing"}},[e._v("#")]),e._v(" Input Processing")]),e._v(" "),n("p",[e._v("Engine processes user input using pre-configured listeners. Each input listener has the following properties:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Property")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Name")]),e._v(" "),n("td",[e._v("Identifier of the input listener. Used to reference the listener by other engine systems.")])]),e._v(" "),n("tr",[n("td",[e._v("Always Process")]),e._v(" "),n("td",[e._v("Whether to process the input while in input blocking mode. E.g. when playing a movie.")])]),e._v(" "),n("tr",[n("td",[e._v("Keys")]),e._v(" "),n("td",[e._v("List of keys (buttons) which activate the input.")])]),e._v(" "),n("tr",[n("td",[e._v("Axes")]),e._v(" "),n("td",[e._v("List of axes (eg, a mouse or a gamepad analog stick) which activate the input.")])]),e._v(" "),n("tr",[n("td",[e._v("Swipes")]),e._v(" "),n("td",[e._v("List of swipes (touch screen) which activate the input.")])])])]),e._v(" "),n("p",[e._v("For specific values see Unity's input guide: "),n("a",{attrs:{href:"https://docs.unity3d.com/Manual/ConventionalGameInput.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs.unity3d.com/Manual/ConventionalGameInput"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("You can configure the built-in input bindings and add new listeners using "),n("code",[e._v("Naninovel -> Configuration -> Input")]),e._v(" context menu; for available options see "),n("RouterLink",{attrs:{to:"/guide/configuration.html#input"}},[e._v("configuration guide")]),e._v(".")],1),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/2f97539323c9fc36124e286856a36f84.png",alt:"Manage Input"}})]),e._v(" "),n("div",{staticClass:"custom-block example"},[n("p",{staticClass:"custom-block-title"},[e._v("EXAMPLE")]),e._v(" "),n("p",[e._v("Example of adding a custom input binding to toggle inventory UI can be found in the "),n("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory",target:"_blank",rel:"noopener noreferrer"}},[e._v("inventory example project on GitHub"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v('Specifically, the custom "ToggleInventory" binding is used in '),n("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory/blob/master/Assets/NaninovelInventory/Runtime/UI/InventoryUI.cs#L215",target:"_blank",rel:"noopener noreferrer"}},[e._v("UI/InventoryUI.cs"),n("OutboundLink")],1),e._v(" runtime script. A binding with the same name is added via input configuration menu, under Control Scheme.")])]),e._v(" "),n("p",[e._v("It's possible to halt and resume input processing with "),n("a",{attrs:{href:"/api/#processinput",target:"_blank"}},[n("code",[e._v("@processInput")])]),e._v(" command.")]),e._v(" "),n("h2",{attrs:{id:"gamepad-and-keyboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gamepad-and-keyboard"}},[e._v("#")]),e._v(" Gamepad and Keyboard")]),e._v(" "),n("p",[e._v("All the built-in features are usable with gamepad or keyboard input. You can remove, change or add gamepad/keyboard-specific hotkey bindings via the aforementioned bindings editor menu.")]),e._v(" "),n("p",[e._v("The built-in UIs can also be navigated with a gamepad or keyboard, without using mouse or touch input. When in any of modal menus (outside of main gameplay mode, eg title menu, backlog, etc), press a navigation key (directional pad or left stick on gamepad, arrow keys on keyboard) to select a button in the menu. The first focused button (game object) can be changed in each UI using "),n("code",[e._v("Focus Object")]),e._v(" field.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/809d4c423d1696a075d5fb73370d48fa.png",alt:""}})]),e._v(" "),n("p",[e._v("With "),n("code",[e._v("Focus Mode")]),e._v(" property you can change whether the assigned game object should be focused immediately after the UI becomes visible or after a navigation key is pressed.")]),e._v(" "),n("div",{staticClass:"custom-block warn"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Gamepad navigation over UIs will only work when Unity's new input system is installed in the project; find more information about the input system below.")])]),e._v(" "),n("p",[e._v("When in the main gameplay mode (outside of modal UIs), press a button binded to "),n("code",[e._v("Pause")]),e._v(" input ("),n("code",[e._v("Backspace")]),e._v(" key for keyboard and "),n("code",[e._v("Start")]),e._v(" button for gamepad by default) to open pause menu, where you can save/load game, open settings, exit to title, etc.")]),e._v(" "),n("h2",{attrs:{id:"input-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-system"}},[e._v("#")]),e._v(" Input System")]),e._v(" "),n("p",[e._v("Naninovel supports Unity's new "),n("a",{attrs:{href:"https://blogs.unity3d.com/2019/10/14/introducing-the-new-input-system/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Input System"),n("OutboundLink")],1),e._v("; see the "),n("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/Installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official docs"),n("OutboundLink")],1),e._v(" on how to install and enable the input system. When the input system package is installed (don't forget to enable new input backend in the player settings), an "),n("code",[e._v("Input Actions")]),e._v(" property will appear in the input configuration menu.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/7c6d767c0f3443e1999fe14917080eb1.png",alt:""}})]),e._v(" "),n("p",[e._v("Assign "),n("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/ActionAssets.html?q=input%20actions%20asset",target:"_blank",rel:"noopener noreferrer"}},[e._v("input actions asset"),n("OutboundLink")],1),e._v(' to the property, then create "Naninovel" action map and add input actions with names equal to the Naninovel\'s binding names. The list of the built-in binding names can be found in the "Bindings" list under "Control Scheme" in the same configuration window. Below is an example input actions configuration.')]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/36d1951519e4f671509c7136a83d9958.png",alt:""}})]),e._v(" "),n("p",[e._v('When properly configured, input actions will activate Naninovel\'s bindings. In case you wish to disable legacy input processing (which is set under the "Bindings" list), disable '),n("code",[e._v("Process Legacy Bindings")]),e._v(" property under input configuration menu.")]),e._v(" "),n("div",{staticClass:"custom-block warn"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Touch and object-related input is still processed via legacy input, so don't completely disable legacy backend in the player settings, unless you're going to implement the features yourself.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/bdac8d3ce8380f571bc3bc2e18a0074d.png",alt:""}})])]),e._v(" "),n("p",[e._v("Default input actions asset is stored at "),n("code",[e._v("Naninovel/Prefabs/DefaultControls.inputactions")]),e._v(".")]),e._v(" "),n("p",[e._v("For more information on using new input system (eg, how to configure particular bindings or allow players to override the bindings at runtime), consult the "),n("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual",target:"_blank",rel:"noopener noreferrer"}},[e._v("official manual"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);
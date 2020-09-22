(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{500:function(a,t,e){"use strict";e.r(t);var s=e(42),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"inventory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inventory"}},[a._v("#")]),a._v(" Inventory")]),a._v(" "),e("p",[a._v("While an inventory system is a bit out of scope for VN-style games, we had a lot of requests and questions on how to integrate one with Naninovel. The "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub project"),e("OutboundLink")],1),a._v(" serves as both an example for creating and integrating an inventory with the engine and an extension, which you can easily setup on top of a Naninovel installation.")]),a._v(" "),e("p",[a._v("Example project shows how to make a custom inventory UI with grid layout, pagination and drag-drop window, add custom engine service and related configuration menu, add input bindings, use state outsourcing, author custom scenario commands and expression functions.")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/86c577f007daf4ec5d79c0e91db7bc10.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v("You can "),e("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[a._v("clone the project repository with a Git client"),e("OutboundLink")],1),a._v(" or "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelDemo/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("download it as a zip archive"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Naninovel package is not distributed with the project, hence compilation errors will be produced after opening it for the first time; import Naninovel from the Asset Store to resolve the issues.")])]),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("p",[a._v("To setup inventory extension on top of an existing Unity project use "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-ui.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("UPM"),e("OutboundLink")],1),a._v(" to install the package via the following git URL: "),e("code",[a._v("https://github.com/Elringus/NaninovelInventory.git?path=Assets/NaninovelInventory")]),a._v(" or download and import "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory/raw/master/NaninovelInventory.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("NaninovelInventory.unitypackage"),e("OutboundLink")],1),a._v(" manually.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/b54e9daa9a483d9bf7f74f0e94b2d38a.gif",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),e("p",[a._v("To create a pre-made inventory UI from template, use "),e("code",[a._v("Create -> Naninovel -> Inventory -> Inventory UI")]),a._v(" asset context menu. Then add the prefab to the Naninovel UI resources via "),e("code",[a._v("Naninovel -> Resources -> UI")]),a._v(" editor menu. Once added, the UI can be shown/hidden like all the other UIs with "),e("a",{attrs:{href:"/api/#showui",target:"_blank"}},[e("code",[a._v("@showUI")])]),a._v(" and "),e("a",{attrs:{href:"/api/#hideui",target:"_blank"}},[e("code",[a._v("@hideUI")])]),a._v(" commands.")]),a._v(" "),e("p",[a._v("The Inventory UI component has "),e("code",[a._v("Capacity")]),a._v(" property, where you can change number of slots in the inventory. Slot grid is configured (slot number and layout, slots per page, etc) via "),e("code",[a._v("Content/InventoryGrid")]),a._v(" game object. Window drag-drop behavior can be configured (disabled) via "),e("code",[a._v("Drag Drop")]),a._v(" component attached to "),e("code",[a._v("Content")]),a._v(" game object.")]),a._v(" "),e("p",[a._v("Inventory item prefabs can be created with "),e("code",[a._v("Create -> Naninovel -> Inventory -> Inventory Item")]),a._v(" asset context menu. The item prefabs will then need to be assigned as inventory resources via "),e("code",[a._v("Naninovel -> Resources -> Inventory")]),a._v(" editor menu.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/6062f8a433a47306f582a849c7bbf57e.png",alt:""}})]),a._v(" "),e("p",[a._v("In case you have a lot of items and it's inconvenient to assign them via editor menu, it's possible to just drop them at "),e("code",[a._v("Resources/Naninovel/Inventory")]),a._v(" folder and they'll automatically be exposed to the engine. You can additionally organize them with sub-folders, if you wish; in this case use forward slashes ("),e("code",[a._v("/")]),a._v(") when referencing them in naninovel scripts. Eg, item stored as "),e("code",[a._v("Resources/Naninovel/Inventory/Armor/FullPlate.prefab")]),a._v(" can be referenced in scripts as "),e("code",[a._v("Armor/FullPlate")]),a._v(".")]),a._v(" "),e("p",[a._v("It's also possible to use "),e("RouterLink",{attrs:{to:"/guide/resource-providers.html#addressable"}},[a._v("addressable asset system")]),a._v(' to manually expose the resources. To expose an asset, assign address equal to the path you\'d use to expose it via the method described above, except omit the "Resources/" part. Eg, to expose a "FullPlate.prefab" item, assign the prefab asset following address: '),e("code",[a._v("Naninovel/Inventory/FullPlate")]),a._v(". Be aware, that addressable provider is not used in editor by default; you can allow it by enabling "),e("code",[a._v("Enable Addressable In Editor")]),a._v(" property in resource provider configuration menu.")],1),a._v(" "),e("p",[a._v("Each item has a "),e("code",[a._v("Stack Count Limit")]),a._v(" property to limit how much items of this type can be stacked in a single inventory slot and a "),e("code",[a._v("On Item Used")]),a._v(" Unity event, which is invoked when the item is used (either via "),e("code",[a._v("@useItem")]),a._v(" command or when user clicks on the item in the inventory). Below is an example on how you can setup the event with "),e("code",[a._v("Play Script")]),a._v(" component to remove the item once it used, spawn a glitch special effect and print a text message.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/010a9ba35db607ba46d78eda3513f678.png",alt:""}})]),a._v(" "),e("p",[a._v("You can add items to the inventory with "),e("code",[a._v("@addItem")]),a._v(" command and remove with "),e("code",[a._v("@removeItem")]),a._v(" (or "),e("code",[a._v("@removeItemAt")]),a._v(", "),e("code",[a._v("@removeAllItems")]),a._v("). Item IDs are equal to the item prefab names. Inventory slot IDs are equal to the grid slot indexes (eg, first slot is 0, second is 1, etc).")]),a._v(" "),e("p",[e("code",[a._v("ItemExist()")]),a._v(" and "),e("code",[a._v("ItemCount()")]),a._v(" custom "),e("RouterLink",{attrs:{to:"/guide/script-expressions.html#expression-functions"}},[a._v("expression functions")]),a._v(" to check wither an items exist in inventory and number of existing items are also available for convenience.")],1),a._v(" "),e("p",[a._v("Below is a script from the example project:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# Start")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Select an action."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("skipInput")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Pick up sword"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Sword"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" do:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"@addItem Sword, @goto .Adventure"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Pick up armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" do:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"@addItem Armor, @goto .Adventure"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Adventure awaits, venture forth!"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# Adventure")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@if")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('ItemExist("Sword")')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('monstersSlayed="')])]),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v('{ItemExist("Armor") ? Random(3,5) : 2}')]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@addItem")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Food")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" amount:")])]),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{monstersSlayed}")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\tYou've encountered and slayed "),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{monstersSlayed}")]),a._v(" monsters with your sword."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("if")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string"}},[a._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" You could've been more productive with an armor, though."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("endif")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("i")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("showUI")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Inventory")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v("wait:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" Check your inventory for the loot!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Start")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@else")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\tBut you don't have a weapon! You've been beaten by the monsters."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("if")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string"}},[a._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" At least it didn't hurt that much, thanks to the armor."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("endif")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" Let's prepare better next time.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Start")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@endif")])]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
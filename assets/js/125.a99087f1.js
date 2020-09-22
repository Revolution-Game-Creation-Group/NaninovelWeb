(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{472:function(e,t,o){"use strict";o.r(t);var n=o(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"inventory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inventory"}},[e._v("#")]),e._v(" Inventory")]),e._v(" "),o("p",[e._v("While an inventory system is a bit out of scope for VN-style games, we had a lot of requests and questions on how to integrate one with Naninovel. The "),o("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub project"),o("OutboundLink")],1),e._v(" serves as both an example for creating and integrating an inventory with the engine and an extension, which you can easily setup on top of a Naninovel installation.")]),e._v(" "),o("p",[e._v("Example project shows how to make a custom inventory UI with grid layout, pagination and drag-drop window, add custom engine service and related configuration menu, add input bindings, use state outsourcing, author custom scenario commands and expression functions.")]),e._v(" "),o("p",[o("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:"https://i.gyazo.com/86c577f007daf4ec5d79c0e91db7bc10.mp4",type:"video/mp4"}})])]),e._v(" "),o("p",[e._v("You can "),o("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("clone the project repository with a Git client"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://github.com/Elringus/NaninovelDemo/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it as a zip archive"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block warn"},[o("p",{staticClass:"custom-block-title"},[e._v("ВНИМАНИЕ")]),e._v(" "),o("p",[e._v("Naninovel package is not distributed with the project, hence compilation errors will be produced after opening it for the first time; import Naninovel from the Asset Store to resolve the issues.")])]),e._v(" "),o("h2",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("p",[e._v("To setup inventory extension on top of an existing Unity project use "),o("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-ui.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UPM"),o("OutboundLink")],1),e._v(" to install the package via the following git URL: "),o("code",[e._v("https://github.com/Elringus/NaninovelInventory.git?path=Assets/NaninovelInventory")]),e._v(" or download and import "),o("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory/raw/master/NaninovelInventory.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[e._v("NaninovelInventory.unitypackage"),o("OutboundLink")],1),e._v(" manually.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.gyazo.com/b54e9daa9a483d9bf7f74f0e94b2d38a.gif",alt:""}})]),e._v(" "),o("h2",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),o("p",[e._v("To create a pre-made inventory UI from template, use "),o("code",[e._v("Create -> Naninovel -> Inventory -> Inventory UI")]),e._v(" asset context menu. Then add the prefab to the Naninovel UI resources via "),o("code",[e._v("Naninovel -> Resources -> UI")]),e._v(" editor menu. Once added, the UI can be shown/hidden like all the other UIs with "),o("a",{attrs:{href:"/api/#showui",target:"_blank"}},[o("code",[e._v("@showUI")])]),e._v(" and "),o("a",{attrs:{href:"/api/#hideui",target:"_blank"}},[o("code",[e._v("@hideUI")])]),e._v(" commands.")]),e._v(" "),o("p",[e._v("The Inventory UI component has "),o("code",[e._v("Capacity")]),e._v(" property, where you can change number of slots in the inventory. Slot grid is configured (slot number and layout, slots per page, etc) via "),o("code",[e._v("Content/InventoryGrid")]),e._v(" game object. Window drag-drop behavior can be configured (disabled) via "),o("code",[e._v("Drag Drop")]),e._v(" component attached to "),o("code",[e._v("Content")]),e._v(" game object.")]),e._v(" "),o("p",[e._v("Inventory item prefabs can be created with "),o("code",[e._v("Create -> Naninovel -> Inventory -> Inventory Item")]),e._v(" asset context menu. The item prefabs will then need to be assigned as inventory resources via "),o("code",[e._v("Naninovel -> Resources -> Inventory")]),e._v(" editor menu.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.gyazo.com/6062f8a433a47306f582a849c7bbf57e.png",alt:""}})]),e._v(" "),o("p",[e._v("In case you have a lot of items and it's inconvenient to assign them via editor menu, it's possible to just drop them at "),o("code",[e._v("Resources/Naninovel/Inventory")]),e._v(" folder and they'll automatically be exposed to the engine. You can additionally organize them with sub-folders, if you wish; in this case use forward slashes ("),o("code",[e._v("/")]),e._v(") when referencing them in naninovel scripts. Eg, item stored as "),o("code",[e._v("Resources/Naninovel/Inventory/Armor/FullPlate.prefab")]),e._v(" can be referenced in scripts as "),o("code",[e._v("Armor/FullPlate")]),e._v(".")]),e._v(" "),o("p",[e._v("It's also possible to use "),o("RouterLink",{attrs:{to:"/ru/guide/resource-providers.html#addressable"}},[e._v("addressable asset system")]),e._v(' to manually expose the resources. To expose an asset, assign address equal to the path you\'d use to expose it via the method described above, except omit the "Resources/" part. Eg, to expose a "FullPlate.prefab" item, assign the prefab asset following address: '),o("code",[e._v("Naninovel/Inventory/FullPlate")]),e._v(". Be aware, that addressable provider is not used in editor by default; you can allow it by enabling "),o("code",[e._v("Enable Addressable In Editor")]),e._v(" property in resource provider configuration menu.")],1),e._v(" "),o("p",[e._v("Each item has a "),o("code",[e._v("Stack Count Limit")]),e._v(" property to limit how much items of this type can be stacked in a single inventory slot and a "),o("code",[e._v("On Item Used")]),e._v(" Unity event, which is invoked when the item is used (either via "),o("code",[e._v("@useItem")]),e._v(" command or when user clicks on the item in the inventory). Below is an example on how you can setup the event with "),o("code",[e._v("Play Script")]),e._v(" component to remove the item once it used, spawn a glitch special effect and print a text message.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.gyazo.com/010a9ba35db607ba46d78eda3513f678.png",alt:""}})]),e._v(" "),o("p",[e._v("You can add items to the inventory with "),o("code",[e._v("@addItem")]),e._v(" command and remove with "),o("code",[e._v("@removeItem")]),e._v(" (or "),o("code",[e._v("@removeItemAt")]),e._v(", "),o("code",[e._v("@removeAllItems")]),e._v("). Item IDs are equal to the item prefab names. Inventory slot IDs are equal to the grid slot indexes (eg, first slot is 0, second is 1, etc).")]),e._v(" "),o("p",[o("code",[e._v("ItemExist()")]),e._v(" and "),o("code",[e._v("ItemCount()")]),e._v(" custom "),o("RouterLink",{attrs:{to:"/ru/guide/script-expressions.html#expression-functions"}},[e._v("expression functions")]),e._v(" to check wither an items exist in inventory and number of existing items are also available for convenience.")],1),e._v(" "),o("p",[e._v("Below is a script from the example project:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('# Start\n\nSelect an action.[skipInput]\n\n@choice "Pick up sword" if:!ItemExist("Sword") do:"@addItem Sword, @goto .Adventure"\n@choice "Pick up armor" if:!ItemExist("Armor") do:"@addItem Armor, @goto .Adventure"\n@choice "Adventure awaits, venture forth!"\n@stop\n\n# Adventure\n\n@if ItemExist("Sword")\n\t@set monstersSlayed="{ItemExist("Armor") ? Random(3,5) : 2}"\n\t@addItem Food amount:{monstersSlayed}\n\tYou\'ve encountered and slayed {monstersSlayed} monsters with your sword.[if !ItemExist("Armor")] You could\'ve been more productive with an armor, though.[endif][i][showUI Inventory wait:false] Check your inventory for the loot!\n\t@goto .Start\n@else\n\tBut you don\'t have a weapon! You\'ve been beaten by the monsters.[if ItemExist("Armor")] At least it didn\'t hurt that much, thanks to the armor.[endif] Let\'s prepare better next time.\n\t@goto .Start\n@endif\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);
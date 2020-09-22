(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{393:function(e,t,a){"use strict";a.r(t);var o=a(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"user-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-interface"}},[e._v("#")]),e._v(" User Interface")]),e._v(" "),a("p",[e._v("Naninovel comes with multiple built-in UIs: title (main) menu, game settings, save-load menu, backlog panel, CG gallery, tips and many others.")]),e._v(" "),a("p",[e._v("Each of the built-in UIs can be disabled or customized; see "),a("RouterLink",{attrs:{to:"/ru/guide/user-interface.html#ui-customization"}},[e._v("UI customization")]),e._v(" guide for more information.")],1),e._v(" "),a("h2",{attrs:{id:"adaptive-ui-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adaptive-ui-layout"}},[e._v("#")]),e._v(" Adaptive UI Layout")]),e._v(" "),a("p",[e._v("All the built-in UIs are implemented with adaptive layout. This allows the UI to remain usable on all the platforms, no matter the screen resolution.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/b6bddf8a0c6f2ba68dcdc1bc65db0c09.mp4",type:"video/mp4"}})])]),e._v(" "),a("h2",{attrs:{id:"ui-toggling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-toggling"}},[e._v("#")]),e._v(" UI Toggling")]),e._v(" "),a("p",[e._v("UI toggling feature allows user to hide/show the in-game UI as a whole.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/e267c4ab3654efbfaf611011502de79f.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("Activate "),a("code",[e._v("ToggleUI")]),e._v(" input ("),a("code",[e._v("Space")]),e._v(" key by default for standalone input module) or use "),a("code",[e._v("HIDE")]),e._v(" button on the control panel to hide/show the UI.")]),e._v(" "),a("p",[e._v("When UI is hidden, "),a("code",[e._v("Continue")]),e._v(" input or clicking (touching) the screen will also un-hide the UI.")]),e._v(" "),a("h2",{attrs:{id:"ui-customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-customization"}},[e._v("#")]),e._v(" UI Customization")]),e._v(" "),a("p",[e._v("UI customization feature allows to add a custom UI and modify or completely replace any of the built-in UI elements, like title menu, settings menu, printer backlog, etc.")]),e._v(" "),a("p",[e._v("Be aware, that text printers and choice handlers are implemented via actors interface and are customized in a different way; see the corresponding documentation ("),a("RouterLink",{attrs:{to:"/ru/guide/text-printers.html"}},[e._v("text printers")]),e._v(", "),a("RouterLink",{attrs:{to:"/ru/guide/choices.html"}},[e._v("choice handlers")]),e._v(") for more info.")],1),e._v(" "),a("div",{staticClass:"custom-block warn"},[a("p",{staticClass:"custom-block-title"},[e._v("ВНИМАНИЕ")]),e._v(" "),a("p",[e._v("Before attempting to create custom UIs or modify existing ones first make sure you're familiar with "),a("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.ugui@latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity's UI system"),a("OutboundLink")],1),e._v(" (uGUI). While there are video tutorials and example projects for UI customization available below, please be aware that we won't be able to provide any additional guidance or support for Unity's built-in tools; consult the "),a("RouterLink",{attrs:{to:"/ru/support/#unity-support"}},[e._v("support page")]),e._v(" for more information.")],1)]),e._v(" "),a("p",[e._v("To add a custom UI or modify (disable) a built-in one, use UI resources manager accessible via "),a("code",[e._v("Naninovel -> Resources -> UI")]),e._v(" editor menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/b0f00e8431e34e59249b3f59919e3b2c.png",alt:""}})]),e._v(" "),a("p",[e._v("When the engine is initializing it'll instantiate all the UI prefabs assigned in the resources manager.")]),e._v(" "),a("p",[e._v("To show or hide any of the UIs listed in the resources manager use "),a("a",{attrs:{href:"/ru/api/#showui",target:"_blank"}},[a("code",[e._v("@showUI")])]),e._v(" and "),a("a",{attrs:{href:"/ru/api/#hideui",target:"_blank"}},[a("code",[e._v("@hideUI")])]),e._v(" commands respectively.")]),e._v(" "),a("h3",{attrs:{id:"adding-custom-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-ui"}},[e._v("#")]),e._v(" Adding Custom UI")]),e._v(" "),a("p",[e._v("To add a new custom UI, create a prefab via "),a("code",[e._v("Create -> Naninovel -> Custom UI")]),e._v(" asset context menu and add it to the UI resources list. It'll then be instantiated along with the other UI prefabs on the engine initialization.")]),e._v(" "),a("p",[e._v("Following video tutorial shows how to add a custom calendar UI with special reveal and hide animations. The calendar will display a date based on a "),a("RouterLink",{attrs:{to:"/ru/guide/custom-variables.html"}},[e._v("custom variable")]),e._v(", which can be changed via naninovel scripts and is saved with the game. The calendar will automatically update when the variable is changed. All this is achieved without any C# scripting.")],1),e._v(" "),a("p"),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wrAm-cwPXy4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p"),e._v(" "),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[e._v("ПРИМЕР")]),e._v(" "),a("p",[e._v("Unity project showed in the above video tutorial is "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelCustomUIExample",target:"_blank",rel:"noopener noreferrer"}},[e._v("available on GitHub"),a("OutboundLink")],1),e._v(". You can "),a("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("clone the repository"),a("OutboundLink")],1),e._v(" with a Git client or "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelCustomUIExample/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it as a zip archive"),a("OutboundLink")],1),e._v(". Be aware, that Naninovel package is not distributed with the project, hence compilation errors will be produced after opening it for the first time; import Naninovel from the Asset Store to resolve the issues.")])]),e._v(" "),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[e._v("ПРИМЕР")]),e._v(" "),a("p",[e._v("Another, more advanced example of adding a custom inventory UI with a grid layout, pagination and drag-drop window can be found in the "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory",target:"_blank",rel:"noopener noreferrer"}},[e._v("inventory example project on GitHub"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Specifically, the UI-related scripts are stored at "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory/tree/master/Assets/NaninovelInventory/Runtime/UI",target:"_blank",rel:"noopener noreferrer"}},[e._v("Runtime/UI"),a("OutboundLink")],1),e._v(" and prefabs at "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory/tree/master/Assets/NaninovelInventory/Prefabs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prefabs"),a("OutboundLink")],1),e._v(" directories.")])]),e._v(" "),a("p",[e._v("When you create a new custom UI prefab via the context menu, the prefab will have a "),a("code",[e._v("Custom UI")]),e._v(" component attached to the root object. This component (or rather the fact that the component is implementing "),a("code",[e._v("IManagedUI")]),e._v(" interface) is essential to make the prefab accepted as a UI by the engine.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/9a4a38754ccf35e48b8bef2c3062ff02.png",alt:""}})]),e._v(" "),a("p",[a("code",[e._v("Disable Interaction")]),e._v(" property allows to permanently disable interaction with the UI, no matter the visibility. Requires "),a("code",[e._v("Canvas Group")]),e._v(" component on the same game object.")]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("Visible On Awake")]),e._v(" is enabled, the UI will be visible when the UI is instantiated (right after the engine is initialized) and vice-versa.")]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("Control Opacity")]),e._v(" is enabled and "),a("code",[e._v("Canvas Group")]),e._v(" component is attached to the same game object,  "),a("code",[e._v("Alpha")]),e._v(" property of the "),a("code",[e._v("Canvas Group")]),e._v(" component will be changed in sync with the current visibility state of the UI element. "),a("code",[e._v("Fade Duration")]),e._v(" will then control time (duration in seconds) of the opacity fade animation. In case you wish to implement your own effect to accommodate the visibility status of the UI element (eg, slide animation instead of fading the opacity), disable "),a("code",[e._v("Control Opacity")]),e._v(" property and use "),a("code",[e._v("On Show")]),e._v(" and "),a("code",[e._v("On Hide")]),e._v(" Unity events to react on visibility changes.")]),e._v(" "),a("p",[e._v("In case you wish to support gamepad or keyboard navigation over the UI, assign a game object with an interactable component (eg, a "),a("code",[e._v("Button")]),e._v(") to "),a("code",[e._v("Focus Object")]),e._v(" property. This object will then be automatically focused when the UI becomes visible allowing to navigate over other interactable objects with a gamepad and/or keyboard. See Unity's "),a("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/script-SelectableNavigation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide on UI navigation"),a("OutboundLink")],1),e._v(" for more info on how to setup the navigation behavior.")]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("Focus Object")]),e._v(" is assigned, "),a("code",[e._v("Focus Mode")]),e._v(" property allows to choose when to focus the object: "),a("code",[e._v("Visibility")]),e._v(" mode will focus it right after the UI becomes visible and "),a("code",[e._v("Navigation")]),e._v(" will postpone the focus until player activates a navigation key on gamepad (left stick or D-pad) or keyboard (arrow keys).")]),e._v(" "),a("p",[a("code",[e._v("On Show")]),e._v(" and "),a("code",[e._v("On Hide")]),e._v(" Unity events allow to hook custom handlers to react to the UI visibility changes. For example, you can hook an "),a("code",[e._v("Animator")]),e._v(" triggers to fire some custom animations when the UI becomes visible and vice-versa.")]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("Hide On Load")]),e._v(" is enabled, the UI will automatically be hidden when the engine is starting a load operation. This usually happens when loading another naninovel script or exiting to title menu.")]),e._v(" "),a("p",[e._v("Enabling "),a("code",[e._v("Save Visibility State")]),e._v(" will make the visibility state of the UI persistent, so that when player loads a saved game, the UI will be in the same state (visible or  hidden) as it was when the game was saved.")]),e._v(" "),a("p",[a("code",[e._v("Block Input When Visible")]),e._v(" allows to disable "),a("RouterLink",{attrs:{to:"/ru/guide/input-processing.html"}},[e._v("input processing")]),e._v(" when the UI is visible. This is useful to prevent the player from using various hotkeys (hiding the UI, continue reading, etc) while he's interacting with the UI. "),a("code",[e._v("Allowed Samplers")]),e._v(" allows to add exceptions to the blocked inputs; eg, you can add "),a("code",[e._v("ToggleUI")]),e._v(" input name to the list, allowing player to toggle the UI while still preventing activation of any other inputs.")],1),e._v(" "),a("p",[e._v("Enabling "),a("code",[e._v("Modal UI")]),e._v(" makes all other UIs ignore interaction while the UI is visible. This is similar to "),a("code",[e._v("Block Input When Visible")]),e._v(", but affects event-based interaction (mouse clicks, touches, UI navigation) instead of direct input processing.")]),e._v(" "),a("p",[e._v("Several other components will also be added by default when creating a custom UI:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Canvas Group")]),e._v(" allows hiding the UI by changing the opacity (controlled with "),a("code",[e._v("Fade Duration")]),e._v(") and allows the UI to ignore user interaction when necessary.")]),e._v(" "),a("li",[a("code",[e._v("Canvas Scaler")]),e._v(" automatically scales the layout to fit current display resolution.")]),e._v(" "),a("li",[a("code",[e._v("Graphic Raycaster")]),e._v(" allows player to interact with buttons and other interactable elements inside the UI canvas.")])]),e._v(" "),a("p",[e._v("You are free to modify or remove any of the above components as you see fit.")]),e._v(" "),a("h3",{attrs:{id:"disabling-built-in-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-built-in-ui"}},[e._v("#")]),e._v(" Disabling Built-In UI")]),e._v(" "),a("p",[e._v("To disable a built-in UI remove corresponding record from the UI resources list and the prefab won't be instantiated on engine initialization.")]),e._v(" "),a("h3",{attrs:{id:"modifying-built-in-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modifying-built-in-ui"}},[e._v("#")]),e._v(" Modifying Built-In UI")]),e._v(" "),a("p",[e._v("If you wish to modify an existing built-in (default) UI prefab, you can find them at "),a("code",[e._v("Naninovel/Prefabs/DefaultUI")]),e._v(" package folder.")]),e._v(" "),a("p",[e._v("While it's possible, "),a("strong",[e._v("please refrain from editing the built-in prefabs directly")]),e._v(" to prevent issues when updating the package. Rather, create a new prefab from template via "),a("code",[e._v("Create -> Naninovel -> Default UI -> ...")]),e._v(" asset context menu or manually duplicate the prefab you want to modify (Ctrl/Cmd+D) and move it out of the package folder. Then assign the created/modified prefab to an existing record ("),a("code",[e._v("Object")]),e._v(" field) in the UI resources manager.")]),e._v(" "),a("p",[e._v("In the following video tutorial you can learn how to override built-in title (main) menu. It'll also show how to use title script to add a background and special effect when entering the title menu; no C# scripting is used to achieve that.")]),e._v(" "),a("p"),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/hqhfhXzQkdk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p"),e._v(" "),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[e._v("ПРИМЕР")]),e._v(" "),a("p",[e._v("Unity project showed in the above video tutorial is "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelCustomUIExample",target:"_blank",rel:"noopener noreferrer"}},[e._v("available on GitHub"),a("OutboundLink")],1),e._v(". You can "),a("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("clone the repository"),a("OutboundLink")],1),e._v(" with a Git client or "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelCustomUIExample/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it as a zip archive"),a("OutboundLink")],1),e._v(". Be aware, that Naninovel package is not distributed with the project, hence compilation errors will be produced after opening it for the first time; import Naninovel from the Asset Store to resolve the issues.")])]),e._v(" "),a("p",[e._v("When creating a new prefab from scratch, make sure to attach a component that implements interface of the UI you're going to override. This component should be attached to the root object of the prefab.")]),e._v(" "),a("p",[e._v("All the UI interfaces are stored under "),a("code",[e._v("Naninovel.UI")]),e._v(" namespace:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Interface")]),e._v(" "),a("th",[e._v("Corresponding UI")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("IBacklogUI")]),e._v(" "),a("td",[e._v("Printer backlog.")])]),e._v(" "),a("tr",[a("td",[e._v("ILoadingUI")]),e._v(" "),a("td",[e._v("Panel shown when the game is loading.")])]),e._v(" "),a("tr",[a("td",[e._v("IMovieUI")]),e._v(" "),a("td",[e._v("UI used to host movies.")])]),e._v(" "),a("tr",[a("td",[e._v("ISaveLoadUI")]),e._v(" "),a("td",[e._v("Panel used for saving and loading game.")])]),e._v(" "),a("tr",[a("td",[e._v("ISceneTransitionUI")]),e._v(" "),a("td",[e._v("Handles scene transition ( "),a("a",{attrs:{href:"/ru/api/#starttrans",target:"_blank"}},[a("code",[e._v("@startTrans")])]),e._v(" and  "),a("a",{attrs:{href:"/ru/api/#finishtrans",target:"_blank"}},[a("code",[e._v("@finishTrans")])]),e._v(" commands).")])]),e._v(" "),a("tr",[a("td",[e._v("ISettingsUI")]),e._v(" "),a("td",[e._v("Panel used for changing game settings.")])]),e._v(" "),a("tr",[a("td",[e._v("ITitleUI")]),e._v(" "),a("td",[e._v("Title (main) menu of the game.")])]),e._v(" "),a("tr",[a("td",[e._v("IExternalScriptsUI")]),e._v(" "),a("td",[e._v("External scripts browser UI (community modding feature).")])]),e._v(" "),a("tr",[a("td",[e._v("IVariableInputUI")]),e._v(" "),a("td",[e._v("Input form for assigning an arbitrary text to a custom state variable (used by "),a("a",{attrs:{href:"/ru/api/#input",target:"_blank"}},[a("code",[e._v("@input")])]),e._v(" command).")])]),e._v(" "),a("tr",[a("td",[e._v("IConfirmationUI")]),e._v(" "),a("td",[e._v("UI panel used to confirm important commands (eg, when exiting to the title menu or deleting saved game slot).")])]),e._v(" "),a("tr",[a("td",[e._v("ICGGalleryUI")]),e._v(" "),a("td",[e._v("Unlockable "),a("RouterLink",{attrs:{to:"/ru/guide/unlockable-items.html#cg-gallery"}},[e._v("CG gallery")]),e._v(" items browser.")],1)]),e._v(" "),a("tr",[a("td",[e._v("ITipsUI")]),e._v(" "),a("td",[e._v("Unlockable "),a("RouterLink",{attrs:{to:"/ru/guide/unlockable-items.html#tips"}},[e._v("tips")]),e._v(" browser.")],1)]),e._v(" "),a("tr",[a("td",[e._v("IRollbackUI")]),e._v(" "),a("td",[e._v("Indicator for state rollback feature.")])]),e._v(" "),a("tr",[a("td",[e._v("IContinueInputUI")]),e._v(" "),a("td",[e._v("A fullscreen invisible UI layer positioned at the bottom of the UI stack and used to activate a "),a("code",[e._v("continue input")]),e._v(" trigger when clicked or touched.")])])])]),e._v(" "),a("p",[e._v("In order for the UI to support visibility (visible on awake, fade time) and interaction options (disable interaction), also attach a "),a("code",[e._v("Canvas Group")]),e._v(" component to the same object.")]),e._v(" "),a("p",[e._v("If you're OK with C# scripting and want to override default logic of the UI, "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/CreatingAndUsingScripts",target:"_blank",rel:"noopener noreferrer"}},[e._v("create a new component"),a("OutboundLink")],1),e._v(", implement "),a("code",[e._v("IManagedUI")]),e._v(" interface (feel free to inherit the component from "),a("code",[e._v("CustomUI")]),e._v(" or "),a("code",[e._v("ScriptableUIBehaviour")]),e._v(" to fulfill all the interface requirements) and attach the created custom component instead. Check "),a("code",[e._v("Naninovel/Runtime/UI")]),e._v(" folder for reference implementations of the built-in UIs. Here is an example of minimal implementation of a custom UI component:")]),e._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("using")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("UniRx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyCustomUI")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ScriptableUIBehaviour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Naninovel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("UI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IManagedUI")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e._v("UniTask")]),e._v(" InitializeAsync "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" UniTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("CompletedTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"play-script-on-unity-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#play-script-on-unity-event"}},[e._v("#")]),e._v(" Play Script On Unity Event")]),e._v(" "),a("p",[e._v("When creating custom UIs, you may want to execute some commands or start playing a specific naninovel script in reaction to some events (eg, a "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/script-Button.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("button click"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("Add "),a("code",[e._v("Play Script")]),e._v(" component to a game object and either select an existing naninovel script or write the commands right inside the text area field; then route "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity event"),a("OutboundLink")],1),e._v(" of some other component to invoke "),a("code",[e._v("Play()")]),e._v(" method on the "),a("code",[e._v("Play Script")]),e._v(" component. The script will be executed when the event is triggered at play mode. The example below hides a custom UI when the button is clicked.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/5f56fbddc090919cc71f68e82bb1713f.png",alt:""}})]),e._v(" "),a("p",[e._v("It's also possible to reference Unity event arguments in the script text with "),a("code",[e._v("{arg}")]),e._v(" expression; supported arguments types are: string, integer, float and boolean. Below example demonstrates executing camera shake and playing a sound effect when a boolean Unity event is positive and playing a background musing when it's negative.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/78e9fa27d6561f8f8aced76bbeb4b542.png",alt:""}})]),e._v(" "),a("div",{staticClass:"custom-block warn"},[a("p",{staticClass:"custom-block-title"},[e._v("ВНИМАНИЕ")]),e._v(" "),a("p",[e._v("Conditional block commands (if, else, elseif, endif) are not supported in the script text.")])]),e._v(" "),a("p",[e._v("When an existing naninovel script is selected via dropdown list, the script text area will be ignored and selected naninovel script will be played "),a("strong",[e._v("instead")]),e._v(" of the currently played one; in case you wish to additively execute some commands without interrupting the currently played script, use the script text area.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
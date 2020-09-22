(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{373:function(e,t,a){"use strict";a.r(t);var i=a(42),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"naninovel-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naninovel-scripts"}},[e._v("#")]),e._v(" Naninovel Scripts")]),e._v(" "),a("p",[e._v("Naninovel scripts are text documents ("),a("code",[e._v(".nani")]),e._v(" extension) where you control what happens on scenes. Script assets are created with "),a("code",[e._v("Create -> Naninovel -> Naninovel Script")]),e._v(" asset context menu. You can open and edit them with the built-in "),a("a",{attrs:{href:"#visual-editor"}},[e._v("visual editor")]),e._v(" or with an external text editor of your choice, like Notepad, TextEdit or "),a("a",{attrs:{href:"https://atom.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atom"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/f552c2ef323f9ec1171eba72e0c55432.png",alt:""}})]),e._v(" "),a("p",[e._v("Each line in a naninovel script represents a statement, which can be a command, generic text, label or a comment. Type of the statement is determined by the literal that is placed at the start of the line:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Literal")]),e._v(" "),a("th",[e._v("Statement Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("@")]),e._v(" "),a("td",[a("a",{attrs:{href:"#command-lines"}},[e._v("Command")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("#")]),e._v(" "),a("td",[a("a",{attrs:{href:"#label-lines"}},[e._v("Label")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v(";")]),e._v(" "),a("td",[a("a",{attrs:{href:"#comment-lines"}},[e._v("Comment")])])])])]),e._v(" "),a("p",[e._v("When none of the above literals are present at the start of the line, it's considered a "),a("a",{attrs:{href:"#generic-text-lines"}},[e._v("generic text")]),e._v(" statement.")]),e._v(" "),a("h2",{attrs:{id:"command-lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-lines"}},[e._v("#")]),e._v(" Command Lines")]),e._v(" "),a("p",[e._v("Line is considered a command statement if it starts with a "),a("code",[e._v("@")]),e._v(" literal. Command represents a single operation, that controls what happens on the scene; eg, it can be used to change a background, move a character or load another naninovel script.")]),e._v(" "),a("h3",{attrs:{id:"command-identifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-identifier"}},[e._v("#")]),e._v(" Command Identifier")]),e._v(" "),a("p",[e._v("Right after the command literal a command identifier is expected. This could either be name of the C# class that implements the command or the command's alias (if it's applied via "),a("code",[e._v("CommandAlias")]),e._v(" attribute).")]),e._v(" "),a("p",[e._v("For example, "),a("a",{attrs:{href:"/api/#save",target:"_blank"}},[a("code",[e._v("@save")])]),e._v(" command (used to auto-save the game) is implemented via the "),a("code",[e._v("AutoSave")]),e._v(" C# class. The implementing class also has a "),a("code",[e._v('[CommandAlias("save")]')]),e._v(" attribute applied, so you can use both "),a("code",[e._v("@save")]),e._v(" and "),a("code",[e._v("@AutoSave")]),e._v(" statements in the script to invoke this command.")]),e._v(" "),a("p",[e._v("Command identifiers are case-insensitive; all the following statements are valid and will invoke the same "),a("code",[e._v("AutoSave")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@save\n@Save\n@AutoSave\n@autosave\n")])])]),a("h3",{attrs:{id:"command-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-parameters"}},[e._v("#")]),e._v(" Command Parameters")]),e._v(" "),a("p",[e._v("Most of the commands have a number of parameters that define the effect of the command. Parameter is a key-value expression defined after the command literal separated by a column ("),a("code",[e._v(":")]),e._v("). Parameter identifier (key) could be either name of the corresponding parameter field of the command implementation class or the parameter's alias (if defined via "),a("code",[e._v("alias")]),e._v(" property of "),a("code",[e._v("CommandParameter")]),e._v(" attribute).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@commandId paramId:paramValue \n")])])]),a("p",[e._v("Consider a "),a("a",{attrs:{href:"/api/#hidechars",target:"_blank"}},[a("code",[e._v("@hideChars")])]),e._v(" command, which is used to hide all visible characters on the scene. It could be used as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@hideChars\n")])])]),a("p",[e._v("You can use a "),a("code",[e._v("time")]),e._v(" "),a("em",[e._v("Decimal")]),e._v(" parameter here to control for how long the characters will fade-out before becoming completely hidden (removed from scene):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@hideChars time:5.5\n")])])]),a("p",[e._v("This will make the characters to fade-out for 5.5 seconds, before completely removing them from scene.")]),e._v(" "),a("p",[e._v("You can also use a "),a("code",[e._v("wait")]),e._v(" "),a("em",[e._v("Boolean")]),e._v(" parameter to specify whether next command should be executed immediately after or wait for the completion of the current command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@hideChars time:5.5 wait:false\n@hidePrinter\n")])])]),a("p",[e._v("This will hide the text printer right after characters will begin to fade-out. If "),a("code",[e._v("wait")]),e._v(" would be "),a("code",[e._v("true")]),e._v(" or not specified, the printer would be hidden only when the "),a("a",{attrs:{href:"/api/#hidechars",target:"_blank"}},[a("code",[e._v("@hideChars")])]),e._v(" complete the execution.")]),e._v(" "),a("h3",{attrs:{id:"parameter-value-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-value-types"}},[e._v("#")]),e._v(" Parameter Value Types")]),e._v(" "),a("p",[e._v("Depending on the command parameter, it could expect one of the following value types:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("String")]),e._v(" "),a("td",[e._v("A simple string value, eg: "),a("code",[e._v("LoremIpsum")]),e._v(". Don't forget to wrap the string in double quotes in case it contain spaces, eg: "),a("code",[e._v('"Lorem ipsum dolor sit amet."')]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("Integer")]),e._v(" "),a("td",[e._v("A number which is not a fraction; a whole number, eg: "),a("code",[e._v("1")]),e._v(", "),a("code",[e._v("150")]),e._v(", "),a("code",[e._v("-25")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("Decimal")]),e._v(" "),a("td",[e._v("A decimal number with fraction delimited by a dot, eg: "),a("code",[e._v("1.0")]),e._v(", "),a("code",[e._v("12.08")]),e._v(", "),a("code",[e._v("-0.005")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("Can have one of two possible values: "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")]),e._v(" (case-insensitive).")])]),e._v(" "),a("tr",[a("td",[e._v("Named<>")]),e._v(" "),a("td",[e._v("A name string associated with a value of one of the above types. The name part is delimited by a dot. Eg for "),a("em",[e._v("Named<Integer>")]),e._v(": "),a("code",[e._v("foo.8")]),e._v(", "),a("code",[e._v("bar.-20")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("List<>")]),e._v(" "),a("td",[e._v("A comma-separated list of values of one of the above types. Eg for "),a("em",[e._v("List<String>")]),e._v(": "),a("code",[e._v('foo,bar,"Lorem ipsum."')]),e._v(", for "),a("em",[e._v("List<Decimal>")]),e._v(": "),a("code",[e._v("12,-8,0.105,2")])])])])]),e._v(" "),a("h3",{attrs:{id:"nameless-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nameless-parameters"}},[e._v("#")]),e._v(" Nameless Parameters")]),e._v(" "),a("p",[e._v("Most of the commands have a nameless parameter. A parameter is considered nameless when it could be used without specifying its name.")]),e._v(" "),a("p",[e._v("For example, a "),a("a",{attrs:{href:"/api/#bgm",target:"_blank"}},[a("code",[e._v("@bgm")])]),e._v(" command expects a nameless parameter specifying the name of the music track to play:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@bgm PianoTheme\n")])])]),a("p",[e._v('"PianoTheme" here is the value of the "BgmPath" '),a("em",[e._v("String")]),e._v(" parameter.")]),e._v(" "),a("p",[e._v("There could be only one nameless parameter per command and it should always be specified before any other parameters.")]),e._v(" "),a("h3",{attrs:{id:"optional-and-required-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-and-required-parameters"}},[e._v("#")]),e._v(" Optional and Required Parameters")]),e._v(" "),a("p",[e._v("Most of the command parameters are "),a("em",[e._v("optional")]),e._v(". It means they either have a predefined value or just doesn't require any value in order for the command to be executed. For example, when a "),a("a",{attrs:{href:"/api/#resettext",target:"_blank"}},[a("code",[e._v("@resetText")])]),e._v(" command is used without specifying any parameters it will reset text of a default printer, but you can also set a specific printer ID like this: "),a("code",[e._v("@resetText printer:Dialogue")]),e._v(".")]),e._v(" "),a("p",[e._v("Some parameters however are "),a("em",[e._v("required")]),e._v(" in order for the command to execute and should always be specified.")]),e._v(" "),a("h3",{attrs:{id:"commands-api-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands-api-reference"}},[e._v("#")]),e._v(" Commands API Reference")]),e._v(" "),a("p",[e._v("For the list of all the currently available commands with a summary, parameters and usage examples see "),a("RouterLink",{attrs:{to:"/ru/api/"}},[e._v("commands API reference")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"generic-text-lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-text-lines"}},[e._v("#")]),e._v(" Generic Text Lines")]),e._v(" "),a("p",[e._v("To make writing scripts with large amounts of text more comfortable generic text lines are used. Line is considered a generic text statement if doesn't start with any of the predefined statement literals:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n")])])]),a("p",[e._v("An author ID can be specified at the start of a generic text line separated by a column ("),a("code",[e._v(":")]),e._v(") to associate printed text with a "),a("RouterLink",{attrs:{to:"/ru/guide/characters.html"}},[e._v("character actor")]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Felix: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n")])])]),a("p",[e._v("To save some typing when constantly changing character appearances associated with printed text, you can also specify appearance after the author ID:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Felix.Happy: Lorem ipsum dolor sit amet.\n")])])]),a("p",[e._v("The above line is equal to the following two:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@char Felix.Happy wait:false\nFelix: Lorem ipsum dolor sit amet.\n")])])]),a("h3",{attrs:{id:"command-inlining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-inlining"}},[e._v("#")]),e._v(" Command Inlining")]),e._v(" "),a("p",[e._v("Sometimes, you may want to execute a command while revealing (printing) a text message, right after or before a specific character. For example, an actor would change their appearance (expression) when a specific word is printed or a particular sound effect would be played in reaction to some event described in the midst of a printed message. Command inlining feature allows to handle cases like that.")]),e._v(" "),a("p",[e._v("All the commands (both "),a("RouterLink",{attrs:{to:"/ru/api/"}},[e._v("built-in")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ru/guide/custom-commands.html"}},[e._v("custom ones")]),e._v(") can be inlined (injected) to generic text lines using square brackets ("),a("code",[e._v("[")]),e._v(","),a("code",[e._v("]")]),e._v("):")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Felix: Lorem ipsum[char Felix.Happy pos:0.75 wait:false] dolor sit amet, consectetur adipiscing elit.[i] Aenean tempus eleifend ante, ac molestie metus condimentum quis.[i][br 2] Morbi nunc magna, consequat posuere consectetur in, dapibus consectetur lorem. Duis consectetur semper augue nec pharetra.\n")])])]),a("p",[e._v("Notice, that the inlined command syntax is exactly the same, except "),a("code",[e._v("@")]),e._v(" literal is omitted and command body is wrapped in square brackets. Basically, you can take any command line, inline it to a generic text line and it will have the exact same effect, but at a different moment, depending on the position inside text message.")]),e._v(" "),a("p",[e._v("Under the hood, generic text lines are parsed into individual commands identified by inline index; text is printed with "),a("a",{attrs:{href:"/ru/api/#print",target:"_blank"}},[a("code",[e._v("@print")])]),e._v(" command. For example, following generic text line in a naninovel script:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Lorem ipsum[char Felix.Happy pos:75 wait:false] dolor sit amet.\n")])])]),a("p",[e._v("— is actually handled by the engine as a sequence of individual commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@print "Lorem ipsum" waitInput:false\n@char Felix.Happy pos:75 wait:false\n@print "dolor sit amet."\n')])])]),a("p",[e._v("To actually print square brackets via a generic text line, escape them with backslashes, eg:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Some text \\[ text inside brackets \\]\n")])])]),a("p",[e._v('— will print "Some text [ text inside brackets ]" in-game.')]),e._v(" "),a("h2",{attrs:{id:"label-lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label-lines"}},[e._v("#")]),e._v(" Label Lines")]),e._v(" "),a("p",[e._v('Labels are used as "anchors" when navigating the naninovel scripts with '),a("a",{attrs:{href:"/ru/api/#goto",target:"_blank"}},[a("code",[e._v("@goto")])]),e._v(" commands. To define a label, use a "),a("code",[e._v("#")]),e._v(" literal at the start of the line followed with label name:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Epilogue\n")])])]),a("p",[e._v("You can then use a "),a("a",{attrs:{href:"/ru/api/#goto",target:"_blank"}},[a("code",[e._v("@goto")])]),e._v(' command to "jump" to that line:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@goto ScriptName.Epilogue\n")])])]),a("p",[e._v("In case you're using "),a("a",{attrs:{href:"/ru/api/#goto",target:"_blank"}},[a("code",[e._v("@goto")])]),e._v(" command from within the same script where the label is defined, you can omit the script name:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@goto .Epilogue\n")])])]),a("h2",{attrs:{id:"comment-lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comment-lines"}},[e._v("#")]),e._v(" Comment Lines")]),e._v(" "),a("p",[e._v("When line starts with a semicolon literal ("),a("code",[e._v(";")]),e._v(") it's considered a comment statement. Comment lines are completely ignored by the engine when scripts are parsed. You can use comment lines to add notes or annotations for yourself or other team members who work with naninovel scripts.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("; The following command will auto-save the game.\n@save\n")])])]),a("h2",{attrs:{id:"conditional-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-execution"}},[e._v("#")]),e._v(" Conditional Execution")]),e._v(" "),a("p",[e._v("While the script are executed in a linear fashion by default, you can introduce branching using "),a("code",[e._v("if")]),e._v(" parameters supported by all the commands.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('; If `level` value is a number and is greater than 9000, add the choice.\n@choice "It\'s over 9000!" if:level>9000\n\n; If `dead` variable is a bool and equal to `false`, execute the print command.\n@print text:"I\'m still alive." if:!dead\n\n; If `glitch` is a bool and equals `true` or random function in 1 to 10 range \n; returns 5 or more, execute `@spawn` command.\n@spawn GlitchCamera if:"glitch || Random(1, 10) >= 5"\n\n; If `score` value is in 7 to 13 range or `lucky` variable is a bool and equals \n; `true`, load `LuckyEnd` script.\n@goto LuckyEnd if:"(score >= 7 && score <= 13) || lucky"\n\n; You can also use conditionals in the inlined commands.\nLorem sit amet. [style bold if:score>=10]Consectetur elit.[style default]\n\n; When using double quotes inside the expression itself, \n; don\'t forget to double-escape them.\n@print {remark} if:remark=="Saying \\\\"Stop the car\\\\" was a mistake."\n')])])]),a("p",[e._v("It's also possible to specify multi-line conditional blocks with "),a("a",{attrs:{href:"/ru/api/#if",target:"_blank"}},[a("code",[e._v("@if")])]),e._v(", "),a("a",{attrs:{href:"/ru/api/#else",target:"_blank"}},[a("code",[e._v("@else")])]),e._v(", "),a("a",{attrs:{href:"/ru/api/#elseif",target:"_blank"}},[a("code",[e._v("@elseif")])]),e._v(" and "),a("a",{attrs:{href:"/ru/api/#endif",target:"_blank"}},[a("code",[e._v("@endif")])]),e._v(" commands.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@if score>10\n\tGood job, you've passed the test!\n\t@bgm Victory\n\t@spawn Fireworks\n@elseif attempts>100\n\tYou're hopeless... Need help?\n\t@choice \"Yeah, please!\" goto:.GetHelp\n\t@choice \"I'll keep trying.\" goto:.BeginTest\n\t@stop\n@else\n\tYou've failed. Try again!\n\t@goto .BeginTest\n@endif\n")])])]),a("p",[e._v("Note that tabs here are completely optional and used just for better readability.")]),e._v(" "),a("p",[e._v("The same works for generic text lines:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Lorem ipsum dolor sit amet. [if score>10]Duis efficitur imperdiet nunc. [else]Vestibulum sit amet dolor non dolor placerat vehicula.[endif]\n")])])]),a("p",[e._v("For more information on the conditional expression format and available operators see the "),a("RouterLink",{attrs:{to:"/ru/guide/script-expressions.html"}},[e._v("script expressions")]),e._v(" guide.")],1),e._v(" "),a("h2",{attrs:{id:"visual-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-editor"}},[e._v("#")]),e._v(" Visual Editor")]),e._v(" "),a("p",[e._v("You can use visual script editor to edit the naninovel scripts. Select a script asset and you'll see the visual editor automatically open in the inspector window.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/ba57b9f78116e57408125325bdf66be9.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("To add a new line to the script, either right-click the place, where you want to insert the line, or press "),a("code",[e._v("Ctrl+Space")]),e._v(' (you can change the default key bindings in the input configuration menu) and select the desired line or command type. To re-order lines, drag them using their number labels. To remove a line, right-click it and choose "Remove".')]),e._v(" "),a("p",[e._v("When you've changed the script using visual editor, you'll see an asterisk ("),a("code",[e._v("*")]),e._v(") over the script name in the inspector header. That means the asset is dirty and need to be saved; press "),a("code",[e._v("Ctrl+S")]),e._v(" to save the asset. In case you'll attempt to select another asset while the script is dirty, a dialogue window will pop-up allowing to either save or revert the changes.")]),e._v(" "),a("p",[e._v("The visual editor will automatically sync edited script if you update it externally, so you can seamlessly work with the scripts in both text and visual editors. In case auto-sync is not working, make sure "),a("code",[e._v("Auto Refresh")]),e._v(" is enabled in the "),a("code",[e._v("Edit -> Preferences -> General")]),e._v(" Unity editor menu.")]),e._v(" "),a("p",[e._v("During the playmode, you can use visual editor to track which script line is currently being played and right-click a line to rewind the playback. This feature requires the script to have equal resource ID (when assigned in the resources manager menu) and asset name.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/b6e04d664ce4b513296b378b7c25be03.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("Currently played line will be highlighted with green color; when script playback is halted due waiting for user input, played line will be highlighted with yellow instead.")]),e._v(" "),a("p",[e._v("You can tweak the editor behavior and looks in the scripts configuration menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/4b4b2608e7662b02a61b00734910308c.png",alt:""}})]),e._v(" "),a("p"),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/9UmccF9R9xI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p"),e._v(" "),a("h2",{attrs:{id:"script-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-graph"}},[e._v("#")]),e._v(" Script Graph")]),e._v(" "),a("p",[e._v("When working with large amount of scripts and non-linear stories, it could become handy to have some kind of visual representation of the story flow. This is where script graph tool comes in handy.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/0dd3ec2393807fb03d501028e1526895.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("To open the graph window use "),a("code",[e._v("Naninovel -> Script Graph")]),e._v(" editor menu. You can dock the window as any other editor panel if you like to.")]),e._v(" "),a("p",[e._v("The tool will automatically build graph representation of all the naninovel scripts (represented as nodes) assigned via editor resources ("),a("code",[e._v("Naninovel -> Resources -> Scripts")]),e._v(") and connections between them.")]),e._v(" "),a("p",[e._v("The connections are generated based on "),a("a",{attrs:{href:"/ru/api/#goto",target:"_blank"}},[a("code",[e._v("@goto")])]),e._v(" and "),a("a",{attrs:{href:"/ru/api/#gosub",target:"_blank"}},[a("code",[e._v("@gosub")])]),e._v(" commands. If the command has a conditional expression assigned ("),a("code",[e._v("if")]),e._v(" parameter), corresponding port in the node will be highlighted with yellow and you'll be able to see the expression when hovering the port.")]),e._v(" "),a("p",[e._v("You can select script asset and open visual editor by double-clicking nodes or clicking ports. Clicking the ports will also scroll the visual editor to a line containing label (in case there were a label specified).")]),e._v(" "),a("p",[e._v('You can re-position the nodes as you like and their positions will be automatically saved when closing the graph window or exiting Unity; the positions will then be restored when re-open the window. You can also save manually by clicking "Save" button. Clicking "Auto Align" button will reset all the positions.')]),e._v(" "),a("p",[e._v('When changing scripts or adding new ones, click "Rebuild Graph" button to sync it.')]),e._v(" "),a("h2",{attrs:{id:"hot-reload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hot-reload"}},[e._v("#")]),e._v(" Hot Reload")]),e._v(" "),a("p",[e._v("It's possible to edit scripts at play mode (via both visual and external editors) and have the changes applied immediately, without game restart. The feature is controlled via "),a("code",[e._v("Hot Reload Scripts")]),e._v(" property in the scripts configuration and is enabled by default.")]),e._v(" "),a("p",[e._v("When modifying, adding or removing a line before the currently played one, state rollback will automatically happen to the modified line to prevent state inconsistency.")]),e._v(" "),a("p",[e._v("In case hot reload is not working, make sure "),a("code",[e._v("Auto Refresh")]),e._v(" is enabled and "),a("code",[e._v("Script Changes While Playing")]),e._v(" is set to "),a("code",[e._v("Recompile And Continue Playing")]),e._v(". Both properties can be found at "),a("code",[e._v("Edit -> Preferences -> General")]),e._v(" Unity editor menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/5d433783e1a12531c79fe6be80c92da7.png",alt:""}})]),e._v(" "),a("p",[e._v("To manually initiate hot reload of the currently played naninovel script (eg, when editing script file outside of Unity project), use "),a("code",[e._v("reload")]),e._v(" "),a("RouterLink",{attrs:{to:"/ru/guide/development-console.html"}},[e._v("console command")]),e._v(". The command is editor-only (won't work in builds).")],1),e._v(" "),a("h2",{attrs:{id:"ide-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide-support"}},[e._v("#")]),e._v(" IDE Support")]),e._v(" "),a("p",[e._v("IDE features, like syntax highlighting, error checking, auto-completion and interactive documentation could significantly increase productivity when writing scripts. We've made an extension for a free and open-source "),a("a",{attrs:{href:"https://atom.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atom editor"),a("OutboundLink")],1),e._v(" (available for Windows, MacOS and Linux), which provides the essential IDE support for NaniScript syntax.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/e3de33e372887b0466ea513576beadd0.png",alt:""}})]),e._v(" "),a("p",[e._v("To use the extension:")]),e._v(" "),a("ol",[a("li",[e._v("Install "),a("a",{attrs:{href:"https://atom.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atom editor"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Install "),a("a",{attrs:{href:"https://atom.io/packages/language-naniscript",target:"_blank",rel:"noopener noreferrer"}},[e._v("language-naniscript"),a("OutboundLink")],1),e._v(" extension")]),e._v(" "),a("li",[e._v("Install "),a("a",{attrs:{href:"https://atom.io/packages/atom-ide-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("atom-ide-ui"),a("OutboundLink")],1),e._v(" extension (required for our extension to provide some of the features)")]),e._v(" "),a("li",[e._v("Restart the Atom editor")]),e._v(" "),a("li",[e._v("Open a folder with naninovel scripts (opening a single file won't activate the extension)")])]),e._v(" "),a("p",[e._v("Check the following video tutorial on activating and using the extension.")]),e._v(" "),a("p"),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/njKxsjtewzA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p"),e._v(" "),a("p",[e._v("Support for other editors is possible in the future; check "),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelWeb/issues/56#issuecomment-492987029",target:"_blank",rel:"noopener noreferrer"}},[e._v("the issue on GitHub"),a("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),a("h2",{attrs:{id:"scripts-debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts-debug"}},[e._v("#")]),e._v(" Scripts Debug")]),e._v(" "),a("p",[e._v("When working with large naninovel scripts, it could become tedious to always play them from start in order to check how things work in particular parts of the script.")]),e._v(" "),a("p",[e._v("Using "),a("RouterLink",{attrs:{to:"/ru/guide/development-console.html"}},[e._v("development console")]),e._v(' you can instantly "rewind" currently played script to an arbitrary line:')],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rewind 12\n")])])]),a("p",[e._v("— will start playing current script from the 12th line; you can rewind forward and backward in the same way. To open the console while game is running, make sure the console is enabled in the engine configuration and press "),a("code",[e._v("~")]),e._v(" key (can be changed in the configuration) or perform multi-touch (3 or more simultaneous touches) in case the build is running on a touchscreen device.")]),e._v(" "),a("p",[e._v("To find out which script and line is currently playing, use debug window: type "),a("code",[e._v("debug")]),e._v(" in the development console and press "),a("code",[e._v("Enter")]),e._v(" to show the window.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/12772ecc7c14011bcde4a74c81e997b8.png",alt:"Scripts Debug"}})]),e._v(" "),a("p",[e._v("Currently played script name, line number and command (inline) index are displayed in the title of the window. When "),a("RouterLink",{attrs:{to:"/ru/guide/voicing.html#auto-voicing"}},[e._v("auto voicing")]),e._v(' feature is enabled, name of the corresponding voice clip will also be displayed. You can re-position the window by dragging it by the title. "Stop" button will halt script execution; when script player is stopped "Play" button will resume the execution. You can close the debug window by pressing the "Close" button.')],1),e._v(" "),a("p",[e._v("Debug window is available in both editor and player builds.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
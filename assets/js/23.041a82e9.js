(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{486:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"custom-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-variables"}},[a._v("#")]),a._v(" Custom Variables")]),a._v(" "),s("p",[a._v("Custom variables feature allows to create user-specified variables, modify and use them to drive conditional execution of naninovel scripts or other systems. For example, custom variables can be used to select one of the multiple naninovel scripts to play (scenario routes), based on the decisions player has made in the past. Another frequently used scenario is player stats screen (eg, scores, money, resources etc), based on the choices the player makes throughout the game.")]),a._v(" "),s("p",[a._v("Custom variables can be created, modified and used both in naninovel scripts via "),s("a",{attrs:{href:"/api/#set",target:"_blank"}},[s("code",[a._v("@set")])]),a._v(" and "),s("a",{attrs:{href:"/api/#if",target:"_blank"}},[s("code",[a._v("@if")])]),a._v(" commands and in the C# scripts using "),s("code",[a._v("ICustomVariableManager")]),a._v(" "),s("RouterLink",{attrs:{to:"/guide/engine-services.html"}},[a._v("engine service")]),a._v(".")],1),a._v(" "),s("p",[a._v("For example, the following script command will assign a different value to "),s("code",[a._v("score")]),a._v(" custom variable, based on the choice:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"I\'m humble, one is enough..."')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" set:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score=1")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Two, please."')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" set:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score=2")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"I\'ll take your entire stock!"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" set:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score=999")])])]),a._v("\n")])])]),s("p",[a._v("And the following one will re-route the script execution based on the value of the "),s("code",[a._v("score")]),a._v(" variable:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MainRoute")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"score > 1 && score <= 900"')])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("BadEnd")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score>900")])])]),a._v("\n")])])]),s("p",[a._v("See the API reference on "),s("a",{attrs:{href:"/api/#set",target:"_blank"}},[s("code",[a._v("@set")])]),a._v(" and "),s("a",{attrs:{href:"/api/#if",target:"_blank"}},[s("code",[a._v("@if")])]),a._v(" commands for more examples.")]),a._v(" "),s("p",[a._v("All the custom variables are automatically saved with the game. By default, the variables are stored in "),s("strong",[a._v("local scope")]),a._v(". This means, that if you assign some variable in the course of gameplay and player starts a new game or loads another saved game slot, where that variable wasn't assigned — the value will be lost. This is useful for the most type of variables. If, however, you wish to store the variable in "),s("strong",[a._v("global scope")]),a._v(", prepend "),s("code",[a._v("G_")]),a._v(" or "),s("code",[a._v("g_")]),a._v(" to its name, eg: "),s("code",[a._v("G_FinishedMainRoute")]),a._v(" or "),s("code",[a._v("g_total_score")]),a._v(". Global variables can be used to indicate some meta or total information, for example, the number of times player has finished some route or a total score based on all the playthroughs.")]),a._v(" "),s("p",[a._v('You can set pre-defined custom variables (both global and local) with initial values in the "Custom Variables" configuration menu.')]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/21701f17403921e34ba4da33b0261ad0.png",alt:""}})]),a._v(" "),s("p",[a._v("Global pre-defined variables are initialized on first application start, while the locals do so on each state reset. Notice, that the value field in the menu expects a valid script expression and not a raw value string.")]),a._v(" "),s("h2",{attrs:{id:"injecting-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#injecting-variables"}},[a._v("#")]),a._v(" Injecting Variables")]),a._v(" "),s("p",[a._v("It's possible to inject (inline) custom variable to naninovel script parameter values using the curly braces.")]),a._v(" "),s("p",[a._v("The following script will show an input field UI where user can enter an arbitrary text. Upon submit the entered text will be assigned to the specified custom variable.")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Allow user to enter an arbitrary text and assign it to `name` custom state variable")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@input")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" summary:")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Choose your name."')])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Stop command is required to halt script execution until user submits the input")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; You can then inject the assigned `name` variable in naninovel scripts")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Archibald: Greetings, "),s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{name}")]),a._v("!")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{name}")]),a._v(": Yo!")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; ...or use it inside set and conditional expressions")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score=score+1")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("name==")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Felix"')])])]),a._v("\n")])])]),s("p",[a._v("You can inject the custom variables to any parameter values as long as the type allows. Eg, you can't assign a string (text) to an integer (number) parameter.")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('PlayerName="Felix";PlayerYPosition=0.1;PlayerTint="lightblue"')])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; The following will produce an error, as `PlayerTint` is not a number.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),s("span",{pre:!0,attrs:{class:"token whitespaces"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{PlayerName}")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("50,")])]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{PlayerTint}")]),s("span",{pre:!0,attrs:{class:"token whitespaces"}},[a._v(" ")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; ...and this will execute just fine.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),s("span",{pre:!0,attrs:{class:"token whitespaces"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{PlayerName}")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("50,")])]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{PlayerYPosition}")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" tint:")])]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{PlayerTint}")])]),a._v("\n")])])]),s("h2",{attrs:{id:"variable-triggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variable-triggers"}},[a._v("#")]),a._v(" Variable Triggers")]),a._v(" "),s("p",[a._v("When building a "),s("RouterLink",{attrs:{to:"/guide/user-interface.html#ui-customization"}},[a._v("custom UI")]),a._v(" or other systems, you may want to listen (react) for events when a variable value is changed. For example, when building a character stats screen, you want make the text to change with the variables. While the conventional way to implement such behavior would be using a C# script, you can also make use of "),s("code",[a._v("Custom Variable Trigger")]),a._v(" component. The component will invoke Unity events when a variable with specified name is changed. You can bind compatible commands with those events, such as updating the text values.")],1),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/22eddd109e76d4e63c461e9d75b20ceb.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"variables-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables-debug"}},[a._v("#")]),a._v(" Variables Debug")]),a._v(" "),s("p",[a._v("While the game is running it's possible to view all the existing variables and change their values for debugging purposes.")]),a._v(" "),s("p",[a._v("Open "),s("RouterLink",{attrs:{to:"/guide/development-console.html"}},[a._v("development console")]),a._v(" and enter "),s("code",[a._v("var")]),a._v(" command to open the variables editor window.")],1),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/d1812668c0776b01f3a82c5ddcba0145.png",alt:""}})]),a._v(" "),s("p",[a._v('When changing value of a variable in the list, a "SET" button will appear, which you can press to apply the changes.')]),a._v(" "),s("p",[a._v("The variables list is automatically updated when the custom variables are changed while running the game.")]),a._v(" "),s("h2",{attrs:{id:"using-custom-variables-in-c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-custom-variables-in-c"}},[a._v("#")]),a._v(" Using Custom Variables in C#")]),a._v(" "),s("p",[a._v("The custom variables can be accessed in C# via "),s("code",[a._v("ICustomVariableManager")]),a._v(" "),s("RouterLink",{attrs:{to:"/guide/engine-services.html"}},[a._v("engine service")]),a._v(".")],1),a._v(" "),s("p",[a._v("To get a variable value use "),s("code",[a._v("GetVariableValue(name)")]),a._v(" method and "),s("code",[a._v("SetVariableValue(name, value)")]),a._v(' to set variable value; eg, given a "MyVariable" custom string variable exists, the below code will retrieve it, append "Hello!" string to the value and set it back.')]),a._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" variableManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("ICustomVariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" myValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" variableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetVariableValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyVariableName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmyValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nvariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("SetVariableValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyVariable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" myValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Be aware, that all the custom variable values are stored as strings. If you want to use them as other types (eg, integer, boolean, etc), you have to parse the returned string values to the desired type and cast them back to strings when setting the values. For most common data types extension methods are available in Naninovel v1.13 and later, eg:")]),a._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" variableManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("ICustomVariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nvariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("TryGetVariableValue")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyFloatVariableName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("out")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" floatValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nDebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('$"My float variable value: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[a._v("floatValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nvariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("TryGetVariableValue")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyIntegerVariableName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("out")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" intValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nDebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('$"My integer variable value: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[a._v("intValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nvariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("TryGetVariableValue")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyBooleanVariableName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("out")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" boolValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nDebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('$"My boolean variable value: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[a._v("boolValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nfloatValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.5f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nvariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("TrySetVariableValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyFloatVariableName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" floatValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nintValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nvariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("TrySetVariableValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyIntegerVariableName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" intValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nboolValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("boolValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nvariableManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("TrySetVariableValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MyBooleanVariableName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" boolValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
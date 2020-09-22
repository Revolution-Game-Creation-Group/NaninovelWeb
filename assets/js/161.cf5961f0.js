(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{442:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置"}},[t._v("#")]),t._v(" 自定义配置")]),t._v(" "),a("p",[t._v("配置物体用于初始化和配置服务以及其他引擎系统。\nConfiguration objects are used to initialize and configure services and other engine systems.")]),t._v(" "),a("p",[t._v("默认情况下，配置物体被序列化为"),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-ScriptableObject.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("可编程物体"),a("OutboundLink")],1),t._v(" 存储在"),a("code",[t._v("NaninovelData/Resources/Naninovel/Configuration")]),t._v("路径。该资源会在第一次打开"),a("code",[t._v("Naninovel -> Configuration")]),t._v("菜单时自动生成。")]),t._v(" "),a("p",[t._v("要通过C＃访问配置对象，请使用 "),a("code",[t._v("Engine.GetConfiguration<T>()")]),t._v("静态方法，其中，"),a("code",[t._v("T")]),t._v("是要访问的配置对象的类型。例如，以下示例演示了如何访问 "),a("RouterLink",{attrs:{to:"/zh/guide/configuration.html#音频"}},[t._v("音频配置")]),t._v("对象：")],1),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" audioConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfiguration")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AudioConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("请注意，该"),a("code",[t._v("Engine.GetConfiguration")]),t._v(" 方法只能在引擎初始化时使用，因为它需要"),a("RouterLink",{attrs:{to:"/zh/guide/custom-configuration.html#配置加载器"}},[t._v("配置提供程序")]),t._v(" 对象，该对象是在初始化引擎时，在运行时允许自定义服务方案时指定的。如果你想通过默认加载器获取配置，在引擎未初始化的时候也可以通过"),a("code",[t._v("ProjectConfigurationProvider")]),t._v("实现，如下：")],1),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" audioConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ProjectConfigurationProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadOrDefault")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AudioConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("虽然可以通过编辑器菜单更改配置属性，但仍可以在运行时对其进行修改。注意，修改其实是被应用到存储在项目中的实际物体上的。如果修改，在运行中会一直生效。这和通过"),a("code",[t._v("Engine.GetConfiguration")]),t._v(" 方法实现的修改是相反的，这个仅影响实例化，而不影响原本的实际物体。")]),t._v(" "),a("p",[t._v("以下是在引擎初始化后立即更改摄像机"),a("code",[t._v("ReferenceResolution")]),t._v("属性配置对象的示例：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModifyConfigAtRuntime")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeInitializeOnLoadMethod")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ModifyConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Initialized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnInitializationFinished")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnInitializationFinished "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" OnInitializationFinished"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" OnInitializationFinished "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnInitializationFinished "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" OnInitializationFinished"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" cameraConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfiguration")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CameraConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cameraConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReferenceResolution "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Vector2Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3840")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2160")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"添加配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加配置"}},[t._v("#")]),t._v(" 添加配置")]),t._v(" "),a("p",[t._v("要添加新的自定义配置，请创建一个具有"),a("code",[t._v("Serializable")]),t._v("属性的C＃类，并继承"),a("code",[t._v("Configuration")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Serializable")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Header")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Custom Header 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tooltip")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tooltip for my custom string."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" MyCustomString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Range")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tooltip")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tooltip for my custom float."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")])]),t._v(" MyCustomFloat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Header")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Custom Header 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" MyCustomArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后，相应的菜单将自动添加到项目设置中，您可以在其中配置自定义配置的属性，像在所有其他内置菜单一样。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/c1163bba83f5d2b6286b100e837bca40.png",alt:""}})]),t._v(" "),a("p",[t._v("要通过C＃访问自定义配置，像内置资产一样使用相同的API：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfiguration")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyCustomConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[t._v("例")]),t._v(" "),a("p",[t._v("在添加的配置菜单中配置背包的示例参考"),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub背包示例"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("p",[t._v("具体来说，自定义配置是通过"),a("a",{attrs:{href:"https://github.com/Elringus/NaninovelInventory/blob/master/Assets/NaninovelInventory/Runtime/InventoryConfiguration.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("InventoryConfiguration.cs"),a("OutboundLink")],1),t._v(" 运行时脚本实现的。")])]),t._v(" "),a("h2",{attrs:{id:"配置加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置加载器"}},[t._v("#")]),t._v(" 配置加载器")]),t._v(" "),a("p",[t._v("可以更改在运行时配置物体提供服务的方式。例如，可以从远程主机上存储的JSON文件中读取配置，而不是静态项目文件。")]),t._v(" "),a("p",[t._v("要指定自定义配置服务方案，请创建C＃类并实现"),a("code",[t._v("IConfigurationProvider")]),t._v("接口。该接口仅包含一个方法，需要一个"),a("code",[t._v("Type")]),t._v("参数返回"),a("code",[t._v("Configuration")]),t._v("对象。由你决定如何构造和配置所请求的类型，只需确保返回的对象的类型等于所请求的对象的类型即可。")]),t._v(" "),a("p",[t._v("以下是自定义配置加载器实现的示例，该示例仅返回默认配置的对象：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomConfigurationProvider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IConfigurationProvider")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Configuration")]),t._v(" GetConfiguration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" defaultAsset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ScriptableObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" defaultAsset "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("准备好自定义配置加载器后，您必须通过创建自定义引擎初始化脚本来使引擎使用它而不是内置的加载器。默认情况，引擎初始化使用的时"),a("code",[t._v("Naninovel/Runtime/Engine/RuntimeInitializer.cs")]),t._v("脚本；可以在创建你自己的初始化脚本的时候用作参考。")]),t._v(" "),a("p",[t._v("另外，如果你的目的只是使用自定义配置加载器，请保留原来的引擎初始化流程，考虑使用可接受加载器作为参数的"),a("code",[t._v("RuntimeInitializer.InitializeAsync(IConfigurationProvider)")]),t._v(" 方法：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UniRx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomInitializer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeInitializeOnLoadMethod")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" InitializeWithCustomProvider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" customProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CustomConfigurationProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        RuntimeInitializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitializeAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Forget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("无论选择哪种方式初始化引擎，都不要忘记在引擎配置菜单中关闭"),a("code",[t._v("Initialize On Application Load")]),t._v("选项以禁用默认初始化过程。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
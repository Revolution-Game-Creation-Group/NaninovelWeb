(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{392:function(a,e,t){"use strict";t.r(e);var r=t(42),n=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),t("p",[a._v("和"),t("RouterLink",{attrs:{to:"/zh/guide/characters.html"}},[a._v("角色")]),a._v(" 相反，背景是用来表示场景"),t("em",[a._v("置后层")]),a._v("的元素：位置，风景或应始终出现在角色"),t("em",[a._v("后面")]),a._v("的任何东西。")],1),a._v(" "),t("p",[a._v("背景元素使用名称，外观，可见性和变换（位置，旋转，比例）定义。它们可以随着时间改变其外观，可见性和各种形态改变。")]),a._v(" "),t("p",[a._v("通过 "),t("code",[a._v("Naninovel -> Configuration -> Backgrounds")]),a._v(" 菜单来配置背景行为表现，相关配置信息参考"),t("RouterLink",{attrs:{to:"/zh/guide/configuration.html#背景"}},[a._v("属性配置")]),a._v("。 可以使用"),t("code",[a._v("Naninovel -> Resources -> Backgrounds")]),a._v("菜单访问背景的资源配置管理器。")],1),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/cccd08280dac72d199ea3465bc167a22.gif",alt:""}})]),a._v(" "),t("p",[a._v("在通过编辑器菜单添加多个背景的时候，可能并不方便，在"),t("code",[a._v("Resources/Naninovel/Backgrounds")]),a._v('目录下直接拖入资源，将其用ID命名的文件夹分类，这样添加也是可以的。比如添加"MainBackground" ID的元素背景，就需要放在'),t("code",[a._v("Resources/Naninovel/Backgrounds/MainBackground")]),a._v("目录下，他们就会被自动被注册至脚本。")]),a._v(" "),t("p",[a._v("你也可以通过子文件夹来管理相应资源。脚本中需要使用("),t("code",[a._v("/")]),a._v(")调用。比如"),t("code",[a._v("Resources/Naninovel/Backgrounds/MainBackground/Events/CG251")]),a._v("的资源，脚本中的调用为："),t("code",[a._v("Events/CG251")]),a._v("。")]),a._v(" "),t("p",[a._v("使用"),t("RouterLink",{attrs:{to:"/zh/guide/resource-providers.html#寻址资源系统"}},[a._v("可寻址资源系统")]),a._v(' 来手动公开资源也是可以的。公开资源地址和上述相同，但是需要省略"Resources/"部分。比如将"Beach"注册到"MainBackground"背景下，地址为'),t("code",[a._v("Naninovel/Backgrounds/MainBackground/Beach")]),a._v("。注意，该系统默认不启用你可以通过资源配置菜单的"),t("code",[a._v("Enable Addressable In Editor")]),a._v("属性来启用。")],1),a._v(" "),t("p",[a._v("在naninovel脚本中，背景大部分由"),t("a",{attrs:{href:"/zh/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v(" 命令控制：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 将 `River` 设为主背景外观")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("River")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 同上，但是使用`RadialBlur`（径向模糊）特效")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("River.RadialBlur")])])]),a._v("\n")])])]),t("p",[a._v("背景处理和角色有略微不同以适应传统VN游戏流程。多数情况，都只需要一个背景元素显示，然后由其变化至两外一张。为了避免在脚本中使用相同的元素ID的麻烦，在使用"),t("code",[a._v("MainBackground")]),a._v(" ID下的元素的时候，可以只用外观名称和过渡效果类型（可选），来调用背景。而其他ID下的背景，则"),t("code",[a._v("id")]),a._v(" 必须定义了，如下所示：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 给定`CityVideo`背景元素下的`Night`和`Day`背景（影片剪辑）")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 显示视频背景，播放白天的影片剪辑")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CityVideo")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 变化至晚上的影片剪辑，使用波浪效果")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Night.Ripple")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CityVideo")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 隐藏视频背景")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hide")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CityVideo")])])]),a._v("\n")])])]),t("p",[a._v("资源管理器中的主背景元素条目是不能被重命名或删除的。但其中的参数（实现，锚点，PPU等）可以任意修改。")]),a._v(" "),t("h2",{attrs:{id:"姿态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#姿态"}},[a._v("#")]),a._v(" 姿态")]),a._v(" "),t("p",[a._v("每个背景都有"),t("code",[a._v("Poses")]),a._v("属性允许指定特定命名状态（姿势）。")]),a._v(" "),t("p",[a._v("姿态使用通过"),t("a",{attrs:{href:"/zh/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v("命令直接调用，如此就可以将姿态的所有设置参数应用于背景上，而非通过单个背景设置其参数，如下所示：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `Day`的姿态配置用于主背景，")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 将该姿态的所有参数应用于背景。pose state.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 同上，但是为`City` ID下的背景，")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 使用3s的`DropFade`过渡效果。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("City")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" transition:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("DropFade")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("3")])])]),a._v("\n")])])]),t("p",[a._v("请注意，将姿态用作外观时，仍然可以覆盖各个参数，例如：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; `Day`的姿态配置用于主背景，")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 将该姿态的所有参数应用于背景，")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 除了着色，由下面的命令来覆写控制。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" tint:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("#ff45cb")])])]),a._v("\n")])])]),t("h2",{attrs:{id:"图片精灵背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片精灵背景"}},[a._v("#")]),a._v(" 图片精灵背景")]),a._v(" "),t("p",[a._v("精灵背景是最通用也是最简单的，使用单个"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/Sprites",target:"_blank",rel:"noopener noreferrer"}},[a._v("精灵"),t("OutboundLink")],1),a._v(" 作为背景。资源类型可为"),t("code",[a._v(".jpg")]),a._v(" 或 "),t("code",[a._v(".png")]),a._v("图像文件。")]),a._v(" "),t("h2",{attrs:{id:"影片背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#影片背景"}},[a._v("#")]),a._v(" 影片背景")]),a._v(" "),t("p",[a._v("硬盘背景使用"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-VideoClip",target:"_blank",rel:"noopener noreferrer"}},[a._v("影片剪辑"),t("OutboundLink")],1),a._v(" 来表现背景。")]),a._v(" "),t("p",[a._v("影片背景可以通过编辑器GUI来管理。")]),a._v(" "),t("p",[a._v("各个平台支持的视频格式参考"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/VideoSources-FileCompatibility.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity视频资源格式说明"),t("OutboundLink")],1),a._v(" 。")]),a._v(" "),t("p",[a._v("作为参考，以下为我们在WebGL的demo上使用的视频详细参数：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Container : MPEG-4\nContainer profile : Base Media\nContainer codec ID : isom (isom/iso2/avc1/mp41)\nFormat : AVC\nFormat/Info : Advanced Video Codec\nFormat profile : High@L4\nFormat settings, CABAC : Yes\nFormat settings, RefFrames : 4 frames\nCodec ID : avc1\nCodec ID/Info : Advanced Video Coding\nBit rate : 3 196 kb/s\nWidth : 1 920 pixels\nHeight : 1 080 pixels\nDisplay aspect ratio : 16:9\nFrame rate mode : Constant\nFrame rate : 25.000 FPS\nColor space : YUV\nChroma subsampling : 4:2:0\nBit depth : 8 bits\nScan type : Progressive\nWriting library : x264 core 148 r2795 aaa9aa8\nEncoding settings : cabac=1 / ref=3 / deblock=1:0:0 / analyse=0x3:0x113 / me=hex / subme=7 / psy=1 / psy_rd=1.00:0.00 / mixed_ref=1 / me_range=16 / chroma_me=1 / trellis=1 / 8x8dct=1 / cqm=0 / deadzone=21,11 / fast_pskip=1 / chroma_qp_offset=-2 / threads=12 / lookahead_threads=2 / sliced_threads=0 / nr=0 / decimate=1 / interlaced=0 / bluray_compat=0 / constrained_intra=0 / bframes=3 / b_pyramid=2 / b_adapt=1 / b_bias=0 / direct=1 / weightb=1 / open_gop=0 / weightp=2 / keyint=250 / keyint_min=25 / scenecut=40 / intra_refresh=0 / rc_lookahead=40 / rc=crf / mbtree=1 / crf=23.0 / qcomp=0.60 / qpmin=0 / qpmax=69 / qpstep=4 / ip_ratio=1.40 / aq=1:1.00\n")])])]),t("p",[a._v("以下为Unity的视频导入设置图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/9e6a9cc0bd79bca2c0e8e35666fbdc7f.png",alt:""}})]),a._v(" "),t("p",[a._v("视发布平台不同，需要看情况勾选转码设置：")]),a._v(" "),t("div",{staticClass:"custom-block example"},[t("p",{staticClass:"custom-block-title"},[a._v("例")]),a._v(" "),t("p",[a._v("如果不能无缝循环，请保证视频最后一帧和第一张是相同的，并且编码格式正确；参考我们的"),t("a",{attrs:{href:"https://github.com/Elringus/VideoLoop",target:"_blank",rel:"noopener noreferrer"}},[a._v("视频循环示例工程"),t("OutboundLink")],1),a._v(" 。")])]),a._v(" "),t("p",[a._v("注意，在WebGL下视频播放只能使用流模式，所以发布至WebGL时，所有视频资源都会被拷贝至"),t("code",[a._v("Assets/StreamingAssets/Backgrounds")]),a._v("文件夹。"),t("strong",[a._v("StreamingAssets")]),a._v("也会出现在工程输出目录；请确保保留由该文件夹，并检查你的web服务器允许读取该目录。")]),a._v(" "),t("h2",{attrs:{id:"多图层背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多图层背景"}},[a._v("#")]),a._v(" 多图层背景")]),a._v(" "),t("p",[a._v("多图层背景允许组合不同层背景，在运行时通过Naninovel独立切换。")]),a._v(" "),t("p",[a._v("要创建该类型背景，使用\nTo create a layered background prefab, use "),t("code",[a._v("Create -> Naninovel -> Background -> Layered")]),a._v(" 菜单，进入"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/EditingInPrefabMode.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("预制体编辑模式"),t("OutboundLink")],1),a._v(" 来组合图层。默认会创建有多个图层，你可以使用或直接删除这些添加自己的。")]),a._v(" "),t("p",[a._v("多图层背景和"),t("RouterLink",{attrs:{to:"/zh/guide/characters.html#分层式人物"}},[a._v("多图层人物")]),a._v(" 类似。关于如何设置和通过脚本调用，可以参考上述链接。")],1),a._v(" "),t("p",[a._v("不要忘了"),t("a",{attrs:{href:"/zh/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v("命令的无名参数是默认为外观和过渡效果类型（而非和"),t("a",{attrs:{href:"/zh/api/#char",target:"_blank"}},[t("code",[a._v("@char")])]),a._v("命令一样的ID和外观），所以如下所示的方式来指定相应资源表现：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v(';  "LayeredForest" 的多图层背景调用')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Group>Layer,Other/Group+Layer,-RootLayer.TransitionType")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("LayeredForest")])])]),a._v("\n")])])]),t("h2",{attrs:{id:"传统模型背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统模型背景"}},[a._v("#")]),a._v(" 传统模型背景")]),a._v(" "),t("p",[a._v("传统背景是最灵活的背景元素实现。在根物体上关联有"),t("code",[a._v("BackgroundActorBehaviour")]),a._v("组件。外观改变或其他参数修改都通过"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity事件"),t("OutboundLink")],1),a._v(" 实现，你可以借此实现任何你想要的表现。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/d8f86c83decfb3c40c8d23602214a743.png",alt:""}})]),a._v(" "),t("p",[a._v("通过菜单"),t("code",[a._v("Create -> Naninovel -> Background -> Generic")]),a._v("来创建模板预制体。")]),a._v(" "),t("p",[a._v("传统背景和传统人物类似，观看视频教程了解如何设置有动作的3D模型为传统人物。")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/HPxhR0I1u2Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("h2",{attrs:{id:"场景背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景背景"}},[a._v("#")]),a._v(" 场景背景")]),a._v(" "),t("p",[a._v("你可以使用"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/CreatingScenes",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity场景"),t("OutboundLink")],1),a._v(" 作为背景来表现场景。")]),a._v(" "),t("p",[a._v("场景背景仅可以通过编辑器GUI来管理；场景资源存储于"),t("code",[a._v("Assets/Scenes")]),a._v("目录。")]),a._v(" "),t("p",[a._v("首先，创建一个（或是移动已有）场景到"),t("code",[a._v("Assets/Scenes")]),a._v("目录下，确保场景中至少有一个"),t("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Camera.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("摄像机"),t("OutboundLink")],1),a._v("。 加载场景背景时，Naninobel会自动为第一个找到的摄像机绑定render texture，之后会将其绑定到背景精灵上，再现到相应场景的背景图层。这样，场景背景就能够和其他背景角色元素共存，并能支持各种过渡效果，和各种显示比例。")]),a._v(" "),t("p",[a._v("确保场景中物体在合适位置，以避免和其他同时加载的场景的物体相互遮挡（比如，在同一个脚本中调用时）。此外，请注意，如果场景背景对象位于全局空间原点（x0 y0 z0）附近，则由Naninovel的主摄像头渲染该对象。为避免这一情况，调整物体偏移远离原点，或是"),t("code",[a._v("Configuration -> Engine -> Override Objects Layer")]),a._v("菜单中调整相关物体"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/Layers.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("层级"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("p",[a._v("在场景完成后，通过"),t("code",[a._v("Naninovel -> Configuration -> Backgrounds")]),a._v("菜单创建新背景元素，选择"),t("code",[a._v("SceneBackground")]),a._v("将其添加到此。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/d69159ab4d93793022018fa8d244f1aa.png",alt:""}})]),a._v(" "),t("p",[a._v("在注册场景背景资源时，"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/BuildSettings.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("build settings"),t("OutboundLink")],1),a._v(" 应该会自动添加该场景，如果报错提示未添加，请检查并手动添加。")]),a._v(" "),t("p",[a._v("你可以使用"),t("a",{attrs:{href:"/zh/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v("来控制创建场景背景元素，如下：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("SceneName")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ActorId")])])]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
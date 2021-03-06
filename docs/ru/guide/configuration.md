﻿# Конфигурация
Конфигурация движка хранится в нескольких скриптовых ассетах, расположенных в папке `Assets/NaninovelData/Resources/Naninovel/Configuration`. Они автоматически генерируются при первом открытии соответствующих меню конфигурации в редакторе Unity.

Используйте `Naninovel -> Configuration` или `Edit -> Project Settings -> Naninovel` для доступа к меню конфигурации.

Обратите внимание, что все меню конфигурации поддерживают [функцию пресетов Unity](https://docs.unity3d.com/Manual/Presets). Это может помочь в создании нескольких пресетов конфигурации при подготовке сборок для различных целевых платформ (например, мобильных, standalone?, консольных и т.д.).

[!55f5c74bfc16e1af2455034647525df3]

Можно изменять объекты конфигурации во время выполнения, добавлять новые пользовательские конфигурации и изменить способ доступа к объектам во время выполнения (например, считывать конфигурацию из JSON файлы, хранящихся на удаленном устройстве?); см. руководство по [пользовательским настройкам](/ru/guide/custom-configuration.md) для получения дополнительной информации.

::: note
Данная информация о конфигурации? актуальна для [Naninovel v1. 10](https://github.com/Elringus/NaninovelWeb/releases).
:::

## Аудио

<div class="config-table">

Свойство | Значение по умолчанию | Описание
--- | --- | ---
Audio Loader | Audio- (адресируемое, проект?) | Отвечает за конфигурацию загрузчика ресурсов, используемого при работе с аудиоресурсами (BGM и SFX).
Voice Loader | Voice- (адресируемое, проект?) |  Отвечает за конфигурацию загрузчика ресурсов, используемого при работе с аудиоресурсами голосовой озвучки.
Default Master Volume | 1 | Уровень звукового мастер-канала при первом запуске игры.
Default Bgm Volume | 1 | Уровень канала BGM при первом запуске игры.
Default Sfx Volume | 1 | Уровень канала SFX при первом запуске игры.
Default Voice Volume | 1 | Уровень канала голосовой озвучки при первом запуске игры.
Enable Auto Voicing | False | При включении параметра каждая команда `PrintText` будет пытаться проиграть голосовой клип из `VoiceResourcesPrefix/ScriptName/LineIndex.ActionIndex`.
Voice Overlap Policy | Prevent Overlap | Диктует принципы обработки одновременно воспроизводящихся голосов:<br> • Allow Overlap – одновременно звучащие голоса будут воспроизводиться без ограничений.<br> • Prevent Overlap — предотвращает одновременное воспроизведение путем остановки воспроизводимого в данный момент голосового клипа перед воспроизведением нового.<br> • Prevent Character Overlap – предотвращает одновременное воспроизведение голосовых клипов для персонажа; голоса разных персонажей (автоматическое озвучивание) и любое количество команд [@voice] могут быть воспроизведены одновременно?.
Custom Audio Mixer | Null | Аудиомикшер для контроля аудиогрупп. По умолчанию использует стандартный, если никакого иного не предоставлено.
Master Volume Handle Name | Master Volume | Имя обработчика микшера (предоставленный параметр) для управления уровнем мастер-канала.
Bgm Group Path | Master/BGM | Путь к группе микшера для управления уровнем BGM канала. *(в англ. тексте опечатка – master volume?)*
Bgm Volume Handle Name | BGM Volume | Имя обработчика микшера (предоставленный параметр) для управления уровнем BGM канала.
Sfx Group Path | Master/SFX | Путь к группе микшера для управления уровнем SFX канала. *(в англ. тексте опечатка – background music?)*
Sfx Volume Handle Name | SFX Volume | Имя обработчика микшера (предоставленный параметр) для управления уровнем SFX канала.
Voice Group Path | Master/Voice | Путь к группе микшера для управления уровнем канала голосовой озвучки. *(в англ. тексте опечатка – sound effects?)*
Voice Volume Handle Name | Voice Volume | Имя обработчика микшера (предоставленный параметр) для управления уровнем канала озвучки.

</div>

## Фоны

<div class="config-table">

Свойство | Значение по умолчанию | Описание
--- | --- | ---
Default Metadata | Object Ref | Метаданные, используемые по умолчанию при создании фоновых акторов, и пользовательские метаданные для созданного актора с неуказанным ID?.
Metadata | Object Ref | Метаданные, используемые при создании фоновых акторов с конкретным ID.
Scene Origin | (0.5, 0.0) | Исходная точка, используемая для отсчета при позиционировании актеров в сцене.
Z Offset | 100 | Начальное смещение по оси Z (глубина) акторов относительно камеры, установленное при создании акторов.
Z Step | 0.1 | Расстояние по оси Z, установленное между акторами при их создании; используется для предотвращения проблем наложения.
Default Easing | Linear | Функция смягчения, используемая по умолчанию для всех анимаций модификации актора (изменение внешности, положения, оттенка и пр.). *(в англ. тексте опечатка – Eeasing?)*
Auto Show On Modify | True | Следует ли автоматически выводить (показывать) актора при выполнении команд модификации.

</div>

## Камера

<div class="config-table">

Свойство | Значение по умолчанию | Описание
--- | --- | ---
Reference Resolution | (1920, 1080) | Эталонное разрешение используется для оценки правильных размеров рендеринга, чтобы спрайтовые ассеты (например, фоны и персонажи) были правильно расположены на сцене. Как правило, должно быть установлено в значение, равное разрешению фоновых текстур, которые вы используете в игре.
Auto Correct Ortho Size | True | Следует ли автоматически корректировать ортогональный размер кадра на основе текущего соотношения сторон дисплея, чтобы обеспечить правильное расположение фонов и персонажей?.
Default Ortho Size | 5.35 | Ортогональный размер, устанавливаемый по умолчанию при отключенной автоматической коррекции.
Initial Position | (0.0, 0.0, -10.0) | Исходное положение камеры в пространстве.
Orthographic | True | Должна ли камера по умолчанию рендерить в ортогональном (включен) или перспективном (отключен) режиме. Не имеет эффекта, когда назначается пользовательский префаб камеры.
Custom Camera Prefab | Null | Префаб с компонентом камеры, используемой для рендеринга. Будет использоваться стандартный, если иного не указано. Если вы хотите настроить некоторые свойства камеры (цвет фона, FOV, HDR и т.д.) или добавить сценарии постобработки, создайте префаб с необходимой настройкой камеры и назначьте данный префаб этому полю.
Use UI Camera | True | Следует ли визуализировать пользовательский интерфейс в отдельной камере. Это позволит использовать раздельные конфигурации для основной камеры и камеры UI и предотвратить влияние эффектов постобработки (изображения) на пользовательский интерфейс за счет незначительных ресурсных расходов на рендеринг.
Custom UI Camera Prefab | Null | Префаб с компонентом камеры, используемой для рендеринга пользовательского интерфейса. Будет использоваться стандартный, если иного не указано. Не имеет никакого эффекта, если параметр `UseUICamera` отключен. *(в англ. тексте опечатка – пропущена точка в конце?)*
Default Easing | Linear | Функция смягчения, используемая по умолчанию для всех модификаций камеры (изменение масштаба, положение, поворот и пр.).
Thumbnail Resolution | (240, 140) | Разрешение, в котором будут захвачены миниатюры для превью в слотах сохранения.
Hide UI In Thumbnails | False | Игнорировать ли слой интерфейса при захвате миниатюр.

</div>

## Characters

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Auto Arrange On Add | True | Whether to evenly distribute characters by X-axis when adding a new character without a specified position.
Default Metadata | Object Ref | Metadata to use by default when creating character actors and custom metadata for the created actor ID doesn't exist.
Metadata | Object Ref | Metadata to use when creating character actors with specific IDs.
Avatar Loader | Character Avatars- (Addressable, Project) | Configuration of the resource loader used with character avatar texture resources.
Scene Origin | (0.5, 0.0) | Origin point used for reference when positioning actors on scene.
Z Offset | 50 | Initial Z-axis offset (depth) from actors to the camera to set when the actors are created.
Z Step | 0.1 | Distance by Z-axis to set between the actors when they are created; used to prevent z-fighting issues.
Default Easing | Smooth Step | Eeasing function to use by default for all the actor modification animations (changing appearance, position, tint, etc).
Auto Show On Modify | True | Whether to automatically reveal (show) an actor when executing modification commands.

</div>

## Choice Handlers

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Default Handler Id | Button List | ID of the choice handler to use by default.
Default Metadata | Object Ref | Metadata to use by default when creating choice handler actors and custom metadata for the created actor ID doesn't exist.
Metadata | Object Ref | Metadata to use when creating choice handler actors with specific IDs.
Default Easing | Linear | Eeasing function to use by default for all the actor modification animations (changing appearance, position, tint, etc).
Auto Show On Modify | True | Whether to automatically reveal (show) an actor when executing modification commands.

</div>

## Custom Variables

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Predefined Variables | Object Ref | The list of variables to initialize by default. Global variables (names starting with `G_` or `g_`) are intialized on first application start, and others on each state reset.

</div>

## Engine

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Generated Data Path | Naninovel Data | Relative (to the application data directory) path to store the automatically generated assets.
Override Objects Layer | False | Whether to assign a specific layer to all the engine objects. Engine's camera will use the layer for the culling mask. Use this to isolate Naninovel objects from being rendered by other cameras.
Objects Layer | 0 | When `Override Objects Layer` is enabled, the specified layer will be assigned to all the engine objects.
Async Exception Log Type | Error | Log type to use for UniTask-related exceptions.
Initialize On Application Load | True | Whether to automatically initialize the engine when application starts.
Show Initialization UI | True | Whether to show a loading UI while the engine is initializing.
Custom Initialization UI | Null | UI to show while the engine is initializing (when enabled). Will use a default one when not provided.
Show Title UI | True | Whether to automatically show title screen UI (main menu) after engine initializaton. You can modify the title UI using UI customization feature (see online guide for more info).
Enable Development Console | True | Whether to enable development console.
Toggle Console Key | Back Quote | Key used to toggle development console. You can also toggle it with a multi (3 or more) touch when using touchscreens.

</div>

## Input

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Spawn Event System | True | Whether to spawn an event system when initializing.
Custom Event System | Null | A prefab with an `EventSystem` component to spawn for input processing. Will spawn a default one when not specified.
Spawn Input Module | True | Whether to spawn an input module when initializing.
Custom Input Module | Null | A prefab with an `InputModule` component to spawn for input processing. Will spawn a default one when not specified.
Touch Frequency Limit | 0.1 | Limits frequency of the registered touch inputs, in seconds.
Process Legacy Bindings | True | Whether to process legacy input bindings. Disable in case you're using Unity's new input system and don't want the legacy bindings to work in addition to input actions.
Bindings | Object Ref | Bindings to process input for.

</div>

## Localization

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Loader | Localization- (Addressable, Project) | Configuration of the resource loader used with the localization resources.
Source Locale | En | Locale of the source project resources (language in which the project assets are being authored).
Default Locale | Null | Locale selected by default when running the game for the first time. Will select `Source Locale` when not specified.

</div>

## Managed Text

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Loader | Text- (Addressable, Project) | Configuration of the resource loader used with the managed text documents.

</div>

## Movies

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Loader | Movies- (Addressable, Project) | Configuration of the resource loader used with movie resources.
Skip On Input | True | Whether to skip movie playback when user activates `cancel` input keys.
Skip Frames | True | Whether to skip frames to catch up with current time.
Fade Duration | 1 | Time in seconds to fade in/out before starting/finishing playing the movie.
Custom Fade Texture | Null | Texture to show while fading. Will use a simple black texture when not provided.
Play Intro Movie | False | Whether to automatically play a movie after engine initialization and before showing the main menu.
Intro Movie Name | Null | Path to the intro movie resource.

</div>

## Resource Provider

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Resource Policy | Static | Dictates when the resources are loaded and unloaded during script execution:<br> • Static — All the resources required for the script execution are pre-loaded when starting the playback (masked with a loading screen) and unloaded only when the script has finished playing. This policy is default and recommended for most cases.<br> • Dynamic — Only the resources required for the next `Dynamic Policy Steps` commands are pre-loaded during the script execution and all the unused resources are unloaded immediately. Use this mode when targetting platforms with strict memory limitations and it's impossible to properly organize naninovel scripts. Expect hiccups when the resources are loaded in background while the game is progressing.
Dynamic Policy Steps | 25 | When dynamic resource policy is enabled, defines the number of script commands to pre-load.
Optimize Loading Priority | True | When dynamic resource policy is enabled, this will set Unity's background loading thread priority to low to prevent hiccups when loading resources during script playback.
Log Resource Loading | False | Whether to log resource loading operations on the loading screen.
Enable Build Processing | True | Whether to register a custom build player handle to process the assets assigned as Naninovel resources.<br><br>Warning: In order for this setting to take effect, it's required to restart the Unity editor.
Use Addressables | True | When the Addressable Asset System is installed, enabling this property will optimize asset processing step improving the build time.
Auto Build Bundles | True | Whether to automatically build the addressable asset bundles when building the player. Has no effect when `Use Addressables` is disabled.
Allow Addressable In Editor | False | Whether to use addressable provider in editor. Enable if you're manually exposing resources via addressable address instead of assigning them with Naninovel's resource managers. Be aware, that enabling this could cuase issues when resources are assigned both in resources manager and registered with an addressable address and then renamed or dublicated.
Extra Labels | Null | Addressable provider will only work with assets, that have the assigned labels in addition to `Naninovel` label. Can be used to filter assets used by the engine based on custom criterias (eg, HD vs SD textures).
Local Root Path | %DATA%/Resources | Path root to use for the local resource provider. Can be an absolute path to the folder where the resources are located, or a relative path with one of the available origins:<br> • %DATA% — Game data folder on the target device (UnityEngine.Application.dataPath).<br> • %PDATA% — Persistent data directory on the target device (UnityEngine.Application.persistentDataPath).<br> • %STREAM% — `StreamingAssets` folder (UnityEngine.Application.streamingAssetsPath).<br> • %SPECIAL{F}% — An OS special folder (where F is value from System.Environment.SpecialFolder).
Project Root Path | Naninovel | Path relative to `Resources` folders, under which the naninovel-specific assets are located.
Google Drive Root Path | Resources | Path root to use for the Google Drive resource provider.
Google Drive Request Limit | 2 | Maximum allowed concurrent requests when contacting Google Drive API.
Google Drive Caching Policy | Smart | Cache policy to use when downloading resources. `Smart` will attempt to use Changes API to check for the modifications on the drive. `PurgeAllOnInit` will to re-download all the resources when the provider is initialized.

</div>

## Script Player

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Skip Time Scale | 10 | Time scale to use when in skip (fast-forward) mode.
Min Auto Play Delay | 3 | Minimum seconds to wait before executing next command while in auto play mode.
Show Debug On Init | False | Whether to show player debug window on engine initialization.

</div>

## Scripts

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Loader | Scripts- (Addressable, Project) | Configuration of the resource loader used with naninovel script resources.
Initialization Script | Null | Name of the script to play right after the engine initialization.
Title Script | Null | Name of the script to play when showing the Title UI. Can be used to setup the title screen scene (backgound, music, etc).
Start Game Script | Null | Name of the script to play when starting a new game. Will use first available when not provided.
Auto Add Scripts | True | Whether to automatically add created naninovel scripts to the resources.
Hot Reload Scripts | True | Whether to reload modified (both via visual and external editors) scripts and apply changes during playmode without restarting the playback.
Count Total Commands | False | Whether to calculate number of commands existing in all the available naninovel scripts on service initalization. If you don't use `TotalCommandsCount` property of a script manager and `CalculateProgress` function in naninovel script expressions, disable to reduce engine initalization time.
Enable Visual Editor | True | Whether to show visual script editor when a script is selected.
Hide Unused Parameters | True | Whether to hide un-assigned parameters of the command lines when the line is not hovered or focused.
Insert Line Key | Space | Hot key used to show `Insert Line` window when the visual editor is in focus. Set to `None` to disable.
Insert Line Modifier | Control | Modifier for the `Insert Line Key`. Set to `None` to disable.
Save Script Key | S | Hot key used to save (serialize) the edited script when the visual editor is in focus. Set to `None` to disable.
Save Script Modifier | Control | Modifier for the `Save Script Key`. Set to `None` to disable.
Editor Page Length | 1000 | How many script lines should be rendered per visual editor page.
Editor Custom Style Sheet | Null | Allows modifying default style of the visual editor.
Graph Orientation | Horizontal | Whether to build the graph vertically or horizontally.
Graph Auto Align Padding | (10.0, 0.0) | Padding to add for each node when performing auto align.
Graph Custom Style Sheet | Null | Allows modifying default style of the script graph.
Enable Community Modding | False | Whether to allow adding external naninovel scripts to the build.
External Loader | Scripts- (Local) | Configuration of the resource loader used with external naninovel script resources.
Enable Navigator | True | Whether to initializte script navigator to browse available naninovel scripts.
Show Navigator On Init | False | Whether to show naninovel script navigator when script manager is initialized.
Navigator Sort Order | 900 | UI sort order of the script navigator.

</div>

## Spawn

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Loader | Spawn- (Addressable, Project) | Configuration of the resource loader used with spawn resources.

</div>

## State

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Save Folder Name | Saves | The folder will be created in the game data folder.
Default Settings Slot Id | Settings | The name of the settings save file.
Default Global Slot Id | Global Save | The name of the global save file.
Save Slot Mask | Game Save{0:000} | Mask used to name save slots.
Quick Save Slot Mask | Game Quick Save{0:000} | Mask used to name quick save slots.
Save Slot Limit | 99 | Maximum number of save slots.
Quick Save Slot Limit | 18 | Maximum number of quick save slots.
Binary Save Files | True | Whether to compress and store the saves as binary files (.nson) instead of text files (.json). This will significantly reduce the files size and make them harder to edit (to prevent cheating), but will consume more memory and CPU time when saving and loading.
Load Start Delay | 0.3 | Seconds to wait before starting load operations; used to allow pre-load animations to complete before any load-related stutters could happen.
Reset On Goto | True | Whether to reset state of the engine services and unload (dispose) resources when loading another script via [@goto] command. It's recommended to leave this enabled to prevent memory leak issues. If you choose to disable this option, you can still reset the state and dispose resources manually at any time using [@resetState] command.
Enable State Rollback | True | Whether to enable state rollback feature allowing player to rewind the script backwards.
State Rollback Steps | 1024 | The number of state snapshots to keep at runtime; determines how far back the rollback (rewind) can be performed. Increasing this value will consume more memory.
Saved Rollback Steps | 128 | The number of state snapshots to serialize (save) under the save game slots; determines how far back the rollback can be performed after loading a saved game. Increasing this value will enlarge save game files.
Game State Handler | Naninovel.IO Game State Slot Manager, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | Implementation responsible for de-/serializing local (session-specific) game state; see `State Management` guide on how to add custom serialization handlers.
Global State Handler | Naninovel.IO Global State Slot Manager, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | Implementation responsible for de-/serializing global game state; see `State Management` guide on how to add custom serialization handlers.
Settings State Handler | Naninovel.IO Settings Slot Manager, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | Implementation responsible for de-/serializing game settings; see `State Management` guide on how to add custom serialization handlers.

</div>

## Text Printers

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Default Printer Id | Dialogue | ID of the text printer to use by default.
Max Reveal Delay | 0.06 | Delay limit (in seconds) when revealing (printing) the text messages. Specific reveal speed is set via `message speed` in the game settings; this value defines the available range (higher the value, lower the reveal speed).
Max Auto Wait Delay | 0.02 | Delay limit (in seconds) per each printed character while waiting to continue in auto play mode. Specific delay is set via `auto delay` in the game settings; this value defines the available range.
Scale Auto Wait | True | Whether to scale the wait time in auto play mode by the reveal speed set in the print commands.
Default Metadata | Object Ref | Metadata to use by default when creating text printer actors and custom metadata for the created actor ID doesn't exist.
Metadata | Object Ref | Metadata to use when creating text printer actors with specific IDs.
Scene Origin | (0.5, 0.0) | Origin point used for reference when positioning actors on scene.
Z Offset | 100 | Initial Z-axis offset (depth) from actors to the camera to set when the actors are created.
Z Step | 0.1 | Distance by Z-axis to set between the actors when they are created; used to prevent z-fighting issues.
Default Easing | Linear | Eeasing function to use by default for all the actor modification animations (changing appearance, position, tint, etc).
Auto Show On Modify | False | Whether to automatically reveal (show) an actor when executing modification commands.

</div>

## UI

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Loader | UI- (Addressable, Project) | Configuration of the resource loader used with UI resources.
Objects Layer | 5 | The layer to assign for the UI elements instatiated by the engine. Used to cull the UI when using `toogle UI` feature.
Render Mode | Screen Space Camera | The canvas render mode to apply for all the managed UI elements.
Sorting Offset | 1 | The sorting offset to apply for all the managed UI elements.

</div>

## Unlockables

<div class="config-table">

Property | Default Value | Description
--- | --- | ---
Loader | Unlockables- (Addressable, Project) | Configuration of the resource loader used with unlockable resources.

</div>


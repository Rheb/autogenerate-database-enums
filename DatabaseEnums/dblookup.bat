"C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE\TextTransform.exe"^ "%~dp0\..\DatabaseEnums\CsEnums.tt"
"C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE\TextTransform.exe"^ "%~dp0\..\DatabaseEnums\JsEnums.tt"

move %~dp0\..\DatabaseEnums\JsEnums.gen.js %~dp0\..\Examples\MyJavascriptFolder\JsEnums.gen.js
move %~dp0\..\DatabaseEnums\CsEnums.gen.cs %~dp0\..\Examples\MyBackendLogicFolder\CsEnums.gen.cs
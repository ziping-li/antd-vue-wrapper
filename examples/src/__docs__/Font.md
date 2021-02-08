# 字体预设

往往在业务开发中，我们都会统一一套字体。

该功能一般来说，需要开发者替换项目中的字体，并自行编译。在下一个版本中将会考虑将该项功能支持上传字体的功能，方便统一管理和自定义。

当然，在项目中覆盖也是可以的

## 示例

```css
@font-face {
  font-family: "SpaceGrotesk";
  src: url("./fonts/SpaceGrotesk-Regular.otf");
  font-display: swap;
}

@font-face {
  font-family: "SpaceGrotesk-Light";
  src: url('./fonts/SpaceGrotesk-Light.otf');
  font-display: swap;
}

@font-face {
  font-family: "SpaceGrotesk-Bold";
  src: url("./fonts/SpaceGrotesk-Bold.otf");
  font-display: swap;
}

@font-face {
  font-family: "SpaceGrotesk-Medium";
  src: url("./fonts/SpaceGrotesk-Medium.otf");
  font-display: swap;
}

body {
  font-family: "SpaceGrotesk-Medium" !important;
}
```

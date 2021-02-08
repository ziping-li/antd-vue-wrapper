# 主题预设

预设 Ant Vue Design 的主题，通过引入 [antd-vue-wrapper/src/theme/vars.json](https://github.com/ziping-li/antd-vue-wrapper/blob/master/src/theme/vars.json) 文件可以获取到所有的预设变量

```typescript
  "primary-color": "#1890ff",
  "link-color": "1890ff",
  "success-color": "#52c41a",
  "warning-color": "#faad14",
  "error-color": "#f5222d",
  "heading-color": "rgba(0, 0, 0, 0.85)",
  "text-color": "rgba(0, 0, 0, 0.65)",
  "text-color-secondary": "rgba(0, 0, 0, 0.45)",
  "screen-xs": 0,
  "screen-sm": 576,
  "screen-md": 768,
  "screen-lg": 992,
  "screen-xl": 1200,
  "screen-xxl": 1600,
  "layout-header-background": "#ffffff",
  "input-height-base": "32px",
  "input-height-lg": "40px",
  "input-height-sm": "24px",
  "basic-number": 4
```

> 目前还不支持定制主题透传，将在下一个版本支持，如果需要请 clone 仓库自行编译。

除了最后一个 basic-number 是工具 class 的 space 的基础数值，其他均为 Ant Vue Design 的主题变量。

#### 备注

之所以用 json 文件，是因为该变量集合既支持了在 commonjs 规范下引入，也支持在 esm 下引入，因此我们也暴露了该变量集合到 <code>app.config.globalProperties</code> 中，并且可以直接使用该文件预设到 less 变量中。

如果不需要全局设置 less 变量，我们也可以参考 [antd-vue-wrapper/src/style/plugins/getVars.ts](https://github.com/ziping-li/antd-vue-wrapper/blob/master/src/style/plugins/getVars.ts)，less 从 3.0.5 版本开始已经支持自定义 plugin。


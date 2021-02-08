# Logo 标识

用于展示企业的 Logo，目前并未将 <code>src</code> 封装，开发者可以自行封装.

## 基本用法

```vue demo
<template>
  <a-logo src="https://qn.antdv.com/logo.png" :width="200"></a-logo>
</template>
```

## 属性

| 参数   | 说明                    | 类型                          | 默认值            |
| ------ | ----------------------- | ----------------------------- | ----------------- |
| src    | <p>图片来源（必传）</p> | <span>string</span>           | -                 |
| width  | <p>图片宽度</p>         | <span>string \| number</span> | -                 |
| height | <p>图片高度</p>         | <span>string \| number</span> | -                 |
| alt    | <p>图片失败显示文字</p> | <span>string</span>           | <code>Logo</code> |

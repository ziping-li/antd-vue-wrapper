# 断点及变量

<code>antd-vue-wrapper</code> 暴露了一组可以获取 <code>breakpoints</code> 设置和全局 less 变量的属性.

## 所有断点

通过全局属性 <code>$breakpoints</code> 获取所有的断点及对应的设备宽度像素.

```vue demo
<template>
  <a-table :columns="columns" :data-source="breakpoints" :pagination="false"></a-table>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const { $breakpoints } = getCurrentInstance().ctx;

    return {
      columns: [
        { title: '代码', dataIndex: 'key', key: 'key' },
        { title: '像素', dataIndex: 'value', key: 'value' },
      ],
      breakpoints: Object.keys($breakpoints).map((item) => ({
        key: item,
        value: '>=' + $breakpoints[item] + 'px',
      })),
    };
  },
});
</script>
```

## 查询当前断点

通过全局方法 <code>$queryMedia</code> 查询当前断点信息， <code>$queryMedia</code> 需要传入一个回调函数，回调函数的参数即是当前的断点代码.

```vue demo
<template>
  <div>当前断点：{{ currentBreakpoint }}</div>
</template>

<script>
import { defineComponent, getCurrentInstance, ref } from 'vue';

export default defineComponent({
  setup() {
    const { $queryMedia } = getCurrentInstance().ctx;
    const currentBreakpoint = ref('');
    $queryMedia((data) => {
      currentBreakpoint.value = data;
    });

    return {
      currentBreakpoint,
    };
  },
});
</script>
```

## 获取 less 变量

通过全局属性 <code>$vars</code> 可以获取所有的 <code>less</code> 变量.

```vue demo
<template>
  <div>当前断点：{{ vars }}</div>
</template>

<script>
import { defineComponent, getCurrentInstance, ref } from 'vue';

export default defineComponent({
  setup() {
    const { $vars } = getCurrentInstance().ctx;

    return {
      vars: JSON.stringify($vars),
    };
  },
});
</script>
```

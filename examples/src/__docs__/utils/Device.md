# 设备信息

<code>antd-vue-wrapper</code> 也暴露了一组查询设备信息相关的方法到全局属性上.

## 浏览器信息

通过 <code>$browserName</code> ， <code>$browserVersion</code> ， <code>$engineName</code> ， <code>$engineVersion</code> 和 <code>$getUA</code> 获取浏览器的名称，版本，引擎名称，引擎版本和用户代理信息.

```vue demo
<template>
  <div>
    <p>浏览器名称：{{ browserName }}</p>
    <p>浏览器版本：{{ browserVersion }}</p>
    <p>引擎名称：{{ engineName }}</p>
    <p>引擎版本：{{ engineVersion }}</p>
    <p>用户代理信息：{{ getUA }}</p>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const {
      $browserName,
      $browserVersion,
      $engineName,
      $engineVersion,
      $getUA,
    } = getCurrentInstance().ctx;

    return {
      browserName: $browserName,
      browserVersion: $browserVersion,
      engineName: $engineName,
      engineVersion: $engineVersion,
      getUA: $getUA,
    };
  },
});
</script>
```

## 系统信息

通过 <code>$osName</code> 和 <code>$osVersion</code> 获取用户设备信息.

```vue demo
<template>
  <div>
    <p>设备名称：{{ osName }}</p>
    <p>设备版本：{{ osVersion }}</p>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const { $osName, $osVersion } = getCurrentInstance().ctx;

    return {
      osName: $osName,
      osVersion: $osVersion,
    };
  },
});
</script>
```

## 其他浏览器属性判断

通过 <code>$isChrome</code> ，<code>$isChromium</code> ， <code>$isEdge</code> ， <code>$isEdgeChromium</code> 等可以判断浏览器信息.

```vue demo
<template>
  <div>
    <p v-for="item in Object.keys(properties)">{{item.slice(1)}}: {{ properties[item] }}</p>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const {
      $isChrome,
      $isChromium,
      $isEdge,
      $isEdgeChromium,
      $isIE,
      $isIOS,
      $isIOS13,
      $isIPad13,
      $isIPhone13,
      $isIPod13,
      $isLegacyEdge,
      $isMacOs,
      $isMobile,
      $isMobileOnly,
      $isMobileSafari,
      $isSafari,
      $isSmartTV,
      $isTablet,
      $isWinPhone,
      $isWindows,
    } = getCurrentInstance().ctx;

    return {
      properties: {
        $isChrome,
        $isChromium,
        $isEdge,
        $isEdgeChromium,
        $isIE,
        $isIOS,
        $isIOS13,
        $isIPad13,
        $isIPhone13,
        $isIPod13,
        $isLegacyEdge,
        $isMacOs,
        $isMobile,
        $isMobileOnly,
        $isMobileSafari,
        $isSafari,
        $isSmartTV,
        $isTablet,
        $isWinPhone,
        $isWindows,
      },
    };
  },
});
</script>
```

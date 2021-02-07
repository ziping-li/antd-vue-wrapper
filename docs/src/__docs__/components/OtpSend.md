# OtpSend

```vue demo
<template>
  <a-otp-send :callback="callback"></a-otp-send>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const callback = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    };

    return {
      callback,
    };
  },
});
</script>
```

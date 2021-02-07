# OtpInput

```vue demo
<template>
  <a-otp-input
    v-model="value"
    autofocus
    @change="onChange"
    :error-message="errorMessage"
  ></a-otp-input>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('11');
    const errorMessage = ref('');

    const onChange = (val) => {
      console.log(val);
    };

    setTimeout(() => {
      errorMessage.value = 'Invalid code';
    }, 3000);

    return {
      value,
      onChange,
      errorMessage,
    };
  },
});
</script>
```

# Formatted

```vue demo
<template>
  <a-formatted v-model.value="value" @change="onChange"></a-formatted>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');

    const onChange = (val) => {
      console.log(val);
    };

    return {
      value,
      onChange,
    };
  },
});
</script>
```

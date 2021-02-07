import { defineComponent, reactive } from 'vue';
import { getSupportedCallingCodes, getPhoneNumber } from '../../utils/phone';
import './index.less';

export default defineComponent({
  name: 'phone',
  inheritAttrs: false,
  props: {
    separator: {
      type: String,
      default: '',
    },
    modelValue: String,
  },
  setup(props, { attrs, emit }) {
    const codes = getSupportedCallingCodes();
    const state = reactive(getPhoneNumber(props.modelValue, props.separator));

    const onChange = () => {
      const currentValue = state.code + props.separator + state.phone;
      emit('input', currentValue);
      emit('change', currentValue);
      emit('update:modelValue', currentValue);
    };

    const { onInput, ...restAttrs } = attrs;
    const bindValues = { ...restAttrs, onChange };
    return () => (
      <a-input
        {...bindValues}
        class="a-phone"
        v-model={[state.phone, 'value']}
        v-slots={{
          addonBefore: () => (
            <a-select v-model={[state.code, 'value']} style={{ width: '70px' }} onChange={onChange}>
              {codes.map((item) => {
                return (
                  <a-select-option key={item} value={item}>
                    {item}
                  </a-select-option>
                );
              })}
            </a-select>
          ),
        }}
      ></a-input>
    );
  },
});

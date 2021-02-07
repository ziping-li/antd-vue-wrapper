import { defineComponent } from 'vue';

const Logo = defineComponent({
  name: 'logo',
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
    },
    height: {
      type: [String, Number],
    },
    alt: {
      type: String,
      default: 'Logo',
    },
  },
  setup(props) {
    return () => <a-image {...props} preview={false} />;
  },
});

export default Logo;

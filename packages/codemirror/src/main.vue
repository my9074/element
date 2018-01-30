<template>
  <div class="el-codemirror">
    <textarea ref="textarea" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

export default {
  name: 'ElCodemirror',
  data() {
    return {
      content: '',
      codemirror: null,
      cmInstance: null
    };
  },
  props: {
    code: String,
    value: String,
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    },
    globalOptions: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    options: {
      handler(options, oldOptions) {
        for (const key in options) {
          this.cminstance.setOption(key, options[key]);
        }
      },
      deep: true
    },
    code(newVal, oldVal) {
      this.handerCodeChange(newVal, oldVal);
    },
    value(newVal, oldVal) {
      this.handerCodeChange(newVal, oldVal);
    }
  },
  methods: {
    initialize() {
      const cmOptions = Object.assign({}, this.globalOptions, this.options);
      this.codemirror = codemirror.fromTextArea(this.$refs.textarea, cmOptions);
      this.cminstance = this.codemirror;
      this.cminstance.setValue(this.code || this.value || this.content);
      this.cminstance.on('change', cm => {
        this.content = cm.getValue();
        this.$emit('input', this.content);
      });
      this.$nextTick(this.refresh);
    },
    refresh() {
      this.cminstance.refresh();
    },
    destroy() {
      const element = this.cminstance.doc.cm.getWrapperElement();
      element && element.remove && element.remove();
    },
    handerCodeChange(newVal, oldVal) {
      const cm_value = this.cminstance.getValue();
      if (newVal !== cm_value) {
        const scrollInfo = this.cminstance.getScrollInfo();
        this.cminstance.setValue(newVal);
        this.content = newVal;
        this.cminstance.scrollTo(scrollInfo.left, scrollInfo.top);
      }
    }
  },
  mounted() {
    this.initialize();
  },
  beforeDestroy() {
    this.destroy();
  }
};
</script>

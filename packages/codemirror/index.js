import Codemirror from './src/main';

/* istanbul ignore next */
Codemirror.install = function(Vue, config) {
  if (config) {
    if (config.options) {
      Codemirror.props.globalOptions.default = () => config.options;
    }
  }
  Vue.component(Codemirror.name, Codemirror);
};

export default Codemirror;

import navNewConfig from './nav.config.json';

import langs from './i18n/route.json';

const LOAD_MAP = {
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/zh-CN/${name}.vue`)),
      'zh-CN');
  },
  'en-US': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/en-US/${name}.vue`)),
      'en-US');
  }
};

const load = function(lang, path) {
  return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
  'zh-CN': (path, type) => {
    return r => require.ensure([], () =>
      r(require(`./docs/zh-CN/${type}${path}.md`)),
      'zh-CN');
  },
  'en-US': (path, type) => {
    return r => require.ensure([], () =>
      r(require(`./docs/en-US/${type}${path}.md`)),
      'en-US');
  }
};

const loadDocs = function(lang, path, type) {
  return LOAD_DOCS_MAP[lang](path, type);
};

const registerRoute = (navConfig, isBusiness) => {
  let comRoute = [];
  Object.keys(navConfig).forEach(lang => {
    let route = [];

    let navsMap = navConfig[lang];
    Object.keys(navsMap).forEach((type, index) => {
      let navs = navsMap[type];
      route.push({
        path: `/${lang}/${type}`,
        redirect: `/${lang}/${type}/quickstart`,
        component: load(lang, type),
        children: []
      });

      navs.forEach(nav => {
        if (nav.href) return;
        if (nav.groups) {
          nav.groups.forEach(group => {
            group.list.forEach(nav => {
              addRoute(nav, lang, index, type);
            });
          });
        } else if (nav.children) {
          nav.children.forEach(nav => {
            addRoute(nav, lang, index, type);
          });
        } else {
          addRoute(nav, lang, index, type);
        }
      });
    });

    function addRoute(page, lang, index, type) {
      const component = page.path === '/changelog'
        ? load(lang, 'changelog')
        : loadDocs(lang, page.path, type);
      let child = {
        path: page.path.slice(1),
        meta: {
          title: page.title || page.name,
          description: page.description,
          namespace: page.namespace,
          lang
        },
        name: `${type}-` + (page.title || page.name),
        component: component.default || component
      };

      route[index].children.push(child);
    }

    comRoute = comRoute.concat(route);
  });

  return comRoute;
};

let route = registerRoute(navNewConfig);

const generateMiscRoutes = function(lang) {
  let guideRoute = {
    path: `/${lang}/guide`, // 指南
    redirect: `/${lang}/guide/design`,
    component: load(lang, 'guide'),
    children: [{
      path: 'design', // 设计原则
      name: 'guide-design' + lang,
      meta: { lang },
      component: load(lang, 'design')
    }, {
      path: 'nav', // 导航
      name: 'guide-nav' + lang,
      meta: { lang },
      component: load(lang, 'nav')
    }]
  };

  let resourceRoute = {
    path: `/${lang}/resource`, // 资源
    meta: { lang },
    name: 'resource' + lang,
    component: load(lang, 'resource')
  };

  let indexRoute = {
    path: `/${lang}`, // 首页
    meta: { lang },
    name: 'home' + lang,
    component: load(lang, 'index')
  };

  return [guideRoute, resourceRoute, indexRoute];
};

langs.forEach(lang => {
  route = route.concat(generateMiscRoutes(lang.lang));
});

route.push({
  path: '/play',
  name: 'play',
  component: require('./play/index.vue')
});

let userLanguage = localStorage.getItem('ELEMENT_LANGUAGE') || window.navigator.language || 'en-US';
let defaultPath = '/en-US';
if (userLanguage.indexOf('zh-') !== -1) {
  defaultPath = '/zh-CN';
}

route = route.concat([{
  path: '/',
  redirect: defaultPath
}, {
  path: '*',
  redirect: defaultPath
}]);

export default route;

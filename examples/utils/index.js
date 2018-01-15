export function handleNamespace(route) {
  const namespace = route.meta && route.meta.namespace;
  if (namespace) {
    if (namespace === 'background') {
      document.body.className = 'theme-background';
    } else if (namespace === 'console') {
      document.body.className = 'theme-console';
    }
  } else {
    document.body.className = '';
  }
}

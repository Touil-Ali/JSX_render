let vdom = h('div', {}, 'Hello world');

let dom = render(vdom);
document.body.appendChild(dom);

function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}


function render(vnode) {
  if (typeof vnode === 'string' || vnode instanceof String) return document.createTextNode(vnode);
  console.log("vnode", vnode);
  let n = document.createElement(vnode.nodeName);
  let a = vnode.attributes || {};
  Object.keys(a).forEach(k => n.setAttribute(k, a[k]));

  (vnode.children || []).forEach(c => n.appendChild(render(c)));
  return n;
}

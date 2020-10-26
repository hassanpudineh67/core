const handle_skeleton = (el, value) => {
      value ? el.classList.add('skeleton-preloader') : el.classList.remove('skeleton-preloader')
};

const skeleton = {
      "skeleton"  : {
            inserted(el, binding, vnode) {
                  handle_skeleton(el, binding.value)
            },
            update(el, binding, vnode) {
                  handle_skeleton(el, binding.value)
            },
      },
      "skeleton-item"  : {
            bind(el, binding, vnode) {
                  el.classList.add('skeleton-item')
            },
      }
};

export default skeleton

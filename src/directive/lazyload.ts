
// 自定义指令 图片懒加载

export default {
  mounted(el: any, binding: any) {
    // 在元素进入视口时加载图片
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 加载图片
          el.src = binding.value;
          io.unobserve(el);
        }
      });
    });
    // 开始观察元素
    io.observe(el);
  }
}

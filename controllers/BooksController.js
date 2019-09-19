module.exports = class {
  constructor(service) {}
  async actionIndex(ctx, next) {
    ctx.body = await ctx.render('books/index.html', {
      title: 'books page ~~~',
      data: [
        { name: '西游记' },
        { name: '三国演义' },
        { name: '水浒传' },
        { name: '红楼梦' }
      ]
    });
  }
};

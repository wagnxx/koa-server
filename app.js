const Koa = require('koa');
const render = require('koa-swig');
const serve = require('koa-static');
const co = require('co');
const path = require('path');
const app = new Koa();

app.use(serve(path.join(__dirname, 'assets')));
app.context.render = co.wrap(
  render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: false, // disable, set to false
    ext: 'html',
    varControls: ['[[', ']]']
  })
);

require('./controllers')(app);

app.listen(3001, () => {
  console.log(`server is runnning on port 3000`);
});

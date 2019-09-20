const oUl = document.querySelector('#o-ul');

const bookList = [
  { id: 1, name: '西游记' },
  { id: 2, name: '三国演义' },
  { id: 3, name: '水浒传' },
  { id: 4, name: '红楼梦' }
];

let _html = 'oul';
_html = bookList
  .map(book => {
    const randomColor = createColor();
    return `<li style="color:${randomColor}">${book.name}</li>`;
  })
  .join('');

oUl.innerHTML = _html;

oUl.addEventListener('click', clickHandle, false);

function clickHandle(e) {
  const tagName = e.target.nodeName.toLocaleLowerCase();
  if (tagName === 'li') {
    const _this = e.target;
    const randomColor = createColor();
    _this.style.color = randomColor;
  }
}

function createColor() {
  const R = Math.random() * 255;
  const G = Math.random() * 255;
  const B = Math.random() * 255;
  return `rgb(${R},${G},${B})`;
}

'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

listItems.forEach((list) => {
  const nestedList = list.querySelector('ul');

  if (nestedList) {
    const children = Array.from(list.childNodes);
    const textNode = children.find((child) => {
      return child.nodeType === 3 && child.textContent.trim() !== '';
    });

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();

      list.insertBefore(span, nestedList);
      list.removeChild(textNode);
    }
  }
});

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span || !tree.contains(span)) {
    return;
  }

  const nestedList = span.nextElementSibling;

  if (nestedList && nestedList.tagName === 'UL') {
    nestedList.hidden = !nestedList.hidden;
  }
});

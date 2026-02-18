'use strict';

const tree = document.querySelector('.tree');

function initTree() {
  if (!tree) {
    return;
  }

  const listItems = tree.querySelectorAll('li');

  listItems.forEach((list) => {
    const nestedList = list.querySelector('ul');

    if (nestedList) {
      const children = Array.from(list.childNodes);
      const textNode = children.find((child) => {
        return (
          (child.nodeType === 3 && child.textContent.trim() !== '') ||
          child.nodeType === 1
        );
      });

      if (textNode) {
        const span = document.createElement('span');

        span.classList.add('tree__title');

        span.textContent = textNode.textContent.trim();

        list.insertBefore(span, nestedList);
        list.removeChild(textNode);
      }
    }
  });

  tree.addEventListener('click', (e) => {
    const span = e.target.closest('.tree__title');

    if (!span || !tree.contains(span)) {
      return;
    }

    const nestedList = span.nextElementSibling;

    if (nestedList && nestedList.tagName === 'UL') {
      nestedList.hidden = !nestedList.hidden;
    }
  });
}

initTree();

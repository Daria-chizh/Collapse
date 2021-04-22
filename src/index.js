const collapsable = document.querySelector('.collapsable');

function collapseSection() {
  const height = collapsable.scrollHeight;

  requestAnimationFrame(() => {
    collapsable.style.height = `${height}px`;

    requestAnimationFrame(() => {
      collapsable.style.height = '0px';
    });
  });

  collapsable.setAttribute('data-collapsed', 'true');
}

function expandSection() {
  const height = collapsable.scrollHeight;
  collapsable.style.height = `${height}px`;
  collapsable.setAttribute('data-collapsed', 'false');
}

document.querySelector('#buttonCollapse').addEventListener('click', function () {
  collapsable.style.display = 'block';
  this.style.border = '4px solid #B0E0E6';
  if (collapsable.getAttribute('data-collapsed') === 'true') {
    expandSection();
  } else {
    collapseSection();
  }
});

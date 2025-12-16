const cartMenuItems = [];
const cartMenuList = document.querySelector('.cartMenu__list');

const generateCartMenuItem = (title, price, image) => {
  return `<li class="cartMenu__item card">
			<img src="${image.src}" alt="${image.alt}" class="cartMenu__item-image" />
			<section class="cartMenu__item-text">
				<h3 class="cartMenu__item-title title title--small">${title}</h3>
				<span class="cartMenu__item-price">Цена: ${price}</span>
			</section>
			<button
				type="button"
				class="cartMenu__item-remove button"
				aria-label="remove product button"
			>
				Удалить
			</button>
		</li>`;
};

cartMenuList.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (clickedElement.closest('.button')) {
    const clickedProduct = clickedElement.closest('.cartMenu__item');
    const clickedProductTitle = clickedProduct.querySelector('.cartMenu__item-title');
    const foundIndex = cartMenuItems.find(
      ({ title }) => title === clickedProductTitle.textContent.trim(),
    );

    cartMenuItems.splice(foundIndex, 1);
    updateCartMenu();
  }
});

const updateCartMenu = () => {
  if (cartMenuItems.length) {
    cartMenuList.innerHTML = '';
    cartMenuItems.forEach(({ title, price, image }) => {
      cartMenuList.insertAdjacentHTML('beforeend', generateCartMenuItem(title, price, image));
    });
  } else {
    cartMenuList.innerHTML = '';
    cartMenuList.insertAdjacentHTML(
      'afterbegin',
      '<li class="title cartMenu__list-title">Корзина пуста</li>',
    );
  }
};

document.querySelectorAll('.products__list').forEach((list) => {
  list.addEventListener('click', (e) => {
    const clickedElement = e.target;

    if (clickedElement.closest('.button')) {
      clickedElement.setAttribute('disabled', true);
      const productElement = clickedElement.closest('.products__item ');
      const productObject = {
        title: productElement.querySelector('.products__item-title').textContent,
        price: productElement.querySelector('.products__item-price').textContent,
        image: {
          src: productElement.querySelector('.products__item-image').getAttribute('src'),
          alt: productElement.querySelector('.products__item-image').getAttribute('alt'),
        },
      };

      cartMenuItems.push(productObject);

      updateCartMenu();
    }
  });
});

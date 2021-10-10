const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector('h2');
  console.log(`Category: ${categoryName.textContent}`);

  const items = category.querySelectorAll('li');
  console.log(`Elements: ${items.length}`);
});

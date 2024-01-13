// ===========================================================
const elemCategories = document.querySelector('#categories');

console.log('Number of categories:', elemCategories.children.length);

// ===========================================================
const elemCategoriesItem = document.querySelectorAll('.item');

elemCategoriesItem.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('ul li').length}`);
});

const numberOfLiCategories = document.querySelector("ul").children.length;
console.log("Number of categories:" + " " + numberOfLiCategories);

/////////////////////////////////////////////

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} \nElements: ${itemsLength}`);
});

////////////////////////////






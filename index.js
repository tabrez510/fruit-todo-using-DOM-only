const input2 = document.createElement('input');
input2.innerHTML = '<input type="text" name="fruit" id="fruit-to-add" />'
const form = document.querySelector('form');
const btn = document.querySelector('button');
form.insertBefore(input2, btn);


// Implement the code as in video but with one extra 'Edit' button in 'li'
const fruits = document.querySelector('.fruits');
//add
form.addEventListener('submit', function(event){
  event.preventDefault();
  const input1 = document.querySelector('#fruit-to-add');
  const newLi = document.createElement('li');
  newLi.innerHTML = `${input1.value} <p><i>${input2.value}</i></p> <button class="delete-btn">x</button>`;
  newLi.className = 'fruit';

  fruits.appendChild(newLi);
  
});

// delete
fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToBeDeleted = event.target.parentElement;
        fruits.removeChild(fruitToBeDeleted);
    }
});

// filter
const filter = document.querySelector('#filter');
filter.addEventListener('keyup', function(event){
  const textIntered = event.target.value.toLowerCase();
  const fruit = document.querySelectorAll('.fruit');
  const para = document.querySelectorAll('p');
  for(let i=0; i<fruit.length; i++){
    const currentFruitItem = fruit[i].firstChild.textContent.toLowerCase();
    const currentDescItem = para[i].firstChild.textContent.toLowerCase();
    if(currentFruitItem.indexOf(textIntered)===-1 && currentDescItem.indexOf(textIntered)===-1){
      fruit[i].style.display = 'none';
    }
    else{
      fruit[i].style.display = 'flex';
    }
  }
})
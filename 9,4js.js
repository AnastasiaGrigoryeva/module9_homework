const btnNode = document.querySelector('.btn');

function useRequest(url) {

  fetch(url)

    .then((response) => {
      const resultNode = document.querySelector('.result'); 
      const image = `<img src="${url}" wight="${item.value}"  heigh="${++item.value}" class="card-image"/>`;
      resultNode.innerHTML = image;
    })
    .catch(() => { console.log('error') });
}

btnNode.addEventListener('click', () => {

  let sizeJPG = '';

  const value = document.querySelectorAll('input').forEach( (item, index) => {

    if (!(Number(item.value))) {
      alert(` ${++index} введите значения`);

    } else if ( Number(item.value) < 100 || Number(item.value) > 300) {
            alert(`${item.value} - одно из чисел вне диапазона от 100 до 300`);
    } else {
      sizeJPG = sizeJPG +  `/${item.value}`;
    }
  });

  if (sizeJPG) {
    useRequest( `https://picsum.photos${sizeJPG}` );
  }

})


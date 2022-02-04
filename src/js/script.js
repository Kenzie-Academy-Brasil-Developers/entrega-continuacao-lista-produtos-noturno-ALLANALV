const list = document.querySelector('ul');

function listProduct(products) {
    list.innerHTML = "";

    products.forEach(({ nome, preco, secao, img, componentes }) => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');

        componentes.forEach((value) => {
            const li = document.createElement('li');
            li.innerText = value

            ol.appendChild(li);
        })

        image.src = img;
        h3.innerText = nome;
        p.innerText = preco;
        span.innerText = secao;

        li.appendChild(image);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol)

        list.appendChild(li)
    });

    addButtonBuy(products);

}

function addButtonBuy(array) {
    const li = document.querySelectorAll('li:not(ol li)');
    li.forEach((elem) => {
        const button = document.createElement('button');
        button.innerText = 'Adicionar ao Carrinho';
        elem.appendChild(button)
    })
}

/* ACTION OF BUTTONS  */
const btnAllProducts = document.querySelector('.estiloGeralBotoes--mostrarTodos');
const btnHortifrut = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

const btnInputSearch = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
const inputSearch = document.querySelector('.campoBuscaPorNome');

/* FUNCTIONS HELD RESPONSIBLE TO ACTIONS  */
const filterAll = () => {
    return listProduct(produtos);
}
btnAllProducts.addEventListener('click', filterAll)

const filterHotifruti = () => {
    const hotifruti = produtos.filter((elem) => {
        const { secao } = elem;
        if (secao === 'Hortifruti') {
            return elem
        }
    });

    return listProduct(hotifruti)
}
btnHortifrut.addEventListener('click', filterHotifruti);

const filterInput = () => {
    const inputValue = inputSearch.value.toLowerCase()
    const output = produtos.filter((elem) => {
        const { nome, secao } = elem;
        if (nome.toLowerCase() === inputValue || secao.toLowerCase() === inputValue) {
            return elem
        }
    });

    return listProduct(output)
}
btnInputSearch.addEventListener('click', filterInput)





/* LIST COMPONENT NUTRICIONAL */
/**
* function nutritionalTable({ componentes }) {
    console.log(componentes)
    const ol = document.querySelectorAll('ol');
    ol.forEach((elem) => {

    });

}
  * function addList(array) {
    const li = document.querySelectorAll('li');
    li.forEach((elem) => {
        const ol = document.createElement('ol');
        elem.appendChild(ol);
    })
}
function addItemList(array) {
    const ol = document.querySelectorAll('ol');
    const inforNutricional = nutritionalTable(array);
    ol.forEach((elem, index) => {
        let times = 0
         while (inforNutricional[index].length > times) {
            const item = document.createElement('li');
            elem.appendChild(item)
            times++
        }
    });
}
 * function contentNutri(array) {
    const itemNutri = document.querySelectorAll('ol li');
    const inforNutricional = nutritionalTable(array);
    const output = []
    inforNutricional.forEach((elem) => {
        for (let index = 0; index < elem.length; index++) {
            output.push(elem[index])
        }
    });

    itemNutri.forEach((elem, index) => {
        elem.innerHTML = output[index]
    })
}
 */
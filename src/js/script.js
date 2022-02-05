const list = document.querySelector('ul');
const listCar = document.querySelector('.containerCarrinho ul ');
let valueCar = document.querySelector('#precoTotal');
console.log(valueCar)
function listProduct(products) {
    list.innerHTML = "";

    products.forEach((elem) => {
        const { nome, preco, secao, img, componentes, id } = elem
        const li = document.createElement('li');
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        const button = document.createElement('button')

        componentes.forEach((value) => {
            const li = document.createElement('li');
            li.innerText = value

            ol.appendChild(li);
        });
        button.setAttribute('data-id', id)

        image.src = img;
        h3.innerText = nome;
        p.innerText = preco;
        span.innerText = secao;
        button.innerText = 'Adicionar ao carrinho'

        li.appendChild(image);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol);
        li.appendChild(button)

        // button.addEventListener('click', addCar(elem))

        list.appendChild(li);

    });

    const button = document.querySelectorAll('.containerListaProdutos ul li button');

    addButton(button);
}

/* FUNCTION HELD RESPONSIBLE ADD PRODUCT INTO CAR */
function addButton(buttons) {
    buttons.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            addCar(id)
        })
    });
}

let sumTotal = []

function addCar(ident) {
    let addProduct = {}
    produtos.forEach((elem) => {
        const { id } = elem
        if (id == ident) {
            addProduct = { ...elem }
        }
    });
    const { img, nome, preco, secao } = addProduct;
    const itemadd = document.createElement('li');
    const image = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('p');
    const section = document.createElement('p');

    price.setAttribute('class', 'price')

    image.src = img;
    name.innerText = nome;
    price.innerText = preco;
    section.innerText = secao;

    itemadd.appendChild(image);
    itemadd.appendChild(name);
    itemadd.appendChild(price);
    itemadd.appendChild(section);

    listCar.appendChild(itemadd);

    const value = Number(preco);
    sumTotal.push(value)
    const result = sumTotal.reduce((a, b) => a + b)

    valueCar.innerHTML = result + '.00'
}

/* FUNCTION HELD RESPONSIBLE ADD PRODUCT INTO CAR */

/* ACTION OF BUTTONS  */
const btnAllProducts = document.querySelector('.estiloGeralBotoes--mostrarTodos');
const btnHortifrut = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
const btnInputSearch = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
const inputSearch = document.querySelector('.campoBuscaPorNome');

/* FUNCTIONS HELD RESPONSIBLE TO MAKE LIST  */
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
btnInputSearch.addEventListener('click', filterInput);




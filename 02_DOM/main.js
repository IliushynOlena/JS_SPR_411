document.write('<p>Some text</p>');

//get element
const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
const deleteBtn = document.getElementById('delete-btn');
tableBody.innerHTML = "";
let products = [];

deleteBtn.onclick = () =>{
    products = [];
    tableBody.innerHTML = "";
}

createBtn.onclick = () =>{
    console.log('clicked from js');
    const newProduct = getProductFromForm();
    products.push(newProduct);
    addProductToTable(newProduct);
}

function addProductToTable(product)
{
    //add new product
    tableBody.innerHTML +=` 
                <tr class="table-light">
                    <th scope="row">${product.id}</th>
                    <td>${product.model}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                </tr>`;
}

function getProductFromForm(){
    const modelInput = document.getElementById('modelInput');
    const decrInput = document.getElementById('inputDescr');
    const priceinput = document.getElementById('priceInput');

    return {
        id:products.length+ 1,
        model : modelInput.value,
        description : decrInput.value,
        price : priceinput.value
    }
}


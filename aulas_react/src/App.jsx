import "./App.css";
import React, { useEffect, useState } from "react";
import EventComponent from "./components/EventComponent";
import IntroComponent from "./components/IntroComponent";
import ConditionalComponent1 from "./components/ConditionalComponent1";
import ConditionalComponent2 from "./components/ConditionalComponent2";
import ProductComponent from "./components/ProductComponent";
import PostComponent from "./components/PostComponent";
import GenericComponent from "./components/GenericComponent";
import MyButtonComponent from "./components/MyButtonComponent";
import UseStateComponente1 from "./components/UseStateComponente1";
import ProductTable from "./components/ComponentTabela";
import ComponentFormulario from "./components/ComponentFormulario";

function App() {
  // let component;
  // let condition = false;

  // if (condition) {
  //   component = <ConditionalComponent1 />;
  // } else {
  //   component = <ConditionalComponent2 />;
  // }

  // const products = [
  //   { id: 1, name: "Laranja" },
  //   { id: 2, name: "Uva" },
  //   { id: 3, name: "Maça" },
  // ];

  // //Primeira Forma
  // const listItens = products.map((product) => (
  //   <li key={product.id}>{product.name}</li>
  // ));

  // const posts = [
  //   { id: 1, title: "Post1", description: "Descrição Post 1" },
  //   { id: 2, title: "Post1", description: "Descrição Post 2" },
  //   { id: 3, title: "Post1", description: "Descrição Post 3" },
  // ];

  // const products = [
  //   { id: 1, name: "Produto A", price: "R$ 150,00", stock: 20 },
  //   { id: 2, name: "Produto B", price: "R$ 140,00", stock: 19 },
  //   { id: 3, name: "Produto C", price: "R$ 130,00", stock: 18 },
  //   { id: 4, name: "Produto D", price: "R$ 120,00", stock: 17 },
  //   { id: 5, name: "Produto F", price: "R$ 110,00", stock: 16 },
  //   { id: 6, name: "Produto G", price: "R$ 100,00", stock: 15 },
  // ];

  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [edit, setEdit] = useState(false);

  const url = "http://localhost:3000/products";

  const clearForm = () => {
    setName("");
    setPrice("");
    setStock("");
  };

  useEffect(() => {
    //Lista todos os produtos:
    const getProductsList = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };

    getProductsList();
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleStock = (e) => {
    setStock(e.target.value);
  };

  //Busca apenas um produto pelo seu ID:
  const getProductById = async (id) => {
    //Faz a requisição HTTP
    const res = await fetch(url + `?id=${id}`);
    const data = await res.json();

    //Carrega os dados no formulário para edição:
    setName(data[0].name);
    setPrice(data[0].price);
    setStock(data[0].stock);
    setId(data[0].id);

    //Habilita edição:
    setEdit(true);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const saveRequestParams = {
      method: edit ? "PUT" : "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, price, stock }),
    };

    //Cria URL para buscar todos ou apenas um produto
    const save_url = edit ? url + `/${id}` : url;

    //Faz a requisição HTTP
    const res = await fetch(save_url, saveRequestParams);

    //Se for cadastro de produto novo
    if (!edit) {
      const newProduct = await res.json();

      //Atualização da tabela
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }

    //Se for edição/atualização de produto já cadastrado:
    if (edit) {
      const editedProduct = await res.json();

      //Atualização da tabela:
      const editedProductIndex = products.findIndex((prod) => prod.id === id);
      products[editedProductIndex] = editedProduct;
      setProducts(products);
    }
    clearForm();
    setEdit(false);
  };

  const deleteProduct = async (id) => {
    //Faz a requisição HTTP
    const res = await fetch(url + `/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const deletedProduct = await res.json();
    //Atualização da tabela:
    setProducts(products.filter((prod) => prod.id !== deletedProduct.id));
  };

  // const editProduct = (id) => {
  //   const product = products.find((prod) => prod.id === id);
  //   setId(product.id);
  //   setName(product.name);
  //   setPrice(product.price);
  //   setStock(product.stock);
  //   setEdit(true);
  // };

  return (
    <>
      {/* <ProductComponent name="Arroz" category="Alimento" />
      <ProductComponent name="Martelo" category="Ferramenta" /> */}

      {/* Segunda Forma
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* {component}

      <div>
        {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
      </div>

      <div>
        <h3>Fundamentos do React.js</h3>
        <IntroComponent />
        <EventComponent />
      </div> */}

      {/* <div>
        {posts.map((post) => (
          <PostComponent
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div> */}

      {/* <div>
        <GenericComponent>
          <p>Eu sou o conteúdo passado na primeira chamada</p>
          <ol>
            <li>Item 01</li>
            <li>Item 02</li>
            <li>Item 03</li>
          </ol>
          <hr />
        </GenericComponent>
      </div>
      <div>
        <GenericComponent>
          <p>Eu sou o segundo conteúdo passado na segunda chamada</p>
          <ul>
            <li>Item 01</li>
            <li>Item 02</li>
            <li>Item 03</li>
          </ul>
          <hr />
        </GenericComponent>
      </div> */}

      {/* <div>
        <MyButtonComponent></MyButtonComponent>
      </div> */}

      {/* <div>
        <UseStateComponente1></UseStateComponente1>
      </div> */}

      <div>
        <ProductTable
          products={products}
          editar={getProductById}
          deletar={deleteProduct}
        />
      </div>
      <div>
        <ComponentFormulario
          nome={name}
          preco={price}
          estoque={stock}
          handleName={handleName}
          handlePrice={handlePrice}
          handleStock={handleStock}
          salvar={saveProduct}
        />
      </div>
    </>
  );
}

export default App;

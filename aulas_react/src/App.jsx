import "./App.css";
import EventComponent from "./components/EventComponent";
import IntroComponent from "./components/IntroComponent";
import ConditionalComponent1 from "./components/ConditionalComponent1";
import ConditionalComponent2 from "./components/ConditionalComponent2";
import ProductComponent from "./components/ProductComponent";
import PostComponent from "./components/PostComponent";
import GenericComponent from "./components/GenericComponent";
import MyButtonComponent from "./components/MyButtonComponent";
import UseStateComponente1 from "./components/UseStateComponente1";

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

      <div>
        <UseStateComponente1></UseStateComponente1>
      </div>
    </>
  );
}

export default App;

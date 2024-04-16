//export default function ProductComponent(props) {

//Forma mais simplificada
export default function ProductComponent({ name, category }) {
  return (
    <div>
      <p>
        Produto: {name} - Descrição: {category}
      </p>
    </div>
  );
}

import React from "react";
import "./ComponentTabela.css";

export default function ProductTable({ products }) {
  return (
    <div>
      <h2>Tabela de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque (kg)</th>
            <th style={{ textAlign: "center" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td className="actions">
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

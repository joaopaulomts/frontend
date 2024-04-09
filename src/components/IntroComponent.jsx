import ChildComponent from "./ChildComponent";

export default function IntroComponent() {
  const a = 5,
    b = 2,
    nome = "JP";
  const aluno = {
    nome: "João Paulo",
    email: "joao.452113@alunosatc.edu.br",
  };

  return (
    <>
      <h2>Componente de Introdução</h2>
      <h3>Template Expressions</h3>
      <p>
        {nome}, o produto entre {a} e {b} é {a * b}
      </p>
      <p>
        Aluno: {aluno.nome} <br /> E-mail: {aluno.email}
        <ChildComponent />
      </p>
    </>
  );
}

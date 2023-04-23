import React, { useState } from "react";

const Formulario = () => {

  const [nome, setNome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [idade, setIdade] = useState("");
  const [linhaDePesquisa, setLinhaDePesquisa] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Monta o objeto com os dados do formulário
    const aluno = {
      nome: nome,
      titulo: titulo,
      idade: idade,
      linha_de_pesquisa: linhaDePesquisa
    };

    // Faz a requisição POST para a API
    try {
      const response = await fetch("http://127.0.0.1:5000/api/aluno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
      });

      if (response.ok) {
        console.log("Dados do formulário enviados com sucesso!");
        window.location.reload();
      } else {
        console.error("Erro ao enviar os dados do formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados do formulário:", error);
    }
  };

  
  return (
    <main>
      <form id="create-form" onSubmit={handleSubmit}>
        <div className="sessao-conteudo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="titulo">Título (Graduação, Mestrado ou Doutorado):</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <label htmlFor="idade">Idade:</label>
          <input
            type="text"
            id="idade"
            name="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <label htmlFor="linha_de_pesquisa">Linha de Pesquisa:</label>
          <input
            type="text"
            id="linha_de_pesquisa"
            name="linha_de_pesquisa"
            value={linhaDePesquisa}
            onChange={(e) => setLinhaDePesquisa(e.target.value)}
          />
          <button type="submit">Criar</button>
        </div>
      </form>
    </main>
  );

};


export default Formulario;

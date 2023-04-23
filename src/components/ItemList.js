import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  // Função para renderizar os itens
  const renderItems = async (items) => {
    // Lógica para renderizar os itens
    // Aqui você pode usar o setItems para atualizar o estado com os itens a serem renderizados
  };

  // Efeito para carregar os itens ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fazer uma requisição para obter os itens do servidor
        const response = await fetch("http://localhost:5000/api/aluno");
        const data = await response.json();
        setItems(data);
        // Chamar a função para renderizar os itens
        renderItems(data);
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      }
    };
    fetchData();
  }, []);

  // Função para excluir um item
  const handleDeleteItem = async (item) => {
    try {
      // Fazer uma requisição para excluir o item do servidor
      await fetch(`http://127.0.0.1:5000/api/aluno/${item.uuid}`, {
        method: "DELETE",
        mode: "cors",
      });

      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  };

  return (
    <>
      <h1>Lista de Alunos </h1>

      <ul>
        {items.map((item) => (
          <li key={item.nome}>
            <strong>
              {item.nome} - {item.titulo} anos - titulo de {item.idade} com linha de pesquisa em {item.linha_de_pesquisa}
            </strong>
            <button className="btn-remove" onClick={() => handleDeleteItem(item)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;

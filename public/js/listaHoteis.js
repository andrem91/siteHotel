const cards = document.getElementById("cards-hoteis");

fetch("http://localhost:8080/hoteis")
  .then((res) => res.json())
  .then((dadosCards) => {
    dadosCards.forEach((hotel) => {
      cards.innerHTML += `
        <div class="card">
					<img src="images/${hotel.imagem}" class="card-image" alt="${hotel.nome}">
					<div class="card-body">
						<h3 class="card-title nome-hotel">${hotel.nome}</h3>
            <span class="rate">${getEstrelas(hotel.estrelas)}</span>
						<p class="card-text localizacao">${hotel.cidade} - ${hotel.estado}</p>
						<p class="card-text descricao">${hotel.descricao}</p>
            <button type="button" class="btn btn-primary" onclick="acessarInfo(${hotel.id})">Saiba mais</button>
					</div>
        </div>
        `;
    });
  })
  .catch((error) => {
    console.log("Erro ao carregar hoteis: ", error);
    cards.innerHTML =
      "<p>Erro ao carregar a lista de hotéis. Tente novamente mais tarde.</p>";
  });

function getEstrelas(quantidade) {
  let estrelas = "";
  for (let i = 0; i < quantidade; i++) {
    estrelas += "⭐";
  }
  return estrelas;
}

function acessarInfo(id) {
  window.location.href = `/hotel/${id}`
}
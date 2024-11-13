const infoHotel = document.getElementById("info-hotel");
const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");

fetch(`/hotel/${id}`)
  .then((res) => res.json())
  .then((hotel) => {
    infoHotel.innerHTML = `
      <div class="hotel-details">
        <div class="hotel-image-container">
          <img src="images/${hotel.imagem}" class="hotel-image" alt="Imagem do ${hotel.nome}">
        </div>
        <div class="hotel-info">
          <h2 class="hotel-name">${hotel.nome}</h2>
          <p class="hotel-stars">${getEstrelas(hotel.estrelas)}</p>
          <p class="hotel-location">${hotel.cidade} - ${hotel.estado}</p>
          <p class="hotel-description">${hotel.descricao}</p>
        </div>
      </div>
    `;
  })
  .catch((error) => {
    console.error("Erro ao carregar o hotel:", error);
    infoHotel.innerHTML = "<p>Erro ao carregar as informações do hotel.</p>";
  });

function getEstrelas(quantidade) {
  let estrelas = "";
  for (let i = 0; i < quantidade; i++) {
    estrelas += "⭐";
  }
  return estrelas;
}

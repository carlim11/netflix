<script>
    // Botão "Assistir"
    const playButton = document.querySelector(".play");

    playButton.addEventListener("click", () => {
        alert("▶ Iniciando reprodução...");
    });

    // Botão "Mais informações"
    const infoButton = document.querySelector(".info");

    infoButton.addEventListener("click", () => {
        alert(
            "O Mundo do Cinema\n\n" +
            "Uma seleção de filmes e séries para você aproveitar."
        );
    });

    // Interação com os filmes
    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", () => {
            const title = movie.querySelector(".movie-title").textContent;

            alert("Você selecionou: " + title);
        });
    });

    // Links do menu
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const section = link.textContent;

            alert("Abrindo: " + section);
        });
    });

    // Efeito no cabeçalho ao rolar a página
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#141414";
        } else {
            header.style.background =
                "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)";
        }
    });
</script>

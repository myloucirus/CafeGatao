

(() => {

    const botaoMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menunav");

    if (botaoMenu && menu) {

        botaoMenu.addEventListener("click", () => {

            const aberto = menu.classList.toggle("ativo");

            botaoMenu.classList.toggle("aberto", aberto);
            botaoMenu.setAttribute("aria-expanded", aberto);
            botaoMenu.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );

        });

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("ativo");
                botaoMenu.classList.remove("aberto");
                botaoMenu.setAttribute("aria-expanded", "false");
                botaoMenu.setAttribute("aria-label", "Abrir menu");

            });

        });

        document.addEventListener("click", event => {

            if (!menu.contains(event.target) && !botaoMenu.contains(event.target)) {

                menu.classList.remove("ativo");
                botaoMenu.classList.remove("aberto");
                botaoMenu.setAttribute("aria-expanded", "false");
                botaoMenu.setAttribute("aria-label", "Abrir menu");

            }

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {

                menu.classList.remove("ativo");
                botaoMenu.classList.remove("aberto");
                botaoMenu.setAttribute("aria-expanded", "false");
                botaoMenu.setAttribute("aria-label", "Abrir menu");

            }

        });

    }

    const elementos = document.querySelectorAll(".revelar");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver((entradas, observador) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");
                    observador.unobserve(entrada.target);

                }

            });

        }, {
            threshold: 0.1
        });

        elementos.forEach(elemento => {
            observador.observe(elemento);
        });

    } else {

        elementos.forEach(elemento => {
            elemento.classList.add("visivel");
        });

    }

})();

import "./style.css";
import "./fonts/icons/css/fontello.css";

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".acao");

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var targetDivId = this.getAttribute("data-target");
            var targetDiv = document.getElementById(targetDivId);

            // Determina se a div clicada está atualmente aberta
            var isAlreadyOpen =
                targetDiv.style.maxHeight && targetDiv.style.maxHeight !== "0px";

            // Fecha todas as divs
            document.querySelectorAll(".acao").forEach(function (lnk) {
                var divToHide = document.getElementById(
                    lnk.getAttribute("data-target")
                );
                divToHide.style.maxHeight = "0px";
            });

            // Abre a div clicada, se não estiver aberta
            if (!isAlreadyOpen) {
                // Define um max-height suficientemente grande para a maioria dos conteúdos
                targetDiv.style.maxHeight = "1000px"; // Ajuste conforme necessário
            }
        });
    });


});

document.addEventListener('DOMContentLoaded', () => {
    const colorSets = {
        star1: ["maroon", "black", "white", "blue"],
        star2: ["black", "purple", "white", "blue"], 
        star3: ["gray", "navy", "white", "crimson"], 
        star4: ["red", "black", "white", "green"] 
    };
    let starColors = { star1: null, star2: null, star3: null, star4: null };

    function changeColor(star) {
        let currentColors = colorSets[star.id];
        let currentColorIndex = currentColors.indexOf(starColors[star.id]);
        currentColorIndex = (currentColorIndex + 1) % currentColors.length;
        star.style.backgroundColor = currentColors[currentColorIndex];
        starColors[star.id] = currentColors[currentColorIndex];
        checkColors();
    }

    function checkColors() {
        if (starColors.star1 === "maroon" && starColors.star2 === "purple" &&
            starColors.star3 === "navy" && starColors.star4 === "green") { 
            window.location.href = "loadingbeast.html"; 
        }
    }

    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => changeColor(star));
    });
});

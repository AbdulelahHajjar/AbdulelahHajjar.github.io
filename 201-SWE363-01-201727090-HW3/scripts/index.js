const promotionalImagesPaths = ["images/term-project-teams.jpg", "images/drmirzal-explaining-1.jpg", "images/drmirzal-explaining-2.jpg"];
var currentPromoImagePathIndex = 0;

window.onload = function() {
    setUpPromotionalImages();
};



function setUpPromotionalImages() {
    addPromotionalImages();
    setPromotionalImage(currentPromoImagePathIndex);
    startShufflingPromoImages();
}

function addPromotionalImages() {
    for (imgPath in promotionalImagesPaths) {
        var img = document.createElement("img");
        img.src = promotionalImagesPaths[imgPath];
        img.className = "promotional-image";
        img.id = "promo-" + imgPath;
        $("#promotional-images").prepend(img);
        $(`#${img.id}`).css('opacity', '0');
    }
}

function startShufflingPromoImages() {
    setTimeout(function() {
        var newIndex = currentPromoImagePathIndex + 1 >= promotionalImagesPaths.length ? 0 : currentPromoImagePathIndex + 1;
        setPromotionalImage(newIndex);
        startShufflingPromoImages();
    }, 3000);
}

function setPromotionalImage(pathIndex) {
    $(`#promo-${currentPromoImagePathIndex}`).animate({ opacity: 0.0 });
    $(`#promo-${pathIndex}`).animate({ opacity: 1.0 });
    currentPromoImagePathIndex = pathIndex;
}
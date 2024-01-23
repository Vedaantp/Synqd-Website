document.getElementById('navbarNav').addEventListener('click', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    var bootstrapButton = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });
    bootstrapButton.hide();
});

function scrollToTarget() {
    const targetDiv = document.getElementById('Information');
    const targetPosition = targetDiv.offsetTop - (window.innerHeight * 0.15);
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}
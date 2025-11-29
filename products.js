// Load-more gallery script
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.product-card'));
    const loadBtn = document.getElementById('loadMoreBtn');
    const initialVisible = 8; // number of cards visible on load
    const increment = 4; // how many to show when clicking 'Load more'

    function updateVisibility() {
        cards.forEach((c, i) => {
            if (i < visibleCount) {
                c.classList.remove('hidden');
            } else {
                c.classList.add('hidden');
            }
        });
        if (visibleCount >= cards.length && loadBtn) loadBtn.style.display = 'none';
    }

    let visibleCount = initialVisible;
    updateVisibility();

    if (loadBtn) {
        loadBtn.addEventListener('click', function () {
            visibleCount = Math.min(cards.length, visibleCount + increment);
            updateVisibility();
        });
    }
});

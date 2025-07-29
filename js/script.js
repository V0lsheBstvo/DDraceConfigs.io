const searchInput = document.getElementById('searchInput');
const tags = document.querySelectorAll('.tag');
const configList = document.getElementById('configList');
const configCards = configList.getElementsByClassName('config-card');

// Функция для фильтрации конфигураций
function filterConfigs() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeTags = Array.from(tags).filter(tag => tag.classList.contains('active')).map(tag => tag.dataset.tag);

    for (let card of configCards) {
        const title = card.querySelector('h2').innerText.toLowerCase();
        const author = card.querySelector('.config-author').innerText.toLowerCase(); // Получаем текст автора
        const tags = card.dataset.tags.split(',');

        const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);
        const matchesTags = activeTags.length === 0 || activeTags.some(tag => tags.includes(tag));

        if (matchesSearch && matchesTags) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    }
}

// Обработчик ввода в поисковом поле
searchInput.addEventListener('input', filterConfigs);

// Обработчик кликов по тегам
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('active');
        filterConfigs();
    });
});

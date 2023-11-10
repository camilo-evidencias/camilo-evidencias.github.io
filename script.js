document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('icon');
    const menu = document.getElementById('menu');

    function toggleMenu() {
        menu.classList.toggle('show');
    }

    icon.addEventListener('click', toggleMenu);

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.classList.remove('show');
        }
    });

    const tabsSection = document.querySelector('.tabs-section');

    if (tabsSection) {
        const tabs = tabsSection.querySelectorAll('.tab');
        const tabContents = tabsSection.querySelectorAll('.tab-content');

        function showTabContent(tabId) {
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            const selectedTabContent = document.getElementById(tabId);
            if (selectedTabContent) {
                selectedTabContent.style.display = 'block';
            }
        }

        // Mostrar por defecto la Bitácora 1
        showTabContent('content1');
        // Marcar como activa la pestaña correspondiente
        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === 'content1') {
                tab.classList.add('active');
            }
        });

        function handleTabClick(event) {
            event.preventDefault();

            // Si la tab está deshabilitada, no hagas nada
            if (this.classList.contains('disable')) {
                return;
            }

            const selectedTabId = this.getAttribute('data-tab');

            // Agrega y quita la clase 'active' para resaltar la pestaña activa
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            showTabContent(selectedTabId);
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', handleTabClick);
        });

        icon.addEventListener('click', toggleMenu);

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                menu.classList.remove('show');
            }
        });
    }
});


document.getElementById('showButton').addEventListener('click', function() {
    var photoContainer = document.getElementById('photoContainer');

    photoContainer.style.animation = 'none';
    photoContainer.offsetHeight; 
    photoContainer.style.animation = null;

    photoContainer.style.display = 'block';

    var randomX = Math.floor(Math.random() * (window.innerWidth - 50));
    var randomY = Math.floor(Math.random() * (window.innerHeight - 50));

    photoContainer.style.left = randomX + 'px';
    photoContainer.style.top = randomY + 'px';
});

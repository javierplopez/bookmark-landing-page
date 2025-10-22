document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    function toggleMenu() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    function switchTab(targetTab) {
        tabButtons.forEach(button => {
            button.classList.remove('active');
            button.classList.remove('text-gray-900');
            button.classList.remove('font-medium');
            button.classList.add('text-gray-500');
            const indicator = button.querySelector('.tab-indicator');
            indicator.classList.remove('bg-red-500');
            indicator.classList.add('bg-transparent');
        });

        tabPanels.forEach(panel => {
            panel.classList.add('hidden');
        });

        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
        activeButton.classList.add('active');
        activeButton.classList.remove('text-gray-500');
        activeButton.classList.add('text-gray-900');
        activeButton.classList.add('font-medium');
        const activeIndicator = activeButton.querySelector('.tab-indicator');
        activeIndicator.classList.remove('bg-transparent');
        activeIndicator.classList.add('bg-red-500');

        const activePanel = document.getElementById(`panel-${targetTab}`);
        activePanel.classList.remove('hidden');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
});
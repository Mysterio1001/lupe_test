

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    const title = accordion.querySelector('.accordion__title');
    const content = accordion.querySelector('.accordion__content');
    const iconPlus = accordion.querySelector('.accordion__icon--plus');
    const iconMinus = accordion.querySelector('.accordion__icon--minus');

    title.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');

        // 👉 先收合所有 accordion（互斥的關鍵）
        accordions.forEach((otherAccordion) => {
        const otherContent = otherAccordion.querySelector('.accordion__content');
        const otherPlus = otherAccordion.querySelector('.accordion__icon--plus');
        const otherMinus =   otherAccordion.querySelector('.accordion__icon--minus');

        otherContent.classList.add('hidden');
        otherPlus.classList.remove('hidden');
        otherMinus.classList.add('hidden');
        });

        // 👉 如果原本是關閉的，才打開它（不讓你點開再點關）
        if (!isOpen) {
        content.classList.remove('hidden');
        iconPlus.classList.add('hidden');
        iconMinus.classList.remove('hidden');
        }
    });
});



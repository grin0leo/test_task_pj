export function scrollToForm(buttonId = 'scroll-button', targetId = 'form-section') {
    const button = document.getElementById(buttonId);
    const target = document.getElementById(targetId);

    if (!button || !target) return;

    button.addEventListener('click', (e) => {
        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        //фокус на первом вводе
        setTimeout(() => {
            const firstInput = target.querySelector('input, button, [tabindex]');
            firstInput?.focus();
        }, 1000);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('bookingModal');
    const closeModalButton = document.querySelector('.modal .close');

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeModalButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your order has been placed!');
        closeModal();
    });
});

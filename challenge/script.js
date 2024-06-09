document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        alert(`Image ${index + 1} clicked!`);
    });
});

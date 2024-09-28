
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {

        const accordionItem = this.parentElement;


        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = 0;
                item.querySelector('.accordion-content').style.padding = '0 15px';
            }
        });


        accordionItem.classList.toggle('active');
        const content = accordionItem.querySelector('.accordion-content');

        if (accordionItem.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '15px 15px';
        } else {
            content.style.maxHeight = 0;
            content.style.padding = '0 15px';
        }
    });
});

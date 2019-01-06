const lisList = document.querySelectorAll('li');

for (let item of lisList) {
    item.addEventListener('mouseover', function() {
        this.classList.add('selected');
    });
    item.addEventListener('mouseout', function() {
        this.classList.remove('selected');
    });
    item.addEventListener('click', function() {
        this.classList.toggle('done');
    });
}
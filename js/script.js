'use strict'

var panels = document.querySelectorAll('.panels__panel'),
panelsParent = document.querySelector('.panels');


function toggleOpen(e) {
    var active = panelsParent.querySelector('.open');
    if(active) {
        active.classList.remove('open');
        if(active !== this) {
            this.classList.add('open');
        }
    }else {
        this.classList.add('open');
    }
}

function toggleActive(e) {
    if(e.propertyName === 'flex' || e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
}

panels.forEach(function(panel) {
    panel.addEventListener('click', toggleOpen);
});

panels.forEach(function(panel) {
    panel.addEventListener('transitionend', toggleActive);
});
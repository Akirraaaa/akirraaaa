const header = document.getElementsByTagName('header')[0];

document.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll > 0) {
        header.setAttribute('scrolled', 'true');
    } else {
        header.removeAttribute('scrolled');
    }
});


const menus = document.getElementsByClassName('menu');
const menuItems = document.querySelectorAll('.menu-items');
console.log(menuItems);

for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('mouseenter', () => {
        for (let j = 0; j < menuItems.length; j++) {
            menuItems[j].style.visibility = 'hidden';
        }

        menus[i].querySelector('.menu-items').style.visibility = 'visible';
    });
}

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('mouseleave', () => {
        menuItems[i].style.visibility = 'hidden';
        
        const childrens = menuItems[i].childNodes;
    });
}
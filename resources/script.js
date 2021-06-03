const parallax = () => {

    const pA = Array.from (document.querySelectorAll ('[data-parallax]'));
    pA.map (el => {

        let newPos;
        newPos = (window.scrollY - el.offsetTop + window.innerHeight) / 10;

        if (isVisible(el)) {

            el.style.transform = `translate3d(0,-${newPos}px,0)`;
            el.style.webkitTransform = `translate3d(0,-${newPos}px,0)`;
            el.style.msTransform = `translate3d(0,-${newPos}px,0)`;
        }
    })

}

const isVisible = (el) => {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
}

let scrollPos = 0;

const wheelZoom = () => {
    const elemZoom = Array.from (document.querySelectorAll ('[data-zoom]'));
    elemZoom.map (el => {
        let zoomValue = 1 ;
        let style = window.getComputedStyle(el, null).getPropertyValue("transform");
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            zoomValue = zoomValue - 0.0005;
        } else {
            zoomValue = zoomValue + 0.001;
        }

        if (isVisible(el) && style) {
            el.style.transform = `${style} scale(${zoomValue})`;
            el.style.webkitTransform = `${style} scale(${zoomValue})`;
            el.style.msTransform = `${style} scale(${zoomValue})`;
        }
    })
    scrollPos = (document.body.getBoundingClientRect()).top;
}

const textAnimation = () => {
    const textElem = Array.from (document.querySelectorAll ('[data-text-appear]'));
    textElem.map (el => {
        if (isVisible(el) ) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    })
}

window.addEventListener ('scroll', parallax );
window.addEventListener ('scroll', wheelZoom );
window.addEventListener ('scroll', textAnimation );


const parallax = () => {

    const pA = Array.from (document.querySelectorAll ('[data-parallax]'));
    pA.map (el => {
        const s = Math.min (1, Math.max (0, el.dataset.speed)) || 1;
        const r = el.dataset.reverse;
        const opa = el.dataset.opacity;
        const trans = el.dataset.translate;
        const sca = el.dataset.scale;

        let lastPos, newPos,delta;
        newPos = (window.scrollY - el.offsetTop + window.innerHeight) / 6;

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

window.addEventListener ('scroll', parallax );


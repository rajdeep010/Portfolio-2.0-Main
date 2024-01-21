Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet(["#heading", '.icon', '.url', '.url-mail', "#dark-mode", "#light-mode"], {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.textAnimate("#name", {
    style: 1,
    y: 20,
    delay: 0.2,
    duration: 2.2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
});


gsap.to(".fleftelm", {
    // to fix the screen at the described point
    scrollTrigger: {
        trigger: ".fimages",
        pin: true,
        start: "top middle",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },

    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll('.fleftelm')
Shery.imageEffect(".images", {
    style: 5,
    // config: {onMouse: {value: 1}},
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "end end",
                scrub: 1,
                // this onUpdate keeps the progress
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                }
            })
        })
    }
})

var tl = gsap.timeline()

tl
    .from("#arrow_down", {
        opacity: 0
    })
    .to("#arrow_down", {
        y: 15,
        repeat: "-1",
        yoyo: "true"
    })
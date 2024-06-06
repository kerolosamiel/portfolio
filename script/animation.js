const aboutImageTm = gsap.timeline({
  default: {
    duration: 3,
  },
});
aboutImageTm.pause();

const aboutTextTm = gsap.timeline({
  default: {
    duration: 3,
  },
});
aboutTextTm.pause();

window.addEventListener("scroll", () => {
  if (
    window.scrollY >=
    aboutSection.offsetTop - aboutSection.offsetHeight / 2
  ) {
    aboutImageTm.play();
    aboutTextTm.play();
  }
});

tm.fromTo(
  "header",
  {
    y: -400,
  },
  {
    opacity: 1,
    y: 0,
  }
)
  .fromTo(
    "#line-1",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    "#line-2",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    "#line-3",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    ".circle",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );

aboutImageTm
  .fromTo(
    ".content .image .line-1",
    {
      width: 0,
    },
    {
      width: "80%",
    }
  )
  .fromTo(
    ".content .image .line-2",
    {
      height: "0%",
    },
    {
      height: "80%",
    }
  )
  .fromTo(
    ".content .image .line-3",
    {
      height: "0%",
    },
    {
      height: "80%",
    }
  )
  .fromTo(
    ".content .image .line-4",
    {
      width: 0,
    },
    {
      width: "80%",
    }
  )
  .fromTo(
    ".content .image img",
    {
      scale: 0,
    },
    {
      scale: 1,
    }
  );

aboutTextTm
  .fromTo(
    ".about-me .info .sub-title",
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
    }
  )
  .to(".about-me .info .info-container #text-1", {
    duration: 1,
    text: {
      value:
        "My name is Kerolos Amiel, I am a self-taught creative frontend developer based in Egypt. I am passional in catering my works for emerging start, upsand small businesses that make an impact, inspire and connect with people",
    },
  })
  .to(".about-me .info .info-container #text-2", {
    duration: 1,
    text: {
      value:
        "I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.",
    },
  })
  .fromTo(
    ".about-me .info .info-container .btn",
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
    }
  );

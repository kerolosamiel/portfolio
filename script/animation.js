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
        "As a Full Stack .NET Developer with a strong foundation in both front-end and back-end technologies, I specialize in crafting dynamic, responsive, and user-friendly web applications. My expertise spans HTML5, CSS3, JavaScript/TypeScript, React.js, Next.js, ASP.NET, C#, and SQL Server, allowing me to deliver high-quality, scalable solutions tailored to client needs.",
    },
  })
  .to(".about-me .info .info-container #text-2", {
    duration: 1,
    text: {
      value:
        "With two years of freelance experience. And structured training in the Digital Egypt Builders scholarship, I bring a blend of creativity and technical precision, ensuring seamless performance, and robust functionality. My experience spans freelancing and structured training, making me a versatile developer ready to tackle complex challenges.",
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

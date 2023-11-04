let glados = ["Forms FORM-231102-12", 
              "Test assessment report",
              " ",
              "'Momentum, a function of mass and velocity, is conserved between portals. In layman's terms, speedy thing goes in, speedy thing comes out.'",
              " ",
              "GLaDOS (Genetic Lifeform and Disk Operating System) is a fictional character from the video game series Portal. The character was created by Erik Wolpaw and Kim Swift and voiced by Ellen McLain. GLaDOS is depicted in the series as an artificially superintelligent computer system responsible for testing and maintenance in the Aperture Science Computer-Aided Enrichment Center in all titles.",
              "'The right man in the wrong place can make all the difference in the world.'",
              " ",
              "Impressive work, Ms. Vance.",
              "Gordon… Freeman?... Ms Vance. You wouldn't need all that to imprison Gordon Freeman.",
              "Perhaps what I am is not as important as what I can offer you in exchange for coming all this way.",
              "Good. As a consequence of your action, this entity will continue. And this entity will not.",
            ]

let credits = [">List of Personnel",
                " ",
                "amolinae",
                "Gordon Freeman",
                "Alyx Vance",
                "Eli Vance",
                "Isaac Kleiner",
                "Barney Calhoun",
                "G-Man",
                "Breen",
                "Adrian Shephard",
                "Barney Calhoun",
                "Judith Mossman",
                "Wallace Breen",
                "Chell",
                "GLaDOS",
                "Wheatley",
          ]


new TypeIt("#glados", {
  strings: glados,
  nextStringDelay: 750,
  speed: 75,
  cursorChar: "_",
  lifeLike: true,
  waitUntilVisible: true,
  }).go();

new TypeIt("#credits", {
  strings: credits,
  startDelay: 7500,
  nextStringDelay: 750,
  speed: 75,
  cursorChar: "_",
  lifeLike: true,
  waitUntilVisible: true,
  }).go();

new TypeIt("#subjectname", {
  strings: ["amolinae"],
  startDelay: 1200,
  speed: 75,
  cursorChar: "_",
  lifeLike: true,
}).go();
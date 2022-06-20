const solarSystem = document.getElementById("solarSystem");
const planets = [
  {
    name: "Mercury",
    diameter: 4879,
    color: "grey",
  },
  {
    name: "Venus",
    diameter: 12104,
    color: "yellow",
  },
  {
    name: "Earth",
    diameter: 12742,
    color: "green",
  },
  {
    name: "Mars",
    diameter: 6779,
    color: "pink",
  },
  {
    name: "Jupiter",
    diameter: 139822,
    color: "yellow",
  },
  {
    name: "Saturn",
    diameter: 116464,
    color: "orange",
  },
  {
    name: "Uranus",
    diameter: 50724,
    color: "grey",
  },
  {
    name: "Neptune",
    diameter: 49244,
    color: "blue",
  },
];

// Task:
// Write a function to render
// the planets from the planets array using JavaScript.

// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)

solarSystem.innerHTML = planets
  .map((planet) => {
    const width =
      planet.diameter > 55000
        ? planet.diameter / 500
        : planet.diameter > 45000
        ? planet.diameter / 200
        : planet.diameter < 5000
        ? planet.diameter / 75
        : planet.diameter / 100;
    console.log(width);
    return `<div class="${planet.name}-orbit orbit"></div> <div class="${
      planet.name
    }-spin"><div id="${
      planet.name
    }" class="planet" style="width:${width}px; min-width:${
      planet.diameter / 1000
    }px; background:conic-gradient(#000 0deg 180deg, ${
      planet.color
    } 180deg 360deg);"><div class="info"><p>${planet.name}</p><p>${
      planet.diameter
    }</p></div></div></div> `;
  })
  .join("");

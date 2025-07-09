(() => {
  const e = document.getElementById("links"),
    o = document.querySelector("h1"),
    n = {
      name: "Lucas Nahuel Toledo Perez",
      nickname: "Lucas Nahuel Toledo Perez",
      description:
        "Desarrollador web en formación con interés en el diseño y la programacion de experiencias digitales. Estudio desarrollo web y de videojuegos, combinando logica, diseño y creatividad para construir sitios interactivos y proyectos orientados al usuario.",
      avatar: "../IMG_8959.png",
      social: [
        { name: "github", url: "https://github.com/KrommoLT", username: "" },
        {
          name: "instagram",
          url: "https://www.instagram.com/lucasnahuelt",
          username: "",
        },
        { name: "twitter", url: "https://x.com/lucasnahueltol", username: "" },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/lucas-nahuel-toledo-p%C3%A9rez-24b44314b/",
          username: "",
        },
      ],
      links: [
        {
          name: "Proyectos",
          url: "https://github.com/KrommoLT",
          color: "yellow",
          emoji: "💬",
        },
      ],
      footer: "Made with Love on Argentina",
    };
  (() => {
    let t = document.createTextNode(n?.name),
      a = n?.links
        ?.map(
          (e) =>
            `<div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n          <a class="text-sm font-bold text-${e.color}-600 text-center hover:text-${e.color}-800 cursor-pointer"\n            href="${e.ulr}" target="_blank">\n            ${e.name}\n          </a>\n          <span>${e.emoji}</span>\n        </div>`
        )
        .join(""),
      r = document.createElement("section");
    (r.innerHTML = a), e.appendChild(r), o.appendChild(t);
  })();
})();

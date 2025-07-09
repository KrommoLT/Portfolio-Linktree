const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Lucas Nahuel Toledo Perez",
  nickname: "Lucas Nahuel Toledo Perez",
  description:
    "Desarrollador web en formación con interés en el diseño y la programacion de experiencias digitales. Estudio desarrollo web y de videojuegos, combinando logica, diseño y creatividad para construir sitios interactivos y proyectos orientados al usuario.",
  avatar: "../IMG_8959.png",
  social: [
    {
      name: "github",
      url: "https://github.com/KrommoLT",
      username: "",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/lucasnahuelt",
      username: "",
    },
    {
      name: "twitter",
      url: "https://x.com/lucasnahueltol",
      username: "",
    },
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
    {
      name: "Certificados",
      url: "https://www.linkedin.com/in/lucas-nahuel-toledo-p%C3%A9rez-24b44314b/details/education/",
      color: "green",
      emoji: "📃",
    },
  ],
  footer: "Made with Love on Argentina",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links
    ?.map((link) => {
      return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.ulr}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`;
    })
    .join("");
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
};

main();

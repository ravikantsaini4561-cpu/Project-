let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "ameya pandey",
    pic: "https://imgs.search.brave.com/vd545wS9GcxJ9hATRdZQuBy6yKqcJouJinssMvPWqmA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvUHR2/Z1BvZ1BJX2NFX1R6/R0l0SExuaG53WVVp/Y0JGZlRtejl3aHNt/YktJTS5qcGVnP3dp/ZHRoPTE0MCZoZWln/aHQ9MTA1JmF1dG89/d2VicCZzPWJjOGRl/YWYxZDE1ZDJkMDVj/YzU2MzA2NWY3MzMw/NmI4ZDI4ZDA2ODA",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha mehta",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "hitesh narwani",
    pic: "https://imgs.search.brave.com/cAnkUm6HaLqvHCv__RhYbb3HhpbS5D7ESwvEJsrW9B0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGFwcHktdHJh/dmVsZXItd2l0aC1i/YWNrcGFjay1wYXNz/cG9ydF8xMTMxMDg0/LTg1Mi5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "vinta ",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "harshit kumar",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "prayag raj",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
   {
    name: "harsh sahu",
    pic: "https://imgs.search.brave.com/pCmLDQg-oWVFJrBgdymyR1sv4XcmOxdBvv7hJLsl2oE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTE2/MDUzNjgvcGV4ZWxz/LXBob3RvLTExNjA1/MzY4LmpwZWc_Y3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    bio: "aesthetic  | photographer vibe",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body or any container
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
});

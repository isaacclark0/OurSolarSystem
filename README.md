
# 🔗 [PLANETZ.LOL](https://planetz.lol) 🔗

PLANETZ.LOL is a SPA (Single Page Application) that educates the user not only on the planets in our solar system but their moons as well. The project was created for the [Dear Junior Dev Discord Server](https://discord.gg/J4dQxyAFqC) weekly quackathon!


## 🖼 Screenshot 🖼

![App Screenshot](https://tinypic.host/images/2023/04/02/Untitled.jpg)


## ⌨ Deployment ⌨
  
**_NOTE:_** The following project was built with nodeJS. Please install nodeJS LTS before continuing with deployment instructions!

To install dependencies 

```bash
  npm install
```

To build the project for production 

```bash
  npm run build
```

To start the server

```bash
  npm run start
```


## 🖥 Tech Stack 🖥

**Client:** NextJS, React, Prisma, Animate.css, react-swipeable, Sharp

**Server:** Debian, NGINX, PostgreSQL, NextJS


## ✅ Challenge Requirements ✅

**Each planet of the solar system must have its own profile page**  

In order to achieve this task, our team leveraged a feature in NextJS known as "dynamic routes," as documented [HERE](https://nextjs.org/docs/routing/dynamic-routes). This functionality empowers developers to create a page once and dynamically insert content into that page according to route parameters.

**No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS**  

By initiating the project with the development of planets using CSS, we discovered that creating high definition planets was not a simple task. Initially, the planets had minimal features and were quite basic. This led us to consider employing a pixel art style for the entire project. However, upon completion, we noticed that the planets appeared incongruent with the rest of the pixel art. After deliberation and online research, we stumbled upon a tool capable of transforming low-resolution pixel art, measuring 30px by 30px, into CSS renderings through the use of box-shadow CSS!

**If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size)**  

By utilizing our navigation bar in conjunction with the NextJS router, we have furnished users with the capability to access each planet's moons from the planet view. The moon information page is comprised of individual cards, one for each moon, which can be clicked on to reveal a comprehensive display of its corresponding information.

**Planet pages must include at least two different components that are NOT used on your homepage**

The planet page consists of two components. One for the planet itself and one for the planet information.

The planet component accepts a single prop - a string that specifies the name of the planet to be displayed. The component uses this prop to apply the prop string to the planet's CSS selector. Thus displaying whatever planet is passed as a prop.

Similarly, the planet information component receives the planet as a prop, in addition to data from the database. To ensure a seamless user experience, all data is preloaded from the database using [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props).

**All planet and moon content MUST be stored in a database**

Our personal Debian server hosts and stores all the data, using the PostgreSQL database engine. To retrieve information from the database without creating a full backend API, we utilize Prisma in conjunction with the server-side rendering capabilities of NextJS. This integrated approach enables unified database connection and information retrieval within NextJS, while keeping the database connection information secure.  

## 🤝 Our Team 🤝

**GoryIceCream** - *Frontend design*   
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/angelika-selviyan-46378b196/)

**Isaac.sc** - *Database deployment/configuration, API design, Frontend design*   
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/isaac-clark-b41028219/)

**VulcanBearBull** - *Backend server deployment/configuration, DNS/Domain configuration, Frontend design*  
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexander-charbonneau-202714215/)


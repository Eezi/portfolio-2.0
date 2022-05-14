import pathfinder from '../assets/pathfinderGif.gif';
import eCommerce from '../assets/techshop.png';
import passionLogo from '../assets/passion-logo.png';
import wallet from '../assets/wallet.jpg';
import chain from '../assets/chain.jpg.jpeg';
import flexbox from '../assets/flexboox.png';

export const pathDescription = `
    This path visualizer app has been made by using vue.js and the Dijkstra’s algorithm. 
    The user can draw their own walls or generate random walls and then scan the grid so the algorithm can find the shortest path.
`;

export const projectsContent = [
  {
    title: 'Path Visualizer',
    description: `
      This path visualizer app was made using Vue.js and the Dijkstra’s algorithm. The users can draw their own walls or generate random walls and then scan the grid so the algorithm can find the shortest path.
    `,
    imgPath: pathfinder,
    url: 'https://findshortestpath.herokuapp.com/',
  },
  {
    title: 'Passion Seeker',
    description: `
    This app is made for the people who want to find a new passion or hobbie quickly and easily.
    `,
    imgPath: passionLogo,
    url: 'https://passion-finder.herokuapp.com/',
  },
  {
    title: 'ECommerce Platform',
    description: `
    This app was made using MERN stack and Redux. The platform has a full-featured shopping cart, and the users can create accounts as well as search, rate and buy products with PayPal or credit card, and a lot more.
    `,
    imgPath: eCommerce,
    url: 'https://shoptechapp.herokuapp.com',
  },
];

export const blogs = [
  {
    title: 'Blockchains in a nutshell',
    imgPath: chain,
    url: 'https://tomias.hashnode.dev/blockchains-in-a-nutshell',
  },
  {
    title: 'Crypto wallets',
    imgPath: wallet,
    url: 'https://tomias.hashnode.dev/crypto-wallets',
  },
  {
    title: 'Flexbox Basics',
    imgPath: flexbox,
    url: 'https://tomias.hashnode.dev/flexbox-basics',
  },
];

import pathfinder from '../assets/pathfinderGif.gif';
import eCommerce from '../assets/techshop.png';

export const pathDescription = `
    This path visualizer app has been made by using vue.js and the Dijkstra’s algorithm. 
    The user can draw their own walls or generate random walls and then scan the grid so the algorithm can find the shortest path.
`;

export const projectsContent = [
    {
        title: 'Path Visualizer',
        description: `
    This path visualizer app has been made by using vue.js and the Dijkstra’s algorithm. 
    The user can draw their own walls or generate random walls and then scan the grid so the algorithm can find the shortest path.
    `,
        imgPath: pathfinder,
        url: 'https://findshortestpath.herokuapp.com/'
    },
    {
        title: 'ECommerce Platform',
        description: `
        This app has been made by using MERN stack and Redux. 
        Platform has full featured shopping card, users can create accounts, search, rate and buy products with PayPal or credit card and a lot more.
    `,
        imgPath: eCommerce,
        url: 'https://shoptechapp.herokuapp.com'
    }
];
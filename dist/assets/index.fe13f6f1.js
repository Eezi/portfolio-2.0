var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,r)=>{for(var s in r||(r={}))a.call(r,s)&&n(e,s,r[s]);if(t)for(var s of t(r))l.call(r,s)&&n(e,s,r[s]);return e};import{R as s,L as o,B as m,T as c,C as i,S as d,a as p,b as h}from"./vendor.6fe39864.js";const u=({text:e,year:t,isLast:a})=>{const l=a?"mb-6":"yearDiv mb-6";return s.createElement("div",{className:l},s.createElement("span",{className:"font-black mr-2"},t),s.createElement("span",null,e))},x=()=>s.createElement("div",{className:"mt-3 max-w-xs container"},s.createElement("div",{className:"mb-3"},s.createElement("h5",{className:"text-xl mb-5 header"},"Bio")),s.createElement(u,{text:"Born in Helsinki, Finland.",year:"1996"}),s.createElement(u,{text:"Started my studies in Information and Communication Technology.",year:"2016"}),s.createElement(u,{text:"Started working at Siemens Healthineers.",year:"2019"}),s.createElement(u,{isLast:!0,text:"Completed a Bachelor’s Degree in Information and Communication Technology from Metropolia University of Applied Sciences. Quit working at Siemens Healthineers and started working at Jakoa as a full-stack developer.",year:"2020"}));const g=()=>s.createElement("div",{className:"mt-10 max-w-md container"},s.createElement("div",{className:"mb-3"},s.createElement("h5",{className:"text-xl header"},"About")),s.createElement("p",null,"Im a full-stack developer with a passion to solve real life problems with code. I also enjoy designing simple and beautiful UIs. In my free time my biggest passion is climbing."));const E=()=>s.createElement(s.Fragment,null,s.createElement("div",{className:"md:text-3xl text-xl leading-normal"},s.createElement("h2",{className:"text-3xl"},"Tomi Salo"),s.createElement("h5",{className:"text-xl main-title"},"Full-stack developer")),s.createElement("div",{className:"max-w-4xl flex flex-row-reverse mt-16"},s.createElement("img",{width:"500px",src:"/assets/illu.538afdf1.svg",alt:"home illustration",className:"md:mr-20"})),s.createElement(g,null),s.createElement(x,null)),b=({title:e,description:t,imgPath:a,url:l})=>s.createElement("div",{style:{position:"relative"},className:"bg-black rounded-lg max-w-xs mb-5 mx-4"},s.createElement("img",{src:a,alt:"",className:"w-full z-0 h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"}),s.createElement("div",{className:"px-4 pt-4 pb-9 mb-6 text-center"},s.createElement("div",{className:"mb-2 text-2xl font-bold text-purple-600 uppercase"},e),s.createElement("span",{className:"text-sm"},t)),s.createElement("a",{target:"_blank",style:{position:"absolute",bottom:0,width:"100%"},href:l,className:"w-100 block py-3 mt-3 text-center text-lg font-extrabold text-gray-50 transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700"},"VIEW PROJECT"));const f=[{title:"Path Visualizer",description:"\n      This path visualizer app was made using Vue.js and the Dijkstra’s algorithm. The users can draw their own walls or generate random walls and then scan the grid so the algorithm can find the shortest path.\n    ",imgPath:"/assets/pathfinderGif.34b55894.gif",url:"https://findshortestpath.herokuapp.com/"},{title:"ECommerce Platform",description:"\n    This app was made using MERN stack and Redux. The platform has a full-featured shopping cart, and the users can create accounts as well as search, rate and buy products with PayPal or credit card, and a lot more.\n    ",imgPath:"/assets/techshop.64de7505.png",url:"https://shoptechapp.herokuapp.com"}],v=[{title:"Blockchains in a nutshell",imgPath:"/assets/chain.jpg.29f69154.jpeg",url:"https://tomias.hashnode.dev/blockchains-in-a-nutshell"},{title:"Crypto wallets",imgPath:"/assets/wallet.bacb7274.jpg",url:"https://tomias.hashnode.dev/crypto-wallets"}],w=()=>s.createElement("div",{className:"mb-20"},s.createElement("h3",{className:"text-center mb-5 md:text-3xl text-2xl"},"Most recent projects"),s.createElement("div",{className:"flex justify-center flex-col md:flex-row"},f.map((e=>s.createElement(b,r({key:e.title},e))))));const y=({title:e,url:t,imgPath:a})=>{const l={backgroundImage:`url(${a})`};return s.createElement("div",null,s.createElement("div",{style:l,onClick:()=>{window.open(t)},className:"imgDiv bg-cover bg-center h-40 w-70 rounded-2xl hover:cursor-pointer"}),s.createElement("h6",{className:"title text-center mt-3"},e))},N=()=>s.createElement("div",null,s.createElement("h3",{className:"text-center mb-5 md:text-3xl text-2xl"},"My posts"),s.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 content-center"},v.map((e=>s.createElement(y,r({key:e.title},e))))));const k=()=>s.createElement("nav",{className:"fixed bottom-0 z-10 text-primary inset-x-0 bg-mainBg flex justify-between text-sm uppercase font-mono md:invisible"},s.createElement(o,{to:"/",className:"w-full block py-4 text-center hover:text-gray-900 transition duration-300"},s.createElement("svg",{className:"w-6 h-6 mb-2 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})),"Home"),s.createElement(o,{to:"blog",className:"w-full block py-4 text-center hover:text-gray-900"},s.createElement("svg",{className:"w-6 h-6 mb-2 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"})),"Blog"),s.createElement(o,{to:"/projects",className:"w-full block py-4 text-center hover:text-gray-900"},s.createElement("svg",{className:"w-6 h-6 mb-2 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})),"Projects")),j=()=>s.createElement("div",null,s.createElement("div",{className:"hidden md:block"},s.createElement("header",{className:"flex text-primary flex-row justify-between items-center space-x-4 bg-mainBg py-6 px-6"},s.createElement(o,{to:"/"},s.createElement("h5",{className:"text-green-300 text-xl font-mono"},"Tomi Salo")),s.createElement("nav",{className:"flex flex-row space-x-6 font-semibold"},s.createElement(o,{to:"/",className:"text-green-300 hover:underline font-mono"},"Home"),s.createElement(o,{to:"/blog",className:"text-green-300 hover:underline font-mono"},"Blog"),s.createElement(o,{to:"/projects",className:"text-green-300 hover:underline font-mono"},"Projects")))),s.createElement(k,null)),P=()=>s.createElement("div",{className:"hidden md:block text-primary text-center fixed bottom-0 inset-x-0 bg-mainBg text-sm font-mono p-5"},"</>"," with passion by Tomi Salo © ",(new Date).getFullYear());const B=()=>s.createElement(m,null,s.createElement("div",{className:"font-mono text-primary bg-mainBg font-semibold min-h-screen"},s.createElement(j,null),s.createElement("div",{className:"flex justify-center px-8 pt-8"},s.createElement(c,null,s.createElement(i,{classNames:"fade",timeout:300},s.createElement(d,null,s.createElement(p,{exact:!0,path:"/",component:E}),s.createElement(p,{exact:!0,path:"/projects",component:w}),s.createElement(p,{exact:!0,path:"/blog",component:N}))))),s.createElement(P,null)));h.render(s.createElement(s.StrictMode,null,s.createElement(B,null)),document.getElementById("root"));

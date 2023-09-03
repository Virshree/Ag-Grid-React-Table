
//PLAIN JS -HELLO WORLD
    const heading=document.createElement("p",{id:'root',});
    heading.innerText="Welcome to CodeIgniter";
    const r=document.getElementById("root");
    r.appendChild(heading); 
//JS INTO REACT 
const header=React.createElement("div",{},"This is from React");
const root=ReactDOM.createRoot(document.getElementById("root1"));
root.render(header);

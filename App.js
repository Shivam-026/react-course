// const heading = React.createElement("h1", {}, React.createElement("h1", {}, "Hello world from React js"));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "Hello world from reactjs"),React.createElement("h2", {}, "Hello world from reactjs")]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
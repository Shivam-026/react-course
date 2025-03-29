// const heading = React.createElement("h1", {}, React.createElement("h1", {}, "Hello world from React js"));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";


// --------------------This react element is created through react core-----------------
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       [
//         React.createElement("h1", { key: "h1" }, "Hello world from ReactJS"),
//         React.createElement("h2", { key: "h2" }, "Hello world from ReactJS"),
//       ]
//     )
//   );

// --------------------This react element is created JSX-----------------


const jsxParent = (<div id="parent">
    <h1 key="h1">Hello world from JSXelement</h1>
    <h2 key="h2">Hello world from JSXelement</h2>
</div>);


const Fn1 = ()=>{
    return <h1>fn1 from functional component </h1>
};

const Fn2 = ()=>(<h1>fn2 from functional component </h1>);


// Both fn1 and fn2 is same only syntax is diff that is if we are returning one jsx we can remove return 


// ----------------------Component Compostion----------------------
const HeadingComponent = () => 
    (<div id="container">
        {/* putting react element or any JS code inside jsx we need to use {} */}

        <h2>{100 + 200}</h2>
        {jsxParent}
        {console.log("pusting js inside jsx")}
        <Fn1/>
        <Fn2/>
        <h1 className="heading">Hello world from functinal component</h1></div>)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
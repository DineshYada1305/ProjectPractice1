/**const heading = React.createElement("h1", { id: "heading", xyz: "abc"}, "Welcome to React World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

const parent = React.createElement(
    "div", { id: "parent" }, [
    React.createElement("div", 
    { id: "child" }, 
    [React.createElement("h1", {}, "I am Dinesh!"),React.createElement("h2", {}, "I am H2 Tag!")]),
    React.createElement("div", 
    { id: "child2" }, 
    [React.createElement("h1", {}, "I am Dinesh!"),React.createElement("h2", {}, "I am H2 Tag!")])]);


    console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
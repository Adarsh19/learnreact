const heading = React.createElement("h1", {
    id: "helloid"
}, "Hello world from react");

const parent = React.createElement("div", {
    id: "parent",
    class: "parent"
}, React.createElement("div", {
    id: "child",
    class: "child"
}, [React.createElement("h1", {}, "this is h1"),React.createElement("h2", {}, "this is h2")]
)
);


const nexted = React.createElement("div", {}, [React.createElement("div", {
    id: "parent",
    class: "parent"
}, React.createElement("div", {
    id: "child",
    class: "child"
}, [React.createElement("h1", {}, "this is h1"),React.createElement("h2", {}, "this is h2")]
)
),React.createElement("div", {
    id: "parent",
    class: "parent"
}, React.createElement("div", {
    id: "child",
    class: "child"
}, [React.createElement("h1", {}, "this is h1"),React.createElement("h2", {}, "this is h2")]
)
)]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nexted);
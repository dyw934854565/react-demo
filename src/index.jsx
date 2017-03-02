import ReactDOM from "react-dom"
import React from "react"
import Clock from "./component/clock"
import SayHello from "./component/hello"
import Immutable from "immutable"

var map2 = Immutable.Map({"23": 2});
var map1 = map2;

map2.set("23", 4);

console.log(map2 === map1);

function App() {
  return (
    <div>
      <SayHello name={"喵喵"} />
      <SayHello />
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
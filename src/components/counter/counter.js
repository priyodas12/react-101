import React from "react";
import './counter.css';
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const counterContextEl = React.createElement("p", { id: "counter-context",key:"counter-context" }, `Count: ${count}`)
    const incrementBtn = React.createElement("button",
        {
            id: "increment-btn",
            key: "increment-btn",
            onClick: () => {
                setCount(count + 1);
            }
        }, "Increment");
    const decrementBtn = React.createElement("button",
        {
            id: "decrement-btn",
            key: "decrement-btn",
            onClick: () => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }
        }, "Decrement");
    return React.createElement("div",
        {
            className: "counter-container",
            ey: "counter-container"
        },
        [counterContextEl, incrementBtn, decrementBtn])
}

export default Counter;



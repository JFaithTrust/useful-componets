import React from "react";
import styles from "./bubble.module.css";

const BubbleText = () => {
    return (
        <div className="grid h-screen place-content-center bg-black">
            <h1 className="text-center text-5xl font-thin text-indigo-300">
                {"Bubbbbbbbble text".split("").map((child, idx) => (
                    <span className={styles.hoverText} key={idx}>
            {child}
          </span>
                ))}
            </h1>
        </div>
    );
};

export default BubbleText;
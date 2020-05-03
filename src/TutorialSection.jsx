import React from "react";
import tutorials from "./tutorials/index";

import "./TutorialSection.less";

const TutorialSection = () => {
    return (
        <div className="tutorial-list">
            {Object.entries(tutorials.list).map(([key, { title, description }]) => (
                <div
                    className="tutorial-item"
                    key={key}
                >
                    <p className="tutorial-item-title">{title}</p>
                    <p className="tutorial-item-description">{description}</p>
                </div>
            ))}
        </div>
    );
};

export default TutorialSection;
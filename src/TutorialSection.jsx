import React, { useCallback } from "react";
import tutorials from "./tutorials/index";

import { useHistory } from "react-router-dom";

import TutorialItem from "./TutorialItem";

import "./TutorialSection.less";

const TutorialSection = () => {
    const history = useHistory();
    const handleClick = useCallback((event, path) => {
        event.preventDefault();
        history.push({
            pathname: `/tutorials/${path}`,
        });
    }, [history]);
    return (
        <div className="tutorial-list">
            {Object.entries(tutorials.list).map(([key, { title, description }]) => (
                <TutorialItem
                    path={key}
                    title={title}
                    description={description}
                    onClick={handleClick}
                    key={key}
                />
            ))}
        </div>
    );
};

export default TutorialSection;
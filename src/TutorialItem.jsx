import React, { useCallback } from "react";

import "./TutorialSection.less";

const TutorialItem = ({path, title, description, onClick}) => {
    const handleClick = useCallback((event) => {
        event.preventDefault();
        onClick(event, path);
    }, [onClick, path]);
    return (
        <div onClick={handleClick} className="tutorial-item">
            <p className="tutorial-item-title">{title}</p>
            <p className="tutorial-item-description">{description}</p>
        </div>
    )
}

export default TutorialItem;
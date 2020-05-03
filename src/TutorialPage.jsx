import React, { useEffect, useState, useMemo } from "react";

import Markdown from "markdown-it";
import markdownTex from "markdown-it-katex";

import { useRouteMatch } from "react-router-dom";

import WelcomeBanner from "./WelcomeBanner";
import tutorials from "./tutorials/index";

import "./TutorialPage.css";

const markdown = new Markdown();
markdown.use(markdownTex);

const TutorialPage = () => {
    const { params } = useRouteMatch();
    const [rendered, setRendered] = useState(null);
    const content = useMemo(() => {
        return tutorials.list[params.name].content
    }, [tutorials, params]);
    useEffect(() => {
        setRendered(markdown.render(content));
    }, [content]);
    return (
        <div className="full center">
            <WelcomeBanner />
            <div className="tutorial-content">
                {rendered && <p className="left" dangerouslySetInnerHTML={{ __html: rendered }} />}
            </div>
        </div>
    )
}

export default TutorialPage;
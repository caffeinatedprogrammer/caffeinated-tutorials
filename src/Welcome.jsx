import React from "react";

import WelcomeBanner from "./WelcomeBanner";
import TutorialSection from "./TutorialSection";

const Welcome = () => {
    return (
        <div className="full">
            <WelcomeBanner />
            <TutorialSection />
        </div>
    );
};

export default Welcome;
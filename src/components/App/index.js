import React, { useState, useEffect } from "react";
import styles from "./styles.scss";

import BackgroundStage from "../BackgroundStage";
import CustomPanel from "../CustomPanel";

import Scrollyteller from "@abcnews/scrollyteller";

let observer;
let panelsOnScreen = 0;

export default props => {
  const [storyState, setStoryState] = useState();
  const [showStage, setShowStage] = useState(false);

  const processMarker = (event, test) => {
    console.log(event)
    setStoryState({ name: event.key, event: event });
  };

  const doObserved = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        panelsOnScreen = panelsOnScreen + 1;
      } else if (!entry.isIntersecting) {
        if (panelsOnScreen === 0) panelsOnScreen = 0;
        else panelsOnScreen = panelsOnScreen - 1;
      }

      if (panelsOnScreen < 1) setShowStage(false);
      else setShowStage(true);

      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };

  useEffect(() => {
    observer = new IntersectionObserver(doObserved, {
      // TODO: test for Chrome or Firefox and make this 'document'
      // as the root to fix nucwed preview mobile
      root: null,
      rootMargin: `${window.innerHeight * 0.6}px 0px`,
      threshold: 0.0
    });

    const scrolloutPanels = document.querySelectorAll(".custom-normal-panel");

    scrolloutPanels.forEach(panel => {
      observer.observe(panel);
    });
  }, []);

  return (
    <Scrollyteller
      panels={props.scrollyData && props.scrollyData.panels}
      onMarker={processMarker}
      panelComponent={CustomPanel}
    >
      <BackgroundStage storyState={storyState} showStage={showStage} />
    </Scrollyteller>
  );
};

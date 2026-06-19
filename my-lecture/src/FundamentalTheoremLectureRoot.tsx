import React from "react";
import { Composition, registerRoot } from "remotion";
import { FundamentalTheoremLecture } from "./FundamentalTheoremLecture";

const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FTCLecture"
        component={FundamentalTheoremLecture}
        durationInFrames={1500}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};

registerRoot(RemotionRoot);

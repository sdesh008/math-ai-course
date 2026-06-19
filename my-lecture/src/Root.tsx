import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { SystemsLecture } from "../../week5/SystemsLecture";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={1500}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SystemsLecture"
        component={SystemsLecture}
        durationInFrames={2400}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};

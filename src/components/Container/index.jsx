// import styled components
import { VideoWrapper } from "./VideoContainer.style";

const VideoContainer = (props) => {
  return (
    <VideoWrapper {...props}>
      <video src={props.isWeb ? props.src : props.src} controls />
    </VideoWrapper>
  );
};

export default VideoContainer;

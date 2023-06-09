// react hooks
import { useState } from "react";

// import component
import UploadVideoCM from "./components/Upload";

function App() {
  // video data state
  const [videoData, setVideoData] = useState({ url: null, isWeb: false });

  // video changing video
  const handleChangeVideo = (val) =>
    setVideoData({ url: val, isChanged: true });

  // delete video method
  const onDelete = () => setVideoData({ url: null, isWeb: false });

  return videoData.url ? (
    <UploadVideoCM
      type="change_video"
      file={videoData.url}
      refillable=""
      isWeb={videoData.isWeb}
      isLocal={!videoData.isWeb}
      onDelete={() => onDelete()}
      onChange={handleChangeVideo}
      width={"100%"}
      height={"100%"}
    />
  ) : (
    <UploadVideoCM
      type="upload_video"
      file={videoData.url}
      refillable="true"
      isLocal={videoData.isChanged}
      onChange={handleChangeVideo}
      width={"100%"}
      height={"100%"}
    />
  );
}

export default App;

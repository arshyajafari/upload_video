// react hooks
import { Fragment } from "react";

// import react icons
import { MdUpload } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";

// import component
import VideoContainer from "../Container";

// import styled components
import { StyledLabel, DeleteDiv, StyledVideoInput } from "./UploadVideo.style";

export default function UploadVideoCM(props) {
  return (
    <Fragment>
      <StyledLabel
        htmlFor={props.type + props.file?.id}
        refillable={props.refillable}
      >
        {props.isWeb ? (
          <VideoContainer isWeb src={props.file} />
        ) : props.isLocal ? (
          <VideoContainer
            src={URL.createObjectURL(
              new Blob([props.file], { type: "video/*" })
            )}
          />
        ) : (
          <Fragment>
            <MdUpload size={22} />
            Upload video
          </Fragment>
        )}
        {props.onDelete && (
          <DeleteDiv onClick={props.onDelete}>
            <BsTrashFill />
          </DeleteDiv>
        )}
      </StyledLabel>

      <StyledVideoInput
        type="file"
        id={props.type + props.file?.id}
        onChange={(e) => props.onChange(e.target.files[0])}
        accept="audio/*, video/*"
        disabled={!props.refillable}
      />
    </Fragment>
  );
}

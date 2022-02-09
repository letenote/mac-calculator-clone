import React, { CSSProperties, FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ErrorMessage } from "../constant/ErrorMessage";
import useFitText from "use-fit-text";

const screenGroupStyles: CSSProperties = {
  height: "25%",
  padding: "10px 10px 5px 10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const miniButtonGroupStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: "25%",
};

const logScreenStyles: CSSProperties = {
  color: "grey",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "70%",
  whiteSpace: "nowrap",
  textAlign: "right",
  fontSize: 12,
};

const Screen: FC = () => {
  const onStart = useCallback(() => {
    console.log("fit text started");
  }, []);
  const onFinish = useCallback((fontSize: number) => {
    console.log("fit text resizing finished", fontSize);
  }, []);
  const { fontSize, ref } = useFitText({
    maxFontSize: 225,
    minFontSize: 1,
    onStart,
    onFinish,
  });
  const app_screen = useSelector((state: RootState) => state.screen);
  return (
    <div style={screenGroupStyles}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={miniButtonGroupStyles}>
          {["DE564F", "EDBB3F", "75C84E"].map((button, index) => {
            return (
              <div
                key={index}
                className={"miniButton"}
                style={{ backgroundColor: `#${button}` }}
              />
            );
          })}
        </div>
        <div style={logScreenStyles}>
          {app_screen.log === ErrorMessage.NAN ? "" : app_screen.log}
        </div>
      </div>
      <div
        ref={ref}
        style={{
          fontSize: app_screen.output === ErrorMessage.NAN ? 28 : fontSize,
          textAlign: "right",
          color: "white",
        }}
      >
        {app_screen.output === "" ? "0" : app_screen.output}
      </div>
    </div>
  );
};

export default memo(Screen);

import { useState } from "react";
import "./warning.css";

export default function ExplicitWarningModal({
  onAccept,
}: {
  onAccept: () => void;
}) {
  const [visible, setVisible] = useState(true);
  console.log("log object modal");

  const handleAccept = () => {
    setVisible(false);
    console.log("modal accept clicked");
    if (typeof onAccept === "function") {
      onAccept();
    } else {
      console.error("onAccept is not a function");
    }
  };

  if (!visible) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Warning: Explicit Content</h2>
        <p>
          This section contains content that may be explicit or sensitive.
          Viewer discretion is advised.
        </p>
        <button onClick={handleAccept}>I Understand</button>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  background: "#fefefe",
  padding: "2rem",
  borderRadius: "8px",
  textAlign: "center",
  maxWidth: "500px",
  boxShadow: "0 0 10px rgba(0,0,0,0.25)",
};

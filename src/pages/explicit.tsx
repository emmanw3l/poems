import { useEffect, useState } from "react";
import Slate from "./slate/slate";
import ExplicitWarningModal from "./warning/warning";

export default function ExplicitPage() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const acceptedThisSession = sessionStorage.getItem("explicitAccepted");
    if (acceptedThisSession === "true") {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("explicitAccepted", "true");
    console.log("accepted clicked");
    setAccepted(true);
  };

  return (
    <>
      {!accepted && <ExplicitWarningModal onAccept={handleAccept} />}

      {accepted && (
        <Slate header="Explicit Content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem cumque non!
          </p>
        </Slate>
      )}
    </>
  );
}

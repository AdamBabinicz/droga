import React from "react";
import { PopupContainer, PopupInner, Button } from "./PopupElements.js";

function Popup(props) {
  return props.trigger ? (
    <PopupContainer>
      <PopupInner>
        <Button onClick={() => props.setTrigger(false)}>zamknij</Button>
        {props.children}
      </PopupInner>
    </PopupContainer>
  ) : (
    ""
  );
}
export default Popup;

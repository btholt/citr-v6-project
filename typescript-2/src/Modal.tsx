import { useEffect, useRef, ReactNode, MutableRefObject } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }: { children: ReactNode }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    const x = document.createElement("div")
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

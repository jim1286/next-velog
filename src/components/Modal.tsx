import { IconX } from "@tabler/icons-react";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  activeCloseButton?: boolean;
  onClose?: () => void;
}

function Modal({
  open,
  title,
  body,
  footer,
  activeCloseButton,
  onClose,
}: Props) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-slate-300 bg-opacity-75 flex items-center justify-center">
      <div
        className="flex flex-col p-5 gap-2.5 bg-white rounded-xl0"
        style={{ minWidth: "300px" }}
      >
        {activeCloseButton && (
          <div className="flex w-full h-6 justify-end">
            <IconX onClick={onClose} style={{ cursor: "pointer" }} />
          </div>
        )}
        {title}
        {body}
        {footer}
      </div>
    </div>
  );
}

export default Modal;

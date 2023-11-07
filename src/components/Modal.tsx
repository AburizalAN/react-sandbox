import * as React from "react";
import * as ReactDOM from "react-dom";
import clsx from "clsx";
import { RiCloseFill } from "react-icons/ri";
import styled from "@emotion/styled";

type ModalProps = {
  width?: number | string;
  className?: string;
  visible: boolean;
  onCancel: () => void;
  maskClosable?: boolean;
  centerPosition?: boolean;
  title?: string;
  closeIcon?: boolean | null;
};

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: flex;
  justify-content: center;
  animation: opacityIn 200ms forwards cubic-bezier(0, 0.5, 0.25, 1);
  &.closing {
    animation: opacityOut 200ms forwards cubic-bezier(0, 0.5, 0.25, 1);
  }
  & > .content {
    margin: 100px auto auto;
    padding: 24px;
    border-radius: 12px;
    background-color: white;
    &.center {
      margin: auto;
    }
    .title-wrapper {
      position: relative;
      .title {
        font-weight: 700;
        margin-bottom: 20px;
      }
      .close-icon {
        position: absolute;
        top: 0;
        right: 0;
        .button-close {
          color: #7b7b7b;
          padding: 4px;
          border: 1px solid #b5b5b5;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
  .modal {
    animation: modalIn 200ms forwards cubic-bezier(0, 0.5, 0.25, 1);
    z-index: 99999;
    &.closing {
      animation: modalOut 200ms forwards cubic-bezier(0, 0.5, 0.25, 1);
    }
  }
  @keyframes modalIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes modalOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  @keyframes opacityIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes opacityOut {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0;
    }
  }
`

const ModalComp = ({
  width = 500,
  className,
  children,
  visible,
  onCancel,
  maskClosable = true,
  centerPosition = false,
  title,
  closeIcon = true,
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const modalWrapperRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (visible) {
      setIsOpen(true);
    } else {
      const modal = modalRef.current;
      const modalWrapper = modalWrapperRef.current;
      if (!modal || !modalWrapper) return;
      modal.classList.add("closing");
      modalWrapper.classList.add("closing");
      modal.addEventListener(
        "animationend",
        () => {
          setIsOpen(false);
        },
        { once: true }
      );
    }
  }, [visible]);

  React.useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
  }, [modalRef.current]);

  React.useEffect(() => {
    if (maskClosable) {
      document.addEventListener("mousedown", (event: Event) => {
        if (
          modalWrapperRef.current?.contains(event.target as Node) &&
          !modalRef.current?.contains(event.target as Node)
        ) {
          onCancel();
        }
      });
    }
  }, [maskClosable]);

  return isOpen ? (
    <ModalWrapper
      ref={modalWrapperRef}
    >
      <div
        ref={modalRef}
        className={clsx(
          "content",
          centerPosition ? "center" : null,
          "modal",
          className
        )}
        style={{ width }}
      >
        <div className="title-wrapper">
          {title ? <h5 className="title">{title}</h5> : null}
          {closeIcon ? (
            <div className="close-icon">
              <button onClick={onCancel} className="button-close">
                <RiCloseFill />
              </button>
            </div>
          ) : null}
        </div>
        <div>
          {children}
        </div>
      </div>
    </ModalWrapper>
  ) : null;
};

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const renderComponent = (
    <ModalComp {...props} />
  );

  return ReactDOM.createPortal(renderComponent, document.body);
}

export default Modal;

import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import { Close } from "../Close";

import "./style.css";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export class Modal extends Component<Props> {
  modalContentRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.modalContentRef = React.createRef();
    this.onPressModal = this.onPressModal.bind(this);
  }

  onPressModal(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement;
    if (!this.modalContentRef.current?.contains(target)) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <CSSTransition
        classNames={{
          enter: "modal_enter",
          enterActive: "modal_enter-active",
          enterDone: "modal_enter-done",
          exit: "modal_exit",
          exitActive: "modal_exit-active",
          exitDone: "modal_exit-done"
        }}
        in={this.props.opened}
        timeout={300}
      >
        <div className="modal" onClick={this.onPressModal}>
          <div className="modal--content" ref={this.modalContentRef}>
            <Close onClick={this.props.onClose} />

            {this.props.children}
          </div>
        </div>
      </CSSTransition>
    );
  }
}

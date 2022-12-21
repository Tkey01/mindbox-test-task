import React, { Component } from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";

interface State {
  modalOpened: boolean;
}

interface Props {}

export class Root extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  readonly state: State = {
    modalOpened: false
  };

  setModalOpen(modalOpened: boolean) {
    this.setState((prevState) => ({ ...prevState, modalOpened }));
  }

  onModalOpen() {
    this.setModalOpen(true);
  }

  onModalClose() {
    this.setModalOpen(false);
  }

  render() {
    return (
      <>
        <button onClick={this.onModalOpen}>Open invites list</button>
        <Modal opened={this.state.modalOpened} onClose={this.onModalClose}>
          <Invites />
        </Modal>
      </>
    );
  }
}

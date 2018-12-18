import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class NewFac extends React.Component {
  state = {
    openFirstModal: false,
    openSecondModal: false,
  };

  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  onOpenSecondModal = () => {
    this.setState({ openSecondModal: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openSecondModal: false });
  };

 
  render() {
     const { openFirstModal, openSecondModal } = this.state;
    const littleLorem = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
    );
    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.onOpenFirstModal}>
          Open
        </button>{' '}
        <a
          href="https://github.com/pradel/react-responsive-modal/blob/master/docs/examples/multiple.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          See source code
        </a>
        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} center>
          <p>First modal</p>
          {littleLorem}
          <button className="btn btn-action" onClick={this.onOpenSecondModal}>
            Open second modal
          </button>
        </Modal>
        <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>
          <p>Second modal</p>
          {littleLorem}
        </Modal>
      </div>
    );
  }
}
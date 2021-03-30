import React, { useState } from 'react';
import './Header.css';
import gymClip from '../../../videos/gym.mp4'
import Navbar from '../../Shared/Navbar/Navbar';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const Header = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='container-fluid header-container'>
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-6 mx-4 mt-5 title-container">
          <h1 className='title'>THE BEST FITNESS STUDIO IN TOWN</h1>
          <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis quam accusantium id consequatur commodi unde dolor doloremque adipisci mollitia, nulla omnis alias laudantium soluta deserunt expedita hic maiores libero ab pariatur saepe aspernatur iure.</p>
          <button className='button-style'>JOIN US</button>
        </div>
        <div className="col-md-4 d-none d-md-block" >
          <p onClick={openModal}>
            <FontAwesomeIcon style={{cursor:"pointer", color: "white", width: "100px", height: "100px", marginTop:"40%",marginLeft:"50%"}} icon={faPlayCircle} />
            </p>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <video width="600" height='400' controls>
              <source src="mov_bbb.mp4" type="video/mp4" />
              <source src={gymClip} type="video/ogg" />
                               
                    </video>

          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
export default function App() {
  const [isShown, setIsShown] = useState(false);
  const [isOfferClaimed, setIsOfferClaimed] = useState(false);

  const handleOpenModal = () => {
    setIsShown(true);
  };
  const handleClaimOffer = () => {
    setIsOfferClaimed(true);
    setIsShown(false);
  }
  const handleCloseModal = () => {
    setIsShown(false);
  };
  return (
    <div>
      <div className="show-offer">
        {!isOfferClaimed && (
          <button onClick={handleOpenModal} className="offer-btn">
          Show Offer
        </button>
        )}
        {isOfferClaimed && (
          <div className="offer-claimed">Offer Claimed!</div>
        )}
      </div>
      {isShown && (
        <div>
          <Modal handleCloseModal={handleCloseModal} handleClaimOffer={handleClaimOffer} />
        </div>
      )}
    </div>
  );
}

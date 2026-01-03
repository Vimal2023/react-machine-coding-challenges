import "./App.css";

export default function Modal({ handleCloseModal, handleClaimOffer }) {
  const handleOutsideClick = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
      handleCloseModal();
    }
  };
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button onClick={handleCloseModal} className="close-btn">
          X
        </button>
        <div className="content">Click here to claim your special offer!</div>
        <button className="accept-btn" onClick={handleClaimOffer}>
          Claim Offer
        </button>
      </div>
    </div>
  );
}

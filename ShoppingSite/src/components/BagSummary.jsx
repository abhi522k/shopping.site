const BagSummary = () => {
  const item = {
    totalItem: 3,
    totalMRP: 1500,
    totalDiscount: 500,
    finalPayment: 100,
  };

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({item.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{item.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{item.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{item.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;

export default function CashDiscountToggle(props) {
  const { cashDiscount, onCashDiscountToggle } = props;
  return (
    <>
        <p>Popust za plaćanje odjednom:</p>
      <div>
        <div className="toggle">
          <label htmlFor="cashDiscountToggleYes">Da</label>
          <input
            type="radio"
            name="cashDiscountToggle"
            id="cashDiscountToggleYes"
            defaultChecked={cashDiscount === 0.07}
            value={0.07}
            onChange={onCashDiscountToggle}
          />
        </div>
        <div className="toggle">
          <label htmlFor="cashDiscountToggleNo">Ne</label>
          <input
            type="radio"
            name="cashDiscountToggle"
            id="cashDiscountToggleNo"
            defaultChecked={cashDiscount === 0}
            value={0}
            onChange={onCashDiscountToggle}
          />
        </div>
      </div>
    </>
  );
}

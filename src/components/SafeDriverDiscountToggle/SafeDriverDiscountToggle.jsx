export default function SafeDriverDiscountToggle(props) {
  const { safeDriverDiscount, onSafeDriverDiscountToggle } = props;
  return (
    <>
        <p>Popust za godine bez štete:</p>
      <div>
        <div className="toggle">
          <label htmlFor="safeDriverDiscountToggleYes">Da</label>
          <input
            type="radio"
            name="safeDriverDiscountToggle"
            id="safeDriverDiscountToggleYes"
            defaultChecked={safeDriverDiscount === 0.1}
            value={0.1}
            onChange={onSafeDriverDiscountToggle}
          />
        </div>
        <div className="toggle">
          <label htmlFor="safeDriverDiscountToggleNo">Ne</label>
          <input
            type="radio"
            name="safeDriverDiscountToggle"
            id="safeDriverDiscountToggleNo"
            defaultChecked={safeDriverDiscount === 0}
            value={0}
            onChange={onSafeDriverDiscountToggle}
          />
        </div>
      </div>
    </>
  );
}

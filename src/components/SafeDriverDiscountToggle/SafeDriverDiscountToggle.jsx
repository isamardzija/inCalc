export default function SafeDriverDiscountToggle(props) {
  const { safeDriverDiscount, onSafeDriverDiscountToggle } = props;
  return (
    <>
      <div>
        <p>Popust za godine bez štete:</p>
        <label htmlFor="safeDriverDiscountToggleYes">Da</label>
        <input
          type="radio"
          name="safeDriverDiscountToggle"
          id="safeDriverDiscountToggleYes"
          defaultChecked={safeDriverDiscount === 0.1}
          value={0.1}
          onChange={onSafeDriverDiscountToggle}
        />
        <label htmlFor="safeDriverDiscountToggleNo">Ne</label>
        <input
          type="radio"
          name="safeDriverDiscountToggle"
          id="safeDriveerDiscountToggleNo"
          defaultChecked={safeDriverDiscount === 0}
          value={0}
          onChange={onSafeDriverDiscountToggle}
        />
      </div>
    </>
  );
}

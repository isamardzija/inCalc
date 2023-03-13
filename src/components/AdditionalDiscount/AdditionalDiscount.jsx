export default function AdditionalDiscount(props) {
  const { onAdditionalDiscountChange } = props;
  return (
    <>
      <label htmlFor="additionalDiscount">Dodatni popust/doplatak:</label>
      <select
        name="additionalDiscount"
        id="additionalDiscount"
        onChange={onAdditionalDiscountChange}
      >
        <option value={0}>Bez dodatnih popusta/doplataka</option>
        <option value={-0.2}>Doplatak za TAXI vozila (20%)</option>
          <option value={-1.25}>Doplatak za Rent-a-car vozila (125%)</option>
        <option value={0.15}>Popust za invalidnost 80% ili više (15%)</option>
        <option value={0.2}>
          Popust za invaliditet nogu preko 80% ili gubitak vida (20%)
        </option>
        <option value={0.2}>Popust HRVI I. do V. skupine (20%)</option>
        <option value={0.15}>Popust za HRVI VI. do X. skupine (15%)</option>
        <option value={0.5}>Popust za starodobno vozilo (50%)</option>
        <option value={0.5}>Popust za namjenu prijevoza pokojnika (50%)</option>
        <option value={0.5}>Popust za vatrogasna vozila (50%)</option>
        <option value={0.25}>
          Popust za med.potrebe, za sanitarne potrebe i rad (25%)
        </option>
        <option value={0.3}>Popust za kampiranje i stanovanje (30%)</option>
      </select>
    </>
  );
}

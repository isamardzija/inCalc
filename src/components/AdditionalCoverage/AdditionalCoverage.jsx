export default function AdditionalCoverage(props) {
    const {onAdditionalCoverageChange} = props
  return (
    <>
    <label htmlFor="additionalCoverage">Paket dodatnih pokrića:</label>
      <select
        name="additionalCoverage"
        id="additionalCoverage"
        onChange={onAdditionalCoverageChange}
      >
        <option value={0}>Nije odabrano</option>
        <option value={129}>CARE</option>
        <option value={189}>CARE + HR</option>
        <option value={269}>CARE + EUROPA</option>
        <option value={319}>SUPER CARE HR</option>
        <option value={399}>SUPER CARE EUROPA</option>
      </select>
    </>
  );
}

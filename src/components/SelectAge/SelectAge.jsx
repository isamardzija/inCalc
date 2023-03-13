export default function SelectAge(props) {
  const { data, onCoefAgeSelect } = props;
  return (
    <>
      {data && (
        <>
          <label htmlFor="coefAge">Unesite starost osiguranika:</label>
          <input
            type="number"
            name="coefAge"
            id="coefAge"
            min={18}
            max={120}
            onChange={onCoefAgeSelect}
          />
        </>
      )}
    </>
  );
}

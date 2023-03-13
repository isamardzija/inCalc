export default function KaskoCoverage1(props) {
  const { data, onKaskoCoverage1Change } = props;
  return (
    <>
    <label htmlFor="kaskoCoverage1">Djelomični kasko 1:</label>
      <select
        name="kaskoCoverage1"
        id="kaskoCoverage1"
        onChange={onKaskoCoverage1Change}
      >
        <option value={0}>Nije odabrano</option>
        {data &&
          data.map((kaskoPackage, index) => (
            <option key={index} value={kaskoPackage.cijena}>
              {kaskoPackage.paket}
            </option>
          ))}
      </select>
    </>
  );
}

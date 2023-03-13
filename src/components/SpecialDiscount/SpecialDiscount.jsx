export default function SpecialDiscount(props) {
  const { onSpecialDiscountSelect } = props;
  return <>
    <label htmlFor="specialDiscount">Posebni popusti:</label>
    <select
      name="specialDiscount"
      id="specialDiscount"
      onChange={onSpecialDiscountSelect}
    >
      <option value={0.0}>Bez posebnih popusta</option>
      <option value={0.05}>Popust HOK-Komora (5%)</option>
      <option value={0.05}>Popust Udruženje obrta grada Karlovca (5%)</option>
      <option value={0.05}>Popust Udruženje obrtnika Ogulina (5%)</option>
      <option value={0.05}>Popust Udruženje obrtnika Slunj (5%)</option>
      <option value={0.2}>Popust za medicinsko osoblje (20%)</option>
      <option value={0.1}>
        Popust za Hrvatsko novinarsko društvo (HND) (10%)
      </option>
      <option value={0.1}>Popust za djelatnike Pliva Hrvatske (10%)</option>
      <option value={0.15}>
        Popust za djelatnike banaka partnera, IKB-a, Imex banke, Podravske
        banke, ZABE (15%)
      </option>
      <option value={0.2}>Popust za djelatnike Grupe PBZ (20%)</option>
      <option value={0.35}>Popust za djelatnike Grupe GENERALI-a (35%)</option>
      <option value={0.2}>Popust za članove SPH (20%)</option>
      <option value={0.05}>Popust za Sindikata hrvatskih učitelja (5%)</option>
      <option value={0.05}>
        Popust za članove nezavisnih sindikata srednjih škola (5%)
      </option>
      <option value={0.3}>Welcome back popust (30%)</option>
    </select>
  </>;
}

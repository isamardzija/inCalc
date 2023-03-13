export default function BudgetDiscount(props) {
    const {onBudgetDiscountChange} = props
    return <>
    <label htmlFor="budgetDiscount">Utjecaj/korekcija:</label>
    <input type="number" name="budgetDiscount" id="budgetDiscount" min={0} max={30} defaultValue={0} onChange={onBudgetDiscountChange} />
    </>
}
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
                <thead className={css.tableHeader}>
                    <tr className={css.tableRow}>
                    <th className={css.tableHeaderCell}>Type</th>
                    <th className={css.tableHeaderCell}>Amount</th>
                    <th className={css.tableHeaderCell}>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.tableBody}>
                
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={css.tableRow}>
                        <td className={css.tableCell}>{type}</td>
                        <td className={css.tableCell}>{amount}</td>
                        <td className={css.tableCell}>{currency}</td>
                    </tr>
                ))}  
       </tbody>
        </table>
        
       
        )

}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TransactionHistory;

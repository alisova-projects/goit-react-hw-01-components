// import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(TransactionHistoryItem)}</tbody>
    </table>
  );
}

export default TransactionHistory;

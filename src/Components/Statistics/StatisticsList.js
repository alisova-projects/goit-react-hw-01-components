import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticsList({ title, stats }) {
  const colors = ['#F44336', '#4CAF50', '#2196F3', '#E91E63', '#607D8B'];
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((item, index) => (
          <li
            className={s.item}
            key={item.id}
            style={{ backgroundColor: colors[index] }}
          >
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;

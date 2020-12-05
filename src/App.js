import Container from './Components/Container/Container';
import user from './Components/Profile/user.json';
import Profile from './Components/Profile/Profile';
import StatisticksList from './Components/Statistics/StatisticsList';
import statisticalData from './Components/Statistics/statistical-data.json';
import friends from './Components/FriendList/friends.json';
import FriendList from './Components/FriendList/FriendList';
import transactions from './Components/TransactionHistory/transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticksList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

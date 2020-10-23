import gql from 'graphql-tag';
import { OrderFragment } from '../../components/order/order.model';
alert('orders-history.model');
export const OrdersHistoryQuery = gql`
	query OrdersHistoryPageQuery($userId: String!) {
		getOrders(userId: $userId) {
			...OrderFragment
		}
	}
	${OrderFragment}
`;

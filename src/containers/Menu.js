import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAction from '../actions/cart';
import Menu from '../components/Menu';

import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({cart}) => {
    return {
        totalPrice: cart.goods.reduce((total, current) => total + current.price, 0),
        quantityBooks: cart.goods.length,
        items: uniqBy(cart.goods, o => o.id),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(cartAction,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAction from '../actions/cart';

import Cart from '../components/Card';

const mapStateToProps = ({cart}, {id}) => {
    return {
        quantityBooks: cart.goods.reduce((total,book) => total + (book.id === id? 1 : 0), 0)
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      ...bindActionCreators(cartAction, dispatch)
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);
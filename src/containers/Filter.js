import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterAction from './../actions/filter';
import Filter from '../components/Filter';

const mapStateToProps = ({filter}) => {
    return {
        filterBy: filter.filterBy,
        searchQuery: filter.searchQuery
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(filterAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter);



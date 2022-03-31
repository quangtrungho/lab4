import PropTypes from "prop-types";
import tabletPropType from "./tablet.proptype";

export default homePropType = {
  data: PropTypes.arrayOf(tabletPropType),
  handleCreate: PropTypes.func,
  handleItemPress: PropTypes.func,
};

import PropTypes from "prop-types";
export default tabletPropType = PropTypes.shape({
  name: PropTypes.string,
  brand: PropTypes.string,
  launch: PropTypes.string,
  display: PropTypes.string,
  ram: PropTypes.string,
  chipset: PropTypes.string,
  camera: PropTypes.string,
  battery: PropTypes.string,
});

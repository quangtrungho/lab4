import PropTypes from "prop-types";
export default tabletPropType = PropTypes.shape({
  name: PropTypes.string,
  brand: PropTypes.string,
  launch: PropTypes.number,
  display: PropTypes.number,
  ram: PropTypes.number,
  chipset: PropTypes.string,
  camera: PropTypes.number,
  battery: PropTypes.number,
});

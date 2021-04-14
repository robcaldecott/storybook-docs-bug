import React from "react";
import PropTypes from "prop-types";

/**
 * A magic button that can be used for magic operations.
 */
const AnotherButton = (props) => {
  return <button {...props}>Magic</button>;
};

AnotherButton.propTypes = {
  /** Some prop. */
  disabled: PropTypes.bool,
};

export { AnotherButton };

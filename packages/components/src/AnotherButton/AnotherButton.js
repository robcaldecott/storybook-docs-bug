import React from "react";
import PropTypes from "prop-types";
// import Button from "@material-ui/core/Button";

/**
 * A red button that can be used for dangerous operations.
 *
 * The component will forward all props to the underlying
 * Material UI `Button`.
 *
 * https://material-ui.com/components/buttons/
 */
const AnotherButton = (props) => {
  // return <Button color="primary" disableElevation {...props} />;
  return <div>Test</div>;
};

AnotherButton.propTypes = {
  /** Some prop. */
  disabled: PropTypes.bool,
};

export { AnotherButton };

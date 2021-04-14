import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    transform: props.expanded ? "rotate(180deg)" : "rotate(0deg)",
    transition: `transform ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut}`,
  }),
}));

/**
 * Icon button used for collapsible panels, adding a
 * simple rotation animation to the icon.
 */
const ExpandButton = ({ label, expanded, arrow = "more", ...props }) => {
  const styles = useStyles({ expanded });
  const Arrow = { more: ExpandMore, less: ExpandLess }[arrow];
  return (
    <IconButton aria-label={label} {...props}>
      <Arrow classes={{ root: styles.root }} />
    </IconButton>
  );
};

ExpandButton.propTypes = {
  /** The button label. */
  label: PropTypes.string.isRequired,
  /** The expanded state (will change the icon orientation.) */
  expanded: PropTypes.bool,
  /** The arrow type. */
  arrow: PropTypes.oneOf(["more", "less"]),
};

export { ExpandButton };

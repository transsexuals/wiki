import PropTypes from 'prop-types';

/**
 * Panel - the panel component.
 * @param {object} props
 * @return {JSX.Element}
 */
const Panel = (props) => {
  /**
   * Renders the React component.
   * @return {JSX.Element} - React markup for component.
   */
  return (
    props.visible ? (
      <main>
        {props.children}
      </main>
    ) : null
  );
};
Panel.defaultProps = {
  children: null,
  visible: false,
};
Panel.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

export default Panel;
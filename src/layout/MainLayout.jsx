import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return <div className="max-w-6xl mx-auto  py-3 px-6">{children}</div>;
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

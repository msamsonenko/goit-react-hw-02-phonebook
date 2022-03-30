import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className="Filter">
      <label className="Filter__label">Find contacts by name</label>
      <input
        type="text"
        className="Filter__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

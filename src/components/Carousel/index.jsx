import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import './style.css';

export default function Cocktail({ instructionString }) {
  const [instructions, setInstruction] = useState([]);
  const [activSlice, setActivSlice] = useState(0);

  const nextSlice = () => {
    setActivSlice(
      activSlice < instructions.length - 1 ? activSlice + 1 : activSlice
    );
  };

  const prevSlice = () => {
    setActivSlice(activSlice !== 0 ? activSlice - 1 : activSlice);
  };

  useEffect(() => {
    setInstruction(instructionString.split('. '));
  }, [instructionString]);

  return (
    <section className="slider">
      <FaArrowCircleLeft
        className={activSlice !== 0 ? 'left-arrow active wiggle' : 'left-arrow'}
        onClick={prevSlice}
      />
      <FaArrowCircleRight
        className={
          activSlice === instructions.length - 1
            ? 'right-arrow'
            : 'right-arrow active wiggle'
        }
        onClick={nextSlice}
      />
      {instructions.map((slide, id) => {
        return (
          <div className={id === activSlice ? 'slide active' : 'slide off '}>
            {id === activSlice && slide}
          </div>
        );
      })}
    </section>
  );
}

Cocktail.propTypes = {
  instructionString: PropTypes.string,
};
Cocktail.defaultProps = {
  instructionString: '',
};

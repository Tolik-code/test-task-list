import React from 'react';
import PropTypes from 'prop-types';
import './DataBlock.css';

export const DataBlock = ({ header, info, dataType }) => {
  let currentInfo = info;

  const getDay = (date) => {
    return date < 10 ? `0${date.getDate()}` : date.getDate();
  };

  if (dataType === 'DateTime') {
    const currentDate = new Date(info);

    currentInfo = [getDay(currentDate),
      currentDate.getMonth() + 1,
      currentDate.getFullYear()].join('/');
  }

  return (
    <div className="container__block">
      <div className="header-block">
        <h2>{header}</h2>
      </div>

      <div className="info-block">
        <p>{currentInfo}</p>
      </div>
      
    </div>
  )
}

DataBlock.propTypes = {
  header: PropTypes.string,
  info: PropTypes.string,
  dataType: PropTypes.string,
}

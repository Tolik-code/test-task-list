import React from 'react';
import { data } from '../api/getData';
import { DataBlock } from './DataBlock';

export const ListData = () => {
  return (
    <>
      {data.columns.map((item, index) => (
        <React.Fragment key={item.name}>
          <DataBlock
            header={item.name}
            info={data.rows[0].values[index]}
            dataType={item.dataType}
          />
        </React.Fragment>
      ))}
    </>
  )
};

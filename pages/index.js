import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { Indicator } from '@mantine/core';

export default function () {
  const [value, setValue] = useState(null);

  return (
    <>
    <Calendar
      value={value}
      onChange={setValue}
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={8} >
            <div>{day}</div>
         </Indicator> 
        );
      }}
    />
    <Indicator color={"blue"} size={500}>This is indicator</Indicator>
    </>
  );
}

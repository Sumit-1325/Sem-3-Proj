import React, { useEffect, useState } from 'react';
import Details from './Details';
import './styles/Details.css';
import api from '../api';

export default function Others_Items_List() {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    api.get('api/found-item/')
      .then((res) => res.data)
      .then((data) => {
        setdata(data);
        const Counted = data.reduce((acc, element) => {
          return acc + (element.name.toLowerCase() === 'other' ? 1 : 0);
        }, 0);

        setcount(Counted);
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <h1 className='heading'>FOUND ITEMS</h1>
      <div className="box">
        {count === 0 ? (
          <h3>NO ITEM TO DISPLAY</h3>
        ) : (
          data.map((element) => {
            const name = element.name.toLowerCase();
            if (name === 'other') {
              return (
                <div key={element.id}>
                  <Details description={element.description} src={element.img} name={element.name} address={element.address} phone={element.phone_no} />
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </>
  );
}


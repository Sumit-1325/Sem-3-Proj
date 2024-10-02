
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import './styles/Postitem.css'
import'./styles/upload.css'

export default function PostItems() {

  

  const [selectedDate, setSelectedDate] = useState(null);

  const maxDate = new Date();

  const handleDate = (date) => {
    setSelectedDate(date);
  };


  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };


  return (
    <>
      <style>
        {`
        
         .Align {
            display:inline;
          }

          .height {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed black; 
    height: 200px;
    width: 450px;
    cursor: pointer;
    border-radius: 5px;

}
      
      `}

      </style>
      <div className='outer'>
        <div className='inner'>
          <form>
            <h1 style={{ textAlign: 'center', color: "black" }}>Report Lost Item Here ...</h1>
            <label className="Align" htmlFor="lost-itm"><h4>Type of item lost:</h4></label>
            <select name="items" id="lost">
              <option value="Select Item Type">Select Item Type</option>
              <option value="Ring">Ring</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Watch">Watch</option>
              <option value="Phone">Phone</option>
              <option value="Bottle">Bottle</option>
              <option value="Books">Books</option>
              <option value="Charger">Charger</option>
              <option value="Earring">Earring</option>
              <option value="Earphones">Earphones</option>
              <option value="Other items">Other items (Describe Below)</option>
            </select>
            <label className="Align" htmlFor="description"><h4>Describe item lost here:</h4></label>
            <textarea id="description" placeholder="(when not selected from the list above)"></textarea>
            <label className="Align" htmlFor="phone"><h4>Enter your phone number:</h4></label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Mobile No."
              value={phone}
              onChange={handleChange}
              maxLength="10"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              required
            />
            <label className='Align' htmlFor="Lostplace"><h4>Where Do Think  You Lost:</h4></label>
            <input type="text" id="Lostplace" name="Lostplace" placeholder="Enter  Wherever You Lost." />
            
            <label className='Align' htmlFor="Lostdate"><h4>Date When Your Item Lost:</h4></label>

            <DatePicker
              selected={selectedDate}
              onChange={handleDate}
              dateFormat="dd/MM/yyyy"
              placeholder="Select Date"
              placeholderText="Select a date"
              className="custom-datepicker"
              maxDate={maxDate}
            />
            <div>
              
          
                    <button className="btn btn-primary btn-lg my-4" type="submit">Submit</button>
                    <button className="btn btn-primary btn-lg mx-5" type="reset "> Reset </button>
                  </div>

                </form>
            </div>
        </div>
      </>
      )
}








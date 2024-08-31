import React from 'react';
import './Lostitem.css';
export default function Lostitem() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Report Lost Item Here ...</h1>
      </div>
      <div>
        <form>
      <div className='container my-5' >
        <div className='line'>
          <label htmlFor="lost-itm"><h3>Type of item lost:</h3></label>
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
        </div>
        <div className='line'>
          <label htmlFor="description"><h3>Describe item lost here:</h3></label>
          <textarea id="description" placeholder="(when not selected from the list above)"></textarea>
        </div>
        <div className='line'>
          <label htmlFor="phone"><h3>Enter your phone number:</h3></label>
          <input 
    type="tel" 
    id="phone" 
    name="phone" 
    placeholder="Enter Mobile No." 
    maxLength={10} 
    pattern="[0-9]{10}" 
    title="Please enter a 10-digit phone number"
    required 
  />
        </div>
        <div className='line'>
        <label htmlFor="Lostplace"><h3>Where Do Think  You Lost:</h3></label>
        <input type="text" id="Lostplace" name="Lostplace" placeholder="Enter Class No or Wherever You Lost."  />
        </div>
        <div className='line'>
        <label htmlFor="Lostdate"><h3>Date When Your Item Lost:</h3></label>
        <input type="date" id="Lostdate" name="Lostdate" />
        </div>
      </div>
      <div class=" MRTS col-12">
    <button class="btn btn-primary btn-lg" type="submit">Submit</button>
    <button class="btn btn-primary btn-lg mx-3" type="reset"> Reset </button>
    </div>
    </form>
  </div>
    </>
  );
}

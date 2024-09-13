
import { useState } from 'react'
import './styles/upload.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from "react-icons/ai";
export default function Uploadpage() {

  const [image, setImage] = useState(null)
  const [filename, setFileName] = useState("No selected file")

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

            <h1 style={{ textAlign: 'center', color: "black" }}>Report Found Item Here ...</h1>
            <label className='Align' htmlFor="Founditem "><h4>Describe Item found:</h4></label>
            <input type="Founditem  " id="Founditem" name="Founditem" placeholder="(Object Name)." />

            <div>
              <label className="Align " htmlFor="description"><h4>Describe Where Items Found:</h4></label>
              <textarea id="" placeholder="where Do you find Object"></textarea>
            </div>

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


            {/* <div className=" upload-form"> */}
            <div>
              <label className='Align' htmlFor="upload"><h4>Please upload the picture of lost object:</h4></label>

              <div className='height'
                onClick={() => document.querySelector(".input-field").click()}
              >
                <input type="file" accept="image/*" className='input-field' onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name)
                  if (files) {
                    setImage(URL.createObjectURL(files[0]))
                  }
                }} />

                {image ? <img src={image} width={150} height={150} alt={filename} />
                  :
                  <>
                    <MdCloudUpload color='black' size={60} />
                    <p>Browse Files To Upload</p>
                  </>}
              </div>

              <section className='uploaded-row'>
                <AiFillFileImage color='black' />
                <span className='upload-content'>
                  {filename}
                  <MdDelete
                    onClick={() => {
                      setFileName("No selected File")
                      setImage(null)

                    }} />
                </span>
              </section>

              <button class="btn btn-primary btn-lg my-4" type="submit">Submit</button>
              <button class="btn btn-primary btn-lg mx-5" type="reset "> Reset </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

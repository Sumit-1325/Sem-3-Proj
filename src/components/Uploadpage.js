
import { useState } from 'react'
import './styles/upload.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from "react-icons/ai";
import api from '../api';
import { useNavigate } from 'react-router-dom';
export default function Uploadpage() {

  const [image, setImage] = useState(null)
  const [img, setimg] = useState(null)
  const [filename, setFileName] = useState("No selected file")
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setaddress] = useState('');
  const [keyword, setkeyword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phone_no', phone);
    formData.append('keywords', keyword);
    formData.append('description', description);
    formData.append('img', img);
    try {
      
      const response =  await  api.post('api/found-item/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });      
      if (response.status===201) {
        navigate('/Home');
      } else {
        alert('post failed');
      }
    } catch (error) {
      console.error('Error:', error);
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
          <form onSubmit={handleSubmit}>

            <h1 style={{ textAlign: 'center', color: "black" }}>Report Found Item Here ...</h1>
            <div>
            <label className="Align" htmlFor="lost-itm"><h4>Type of object Found:</h4></label>
            <select name="Keywords" id="Keywords"  value={keyword} onChange={(e) => setkeyword(e.target.value)}>
              <option value="Select Item Type">Select Item Type</option>
              <option value="Identity-Cards">Documents</option>
              <option value="Wallets">Wallets</option>
              <option value="Devices">Digital-Devices</option>
              <option value="Books">Book</option>
              <option value="Toys">Toys</option>
              <option value="Other items">Others-Items (Describe Below)</option>
            </select>
            <label className='Align' htmlFor="Founditem "><h4> Object found:</h4></label>
            <input type="text" id="Founditem" name="Founditem" placeholder=" (For Other Objects)." value={name} onChange={(e) => setName(e.target.value)} />
            <label className='Align' htmlFor="Founditem "><h4>Describe Object found:</h4></label>
            <input type="text" id="Founditem" name="Founditem" placeholder=" Describe Object Name  ( For eg. CompanyName, colors , any marking etc.)"  value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
           
            <div>
              <label className="Align " htmlFor="description"><h4>Describe Where Items Found:</h4></label>
              <textarea id="" placeholder="where Do you find Object"  value={address} onChange={(e) => setaddress(e.target.value)}></textarea>
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
              <label className='Align' htmlFor="upload"><h4>Please upload the picture of Found object:</h4></label>

              <div className='height'
                onClick={() => document.querySelector(".input-field").click()}
              >
                <input type="file" accept="image/*" className='input-field' onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name)
                  if (files) {
                    setImage(URL.createObjectURL(files[0]))
                    setimg(files[0])
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

              <button className="btn btn-primary btn-lg my-4" type="submit" value='submit'>Submit</button>
              <button className="btn btn-primary btn-lg mx-5" type="reset "> Reset </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

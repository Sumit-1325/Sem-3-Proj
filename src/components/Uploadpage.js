
import { useState } from 'react'
import'./upload.css'
import {MdCloudUpload,MdDelete} from 'react-icons/md'
import { AiFillFileImage } from "react-icons/ai";
export default function Uploadpage() {

  const [image, setImage] = useState(null)
  const [filename, setFileName] = useState("No selected file")

  return (
    <div >
   <form>
    <div className='ll my-5'>
          <div className='li'>
        <label htmlFor="founditem"><h3>Describe Item Found :</h3></label>
        <input type="text" id="Lostplace" name="Lostplace" placeholder="(Object Name)"  />
        </div>
   <div className='li'>
   <label htmlFor="description"><h3>Describe where Object Found :</h3></label>
          <textarea id="description" placeholder="Where did you Find It"></textarea>
          </div>
          <div className='li'>
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
   </div>
   
    <div className=" upload-form">
        <div>
    <label htmlFor="upload"><h3>Upload pic of Object Found :</h3></label>
    </div>
      <div  className='height'
      onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" accept="image/*" className='input-field' onChange={({ target: {files}}) => {
            files[0] && setFileName(files[0].name)
            if(files){
                setImage(URL.createObjectURL(files[0]))
            }
        } } />

        {image?<img  src={image} width={150} height={150} alt={filename}/>
        :
        <>
        <MdCloudUpload color='black' size={60}/>
        <p>Browse Files To Upload</p>
        </>}
      </div>
      
      <section className='uploaded-row'>
        <AiFillFileImage color='black' />
        <span className='upload-content'>
            {filename}
            <MdDelete 
            onClick={() =>{
                setFileName("No selected File")
                setImage(null)
                
            }} />
        </span>
    
      </section>
    </div>
    </form>
            </div>
    
    
  )
}

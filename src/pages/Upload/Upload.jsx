import React,{useState,useContext} from 'react'
import FormInput from '../../components/formInput/FormInput'
import { auth } from 'firebase'
import CustomButton from '../../components/custom-button/CustomButton'

const Upload = () => {
    const [uploadDetails, setUploadDetails] = useState({
        name:"",item:"",file:""
    })
        const handleChange = (e) =>{
            const {name, value} = e.target;
            setUploadDetails({...uploadDetails,[name]:value})
        }

    const handleSubmit = async (e) =>{
            e.preventDefault()
        const  {name,item,file} = uploadDetails

            try {
                


            } catch (error) {
                console.log(error);
            }
        }

        const {name, item, file} = uploadDetails
  return (
    <div className='upload-container'>
      <h2 className='upload-title'>Have a new product ? Upload and share it with us</h2>
      <span className='upload-subtitle'>Upload new products</span>
            Upload page
       <form className='product-form' onSubmit={handleSubmit}>
       <FormInput
        type='text'
        label='Product name'
        name='Product name'
        value={name}
        onChange={handleChange}
        required
        />

        <FormInput
        type='text'
        label='Product item'
        name='Product item'
        value={item}
        onChange={handleChange}
        required
        />

        <FormInput
        type='file'
        name='product'
        onChange={handleChange}
        value={file}
        label='Product file'
        required
        /> 
        <CustomButton type='submit'>Upload Product</CustomButton>
       </form>

    
    </div>
  )
}

export default Upload

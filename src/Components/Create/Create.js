import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
//(2)
import {FirebaseContext,AuthContext} from '../../storage/Context'

const Create = () => {

  //giving state to them(1)
  const[name,setName] = useState('');
  const[category,setCategory] = useState('');
  const[price,setPrice] = useState('');
  const[image,setImage] = useState(null);
  //to store the image to firebase(2)
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const handleSubmit =()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
      })
    })

  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              //(1)
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              //(1)
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
            id="fname" 
            name="Price" />
            <br />
          </form>
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(e)=>{

              setImage(e.target.files[0])

            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;

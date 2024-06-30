import React, { useEffect, useState, useContext } from 'react';
import './View.css';
import { PostContext } from '../../storage/PostContext';
import { FirebaseContext } from '../../storage/Context';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (postDetails && postDetails.userId) {
      const { userId } = postDetails;

      firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      }).catch((error) => {
        console.error("Error fetching user details: ", error);
      });
    }
  }, [postDetails, firebase]);

  if (!postDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="Post"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;

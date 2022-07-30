import React, {useState} from 'react';

export default function Post(){
    const[review, setReview] = useState("what a sharp shooter!")
    const [submittedReview, setSubmittedReview] = useState([]);

    function handleReview(event){
          setReview(event.target.value)
    }

    function handleSubmit(event){
         event.preventDefault()
         const ReviewData = { review: review };
         const postArray = [...submittedReview, ReviewData];
         setSubmittedReview(postArray);
         setReview("");

    }

    const listOfSubmissions = submittedReview.map((data, index) => {
        return (
          <div key={index}>
            {data.review}
          </div>
        );
      });

    return(
        <div>
            <center>
            <h3>Write your Lyrics here</h3>
        <form onSubmit={handleSubmit}>
        <input type="text"   onChange={handleReview} placeholder="memories"/>
        <button type="submit">Post</button>
      </form>
      <h3>Song lyrics</h3>
      <ul>
      <li>
      {listOfSubmissions}
      </li>
      </ul>
            </center>
        </div>
    )
}
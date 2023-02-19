import "./post.css"
import {Link} from "react-router-dom"


export default function Post() {
  
  return (
    <>
  
    <div className="post">
      <div className="card mb-3">
       
             <img 
             className="postImg"
             src="https://cdn.pixabay.com/photo/2017/07/23/22/36/starry-sky-2533021_960_720.jpg"
             alt="" />

       
    <div className="postInfo">
        <div className="postCats">
           
           
        </div>
        <Link to="/post/" className="link">
        <span className="postTitle">a</span>
        </Link>
        
        <hr />
        <span className="postDate">
           14.02.2023
        </span>
   
    </div>

    <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima est voluptatum rem non officiis exercitationem aspernatur perspiciatis consequatur ad eveniet?
    </p>
    </div>
    </div>
    </>
  )
}

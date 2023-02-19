
import { Link } from "react-router-dom"
import Header from "../header/Header"
import "./singlePost.css"

export default function SinglePost() {
   

    return (

        <>
        <Header/>
        <div className="singlePost">

            <div className="singlePostWrapper">
              
                    <img src=""
                        alt=""
                        className="singlePostImg" />
       

                <input type="text" value="" className="singlePostTitleInput" /> :
                    
                        <h1 className="singlePostTitle">
                            
                           
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                                    <i className="singlePostIcon fa-solid fa-trash" ></i>
                                </div>
                          
                        </h1>



                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                        <Link to="" className="link">
                            <b>sema</b>
                        </Link>
                    </span>
                    <span className="singlePostDate"></span>
                    
                </div>
             <textarea className="singlePostDescInput" value=""  />
                    <p className="singlePostDesc"> </p>
              
                    <button className="singlePostButton" >
                        Update</button>
            


            </div>

        </div>
        </>
    )
}

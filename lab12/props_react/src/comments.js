import React from "react";
import "./index"
import "./index.css"


const User = function(props){
    return(
        <>
            <section className="card">
                <img src={props.image}/>
                <div className="content">
                    <a classname="linkauthor">{props.username}</a>
                </div>
                <div className="metadata">
                    <span className="postdate">testing</span>
                </div>
                <div className="comment">
                    <p>{props.usercomment}</p>
                    ...
                </div>
                    
            </section>
        </>
    )
}

export default User;
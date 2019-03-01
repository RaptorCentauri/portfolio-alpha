import React from 'react';
require('./blog.scss');

const Blog = (props) => {
    return (
        <div>
            Blog Goes Here
            <button onClick={props.apiTest}>TEMPTESTER</button>
        </div>
    )
}

export default Blog;
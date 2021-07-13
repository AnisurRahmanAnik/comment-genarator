import react from 'react';
import faker from 'faker';

const CommentDetail = (props) =>{
	return(
		<div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt=""/>
        </a>
        <div className="content">
        	<a href="/" className="autohor">
        		{faker.name.firstName()}
        	</a>
        	<div className="metadata">
        		<span className="date">today at 5am</span>
        	</div>
        	<div className="text">{props.text}</div>
        </div>
      </div>
      );
}
export default CommentDetail;
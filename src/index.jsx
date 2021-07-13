import react from 'react';
import reactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
const App = () => {
	let arr = [];
	for (var i = 0; i < 5; i++) {
		arr.push(i);
	}
console.log(faker.date)
  return(

    <div className="container ui comments">
      <ApprovalCard>
        <div>
          <h2>!warning Are you sure?</h2>
        </div>
      </ApprovalCard>

      {
      	arr.map(val=> <ApprovalCard><CommentDetail text={faker.lorem.words()}/></ApprovalCard>)
      	}
    </div>
  );
}
reactDom.render( < App / >,document.getElementById('root') )
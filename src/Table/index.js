import Button from "../Button"
import "./index.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';

const Table = ({ list, onDismiss }) =>
   <div className="wrapper">
      <div className="table">
         {list.map(item =>
            <div key={item.objectID} className="table__row">
               <span className="table__row__link">
                  <a href={item.url}>{item.title}</a>
               </span>
               <span className="table__row__author">
                  <span><AccountCircleIcon/>{item.author}</span>
               </span>
               <span className="table__row__comment">
                  <p><CommentOutlinedIcon/><span>{item.num_comments}</span> comments</p>
               </span>
               <span className="table__row__points">
                  <p><ControlPointOutlinedIcon/><span>{item.points}</span> points</p>
               </span>
               <span className="table__row__buttons">
                  <a href={item.url}> Read news</a>
                  <Button
                     onClick={() => onDismiss(item.objectID)}
                     >
                     Dismiss
                  </Button>
               </span>
            </div>
         )}
      </div>
   </div>

export default Table;

import React from "react";

//material UI components
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

//material UI Icons
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

//custom components
import BoardItem from "./BoardItem";

//testing file
import Sample from "../sample_questions.json";

function Board(){
    const handleDelete = () => {
        
    }

    return (
        <div className="board">
            <div className="boardHeader">
                <h3>All Quizes</h3>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={handleDelete}><DeleteIcon /></Button>
                    <Button href="/create-quiz"><AddIcon /></Button>
                </ButtonGroup>
                
            </div>

            <div className="boardBody">
                {Sample.map(question => 
                    <BoardItem key={question.id} name={question.name}/>
                )}
            </div>
        </div>
    )
}

export default Board;
import React from "react";

import BoardItem from "./BoardItem";
import Sample from "../sample_questions.json";

function Board(){
    return (
        <div className="board">
            <div className="boardHeader">
                <h3>All Quizes</h3>
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
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments ">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 11:00AM"
          avatar={faker.image.avatar()}
          content="Nice blog!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 8:28AM"
          avatar={faker.image.avatar()}
          content="I dig it!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jess"
          timeAgo="Yesterday at 8:45PM"
          avatar={faker.image.avatar()}
          content="Great post!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

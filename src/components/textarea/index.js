import React from "react";
import propTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import "./styles.css";

function TextArea({ head, setArea, parent, newComment }) {
  const cn = bem("Textarea");

  return (
    <div className={cn()}>
      <p>
        <b>{head}</b>
      </p>

      <textarea className={cn("comment")}></textarea>

      <input type="submit" onClick={newComment} />
      {setArea && <input type="button" value="Отмена" onClick={setArea} />}
    </div>
  );
}

export default React.memo(TextArea);
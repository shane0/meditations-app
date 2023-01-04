/* eslint-disable react/prop-types */
import React from "react";

function Tag(props) {
  return (
    <>
      <li>{props.tag}</li>
    </>
  );
}

const tagList = ["dzogchen", "vajrayana", "zen", "therevada", "nangjang"];

function TagList() {
  return (
    <>
      <ul className="no-bullets">
        {tagList.map((type) => (
          // eslint-disable-next-line react/jsx-key
          <Tag tag={type} />
        ))}
      </ul>
    </>
  );
}

export default TagList;

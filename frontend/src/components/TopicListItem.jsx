import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { id, slug, title, handleSelectedTopic } = props;
  // console.log("toplist item props", props);
  return (
    <div className="topic-list__item" onClick ={()=> handleSelectedTopic(id)} >
      <span>{title}</span>
    </div>    
  )

}

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem
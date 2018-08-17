import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  if(!props.allPlayers){
    return null;
  }

  const allListItems = props.allPlayers.map((player, index) => {
    return <ListItem player={player} index={index}/>
  })

  return(
    <React.Fragment>
      <p>List</p>
      {allListItems}
    </React.Fragment>
  )
}

export default List;

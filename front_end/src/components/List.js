import React from 'react';
import ListItem from './ListItem';
import './List.css';

const List = (props) => {
  if(!props.listedFighters){
    return null;
  }

  const allListItems = props.listedFighters.map((fighter, index) => {
    return <ListItem fighter={fighter} index={index} key={index}
      currentTeam={props.currentTeam}
      handleFighterSelect={props.handleFighterSelect}
      handleAddToTeamButton={props.handleAddToTeamButton}
      handleClicked={props.handleClicked}
    />
    })

    return(
      <React.Fragment>
        <table className="fighterTable">
          <tbody>
            <tr className="fighterTable-header">
              {/* First th is blank as this is the thumbnail image column */}
              <th></th>
              <th></th>
              <th>Weight class</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
            </tr>
            {allListItems}
          </tbody>
        </table>
      </React.Fragment>
    )
  }

  export default List;

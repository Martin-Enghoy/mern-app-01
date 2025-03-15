import React from 'react';

import Card from "../../../../components/Card/Card";
import {PlaceItem} from "../PlaceItem/PlaceItem";
import {Button} from "../../../../components/Form/Button/Button";
import './PlaceList.css';

export const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Please create one.</h2>
          <Button to="/places/new">Share place</Button>
        </Card>
      </div>
    )
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  )
}

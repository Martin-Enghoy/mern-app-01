import React from 'react';
import { useParams } from 'react-router-dom';
import {Input} from "../../../components/Form/Input/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../../util/validators";
import {Button} from "../../../components/Form/Button/Button";

const placesData = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];


export const UpdatePlace = props => {
  const urlParams = useParams();
  const { placeId } = urlParams;

  const matchingPlace = placesData.find(place => place.id === placeId);

  if (!matchingPlace) {
    return (
      <div className="center">
        <h2>No such place was found.</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a title."
        onInput={}
        value={matchingPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={}
        value={matchingPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  )
};

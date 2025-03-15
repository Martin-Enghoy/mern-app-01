import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Input} from "../../../components/Form/Input/Input";
import {Button} from "../../../components/Form/Button/Button";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../../util/validators";
import { useForm } from "../../../hooks/form-hook";
import Card from "../../../components/Card/Card";
import './PlaceForm.css';

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
    title: 'Empire State Building 2',
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

  const [isLoading, setIsLoading] = useState(true);

  const [formState, handleInput, setFormData] = useForm({
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const matchingPlace = placesData.find(place => place.id === placeId);

  useEffect(() => {
    if (matchingPlace) {
      setFormData({
        inputs: {
          title: {
            value: matchingPlace.title,
            isValid: true,
          },
          description: {
            value: matchingPlace.description,
            isValid: true,
          },
          address: {
            value: matchingPlace.address,
            isValid: true,
          },
        },
        isValid: true,
      });
    }
    setIsLoading(false);
  }, [setFormData, matchingPlace]);

  const handleUpdatePlace = event => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  if (!matchingPlace) {
    return (
      <div className="center">
        <Card>
          <h2>No such place was found.</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={handleUpdatePlace}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a title."
        onInput={handleInput}
        value={formState.inputs.title.value}
        isValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 characters."
        onInput={handleInput}
        value={formState.inputs.description.value}
        isValid={formState.inputs.description.isValid}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter an address."
        onChange={() => {}}
        onInput={handleInput}
        value={formState.inputs.address.value}
        isValid={formState.inputs.address.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  )
};

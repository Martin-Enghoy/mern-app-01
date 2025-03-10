import React, { useState } from 'react';

import Card from "../../../components/Card/Card";
import {Button} from "../../../components/Form/Button/Button";
import {Modal} from "../../../components/Modal/Modal";
import {MapRender} from "../../../components/Map/Map";
import './PlaceItem.css';

export const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={handleShowMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={handleShowMap}>Close</Button>}
      >
        <div className="map-container">
          <MapRender center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button onClick={handleShowMap}>View on Map</Button>
            <Button inverse to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  )
}

import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleResetClick = () => {
    setClickCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="tab2-container">
          <p className="tab2-click-count">Click Count: {clickCount}</p>
          <button className="tab2-button" onClick={handleButtonClick}>Click me</button>
          <button className="tab2-reset-button" onClick={handleResetClick}>Reset</button>
        </div>
      </IonContent> 
    </IonPage>
  );
};

export default Tab2;
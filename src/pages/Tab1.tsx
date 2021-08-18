import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonAvatar,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { mailOutline, briefcaseOutline } from "ionicons/icons";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./Tab1.css";
import { Link } from "react-router-dom";

const Tab1: React.FC = () => {
  const [userProfile, setUserProfile] = useState<any>({});
  const [isExists, setisExists] = useState(false);

  const setUserProfileToState = async () => {
    const data = await Axios.get(
      "https://api.jsonbin.io/b/610d090de1b0604017a7a605"
    );
    const userResponse = data.data;
    setUserProfile(userResponse);
    setisExists(true);
  };

  useEffect(() => {
    setUserProfileToState();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Phonebook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {userProfile.length > 0 && (
          <>
            {userProfile.map((data: any) => (
              <IonList key={userProfile.id}>
                <Link
                  to={`/detail/${data.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <IonItem>
                    <IonAvatar>
                      <img src={data.avatar} alt="" />
                    </IonAvatar>
                    <IonLabel className="ion-padding">
                      <h3>
                        {data.first_name} {data.last_name}{" "}
                      </h3>
                      <h3 className="ion-padding-top">
                        <IonIcon icon={mailOutline}></IonIcon>
                        <span className="ion-padding-start">{data.email}</span>
                      </h3>
                      <h3 className="ion-padding-top">
                        <IonIcon icon={briefcaseOutline}></IonIcon>
                        <span className="ion-padding-start">
                          {data.company}
                        </span>
                      </h3>
                    </IonLabel>
                  </IonItem>
                </Link>
              </IonList>
            ))}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

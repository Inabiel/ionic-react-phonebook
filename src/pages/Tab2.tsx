import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonIcon,
} from "@ionic/react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { mailOutline, briefcaseOutline } from "ionicons/icons";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [userProfile, setUserProfile] = useState<any>({});
  const { id }: any = useParams();

  const setUserProfileToState = async () => {
    const data = await Axios.get(
      "https://api.jsonbin.io/b/610d090de1b0604017a7a605"
    );
    const userResponse = data.data.filter((item: any) => item.id == id);
    setUserProfile(userResponse);
  };

  useEffect(() => {
    setUserProfileToState();
    console.log(id);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Person</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Detail Pegawai</IonTitle>
          </IonToolbar>
        </IonHeader>
        {userProfile.length > 0 && (
          <>
            <IonImg
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto",
                marginTop: "40px",
              }}
              src={userProfile[0].avatar}
            />
            <h1 style={{ textAlign: "center" }}>
              {userProfile[0].first_name} {userProfile[0].last_name}
            </h1>
            <h4 className="ion-text-center">
              <IonIcon icon={mailOutline} style={{ marginRight: 10 }}></IonIcon>
              {userProfile[0].email}
            </h4>
            <h4 className="ion-text-center">
              <IonIcon
                icon={briefcaseOutline}
                style={{ marginRight: 10 }}
              ></IonIcon>
              {userProfile[0].company}
            </h4>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

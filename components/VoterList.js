import { useDocument } from "react-firebase-hooks/firestore";
import firebase from "../firebase/clientApp.ts";
import Image from "next/image";

export default function VoterList({ id, vote }) {
  const [value, loading, error] = useDocument(
    firebase.firestore().doc(`users/${id}`)
  );

  if (loading) {
    return <h6>Loading...</h6>;
  }

  if (error) {
    return null;
  }

  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        alt="profile photo"
        width="30px"
        height="30px"
        style={{
          borderRadius: "50%",
          maxHeight: "48px",
          marginTop: "8px",
          marginRight: "8px",
        }}
        src={value.data() ? value.data().photoURL : ""}
      />
      <div>
        <h4 style={{ marginBottom: 0 }}>
          {value.data() ? value.data().displayName : ""}
        </h4>
        <h4 style={{ marginTop: 0 }}>
          Voted: {vote === "yes" ? "✔️🍍" : "❌🍍"}
        </h4>
      </div>
    </div>
  );
}

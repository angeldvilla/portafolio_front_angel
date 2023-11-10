import {
  ButtonEmail,
  ButtonGitHub,
  ButtonInstagram,
  ButtonLinkedIn,
} from "../Buttons/buttons";

const SocialButtons = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "18px",
        backgroundColor: "#333",
        borderRadius: "8px",
      }}
    >
      <ButtonEmail />
      <ButtonGitHub />
      <ButtonLinkedIn />
      <ButtonInstagram />
    </div>
  );
};

export default SocialButtons;

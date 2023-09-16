import { Box, Button, Typography } from "@mui/material";
import { CharacterData } from "../interfaces/CharacterData";

interface ProfileProps {
  characterData: CharacterData;
  onBackClick: () => void;
}

function Profile({ characterData, onBackClick }: ProfileProps) {
  const profileStyle = {
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const imageStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "25%",
    marginTop: "10px",
  };

  return (
    <Box sx={profileStyle}>
      <Typography variant="h4" sx={{ marginTop: "10px" }}>
        {characterData.name}
      </Typography>
      <img
        src={characterData.image}
        alt={characterData.name}
        style={imageStyle}
      />
      <Typography sx={{ marginTop: "10px" }}>
        Species: {characterData.species}
      </Typography>
      <Typography sx={{ marginTop: "10px" }}>
        Status: {characterData.status}
      </Typography>
      <Button
        variant="outlined"
        onClick={onBackClick}
        sx={{ marginTop: "10px" }}
      >
        Back to Table
      </Button>
    </Box>
  );
}

export default Profile;

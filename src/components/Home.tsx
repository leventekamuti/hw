import { Container, TextField } from "@mui/material";
import { useState } from "react";
import Table_ from "./Table";
import AppBar_ from "./AppBar";
import Box from "@mui/material/Box";
import { CharacterData } from "../interfaces/CharacterData";
import Profile from "./Profile";

function Home() {
  const [activeCharacter, setActiveCharacter] = useState<CharacterData | null>(
    null
  );

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCharacterClick = (characterData: CharacterData) => {
    setActiveCharacter(characterData);
  };

  const handleBackToTable = () => {
    setActiveCharacter(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar_ />
      <Box component="main">
        <Container
          maxWidth="lg"
          sx={{ mt: 4, mb: 4 }}
          style={{
            marginTop: "96px",
          }}
        >
          {activeCharacter ? (
            <Profile
              characterData={activeCharacter}
              onBackClick={handleBackToTable}
            />
          ) : (
            <div>
              <TextField
                label="Search by name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Table_
                onCharacterClick={handleCharacterClick}
                searchQuery={searchQuery}
              />
            </div>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default Home;

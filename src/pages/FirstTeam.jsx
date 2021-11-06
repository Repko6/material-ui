import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";

export default function FirstTeam() {
  let players = [
    {
      id: 1,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 2,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 3,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 4,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 5,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 6,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 7,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 8,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
    {
      id: 9,
      name: "Jure Perak",
      shirtNumber: 6,
      position: { name: "Vezni" },
      image: null,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {players.map((player) => {
          return (
            <Grid key={player.id} item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="column" spacing={2}>
                      <div>{player.shirtNumber}</div>
                      <div>
                        {player.name}
                        <div>
                          <small>{player.position.name}</small>
                        </div>
                      </div>
                    </Stack>
                    <Avatar
                      src={player.image}
                      variant="rounded"
                      sx={{ width: 90, height: 150 }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

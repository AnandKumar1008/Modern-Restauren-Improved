import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const src = "https://spoonacular.com/recipeImages/";

export default function MediaCard({ item }) {
  console.log(item);
  return (
    <Card
      sx={{
        Width: "100%",
        minHeight: "30rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ flex: "8", maxWidth: "100%" }}
        image={item?.urls?.full}
        title={item?.alt_description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.alt_description}
          {item?.tags[0]?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
//   Button,
  CardActionArea,
  CardActions,
  Select,
  MenuItem,
} from "@mui/material";

export default function ActionCard({
  imgSrc,
  taskId,
  title,
  description,
  status,
  onStatusChange,
  style,
}) {
  return (
    <Card sx={{ maxWidth: 345, ...style }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgSrc} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Select
            label="Status"
            value={status}
            onChange={(newStatus) => onStatusChange(taskId, newStatus)}
            name="status"
            fullWidth
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="executing">Executing</MenuItem>
            <MenuItem value="finished">Finished</MenuItem>
          </Select>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Save
        </Button> */}
      </CardActions>
    </Card>
  );
}

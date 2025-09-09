import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
export default function Todo({ data, deleteTodo, handleToggle }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() => data.isCompleted && deleteTodo(data.id)}
        >
          <ClearIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={handleToggle} dense>
        <ListItemIcon>
          <Checkbox edge="start" checked={data.isCompleted} disableRipple />
        </ListItemIcon>
        <ListItemText primary={`${data.text}`} />
      </ListItemButton>
    </ListItem>
  );
}

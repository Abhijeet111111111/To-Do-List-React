import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

export default function AddTodo({ addTodo }) {
  const [input, setInput] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(input);
    setInput("");
  };
  const handleChange = (evt) => {
    setInput(evt.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputLabel htmlFor="name">make todo</InputLabel>
      <FormControl sx={{ m: 1, width: "20rem" }} variant="outlined">
        <FilledInput
          id="name"
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit">
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          }
          value={input}
          onChange={handleChange}
          required
          name="text"
          autoFocus
        />
      </FormControl>
    </form>
  );
}

import React, { memo } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export const TodoForm = memo(({ todoTitle, addTodoItem, handleTitleChange, handleClearTitle }) => {
  return (
    <form onSubmit={addTodoItem}>
      <Grid container spacing={2}>
        <Grid item xs>
          <OutlinedInput
            placeholder="Write todo title"
            fullWidth
            size="small"
            type="text"
            onChange={handleTitleChange}
            value={todoTitle}
            variant="outlined"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClearTitle} edge="end">
                  {todoTitle && <ClearIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
});

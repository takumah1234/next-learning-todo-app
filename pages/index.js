import { useState } from 'react';
import {
  TextField,
  Button,
  List,
  IconButton,
  ListItemText,
  ListItem,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
  // 変数の宣言
  const [todoContext, setTodoContext] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <Box sx={{ margin: 'auto', width: '50%' }}>
      <Grid mt={2} container spacing={1} alignItems="center" direction="row">
        <Grid item xs>
          <TextField
            fullWidth
            label="やるべきこと"
            size="small"
            value={todoContext}
            onChange={(e) => {
              setTodoContext(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              const item = {
                context: todoContext,
                id: todoList.length,
              };
              setTodoList([...todoList, item]);
              setTodoContext('');
            }}
          >
            登録
          </Button>
        </Grid>
      </Grid>
      <List>
        {todoList.map((todoItem) => {
          return (
            <Box key={todoItem.id}>
              <ListItem
                secondaryAction={<IconButton
                  edge="end"
                  onClick={() => {
                    setTodoList(
                      todoList.filter((item) => item.id !== todoItem.id)
                    );
                  } }
                >
                  <DeleteIcon />
                </IconButton>}
              >
                <ListItemText primary={todoItem.context} />
              </ListItem>
              <Divider />
            </Box>
          );
        })}
      </List>
    </Box>
  )
}
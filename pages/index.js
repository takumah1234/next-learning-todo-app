import { useEffect, useState } from 'react';
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
  ListItemButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

export default function Home() {
  // 変数の宣言
  const [todoContext, setTodoContext] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getData() {
      const gotTodoList = await getTodoItem()
      setTodoList(gotTodoList.data)
    }
    getData()
  }, [])

  async function getTodoItem () {
    const response = await fetch(`/api/todoListApi/`, {
      method: "GET",
    })
    return await response.json()
  }

  async function postTodoItem(context) {
    const contentType = "application/json"

    try {
      const body = {
        context,
      }
      const response = await fetch("/api/todoListApi/", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(body),
      })

      const jsonResponse = await response.json()

      console.log(jsonResponse)

      return jsonResponse.data
    } catch (error) {
      throw new Error('登録できませんでした')
    }
  }

  async function deleteTodoItem(id) {
    try {
      await fetch(`/api/todoListApi/${id}`, {
        method: "DELETE",
      })
    } catch (error) {
      throw new Error('削除できませんでした')
    }
  }
  
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
            onClick={async () => {
              const item = await postTodoItem(todoContext);
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
                disablePadding
                secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    setTodoList(
                      todoList.filter((item) => item.id !== todoItem.id)
                    );
                    deleteTodoItem(todoItem.id)
                  } }
                >
                  <DeleteIcon />
                </IconButton>}
              >
                <Link href={`/detail/${todoItem.id}/`}>
                  <ListItemButton>
                    <ListItemText primary={todoItem.context} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <Divider />
            </Box>
          );
        })}
      </List>
    </Box>
  )
}
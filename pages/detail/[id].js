import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ToDoItemDetail(props) {
    const { id } = props
    const [todoItem, setTodoItem] = useState({
        id: '',
        context: '',
    })
    
    useEffect(() => {
        async function findTodoItem () {
            const response = await fetch(`/api/todoListApi/${id}`, {
              method: "GET",
            })
            return await response.json()
        }

        async function getData() {
          const gotTodoList = await findTodoItem()
          setTodoItem(gotTodoList.data)
        }
        getData()
    }, [id])

    return (
        <Card sx={{ margin: 'auto', width: '50%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom component="div">
                    ID
                </Typography>
                {todoItem.id}
                <Typography variant="h6" gutterBottom component="div">
                    ToDoアイテムの内容
                </Typography>
                {todoItem.context}
            </CardContent>
            <CardActions>
                <Link href="/">
                    <Button>前のページに戻る</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id
    return {
      props: {
          id
      },
    }
  }
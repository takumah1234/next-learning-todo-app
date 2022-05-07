import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import Link from "next/link";

export default function ToDoItemDetail(props) {
    const {id, detail} = props
    
    return (
        <Card sx={{ margin: 'auto', width: '50%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom component="div">
                    ID
                </Typography>
                {id}
                <Typography variant="h6" gutterBottom component="div">
                    ToDoアイテムの内容
                </Typography>
                {detail}
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
    const [id, detail] = context.params.props
    return {
      props: {
          id,
          detail,
      },
    }
  }
import { findTodoItem, deleteTodoItem } from "../../../db/todoListDB"

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const todoItem = await findTodoItem(id)
        if (!todoItem) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: todoItem })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deletedTodoItem = await deleteTodoItem(id)
        if (!deletedTodoItem) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

import { getToDoList, saveToDoList } from "../../../db/todoListDB"

export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const todoList = await getToDoList()
                res.status(200).json({success: true, data: todoList})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try {
                const result = await saveToDoList(req.body.context)
                res.status(201).json({ success: true, data: result })
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}
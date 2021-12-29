import express from 'express'
import resize from '../src/utilities/resizeHandler'
import { validator } from '../middleware/validator'

const app = express()
const port = 3000

app.use(express.json())
app.use(validator)
app.get('/api/images', async (req, res) => {
    const height = req.query.height as unknown as number,
        width = req.query.width as unknown as number,
        image_name = req.query.image as unknown as string
    try {
        const image_resized: string = await resize(image_name, width, height)
        if (image_resized) res.sendFile(image_resized)
    } catch (err: any) {
        console.error('Error: ', err)
    }
})

app.listen(port)
export default app

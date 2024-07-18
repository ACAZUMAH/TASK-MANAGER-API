import express,{ Request, Response} from 'express';
import router from './routes/main-route';
import { connect }from './models/connect'
import notFound from './midlewares/not-found'
import errorHandler from './midlewares/error-handler'
require("dotenv").config()

const app = express()
app.use(express.static('./public'))
app.use(express.json())
app.use(router)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3500
const url: string | undefined = process.env.DATABASE_URL

const start = async () =>{
    try {
        if(url){
            await connect(url)
            app.listen(PORT, () =>{
                console.log(`sever running on http://localhost:${PORT}`)
            })
        }
    } catch (error) {
        console.log(error)
    }
}
start()


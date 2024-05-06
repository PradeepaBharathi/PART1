import express from 'express'
import { exec } from 'child_process'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.post('/launch', (req, res) => {
    const { appName, appPath } = req.body
    
     if (!appName || !appPath) {
       return res.status(400).send("Application name and path are required");
    }
    console.log(appName,appPath)
    exec(`start "" "${appPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error launching application: ${error.message}`);
        return res.status(500).send("Error launching application");
      }
      if (stderr) {
        console.error(`Error launching application: ${stderr}`);
        return res.status(500).send("Error launching application");
      }
      console.log(`Application launched successfully: ${stdout}`);
      res.send("Application launched successfully");
    }); 
    
})

app.listen(5000, () => {
    console.log("app listening to port 5000")
})
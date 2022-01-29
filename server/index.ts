import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PythonShell } from 'python-shell';

// Constants
const HTTP_STATUS_CODE_INTERNAL_SERVER = 500;
const HTTP_STATUS_CODE_OK = 200;
const PORT = 4000;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('CycAI home challenge');
});

app.post('/exec-script', async (req, res, next) => {
    const script = req.body.script;

    // Check Syntax
    try {
        await PythonShell.checkSyntax(script);
    } catch (err) {
        next(err.message);
        return res.status(HTTP_STATUS_CODE_INTERNAL_SERVER).json({"error": err.message});
    }

    // Run script
    try {
        PythonShell.runString(script, null, (err, results) => {
            if (err) {
                return res.status(HTTP_STATUS_CODE_INTERNAL_SERVER).json({"error": err});
            }
            return res.status(HTTP_STATUS_CODE_OK).json({"data": results});
        });
    } catch (err) {
        next(err.message);
        return res.status(HTTP_STATUS_CODE_INTERNAL_SERVER).json({"error": err.message});
    }
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
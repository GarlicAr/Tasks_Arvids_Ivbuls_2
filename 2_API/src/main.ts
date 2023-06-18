import * as express from "express";
import {Application} from "express";
import * as fs from "fs";
import * as multer from "multer";
import {ApiRequest} from "./interfaces/APIRequest";
import {ApiResponse} from "./interfaces/APIResponse";

const app: Application = express();
const mult = multer();
app.use(express.json());
app.use(express.urlencoded({ extended: true})); // get data from HTML forms
app.use(mult.array("data"));

interface IrisData {
    sepal_length: number;
    sepal_width: number;
    petal_length: number;
    petal_width: number;
    species: string;    
}
  
app.post('/calculate', (req, res) => {
    const species = req.query.species as string;

    const rawData: IrisData[] = JSON.parse(fs.readFileSync(req.files[0].path, 'utf8'));

    const filteredData = rawData.filter(data => data.species === species);

    const sepalLengths = filteredData.map(data => data.sepal_length);
    const sepalWidths = filteredData.map(data => data.sepal_width);
    const petalLengths = filteredData.map(data => data.petal_length);
    const petalWidths = filteredData.map(data => data.petal_width);

    const sepalLengthAvg = calculateAverage(sepalLengths);
    const sepalWidthAvg = calculateAverage(sepalWidths);
    const petalLengthAvg = calculateAverage(petalLengths);
    const petalWidthAvg = calculateAverage(petalWidths);

    const sepalLengthMin = Math.min(...sepalLengths);
    const sepalWidthMin = Math.min(...sepalWidths);
    const petalLengthMin = Math.min(...petalLengths);
    const petalWidthMin = Math.min(...petalWidths);

    const sepalLengthMax = Math.max(...sepalLengths);
    const sepalWidthMax = Math.max(...sepalWidths);
    const petalLengthMax = Math.max(...petalLengths);
    const petalWidthMax = Math.max(...petalWidths);

    const response: ApiResponse = {
        sepalLengthAvg,
        sepalWidthAvg,
        petalLengthAvg,
        petalWidthAvg,
        sepalLengthMin,
        sepalWidthMin,
        petalLengthMin,
        petalWidthMin,
        sepalLengthMax,
        sepalWidthMax,
        petalLengthMax,
        petalWidthMax,
        isSuccess: true
      };
    res.json(response);
});

app.listen(
    8000,
    () => {
        // http://127.0.0.1:8000
        console.log('Server started http://localhost:8000');
    }
)

function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
      return 0;
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }
const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

const data = [
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "146.48",
      "product": "Mobile",
      "transactionId": "T001",
      "transactionDt": "12/01/2023"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "138.00",
      "product": "Headphone",
      "transactionId": "T002",
      "transactionDt": "12/02/2023"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "30.54",
      "product": "Monitor",
      "transactionId": "T003",
      "transactionDt": "12/03/2023"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "197.71",
      "product": "Laptop",
      "transactionId": "T004",
      "transactionDt": "12/04/2023"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "68.00",
      "product": "Mouse",
      "transactionId": "T005",
      "transactionDt": "12/05/2023"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "66.76",
      "product": "Keyboard",
      "transactionId": "T006",
      "transactionDt": "12/06/2023"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "128.70",
      "product": "Television",
      "transactionId": "T007",
      "transactionDt": "12/07/2023"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "123.00",
      "product": "Speaker",
      "transactionId": "T008",
      "transactionDt": "12/08/2023"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "14.89",
      "product": "Mobile",
      "transactionId": "T009",
      "transactionDt": "12/09/2023"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "193.66",
      "product": "Headphone",
      "transactionId": "T010",
      "transactionDt": "12/10/2023"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "165.00",
      "product": "Monitor",
      "transactionId": "T011",
      "transactionDt": "12/11/2023"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "144.86",
      "product": "Laptop",
      "transactionId": "T012",
      "transactionDt": "12/12/2023"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "171.07",
      "product": "Mouse",
      "transactionId": "T013",
      "transactionDt": "12/13/2023"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "166.00",
      "product": "Keyboard",
      "transactionId": "T014",
      "transactionDt": "12/14/2023"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "90.07",
      "product": "Television",
      "transactionId": "T015",
      "transactionDt": "12/15/2023"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "132.66",
      "product": "Speaker",
      "transactionId": "T016",
      "transactionDt": "12/16/2023"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "134.00",
      "product": "Mobile",
      "transactionId": "T017",
      "transactionDt": "12/17/2023"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "180.62",
      "product": "Headphone",
      "transactionId": "T018",
      "transactionDt": "12/18/2023"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "54.64",
      "product": "Monitor",
      "transactionId": "T019",
      "transactionDt": "12/19/2023"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "118.00",
      "product": "Laptop",
      "transactionId": "T020",
      "transactionDt": "12/20/2023"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "34.10",
      "product": "Mouse",
      "transactionId": "T021",
      "transactionDt": "12/21/2023"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "166.16",
      "product": "Keyboard",
      "transactionId": "T022",
      "transactionDt": "12/22/2023"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "193.00",
      "product": "Television",
      "transactionId": "T023",
      "transactionDt": "12/23/2023"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "169.33",
      "product": "Speaker",
      "transactionId": "T024",
      "transactionDt": "12/24/2023"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "183.95",
      "product": "Mobile",
      "transactionId": "T025",
      "transactionDt": "12/25/2023"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "195.00",
      "product": "Headphone",
      "transactionId": "T026",
      "transactionDt": "12/26/2023"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "141.52",
      "product": "Monitor",
      "transactionId": "T027",
      "transactionDt": "12/27/2023"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "112.58",
      "product": "Laptop",
      "transactionId": "T028",
      "transactionDt": "12/28/2023"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "88.00",
      "product": "Mouse",
      "transactionId": "T029",
      "transactionDt": "12/29/2023"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "52.03",
      "product": "Keyboard",
      "transactionId": "T030",
      "transactionDt": "12/30/2023"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "199.24",
      "product": "Television",
      "transactionId": "T031",
      "transactionDt": "12/31/2023"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "157.00",
      "product": "Speaker",
      "transactionId": "T032",
      "transactionDt": "01/01/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "195.66",
      "product": "Mobile",
      "transactionId": "T033",
      "transactionDt": "01/02/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "51.23",
      "product": "Headphone",
      "transactionId": "T034",
      "transactionDt": "01/03/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "139.00",
      "product": "Monitor",
      "transactionId": "T035",
      "transactionDt": "01/04/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "58.27",
      "product": "Laptop",
      "transactionId": "T036",
      "transactionDt": "01/05/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "146.26",
      "product": "Mouse",
      "transactionId": "T037",
      "transactionDt": "01/06/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "27.00",
      "product": "Keyboard",
      "transactionId": "T038",
      "transactionDt": "01/07/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "174.06",
      "product": "Television",
      "transactionId": "T039",
      "transactionDt": "01/08/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "177.47",
      "product": "Speaker",
      "transactionId": "T040",
      "transactionDt": "01/09/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "186.00",
      "product": "Mobile",
      "transactionId": "T041",
      "transactionDt": "01/10/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "178.50",
      "product": "Headphone",
      "transactionId": "T042",
      "transactionDt": "01/11/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "136.14",
      "product": "Monitor",
      "transactionId": "T043",
      "transactionDt": "01/12/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "88.00",
      "product": "Laptop",
      "transactionId": "T044",
      "transactionDt": "01/13/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "126.51",
      "product": "Mouse",
      "transactionId": "T045",
      "transactionDt": "01/14/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "152.17",
      "product": "Keyboard",
      "transactionId": "T046",
      "transactionDt": "01/15/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "153.00",
      "product": "Television",
      "transactionId": "T047",
      "transactionDt": "01/16/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "71.65",
      "product": "Speaker",
      "transactionId": "T048",
      "transactionDt": "01/17/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "103.93",
      "product": "Mobile",
      "transactionId": "T049",
      "transactionDt": "01/18/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "45.00",
      "product": "Headphone",
      "transactionId": "T050",
      "transactionDt": "01/19/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "164.27",
      "product": "Monitor",
      "transactionId": "T051",
      "transactionDt": "01/20/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "72.44",
      "product": "Laptop",
      "transactionId": "T052",
      "transactionDt": "01/21/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "180.00",
      "product": "Mouse",
      "transactionId": "T053",
      "transactionDt": "01/22/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "191.36",
      "product": "Keyboard",
      "transactionId": "T054",
      "transactionDt": "01/23/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "180.79",
      "product": "Television",
      "transactionId": "T055",
      "transactionDt": "01/24/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "20.00",
      "product": "Speaker",
      "transactionId": "T056",
      "transactionDt": "01/25/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "21.43",
      "product": "Mobile",
      "transactionId": "T057",
      "transactionDt": "01/26/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "154.31",
      "product": "Headphone",
      "transactionId": "T058",
      "transactionDt": "01/27/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "73.00",
      "product": "Monitor",
      "transactionId": "T059",
      "transactionDt": "01/28/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "27.76",
      "product": "Laptop",
      "transactionId": "T060",
      "transactionDt": "01/29/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "75.60",
      "product": "Mouse",
      "transactionId": "T061",
      "transactionDt": "01/30/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "168.00",
      "product": "Keyboard",
      "transactionId": "T062",
      "transactionDt": "01/31/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "123.35",
      "product": "Television",
      "transactionId": "T063",
      "transactionDt": "02/01/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "34.15",
      "product": "Speaker",
      "transactionId": "T064",
      "transactionDt": "02/02/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "18.00",
      "product": "Mobile",
      "transactionId": "T065",
      "transactionDt": "02/03/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "121.99",
      "product": "Headphone",
      "transactionId": "T066",
      "transactionDt": "02/04/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "80.98",
      "product": "Monitor",
      "transactionId": "T067",
      "transactionDt": "02/05/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "75.00",
      "product": "Laptop",
      "transactionId": "T068",
      "transactionDt": "02/06/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "103.64",
      "product": "Mouse",
      "transactionId": "T069",
      "transactionDt": "02/07/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "29.78",
      "product": "Keyboard",
      "transactionId": "T070",
      "transactionDt": "02/08/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "12.00",
      "product": "Television",
      "transactionId": "T071",
      "transactionDt": "02/09/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "163.95",
      "product": "Speaker",
      "transactionId": "T072",
      "transactionDt": "02/10/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "84.13",
      "product": "Mobile",
      "transactionId": "T073",
      "transactionDt": "02/11/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "40.00",
      "product": "Headphone",
      "transactionId": "T074",
      "transactionDt": "02/12/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "131.21",
      "product": "Monitor",
      "transactionId": "T075",
      "transactionDt": "02/13/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "59.72",
      "product": "Laptop",
      "transactionId": "T076",
      "transactionDt": "02/14/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "18.00",
      "product": "Mouse",
      "transactionId": "T077",
      "transactionDt": "02/15/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "64.22",
      "product": "Keyboard",
      "transactionId": "T078",
      "transactionDt": "02/16/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "168.19",
      "product": "Television",
      "transactionId": "T079",
      "transactionDt": "02/17/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "193.00",
      "product": "Speaker",
      "transactionId": "T080",
      "transactionDt": "02/18/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "70.06",
      "product": "Mobile",
      "transactionId": "T081",
      "transactionDt": "02/19/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "30.03",
      "product": "Headphone",
      "transactionId": "T082",
      "transactionDt": "02/20/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "136.00",
      "product": "Monitor",
      "transactionId": "T083",
      "transactionDt": "02/21/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "19.49",
      "product": "Laptop",
      "transactionId": "T084",
      "transactionDt": "02/22/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "163.79",
      "product": "Mouse",
      "transactionId": "T085",
      "transactionDt": "02/23/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "120.00",
      "product": "Keyboard",
      "transactionId": "T086",
      "transactionDt": "02/24/2024"
  },
  {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "87.50",
      "product": "Television",
      "transactionId": "T087",
      "transactionDt": "02/25/2024"
  },
  {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "13.99",
      "product": "Speaker",
      "transactionId": "T088",
      "transactionDt": "02/26/2024"
  },
  {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "32.00",
      "product": "Mobile",
      "transactionId": "T089",
      "transactionDt": "02/27/2024"
  },
  {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "186.84",
      "product": "Headphone",
      "transactionId": "T090",
      "transactionDt": "02/28/2024"
  },
  {
      "custId": "C001",
      "name": "John Doe",
      "amt": "103.53",
      "product": "Monitor",
      "transactionId": "T091",
      "transactionDt": "02/29/2024"
  }
];
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/transactionlist', (req, res) => {
  res.send({ data, message: 'Data fetched successfully!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
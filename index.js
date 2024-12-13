const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

const data = [
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "27.29",
    "product": "Mobile",
    "transactionId": "T001",
    "transactionDt": "12/01/2023"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "196.00",
    "product": "Headphone",
    "transactionId": "T002",
    "transactionDt": "12/02/2023"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "14.85",
    "product": "Monitor",
    "transactionId": "T003",
    "transactionDt": "12/03/2023"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "91.00",
    "product": "Laptop",
    "transactionId": "T004",
    "transactionDt": "12/04/2023"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "87.00",
    "product": "Mouse",
    "transactionId": "T005",
    "transactionDt": "12/05/2023"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "98.21",
    "product": "Keyboard",
    "transactionId": "T006",
    "transactionDt": "12/06/2023"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "130.00",
    "product": "Television",
    "transactionId": "T007",
    "transactionDt": "12/07/2023"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "126.96",
    "product": "Peaker",
    "transactionId": "T008",
    "transactionDt": "12/08/2023"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "186.00",
    "product": "Mobile",
    "transactionId": "T009",
    "transactionDt": "12/09/2023"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "54.00",
    "product": "Headphone",
    "transactionId": "T010",
    "transactionDt": "12/10/2023"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "115.47",
    "product": "Monitor",
    "transactionId": "T011",
    "transactionDt": "12/11/2023"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "193.00",
    "product": "Laptop",
    "transactionId": "T012",
    "transactionDt": "12/12/2023"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "80.30",
    "product": "Mouse",
    "transactionId": "T013",
    "transactionDt": "12/13/2023"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "142.00",
    "product": "Keyboard",
    "transactionId": "T014",
    "transactionDt": "12/14/2023"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "131.00",
    "product": "Television",
    "transactionId": "T015",
    "transactionDt": "12/15/2023"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "190.28",
    "product": "Peaker",
    "transactionId": "T016",
    "transactionDt": "12/16/2023"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "96.00",
    "product": "Mobile",
    "transactionId": "T017",
    "transactionDt": "12/17/2023"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "136.76",
    "product": "Headphone",
    "transactionId": "T018",
    "transactionDt": "12/18/2023"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "148.00",
    "product": "Monitor",
    "transactionId": "T019",
    "transactionDt": "12/19/2023"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "177.00",
    "product": "Laptop",
    "transactionId": "T020",
    "transactionDt": "12/20/2023"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "178.62",
    "product": "Mouse",
    "transactionId": "T021",
    "transactionDt": "12/21/2023"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "117.00",
    "product": "Keyboard",
    "transactionId": "T022",
    "transactionDt": "12/22/2023"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "60.10",
    "product": "Television",
    "transactionId": "T023",
    "transactionDt": "12/23/2023"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "146.00",
    "product": "Peaker",
    "transactionId": "T024",
    "transactionDt": "12/24/2023"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "199.00",
    "product": "Mobile",
    "transactionId": "T025",
    "transactionDt": "12/25/2023"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "43.48",
    "product": "Headphone",
    "transactionId": "T026",
    "transactionDt": "12/26/2023"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "101.00",
    "product": "Monitor",
    "transactionId": "T027",
    "transactionDt": "12/27/2023"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "126.40",
    "product": "Laptop",
    "transactionId": "T028",
    "transactionDt": "12/28/2023"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "155.00",
    "product": "Mouse",
    "transactionId": "T029",
    "transactionDt": "12/29/2023"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "189.00",
    "product": "Keyboard",
    "transactionId": "T030",
    "transactionDt": "12/30/2023"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "63.98",
    "product": "Television",
    "transactionId": "T031",
    "transactionDt": "12/31/2023"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "53.00",
    "product": "Peaker",
    "transactionId": "T032",
    "transactionDt": "01/01/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "136.52",
    "product": "Mobile",
    "transactionId": "T033",
    "transactionDt": "01/02/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "190.00",
    "product": "Headphone",
    "transactionId": "T034",
    "transactionDt": "01/03/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "111.00",
    "product": "Monitor",
    "transactionId": "T035",
    "transactionDt": "01/04/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "22.05",
    "product": "Laptop",
    "transactionId": "T036",
    "transactionDt": "01/05/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "49.00",
    "product": "Mouse",
    "transactionId": "T037",
    "transactionDt": "01/06/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "133.17",
    "product": "Keyboard",
    "transactionId": "T038",
    "transactionDt": "01/07/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "173.00",
    "product": "Television",
    "transactionId": "T039",
    "transactionDt": "01/08/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "43.00",
    "product": "Peaker",
    "transactionId": "T040",
    "transactionDt": "01/09/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "164.35",
    "product": "Mobile",
    "transactionId": "T041",
    "transactionDt": "01/10/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "65.00",
    "product": "Headphone",
    "transactionId": "T042",
    "transactionDt": "01/11/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "69.04",
    "product": "Monitor",
    "transactionId": "T043",
    "transactionDt": "01/12/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "20.00",
    "product": "Laptop",
    "transactionId": "T044",
    "transactionDt": "01/13/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "42.00",
    "product": "Mouse",
    "transactionId": "T045",
    "transactionDt": "01/14/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "118.74",
    "product": "Keyboard",
    "transactionId": "T046",
    "transactionDt": "01/15/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "112.00",
    "product": "Television",
    "transactionId": "T047",
    "transactionDt": "01/16/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "109.28",
    "product": "Peaker",
    "transactionId": "T048",
    "transactionDt": "01/17/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "134.00",
    "product": "Mobile",
    "transactionId": "T049",
    "transactionDt": "01/18/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "80.00",
    "product": "Headphone",
    "transactionId": "T050",
    "transactionDt": "01/19/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "166.10",
    "product": "Monitor",
    "transactionId": "T051",
    "transactionDt": "01/20/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "10.00",
    "product": "Laptop",
    "transactionId": "T052",
    "transactionDt": "01/21/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "132.18",
    "product": "Mouse",
    "transactionId": "T053",
    "transactionDt": "01/22/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "112.00",
    "product": "Keyboard",
    "transactionId": "T054",
    "transactionDt": "01/23/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "170.00",
    "product": "Television",
    "transactionId": "T055",
    "transactionDt": "01/24/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "112.46",
    "product": "Peaker",
    "transactionId": "T056",
    "transactionDt": "01/25/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "28.00",
    "product": "Mobile",
    "transactionId": "T057",
    "transactionDt": "01/26/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "23.33",
    "product": "Headphone",
    "transactionId": "T058",
    "transactionDt": "01/27/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "130.00",
    "product": "Monitor",
    "transactionId": "T059",
    "transactionDt": "01/28/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "78.00",
    "product": "Laptop",
    "transactionId": "T060",
    "transactionDt": "01/29/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "188.66",
    "product": "Mouse",
    "transactionId": "T061",
    "transactionDt": "01/30/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "186.00",
    "product": "Keyboard",
    "transactionId": "T062",
    "transactionDt": "01/31/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "145.45",
    "product": "Television",
    "transactionId": "T063",
    "transactionDt": "02/01/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "137.00",
    "product": "Peaker",
    "transactionId": "T064",
    "transactionDt": "02/02/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "93.00",
    "product": "Mobile",
    "transactionId": "T065",
    "transactionDt": "02/03/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "75.03",
    "product": "Headphone",
    "transactionId": "T066",
    "transactionDt": "02/04/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "70.00",
    "product": "Monitor",
    "transactionId": "T067",
    "transactionDt": "02/05/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "95.13",
    "product": "Laptop",
    "transactionId": "T068",
    "transactionDt": "02/06/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "163.00",
    "product": "Mouse",
    "transactionId": "T069",
    "transactionDt": "02/07/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "194.00",
    "product": "Keyboard",
    "transactionId": "T070",
    "transactionDt": "02/08/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "88.22",
    "product": "Television",
    "transactionId": "T071",
    "transactionDt": "02/09/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "117.00",
    "product": "Peaker",
    "transactionId": "T072",
    "transactionDt": "02/10/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "37.15",
    "product": "Mobile",
    "transactionId": "T073",
    "transactionDt": "02/11/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "120.00",
    "product": "Headphone",
    "transactionId": "T074",
    "transactionDt": "02/12/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "91.00",
    "product": "Monitor",
    "transactionId": "T075",
    "transactionDt": "02/13/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "157.44",
    "product": "Laptop",
    "transactionId": "T076",
    "transactionDt": "02/14/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "98.00",
    "product": "Mouse",
    "transactionId": "T077",
    "transactionDt": "02/15/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "112.01",
    "product": "Keyboard",
    "transactionId": "T078",
    "transactionDt": "02/16/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "181.00",
    "product": "Television",
    "transactionId": "T079",
    "transactionDt": "02/17/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "126.00",
    "product": "Peaker",
    "transactionId": "T080",
    "transactionDt": "02/18/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "113.56",
    "product": "Mobile",
    "transactionId": "T081",
    "transactionDt": "02/19/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "119.00",
    "product": "Headphone",
    "transactionId": "T082",
    "transactionDt": "02/20/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "135.82",
    "product": "Monitor",
    "transactionId": "T083",
    "transactionDt": "02/21/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "150.00",
    "product": "Laptop",
    "transactionId": "T084",
    "transactionDt": "02/22/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "125.00",
    "product": "Mouse",
    "transactionId": "T085",
    "transactionDt": "02/23/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "79.62",
    "product": "Keyboard",
    "transactionId": "T086",
    "transactionDt": "02/24/2024"
  },
  {
    "custId": "C002",
    "name": "Jane Smith",
    "amt": "61.00",
    "product": "Television",
    "transactionId": "T087",
    "transactionDt": "02/25/2024"
  },
  {
    "custId": "C003",
    "name": "Alice Johnson",
    "amt": "145.41",
    "product": "Peaker",
    "transactionId": "T088",
    "transactionDt": "02/26/2024"
  },
  {
    "custId": "C004",
    "name": "Erick Jensen",
    "amt": "89.00",
    "product": "Mobile",
    "transactionId": "T089",
    "transactionDt": "02/27/2024"
  },
  {
    "custId": "C005",
    "name": "Bob Smith",
    "amt": "11.00",
    "product": "Headphone",
    "transactionId": "T090",
    "transactionDt": "02/28/2024"
  },
  {
    "custId": "C001",
    "name": "John Doe",
    "amt": "92.50",
    "product": "Monitor",
    "transactionId": "T091",
    "transactionDt": "02/29/2024"
  }
]
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
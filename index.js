const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/transactionlist', (req, res) => {
  const data = [
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "103.20",
      "product": "Mobile",
      "transactionId": "T001",
      "transactionDt": "12/01/2023"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "77.50",
      "product": "Headphone",
      "transactionId": "T002",
      "transactionDt": "12/02/2023"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "168",
      "product": "Monitor",
      "transactionId": "T003",
      "transactionDt": "12/03/2023"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "61",
      "product": "Laptop",
      "transactionId": "T004",
      "transactionDt": "12/04/2023"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "42",
      "product": "Mouse",
      "transactionId": "T005",
      "transactionDt": "12/05/2023"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "196",
      "product": "Keyboard",
      "transactionId": "T006",
      "transactionDt": "12/06/2023"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "116",
      "product": "Television",
      "transactionId": "T007",
      "transactionDt": "12/07/2023"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "122",
      "product": "Peaker",
      "transactionId": "T008",
      "transactionDt": "12/08/2023"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "96.50",
      "product": "Mobile",
      "transactionId": "T009",
      "transactionDt": "12/09/2023"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "177",
      "product": "Headphone",
      "transactionId": "T010",
      "transactionDt": "12/10/2023"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "88",
      "product": "Monitor",
      "transactionId": "T011",
      "transactionDt": "12/11/2023"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "186",
      "product": "Laptop",
      "transactionId": "T012",
      "transactionDt": "12/12/2023"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "119.50",
      "product": "Mouse",
      "transactionId": "T013",
      "transactionDt": "12/13/2023"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "91",
      "product": "Keyboard",
      "transactionId": "T014",
      "transactionDt": "12/14/2023"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "143.40",
      "product": "Television",
      "transactionId": "T015",
      "transactionDt": "12/15/2023"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "45",
      "product": "Peaker",
      "transactionId": "T016",
      "transactionDt": "12/16/2023"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "13.40",
      "product": "Mobile",
      "transactionId": "T017",
      "transactionDt": "12/17/2023"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "159.50",
      "product": "Headphone",
      "transactionId": "T018",
      "transactionDt": "12/18/2023"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "10",
      "product": "Monitor",
      "transactionId": "T019",
      "transactionDt": "12/19/2023"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "189.50",
      "product": "Laptop",
      "transactionId": "T020",
      "transactionDt": "12/20/2023"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "138",
      "product": "Mouse",
      "transactionId": "T021",
      "transactionDt": "12/21/2023"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "134",
      "product": "Keyboard",
      "transactionId": "T022",
      "transactionDt": "12/22/2023"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "46",
      "product": "Television",
      "transactionId": "T023",
      "transactionDt": "12/23/2023"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "61",
      "product": "Peaker",
      "transactionId": "T024",
      "transactionDt": "12/24/2023"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "140",
      "product": "Mobile",
      "transactionId": "T025",
      "transactionDt": "12/25/2023"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "120",
      "product": "Headphone",
      "transactionId": "T026",
      "transactionDt": "12/26/2023"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "93.40",
      "product": "Monitor",
      "transactionId": "T027",
      "transactionDt": "12/27/2023"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "39.50",
      "product": "Laptop",
      "transactionId": "T028",
      "transactionDt": "12/28/2023"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "92",
      "product": "Mouse",
      "transactionId": "T029",
      "transactionDt": "12/29/2023"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "167",
      "product": "Keyboard",
      "transactionId": "T030",
      "transactionDt": "12/30/2023"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "189.50",
      "product": "Television",
      "transactionId": "T031",
      "transactionDt": "12/31/2023"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "183.40",
      "product": "Peaker",
      "transactionId": "T032",
      "transactionDt": "01/01/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "95",
      "product": "Mobile",
      "transactionId": "T033",
      "transactionDt": "01/02/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "67",
      "product": "Headphone",
      "transactionId": "T034",
      "transactionDt": "01/03/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "192",
      "product": "Monitor",
      "transactionId": "T035",
      "transactionDt": "01/04/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "37",
      "product": "Laptop",
      "transactionId": "T036",
      "transactionDt": "01/05/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "192",
      "product": "Mouse",
      "transactionId": "T037",
      "transactionDt": "01/06/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "163.40",
      "product": "Keyboard",
      "transactionId": "T038",
      "transactionDt": "01/07/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "192",
      "product": "Television",
      "transactionId": "T039",
      "transactionDt": "01/08/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "177",
      "product": "Peaker",
      "transactionId": "T040",
      "transactionDt": "01/09/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "135",
      "product": "Mobile",
      "transactionId": "T041",
      "transactionDt": "01/10/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "165",
      "product": "Headphone",
      "transactionId": "T042",
      "transactionDt": "01/11/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "28",
      "product": "Monitor",
      "transactionId": "T043",
      "transactionDt": "01/12/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "138",
      "product": "Laptop",
      "transactionId": "T044",
      "transactionDt": "01/13/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "112",
      "product": "Mouse",
      "transactionId": "T045",
      "transactionDt": "01/14/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "27",
      "product": "Keyboard",
      "transactionId": "T046",
      "transactionDt": "01/15/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "85",
      "product": "Television",
      "transactionId": "T047",
      "transactionDt": "01/16/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "179.50",
      "product": "Peaker",
      "transactionId": "T048",
      "transactionDt": "01/17/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "120",
      "product": "Mobile",
      "transactionId": "T049",
      "transactionDt": "01/18/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "132",
      "product": "Headphone",
      "transactionId": "T050",
      "transactionDt": "01/19/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "102",
      "product": "Monitor",
      "transactionId": "T051",
      "transactionDt": "01/20/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "77",
      "product": "Laptop",
      "transactionId": "T052",
      "transactionDt": "01/21/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "139.50",
      "product": "Mouse",
      "transactionId": "T053",
      "transactionDt": "01/22/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "69.50",
      "product": "Keyboard",
      "transactionId": "T054",
      "transactionDt": "01/23/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "127",
      "product": "Television",
      "transactionId": "T055",
      "transactionDt": "01/24/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "119.50",
      "product": "Peaker",
      "transactionId": "T056",
      "transactionDt": "01/25/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "177",
      "product": "Mobile",
      "transactionId": "T057",
      "transactionDt": "01/26/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "113.40",
      "product": "Headphone",
      "transactionId": "T058",
      "transactionDt": "01/27/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "90",
      "product": "Monitor",
      "transactionId": "T059",
      "transactionDt": "01/28/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "117",
      "product": "Laptop",
      "transactionId": "T060",
      "transactionDt": "01/29/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "82",
      "product": "Mouse",
      "transactionId": "T061",
      "transactionDt": "01/30/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "47",
      "product": "Keyboard",
      "transactionId": "T062",
      "transactionDt": "01/31/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "104",
      "product": "Television",
      "transactionId": "T063",
      "transactionDt": "02/01/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "42",
      "product": "Peaker",
      "transactionId": "T064",
      "transactionDt": "02/02/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "90",
      "product": "Mobile",
      "transactionId": "T065",
      "transactionDt": "02/03/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "194",
      "product": "Headphone",
      "transactionId": "T066",
      "transactionDt": "02/04/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "159.50",
      "product": "Monitor",
      "transactionId": "T067",
      "transactionDt": "02/05/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "123.40",
      "product": "Laptop",
      "transactionId": "T068",
      "transactionDt": "02/06/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "36",
      "product": "Mouse",
      "transactionId": "T069",
      "transactionDt": "02/07/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "115",
      "product": "Keyboard",
      "transactionId": "T070",
      "transactionDt": "02/08/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "52",
      "product": "Television",
      "transactionId": "T071",
      "transactionDt": "02/09/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "133.40",
      "product": "Peaker",
      "transactionId": "T072",
      "transactionDt": "02/10/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "39.50",
      "product": "Mobile",
      "transactionId": "T073",
      "transactionDt": "02/11/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "132",
      "product": "Headphone",
      "transactionId": "T074",
      "transactionDt": "02/12/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "174",
      "product": "Monitor",
      "transactionId": "T075",
      "transactionDt": "02/13/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "133.40",
      "product": "Laptop",
      "transactionId": "T076",
      "transactionDt": "02/14/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "142",
      "product": "Mouse",
      "transactionId": "T077",
      "transactionDt": "02/15/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "59.50",
      "product": "Keyboard",
      "transactionId": "T078",
      "transactionDt": "02/16/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "149.50",
      "product": "Television",
      "transactionId": "T079",
      "transactionDt": "02/17/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "188",
      "product": "Peaker",
      "transactionId": "T080",
      "transactionDt": "02/18/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "132",
      "product": "Mobile",
      "transactionId": "T081",
      "transactionDt": "02/19/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "139.50",
      "product": "Headphone",
      "transactionId": "T082",
      "transactionDt": "02/20/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "156",
      "product": "Monitor",
      "transactionId": "T083",
      "transactionDt": "02/21/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "88",
      "product": "Laptop",
      "transactionId": "T084",
      "transactionDt": "02/22/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "61",
      "product": "Mouse",
      "transactionId": "T085",
      "transactionDt": "02/23/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "25",
      "product": "Keyboard",
      "transactionId": "T086",
      "transactionDt": "02/24/2024"
    },
    {
      "custId": "C002",
      "name": "Jane Smith",
      "amt": "114",
      "product": "Television",
      "transactionId": "T087",
      "transactionDt": "02/25/2024"
    },
    {
      "custId": "C003",
      "name": "Alice Johnson",
      "amt": "107",
      "product": "Peaker",
      "transactionId": "T088",
      "transactionDt": "02/26/2024"
    },
    {
      "custId": "C004",
      "name": "Erick Jensen",
      "amt": "78",
      "product": "Mobile",
      "transactionId": "T089",
      "transactionDt": "02/27/2024"
    },
    {
      "custId": "C005",
      "name": "Bob Smith",
      "amt": "199.50",
      "product": "Headphone",
      "transactionId": "T090",
      "transactionDt": "02/28/2024"
    },
    {
      "custId": "C001",
      "name": "John Doe",
      "amt": "189.50",
      "product": "Monitor",
      "transactionId": "T091",
      "transactionDt": "02/29/2024"
    }
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
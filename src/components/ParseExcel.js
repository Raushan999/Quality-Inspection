import React, { useEffect, useState , useRef} from "react";
import { read, utils } from "xlsx";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import Co2Icon from "@mui/icons-material/Co2";
import AreaChart from "./LineChart";
import Option from "./Option";
import Card from "./Card";
const ParseExcel = () => {
  const dummyData = [
    {
      Temp_Node_1: '20',
      CO2_Node_1: '20',
      Humidity_Node_1: '20',

      Temp_Node_2: '20',
      CO2_Node_2: '20',
      Humidity_Node_2: '20',

      Temp_Node_3: '20',
      CO2_Node_3: '20',
      Humidity_Node_3: '20',

      Temp_Node_4: '20',
      CO2_Node_4: '20',
      Humidity_Node_4: '20',
    },
    {
      Temp_Node_1:30,
      CO2_Node_1:30,
      Humidity_Node_1:30,

      Temp_Node_2: 22,
      CO2_Node_2:24,
      Humidity_Node_2:23,

      Temp_Node_3:21,
      CO2_Node_3: 22,
      Humidity_Node_3:25,

      Temp_Node_4: 20,
      CO2_Node_4: 20,
      Humidity_Node_4: 20
    },
    {
      Temp_Node_1: 90,
      CO2_Node_1: 40,
      Humidity_Node_1: 40,

      Temp_Node_2: 20,
      CO2_Node_2: 20,
      Humidity_Node_2: 20,

      Temp_Node_3: 20,
      CO2_Node_3: 20,
      Humidity_Node_3: 20,

      Temp_Node_4: 20,
      CO2_Node_4: 20,
      Humidity_Node_4: 20,
    },
    {
      Temp_Node_1: 50,
      CO2_Node_1: 45,
      Humidity_Node_1: 56,

      Temp_Node_2: 20,
      CO2_Node_2: 20,
      Humidity_Node_2: 20,

      Temp_Node_3: 20,
      CO2_Node_3: 20,
      Humidity_Node_3: 20,

      Temp_Node_4:21,
      CO2_Node_4:25,
      Humidity_Node_4: 17,
    },
    {
      Temp_Node_1: 45,
      CO2_Node_1: 67,
      Humidity_Node_1: 56,

      Temp_Node_2:30,
      CO2_Node_2: 20,
      Humidity_Node_2: 20,

      Temp_Node_3: 20,
      CO2_Node_3: 20,
      Humidity_Node_3: 10,

      Temp_Node_4: 40,
      CO2_Node_4: 20,
      Humidity_Node_4: 20,
    },

  ];

  const optionsTemp=[
    {label:'Node 1',value:1},
    {label:'Node 2',value:2},
    {label:'Node 3',value:3},
    {label:'Node 4',value:4},
  ]
  const optionsCo2=[
    {label:'Node 1',value:1},
    {label:'Node 2',value:2},
    {label:'Node 3',value:3},
    {label:'Node 4',value:4},
  ]
  const optionsHumidity=[
    {label:'Node 1',value:1},
    {label:'Node 2',value:2},
    {label:'Node 3',value:3},
    {label:'Node 4',value:4},
  ]
  // const data = useRef(dummyData)
  // console.log("rendering dummy dAT",dummyData)
  const [data, setData] = useState(dummyData);
  const [nodesTemp, setNodesTemp] = useState([optionsTemp]);
  const [nodesCO2, setNodesCO2] = useState([optionsCo2]);
  const [nodesHumidity, setNodesHumidity] = useState([optionsHumidity]);

  // console.log("rendering",data)
  const tempDataKey = ["Temp_Node_1", "Temp_Node_2", "Temp_Node_3", "Temp_Node_4"];
  const co2DataKey = ["CO2_Node_1", "CO2_Node_2", "CO2_Node_3", "CO2_Node_4"];
  const humidityDataKey = ["Humidity_Node_1", "Humidity_Node_2", "Humidity_Node_3", "Humidity_Node_4"];

  function insertDecimal(num) {
    return Number(num).toFixed(2);
 }
  const HandleChange = async (e) => {
    const file = e.target.files[0];
    const excelData = await file.arrayBuffer();
    const workbook = read(excelData);
    const jsonData = utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]]
    );
    const response = jsonData.map((item) => {
      return data.push({
        Temp_Node_1: insertDecimal(item.T_Chamber_Temperature_1),
        CO2_Node_1: insertDecimal(item.T_Chamber_CO2_1),
        Humidity_Node_1: insertDecimal(item.T_Chamber_Humidity_1),

        Temp_Node_2: insertDecimal(item.T_Chamber_Temperature_2),
        CO2_Node_2: insertDecimal(item.T_Chamber_CO2_2),
        Humidity_Node_2: insertDecimal(item.T_Chamber_Humidity_2),

        Temp_Node_3: insertDecimal(item.T_Chamber_Temperature_3),
        CO2_Node_3: insertDecimal(item.T_Chamber_CO2_3),
        Humidity_Node_3: insertDecimal(item.T_Chamber_Humidity_3),

        Temp_Node_4: insertDecimal(item.T_Chamber_Temperature_4),
        CO2_Node_4: insertDecimal(item.T_Chamber_CO2_4),
        Humidity_Node_4: insertDecimal(item.T_Chamber_Humidity_4),
      });
    });
    setData(response)
    console.log("data", data);
  };

  function onChangeInput1(value){
    setNodesTemp(value);
  }
  function onChangeInput2(value){
    setNodesCO2(value);
  }
  function onChangeInput3(value){
    setNodesHumidity(value);
  }
  function add(num1, num2){
    return Number(parseFloat(num1) + parseFloat(num2)).toFixed(2);
  }
  function pushNewDataPoint(){
      // console.log(add(data[data.length-1].Temp_Node_1, Math.floor(Math.random() * 2)));
      const newData = {
        Temp_Node_1: add(data[data.length-1].Temp_Node_1, Math.floor(Math.random() * 2)),
        CO2_Node_1:  add(data[data.length-1].CO2_Node_1  ,  (Math.floor(Math.random() * 2))),
        Humidity_Node_1: add (data[data.length-1].Humidity_Node_1, (Math.floor(Math.random() * 2))),

        Temp_Node_2: add (data[data.length-1].Temp_Node_2, (Math.floor(Math.random() * 2))),
        CO2_Node_2: add (data[data.length-1].CO2_Node_2, (Math.floor(Math.random() * 2))),
        Humidity_Node_2: add (data[data.length-1].Humidity_Node_2,(Math.floor(Math.random() * 2))),

        Temp_Node_3: add (data[data.length-1].Temp_Node_3, (Math.floor(Math.random() * 2))),
        CO2_Node_3: add (data[data.length-1].CO2_Node_3, (Math.floor(Math.random() * 2))),
        Humidity_Node_3: add (data[data.length-1].Humidity_Node_3, (Math.floor(Math.random() * 2))),

        Temp_Node_4: add(data[data.length-1].Temp_Node_4, (Math.floor(Math.random() * 2))),
        CO2_Node_4: add(data[data.length-1].CO2_Node_4, (Math.floor(Math.random() * 2))),
        Humidity_Node_4: add(data[data.length-1].Humidity_Node_4, (Math.floor(Math.random() * 2))),
      }
      setData([...data, newData])
      console.log("new data", data)
  }
  //call the pushNewDataPoint function after every 2 seconds 
  useEffect(()=>{
    setInterval(() => {
      pushNewDataPoint();
    }, 10000);
  },[data])
  return (
    <>
      <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
            <Card name={"Temperature"} percentage={"+16%"} value={insertDecimal(data[data.length-1].Temp_Node_1) + " C"}>
              <DeviceThermostatIcon />
            </Card>
            <Card name={"Humidity"} percentage={"+49%"} value={insertDecimal(data[data.length-1].Humidity_Node_1)}>
              <OpacityIcon />
            </Card>
            <Card name={"CO2"} percentage={"-13%"} value={insertDecimal(data[data.length-1].CO2_Node_1) + " PPM"}>
              <Co2Icon />
            </Card>
        </div>
      <div style={{display:'flex'}}>
        <AreaChart data={data} dataKey={tempDataKey} nodes={nodesTemp}/>
        <Option options={optionsTemp} onChangeInput={onChangeInput1}/>
      </div>
      <div style={{display:'flex'}}>
        <AreaChart data={data} dataKey={co2DataKey} nodes={nodesCO2} />
        <Option options={optionsCo2} onChangeInput={onChangeInput2}/>
      </div>
      <div style={{display:'flex'}}>
        <AreaChart data={data} dataKey={humidityDataKey} nodes={nodesHumidity} />
        <Option options={optionsHumidity} onChangeInput={onChangeInput3}/>
      </div>
      <input type="file" onChange={(e) => HandleChange(e)} />
    </>
  );
};

export default ParseExcel;

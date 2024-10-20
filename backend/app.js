require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require ("cors");



const {HoldingModel} = require("./models/HoldingModel");
const {PositionModel} = require("./models/PositionModel");
const {OrderModel} = require("./models/OrderModel");

const PORT = process.env.PORT || 4040;
 const db_url = process.env.MONGO_URL;

const app = express();
mongoose.connect(db_url).then(()=>console.log("connected to database")).catch((err)=>console.error("connection error" , err))
// app.get("/addholdings", async function (req, res) {
//   let tempHolding = [
//       {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//   ];

//   if (Array.isArray(tempHolding)) {
//       try {
//           await Promise.all(tempHolding.map(async (element) => {
//               let newHolding = new HoldingModel({
//                   name: element.name,
//                   qty: element.qty,
//                   avg: element.avg,
//                   price: element.price,
//                   net: element.net,
//                   day: element.day,
//               });
//               await newHolding.save();
//               console.log("done");
//           }));
//           res.send("Done, added data to DB");
//       } catch (error) {
//           console.error("Error saving holdings:", error);
//           res.status(500).send("Error saving holdings");
//       }
//   } else {
//       console.log("issue");
//       res.status(400).send("Invalid data");
//   }
// });

app.use(cors());
app.use(bodyParser.json());



app.listen(4040, ()=>{
  console.log("App Started");
 });

app.get("/allholdings", async (req , res )=>{
  let allholdings = await HoldingModel.find({})
  res.json(allholdings);
});

app.post("/newOrder", async (req, res) => {
  try {
    console.log("Received new order data: ", req.body);  // Log incoming data

    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    console.log("Order saved successfully");
    res.send("Order Saved");
  } catch (error) {
    console.error("Error saving order:", error);  // Log error details
    res.status(500).send("Error saving order");
  }
});



app.get("/allpositions", async (req , res )=>{
  let allpostions = await PositionModel.find({})
  res.json(allpostions);
});






// app.get("/addpositions" , async function (req ,res) {


//   let tempPosition = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     }
//   ];
//   if (Array.isArray(tempPosition)){
//           try {
//               await Promise.all(tempPosition.map(async (element) => {
//                   let newPosition = new PositionModel({
//                       name: element.name,
//                       qty: element.qty,
//                       avg: element.avg,
//                       price: element.price,
//                       net: element.net,
//                       day: element.day,
//                       isLoss : element.isLoss
//                   });
//                   await newPosition.save();
//                   console.log("done");
//               }));
//               res.send("Done, added data to DB");
//           } catch (error) {
//               console.error("Error saving holdings:", error);
//               res.status(500).send("Error saving holdings");
//           }
//       } else {
//           console.log("issue");
//           res.status(400).send("Invalid data");
//       }
//     });
    

  






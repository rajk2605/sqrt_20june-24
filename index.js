const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/compute", (req, res)=>{
	let num = req.query.number;
	let n = parseFloat(num);
	let r = Math.sqrt(n);
	let ans ="Square root =" + r.toFixed(2);
	let msg = "num:--" + num + "" + ans + "\n";
	
	fs.appendFile("result.txt", msg, (err)=> {
		if(err)		console.log(err);
	});
	res.json({"ans":ans});
});

app.listen(9000, ()=> {console.log("ready to serve @ 9000");});
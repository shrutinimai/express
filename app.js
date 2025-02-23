const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res) => {
    res.send(`
        <form action="/add-product" method="POST">
            <label>Product Name:</label>
            <input type="text" name="productName" required />
            <br />
            <label>Size:</label>
            <input type="text" name="size" required />
            <br />
            <button type="submit">Add Product</button>
        </form>
    `);
});

app.post("/add-product", (req, res) => {
    console.log("Form Data:", req.body); 
    res.send("Product added successfully!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const helmet = require('helmet');
const doc = require("./routes/doc/index");
const option = {
    customCss : '.swagger-ui .models { display: none }'
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc, option))

// routes
const index = require("./routes/index");
require("dotenv").config();
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

index(app);

app.listen(process.env.PORT, () => {
    console.log(`API running on port ${process.env.PORT}`);
});

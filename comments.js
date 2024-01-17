// Create web server

const bodyParser = require('body-parser');
const cors = require('cors');

// Import routers
const commentRouter = require('./routes/comments');

// Create web server
const app = express();

// Config web server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Configure routers
app.use('/comments', commentRouter);

// Run web server
app.listen(3000, () => {
    console.log('Web server running on port 3000');
});
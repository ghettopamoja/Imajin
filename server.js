const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import CORS

const app = express();

const allowedOrigins = ['https://ghettopamoja.github.io', 'http://127.0.0.1:5501'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));



app.use(express.json({ limit: '500mb' }));

// Path to your JSON file
const postsFilePath = path.join(__dirname, 'postFeed.json');

// Handle GET request to retrieve all posts
app.get('/posts', (req, res) => {
    fs.readFile(postsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading posts:', err);
            return res.status(500).send('Error reading posts');
        }
        const posts = JSON.parse(data);
        res.json(posts);
    });
});

// Handle POST request to add a new post
app.post('/posts', (req, res) => {
    const newPost = req.body;

    fs.readFile(postsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading posts:', err);
            return res.status(500).send('Error reading posts');
        }

        const posts = JSON.parse(data);
        posts.push(newPost);

        fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Error writing new post:', writeErr);
                return res.status(500).send('Error writing new post');
            }
            res.status(201).json({ message: 'Post added successfully', index: posts.length });
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

// Configure CORS to allow requests from your GitHub Pages domain
app.use(cors({
    origin: 'https://ghettopamoja.github.io',
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
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'https://ghettopamoja.github.io',
}));

app.use(express.json({ limit: '500mb' }));


const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/imajinPosts'; // Fallback to local for development

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));


// Define the Post schema
const postSchema = new mongoose.Schema({
    leftImg: String,
    rightImg: String,
    ImajinFriendname: String,
    songAudio: String,
    songTitle: String,
    userImage: String,
    UserName: String,
});

const Post = mongoose.model('Post', postSchema);

// Handle POST request to add a new post
app.post('/posts', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).json({ message: 'Post added successfully', post: savedPost });
    } catch (error) {
        console.error('Error saving post:', error);
        res.status(500).send('Error saving post');
    }
});

// Handle GET request to retrieve all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Error fetching posts');
    }
});

const PORT = process.env.PORT || 3001; // Use 3001 or any other unused port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


const express = require('express');
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


import axios from 'axios';

const KEY = 'AIzaSyDCYxA-G1fFiu7FJQdE3qMpqYxuzeF7nnM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

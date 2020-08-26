import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    // run this only once, hence the []
    // same as componentDidMount for class-based components
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    
    };

    return [videos, search];


};

export default useVideos;
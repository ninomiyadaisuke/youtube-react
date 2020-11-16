import axios from 'axios'

const KEY = 'AIzaSyCytrHAqEwwr2Vtg55bARkw0rcz7PE-DsE'

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})

const params = {
            part: "snippet",
            maxResults: 3,
            key: KEY,
            regionCode: "JP",
            type: "video",
}

export const fetchPopularData = async () => {
    return await youtube.get("/videos", {
        params: {
            ...params,
            chart: "mostPopular",
        }
    })
}


export const fetchSelectedData = async (id) => {
    return await youtube.get('/videos', {
        params: {
            ...params,
            id
        }
    })
}
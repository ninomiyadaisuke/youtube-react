import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis/index'
import { Store } from '../../store/index'


const VideoDetail = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const location = useLocation()
    const setSelectedVideo = async () => {
        const serachParams = new URLSearchParams(location.search)
        const id = serachParams.get('v')
        await fetchSelectedData(id).then((res) => {
            const item = res.data.items.shift()
            setGlobalState({ type: 'SET_SELECTED', payload: {selected: item}})
        })
    }
    useEffect(() => {
        setSelectedVideo()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default VideoDetail

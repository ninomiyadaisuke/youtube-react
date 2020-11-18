import React from 'react'
import SideList from '../components/SideList/SideList'
import Layout from '../components/Layout/Layout'
import VideoDetail from '../components/VideoDetail/VideoDetail'

const Watch = () => {
    return (
        <Layout>
            <VideoDetail />
            <SideList/>
        </Layout>
    )
}

export default Watch

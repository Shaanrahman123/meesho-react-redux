import React, { useEffect } from 'react'
import Navs from '../components/Navbar/Navs'
import Product from '../components/Products/Product'
import HomeAds from '../components/HomeAds/HomeAds'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navs />
            <HomeAds />
            <Product />
        </div>
    )
}

export default Home

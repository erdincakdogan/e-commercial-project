import React from 'react'

import '../styles/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <div className='home-row'>
                <Product
                id='1'
                title='Iphone 11 128GB'
                price={200}
                image='https://i0.shbdn.com/photos/54/01/26/x5_10515401261wv.jpg'
                >
                </Product>
                <Product
                id='2'
                title='Samsung S22'
                price={300}
                image='https://cdn.vox-cdn.com/thumbor/t4wkZHTM_LlPE0vH5yhqLnfa0AE=/0x0:2040x1360/1400x1400/filters:focal(1011x649:1012x650)/cdn.vox-cdn.com/uploads/chorus_asset/file/23262015/ajohnson_220216_5033_0005.jpg'
                >
                </Product>
            </div>
            
        </div>
    </div>
  )
}

export default Home
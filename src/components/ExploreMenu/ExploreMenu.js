import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Browse Our Delicious Offerings</h1>
        <p className='explore-menu-text'>Discover our varied menu of mouthwatering dishes. Our goal is to delight your taste buds and elevate your dining experience with every flavorful creation.Discover our varied menu of mouthwatering dishes discover our varied menu of mouthwatering dishes.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name)} key={index} className='explore-menu-list-item'>
                        
                        <img className={category===item.category_name?"border":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
                
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu



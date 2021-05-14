import React from 'react'
import '../css/content.css'

const Content = () => {
    return (

        <div className="display_cities">

            <div className="top_section">
                <ul className="top_section_list">
                    <li>
                        <div className="tlv_default"></div>
                    </li>
                    <li className="static_tlv_header">
                        <h5>Tel Aviv</h5>
                        <p>38 C</p>
                    </li>
                    <li className="add_favorites">
                        <input type="button" value="Add to Favorites" />
                    </li>
                </ul>
            </div>{/*end top_section*/}


            <h2 className="dsc_heading">scattered clouds</h2>

        <div className="display_days_and_degrees">
                <div className="row">
                    <div className="col-sm-4 day_box">sunday</div>
                    <div className="col-sm-4 day_box">monday</div>
                    <div className="col-sm-4 day_box">tuesday</div>               
                    <div className="col-sm-4 day_box">wednesday</div>
                    <div className="col-sm-4 day_box">thursday</div>
                    <div className="col-sm-4 day_box">friday</div>
                    <div className="col-sm-12 day_box">saturday</div>   
                </div>
        </div>


            {/*
            <div className="row">
               
               <div className="sunday day_box col">day 1</div>
                <div className="monday day_box col">day 2</div>
                <div className="thuesday day_box col">day 3</div>
                <div className="wednesday day_box col">day 4</div>
                <div className="thursday day_box col">day 5</div>
                <div className="friday day_box col">day 6</div>
                <div className="saturday day_box col">day 7</div>
              
            </div>
 */}
        </div>



    )
}

export default Content

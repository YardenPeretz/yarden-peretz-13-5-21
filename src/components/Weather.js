import React from 'react'
import '../css/weather.css'

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
                    <div className="col-sm-3 day_box">sunday</div>
                    <div className="col-sm-3 day_box">monday</div>
                    <div className="col-sm-3 day_box">tuesday</div>
                    <div className="col-sm-3 day_box">wednesday</div>
                    <div className="col-sm-3 day_box">thursday</div>
                  
                </div>
            </div>


        </div>



    )
}

export default Content

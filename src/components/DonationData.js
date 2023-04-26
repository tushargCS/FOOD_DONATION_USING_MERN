import { Component } from "react";
import "./Donation.css";

class DonationData extends Component{
    render(){
        return (
            <div className={this.props.cName}>
                <div className="des-text">
                    <h2>{this.props.header}</h2>
                    <p>
                    {this.props.text}
                    </p>
                </div>

                <div className="image">
                        
                        <img alt="img" src={this.props.image1}/>
                    
                        <img alt="img" src={this.props.image2}/>
                </div>
        </div>
        )
    }
}

export default DonationData;
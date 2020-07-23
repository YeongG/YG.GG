import React,{Component} from 'react';
import './SummonerProfile.css'

class SummonerProfile extends Component {
    render() {
        return (
            <div className="SummonerWrap">
                <div className="ImgBorder" style={{background:`url(http://opgg-static.akamaized.net/images/borders2/${this.props.Tier.toLowerCase()}.png)`}}>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/profileicon/${this.props.ID}.png`} />
                </div>
                <div className="Summoner">
                    <div>
                        <p>{this.props.Name}</p>
                        <br/>
                        <br/>
                        <button>게임중?</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SummonerProfile;
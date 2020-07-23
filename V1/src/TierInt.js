import React, { Component } from 'react';
import './Tierint.css'

class TierInt extends Component {
    render() {
        return (
            <div className="TierInt">
                <div className="TierInt-left">
                    <img className="tierImg" src={`//opgg-static.akamaized.net/images/medals/${this.props.TierOriginal.toLowerCase()}_${this.props.Rank}.png`} alt="TierImg"/>
                </div>
                <div className="TierInt-right">
                    <p className="GameType">{this.props.GameType}</p>
                    <p className="TierText">{this.props.Tier}</p>
                    <p className="GameInfo"><span className="LeaguePointText">{this.props.LP} LP</span> / {this.props.Win}승 {this.props.Lose}패</p>
                    <p className="WinBar">승률 {this.props.WinBar}%</p>
                </div>
            </div>
        )
    }
}

export default TierInt;
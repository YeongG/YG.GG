import React , { Component } from 'react';
import './GameHistory.css';

class GameHistory extends Component {
    render() {
        return (
            <div className={this.props.WinLose==="승리"?"GameHistory Win":"GameHistory Lose"}>
                <div className="GameInt">
                    <p>{this.props.GameType}</p>
                    <div className={this.props.WinLose==="승리"?"WinBarLine":"LoseBarLine"}></div>
                    <p>{this.props.WinLose}</p>
                </div>
                <div className="GameInfoS">
                    <div className="CEOImageWrap"><img className="CEOImage" alt="championImg" src={`https://opgg-static.akamaized.net/images/lol/champion/${this.props.Engname}.png?image=w_46&v=1`} /></div>
                    <div className="GameSpell">
                        <img className="SpellImage" alt="SpellImage" src={`https://opgg-static.akamaized.net/images/lol/spell/${this.props.Spell1}.png?image=w_22&v=15354684000`} />
                        <img className="SpellImage" alt="SpellImage" src={`https://opgg-static.akamaized.net/images/lol/spell/${this.props.Spell2}.png?image=w_22&v=15354684000`} />
                    </div>
                    <div className="RoonWrap">
                        <img className="RoonImage ImgBlack" alt="RoonImage" src={`https://opgg-static.akamaized.net/images/lol/perk/${this.props.Perk1}.png?image=w_22&v=1`} style={{background:"black",borderRadius:"50%"}} />
                        <img className="RoonImage" alt="RoonImage" src={`https://opgg-static.akamaized.net/images/lol/perkStyle/${this.props.Perk2}.png?image=w_22&v=2`} />
                    </div>
                    <div className="ChampionNameWrap">
                        <p className="ChampionName">{this.props.name}</p>
                    </div>
                </div>
                <div className="KDA">
                    <p className="KDATitle">
                        <span className="Kill">{this.props.Kill}</span>/
                        <span className="Death">{this.props.Death}</span>/
                        <span className="Assist">{this.props.Assist}</span>
                    </p>
                    <p className="KillDet">{this.props.KillDet} 평점</p>
                </div>
                <div className="PlayerStats">
                    <p>레벨 {this.props.Level}</p>
                </div>
                <div className="ItemList">
                    <div className="ItemWrap">
                        <img className="ItemImg" alt="img" src={this.props.Item0===0?"https://opgg-static.akamaized.net/images/pattern/opacity.1.png":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.Item0}.png`} />
                        <img className="ItemImg" alt="img" src={this.props.Item1===0?"https://opgg-static.akamaized.net/images/pattern/opacity.1.png":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.Item1}.png`} />
                        <img className="ItemImg" alt="img" src={this.props.Item2===0?"https://opgg-static.akamaized.net/images/pattern/opacity.1.png":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.Item2}.png`} />
                        <img className="ItemImg" alt="img" src={this.props.Item6===0?"https://opgg-static.akamaized.net/images/pattern/opacity.1.png":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.Item6}.png`} />
                        <img className="ItemImg" alt="img" src={this.props.Item4===0?"https://opgg-static.akamaized.net/images/pattern/opacity.1.png":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.Item4}.png`} />
                        <img className="ItemImg" alt="img" src={this.props.Item5===0?"https://opgg-static.akamaized.net/images/pattern/opacity.1.png":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.Item5}.png`} />
                        <img className="ItemImg" alt="img" src={this.props.Item3===0?"https://opgg-static.akamaized.net/images/pattern/opacity.1.png":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${this.props.Item3}.png`} />
                    </div>
                    <p style={{fontSize:"0.8em"}}>
                        <img style={{verticalAlign:"middle"}} alt="WardImg" src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"/>
                        <span style={{verticalAlign:"middle"}}>제어 와드1</span>
                    </p>
                </div>
                <div className="AllPlayer">
                    <div className="Team">
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[0].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[0].player.summonerName}</span>
                        </div>
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[1].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[1].player.summonerName}</span>
                        </div>
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[2].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[2].player.summonerName}</span>
                        </div>
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[3].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[3].player.summonerName}</span>
                        </div>
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[4].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[4].player.summonerName}</span>
                        </div>
                    </div>
                    <div className="Team">
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[5].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[5].player.summonerName}</span>
                        </div>
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[6].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[6].player.summonerName}</span>
                        </div>
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[7].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[7].player.summonerName}</span>
                        </div> 
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[8].championId}.png`}/>
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[8].player.summonerName}</span>
                        </div>
                        <div className="PlayerWrap">
                            <img alt="PlayerChampionImg" className="PlayerChampionImg" src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${this.props.Players[9].championId}.png`}/> 
                            <span onClick={(e)=>{this.props.ONCLICK(e.target.textContent)}}> {this.props.Player[9].player.summonerName}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameHistory;
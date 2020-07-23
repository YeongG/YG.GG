import React, { Component } from 'react';
import Normal from './Normal.js';
import TierInt from './TierInt';
import GameHistory from './GameHistory';
import {get} from 'axios';
import SummonerProfile from './SummonerProfile';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GameDataInfo: [],
      name:"",
      GameStart:0,
      GameFinish:10,
    }
  }
  _AnotherSummoner = value => {
    this.setState({name:value});
    //setTimeout(()=>{this._GetData();},1);
    this._GetData();
  }
  componentDidMount(){
    get("http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json").then(result => this.setState({ID:result.data.data}));
    get("http://ddragon.leagueoflegends.com/cdn/9.21.1/data/ko_KR/champion.json").then(result => this.setState({IDKO:result.data.data}));
    get("http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/summoner.json").then(result => this.setState({Spell:result.data.data}));
  }
  _EnterChk = (e) => {
    if(e.keyCode === 13) this._GetData();
  }
  _SetName = (e) => {
    this.setState({name:e.target.value});
  }
  _GetData = () => {
    this.setState({GameDataInfo:undefined});
    get(`/lol/summoner/v4/summoners/by-name/${this.state.name}?api_key=RGAPI-37b6de4a-b8c8-4eea-b243-148b12a64b2e`).then(result => {
      this.setState({AccInfo:result.data});
      this._GetLeague();
      
    })
  }
  _GetLeague = () => {
    get(`/lol/league/v4/entries/by-summoner/${this.state.AccInfo.id}?api_key=RGAPI-37b6de4a-b8c8-4eea-b243-148b12a64b2e`).then(result => {
      for(var i=0;i<result.data.length;i++) {
        if(result.data[i].queueType==="RANKED_SOLO_5x5") {
          this.setState({LeagueInfo:result.data[i]}); 
          this._GetGameInfo();
          return ;
        }
      }
      alert("솔로 랭크가 없어요!");
      
    })
  }
  _GetGameInfo = () => {
    var arr=[];
    get(`/lol/match/v4/matchlists/by-account/${this.state.AccInfo.accountId}?endIndex=${this.state.GameFinish}&beginIndex=${this.state.GameStart}&api_key=RGAPI-37b6de4a-b8c8-4eea-b243-148b12a64b2e`).then(result => {
      arr = result.data.matches;
      this.setState({Champ:arr});
      return arr;
    })
   .then(async arr => {
     for(var i=0;i<arr.length;i++) {
       var data = await get(`/lol/match/v4/matches/${this.state.Champ[i].gameId}?api_key=RGAPI-37b6de4a-b8c8-4eea-b243-148b12a64b2e`);
       console.log(data.data);
       var state = [];
       var player;
       if(this.state.GameDataInfo) state = this.state.GameDataInfo;
       else state = [];
       var obj={};
       obj.GameType=data.data.gmaeMode;
       obj.Player=data.data.participantIdentities;
       obj.Players=data.data.participants;
       for(var j=0;j<10;j++) {
         if(data.data.participants[j].championId===arr[i].champion) {
          player = data.data.participants[j];
           break;
         }
       }
       for(j=0;j<10;j++) {
        for(var k in this.state.ID) {
          if(this.state.ID[k].key==data.data.participants[j].championId) {
            if(data.data.participants[j].championId===arr[i].champion)
              obj.name=this.state.IDKO[k].name; 
            data.data.participants[j].championId=this.state.ID[k].id;
            break;
          }
        }
       }
       for(var key in this.state.Spell) {
        if(player.spell1Id==this.state.Spell[key].key) 
          obj.Spell1 = this.state.Spell[key].id;
        if(player.spell2Id==this.state.Spell[key].key) 
          obj.Spell2 = this.state.Spell[key].id;
       }
       obj.Assist = player.stats.assists;
       obj.Level = player.stats.champLevel;
       obj.Death = player.stats.deaths;
       obj.Item0 = player.stats.item0;
       obj.Item1 = player.stats.item1;
       obj.Item2 = player.stats.item2;
       obj.Item3 = player.stats.item3;
       obj.Item4 = player.stats.item4;
       obj.Item5 = player.stats.item5;
       obj.Item6 = player.stats.item6;
       obj.Kill = player.stats.kills;
       obj.WinLose = player.stats.win;
       obj.Engname = player.championId
       obj.perk0 = player.stats.perk0;
       obj.perk1 = player.stats.perkSubStyle;
       state.push(obj);
       this.setState({GameDataInfo:state});
     }
     
   })
   
  }
  render() {
    return (
      <React.Fragment>
        <Normal />
        <div className="input-wrap">
          <input type="text" className="find-input" placeholder="소환사명" onChange={this._SetName}  value={this.state.name} onKeyDown={this._EnterChk}/>
          <button id="findButton" onClick={this._GetData}>.GG</button>
        </div>
        <div className="playerWrap">   
        {this.state.AccInfo&&this.state.LeagueInfo?<SummonerProfile
          Name = {this.state.AccInfo.name}
          Tier = {this.state.LeagueInfo.tier}
          ID = {this.state.AccInfo.profileIconId}
        />:""}
          <div className="player">
            {this.state.LeagueInfo?<TierInt TierOriginal={this.state.LeagueInfo.tier} Rank={this.state.LeagueInfo.rank==='I'?1:this.state.LeagueInfo.rank==='II'?2:this.state.LeagueInfo.rank==='III'?3:this.state.LeagueInfo.rank==='IV'?4:''} GameType="솔로랭크" Tier={this.state.LeagueInfo.tier+' '+this.state.LeagueInfo.rank} LP={this.state.LeagueInfo.leaguePoints} Win={this.state.LeagueInfo.wins} Lose={this.state.LeagueInfo.losses} WinBar={((this.state.LeagueInfo.wins/(this.state.LeagueInfo.wins+this.state.LeagueInfo.losses))*100).toFixed(2)} />:''}
            {this.state.GameDataInfo?this.state.GameDataInfo.map(now =>{
              return <GameHistory 
              GameType="CLASSIC"
              Day="1"
              WinLose={now.WinLose?"승리":"패배"}
              Perk1 = {now.perk0}
              Perk2 = {now.perk1}
              Spell1 = {now.Spell1}
              Spell2 = {now.Spell2}
              name={now.name}
              Kill={now.Kill}
              Death={now.Death}
              Assist={now.Assist}
              KillDet={now.Death===0?"Perfect":((now.Kill+now.Assist)/now.Death).toFixed(2)}
              Level={now.Level}
              Item0={now.Item0}
              Item1={now.Item1}
              Item2={now.Item2}
              Item3={now.Item3}
              Item4={now.Item4}
              Item5={now.Item5}
              Item6={now.Item6}
              Player={now.Player}
              Tier={this.state.LeagueInfo.tier}
              Rank={this.state.LeagueInfo.rank}
              Players={now.Players}
              Engname = {now.Engname}
              ONCLICK = {this._AnotherSummoner}
              />
            }):""}
          </div>
          <div className="BtnWrap">
            <img className="MoreBtn" src="https://image.flaticon.com/icons/svg/61/61733.svg" onClick={()=>{var start = this.state.GameStart; var finish = this.state.GameFinish; this.setState({GameStart:start+10}); this.setState({GameFinish:finish+10}); this._GetGameInfo();}}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;

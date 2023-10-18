import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles=[
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "How England won incredible World Cup final",
        "description": "Get in the mood for the 2023 men's Cricket World Cup by reliving the closing stages of the 2019 final.",
        "url": "http://www.bbc.co.uk/sport/av/cricket/66936104",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/17CE4/production/_131280579_p0gh83m1.jpg",
        "publishedAt": "2023-10-04T09:52:19.0227712Z",
        "content": "Get in the mood for the 2023 men's Cricket World Cup by reliving the closing stages of the 2019 final, when England beat New Zealand in one of the most amazing games of cricket ever played.\r\nREAD MOR… [+83 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor(){
    super();
    console.log("Hello i am a construtor from news component");
    this.state={
      articles:this.articles,
      loading:false
  }}

  render() {
    return (
      <div className="container my-3">
        <h2>New app- Top Headline</h2>
        {/* this is a news components */}

        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key ={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)}  imageurl={element.urlToImage} url={element.url}></NewsItem>
          </div>
          {/* <div className="col-md-4">
            <NewsItem title="My title" description="This is a news" imageurl="http://lovelyfotos.l.o.pic.centerblog.net/o/98a8ed98.jpg"></NewsItem>
          </div>
          <div className="col-md-4">
            <NewsItem title="My title" description="This is a news"imageurl="http://lovelyfotos.l.o.pic.centerblog.net/o/98a8ed98.jpg"></NewsItem>
          </div> */}
        })}
        </div>
      </div>
    );
  }
}

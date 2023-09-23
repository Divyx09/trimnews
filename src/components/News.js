import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Rob Frehse, Artemis Moshtaghian, Christina Maxouris",
        "title": "Bus carrying students crashes, leaving 2 adults dead - CNN",
        "description": "Two adults were killed and multiple students were injured after their bus “tumbled down a 50-foot ravine,” Thursday on Interstate 84 in Orange County, New York, Gov. Kathy Hochul said in an evening news conference.",
        "url": "https://www.cnn.com/2023/09/21/us/bus-crash-i-84-new-york/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230921115619-01-ny-bus-crash-0921.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-09-22T04:05:00Z",
        "content": "Two adults were killed and multiple students were injured after their bus tumbled down a 50-foot ravine, Thursday on Interstate 84 in Orange County, New York, Gov. Kathy Hochul said in an evening new… [+2811 chars]"
      },
      {
        "source": { "id": null, "name": "Hollywood Reporter" },
        "author": "Lesley Goldberg",
        "title": "Writers Guild and Studios Conclude Latest Bargaining Session, More Talks Expected Friday - Hollywood Reporter",
        "description": "During the latest day of negotiations, artificial intelligence, viewership-based compensation and the size of writers' rooms continued to be top issues.",
        "url": "https://www.hollywoodreporter.com/business/business-news/writers-guild-and-studios-conclude-latest-bargaining-session-more-talks-expected-friday-1235596641/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/2023_05-WGA-06.jpg?w=1024",
        "publishedAt": "2023-09-22T03:52:09Z",
        "content": "After a long day of bargaining on issues including AI and data transparency, Thursday’s meeting between the Writers Guild of America and the Alliance of Motion Picture and Television Producers conclu… [+2829 chars]"
      },
      {
        "source": { "id": null, "name": "YouTube" },
        "author": null,
        "title": "New York Giants vs. San Fransisco 49ers | 2023 Week 3 Game Highlights - NFL",
        "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
        "url": "https://www.youtube.com/watch?v=Ihjw0UClLnM",
        "urlToImage": "https://i.ytimg.com/vi/Ihjw0UClLnM/maxresdefault.jpg",
        "publishedAt": "2023-09-22T03:34:52Z",
        "content": null
      }  
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-4">
        <h2>BHARAT TIMES - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}> 
                <NewsItems
                  title={e.title.slice(0, 44)}
                  description={e.description.slice(0, 80)}
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

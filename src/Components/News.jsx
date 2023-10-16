import React, {Component} from 'react'
import NewsItem from './NewsItem'


export  class News extends Component{
 articles=[
   {
      "source":{
         "id":"espn",
         "name":"ESPN"
      },
      "author":"Tim Kurkjian",
      "title":"MLB playoffs 2023: Despite Orioles' ALDS loss, the future is bright - ESPN - ESPN",
      "description":"The Orioles season ended far sooner than anyone expected. But for players, fans and the franchise, the future is still so bright.",
      "url":"https://www.espn.com/mlb/story/_/id/38629031/orioles-alds-loss-texas-rangers-playoffs-2023",
      "urlToImage":"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1011%2Fr1236910_1296x729_16%2D9.jpg",
      "publishedAt":"2023-10-11T04:28:00Z",
      "content":"ARLINGTON -- The looks on the faces of those 46,000 Baltimore Orioles fans as they quietly exited Camden Yards on Sunday after a discouraging loss to the Rangers was not one of anger, but of sadness.… [+8450 chars]"
   },
   {
      "source":{
         "id":"cnn",
         "name":"CNN"
      },
      "author":"Nadeen Ebrahim, Abeer Salman, Kareem Khadder",
      "title":"‘We have no water’: Gaza faces deeper humanitarian crisis as Israel tightens its hold - CNN",
      "description":"A humanitarian crisis is swiftly unfolding in Gaza, as trapped residents, many cut off from food and electricity, face a fourth day of Israeli airstrikes in response to Hamas’ deadly attack on Israel, which killed at least 1,200 people per public broadcaster …",
      "url":"https://www.cnn.com/2023/10/10/middleeast/gaza-complete-siege-israel-intl/index.html",
      "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/231010113547-01-gaza-deteriorating-israel-strikes-1010.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt":"2023-10-11T03:51:00Z",
      "content":"A humanitarian crisis is swiftly unfolding in Gaza, as trapped residents, many cut off from food and electricity, face a fourth day of Israeli airstrikes in response to Hamas deadly attack on Israel,… [+4804 chars]"
   },
   {
      "source":{
         "id":"cnn",
         "name":"CNN"
      },
      "author":"Muhammad Darwish, Nic Robertson, Artemis Moshtaghian, Amir Tal, Ivana Kottasová, Sana Noor Haq",
      "title":"Children found ‘butchered’ in Israeli kibbutz, as horror of Hamas’ attack on border communities begins to emerge - CNN",
      "description":"Bodies of Israeli residents and Palestinian militants lay outside of burned-out homes in the Israeli kibbutz Kfar Aza on Tuesday, days after Hamas launched a large-scale surprise assault on Israel, sending heavily armed fighters pouring across the border from…",
      "url":"https://www.cnn.com/2023/10/10/middleeast/israel-kibbutzim-kfar-aza-beeri-urim-hamas-attack-intl/index.html",
      "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/231010124836-02-kibbutz-kfar-aza-cnn.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt":"2023-10-11T03:41:00Z",
      "content":"Bodies of Israeli residents and Palestinian militants lay outside of burned-out homes in the Israeli kibbutz Kfar Aza on Tuesday, days after Hamas launched a large-scale surprise assault on Israel, s… [+8063 chars]"
   },
   {
      "source":{
         "id":null,
         "name":"CNBC"
      },
      "author":"Amanda Macias, Sam Meredith, Ruxandra Iordache, Natasha Turak",
      "title":"Israel-Hamas war live updates: First U.S. weapons arrive in Israel, Biden calls Hamas attack 'sheer evil' - CNBC",
      "description":"The military wing of Hamas on Tuesday says it launched a volley of rockets toward Ashkelon \"in response to the displacement of civilians.\"",
      "url":"https://www.cnbc.com/2023/10/10/israel-hamas-gaza-live-updates.html",
      "urlToImage":"https://image.cnbcfm.com/api/v1/image/107314749-1696967314567-AP23282600292422.jpg?v=1696977398&w=1920&h=1080",
      "publishedAt":"2023-10-11T03:40:00Z",
      "content":"The Israeli Defense Force said the first plane carrying U.S. armaments has arrived in southern Israel. \"Our common enemies know that the cooperation between our militaries is stronger than ever, \" th… [+1343 chars]"
   },
   {
      "source":{
         "id":null,
         "name":"Push Square"
      },
      "author":"Sammy Barker",
      "title":"PS5 Slim's Digital Edition Gets a Stealth Price Increase in USA - Push Square",
      "description":"Play more, pay more",
      "url":"https://www.pushsquare.com/news/2023/10/ps5-slims-digital-edition-gets-a-stealth-price-increase-in-usa",
      "urlToImage":"https://images.pushsquare.com/8e8282ddb9d72/1280x720.jpg",
      "publishedAt":"2023-10-11T03:15:00Z",
      "content":"Sony is using the opportunity of the PS5s smaller, slimmer relaunch to stealthily bump the price of the Digital Edition in the United States. While we already know youll need to pay extra for a stand… [+830 chars]"
   },
   {
      "source":{
         "id":"nhl-news",
         "name":"NHL News"
      },
      "author":null,
      "title":"Bedard has assist in NHL debut, Blackhawks rally past Penguins - NHL.com",
      "description":"Dickinson breaks tie late for Chicago; Crosby scores for Pittsburgh",
      "url":"https://www.nhl.com/news/chicago-blackhawks-pittsburgh-penguins-game-recap-october-10",
      "urlToImage":"https://media.d3.nhle.com/image/private/t_ratio16_9-size50/v1696995171/prd/cu76do41dnx8df0useb2.jpg",
      "publishedAt":"2023-10-11T03:10:12Z",
      "content":"Guttman then scored on a wrist shot from the inside of the right circle, tying it 2-2 at 10:05 of the third.\r\nDickinson dove at a pass from Perry for a shot that put Chicago ahead 3-2 before Foligno … [+1016 chars]"
   },
   {
      "source":{
         "id":null,
         "name":"[Removed]"
      },
      "author":null,
      "title":"[Removed]",
      "description":"[Removed]",
      "url":"https://removed.com",
      "urlToImage":null,
      "publishedAt":"1970-01-01T00:00:00Z",
      "content":"[Removed]"
   },
   {
      "source":{
         "id":null,
         "name":"New York Post"
      },
      "author":"Andrew Battifarano",
      "title":"Travis Kelce, Taylor Swift had 'chill night' for Chiefs star's birthday - New York Post ",
      "description":"Whether or not it was the birthday of his “Wildest Dreams” or not, Travis Kelce did get to celebrate with Taylor Swift.",
      "url":"https://nypost.com/2023/10/10/travis-kelce-taylor-swift-had-chill-night-for-chiefs-stars-birthday/",
      "urlToImage":"https://nypost.com/wp-content/uploads/sites/2/2023/10/newspress-collage-7hr6uf6bm-1696989929796.jpg?quality=75&strip=all&1696975604&w=1024",
      "publishedAt":"2023-10-11T02:34:00Z",
      "content":"Whether or not it was the birthday of his “Wildest Dreams” or not, Travis Kelce did get to celebrate with Taylor Swift. \r\nThe Chiefs tight end turned 34 on Thursday and hung out with the pop star on … [+2629 chars]"
   },
   {
      "source":{
         "id":"the-washington-post",
         "name":"The Washington Post"
      },
      "author":"Anne Branigin, Herb Scribner",
      "title":"Tim Ballard, of 'Sound of Freedom' fame, accused of sexual misconduct - The Washington Post",
      "description":"Tim Ballard, the self-styled child sex trafficking rescuer who inspired the hit movie ‘Sound of Freedom,’ was accused in a lawsuit of sexually assaulting women on his missions.",
      "url":"https://www.washingtonpost.com/style/2023/10/10/ballard-lawsuit-sound-of-freedom/",
      "urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3ZSXUDVBEDYVSCI2WRG4YZO4Y4_size-normalized.jpg&w=1440",
      "publishedAt":"2023-10-11T02:12:44Z",
      "content":"Comment on this story\r\nComment\r\nTim Ballard, whose tales of going undercover to rescue children from international sex traffickers inspired the box office hit Sound of Freedom, has been accused of se… [+5475 chars]"
   },
   {
      "source":{
         "id":"abc-news",
         "name":"ABC News"
      },
      "author":"Jolie Lash",
      "title":"6.3 magnitude earthquake hits Afghanistan days after devastating weekend quakes - ABC News",
      "description":"A 6.3 magnitude earthquake has shaken Afghanistan again.",
      "url":"https://abcnews.go.com/International/63-magnitude-earthquake-hits-afghanistan-days-after-devastating/story?id=103879866",
      "urlToImage":"https://i.abcnewsfe.com/a/ff22677f-a453-490d-9ea1-db249c6e0566/AfghanistanEarthquake_1696989191629_hpMain_16x9.jpg?w=992",
      "publishedAt":"2023-10-11T01:41:17Z",
      "content":"A 6.3 magnitude earthquake has shaken Western Afghanistan, just days after two quakes of the same magnitude left more than 1,200 dead.\r\nThe quake struck 28 kilometers (17.39 miles) Northwest of Hert,… [+710 chars]"
   },
   {
      "source":{
         "id":"cnn",
         "name":"CNN"
      },
      "author":"Nell Lewis",
      "title":"‘Hauntingly beautiful’ image of horseshoe crab wins Wildlife Photographer of the Year 2023 - CNN",
      "description":"A ‘hauntingly beautiful’ image of horseshoe crab and a beached orca taking its final breaths were among the winning images of the Wildlife Photographer of the Year 2023 competition.",
      "url":"https://www.cnn.com/travel/wildlife-photographer-of-the-year-2023-scn-c2e-spc-intl/index.html",
      "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/231010160604-03-card-wildlife-photographer-of-the-year.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt":"2023-10-11T01:23:00Z",
      "content":"Editors Note: Call to Earth is a CNN editorial series committed to reporting on the environmental challenges facing our planet, together with the solutions. Rolexs Perpetual Planet initiative has par… [+2938 chars]"
   },
   {
      "source":{
         "id":"fox-news",
         "name":"Fox News"
      },
      "author":"Elizabeth Elkind",
      "title":"GOP lawmaker vows to support McCarthy in House-wide speaker vote despite pitches from Scalise, Jordan - Fox News",
      "description":"House GOP Rep. Carlos Gimenez said he is committed to voting for former House Speaker Kevin McCarthy on the House floor when Democrats and Republicans gather to elect a new speaker.",
      "url":"https://www.foxnews.com/politics/gop-lawmaker-support-mccarthy-house-wide-speaker-vote-despite-pitches-scalise-jordan",
      "urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2023/10/GettyImages-1319088284.jpg",
      "publishedAt":"2023-10-11T01:03:00Z",
      "content":"EXCLUSIVE: House GOP Rep. Carlos Gimenez, R-Fla., will not vote for either of the formally-declared candidates for speaker and will instead back former Speaker Kevin McCarthy, R-Calif., on the House … [+2005 chars]"
   },
   {
      "source":{
         "id":"cnn",
         "name":"CNN"
      },
      "author":"Amanda Musa",
      "title":"Stroke could cause nearly 10 million deaths per year by 2050, report says - CNN",
      "description":"The number of people who die from stroke worldwide will jump 50% by 2050 if no significant action is taken to limit the prevalence of stroke and its risk factors, according to a new report from the World Stroke Organization-Lancet Neurology Commission, a new …",
      "url":"https://www.cnn.com/2023/10/10/health/stroke-death-report/index.html",
      "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/231010160136-stroke-scan-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt":"2023-10-10T23:51:00Z",
      "content":"The number of people who die from stroke worldwide will jump 50% by 2050 if no significant action is taken to limit the prevalence of stroke and its risk factors, according to a new report from the W… [+4107 chars]"
   },
   {
      "source":{
         "id":"reuters",
         "name":"Reuters"
      },
      "author":"Anirban Sen, Echo Wang",
      "title":"Birkenstock prices US IPO at $46 per share - Reuters",
      "description":"German premium footwear maker Birkenstock Holding <a href=\"https://www.reuters.com/markets/companies/BIRK.N\" target=\"_blank\">(BIRK.N)</a> priced its U.S. initial public offering (IPO) at the middle of its indicated price range at $46 per share, the company sa…",
      "url":"https://www.reuters.com/markets/deals/birkenstock-prices-us-ipo-46-per-share-sources-2023-10-10/",
      "urlToImage":"https://www.reuters.com/resizer/E4yc9oxnQHVVmxmwo4LTJ2KK97s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AKBQ4EHVKZNQBFRE25DS7DOFXU.jpg",
      "publishedAt":"2023-10-10T23:50:00Z",
      "content":"NEW YORK, Oct 10 (Reuters) - German premium footwear maker Birkenstock Holding (BIRK.N) priced its U.S. initial public offering (IPO) at the middle of its indicated price range at $46 per share, the … [+3288 chars]"
   },
   {
      "source":{
         "id":"cbs-news",
         "name":"CBS News"
      },
      "author":"Alex Sundby",
      "title":"Map, aerial images show where Hamas attacked Israeli towns near Gaza Strip - CBS News",
      "description":"Images from the grisly attack by Hamas militants in southern Israel near the Gaza Strip reveal some of the devastating aftermath from the surprise strike.",
      "url":"https://www.cbsnews.com/news/map-images-israel-gaza-strip-hamas/",
      "urlToImage":"https://assets2.cbsnewsstatic.com/hub/i/r/2023/10/10/3a72645e-7f81-490b-a183-5d718c33cdbb/thumbnail/1200x630/70cbe3230b2e8c20879a5c84284b2d3b/2023-10-07t121055z-601011128-rc2ln3ac62fu-rtrmadp-3-israel-palestinians.jpg?v=69042d5753ca4b526d6a54f60ee177ca",
      "publishedAt":"2023-10-10T23:49:00Z",
      "content":"Images from the grisly attack by Hamas militants in southern Israel near the Gaza Strip reveal some of the devastating aftermath from the surprise strike. A map shows the highly coordinated assault t… [+5679 chars]"
   },
   {
      "source":{
         "id":"fox-news",
         "name":"Fox News"
      },
      "author":"Gabriele Regalbuto",
      "title":"Humanitarian efforts in Israel are supplying lone soldiers food and necessities upon request - Fox News",
      "description":"As the Israeli-Hamas war continues, soldiers are deploying and asking for assistance from civilians who are willing and able to help get food, supplies and necessities to them.",
      "url":"https://www.foxnews.com/world/israel-hamas-war-lone-soldier-military-donations-help-support",
      "urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2023/10/supplies-for-soldiers-israel.jpg",
      "publishedAt":"2023-10-10T23:43:00Z",
      "content":"On Saturday morning, Israeli civilians were startled awake by buzzing phones imparting terrifying messages of rocket attacks and terrorist infiltrations within the State of Israel.\r\nAirstrikes from G… [+3887 chars]"
   },
   {
      "source":{
         "id":"fortune",
         "name":"Fortune"
      },
      "author":"Ben Weiss",
      "title":"FTX was a boys’ club. When Caroline Ellison asked Sam Bankman-Fried for equity in the hedge fund she ran, he said ‘it was too complicated’ - Fortune",
      "description":"The former CEO of Alameda Research had only a half-a-percentage-point stake in FTX and no equity in the crypto hedge fund she once led, she testified on Tuesday afternoon.",
      "url":"https://fortune.com/crypto/2023/10/10/caroline-ellison-ftx-sam-bankman-fried-sbf-equity-personal-loans-gary-wang-nishad-singh-ryan-salame/",
      "urlToImage":"https://content.fortune.com/wp-content/uploads/2023/10/GettyImages-1728395116-e1696976881647.jpg?resize=1200,600",
      "publishedAt":"2023-10-10T23:29:00Z",
      "content":"Caroline Ellison is arguably the star witness in the governments case against Sam Bankman-Fried, the former CEO of the bankrupt crypto exchange FTX whos on trial for fraud. And what became apparent d… [+3483 chars]"
   },
   {
      "source":{
         "id":null,
         "name":"CBS Sports"
      },
      "author":"",
      "title":"Cowboys' Dan Quinn 'bummed' about blowout loss to 49ers but determined not to 'let this game beat us twice' - CBS Sports",
      "description":"Quinn knows the team needs to bounce back from the defeat",
      "url":"https://www.cbssports.com/nfl/news/cowboys-dan-quinn-bummed-about-blowout-loss-to-49ers-but-determined-not-to-let-this-game-beat-us-twice/",
      "urlToImage":"https://sportshub.cbsistatic.com/i/r/2023/10/10/44b864a3-e3b4-468d-aa33-aac4be6ee9b5/thumbnail/1200x675/7ab2ab7307c3b6319334370ac2e23ced/dan-quinn.jpg",
      "publishedAt":"2023-10-10T23:16:00Z",
      "content":"On Sunday night, the Dallas Cowboys suffered a blowout loss to the San Francisco 49ers. The Niners exposed all three phases of the Cowboys and went on to defeat them 42-10.\r\nThe Cowboys loss has been… [+2345 chars]"
   },
   {
      "source":{
         "id":null,
         "name":"The Weather Channel"
      },
      "author":"The Weather Channel",
      "title":"2023 Annular Eclipse Cloud Cover Forecast | Weather.com - The Weather Channel",
      "description":"Here's where skies will be clear or cloudy for Saturday's annular solar eclipse. - Articles from The Weather Channel | weather.com",
      "url":"https://weather.com/forecast/national/news/2023-10-10-2023-annular-eclipse-cloud-cover-weather-forecast",
      "urlToImage":"https://s.w-x.co/promo_clouds_eclipse.jpg",
      "publishedAt":"2023-10-10T23:02:47Z",
      "content":"At a Glance\r\n<ul><li>The full annular solar eclipse on Saturday begins in Oregon at 9:13 a.m. PDT and ends in southern Texas at 12:03 p.m. CDT.</li><li>Texas and southern Utah could be prime viewing … [+2944 chars]"
   },
   {
      "source":{
         "id":null,
         "name":"Yahoo Entertainment"
      },
      "author":"ANDREW DeMILLO",
      "title":"Scrutiny of Arkansas governor's $19,000 lectern deepens after new records are released - Yahoo News",
      "description":"New public records have widened questions over when Arkansas Gov. Sarah Huckabee Sanders' office planned to use Republican Party funds to reimburse the state...",
      "url":"https://news.yahoo.com/scrutiny-arkansas-governors-19-000-225046503.html",
      "urlToImage":"https://s.yimg.com/ny/api/res/1.2/.zhD95.iMgHuw4Cf23uASg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/cadac06b5e6576e416d68fc71b618487",
      "publishedAt":"2023-10-10T22:50:46Z",
      "content":"LITTLE ROCK, Ark. (AP) New public records have widened questions over when Arkansas Gov. Sarah Huckabee Sanders' office planned to use Republican Party funds to reimburse the state for a $19,000 lect… [+4457 chars]"
   }
]
  
constructor(){
  super();
  this.state={
    articles: this.articles,
  loading : false
  }
}
async componentDidMount(){
  const proxyUrl = "https://corsproxy.io/?"
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69bf9ad8043a4a1fa89e253ba5eeca35`;
  let data= await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData)
}
  
  
render(){
  return(<>
    <div className="row container my-0 mx-5">
      <h5 className="text-center bg-dark p-2" style={{color:"white"}}
        >NewsMonkey- Top Headlines</h5>
      {this.state.articles.map((element)=>{
   return(
    <div className="col-md-4">
              <NewsItem urlToImage={element.urlToImage} title={element.title} description={element.description} /> 
        </div>
   )
      })}
   </div>
  </>
  )}}

export default News
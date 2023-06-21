import "../trendingTag/trendingtagstyle.scss"
export default function TrendingTag(props) {
  return (
    <div className="trending-layout">
      <div className="trending-header">Trending Tags</div>
      <div className="trading-tag-container">
        {props.data.map(item => (
          <div className="tranding-container" key={item.id}>
            <img src={item.logo} alt="#" />
            <div className="tranding-content">
              <label className="title">{item.title}</label>
              <div className="article">
                <div className="dot"></div>
                <label className="article">{item.article} Articles this week</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
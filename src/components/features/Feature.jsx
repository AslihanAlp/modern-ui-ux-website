import "./feature.css"

const Feature = ({title,text}) => {
  return (
    <div className="gbt3__features-container__features">
      <div className="gbt3__features-container__features-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gbt3__features-container__features-text">
        <p>{text}</p>
      </div>
    </div>
  )
}
export default Feature


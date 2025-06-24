

export const GifItem = ({ id, title, imgurl }) => {
  return (
    <div className="card">
      <img 
        src={imgurl}
        alt={title} />
      <p>{title}</p>
    </div>
  )
}

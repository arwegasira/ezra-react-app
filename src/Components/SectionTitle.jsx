const SectionTitle = ({ title, textSize }) => {
  return (
    <h2
      className={`text-lg md:${textSize} font-medium tracking-wider capitalize`}
    >
      {title}
    </h2>
  )
}
export default SectionTitle

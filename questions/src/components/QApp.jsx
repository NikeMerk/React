function QApp(props) {
	let stepProgress = (100 / props.arr.length) * props.step ;
  return (
    <div className="question-app">
      <div className="progress-bar">
        <div className="progress-bar__line" style={{ width : `${stepProgress}%` }}></div>
      </div>
      <h2 className="question-title">{props.question.title}</h2>
      <ul className="question-list">
        {props.question.variants.map((variant, index) => (
          <li
            key={variant}
            className="question__item"
            onClick={() => props.clickVariant(index)}
          >
            {variant}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default QApp;

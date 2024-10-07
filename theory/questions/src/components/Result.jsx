import QApp from "./QApp";
import App from "../App";
function Result(props) {
  return (
    <div className="result">
      <div className="image__block"></div>
      <h3 className="result__title">{`${props.result} из 7 правельных ответов`}</h3>
      <a href="/">
        <button className="result__button">Пробовать снова</button>
      </a>
    </div>
  );
}
export default Result;

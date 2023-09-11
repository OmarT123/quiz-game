/* eslint-disable react/prop-types */
export default function Question(props) {
  var style1 = {};
  if (props.gameState === 0) {
    if (props.correctAnswer === props.answers[0]) {
      style1 = { backgroundColor: "#94d7a2" };
    } else if (props.buttonClicked === props.answers[0]) {
      style1 = { backgroundColor: "#f8bcbc" };
    } else {
      style1 = { opacity: 0.5 };
    }
  } else {
    if (props.buttonClicked === props.answers[0]) {
      style1 = { backgroundColor: "#bac4f7" };
    }
  }

  var style2 = {};
  if (props.gameState === 0) {
    if (props.correctAnswer === props.answers[1]) {
      style2 = { backgroundColor: "#94d7a2" };
    } else if (props.buttonClicked === props.answers[1]) {
      style2 = { backgroundColor: "#f8bcbc" };
    } else {
      style2 = { opacity: 0.5 };
    }
  } else {
    if (props.buttonClicked === props.answers[1]) {
      style2 = { backgroundColor: "#bac4f7" };
    }
  }

  var style3 = {};
  if (props.gameState === 0) {
    if (props.correctAnswer === props.answers[2]) {
      style3 = { backgroundColor: "#94d7a2" };
    } else if (props.buttonClicked === props.answers[2]) {
      style3 = { backgroundColor: "#f8bcbc" };
    } else {
      style3 = { opacity: 0.5 };
    }
  } else {
    if (props.buttonClicked === props.answers[2]) {
      style3 = { backgroundColor: "#bac4f7" };
    }
  }
  var style4 = {};
  if (props.gameState === 0) {
    if (props.correctAnswer === props.answers[3]) {
      style4 = { backgroundColor: "#94d7a2" };
    } else if (props.buttonClicked === props.answers[3]) {
      style4 = { backgroundColor: "#f8bcbc" };
    } else {
      style4 = { opacity: 0.5 };
    }
  } else {
    if (props.buttonClicked === props.answers[3]) {
      style4 = { backgroundColor: "#bac4f7" };
    }
  }
  return (
    <div className="question">
      <h2 className="question-header">{props.question}</h2>
      <div className="buttons">
        <button
          className="question-button"
          style={style1}
          onClick={(event) => props.handleClick(event, props.id)}
          name={props.answers[0]}
        >
          {props.answers[0]}
        </button>
        <button
          className="question-button"
          onClick={(event) => props.handleClick(event, props.id)}
          name={props.answers[1]}
          style={style2}
        >
          {props.answers[1]}
        </button>
        <button
          className="question-button"
          onClick={(event) => props.handleClick(event, props.id)}
          name={props.answers[2]}
          style={style3}
        >
          {props.answers[2]}
        </button>
        <button
          className="question-button"
          onClick={(event) => props.handleClick(event, props.id)}
          name={props.answers[3]}
          style={style4}
        >
          {props.answers[3]}
        </button>
      </div>
      <hr className="separator"></hr>
    </div>
  );
}

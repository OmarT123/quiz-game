/* eslint-disable react/prop-types */
export default function Start(props) {
  return (
    <div className="start-screen">
      <h1>Quizzical</h1>
      <button onClick={props.handleClick}>Start Game</button>
    </div>
  );
}

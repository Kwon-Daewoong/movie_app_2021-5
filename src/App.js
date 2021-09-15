
function App() {
  return (
    <div>
      <h1>hello react</h1>
      <Food fav="kimchi" someting={true} />
    </div>
  );
}
function Food() {
  return <h1>I like food</h1>
}
export default App;

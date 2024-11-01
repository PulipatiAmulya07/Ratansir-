function App(){
  const familyFriends=['Anu','Suresh','Naresh'];
  const schoolFriends=[...familyFriends,'Deepika','Siri','Manju','Sowmya'];
  const friends=schoolFriends.map((friend,index)=>
                                          (<li key={index}>{friend}</li>));
  return(
    <>
    <h1>Friend Ship...</h1>
    <p>{friends}</p>
    </>
  )
}
export default App;
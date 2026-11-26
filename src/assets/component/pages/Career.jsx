export default function Career() {
  return (
    <>
      <section className="head">
        <h1>Career</h1>
        <p>this is a career page.</p>
        
        <Data value="name:yash, age=10" data="msg:hello, surname:belim" />
        <Data />
        <Data />
      </section>
    </>
  );
}

function Data(prop) {
  return (
    <>
        
      <div>Data</div>
      <h3>{prop.value}</h3>
      <h3>{prop.data}</h3>
    
    </>
  );
}

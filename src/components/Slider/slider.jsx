const Slider = (skills) => {
  return (
    <div>
      <div>
        <h1>Habilidades Blandas</h1>
        {skills && skills.soft.map((sf) => (
          <div key={sf.id}>
            <h2>{sf.title}</h2>
            <p>{sf.description}</p>
          </div>
        ))}
      </div>

      <hr />

      <div>
        <h1>Habilidades Tecnicas</h1>
        {skills && skills.tech.map((th) => (
          <div key={th.id}>
            <h2>{th.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

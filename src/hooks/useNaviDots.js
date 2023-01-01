

const Dot = ({ num, scrollidx }) => {

  return (
    <div style={{
      width: 10,
      height: 10,
      border: "1px solid var(--border)",
      borderRadius: 999,
      backgroundColor: scrollidx === num ? "var(--border)" : "transparent",
      transitionDuration: 200,
      transition: "background-color 0.2s",
    }}
    ></div>
  );
};


const Dots = ({ scrollidx }) => {
  return (
    <div style={{
      position: "fixed", top: "45%", right: "4.5vw", zIndex: 1,
      display: window.innerWidth <= 480 ? "none" : "flex",  
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: 20,
        height: 120,
      }}>
        <Dot num={1} scrollidx={scrollidx}></Dot>
        <Dot num={2} scrollidx={scrollidx}></Dot>
        <Dot num={3} scrollidx={scrollidx}></Dot>
        <Dot num={4} scrollidx={scrollidx}></Dot>
        <Dot num={5} scrollidx={scrollidx}></Dot>
      </div>
    </div>
  )  
};

export default Dots;
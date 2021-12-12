const setTableStyled = (target) => {
  target.querySelectorAll("table, td, th").forEach((element) =>
    element.setAttribute(
      "style",
      `border: 1px solid #000; 
          border-collapse: collapse;
          padding: 20px 40px;
          text-align: center`
    )
  );
};

export default setTableStyled;

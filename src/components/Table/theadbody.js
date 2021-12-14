const Theadbody = rows => {
  const theadbody = document.createElement('tbody');
  rows.forEach(element => {
    theadbody.appendChild(element);
  });
  return theadbody;
};

export default Theadbody;
export const customSearchStyles = {
  control: (provided, state) => ({
    ...provided,
    visability: "hidden",
    width: state.isFocused ? '100%' : '58px',
    marginLeft: "auto",
    height: '58px',
    color: '#9E7FB9',
    borderColor: '#fff',
    textShadow: "rgba(0, 0, 0, 0.1) -2px 2px 0.6px",
    fontWeight: '400',
    borderRadius: '20px',
    border: state.isFocused ? '0px solid #fff' : null,
    boxShadow: state.isFocused ? 'none' : null,
    background: state.isFocused ? '#fff' : "linear-gradient(116.79deg, rgba(255, 255, 255, 0.48) -41.94%, rgba(255, 255, 255, 0.12) 57.51%)",
    zIndex: 10,
    cursor: 'pointer',
    "&:hover": {
      borderColor: "none"
  }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#9E7FB9' : null,
    color: state.isFocused ? '#fff' : null,
    borderRadius: '10px',
  }),

  input: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#9E7FB9' : null,
    fontWeight: '400',
    textShadow: "rgba(0, 0, 0, 0.1) -2px 2px 0.6px",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    display: 'none'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none!important'
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    display: 'none'
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: "0 20px",
    borderRadius: '10px',
    zIndex: 10,
    fontWeight: 400,
    color: "#8765a3"
  })
}
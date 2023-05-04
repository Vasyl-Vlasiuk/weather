import { useRef } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useSelector } from 'react-redux';

import useWeatherServices from "../services/WeatherServise";

import { ReactComponent as SearchIcon } from "../resourses/img/Search.svg";
import { ReactComponent as LocationIcon } from "../resourses/img/location.svg";
import { customSearchStyles } from "./styles/customSearchStyles";
import styled from "styled-components";


const SearchContainer = styled.div`
  width: 100%;
  position:relative;
  z-index: 10;
`
const IconContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 18px;
`
const CurrentCity = styled.div`
  display: flex;
  align-items: center;
  margin-top: -48px;
  font-size: 32px;
  font-weight: 300;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.1) -2px 2px 0.6px;
  gap: 25px;
`

const Search = ({onSearchChange }) => {
  const {getCity} = useWeatherServices();
  const radio = useRef(null);

  const currentCity = useSelector(state => state.currentData.city);

  const loadOptions = (inputValue) => {
    return getCity(inputValue);
  };

  const handleOnChange = (searchData) => {
    onSearchChange(searchData);
    radio.current.focus();
  };

  return (
    <>
      <SearchContainer >
        <AsyncPaginate 
          placeholder=""
          debounceTimeout={600}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          styles={customSearchStyles}
        />

        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </SearchContainer>

      <CurrentCity>
        <LocationIcon /> {currentCity}
        <input style={{opacity: 0}} type="radio" ref={radio} />
      </CurrentCity>
    </>
  );
};

export default Search;
import { useState } from "react";
import { categories } from "../utils/constants";

import { Select } from "antd";
import Brands from "./Brands";
import HomeSectionB from "./HomeSectionB";
import styledComponents from "styled-components";

const { Option } = Select;

const Sider = () => {
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState(0);
  const { components } = categories[value];
  const { acomponents } = categories[selected];

  return (
    <>
      <Select
        defaultValue="Brands"
        style={{ width: 120 }}
        // onSelect={handleChange}
      >
        {categories.map((link, index) => {
          const { id, text, components } = link;
          return (
            <Option
              key={index}
              value={text}
              onChange={() => setSelected(index)}
            >
              {text}
            </Option>
          );
        })}
      </Select>

      <select name="cars" id="cars">
        {categories.map((link, index) => {
          const { id, text } = link;
          return (
            <option
              key={id}
              onClick={() => setValue(index)}
              className={`jbtn ${index === value && "active-btn"}`}
            >
              {text}
            </option>
          );
        })}
      </select>

      {/* <div>{selected === "Brands" ? <Brands /> : <HomeSectionB />}</div>*/}
      <div>{components}</div>
    </>
  );
};

export default Sider;

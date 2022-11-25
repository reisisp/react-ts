import { FC, useState } from "react";

import { Radio } from "antd";

import { FilterTodosProps, filterList } from "./api";

import type { RadioChangeEvent } from "antd";

const FilterTodos: FC<FilterTodosProps> = ({ currentFilter, changeFilter }) => {
  const [filter, setFilter] = useState<string>(currentFilter);

  const onChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
    changeFilter(e.target.value);
  };

  return (
    <Radio.Group value={filter} onChange={onChange}>
      {filterList.map((el) => (
        <Radio.Button key={el.filter} value={el.filter}>
          {el.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default FilterTodos;

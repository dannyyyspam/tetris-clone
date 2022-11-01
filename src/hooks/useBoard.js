import { useState } from "react";
import { buildBoard } from "../../src/Utils/Board";

export const useBoard = ({ rows, columns }) => {
  const [board] = useState(buildBoard({ rows, columns }));

  return [board];
};

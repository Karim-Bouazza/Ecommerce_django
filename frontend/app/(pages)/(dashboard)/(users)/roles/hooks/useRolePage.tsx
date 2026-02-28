import { useState } from "react";
import useRoles from "./core/useRoles";

export function useRolePage() {
  const [page, setPage] = useState(1);

  const query = useRoles({ page });

  const nextPage = () => {
    setPage((p) => p + 1);
  };

  const prevPage = () => {
    setPage((p) => Math.max(p - 1, 1));
  };

  return {
    page,
    query,
    nextPage,
    prevPage,
  };
}

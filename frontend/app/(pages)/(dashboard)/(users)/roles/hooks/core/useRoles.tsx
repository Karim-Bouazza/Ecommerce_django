"use client";

import api from "@/app/lib/api-client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { PaginatedResponse, Role } from "../../types";

interface UseRolesParams {
  page?: number;
  search?: string;
}

export default function useRoles({
  page = 1,
  search = "",
}: UseRolesParams = {}) {
  return useQuery<PaginatedResponse<Role>>({
    queryKey: ["roles", { page, search }],
    queryFn: async () => {
      const params: Record<string, string | number> = { page };
      if (search) params.search = search;
      const response = await api.get("/users/roles/", { params });
      return response.data;
    },
    placeholderData: keepPreviousData,
  });
}

"use client";

import api from "@/app/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import type { RoleWithPermissions } from "../../types";

export default function useRole(id: string) {
  return useQuery<RoleWithPermissions>({
    queryKey: ["role", id],
    queryFn: async () => {
      const response = await api.get(`/users/roles-permissions/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
}

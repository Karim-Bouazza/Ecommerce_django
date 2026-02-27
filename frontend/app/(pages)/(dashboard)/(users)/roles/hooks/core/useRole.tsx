"use client";

import api from "@/app/lib/api-client";
import { useQuery } from "@tanstack/react-query";


export default function useRole(id: string) {
  return useQuery({
    queryKey: ["permissions", id],
    queryFn: async () => {
      const roleDetails = await api.get(`/users/roles-permissions/${id}`);
      return roleDetails.data;
    },
    enabled: !!id,
  });
}

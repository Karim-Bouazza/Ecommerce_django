"use client";

import api from "@/app/lib/api-client";
import { useQuery } from "@tanstack/react-query";

export default function useRoles() {
  return useQuery({
    queryKey: ["roles"],
    queryFn: async () => {
      const roles = await api.get("/users/roles/");
      return roles.data;
    },
  });
}

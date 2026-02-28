"use client";

import api from "@/app/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Permission } from "../../types";

export default function usePermissions() {
  return useQuery<Permission[]>({
    queryKey: ["permissions"],
    queryFn: async () => {
      const response = await api.get("/users/permissions");
      return response.data;
    },
  });
}

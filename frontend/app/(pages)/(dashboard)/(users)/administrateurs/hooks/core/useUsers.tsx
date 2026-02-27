"use client";

import api from "@/app/lib/api-client";
import { useQuery } from "@tanstack/react-query";

export default function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await api.get("/users/users/");
      return users.data;
    },
  });
}

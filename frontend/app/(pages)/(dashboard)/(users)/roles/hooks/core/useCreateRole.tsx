"use client";

import api from "@/app/lib/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Role } from "../../types";

export default function useCreateRole() {
  const queryClient = useQueryClient();

  return useMutation<Role, Error, string>({
    mutationFn: async (name) => {
      const response = await api.post("/users/roles/", { name });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
}

"use client";

import api from "@/app/lib/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Role } from "../../types";

interface UpdateRoleVariables {
  id: number;
  name: string;
}

export default function useUpdateRole() {
  const queryClient = useQueryClient();

  return useMutation<Role, Error, UpdateRoleVariables>({
    mutationFn: async ({ id, name }) => {
      const response = await api.patch(`/users/roles/${id}/`, { name });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
}

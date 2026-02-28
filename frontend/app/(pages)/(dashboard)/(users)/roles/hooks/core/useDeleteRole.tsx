"use client";

import api from "@/app/lib/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteRole() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: async (id) => {
      await api.delete(`/users/roles/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
}

"use client";

import api from "@/app/lib/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { RoleWithPermissions } from "../../types";

export default function useUpdatePermissions(roleId: string) {
  const queryClient = useQueryClient();

  return useMutation<RoleWithPermissions, Error, number[]>({
    mutationFn: async (permissionsIds) => {
      const response = await api.patch(`/users/roles-permissions/${roleId}/`, {
        permissions_ids: permissionsIds,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["role", roleId] });
    },
  });
}

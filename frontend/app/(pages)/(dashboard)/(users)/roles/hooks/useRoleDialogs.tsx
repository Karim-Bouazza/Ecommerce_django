import { useCallback, useState } from "react";
import type { RoleSelected } from "../types";

function useDialogState() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<RoleSelected | null>(null);

  const openWith = useCallback((role: RoleSelected) => {
    setSelected(role);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setSelected(null);
  }, []);

  return { open, setOpen, selected, setSelected, openWith, close };
}

export function useRoleDialogs() {
  const create = useDialogState();
  const update = useDialogState();
  const del = useDialogState();

  return { create, update, delete: del };
}

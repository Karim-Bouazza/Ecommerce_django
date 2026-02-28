"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Permission } from "../types";

interface DialogPermissionsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  handleSubmit: () => void;
  isPending?: boolean;
  data: Permission[] | undefined;
}

export default function DialogPermissions({
  open,
  setOpen,
  selected,
  setSelected,
  handleSubmit,
  isPending,
  data,
}: DialogPermissionsProps) {
  const togglePermission = (permissionId: number) => {
    setSelected((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId],
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <Command>
          <CommandInput placeholder="Rechercher des permissions..." />
          <CommandList>
            <CommandEmpty>Aucune permission trouvée.</CommandEmpty>

            <CommandGroup heading={`Permissions (${data?.length ?? 0})`}>
              {data?.map((permission) => (
                <CommandItem
                  key={permission.id}
                  onSelect={() => togglePermission(permission.id)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox checked={selected.includes(permission.id)} />
                  {permission.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>

        <Button
          onClick={handleSubmit}
          disabled={isPending}
          className="cursor-pointer"
        >
          {isPending ? "Enregistrement..." : "Enregistrer"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}

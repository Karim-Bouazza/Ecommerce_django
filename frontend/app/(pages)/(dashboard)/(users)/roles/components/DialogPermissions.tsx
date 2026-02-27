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

export default function DialogPermissions({
  open,
  setOpen,
  selected,
  setSelected,
  handleSubmit,
  data,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  selected: number[];
  setSelected: (selected: number[]) => void;
  handleSubmit?: () => void;
  data: any;
}) {
  const toggleRole = (permissionsId: number) => {
    // @ts-ignore
    setSelected((prev) => {
      if (prev.includes(permissionsId)) {
        return prev.filter((id: any) => id !== permissionsId);
      } else {
        return [...prev, permissionsId];
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <Command>
          <CommandInput placeholder="Search Permissions..." />
          <CommandList>
            <CommandEmpty>No permissions found.</CommandEmpty>

            <CommandGroup heading={`Permissions (${data?.length || 0})`}>
              {data?.map((d: any) => (
                <CommandItem
                  key={d.id}
                  onSelect={() => toggleRole(d.id)}
                  className="flex items-center gap-2"
                >
                  <Checkbox checked={selected.includes(d.id)} />
                  {d.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>

        <Button onClick={handleSubmit} className="cursor-pointer" >Save</Button>
      </DialogContent>
    </Dialog>
  );
}

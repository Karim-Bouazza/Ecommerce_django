"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface DialogRoleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
  isPending?: boolean;
  mode?: "create" | "update";
  value: string;
  onChange: (value: string) => void;
}

const config = {
  create: {
    title: "Ajouter un rôle",
    description: "Entrez le nom du nouveau rôle à créer.",
    submitLabel: "Créer",
    pendingLabel: "Création...",
  },
  update: {
    title: "Modifier le rôle",
    description: "Modifiez le nom du rôle.",
    submitLabel: "Enregistrer",
    pendingLabel: "Enregistrement...",
  },
};

export default function DialogRole({
  open,
  onOpenChange,
  onSubmit,
  isPending,
  mode = "create",
  value,
  onChange,
}: DialogRoleProps) {
  const { title, description, submitLabel, pendingLabel } = config[mode];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="role-name">Nom du rôle</Label>
            <Input
              id="role-name"
              placeholder="Ex: Administrateur, Éditeur..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
              autoFocus
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={!value.trim() || isPending}>
              {isPending ? pendingLabel : submitLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

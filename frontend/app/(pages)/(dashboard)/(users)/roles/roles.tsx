"use client";

import { Button } from "@/components/ui/button";
import TableContainer from "@/app/components/ui/common/Table/TableContainer";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TableHeaderPage from "@/app/components/ui/common/Table/TableHeaderPage";
import TableHeaderComponent from "@/app/components/ui/common/Table/TableHeader";
import DialogRole from "./components/DialogRole";
import useCreateRole from "./hooks/core/useCreateRole";
import useUpdateRole from "./hooks/core/useUpdateRole";
import useDeleteRole from "./hooks/core/useDeleteRole";
import { ConfirmDelete } from "@/app/components/ui/common/ConfirmDelete";
import { useRouter } from "next/navigation";
import { rolesColumns } from "./data";
import { useRolePage } from "./hooks/useRolePage";
import { useRoleDialogs } from "./hooks/useRoleDialogs";
import { toast } from "sonner";
import { getApiErrorMessage } from "./utils";
import type { Role } from "./types";

export default function Roles() {
  const {
    page,
    query: { data },
    nextPage,
    prevPage,
  } = useRolePage();

  const { create, update, delete: del } = useRoleDialogs();

  const createRole = useCreateRole();
  const updateRole = useUpdateRole();
  const deleteRole = useDeleteRole();
  const router = useRouter();

  const roles = data?.results ?? [];
  const total = data?.count ?? 0;

  const handleCreateRole = () => {
    if (!create.selected) return;
    createRole.mutate(create.selected.name, {
      onSuccess: () => {
        create.close();
        toast.success("Rôle créé avec succès");
      },
      onError: (error) => {
        toast.error(getApiErrorMessage(error, "Erreur lors de la création"));
      },
    });
  };

  const handleUpdateRole = () => {
    if (!update.selected) return;
    updateRole.mutate(
      { id: update.selected.id, name: update.selected.name },
      {
        onSuccess: () => {
          update.close();
          toast.success("Rôle modifié avec succès");
        },
        onError: (error) => {
          toast.error(
            getApiErrorMessage(error, "Erreur lors de la modification"),
          );
        },
      },
    );
  };

  const handleDeleteRole = () => {
    if (!del.selected) return;
    deleteRole.mutate(del.selected.id, {
      onSuccess: () => {
        del.close();
        toast.success("Rôle supprimé avec succès");
      },
      onError: (error) => {
        toast.error(getApiErrorMessage(error, "Erreur lors de la suppression"));
      },
    });
  };

  return (
    <>
      <TableContainer
        handlePaginationPreviousChange={prevPage}
        handlePaginationNextChange={nextPage}
        page={page}
        total={total}
        pageSize={100}
      >
        <TableHeaderPage title="Rôles">
          <Button
            size="sm"
            className="cursor-pointer"
            onClick={() => create.openWith({ id: 0, name: "" })}
          >
            Ajouter rôle
          </Button>
        </TableHeaderPage>

        <div className="overflow-x-auto w-full rounded-xl">
          <Table className="w-full">
            <TableHeaderComponent columns={rolesColumns} />

            <TableBody>
              {roles.map((role: Role, index: number) => (
                <TableRow key={role.id ?? index} className="h-12">
                  <TableCell>{(page - 1) * 100 + index + 1}</TableCell>
                  <TableCell>{role.name}</TableCell>
                  <TableCell className="pl-16">{role.users_count}</TableCell>

                  <TableCell className="text-center">
                    <Button
                      size="sm"
                      onClick={() => router.push(`/roles/${role.id}`)}
                    >
                      Voir
                    </Button>
                  </TableCell>

                  <TableCell className="text-center">
                    <Button size="sm" onClick={() => update.openWith(role)}>
                      Modifier
                    </Button>
                  </TableCell>

                  <TableCell className="text-center">
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => del.openWith(role)}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>

      <DialogRole
        open={create.open}
        onOpenChange={create.setOpen}
        mode="create"
        value={create.selected?.name ?? ""}
        onChange={(name) => create.setSelected({ id: 0, name })}
        onSubmit={handleCreateRole}
        isPending={createRole.isPending}
      />

      {update.selected && (
        <DialogRole
          open={update.open}
          onOpenChange={update.setOpen}
          mode="update"
          value={update.selected.name}
          onChange={(name) => update.setSelected({ ...update.selected!, name })}
          onSubmit={handleUpdateRole}
          isPending={updateRole.isPending}
        />
      )}

      <ConfirmDelete
        open={del.open}
        onOpenChange={del.setOpen}
        title="Supprimer le rôle"
        description={`Êtes-vous sûr de vouloir supprimer le rôle "${del.selected?.name}" ?`}
        cancelText="Annuler"
        confirmText="Supprimer"
        variant="destructive"
        onConfirm={handleDeleteRole}
      />
    </>
  );
}

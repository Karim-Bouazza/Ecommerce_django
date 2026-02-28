"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import TableContainer from "@/app/components/ui/common/Table/TableContainer";
import TableHeaderPage from "@/app/components/ui/common/Table/TableHeaderPage";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TableHeaderComponent from "@/app/components/ui/common/Table/TableHeader";
import useRole from "../hooks/core/useRole";
import usePermissions from "../hooks/core/usePermissions";
import useUpdatePermissions from "../hooks/core/useUpdatePermissions";
import DialogPermissions from "../components/DialogPermissions";
import { permissionsColumns } from "../data";
import type { Permission } from "../types";

export default function RoleDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: role } = useRole(id);
  const { data: allPermissions } = usePermissions();
  const updatePermissions = useUpdatePermissions(id);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  const permissions = role?.permissions ?? [];

  useEffect(() => {
    if (open && permissions.length > 0) {
      setSelected(permissions.map((p: Permission) => p.id));
    }
  }, [open, permissions]);

  const handleSubmit = () => {
    updatePermissions.mutate(selected, {
      onSuccess: () => {
        setOpen(false);
        toast.success("Permissions mises à jour avec succès");
      },
      onError: () => {
        toast.error("Erreur lors de la mise à jour des permissions");
      },
    });
  };

  const roleName = role?.name
    ? role.name.charAt(0).toUpperCase() + role.name.slice(1)
    : "";

  return (
    <>
      <TableContainer
        handlePaginationPreviousChange={() => {}}
        handlePaginationNextChange={() => {}}
        page={1}
        total={permissions.length}
        pageSize={permissions.length || 1}
      >
        <TableHeaderPage title={roleName}>
          <Button
            size="sm"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Ajouter permissions
          </Button>
        </TableHeaderPage>

        <div className="overflow-x-auto w-full rounded-xl">
          <Table className="w-full">
            <TableHeaderComponent columns={permissionsColumns} />

            <TableBody>
              {permissions.map((permission: Permission, index: number) => (
                <TableRow key={permission.id} className="h-12">
                  <TableCell className="text-left">{index + 1}</TableCell>
                  <TableCell>{permission.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>

      <DialogPermissions
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
        handleSubmit={handleSubmit}
        isPending={updatePermissions.isPending}
        data={allPermissions}
      />
    </>
  );
}

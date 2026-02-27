"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import useRole from "../hooks/core/useRole";
import TableContainer from "@/app/components/ui/common/Table/TableContainer";
import TableHeaderPage from "@/app/components/ui/common/Table/TableHeaderPage";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TableHeaderComponent from "@/app/components/ui/common/Table/TableHeader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/app/lib/api-client";
import { useEffect, useState } from "react";
import DialogPermissions from "../components/DialogPermissions";

export default function RoleDetailsPage() {
  const { data: permissionsData } = useQuery({
    queryKey: ["permissions"],
    queryFn: async () => {
      const data = await api.get("/users/permissions");
      return data.data;
    },
  });

  const queryClient = useQueryClient();
  const updatePermissionsMutation = useMutation({
    mutationFn: async (permissions_ids: number[]) => {
      const response = await api.patch(`/users/roles-permissions/${id}/`, {
        permissions_ids,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permissions", id] });
      setOpen(false);
    },
    onError: (error) => {
      console.error("Update failed:", error);
    },
  });

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  const params = useParams();
  const id = params.id as string;
  const { data } = useRole(id);
  const permissions = data?.permissions || [];

  const handlePrevious = () => {
    console.log("Previous page");
  };
  const handleNext = () => {
    console.log("Next page");
  };
  const page = 1;
  const total = 100;

  const columnsTitle = [
    { name: "ID", id: "id" },
    { name: "Permissions", id: "name" },
  ];

  const handleSubmit = () => {
    console.log("Selected permissions:", selected);
    updatePermissionsMutation.mutate(selected);
  };

  useEffect(() => {
    if (open && permissions.length > 0) {
      setSelected(permissions.map((p: any) => p.id));
    }
  }, [open, permissions]);

  return (
    <>
      <div></div>
      <TableContainer
        handlePaginationPreviousChange={handlePrevious}
        handlePaginationNextChange={handleNext}
        page={page}
        total={total}
      >
        <TableHeaderPage
          title={`${data?.name?.charAt(0).toUpperCase()}${data?.name?.slice(1)}`}
        >
          <Button
            size="sm"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
            // onClick={handlepemrmssions}
          >
            Ajouter permissions
          </Button>
        </TableHeaderPage>

        <div className="overflow-x-auto w-full rounded-xl">
          <Table className="w-full">
            <TableHeaderComponent columns={columnsTitle} />

            <TableBody>
              {permissions.map((role: any, index: any) => (
                <TableRow key={(role as any).id ?? index} className="h-12">
                  <TableCell className="text-left">
                    {(page - 1) * 10 + index + 1}
                  </TableCell>

                  <TableCell>{role.name}</TableCell>
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
        data={permissionsData}
      />
    </>
  );
}

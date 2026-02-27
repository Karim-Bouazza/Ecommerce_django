"use client";

import { Button } from "@/components/ui/button";
import TableContainer from "@/app/components/ui/common/Table/TableContainer";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import TableHeaderPage from "@/app/components/ui/common/Table/TableHeaderPage";
import TableHeaderComponent from "@/app/components/ui/common/Table/TableHeader";
import useRoles from "./hooks/core/useRoles";
import { useRouter } from "next/navigation";

export default function Roles() {
  const { data } = useRoles();
  const router = useRouter();

  const handlePrevious = () => {
    console.log("Previous page");
  };
  const handleNext = () => {
    console.log("Next page");
  };
  const page = 1;
  const total = 100;

  const handleRoles = () => {
    console.log("roles....: ", data);
  };

  const columnsTitle = [
    { name: "ID", id: "id" },
    { name: "Nom du rôle", id: "name" },
    { name: "Nombre d'utilisateurs", id: "nombre" },
    { name: "Voir", id: "actions" },
  ];

  const handleView = (id: any) => {
    router.push(`/roles/${id}`);
  };

  const roles = data?.results || [];
  return (
    <>
      <div>
        <h1>Roles</h1>
        <p>Gérez les rôles de votre plateforme ici.</p>
        <Button onClick={handleRoles}>Ajouter un rôle</Button>
      </div>

      <TableContainer
        handlePaginationPreviousChange={handlePrevious}
        handlePaginationNextChange={handleNext}
        page={page}
        total={total}
      >
        <TableHeaderPage title="Rôles" />

        <div className="overflow-x-auto w-full rounded-xl">
          <Table className="w-full">
            <TableHeaderComponent columns={columnsTitle} />

            <TableBody>
              {roles.map((role: any, index: any) => (
                <TableRow key={(role as any).id ?? index} className="h-12">
                  <TableCell>{(page - 1) * 10 + index + 1}</TableCell>

                  <TableCell>{role.name}</TableCell>

                  <TableCell className="pl-16">{role.users_count}</TableCell>

                  <TableCell className="text-center">
                    <Button
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => handleView(role.id)}
                    >
                      Voir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </>
  );
}

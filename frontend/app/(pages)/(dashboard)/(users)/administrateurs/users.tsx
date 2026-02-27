"use client";

import { Button } from "@/components/ui/button";
import useUsers from "./hooks/core/useUsers";
import TableContainer from "@/app/components/ui/common/Table/TableContainer";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableHeaderPage from "@/app/components/ui/common/Table/TableHeaderPage";
import CreateButton from "@/app/components/ui/common/Table/CreateButton";
import { useAuth } from "@/app/store/auth/auth.context";
import TableHeaderComponent from "@/app/components/ui/common/Table/TableHeader";

export default function Users() {
  const { state } = useAuth();

  const { data, isLoading, isError } = useUsers();

  const handlePrevious = () => {
    console.log("Previous page");
  };
  const handleNext = () => {
    console.log("Next page");
  };
  const page = 1;
  const total = 100;

  // const handlconsle = () => {
  //   console.log(state);
  // };

  const handleUsers = () => {
    console.log("users....: ");
  };

  const columnsTitle = [
    { name: "ID", id: "id" },
    { name: "Utilisateur", id: "full_name" },
    { name: "Username", id: "username" },
    { name: "Phone", id: "phone" },
    { name: "Edit", id: "actions" },
  ];

  const users = data || [];
  return (
    <>
      <div>
        <h1>Administrateurs</h1>
        <p>Gérez les administrateurs de votre plateforme ici.</p>
        <Button onClick={handleUsers}>Ajouter un administrateur</Button>
      </div>

      <TableContainer
        handlePaginationPreviousChange={handlePrevious}
        handlePaginationNextChange={handleNext}
        page={page}
        total={total}
      >
        <TableHeaderPage title="Administrateurs" />

        <div className="overflow-x-auto w-full rounded-xl">
          <Table>
            <TableHeaderComponent columns={columnsTitle} />

            <TableBody className="text-left ">
              {users.map((user: any, index: any) => (
                <TableRow key={(user as any).id ?? index} className="h-12">
                  <TableCell>
                    {(page - 1) * 10 + index + 1}
                  </TableCell>

                  <TableCell
                    className={!user.full_name ? "text-left pl-10" : " "}
                  >
                    {user.full_name || "-"}
                  </TableCell>
                  <TableCell
                    className={!user.username ? "text-left pl-10" : " "}
                  >
                    {user.username || "-"}
                  </TableCell>
                  <TableCell className={!user.phone ? "text-left pl-6" : " "}>
                    {user.phone || "-"}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button size="sm">Edit</Button>
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

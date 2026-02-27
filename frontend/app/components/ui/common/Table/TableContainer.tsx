
import TablePagination from "./TablePagination";

export default function TableContainer({
  children,
  handlePaginationNextChange,
  handlePaginationPreviousChange,
  page,
  total,
}: {
  children: React.ReactNode;
  handlePaginationNextChange: () => void;
  handlePaginationPreviousChange: () => void;
  page: number;
  total: number;
}) {
  return (
    <div className="w-full px-5 pb-10 pt-2">
      <div className="border border-gray-200 transition-all duration-300 bg-white px-4 rounded-2xl">
        {children}

        <TablePagination
          onNext={handlePaginationNextChange}
          onPrevious={handlePaginationPreviousChange}
          currentPage={page}
          totalPages={Math.ceil(total / 10)}
        />
      </div>
    </div>
  );
}

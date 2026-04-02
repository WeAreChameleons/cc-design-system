import './Table.css'

export const Table = ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
  <div className="cc-table-wrapper">
    <table className="cc-table" {...props}>{children}</table>
  </div>
)

export const Thead = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="cc-thead" {...props}>{children}</thead>
)

export const Tbody = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props}>{children}</tbody>
)

export const Tr = ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="cc-tr" {...props}>{children}</tr>
)

export const Th = ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className="cc-th" {...props}>{children}</th>
)

export const Td = ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className="cc-td" {...props}>{children}</td>
)

import './DataTable.css'

export interface ColumnDef<T = Record<string, unknown>> {
  /** Column identifier — must match a key in data rows */
  key: string
  /** Column header label */
  label: string
  /** Whether this column is sortable */
  sortable?: boolean
  /** Custom cell renderer */
  render?: (value: unknown, row: T) => React.ReactNode
  /** Column width (CSS value) */
  width?: string
}

export interface DataTableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  /** Column definitions */
  columns: ColumnDef<T>[]
  /** Row data */
  data: T[]
  /** Key of the currently sorted column */
  sortKey?: string
  /** Current sort direction */
  sortDir?: 'asc' | 'desc'
  /** Sort header click callback */
  onSort?: (key: string) => void
  /** Row click callback */
  onRowClick?: (row: T) => void
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  sortKey,
  sortDir = 'asc',
  onSort,
  onRowClick,
}: DataTableProps<T>) {
  return (
    <div className="cc-table-wrap">
      <table className="cc-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className={`cc-table__th${col.sortable ? ' cc-table__th--sortable' : ''}${sortKey === col.key ? ' cc-table__th--sorted' : ''}`}
                style={col.width ? { width: col.width } : undefined}
                onClick={() => col.sortable && onSort?.(col.key)}
                aria-sort={sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined}
              >
                <span className="cc-table__th-inner">
                  {col.label}
                  {col.sortable && (
                    <span className="cc-table__sort-icon" aria-hidden="true">
                      {sortKey === col.key
                        ? (sortDir === 'asc' ? '↑' : '↓')
                        : '↕'}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`cc-table__row${onRowClick ? ' cc-table__row--clickable' : ''}${rowIdx % 2 === 1 ? ' cc-table__row--alt' : ''}`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map(col => (
                <td key={col.key} className="cc-table__td">
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td className="cc-table__empty" colSpan={columns.length}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

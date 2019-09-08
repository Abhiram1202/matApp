import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  icon: string;
}

@ Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})

/**
 * @title Data table with sorting, pagination, and filtering.
 */

export class MyTableComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'id', 'name', 'progress', 'color'];
  twisty = 'keyboard_arrow_right';
  dataSource: MatTableDataSource< UserData>;
  @ ViewChild(MatPaginator) paginator: MatPaginator;
  @ ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this .dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this .dataSource.paginator = this .paginator;
    this .dataSource.sort = this .sort;
    this .paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
       if (length == 0 || pageSize == 0) { return `0 of ${length}`; } length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
     return `Showing ${endIndex - startIndex } of ${length}`; }
  }

  applyFilter(filterValue: string) {
    this .dataSource.filter = filterValue.trim().toLowerCase();

    if (this .dataSource.paginator) {
      this .dataSource.paginator.firstPage();
    }
  }

  getTheCurrentPage() {
    return this .paginator.getNumberOfPages() === 0 ? 0 : this .paginator.pageIndex+1;
  }

  onbutClick(row) {
    row .icon === 'keyboard_arrow_right' ? row .icon = 'keyboard_arrow_down' : row.icon = 'keyboard_arrow_right';
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    icon: "keyboard_arrow_right"
  };
}

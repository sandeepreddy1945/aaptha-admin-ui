import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { PersonCardDetails } from 'src/app/model/person-details';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() items: PersonCardDetails[] = [];
  @Input() selectedItems: number[] = [];
  @Input() title = 'Search Details';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<number[]>();

  filteredItems: PersonCardDetails[] = [];
  workingSelectedValues: number[] = [];

  isSelectAllHidden: boolean = false;

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValues = [...this.selectedItems];
  }

  trackItems(index: number, item: PersonCardDetails) {
    return item.fullName;
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);
  }

  searchbarInput(ev: any) {
    this.filterList(ev.target.value);
    /**
     * This will be useful for handling the hiding functonality of the select all bar during search process.
     */
    if (!ev.target.value || ev.target.value === '') {
      this.isSelectAllHidden = false;
    } else this.isSelectAllHidden = true;
  }

  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.fullName.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  isChecked(value: number) {
    return this.workingSelectedValues.find((item) => item === value);
  }

  checkboxChange(ev: any) {
    const { checked, value } = ev.detail;

    if (checked) {
      this.workingSelectedValues = [...this.workingSelectedValues, value];
    } else {
      this.workingSelectedValues = this.workingSelectedValues.filter(
        (item) => item !== value
      );
    }
  }

  selectDeselectAllCheckBoxes(ev: any) {
    const { checked, value } = ev.detail;
    if (checked) {
      const allVaues = this.filteredItems.map((item) => item.id);
      this.workingSelectedValues = [...allVaues];
    } else {
      this.workingSelectedValues = [];
    }
  }

  isAllItemsChecked(): boolean {
    const filteredValues = this.workingSelectedValues.sort();
    return this.filteredItems
      .map((item) => item.id)
      .sort()
      .every((value, index) => value === filteredValues[index]);
  }
}

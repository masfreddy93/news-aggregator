import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsLanguages } from '../../enum/news-languages.enum';
import { NewsCategories } from '../../enum/news-categories.enum';

// interface used to handle filters of this compoment
export interface NewsFilters {
  category: string;
  language: string;
  startDate: string;
  endDate: string;
  searchText: string;
}

@Component({
  selector: 'app-news-filters',
  templateUrl: './news-filters.component.html',
  styleUrls: ['./news-filters.component.scss'],
})
export class NewsFiltersComponent {
  @Output() emitFiltersValue: EventEmitter<NewsFilters> = new EventEmitter();

  FILTERS_FORM_DEFAULT_VALUE: NewsFilters = {
    category: '',
    language: '',
    startDate: '',
    endDate: '',
    searchText: '',
  };

  filtersFG: FormGroup = this._fb.group(this.FILTERS_FORM_DEFAULT_VALUE);

  languages: typeof NewsLanguages = NewsLanguages;
  categories: typeof NewsCategories = NewsCategories;

  constructor(private _fb: FormBuilder) {}

  applyFilters(): void {
    const formValues: any = this.filtersFG.getRawValue();
    const valueToEmit: NewsFilters = {
      ...formValues,
      startDate: this._formatDate(formValues.startDate),
      endDate: this._formatDate(formValues.endDate),
    };

    this.emitFiltersValue.emit(valueToEmit);
  }

  resetFilters(): void {
    this.filtersFG.reset(this.FILTERS_FORM_DEFAULT_VALUE);
  }

  /**
   * Returns a date in string format as wanted MediaStack for API request
   */
  private _formatDate(inputDate: string): string {
    if (!inputDate) {
      return '';
    }

    const date: Date = new Date(inputDate);

    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    );
  }
}

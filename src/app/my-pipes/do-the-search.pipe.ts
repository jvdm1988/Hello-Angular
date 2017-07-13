import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {

// *ngFor="let oneRock of (theRocks | doTheSearch: "fast")"
// value = theRocks
// searchTerm = "fast" (the value of the input, rockSearchText)
  transform(value: any, searchTerm: string): any {
    // if the array is undefined or something weird
    if (!value) {
      return [];
    }
    // if no searchTerm is provided return the original array
    if (!searchTerm) {
      return value;
    }

    let matchedResults = [];

    // lowercase the searchterm so that it works no matter how the user types the searchTerm
    searchTerm = searchTerm.toLowerCase();

    value.forEach((oneItem) => {
      // lower case the name so that it always match with searchTerm
      // if the name has the searchterm in it, push it to the new array
      if (oneItem.name.toLowerCase().includes(searchTerm)) {
        matchedResults.push(oneItem);
      }
    });
    return matchedResults
  }
}

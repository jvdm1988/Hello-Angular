import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // In a template, you use the pipe like this
  // {{ userName | capitalize}}, because name here is capitalize
  name: 'capitalize'
  // The "name" setting specifies how to use it
})
export class CapitalizePipe implements PipeTransform {
  // The logic of or pipe goes inside the "transform()" method

  // "new york city" -> "New York City" (capitalize every word in that string)
  // {{ "new york city" | capitalize }}
  transform(value: any, args?: any): any {
  // the value variable is the thing that you are modifying
  // The thing on the left of the "|"

  // value = "new york city";

const wordsArray = value.split(" ");

let capitalizedWords = wordsArray.map(oneWord => {
  return oneWord.charAt(0).toUpperCase() + oneWord.slice(1).toLowerCase();
  //                   "c".toUppercase() +             "ity".toLowerCase
});
    return capitalizedWords.join(" ");
    // join all the seprated words (sliced) together to join again as a string
  }
}

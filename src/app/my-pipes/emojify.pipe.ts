import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify' //emojify will be the name of 2nd param in the Pipe to use it
})
export class EmojifyPipe implements PipeTransform {
  // The logic of our pipe goes inside the transform() method

  // "I like pizza and fencing" -> "I like 🍕 and 🤺"
  // {{ "I like pizza and fencing" | emojify }}

  transform(value: any, args?: any): any {

    // "pizza"    will work only for lowercase
    // /pizza/i   will work for all cases (upper and lower), but only the first pizza
    // /pizza/ig  will work for all cases every other pizza to follow
    
    //    i = case (i)nsensitive (upper and lower)
    //    g = global, will work for the whole string []

    return value.replace(/pizza/ig, "🍕")
                .replace(/fencing/ig, "🤺")
                .replace(/gun/ig, "🔫")
                .replace(/avocado/ig, "🥑" )
                .replace(/wine glass/ig, "🍷")
                .replace(/rocket/ig, "🚀");
  }
}

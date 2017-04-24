import { Injectable, ElementRef } from '@angular/core';

function _window(): any {
   return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }

  // http://stackoverflow.com/a/12222317/3889563
  cssPath(el: any) {
    if ( !( el instanceof Element ) )
      return;

    let path = [];
    while ( el.nodeType === Node.ELEMENT_NODE ) {
      let selector = el.nodeName.toLowerCase();

      if (el.id) {
        selector += '#' + el.id;
        path.unshift( selector );
        break;
      } else {
        let sib = el, nth = 1;

        while( sib = sib.previousElementSibling ) {
          if( sib.nodeName.toLowerCase() == selector )
            nth++;
        }

        if( nth != 1 )
          selector += ":nth-of-type(" + nth + ")";
      }

      path.unshift( selector );
      el = el.parentNode;
    }

    return path.join( " > " );
  }

}

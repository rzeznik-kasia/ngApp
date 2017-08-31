import {BrowserXhr} from "@angular/http";

export class CORS extends BrowserXhr {
  build(): any {
    const xhr: any = super.build();
    xhr.withCredentials = true;
    return xhr;
  }
}

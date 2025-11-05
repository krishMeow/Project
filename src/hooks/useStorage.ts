export class Cookie {
    static host = window.location.hostname;
  
      // set cookies expires in Days
  
    static set(name: any, value: any, days?: number) {
      let domain, domainParts, date: Date, expires;
      if (days) {
        date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      } else {
        expires = "";
      }
      const encodedValue = encodeURIComponent(value);
  
      if (this.host.includes(".")) {
        domainParts = this.host.split(".");
        domainParts.shift();
        domain = domainParts.join(".");
        document.cookie = `${name}=${encodedValue}${expires}; path=/; domain=${domain}`;
      } else {
        document.cookie = `${name}=${encodedValue}${expires}; path=/`;
      }
    }
   
  
    // testing purpose in cookies expires in minutes
  
    // static set(name: any, value: any, minutes?: number) {
    //   let domain, domainParts, date: Date, expires;
    //   if (minutes) {
    //     date = new Date();
    //     date.setTime(date.getTime() + minutes * 60 * 1000); // Convert minutes to milliseconds
    //     expires = "; expires=" + date.toUTCString();
    //   } else {
    //     expires = "";
    //   }
    //   const encodedValue = encodeURIComponent(value);
  
    //   if (this.host.includes(".")) {
    //     domainParts = this.host.split(".");
    //     domainParts.shift();
    //     domain = domainParts.join(".");
    //     document.cookie = `${name}=${encodedValue}${expires}; path=/; domain=${domain}`;
    //   } else {
    //     document.cookie = `${name}=${encodedValue}${expires}; path=/`;
    //   }
    // }
  
      //  cookies expires in minutes with json stringfy
  
  //   static set(name: string, value: any, days?: number) {
  //     let domain, domainParts, expires;
  
  //     if (days) {
  //         // const expiryTime = Date.now() + minutes * 60 * 1000; // 15 minutes from now
  //         const expiryTime = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  //         const data = JSON.stringify({ value, expiry: expiryTime });
  //         expires = `; expires=${new Date(expiryTime).toUTCString()}`;
  //         value = data; // Store value as JSON string
  //     } else {
  //         expires = "";
  //     }
  
  //     const encodedValue = encodeURIComponent(value);
  
  //     if (this.host.includes(".")) {
  //         domainParts = this.host.split(".");
  //         domainParts.shift();
  //         domain = domainParts.join(".");
  //         document.cookie = `${name}=${encodedValue}${expires}; path=/; domain=${domain}`;
  //     } else {
  //         document.cookie = `${name}=${encodedValue}${expires}; path=/`;
  //     }
  // }
  
  
    static get(): Record<string, string> {
      if (!document.cookie) return {};
  
      return document.cookie.split(";").reduce((accumulator, cookie) => {
        const [key, value] = cookie.split("=").map(c => c.trim());
        if (key) accumulator[key] = decodeURIComponent(value || "");
        return accumulator;
      }, {} as Record<string, string>);
    } 
  
    // static get(name: string): any {
    //   if (!document.cookie) return null;
    
    //   const cookies = document.cookie.split(";").reduce((accumulator, cookie) => {
    //     const [key, value] = cookie.split("=").map(c => c.trim());
    //     if (key) accumulator[key] = decodeURIComponent(value || "");
    //     return accumulator;
    //   }, {} as Record<string, string>);
    
    //   if (!cookies[name]) return null;
    
    //   try {
    //     const { data, expiry } = JSON.parse(cookies[name]); // Parse stored data
    
    //     if (expiry && Date.now() > expiry) {
    //       this.deleteKey(name); // Clear expired cookie
    //       return null;
    //     }
    
    //     return data;
    //   } catch (e) {
    //     return cookies[name]; // Return raw value if parsing fails
    //   }
    // }
    
  
    static clear() {
      this.deleteKey("access_token");
      this.deleteKey("registerDetails");
    }
  
    static deleteKey(name: string) {
      let domain, domainParts;
      if (this.host.includes(".")) {
        domainParts = this.host.split(".");
        domainParts.shift();
        domain = domainParts.join(".");
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
      }
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
  
    static deleteRedirectKey() {
      this.deleteKey("session");
      this.deleteKey("meeting_id");
    }
  }
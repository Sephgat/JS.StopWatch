
class salesforceapi {




    constructor() {
        this.url = "https://ocdla-c-dev-ed.develop.my.salesforce.com/services/data/v60.0/query?q=SELECT name,id,hours__c,minutes__c,seconds__c from SavedTimer__c"
        this.accessToken = "00Dbm000001u74U!AQEAQPolrYKl.ye4UosLEu2YLCEtpXXBpzi5eGhgRCSZtYbDw0D9Cu2xDpJJXTs9px3TYEhFsW3VjzQ9zCp1QYXnhEJAFmi3";
    }
    async fetchTimer() {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.accessToken}`);
        let fetchedData;
        await fetch(`${this.url}`, {headers: myHeaders})
        .then(response => response.json())
        .then(data => { fetchedData = data;});

        return fetchedData.records;
        }
    }

export default salesforceapi;
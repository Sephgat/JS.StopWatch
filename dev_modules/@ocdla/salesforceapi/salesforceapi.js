
class salesforceapi {




    constructor() {
        this.url = "https://ocdla-c-dev-ed.develop.my.salesforce.com/services/data/v60.0/query?q=SELECT name,id,hours__c,minutes__c,seconds__c from SavedTimer__c"
        this.accessToken = "00Dbm000001u74U!AQEAQOwxiLKiUdEm1zAC6MeefJgeX1wQvuSwhdAb_pXvF5sQbGsXUuw6Zc4uLu2IJXIbyG2xq1WOg3MwtlTNXwEQ8O7GjWwB";
        this.myHeaders = new Headers();
        this.myHeaders.append("Authorization", `Bearer ${this.accessToken}`);
    }
    async query() {
        let fetchedData;
        await fetch(`${this.url}`, { headers: this.myHeaders })
            .then(response => response.json())
            .then(data => { fetchedData = data; });

        return fetchedData.records;
    }

    async Post(data) {
        
    }
    async Patch() {

    }
    async delete() {

    }
}



export default salesforceapi;
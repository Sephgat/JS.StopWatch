
class salesforceapi {




    constructor() {
        this.url = "https://ocdla-c-dev-ed.develop.my.salesforce.com/services/data/v60.0/query?q=SELECT name,id,hours__c,minutes__c,seconds__c from SavedTimer__c"
        this.accessToken = "00Dbm000001u74U!AQEAQNvIjmLK1lEluIISnKlcJuEcdmN9KVSfhNpru67yYH86jG5_n0fE0GY0C7dAPKykes4Icvbq7v4WaVTalhQn2BVK0C3g";
    }
    async query() {
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
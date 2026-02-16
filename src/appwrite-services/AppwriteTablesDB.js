import { TablesDB } from "appwrite";
import appwriteClient from ".";

class AppwriteTablesDB {
    constructor() {
        this.tablesDb = new TablesDB(appwriteClient)
    }

    async getAllRecords(dbId, tableId) {
        const records = await this.tablesDb.listRows({
            databaseId: dbId,
            tableId: tableId
        })
        return records?.rows;
    }
}

export default AppwriteTablesDB;
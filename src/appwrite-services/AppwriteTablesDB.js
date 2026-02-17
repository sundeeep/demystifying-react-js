import { TablesDB, ID } from "appwrite";
import appwriteClient from ".";

class AppwriteTablesDB {
    constructor() {
        this.tablesDb = new TablesDB(appwriteClient)
    }

    async createRecord(dbId, tableId, data) {
        const newRecord = await this.tablesDb.createRow({
            databaseId: dbId,
            tableId: tableId,
            rowId: ID.unique(),
            data: data
        })
        return newRecord;
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